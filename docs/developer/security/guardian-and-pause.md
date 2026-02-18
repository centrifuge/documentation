---
id: guardian-and-pause
title: Guardian & pause mechanism
sidebar_position: 3
---

# Guardian & pause mechanism

The protocol is controlled by the Root contract, which has access on all other contracts. The Root contract enforces a 48-hour delay for any upgrades and configuratino changes.

Each deployment has a Guardian role, who is authorized on the Root contract. The Guardian can pause in emergencies, schedule upgrades, and set up adapters to new networks.

Every transaction is verified by third-party signers from [Cantina](https://cantina.xyz/solutions/multisig-security).

| Network          | Guardian |
|------------------|----------|
| Ethereum Mainnet | [`0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6`](https://app.safe.global/home?safe=eth:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| Base             | [`0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6`](https://app.safe.global/home?safe=base:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6)  |
| Arbitrum         | [`0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6`](https://app.safe.global/transactions/history?safe=arb1:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6)  |
| Plume            | [`0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6`](https://safe.onchainden.com/home?safe=plume:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6)  |
| Avalanche        | [`0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6`](https://app.safe.global/home?safe=avax:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6)  |
| BNB Smart Chain  | [`0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6`](https://app.safe.global/home?safe=bnb:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |

## Introduction

At the protocol level, Centrifuge V3 provides a layered safety architecture combining **instant pause capabilities**, **granular outgoing message blocking**, and a **timelocked upgrade process**. These mechanisms are designed to protect user assets while maintaining the ability to respond rapidly to security incidents across a multi-chain deployment.

The protocol separates emergency controls from operational management through two guardian contracts — `ProtocolGuardian` and `OpsGuardian` — each backed by independent multisig Safes. Pausing is instantaneous and requires no timelock, while privilege escalation (granting new ward permissions) always goes through a time-delayed scheduling process. This ensures the community has visibility into proposed upgrades before they take effect.

## Technical architecture

The pause and upgrade system is built on the **ward pattern** — a role-based access control framework inherited by every protocol contract. The `Root` contract sits at the top of the permission hierarchy, holding ward (admin) access on all deployed contracts. Guardian contracts mediate between the multisig Safes and Root, enforcing role separation and access policies.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         Multisig Safes                                  │
│                                                                         │
│   ┌─────────────────────┐           ┌─────────────────────┐            │
│   │   Protocol Safe     │           │     Ops Safe        │            │
│   │   (Security)        │           │   (Operations)      │            │
│   └────────┬────────────┘           └──────────┬──────────┘            │
│            │                                   │                        │
│            ▼                                   ▼                        │
│   ┌─────────────────────┐           ┌─────────────────────┐            │
│   │  ProtocolGuardian   │           │    OpsGuardian      │            │
│   │                     │           │                     │            │
│   │  • pause / unpause  │           │  • initAdapters     │            │
│   │  • scheduleRely     │           │  • wire adapters    │            │
│   │  • cancelRely       │           │  • createPool       │            │
│   │  • blockOutgoing    │           │                     │            │
│   │  • scheduleUpgrade  │           │                     │            │
│   │  • recoverTokens    │           │                     │            │
│   └────────┬────────────┘           └──────────┬──────────┘            │
│            │                                   │                        │
│            └──────────────┬────────────────────┘                        │
│                           ▼                                             │
│                  ┌─────────────────┐                                    │
│                  │      Root       │                                    │
│                  │                 │                                    │
│                  │  • paused flag  │                                    │
│                  │  • delay        │                                    │
│                  │  • schedule     │                                    │
│                  │  • wards        │                                    │
│                  └────────┬────────┘                                    │
│                           │                                             │
│                           │  ward on all contracts                      │
│                           ▼                                             │
│    ┌──────────┬──────────┬──────────┬──────────┬──────────┐            │
│    │ Gateway  │  Spoke   │   Hub    │ Vaults   │  ...     │            │
│    └──────────┴──────────┴──────────┴──────────┴──────────┘            │
└─────────────────────────────────────────────────────────────────────────┘
```

**Figure 1.** Summary of the pause and upgrade access control hierarchy.

## Pause mechanism

The pause functionality is a two-tier system: a **global protocol pause** and **granular per-chain/per-pool outgoing blocking**.

### Global pause

When activated, the global pause sets a boolean flag on the `Root` contract. The `Gateway` — the single routing contract for all cross-chain messages — checks this flag via a `pauseable` modifier before processing any message.

**What is paused:**

| Operation | Contract | Effect |
|---|---|---|
| Incoming message processing | `Gateway.handle()` | Blocks all inbound cross-chain messages |
| Outgoing message sending | `Gateway.send()` | Blocks all outbound cross-chain messages |
| Failed message retries | `Gateway.retry()` | Prevents retrying failed messages |
| Batch repayment | `Gateway.repay()` | Prevents repaying underpaid batches |

**What is NOT paused:**

| Operation | Reason |
|---|---|
| Admin functions (pause, unpause, scheduling) | Must remain accessible during emergencies |
| Local vault operations (deposit, redeem, withdraw) | On-chain operations that don't require cross-chain coordination |
| View functions | Read-only queries are safe |
| `blockOutgoing()` | Must remain callable for additional emergency controls |
| Token recovery | May be needed during an incident |

**Who can pause:**

The `ProtocolGuardian` exposes two levels of authorization for pause:

- **Any individual Safe owner** can call `pause()` instantly — this allows the fastest possible response time in an emergency, since a single signer from the multisig can halt cross-chain messaging without waiting for quorum.
- **Only the full Safe multisig** can call `unpause()` — this prevents a single compromised signer from unilaterally resuming the protocol after a pause.

### Outgoing message blocking

In addition to the global pause, the `Gateway` supports **granular blocking** of outgoing messages on a per-chain, per-pool basis:

```
Gateway.blockOutgoing(centrifugeId, poolId, isBlocked)
```

This allows the protocol to:
- Block messages to a specific destination chain if that chain is compromised or unstable.
- Block messages for a specific pool without affecting others.
- Respond to targeted threats without a full protocol pause.

The `ProtocolGuardian` uses a special `GLOBAL_POOL` (pool ID 0) to block **all** outgoing messages to a given chain, while pool managers can block outgoing messages for their specific pools.

## Upgrade process

The upgrade process uses a **spell pattern** combined with a **timelock**, ensuring all privilege escalation is transparent and auditable.

### Spell pattern

A "spell" is a single-purpose smart contract that encodes a set of admin actions. Rather than granting permanent elevated permissions, the protocol temporarily grants a spell ward access on `Root`, the spell executes its encoded actions, and then the access can be revoked.

### Timelocked scheduling

All new ward permissions on `Root` must go through a time-delayed scheduling process:

```
scheduleRely(target)  →  [wait for delay]  →  executeScheduledRely(target)
```

1. **Schedule**: The `ProtocolGuardian` Safe calls `scheduleRely(spellAddress)`, which records `schedule[target] = block.timestamp + delay` on Root.
2. **Wait**: The timelock delay must elapse before execution.
   - **Mainnet**: 48 hours (172,800 seconds)
   - **Testnet**: 5 minutes (300 seconds)
3. **Execute**: After the delay, **anyone** can call `executeScheduledRely(spellAddress)` to grant the spell ward access. This public execution design ensures no single party can block a legitimate upgrade.
4. **Cancel**: At any point before execution, the `ProtocolGuardian` Safe can call `cancelRely(target)` to abort the scheduled upgrade.

The maximum configurable delay is **4 weeks**, preventing a misconfiguration that could lock the protocol indefinitely.

### Cross-chain upgrades

For spoke chains, the `ProtocolGuardian` can coordinate upgrades cross-chain via dedicated messaging:

- `scheduleUpgrade(centrifugeId, target, refund)` — sends a cross-chain message to schedule a rely on a remote chain's Root.
- `cancelUpgrade(centrifugeId, target, refund)` — cancels a previously scheduled cross-chain upgrade.

This ensures the same timelock and transparency guarantees apply across all chains in the deployment.

### Key design properties

| Property | Mechanism |
|---|---|
| **Instant emergency response** | `pause()` has no timelock |
| **Transparent upgrades** | `scheduleRely()` is publicly visible on-chain during the delay period |
| **Community review window** | 48-hour mainnet delay allows inspection of scheduled spells |
| **Cancellation** | `cancelRely()` can abort any scheduled upgrade before execution |
| **No permanent escalation** | Spells are purpose-built contracts; ward access can be revoked after execution |
| **Public execution** | Anyone can call `executeScheduledRely()` once the delay has passed |

## Access control framework

### Ward pattern

Every protocol contract inherits the `Auth` mixin, which implements the ward pattern:

```solidity
mapping(address => uint256) public wards;  // 1 = authorized, 0 = not

modifier auth() {
    require(wards[msg.sender] == 1, NotAuthorized());
    _;
}

function rely(address user) public auth;  // Grant ward access
function deny(address user) public auth;  // Revoke ward access
```

Root is the top-level ward on all contracts and can manage wards on any contract through `relyContract()` and `denyContract()`.

### Guardian roles

| Guardian | Controlled By | Responsibilities | Pause Authority |
|---|---|---|---|
| **ProtocolGuardian** | Protocol Safe (multisig) | Pausing, upgrades, adapter reconfiguration, cross-chain operations, token recovery | Yes — Safe or individual owners can pause; only Safe can unpause |
| **OpsGuardian** | Ops Safe (multisig) | Adapter initialization, network wiring, pool creation | No |

On **mainnet**, both Safes are Gnosis Safe multisigs. On **testnet**, they may be EOAs for operational convenience.

### ProtocolGuardian access control

```
┌─────────────────────────────────────────────────┐
│              ProtocolGuardian                    │
├──────────────────────┬──────────────────────────┤
│    onlySafeOrOwner   │        onlySafe          │
│    ──────────────    │        ────────           │
│    • pause()         │  • unpause()             │
│                      │  • scheduleRely()        │
│                      │  • cancelRely()          │
│                      │  • scheduleUpgrade()     │
│                      │  • cancelUpgrade()       │
│                      │  • blockOutgoing()       │
│                      │  • recoverTokens()       │
│                      │  • file()                │
└──────────────────────┴──────────────────────────┘
```

The asymmetric access for `pause()` (any owner) vs `unpause()` (full multisig) is an intentional design decision: pausing should be as fast as possible during an emergency, while unpausing requires the full governance quorum to prevent premature resumption.

## Recovery mechanisms

### Token recovery

The `TokenRecoverer` contract enables authorized recovery of tokens accidentally sent to protocol contracts. It uses an atomic **grant → execute → revoke** pattern:

1. `root.relyContract(target, self)` — temporarily grants itself ward access on the target contract.
2. `target.recoverTokens(token, to, amount)` — executes the recovery.
3. `root.denyContract(target, self)` — immediately revokes its own access.

All three steps execute in a single transaction, ensuring no lingering permissions. The `ProtocolGuardian` can also trigger cross-chain token recovery via `recoverTokens()`.

### Recovery adapters

The multi-adapter messaging system supports **recovery adapters** — special adapters that allow authenticated parties to manually inject messages into the protocol when normal cross-chain bridges fail.

The `MultiAdapter` uses a quorum-based voting system with up to 8 adapters per route. When a message arrives through an adapter, its vote is counted. Once the quorum threshold is reached, the message is processed. Recovery adapters participate in voting but are treated specially: their votes cannot create "debt" (go below zero), preventing them from blocking future messages.

**Example**: With adapters `[LayerZero, Axelar, RecoveryAdapter]`, a threshold of 2, and recovery index of 2:
- Normal operation: LayerZero + Axelar both deliver → threshold met → message processed.
- If Axelar fails: RecoveryAdapter can inject the missing vote to reach threshold.
- Recovery adapter votes don't accumulate negatively, so they remain available for future use.

### Failed message handling

The `Gateway` tracks messages that fail during processing in a `failedMessages` mapping. These can be retried via `Gateway.retry()` once the underlying issue is resolved (assuming the protocol is not paused).

Similarly, batches that couldn't be sent due to insufficient gas payment are tracked as `underpaid` and can be repaid and retried via `Gateway.repay()`.
