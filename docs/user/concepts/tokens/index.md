---
id: tokens
title: Tokens
category: subpage
contributors: <Graham Nelson:graham@k-f.co>
---

# Tokens

In Centrifuge, tokens represent ownership in a vault or pool. They are the interface for investors to hold, redeem, or interact with tokenized strategies.

Each token follows standard Ethereum formats, but can also include additional logic for permissioning, compliance, or cross-chain behavior.

## Share tokens

Every share class in a pool has its own **share token**. These tokens:

- Represent a claim on the pool’s assets or yield  
- Follow the ERC-20 standard (so they work in most wallets and DeFi apps)  
- Are issued when a user deposits, and burned when they redeem  

Share tokens are deployed on **spoke chains** where users interact with vaults.

### Example

A pool might include:

- A senior share token: permissioned for institutional investors  
- A junior share token: open to all users  

Both tokens exist across the same spoke chains, but have different rules and risk profiles.

## Permissioning

Not all share tokens are open to everyone. Depending on the pool configuration, tokens can include **transfer restrictions**.

Centrifuge supports multiple permissioning options:

- **Fully permissionless**: anyone can invest, redeem, or transfer  
- **Restricted redemptions**: deposits are open, but redemptions require approval  
- **Full restrictions**: all transfers require whitelisting  
- **Freeze only**: users are unrestricted unless explicitly frozen  

This is enforced using smart contract hooks that control who can interact with the token.

## Token behavior across chains

Although a token may be visible on multiple chains, it behaves as **one unified asset**. The Hub coordinates:

- Total supply  
- Valuation  
- Redemption logic  

Users can invest or redeem on any chain where the vault is deployed. All state changes are synced through Centrifuge’s messaging system.

## How token pricing works

Each token has a price per share that is updated by the pool manager on the Hub. This price reflects the value of the vault’s underlying assets and is used to:

- Issue the correct number of shares when someone deposits  
- Calculate how much someone receives when redeeming  

Prices are pushed to local oracles on each chain so external contracts and apps can fetch the current value.

## Summary

Tokens in Centrifuge give users access to onchain investment strategies in a familiar ERC-20 format, but with built-in support for:

- Compliance and permissioning  
- Accurate cross-chain accounting  
- Dynamic share pricing and redemption logic  

Whether you’re holding tokens in your wallet or using them in DeFi, they represent real positions in tokenized, managed assets.