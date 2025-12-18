---
id: defi-workflows
title: DeFi Workflows
sidebar_position: 3
---

# DeFi Workflows

Centrifuge brings real-world assets into the DeFi ecosystem. Because share tokens are standard ERC-20s, they can be integrated into various DeFi protocols to unlock liquidity and utility.

## Lending & Borrowing

Tokenized assets can serve as collateral in lending markets.
- **MakerDAO**: Centrifuge assets have been used as collateral to mint DAI.
- **Aave / Compound**: Potential integration allows share tokens to be supplied as collateral to borrow stablecoins.

## Yield Aggregation

DeFi protocols can aggregate yield from Centrifuge pools.
- **ERC-4626 Vaults**: Protocols can deposit stablecoins into Centrifuge synchronous vaults to earn RWA yield programmatically.

## Secondary Markets

While primary issuance happens through the pool, secondary trading can occur on AMMs if permissions allow.
- **Liquidity Pools**: Restricted share tokens can be traded on permissioned liquidity pools.
- **OTC**: Large blocks can be traded over-the-counter between whitelisted institutions.

## Automating Strategies

Smart contacts can be written to:
1. Rebalance portfolios between different RWA vaults.
2. Automatically reinvest yield.
3. Programmably redeem based on risk parameters.
