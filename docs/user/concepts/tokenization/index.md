---
id: tokenization
title: Tokenization
category: subpage
---

# Tokenization

Tokenization in Centrifuge V3 refers to the process of representing real-world assets (RWAs) or strategies as onchain tokens. These tokens are issued through smart contracts and may be held, transferred, and used across EVM-compatible chains, depending on the permissioning rules set by the pool.

Each tokenized asset is managed within a **vault**, which defines the investment logic, accepted currencies, and redemption mechanics. Once issued, the token becomes the onchain representation of a user’s ownership or claim on the underlying asset strategy.

## Why tokenization?

Tokenization allows assets to become:

- **Transferable** *(when permitted)*: Investors may hold or move share tokens, depending on whether the token is permissioned
- **Composable**: Tokens can integrate into DeFi if the vault and token are designed for it (e.g. deRWA, ERC-4626)
- **Auditable**: All token movements and balances are recorded onchain
- **Programmable**: Issuers and curators can enforce rules and automate strategy logic via smart contracts

Note: Not all tokenized assets are freely transferable. Pools can enforce restrictions on who can hold, invest in, or redeem share tokens.

## What gets tokenized?

Centrifuge can tokenize:

- Real world assets (US Treasuries, Collateral Loan Obligations (CLO's), Indexes and more)
- Onchain assets (e.g. vaults composed of other tokens)
- Strategies that combine both

Tokenization is flexible: products can range from direct credit exposure to complex structured vaults backed by multiple assets.

## How tokenization works in Centrifuge

1. **Create a pool**  
   An issuer or curator deploys a pool on a chosen Hub chain. This pool defines the logic for managing vaults, share classes, and capital flows.

2. **Configure vaults**  
   Vaults are created to accept investment into specific strategies or assets. These vaults can be synchronous (real-time) or asynchronous (request-based).

3. **Deploy tokens**  
   Share tokens (ERC-20) are minted to represent user ownership. Optional modules can enforce compliance (ERC-1404), multi-asset logic (ERC-7575), or asynchronous flows (ERC-7540).

4. **Distribute to users**  
   Investors deposit accepted currencies into the vault and receive share tokens in return.

## Token standards used

Centrifuge uses and extends several Ethereum standards to represent tokenized assets:

- **ERC-20**: Base token standard for share tokens and vault assets
- **ERC-1404**: Optional restrictions for compliance and permissioning
- **ERC-4626**: Standardized vault interface for synchronous deposits
- **ERC-7540**: Request-based vault flow for asynchronous investing/redeeming
- **ERC-7575**: Enables pooled vaults with multiple investment assets

## Examples

- An RWA-backed pool issues share tokens to investors after offchain assets are verified and deposited
- A curator tokenizes a yield strategy using staked ETH and LRTs, offering a wrapped vault token to DeFi investors
- A higher-order strategy tokenizes a portfolio of other Centrifuge vaults, each representing different real world or crypto strategies

## Key takeaways

- Every tokenized position is backed by smart contract logic and chain-native accounting
- Tokenization is modular, issuers and curators choose how to configure their strategy
- Once issued, tokens integrate seamlessly into DeFi or investor portfolios