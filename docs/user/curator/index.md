---
id: curator
title: Curator
contributors: <Graham Nelson:graham@k-f.co>
---

# Curators

Curators are strategy designers within the Centrifuge protocol. They create and manage tokenized investment products by configuring vaults, allocating capital, and managing performance. Centrifuge serves as the strategy execution layer—giving curators a programmable, chain-abstracted platform for building custom structured products.

Unlike issuers, curators do not originate RWAs. Instead, they compose strategies using existing assets—including RWA vault tokens, DeFi primitives, or other Centrifuge pools.

## Two types of curator strategies

### 1. Direct-to-user strategies

In this model, curators configure vaults that users can deposit into directly. These vaults are typically structured around a single asset strategy and may use:

- A stablecoin yield vault
- A Centrifuge pool token (e.g. Anemoy RWA vault)
- A fixed-income DeFi position

Users interact directly with the vault. The curator manages allocation, fees, and performance reporting.

**Example**:  
A curator creates a USDC-denominated vault that allocates into a leveraged LRT/ETH strategy. Users deposit directly into the vault.

### 2. Multi-layered strategies via vault tokens

Curators can also build **meta-vaults** by depositing vault tokens (ERC-20) from underlying strategies into a higher-level structure. This enables feeder-fund-style products and simplifies downstream integrations.

All capital flows into the base Centrifuge strategy vault. The curator only needs to manage one vault at the execution layer—simplifying rebalancing, reporting, and risk.

**Example**:  
- Vault A (e.g. Anemoy) holds RWAs  
- Vault B (e.g. LRT strategy) holds staked ETH positions  
- Curator creates Vault C that deposits into both A and B  
- Vault C tokens are deposited into an external aggregator (e.g. Morpho)

This pattern supports composability and abstraction while maintaining a single point of capital execution.

## Why build strategies on Centrifuge?

- **Multi-currency vault infrastructure**  
  Native support for multiple investment assets and ERC-7575 pooled vaults.

- **Composable DeFi & RWA integration**  
  Combine yield-bearing DeFi tokens and tokenized RWAs in a single strategy.

- **Protocol-level abstraction**  
  Manage investment operations cross-chain from a single Hub deployment.

- **Custom vault configuration**  
  Choose between synchronous (ERC-4626) and asynchronous (ERC-7540) flows—or mix both.

- **Fine-grained control via Merkle Proof Manager**  
  Restrict interactions, define strategy rules, and automate execution.

## NAV management

Curators are responsible for managing the Net Asset Value (NAV) of their pools. This includes:

- Tracking underlying asset prices
- Updating NAV onchain
- Ensuring accurate pricing for deposits and redemptions

## Custom UI and integrations

Curators can build custom user interfaces to:

- Streamline investor UX
- Control branding and messaging
- Build analytics or dashboards

## Merkle Proof Manager

> Learn more: [Merkle Proof Manager →](/developer/protocol/managers/merkle-proof-manager/)

The Merkle Proof Manager allows curators to enforce programmable strategies by limiting allowed contract calls.

### Benefits

- Enforces only whitelisted interactions with external protocols
- Locks vault logic into predefined flows
- Enables secure integration with external DeFi protocols

## Summary

Centrifuge gives curators a robust foundation to define, launch, and scale onchain strategies. Whether building direct-to-user vaults or composing layered feeder products, curators benefit from composable infrastructure, chain abstraction, and secure capital management.