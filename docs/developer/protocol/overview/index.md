---
id: overview
title: Overview
category: subpage
contributors: <Jeroen:jeroen@k-f.co>
---

# Overview

The Centrifuge Protocol is an open-source, decentralized protocol for tokenizing and distributing financial products across multiple blockchain networks. Built on immutable smart contracts, it provides the infrastructure for creating customizable asset management products with seamless multi-chain deployment.

The protocol is designed to be **non-opinionated and extensible**, empowering builders to create diverse financial products - from permissioned investment funds to freely tradable tokenized assets, onchain loans, and custom financial structures.

## Key features

### Multi-chain asset management

Using protocol-level [chain abstraction](/developer/protocol/chain-abstraction/), issuers can access and manage liquidity across any supported network while maintaining unified control from a single hub chain. The protocol operates on a hub-and-spoke model where one hub chain handles operational management, accounting, pricing, and investment request processing, while multiple spoke chains act as separate balance sheets where tokens can be issued, transferred, and redeemed. Cross-chain transfers use a secure burn-and-mint mechanism for 1:1 token movement between chains.

### Standards-based composability

The protocol provides vault implementations that integrate seamlessly with the broader DeFi ecosystem. ERC-4626 vaults offer the standard tokenized vault interface for synchronous deposits and redemptions, while ERC-7540 vaults provide an asynchronous standard for request-based investment flows. The protocol also supports ERC-7575, enabling multi-asset vaults where a single share token can be exchanged for multiple accepted assets. These standards enable easy integration with existing DeFi protocols, aggregators, and tools.

### Multi-asset pools

Pools can hold and accept multiple types of onchain assets on its balance sheet. The protocol supports ERC-20 tokens like stablecoins and yield-bearing tokens, and ERC-6909 multi-token standard for scalability. This flexibility enables operators to accept diverse forms of collateral and create sophisticated investment strategies that combine different asset types within a single pool.

### Onchain accounting

The protocol implements fully onchain and automated accounting of tokenized assets across all chains. The Hub maintains a complete double-entry bookkeeping system that records all financial transactions, debiting asset accounts and crediting equity accounts as investments flow through the system. The NAV Manager automatically calculates the Net Asset Value, while the Price Manager computes share prices and pushes oracle updates to all deployed networks. This automation eliminates manual NAV calculations and provides complete transparency into pricing logic and accounting state, with all financial data verifiable onchain in real-time.

## Protocol Architecture

The Centrifuge Protocol operates on a [hub-and-spoke model](/developer/protocol/chain-abstraction/). Each pool selects a single hub chain for management and can tokenize and distribute liquidity on many spoke chains.

![](./images/overview.png)

### Centrifuge Hub

The hub chain serves as the central control and accounting layer for the entire pool. From a single chain of your choice, you can manage all tokens and vaults across every deployment. The hub maintains consolidated accounting using double-entry bookkeeping, tracking all vault balances and holdings in one place. NAV calculations are performed on the hub, with price oracle updates pushed to all networks automatically. Investment requests from all investors across all chains are processed and coordinated centrally, while vault deployments, manager assignments, and configuration updates are orchestrated through the hub.

### Centrifuge Spoke

Spoke chains provide the tokenization and distribution layer where end users interact with the protocol. Each spoke deploys ERC-20 share tokens that are customizable with transfer hooks for compliance and restrictions. Both ERC-4626 and ERC-7540 vaults can be deployed for seamless DeFi integration, with multiple vaults supported per share class to accept different payment assets. Users can bridge their tokens between chains using a secure burn-and-mint process, while local registries track pool and share class deployments on each network.

## Use cases

The protocol's flexible architecture supports a wide range of financial products. You can create permissioned investment funds with tranching, NAV management, and automated accounting, or tokenize individual loans as NFTs and manage them within a pool structure. Build custom yield aggregation strategies that accept multiple asset types, or deploy investment products across multiple chains with unified management from a single hub. The protocol supports compliance-first products through customizable transfer hooks that implement KYC/AML requirements, as well as freely tradable DeFi-native assets that integrate seamlessly with the broader ecosystem.

## Immutable core, modular extensions

The protocol is built on an [immutable core](/developer/protocol/architecture/overview/) that provides a secure foundation, while supporting modular extensions for customization. The immutable core consists of the Hub and Spoke architecture.

On top of this core, the protocol supports pluggable managers for custom logic, including hub managers, balance sheet managers, and request managers. Transfer hooks provide customizable compliance and restriction logic for share tokens. Cross-chain messaging is handled through adapters supporting Wormhole, Axelar, or custom implementations. Valuation modules enable custom NAV calculation and pricing logic tailored to specific asset types.

This architecture enables builders to innovate at the extension layer while maintaining the security guarantees of the immutable core.
