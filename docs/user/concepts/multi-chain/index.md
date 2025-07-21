---
id: multi-chain
title: Multi-Chain Protocol
category: subpage
contributors: <Graham Nelson:graham@k-f.co>
---

# Multi-Chain Protocol

Centrifuge V3 is designed to scale tokenized asset management across blockchains. Using a **hub-and-spoke architecture**, each pool is managed from a single hub chain while operating vaults and issuing tokens on multiple spoke chains.

This makes Centrifuge truly multi-chain, giving investors and managers a consistent experience wherever they operate.

## What does this solve?

In most protocols, issuing tokens on multiple chains means maintaining separate contracts, price feeds, wallets, and accounting per chain. This creates silos, increases overhead, and fragments liquidity.

![](./images/hub-and-spoke.png)

Centrifuge avoids this by keeping one unified source of truth on the hub chain, while letting vaults and tokens live across networks like Ethereum, Base, or Arbitrum.

## How it works

Each pool selects a **hub chain**, which acts as the central control point. This is where:

- Investment requests are approved
- Vault pricing and NAV are updated
- Tokens and strategies are registered
- Accounting is consolidated

From there, the pool can launch vaults and share tokens on any number of **spoke chains**. These are the chains where users interact with the product and capital is deployed.

## As an investor

- You can invest on any supported chain where the vault is deployed  
- You interact locally, while pricing and approvals are handled on the hub  
- You never need to manage gas across multiple networks  
- You receive the same experience no matter which chain you choose  

## As a manager

- You choose a single hub chain to coordinate your pool  
- You deploy vaults on the spoke chains that match your liquidity goals  
- You do not need to replicate logic or infrastructure across chains  
- You stay in control of share prices, NAV, and asset flows from one place  

## What the hub does

The **hub chain** is where all logic and coordination happens:

- Maintains share class metadata and pricing  
- Tracks NAV and accounting across all vaults  
- Approves or denies deposit and redemption requests  
- Pushes share and asset prices to oracles on each network  

## What the spokes do

**Spoke chains** are where users interact and assets are moved:

- Vaults accept deposits and redemptions  
- Share tokens are minted or burned  
- Assets are allocated into external strategies  
- Vault logic can include ERC-4626 or ERC-7540 flows  

Vaults can be synchronous, asynchronous, or hybrid depending on how the manager configures them.

## Cross-chain coordination

Behind the scenes, Centrifuge handles messaging between the hub and spokes with built-in reliability and efficiency:

### Message aggregation  
Each cross-chain message is verified using multiple interoperability providers to improve security.

### Batching  
Messages are bundled together to reduce gas usage and keep processing fast.

### Gas abstraction  
Users do not need to hold gas tokens across chains. Pools can cover or subsidize transaction costs.

### Retry and repayment  
If a message fails or runs out of gas, it is retried automatically or repaid without manual work.

## Summary

Centrifuge’s multi-chain protocol gives you:

- Unified control of your pool from a single hub  
- Vault access on any supported network  
- Secure, automated cross-chain messaging  
- A consistent experience for both investors and managers  

This design eliminates the need to duplicate logic or infrastructure and removes the complexity of scaling across chains.

> Want to learn more about how the messaging system works?  
> See the [developer documentation on chain abstraction](/developer/protocol/chain-abstraction/)