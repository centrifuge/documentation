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
A vault with instant execution: deposits are fulfilled immediately and shares are minted in the same transaction. Redemptions remain request-based.

**Asynchronous vault (ERC-7540)**  
A vault with request-based execution: deposits and redemptions become orders that the issuer processes, and the investor then claims the result. Useful for offchain or delayed asset management.

**Pooled vault (ERC-7575)**  
A share token that collects value across multiple vaults. Enables strategies with multiple currencies or layered structures.

**Asset ID (assetId)**  
The identifier for a specific investment currency (ERC-20 or ERC-6909) used in a vault, scoped to a given chain.

**NAV (Net Asset Value)**  
The total value of a vault or share class, representing its current worth based on asset prices and liabilities.

**Balance sheet**  
The pool's onchain record of the assets it holds.

**Deposit capacity**  
The bound an issuer sets on how much liquidity a synchronous vault accepts.

**On/off-ramp**  
The issuer-side rails that control how assets move in and out of a pool: accepted assets, authorized relayers and approved withdrawal addresses.

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

**Whitelist**  
The set of addresses approved by the issuer to interact with a product. Maintained per network: approval on one network does not carry over to another.

**Order**  
A deposit or redemption request waiting to be processed by the issuer.

**Claim**  
The final step of a request-based operation: collecting the tokens (after a deposit) or the funds (after a redemption) once the issuer has processed the order.

**Freeze**  
The issuer's ability to block a specific address from operating with the token.