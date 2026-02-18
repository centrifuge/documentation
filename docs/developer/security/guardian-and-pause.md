---
id: guardian-and-pause
title: Guardian & pause mechanism
sidebar_position: 3
---

# Guardian & pause mechanism

The protocol is controlled by the `Root` contract, which holds admin (ward) access on all other contracts. All privilege escalation goes through a timelocked scheduling process, giving the community visibility before changes take effect.

Two guardian contracts mediate between governance multisigs and `Root`, each with distinct responsibilities and separate Safe multisigs.

## Guardian addresses

All deployments share a single deterministic guardian address:

| Network          | Address |
|------------------|---------|
| Ethereum Mainnet | [0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6](https://app.safe.global/home?safe=eth:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| Base             | [0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6](https://app.safe.global/home?safe=base:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| Arbitrum         | [0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6](https://app.safe.global/transactions/history?safe=arb1:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| Plume            | [0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6](https://safe.onchainden.com/home?safe=plume:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| Avalanche        | [0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6](https://app.safe.global/home?safe=avax:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| BNB Smart Chain  | [0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6](https://app.safe.global/home?safe=bnb:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |

## Guardian roles

### ProtocolGuardian

Controlled by the Protocol Safe multisig. Handles emergency response and protocol-level changes.

| Capability | Who can call |
|---|---|
| Pause the protocol | **Any individual Safe owner** — no quorum needed for fastest emergency response |
| Unpause the protocol | **Full Safe multisig only** — prevents premature resumption by a single signer |
| Schedule or cancel upgrades | Full Safe multisig only |
| Schedule or cancel cross-chain upgrades | Full Safe multisig only |
| Block outgoing messages to a chain | Full Safe multisig only |
| Trigger cross-chain token recovery | Full Safe multisig only |

### OpsGuardian

Controlled by the Ops Safe multisig. Handles day-to-day operational tasks. Has no pause authority.

| Capability | Who can call |
|---|---|
| Initialize cross-chain adapters | Full Safe multisig only |
| Wire adapters to networks | Full Safe multisig only |
| Create pools | Full Safe multisig only |

## Pause mechanism

### Global pause

When activated, `Root.pause()` sets a `paused` flag. The `Gateway` — the single routing contract for all cross-chain messages — checks this flag before processing any message.

**Paused operations:**

| Operation | Effect |
|---|---|
| Incoming message processing (`Gateway.handle`) | All inbound cross-chain messages blocked |
| Outgoing message sending (`Gateway.send`) | All outbound cross-chain messages blocked |
| Failed message retries (`Gateway.retry`) | Cannot retry previously failed messages |
| Underpaid batch repayment (`Gateway.repay`) | Cannot repay and resend underpaid batches |

**Not paused:**

| Operation | Reason |
|---|---|
| Admin functions (pause, unpause, scheduling) | Must remain accessible during emergencies |
| Local vault operations (deposit, redeem, withdraw) | On-chain operations that don't involve cross-chain messaging |
| Outgoing message blocking | Must remain callable for additional emergency controls |
| View functions | Read-only queries are always safe |

### Per-chain outgoing message blocking

In addition to the global pause, the protocol supports granular blocking of outgoing messages per destination chain. The `ProtocolGuardian` can block **all** outgoing messages to a specific chain without a full protocol pause.

Pool managers can also block outgoing messages for their specific pools through the Gateway directly, enabling pool-level isolation.

## Upgrade process

All privilege changes on `Root` follow a timelocked scheduling process.

### How it works

1. **Schedule** — The Protocol Safe calls `ProtocolGuardian.scheduleRely(target)`, which records the target and a future execution timestamp on `Root`.
2. **Wait** — The timelock delay must elapse. The scheduled change is visible on-chain during this window.
   - **Mainnet:** 48 hours
   - **Testnet:** 5 minutes
   - Maximum configurable delay: **4 weeks** (prevents misconfiguration that could lock the protocol)
3. **Execute** — After the delay, **anyone** can call `Root.executeScheduledRely(target)` to complete the upgrade. This public execution ensures no single party can block a legitimate upgrade.
4. **Cancel** — At any point before execution, the Protocol Safe can call `cancelRely(target)` to abort.

### Spell pattern

Upgrades use single-purpose "spell" contracts. A spell encodes a specific set of admin actions. The process grants the spell temporary admin access, the spell executes its actions, and the access is then revoked. This avoids granting permanent elevated permissions.

### Cross-chain upgrades

The `ProtocolGuardian` can coordinate upgrades on spoke chains via cross-chain messaging. `scheduleUpgrade` and `cancelUpgrade` send messages to schedule or cancel a rely on a remote chain's `Root`, applying the same timelock and transparency guarantees across all chains.

## Token recovery

The `TokenRecoverer` contract can recover tokens accidentally sent to protocol contracts. It uses an atomic single-transaction flow:

1. Temporarily grant itself permission on the target contract
2. Execute the token recovery
3. Immediately revoke its own permission

All three steps happen in one transaction — there is no window where extra permissions linger.

The `ProtocolGuardian` can also trigger token recovery on remote chains via cross-chain messaging.

## Multi-adapter messaging

Cross-chain messages are routed through a `MultiAdapter` that supports up to 8 adapters per route (e.g., LayerZero, Axelar, Chainlink CCIP). The system uses quorum-based voting: each adapter that delivers a message adds a vote, and once the configured threshold is reached, the message is processed.

### Recovery adapters

One or more adapters in a route can be designated as recovery adapters. If a primary adapter fails to deliver a message, a recovery adapter can inject the missing vote to reach the threshold.

Recovery adapter votes are consumed when used but are designed so they cannot accumulate negative balances. This prevents a recovery adapter from blocking future messages while still allowing it to fill in for failed primary adapters.

## Access control

Every protocol contract inherits the `Auth` mixin, which implements the ward pattern:

- Each contract maintains a mapping of authorized addresses (`wards`)
- `rely(address)` grants access; `deny(address)` revokes it
- All admin functions check this mapping before executing
- `Root` sits at the top of the hierarchy and can manage permissions on any contract via `relyContract` and `denyContract`
