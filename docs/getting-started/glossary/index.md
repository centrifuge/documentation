---
id: glossary
title: Glossary
category: subpage
---

# Glossary

A reference guide to key terms and concepts used across the Centrifuge documentation.

## Centrifuge-specific terms

**Centrifuge V3**  
The third version of the Centrifuge protocol, designed for scalable, permissionless, and multi-chain asset tokenization.

**RWA (Real-World Asset)**  
A physical or offchain financial asset such as bonds, real estate, or private credit that is tokenized onchain.

**RWA Launchpad**  
The no-code interface for issuers to configure, deploy, and manage tokenized financial products using Centrifuge contracts.

**Hub chain**  
The central coordination chain for a pool. Manages accounting, permissions, share prices, and controls interactions across spoke chains.

**Spoke chain**  
A network where user interaction occurs. Vaults are deployed on spoke chains, and investors deposit or redeem assets there.

**Hub-and-spoke model**  
Centrifuge's multi-chain architecture, where one hub coordinates activity across many spokes.

**Centrifuge ID (centrifugeId)**  
A unique identifier for a supported chain in the Centrifuge protocol. Used to direct communication and actions across chains.

**Pool**  
A unique investment product deployed on Centrifuge, consisting of vaults, share classes, and tokens. Identified by a `poolId`.

**Pool ID (poolId)**  
A globally unique identifier for a pool, derived from the hub chain and local pool index.

**Share class**  
A distinct investment tranche within a pool. Each share class can have different rules, permissions, and associated tokens.

**Share class ID (scId)**  
The identifier for a specific share class within a pool.

**Share token**  
An ERC-20 token representing user ownership in a specific share class. Issued when users invest and burned upon redemption.

**Vault**  
A smart contract that manages deposits, redemptions, and asset allocations for a specific strategy. Vaults can be synchronous or asynchronous.

**Synchronous vault (ERC-4626)**  
A vault where deposits are fulfilled immediately. Shares are minted on deposit; redemptions are typically processed asynchronously.

**Asynchronous vault (ERC-7540)**  
A vault where deposits and redemptions are request-based and processed in batches. Useful for offchain or delayed asset management.

**Pooled vault (ERC-7575)**  
A share token that collects value across multiple vaults. Enables strategies with multiple currencies or layered structures.

**Asset ID (assetId)**  
The identifier for a specific investment currency (ERC-20 or ERC-6909) used in a vault, scoped to a given chain.

**NAV (Net Asset Value)**  
The total value of a vault or share class, representing its current worth based on asset prices and liabilities.

## Token standards

**ERC-20**  
Ethereum's base token standard. Used for share tokens and supported investment currencies.

**ERC-1404**  
An extension of ERC-20 for permissioned tokens. Allows restriction on transfers and redemptions.

**ERC-4626**  
A standard for yield-bearing vaults. Used for synchronous vaults in Centrifuge.

**ERC-7540**  
A request-based vault interface used for asynchronous investing and redeeming.

**ERC-7575**  
A standard that enables a single token to represent positions across multiple vaults. Used for pooled vault strategies.

## User roles

**Issuer**  
Deploys a new pool using the RWA Launchpad. Responsible for onboarding assets and configuring structure and compliance.

**Curator**  
Designs and manages tokenized strategies by composing assets, vaults, and rules. May or may not involve RWAs.

**Investor**  
Deposits capital into vaults and receives share tokens. Can redeem tokens for the underlying assets or exit the strategy.

## Concepts in practice

**Tokenization**  
The process of representing an asset or strategy as an onchain token.

**Redemption**  
The act of converting share tokens back into the original asset or currency, usually through a vault.

**Composability**  
The ability of Centrifuge assets to integrate into DeFi protocols and strategies.