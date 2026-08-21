---
id: pool-access-levels
title: Pool access levels
sidebar_position: 4
---

# Pool access levels

The protocol supports granular permissioning at the pool level. Rather than relying on a single admin key, each pool can assign distinct roles with scoped authority, limiting what each actor can do and where they can operate.

## Hub manager

The hub manager is the top-level role for a pool. It controls pool configuration, share class management, accounting, and cross-chain deployment. The hub manager role is assigned during [pool creation](/developer/protocol/guides/create-a-pool/) and can be granted to additional addresses by calling `updateHubManager` on the [`Hub`](https://github.com/centrifuge/protocol/blob/main/src/core/hub/interfaces/IHub.sol) contract.

Hub managers can:

* Add and configure share classes
* Set share and asset prices
* Manage onchain accounting (journal entries, holdings, valuations)
* Deploy vaults and notify remote chains
* Assign balance sheet managers, [request managers](#request-manager), and gateway managers
* Configure cross-chain adapter sets per destination chain

Multiple addresses can hold the hub manager role simultaneously, enabling multisig workflows or delegation to operational tooling.

:::warning
Any hub manager can grant or revoke the hub manager role for other addresses. Pools should carefully control which addresses hold this role.
:::

## Balance sheet manager

Balance sheet managers control asset movement into and out of a pool on a specific chain. The hub manager grants this role per chain by calling `updateBalanceSheetManager`, and the assignment is propagated cross-chain to the [`BalanceSheet`](https://github.com/centrifuge/protocol/blob/main/src/core/spoke/interfaces/IBalanceSheet.sol) contract on the target chain.

Balance sheet managers can:

* Deposit and withdraw assets from the pool escrow
* Reserve and unreserve assets for pending operations
* Issue and revoke share tokens
* Submit queued asset and share updates to the hub

This separation means asset custody operations are independent from pool configuration. A balance sheet manager cannot modify share classes, change prices, or alter the pool's accounting structure.

## Request manager

The request manager runs the deposit and redemption request lifecycle for a pool. The hub manager assigns it by calling `setRequestManager` on the [`Hub`](https://github.com/centrifuge/protocol/blob/main/src/core/hub/interfaces/IHub.sol) contract. A single call registers the hub-side manager for the pool and target chain, and propagates the spoke-side manager address to that chain.

The role has two halves:

* **Hub-side request manager** ([`IHubRequestManager`](https://github.com/centrifuge/protocol/blob/main/src/core/hub/interfaces/IHubRequestManager.sol)): registered per pool and per remote chain. It is the only address the hub accepts request callbacks from, so it is the only actor that can tell a spoke chain that deposits were approved, that shares were issued or revoked, or that a request was fulfilled.
* **Spoke-side request manager** ([`ISpokeRequestManager`](https://github.com/centrifuge/protocol/blob/main/src/core/spoke/interfaces/ISpokeRequestManager.sol)): registered per pool on each spoke chain. It is the only address allowed to forward investor requests from that chain to the hub.

Request managers can:

* Approve pending deposit and redeem requests in batches, at an asset price supplied by the caller
* Issue and revoke shares for approved batches, at a share price supplied by the caller
* Force-cancel a request, but only where the investor has already submitted a cancellation
* Forward investor requests from a spoke chain to the hub, and deliver the resulting callbacks back to the vault

Request managers cannot configure share classes, set pool prices, touch holdings or accounting, or change adapters. The role also carries no custody rights on its own. Moving assets in or out of the pool escrow and issuing or revoking share tokens require the balance sheet manager role, which is granted separately. In the default deployment the same contract holds both roles, so the spoke-side request manager is also a balance sheet manager.

Claiming stays outside the role. Once shares are issued or revoked, `notifyDeposit` and `notifyRedeem` are permissionless, so a request manager cannot stop an investor from claiming a settled request.

:::warning
Approval and issuance prices are supplied by the request manager, and approvals are manager-initiated. A request manager that stops approving can stall redemptions, and pools should treat the role as price-critical. Setting it to an address that cannot handle requests halts all deposit and redeem flow for that pool on that chain.
:::

The protocol ships [`BatchRequestManager`](https://github.com/centrifuge/protocol/blob/main/src/vaults/BatchRequestManager.sol) as the hub-side implementation, which maintains the epoch and batching logic, and [`AsyncRequestManager`](https://github.com/centrifuge/protocol/blob/main/src/vaults/AsyncRequestManager.sol) as the spoke-side implementation for asynchronous vaults. See [manage a pool](/developer/protocol/guides/manage-a-pool/) for the request lifecycle and [deploy vaults](/developer/protocol/guides/deploy-vaults/) for the setup calls.

## On/off ramp manager

The [`OnOfframpManager`](https://github.com/centrifuge/protocol/blob/main/src/managers/spoke/OnOfframpManager.sol) is a specialized balance sheet manager for fiat on/off ramp flows. It introduces a relayer model that further restricts who can trigger withdrawals.

* Onramping is permissionless. Once an asset is enabled for onramp, anyone can trigger a deposit into the pool after transferring tokens to the manager.
* Offramping is permissioned. Only designated relayers can trigger withdrawals, and only to pre-approved offramp addresses.

The pool admin configures three independent permission sets through the hub:

* Onramp assets, controlling which tokens can be deposited
* Relayers, controlling which addresses can trigger withdrawals
* Offramp destinations, controlling which asset-receiver pairs are valid withdrawal targets

All three must align for a withdrawal to succeed: the caller must be a relayer, the destination must be an approved offramp, and the asset must be registered. This layered design prevents unauthorized fund movement even if a single key is compromised.

See the [on/off ramp manager](/developer/protocol/managers/on-offramp-manager/) documentation for implementation details.

## Merkle proof manager

The [`MerkleProofManager`](https://github.com/centrifuge/protocol/blob/main/src/managers/spoke/MerkleProofManager.sol) enables programmable allocation policies enforced through merkle proofs. Instead of granting broad balance sheet access, the pool admin assigns per-strategist policies that define exactly which operations a strategist can perform.

Each strategist is assigned a policy root, a merkle root that encodes the set of allowed calls. When a strategist executes an operation, they provide a merkle proof demonstrating that the call matches their policy. The contract verifies the proof against the stored root before executing.

This means:

* Different strategists can have different permissions on the same pool
* Policies can restrict by target contract, function selector, and parameter values
* Updating a strategist's policy requires only a single root update from the hub, with no per-function permission changes

The merkle proof approach supports delegation structures where multiple parties manage different aspects of a pool's assets, each operating within strictly defined boundaries. See the [merkle proof manager](/developer/protocol/managers/merkle-proof-manager/) documentation for implementation details.

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

The hook is set per share class during [pool creation](/developer/protocol/guides/create-a-pool/) and can be updated by the hub manager through `updateShareHook`. This makes the compliance layer fully upgradeable. If regulatory requirements change, the pool can deploy a new hook contract and switch to it without redeploying the share token itself. The hook contract receives contextual information about the transfer type (deposit, redemption, cross-chain transfer) through standardized address patterns, enabling different rules for different operation types.

The `updateRestriction` function allows the hub to push restriction updates to hooks on remote chains, so investor permissions can be managed centrally from the hub and propagated across all chains where the token is deployed.
