---
id: guardian-and-pause
title: Guardian & pause mechanism
sidebar_position: 3
---

# Guardian & pause mechanism

The protocol is controlled by the `Root` contract, which holds admin (ward) access on all other contracts. All privilege escalation goes through a timelocked scheduling process, giving the community visibility before changes take effect.

Two guardian contracts mediate between governance multisigs and `Root`, each with distinct responsibilities and separate Safe multisigs.

Every transaction is verified by third-party signers from [Cantina](https://cantina.xyz/solutions/multisig-security).

## Guardian roles

The `ProtocolGuardian` is controlled by the Protocol Safe multisig and handles emergency response and protocol-level changes, including pausing, upgrades, and cross-chain operations. The protocol can respond to emergencies instantly, with full resumption requiring multisig consensus.

The `OpsGuardian` is controlled by a separate Ops Safe multisig and handles day-to-day operational tasks such as adapter initialization, network wiring, and pool creation. It has no pause authority.

## Guardian addresses

| Network          | Address |
|------------------|---------|
| Ethereum Mainnet | [0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6](https://app.safe.global/home?safe=eth:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| Base             | [0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6](https://app.safe.global/home?safe=base:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| Arbitrum         | [0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6](https://app.safe.global/transactions/history?safe=arb1:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| Plume            | [0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6](https://safe.onchainden.com/home?safe=plume:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| Avalanche        | [0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6](https://app.safe.global/home?safe=avax:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| BNB Smart Chain  | [0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6](https://app.safe.global/home?safe=bnb:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |

## Pause mechanism

When activated, the global pause halts all cross-chain messaging — both inbound and outbound. Local vault operations (deposit, redeem, withdraw) are not affected, as they don't involve cross-chain coordination.

The protocol also supports granular blocking of outgoing messages per destination chain, allowing targeted response without a full protocol pause.

## Upgrade process

All privilege changes on `Root` follow a timelocked scheduling process:

1. **Schedule** — The Protocol Safe schedules an upgrade, which records the target and a future execution timestamp on `Root`.
2. **Wait** — The timelock delay must elapse. The scheduled change is visible onchain during this window.
   - **Mainnet:** 48 hours
   - Maximum configurable delay: **4 weeks**
3. **Execute** — After the delay, anyone can trigger the upgrade. This public execution ensures no single party can block a legitimate upgrade.
4. **Cancel** — At any point before execution, the Protocol Safe can abort the scheduled upgrade.

Upgrades use single-purpose "spell" contracts that encode a specific set of admin actions. The process grants the spell temporary admin access, the spell executes its actions, and the access is then revoked. This avoids granting permanent elevated permissions.

The same timelock and transparency guarantees apply across all chains in the deployment.

## Access control

Every protocol contract inherits the `Auth` mixin, which implements the ward pattern — a role-based access control framework where each contract maintains a mapping of authorized addresses. `Root` sits at the top of the hierarchy and can manage permissions on any contract.
