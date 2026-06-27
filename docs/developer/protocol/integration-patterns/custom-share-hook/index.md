---
id: custom-share-hook
title: Custom share hook
category: subpage
contributors: <Jeroen:jeroen@centrifuge.io>
---

# Custom share hook

The [token compliance](/developer/protocol/features/token-compliance/) page gives an overview of the hook system and the four built-in compliance profiles. This page covers how to extend [`BaseTransferHook`](https://github.com/centrifuge/protocol/blob/main/src/hooks/BaseTransferHook.sol) to build a custom profile.

:::info Scope of this page
`BaseTransferHook` and the handlers described here are designed for the protocol's existing vault and `AsyncRequestManager` setup. If you deploy a fully custom vault, these hooks may not be called or may not apply in full. Verify against your vault's transfer path.
:::

## Callbacks

The share token calls into the hook on every transfer. [`ITransferHook`](https://github.com/centrifuge/protocol/blob/main/src/core/spoke/interfaces/ITransferHook.sol) defines three entry points:

```solidity
// Called on every standard ERC-20 transfer. Can revert to block the transfer.
// Must return ITransferHook.onERC20Transfer.selector on success.
function onERC20Transfer(address from, address to, uint256 value, HookData calldata hookData)
    external returns (bytes4);

// Called on authorized transfers (mint, burn, protocol-internal moves).
// Cannot block the transfer; return value is ignored. Override only to update state.
function onERC20AuthTransfer(address sender, address from, address to, uint256 value, HookData calldata hookData)
    external returns (bytes4);

// View-only pre-check. Called before submission to surface eligibility without executing.
function checkERC20Transfer(address from, address to, uint256 value, HookData calldata hookData)
    external view returns (bool);
```

In `BaseTransferHook`, `onERC20Transfer` delegates to `checkERC20Transfer` and reverts if it returns `false`. `onERC20AuthTransfer` is a no-op by default (it cannot be blocked). `checkERC20Transfer` is abstract and must be implemented.

## Transfer type classifiers

`BaseTransferHook` provides a set of view helpers that identify what kind of transfer is occurring, based on the `from`/`to` address pattern:

```solidity
function isDepositRequestOrIssuance(address from, address to) external view returns (bool);
function isDepositFulfillment(address from, address to) external view returns (bool);
function isDepositClaim(address from, address to) external view returns (bool);
function isRedeemRequest(address from, address to) external pure returns (bool);
function isRedeemFulfillment(address from, address to) external view returns (bool);
function isRedeemClaimOrRevocation(address from, address to) external view returns (bool);
function isCrosschainTransfer(address from, address to) external view returns (bool);
function isCrosschainTransferExecution(address from, address to) external view returns (bool);
```

Use these in your `checkERC20Transfer` implementation to apply different rules per transfer type. For example, to require membership for deposits but allow free peer-to-peer transfers:

```solidity
function checkERC20Transfer(address from, address to, uint256, HookData calldata hookData)
    public view override returns (bool)
{
    if (isSourceOrTargetFrozen(from, to, hookData)) return false;
    if (isDepositRequestOrIssuance(from, to)) return isTargetMember(to, hookData);
    return true;
}
```

## hookData: per-address storage

Every address holding share tokens carries 16 bytes of custom data (`hookData`), stored alongside its token balance. The struct has two fields, one for each side of a transfer:

```solidity
struct HookData {
    bytes16 from; // hook data for the sender
    bytes16 to;   // hook data for the receiver
}
```

`BaseTransferHook` uses these 16 bytes with a fixed layout:

- **Upper 8 bytes (bits 127–64):** `validUntil`, a `uint64` Unix timestamp. The address is a valid member until this time.
- **Bit 0 (least significant):** freeze flag. Set to `1` to freeze the address.

The remaining bits are unused and available for custom extensions. The 16-byte limit exists because hook data is packed with the token balance in a single storage slot.

Two view helpers decode this for you:

```solidity
function isSourceMember(address from, HookData calldata hookData) external view returns (bool);
function isTargetMember(address to, HookData calldata hookData) external view returns (bool);
function isSourceOrTargetFrozen(address from, address to, HookData calldata hookData) external view returns (bool);
```

## Hook managers

The hub manager can authorize per-token managers on each spoke that can update hook state locally, without a cross-chain Hub round-trip. This is useful for compliance oracles or KYC providers that need to act immediately on a single chain.

A manager is granted via a Hub-side `updateContract` call that encodes a `TrustedCall.UpdateHookManager` payload. Once authorized, the manager can call:

```solidity
// Add or extend a member's validity window
function updateMember(address token, address user, uint64 validUntil) external;

// Set or clear the freeze bit for an address
function freeze(address token, address user) external;
function unfreeze(address token, address user) external;
```

These calls take effect immediately on the spoke where they are submitted. For changes that need to propagate to every chain, use the Hub-driven `updateRestriction` path instead, which uses the same [sync parameters](../sync-parameters-across-chains/) pattern.

Note that endorsed protocol addresses and pool escrows cannot be frozen or added as members; the hook enforces this.

## Updating the hook

The hook contract is set per share class and can be replaced at any time. The hub manager calls `updateShareHook` to point the share token at a new hook contract without redeploying the token. This makes the compliance layer fully upgradeable: if regulatory requirements change, deploy a new hook and switch to it.
