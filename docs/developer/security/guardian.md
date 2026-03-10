---
id: guardian
title: Guardian
sidebar_position: 3
---

# Guardian

The protocol is controlled by the `Root` contract, an immutable smart contract that holds admin (ward) access on all other contracts. `Root` has no direct external access. The only way to interact with it is through the guardian contracts, which mediate between governance multisigs and `Root`.

The two guardian contracts each have distinct responsibilities and separate Safe multisigs.

## Timelock

All privilege escalation through `Root` goes through a 48-hour timelock. Changes must be scheduled first, then can only be executed after the delay has passed. This gives the community visibility into upcoming changes and time to react before they take effect.

## Guardian roles

The `ProtocolGuardian` is controlled by the Protocol Safe multisig and handles emergency response and protocol-level changes, including pausing, upgrades, and cross-chain operations. Every transaction is verified by third-party signers from [Cantina](https://cantina.xyz/solutions/multisig-security). The protocol can respond to emergencies instantly, with full resumption requiring multisig consensus.

The `OpsGuardian` is controlled by a separate Ops Safe multisig and handles day-to-day operational tasks such as adapter initialization, network wiring, and pool creation. It has no pause authority.

## Protocol guardian addresses

The protocol guardian is deployed at `0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6` on all networks.

| Network          | Address |
|------------------|---------|
| Ethereum | [0xCEb7...35c6](https://app.safe.global/home?safe=eth:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| Base | [0xCEb7...35c6](https://app.safe.global/home?safe=base:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| Arbitrum | [0xCEb7...35c6](https://app.safe.global/transactions/history?safe=arb1:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| Avalanche | [0xCEb7...35c6](https://app.safe.global/home?safe=avax:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| Plume | [0xCEb7...35c6](https://safe.onchainden.com/home?safe=plume:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| BNB Smart Chain | [0xCEb7...35c6](https://app.safe.global/home?safe=bnb:0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| Optimism | [0xCEb7...35c6](https://optimistic.etherscan.io/address/0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| HyperEVM | [0xCEb7...35c6](https://hyperevmscan.io/address/0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |
| Monad | [0xCEb7...35c6](https://monadscan.com/address/0xCEb7eD5d5B3bAD3088f6A1697738B60d829635c6) |

## Ops guardian addresses

The ops guardian is deployed at `0x055589229506Ee89645EF08ebE9B9a863486d0dE` on all networks.

| Network          | Address |
|------------------|---------|
| Ethereum | [0x0555...0dE](https://etherscan.io/address/0x055589229506Ee89645EF08ebE9B9a863486d0dE) |
| Base | [0x0555...0dE](https://basescan.org/address/0x055589229506Ee89645EF08ebE9B9a863486d0dE) |
| Arbitrum | [0x0555...0dE](https://arbiscan.io/address/0x055589229506Ee89645EF08ebE9B9a863486d0dE) |
| Avalanche | [0x0555...0dE](https://snowscan.xyz/address/0x055589229506Ee89645EF08ebE9B9a863486d0dE) |
| Plume | [0x0555...0dE](https://explorer.plume.org/address/0x055589229506Ee89645EF08ebE9B9a863486d0dE) |
| BNB Smart Chain | [0x0555...0dE](https://bscscan.com/address/0x055589229506Ee89645EF08ebE9B9a863486d0dE) |
| Optimism | [0x0555...0dE](https://optimistic.etherscan.io/address/0x055589229506Ee89645EF08ebE9B9a863486d0dE) |
| HyperEVM | [0x0555...0dE](https://hyperevmscan.io/address/0x055589229506Ee89645EF08ebE9B9a863486d0dE) |
| Monad | [0x0555...0dE](https://monadscan.com/address/0x055589229506Ee89645EF08ebE9B9a863486d0dE) |

## Pause mechanism

When activated, the global pause halts all cross-chain messaging, both inbound and outbound. Local vault operations (deposit, redeem, withdraw) are not affected, as they don't involve cross-chain coordination.

The protocol also supports granular blocking of outgoing messages per destination chain, allowing targeted response without a full protocol pause.

## Access control

Every protocol contract inherits the `Auth` mixin, which implements the ward pattern, a role-based access control framework where each contract maintains a mapping of authorized addresses. `Root` sits at the top of the hierarchy and can manage permissions on any contract.
