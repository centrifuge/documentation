---
id: custom-balance-sheet-managers
title: Custom balance sheet managers
category: subpage
contributors: <Jeroen:jeroen@centrifuge.io>
---

# Custom balance sheet managers

The [balance sheet](../../architecture/spoke/) is the non-custodial contract that holds a pool's assets and shares on each chain. A balance sheet manager is an address authorized to move and account for those assets through the balance sheet's API. By writing your own manager, you can build pool-specific logic directly on top of the protocol's accounting primitives.

The protocol's own [`AsyncRequestManager`](https://github.com/centrifuge/protocol/blob/main/src/vaults/AsyncRequestManager.sol) is a balance sheet manager, and the best reference implementation to read when building your own.

## What they can do

A balance sheet manager calls into the balance sheet to:

- Move assets in and out: `deposit` assets into the balance sheet, `withdraw` them to a recipient.
- Earmark assets: `reserve` an amount so it is set aside and cannot be moved by other flows, and `unreserve` it when no longer earmarked.
- Update onchain accounting: `noteDeposit` and `noteWithdraw` record movements against the pool's double-entry accounting without moving tokens.
- Flush queued state cross-chain: `submitQueuedAssets` and `submitQueuedShares`.

Reserving, unreserving, and the note calls all operate per share class, so the `scId` parameter selects which holdings a call applies to. For a pool with both USHP and sUSHP holdings, the same manager handles each by passing the matching `scId`.

:::warning Reservations are shared across managers
A reservation is recorded on the balance sheet itself, not on the manager that made it. All balance sheet managers for a pool share the same reserved balances: any manager can reserve or unreserve, and a reservation blocks every manager from withdrawing those assets. The `reserver` and `reason` arguments are bookkeeping tags, not access control, so coordinate reservation logic across managers if a pool uses more than one.
:::

## Permissions

To authorize a manager for a pool on a given chain, a Hub manager calls `updateBalanceSheetManager` (see [Manage assets](../../guides/manage-assets/) for configuring a balance sheet manager):

```solidity
function updateBalanceSheetManager(
    PoolId poolId,
    uint16 centrifugeId, // chain where the manager operates
    bytes32 who,         // the manager address
    bool canManage,      // true to grant, false to revoke
    address refund
) external payable;
```

## API options

All of these live on the balance sheet. `asset` is the token address and `tokenId` is `0` for ERC-20s (non-zero for ERC-6909 / ERC-721).

```solidity
// move tokens
function deposit(PoolId poolId, ShareClassId scId, address asset, uint256 tokenId, uint128 amount)
    external payable;

function withdraw(
    PoolId poolId, ShareClassId scId, address asset, uint256 tokenId,
    address receiver, uint128 amount, WithdrawMode mode
) external payable;

// earmark tokens (reason is a uint32 tag, e.g. a deposit/redeem reason)
function reserve(
    PoolId poolId, ShareClassId scId, address asset, uint256 tokenId,
    uint128 amount, address reserver, uint32 reason
) external payable;

function unreserve(
    PoolId poolId, ShareClassId scId, address asset, uint256 tokenId,
    uint128 amount, address reserver, uint32 reason
) external payable;

// record against onchain accounting (no token movement)
function noteWithdraw(PoolId poolId, ShareClassId scId, address asset, uint256 tokenId, uint128 amount)
    external payable returns (D18 pricePoolPerAsset);

function noteDeposit(PoolId poolId, ShareClassId scId, address asset, uint256 tokenId, uint128 amount)
    external payable returns (D18 pricePoolPerAsset);
```

### Withdraw modes

`withdraw` takes a `WithdrawMode` controlling whether tokens are escrowed, transferred, or both:

```solidity
enum WithdrawMode {
    TransferOnly,       // transfer out, no escrow bookkeeping
    EscrowAndTransfer,  // move through escrow, then transfer to the receiver
    Full
}
```

Use `EscrowAndTransfer` when settling a redemption to a user.

## Testing

Because a custom manager touches the full deposit, redeem, and accounting path, test it against a real deployment rather than mocks. See [Write integration tests](../write-integration-tests/) for the `CentrifugeIntegrationTestWithUtils` base contract, which sets up a pool and lets you test your manager against the full flow.
