---
id: pool-access-levels
title: Pool access levels
sidebar_position: 4
---

# Pool access levels

The protocol supports granular permissioning at the pool level. Rather than relying on a single admin key, each pool can assign distinct roles with scoped authority, limiting what each actor can do and where they can operate.

## Hub manager

The hub manager is the top-level role for a pool. It controls pool configuration, share class management, accounting, and cross-chain deployment. A pool admin grants this role by calling `updateHubManager` on the [`Hub`](https://github.com/centrifuge/protocol/blob/main/src/core/hub/interfaces/IHub.sol) contract.

Hub managers can:

* Add and configure share classes
* Set share and asset prices
* Manage onchain accounting (journal entries, holdings, valuations)
* Deploy vaults and notify remote chains
* Assign balance sheet managers, request managers, and gateway managers
* Configure cross-chain adapter sets per destination chain

Multiple addresses can hold the hub manager role simultaneously, enabling multisig workflows or delegation to operational tooling.

## Balance sheet manager

Balance sheet managers control asset movement into and out of a pool on a specific chain. The hub manager grants this role per chain by calling `updateBalanceSheetManager`, and the assignment is propagated cross-chain to the [`BalanceSheet`](https://github.com/centrifuge/protocol/blob/main/src/core/spoke/interfaces/IBalanceSheet.sol) contract on the target chain.

Balance sheet managers can:

* Deposit and withdraw assets from the pool escrow
* Reserve and unreserve assets for pending operations
* Issue and revoke share tokens
* Submit queued asset and share updates to the hub

This separation means asset custody operations are independent from pool configuration. A balance sheet manager cannot modify share classes, change prices, or alter the pool's accounting structure.

## On/off ramp manager

The [`OnOfframpManager`](https://github.com/centrifuge/protocol/blob/main/src/managers/spoke/OnOfframpManager.sol) is a specialized balance sheet manager for fiat on/off ramp flows. It introduces a relayer model that further restricts who can trigger withdrawals.

* Onramping is permissionless. Once an asset is enabled for onramp, anyone can trigger a deposit into the pool after transferring tokens to the manager.
* Offramping is permissioned. Only designated relayers can trigger withdrawals, and only to pre-approved offramp addresses.

The pool admin configures three independent permission sets through the hub:

* Onramp assets, controlling which tokens can be deposited
* Relayers, controlling which addresses can trigger withdrawals
* Offramp destinations, controlling which asset-receiver pairs are valid withdrawal targets

All three must align for a withdrawal to succeed: the caller must be a relayer, the destination must be an approved offramp, and the asset must be registered. This layered design prevents unauthorized fund movement even if a single key is compromised.

## Merkle proof manager

The [`MerkleProofManager`](https://github.com/centrifuge/protocol/blob/main/src/managers/spoke/MerkleProofManager.sol) enables programmable allocation policies enforced through merkle proofs. Instead of granting broad balance sheet access, the pool admin assigns per-strategist policies that define exactly which operations a strategist can perform.

Each strategist is assigned a policy root, a merkle root that encodes the set of allowed calls. When a strategist executes an operation, they provide a merkle proof demonstrating that the call matches their policy. The contract verifies the proof against the stored root before executing.

This means:

* Different strategists can have different permissions on the same pool
* Policies can restrict by target contract, function selector, and parameter values
* Updating a strategist's policy requires only a single root update from the hub, with no per-function permission changes

The merkle proof approach supports delegation structures where multiple parties manage different aspects of a pool's assets, each operating within strictly defined boundaries.

## Gateway manager

The gateway manager controls cross-chain message flow for a specific pool. The hub manager grants this role per chain by calling `updateGatewayManager`, and the assignment is propagated to the [`Gateway`](https://github.com/centrifuge/protocol/blob/main/src/core/messaging/Gateway.sol) contract on the target chain.

Gateway managers can block outgoing messages for their pool on a specific destination chain. This provides a pool-level circuit breaker: if suspicious activity is detected, the pool's gateway manager can halt cross-chain operations for that pool without affecting other pools or requiring a protocol-wide pause.

This complements the protocol-level pause mechanism (controlled by the protocol guardian) with a pool-specific control that the pool operator themselves can activate.

## Multi-adapter security

Pools can configure their own cross-chain security by choosing which general message passing (GMP) adapters to use and how many must confirm each message. The hub manager calls `setAdapters` to configure per-chain adapter sets with:

* Multiple adapters, sending messages through several independent GMP providers (LayerZero, Wormhole, Chainlink, Axelar)
* A confirmation threshold, setting the minimum number of adapters that must deliver a message before it is processed
* Recovery adapters, providing backup adapters that can be used if a primary adapter fails

This [multi-message aggregation](/developer/protocol/features/chain-abstraction/#multi-message-aggregation) model means no single interoperability provider can compromise a pool's cross-chain operations. A pool handling high-value transactions can require three out of four adapters to confirm, while a pool with lower risk tolerance might operate with a single adapter for cost efficiency. Each pool makes this tradeoff independently.

## Transfer hooks

[Transfer hooks](https://github.com/centrifuge/protocol/blob/main/src/core/spoke/interfaces/ITransferHook.sol) enable custom compliance rules per share token. Every share token transfer triggers a callback to the token's configured hook contract, which can approve or block the transfer based on custom logic.

Hooks can enforce:

* Investor whitelisting and transfer restrictions
* Jurisdiction-based compliance rules
* Holding period requirements
* Any custom validation logic the pool requires

The hook is set per share class and can be updated by the hub manager through `updateShareHook`. This makes the compliance layer fully upgradeable. If regulatory requirements change, the pool can deploy a new hook contract and switch to it without redeploying the share token itself. The hook contract receives contextual information about the transfer type (deposit, redemption, cross-chain transfer) through standardized address patterns, enabling different rules for different operation types.

The `updateRestriction` function allows the hub to push restriction updates to hooks on remote chains, so investor permissions can be managed centrally from the hub and propagated across all chains where the token is deployed.
