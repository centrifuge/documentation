---
id: sync-parameters-across-chains
title: Sync parameters across chains
category: subpage
contributors: <Jeroen:jeroen@centrifuge.io>
---

# Sync parameters across chains

When a custom contract holds parameters that need to change over time, such as a Merkle root, a fee rate, or an allowlist, those updates often need to land on every chain where the contract is deployed. The contract update pattern lets you make these changes from the Hub and have them propagate to each spoke chain natively, so you don't manage a separate update flow per chain.

## When to use this

Use this pattern for any contract whose parameters are controlled by the pool and may change after deployment. Common cases:

- Updating a Merkle root that authorizes a strategist's workflows
- Changing fee parameters on a custom manager
- Rotating an address or toggling a configuration flag

## Implement `ITrustedContractUpdate`

Your contract implements [`ITrustedContractUpdate`](https://github.com/centrifuge/protocol/blob/main/src/core/utils/interfaces/IContractUpdate.sol). The protocol calls `trustedCall` on your contract when an update is triggered from the Hub. The call carries the pool and share class it applies to, plus an opaque `payload` that your contract decodes and acts on.

```solidity
interface ITrustedContractUpdate {
    /// @notice Triggers an update on the target contract.
    /// @dev    Sent from the trusted hub manager role.
    function trustedCall(PoolId poolId, ShareClassId scId, bytes calldata payload) external;
}
```

A minimal implementation guards the caller, decodes the payload into the parameter you want to change, and applies it. The only authorized caller is the protocol's contract updater, whose address your contract stores at deployment. This mirrors the protocol's own [`OnchainPM`](https://github.com/centrifuge/protocol/blob/main/src-ir/OnchainPM.sol#L52-L64), which updates a strategist's policy root this way.

```solidity
contract MyManager is ITrustedContractUpdate {
    address public immutable contractUpdater; // the protocol's update entrypoint
    PoolId public immutable poolId;

    mapping(bytes32 strategist => bytes32 root) public policy;

    function trustedCall(PoolId poolId_, ShareClassId, bytes calldata payload) external {
        require(poolId == poolId_, InvalidPoolId());
        require(msg.sender == contractUpdater, NotAuthorized());

        (bytes32 strategist, bytes32 newRoot) = abi.decode(payload, (bytes32, bytes32));
        policy[strategist] = newRoot;
        emit UpdatePolicy(strategist, newRoot);
    }
}
```

The `payload` is whatever your contract and the Hub caller agree on, here a `(strategist, root)` pair. Encode an update kind into it if your contract supports more than one kind of update.

:::info Trusted vs untrusted
`ITrustedContractUpdate.trustedCall` is reserved for updates originating from the trusted hub manager role on the Hub. The sibling [`IUntrustedContractUpdate.untrustedCall`](https://github.com/centrifuge/protocol/blob/main/src/core/utils/interfaces/IContractUpdate.sol) handles updates that anyone can submit on the spoke side and additionally passes `centrifugeId` and `sender`, which your contract MUST validate.
:::

## Trigger updates from the Hub

A Hub manager triggers the update by calling `updateContract` on the Hub. The `target` is your contract's address on the destination chain (as `bytes32`), and `payload` is the encoded parameter your `trustedCall` expects.

```solidity
function updateContract(
    PoolId poolId,
    ShareClassId scId,
    uint16 centrifugeId,    // chain where the target contract lives
    bytes32 target,         // your contract on that chain
    bytes calldata payload, // decoded by trustedCall
    uint128 extraGasLimit,  // extra gas for the remote call
    address refund          // receives excess gas
) external payable;
```

Because messaging is native to the Hub, a single call already crosses to the target chain. To update the same contract on several chains at once, batch the calls with `multicall` (the Hub inherits `IBatchedMulticall`):

```solidity
hub.multicall([
    abi.encodeCall(hub.updateContract, (poolId, scId, chainA, target, payload, extraGas, refund)),
    abi.encodeCall(hub.updateContract, (poolId, scId, chainB, target, payload, extraGas, refund))
    // ...
]);
```

Each entry is routed to its `centrifugeId` and delivered to that chain's `trustedCall`. The `scId` lets one call target a specific share class, so the same payload shape can update per-share-class parameters.

## Worked example: rotating a Merkle root across two chains

To rotate the authorized Merkle root for a pool deployed on two spoke chains, encode the new root as the payload and batch one `updateContract` per chain:

```solidity
bytes memory payload = abi.encode(newRoot);

hub.multicall([
    abi.encodeCall(hub.updateContract, (poolId, scId, chainA, managerOnA, payload, extraGas, refund)),
    abi.encodeCall(hub.updateContract, (poolId, scId, chainB, managerOnB, payload, extraGas, refund))
]);
```

Both chains receive the new root in one transaction from the Hub, and your `trustedCall` implementation writes it into storage on each.
