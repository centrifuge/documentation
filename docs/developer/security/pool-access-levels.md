---
id: pool-access-levels
title: Pool access levels
sidebar_position: 4
---

# Pool access levels

The protocol supports granular permissioning at the pool level. Rather than relying on a single admin key, each pool can assign distinct roles with scoped authority, limiting what each actor can do and where they can operate.

This page documents the responsibilities and permissions of each pool role. Protocol-wide powers are separate and sit with the [guardian](/developer/security/guardian/). Source references point at the deployed v3.2 code.

## Pool roles

:::info[Roles are scoped, not hierarchical]
The hub manager appoints every other role, but beyond that the roles do not inherit each other's powers. A balance sheet manager cannot reconfigure a pool, and a request manager cannot move assets. Most roles are also granted per chain, so an assignment on one network confers nothing on another.
:::

### Hub manager

The hub manager is the top-level role for a pool. It controls pool configuration, share class management, accounting, and cross-chain deployment. The role is assigned during [pool creation](/developer/protocol/guides/create-a-pool/) and granted to further addresses through `updateHubManager` on the [`Hub`](https://github.com/centrifuge/protocol/blob/87c358fa52bea91017fc3a848bc07db815eed91c/src/core/hub/interfaces/IHub.sol) contract.

* **Recommended approach**: A multisig or an institutional-grade MPC wallet, with signing authority distributed across separate parties. A single EOA is discouraged for production pools.
* **Impact of compromise**: Full control of the pool. A compromised hub manager can appoint every other role, set arbitrary prices, settle investor requests, and reconfigure the pool's cross-chain security. There is no pool-level recovery path, only the protocol-wide [guardian](/developer/security/guardian/) pause.

#### Capabilities

* Multiple addresses can hold this role, enabling multisig workflows or delegation to operational tooling.
* Grant and revoke the hub manager role for any address, including itself (`updateHubManager`).
* Add and configure share classes (`addShareClass`, `updateShareClassMetadata`, `updateShareHook`).
* Set and publish share and asset prices (`updateSharePrice`, `notifySharePrice`, `notifyAssetPrice`).
* Manage onchain accounting, including journal entries, holdings, and valuations (`updateJournal`, `initializeHolding`, `updateHoldingValuation`, `createAccount`).
* Deploy vaults and notify remote chains (`updateVault`, `notifyPool`, `notifyShareClass`).
* Approve and settle investor requests, and force-cancel them (see [request manager](#request-manager)).
* Assign balance sheet managers (`updateBalanceSheetManager`), request managers (`setRequestManager`), and gateway managers (`updateGatewayManager`).
* Configure the pool's per-chain manager contracts, including strategist policies and ramp permissions (`updateContract`).
* Configure cross-chain adapter sets per destination chain (`setAdapters`).

:::warning
Any hub manager can grant or revoke the hub manager role for other addresses. Pools should carefully control which addresses hold this role.
:::

### Balance sheet manager

Balance sheet managers control asset movement into and out of a pool on a specific chain. The hub manager grants the role per chain through `updateBalanceSheetManager`, and the assignment is propagated cross-chain to the [`BalanceSheet`](https://github.com/centrifuge/protocol/blob/87c358fa52bea91017fc3a848bc07db815eed91c/src/core/spoke/interfaces/IBalanceSheet.sol) contract on the target chain.

This separation means asset custody operations are independent from pool configuration.

* **Recommended approach**: A purpose-built manager contract, such as the [on/off ramp](#onoff-ramp) or the [Onchain PM](#onchain-pm-strategist), so that asset movement is constrained by onchain policy rather than by trust in a key. Where a key holds the role directly, use a multisig.
* **Impact of compromise**: Loss of the assets the pool holds on that chain, and unbacked issuance of share tokens. The role cannot change pool configuration, and the damage is contained to the chains where it was granted.

#### Capabilities

* Multiple addresses can hold this role, granted per chain.
* Deposit and withdraw assets from the pool escrow.
* Reserve and unreserve assets for pending operations.
* Issue and revoke share tokens.
* Submit queued asset and share updates to the hub.

Balance sheet managers cannot modify share classes, change prices, or alter the pool's accounting structure.

### Request manager

The request manager is the pool's authorized conduit for deposit and redemption requests. It is a contract role rather than a key role, and it defines which contract is allowed to carry request traffic between the hub and a spoke chain. The hub manager assigns it through `setRequestManager`, and a single call registers the hub-side manager and propagates the spoke-side address to the target chain.

The role has two halves:

* **Hub-side request manager** ([`IHubRequestManager`](https://github.com/centrifuge/protocol/blob/87c358fa52bea91017fc3a848bc07db815eed91c/src/core/hub/interfaces/IHubRequestManager.sol)), registered per pool and per remote chain. It is the only address `Hub.requestCallback` accepts, so it is the only contract that can tell a spoke chain that deposits were approved, that shares were issued or revoked, or that a request was fulfilled.
* **Spoke-side request manager** ([`IRequestManager`](https://github.com/centrifuge/protocol/blob/87c358fa52bea91017fc3a848bc07db815eed91c/src/core/interfaces/IRequestManager.sol)), registered per pool on each spoke chain. It is the only address `Spoke.request` accepts, so it is the only contract that can forward investor requests to the hub, and the only one the spoke delivers request callbacks to.

The protocol ships [`BatchRequestManager`](https://github.com/centrifuge/protocol/blob/87c358fa52bea91017fc3a848bc07db815eed91c/src/vaults/BatchRequestManager.sol) as the hub-side implementation, which holds the epoch and batching logic, and [`AsyncRequestManager`](https://github.com/centrifuge/protocol/blob/87c358fa52bea91017fc3a848bc07db815eed91c/src/vaults/AsyncRequestManager.sol) as the spoke-side implementation for asynchronous vaults.

* **Recommended approach**: The shipped manager pair. A pool that deploys its own request manager should treat it as fund-critical code, because the hub forwards its callback payloads to the spoke without inspecting them.
* **Impact of compromise**: A malicious hub-side request manager can fabricate settlement callbacks, which mints shares or inflates an investor's withdrawable balance against the pool escrow. Registering an address that cannot handle requests halts all deposit and redeem flow for that pool on that chain.

#### Capabilities

* One hub-side manager per pool and remote chain, and one spoke-side manager per pool on each chain.
* Emit request callbacks from the hub to a spoke chain, covering approved deposits, issued and revoked shares, and fulfilled requests (`Hub.requestCallback`).
* Forward investor deposit, redeem, and cancellation requests from a spoke chain to the hub (`Spoke.request`).

The request manager role carries no custody rights on its own. Moving assets in or out of the pool escrow and issuing or revoking share tokens require the balance sheet manager role, which is granted separately. In the default deployment the same contract holds both, so `AsyncRequestManager` is also a balance sheet manager.

:::info[Settlement decisions belong to the hub manager]
Approving requests and pricing them are not powers of the request manager role. On `BatchRequestManager`, `approveDeposits`, `approveRedeems`, `issueShares`, `revokeShares`, `forceCancelDepositRequest`, and `forceCancelRedeemRequest` are all gated on the caller being a hub manager of the pool, and each takes a price supplied by that caller. A hub manager that stops approving can stall redemptions indefinitely, though `notifyDeposit` and `notifyRedeem` are permissionless, so no role can prevent an investor from claiming a request that has already settled.
:::

See [manage a pool](/developer/protocol/guides/manage-a-pool/) for the request lifecycle and [deploy vaults](/developer/protocol/guides/deploy-vaults/) for the setup calls.

### On/off ramp

The [`OnOffRamp`](https://github.com/centrifuge/protocol/blob/87c358fa52bea91017fc3a848bc07db815eed91c/src/managers/spoke/OnOffRamp.sol) contract is a specialized balance sheet manager for fiat on/off ramp flows. It introduces a relayer model that further restricts who can trigger withdrawals.

Onramping is permissionless. Once an asset is enabled for onramp, anyone can trigger a deposit into the pool after transferring tokens to the contract. Offramping is permissioned. Only designated relayers can trigger withdrawals, and only to pre-approved offramp addresses.

* **Recommended approach**: A hot key or bot for the relayer, since the destinations it can reach are already fixed onchain, together with a multisig for the hub manager that configures those destinations.
* **Impact of compromise**: A compromised relayer can move assets only to addresses the pool has already approved, so it can mistime a withdrawal but not redirect it. Redirecting funds requires the hub manager.

#### Capabilities

* Multiple relayers can be enabled per pool.
* Trigger a withdrawal to an approved destination (`withdraw`), subject to all three permission sets below.

The hub manager configures three independent permission sets through the hub:

* Onramp assets, controlling which tokens can be deposited.
* Relayers, controlling which addresses can trigger withdrawals.
* Offramp destinations, controlling which asset-receiver pairs are valid withdrawal targets.

All three must align for a withdrawal to succeed. The caller must be a relayer, the destination must be an approved offramp, and the asset must be registered. This layered design prevents unauthorized fund movement even if a single key is compromised.

See the [on/off ramp manager](/developer/protocol/managers/on-offramp-manager/) documentation for implementation details.

### Onchain PM strategist

The Onchain Portfolio Manager (Onchain PM) is the pool's execution layer for recurring operations such as subscribing, redeeming, rebalancing, and moving liquidity. Instead of granting broad balance sheet access to an operator, the hub manager assigns each strategist a policy that defines exactly which operations that strategist can perform. One Onchain PM is deployed per pool.

Each strategist is assigned a policy root, a merkle root committing to the set of scripts they may run. When a strategist executes an operation, they submit the script together with a merkle proof, and the contract verifies the script's hash against the strategist's stored root before executing. A script commits to its sequence of calls, including target contracts and function selectors, and pins the parameter values the hub manager chose to fix. Remaining parameters are left for the strategist to supply at run time.

* **Recommended approach**: A hot key or bot per strategist, with the policy root narrowed to the smallest set of scripts the strategy needs, and with parameters that carry risk pinned in the policy rather than left open.
* **Impact of compromise**: Bounded by that strategist's policy root. A compromised strategist can only run scripts their root already authorizes, and cannot widen the set. It can still choose any unpinned parameter, so limits that matter should be pinned or enforced by a guard.

#### Capabilities

* Multiple strategists can be assigned, each with an independent policy root.
* Execute any script whose hash is proven against the strategist's policy root, along with the callbacks that script declares.

Strategists hold no permissions of their own. The Onchain PM executes on the pool's behalf, so it is registered as a balance sheet manager, and a strategist's authority is ultimately scoped balance sheet authority.

Policies are set by the hub manager, and updating a strategist's policy requires only a single root update, with no per-function permission changes. This supports delegation structures where several parties manage different aspects of a pool's assets, each operating within strictly defined boundaries.

Scripts can also call the pool's guard contracts, which enforce limits that a merkle policy cannot express on its own:

* **Approval guard**: requires that a set of ERC-20 allowances is zero.
* **Circuit breaker guard**: caps throughput or rate of change over a rolling time window.
* **Slippage guard**: brackets a sequence of calls and rejects it if realized slippage exceeds a configured bound.

See the [Onchain PM](/developer/protocol/managers/merkle-proof-manager/) documentation for implementation details, and the [curator guide](/user/curator/) for the operating model.

### Gateway manager

The gateway manager controls cross-chain message flow for a specific pool. The hub manager grants the role per chain through `updateGatewayManager`, and the assignment is propagated to the [`Gateway`](https://github.com/centrifuge/protocol/blob/87c358fa52bea91017fc3a848bc07db815eed91c/src/core/messaging/Gateway.sol) contract on the target chain.

This complements the protocol-level pause mechanism, controlled by the [guardian](/developer/security/guardian/), with a pool-specific control that the pool operator themselves can activate.

* **Recommended approach**: A monitoring bot or a fast-response multisig, since the value of the role lies in how quickly it can react.
* **Impact of compromise**: A compromised gateway manager can halt the pool's own cross-chain messaging, denying service to that pool's investors. It cannot move assets, alter pool state, or affect other pools.

#### Capabilities

* Multiple addresses can hold this role, granted per chain.
* Block outgoing messages for their pool on a specific destination chain.

This provides a pool-level circuit breaker. If suspicious activity is detected, the pool's gateway manager can halt cross-chain operations for that pool without affecting other pools or requiring a protocol-wide pause.

## Multi-adapter security

Pools can configure their own cross-chain security by choosing which general message passing (GMP) adapters to use and how many must confirm each message. The hub manager calls `setAdapters` to configure per-chain adapter sets with:

* Multiple adapters, sending messages through several independent GMP providers (LayerZero, Wormhole, Chainlink, Axelar)
* A confirmation threshold, setting the minimum number of adapters that must deliver a message before it is processed
* Recovery adapters, providing backup adapters that can be used if a primary adapter fails

This [multi-message aggregation](/developer/protocol/features/chain-abstraction/#multi-message-aggregation) model means no single interoperability provider can compromise a pool's cross-chain operations. A pool handling high-value transactions can require three out of four adapters to confirm, while a pool with lower risk tolerance might operate with a single adapter for cost efficiency. Each pool makes this tradeoff independently.

## Transfer hooks

[Transfer hooks](https://github.com/centrifuge/protocol/blob/87c358fa52bea91017fc3a848bc07db815eed91c/src/core/spoke/interfaces/ITransferHook.sol) enable custom compliance rules per share token. Every share token transfer triggers a callback to the token's configured hook contract, which can approve or block the transfer based on custom logic.

Hooks can enforce:

* Investor whitelisting and transfer restrictions
* Jurisdiction-based compliance rules
* Holding period requirements
* Any custom validation logic the pool requires

The hook is set per share class during [pool creation](/developer/protocol/guides/create-a-pool/) and can be updated by the hub manager through `updateShareHook`. This makes the compliance layer fully upgradeable. If regulatory requirements change, the pool can deploy a new hook contract and switch to it without redeploying the share token itself. The hook contract receives contextual information about the transfer type (deposit, redemption, cross-chain transfer) through standardized address patterns, enabling different rules for different operation types.

The `updateRestriction` function allows the hub to push restriction updates to hooks on remote chains, so investor permissions can be managed centrally from the hub and propagated across all chains where the token is deployed.
