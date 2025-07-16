---
id: tokenization
title: Tokenization
category: subpage
---

# Tokenization

Tokenization in Centrifuge V3 is the process of representing assets or strategies as onchain tokens. These tokens are issued through smart contracts and reflect ownership in a vault, governed by rules set at the pool and share class level.

Each tokenized asset is created and managed through a **pool**, which contains one or more **vaults**, and each vault issues **share tokens** to investors. These tokens may be held, transferred, and used across supported EVM-compatible networks, depending on how the pool is configured.

> Learn more:  
> - [What is a pool?](/user/concepts/pools)  
> - [How vaults work](/user/concepts/vaults)  
> - [Understanding share tokens](/user/concepts/tokens)

:::info
Not all tokenized assets are freely transferable. Pools define permissioning rules that control who can hold, invest in, or redeem share tokens.
:::

## Why tokenization?

Tokenization enables assets to become:

- **Transferable** *(when permitted)*: Users may hold or move share tokens based on pool-level permissions
- **Composable**: Tokens can integrate into DeFi if designed to follow standards like ERC-4626 or deRWA
- **Auditable**: All transactions, balances, and ownership records are transparently recorded onchain
- **Programmable**: Rules and strategies are enforced using smart contracts

## What gets tokenized?

Centrifuge can tokenize many types of assets and strategies, including:

- **Real world assets**: US Treasuries, real estate, credit, carbon, or consumer finance  
- **Onchain assets**: Tokens, staked positions, or DeFi strategies  
- **Structured products**: Combinations of both onchain and offchain exposures

Tokenization is flexible. Products can range from direct credit exposure to complex multi-asset vaults or portfolio strategies.

## How tokenization works in Centrifuge

1. **Create a pool**  
   A manager launches a pool on a selected hub chain. The pool defines capital flow, share classes, and permissioning.

2. **Configure vaults**  
   Vaults are deployed to accept specific currencies and invest in target assets. They define whether flows are synchronous or asynchronous.

3. **Deploy tokens**  
   Each share class issues a share token (ERC-20 compatible), optionally including modules for compliance, multi-asset handling, or async workflows.

4. **Distribute to investors**  
   Investors deposit into vaults and receive share tokens that represent their claim on the strategy.

## Token standards used

Centrifuge builds on Ethereum token standards to support flexible, compliant tokenization:

- **ERC-20**: Base standard for share tokens and vault balances  
- **ERC-1404**: Enables permissioning and compliance rules  
- **ERC-4626**: Vault standard for synchronous investing  
- **ERC-7540**: Request-based standard for asynchronous flows  
- **ERC-7575**: Allows pooled vaults with multiple investment assets

## Examples

- A tokenized real estate fund issues permissioned share tokens to accredited investors  
- A DeFi-native strategy wraps staked ETH and LSTs into a vault, offering a token to DeFi protocols  
- A curated portfolio combines several Centrifuge vaults into one share class backed by diverse assets

## Key takeaways

- Tokenization connects assets and strategies to onchain liquidity using programmable, standard-based tokens  
- Pools define the rules and permissions, vaults define the investment flows, and tokens represent the user’s ownership  
- Once issued, share tokens can be held, redeemed, or integrated across DeFi and institutional platforms