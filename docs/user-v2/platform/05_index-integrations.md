---
id: index-integrations
title: Index-Integrations
---

# Index-Integrations

Centrifuge pools and vaults are designed to be composable and easily integrated into broader DeFi indices and portfolio strategies.

## Composability by Design

Share tokens issued by Centrifuge vaults are **ERC-20 compliant**, making them chemically compatible with the vast majority of DeFi protocols. This allows them to be:

- Included in **Tokenized Indices** (e.g., a diversified RWA index)
- Used as collateral in **Lending Markets**
- Traded on **AMMs** (subject to permissioning)

## Integration Standards

Integrators can leverage standard interfaces to interact with Centrifuge assets:

- **ERC-4626**: For synchronous, atomic deposits and withdrawals. Ideal for integrating with yield aggregators and simple index products.
- **ERC-7540**: For handling asynchronous requests, critical for assets that require off-chain settlement or specific valuation cycles.

## Use Cases

### Diversified RWA Portfolios
Managers can create a "fund of funds" or an index token that holds shares from multiple Centrifuge pools. This provides investors with diversified exposure across different asset classes (e.g., Credit, Real Estate, Treasury Bills) through a single token.

### On-chain Structured Products
Developers can build structured products that tranche risk or combine yield from Centrifuge assets with other DeFi primitives, creating tailored risk-return profiles for different investor types.
