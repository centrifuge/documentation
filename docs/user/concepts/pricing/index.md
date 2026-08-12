---
id: pricing
title: Pricing
category: subpage
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---

# Pricing

Pricing connects a pool's denomination, its share classes and the investment assets accepted by its vaults. This page explains the prices used for investment operations and how they are kept aligned across networks.

## Share prices

Each share class has its own share price, expressed in the pool's denomination. It represents the value of one token in that class.

The product is valued according to its established valuation methodology. Value is allocated across its share classes, and the manager records and publishes the resulting share prices through the Management app. A share price may rise or fall while an investor's token balance remains unchanged, unless tokens are issued, redeemed or transferred.

## Asset prices

An asset price expresses the value of an investment asset accepted by a vault in the pool's denomination. For example, a vault accepting USDC for a USD-denominated pool may use a price of 1.0, while an asset with a different value requires its own price.

## How vaults combine prices

Vaults use the asset price and share price together to convert between investment assets and share tokens.

For a deposit, the investment asset is first valued in the pool's denomination and then converted into shares. For a redemption, the process is reversed to determine how much of the redemption asset is returned.

For request-based operations, the execution prices are set when the request is fulfilled. They may therefore differ from the prices displayed when the investor submitted the request.

Vaults can enforce maximum ages for share and asset prices. If a required price is outdated, an operation cannot settle until an up-to-date price is available.

## How prices reach every network

Share and asset price updates are managed from the pool's hub and propagated to the networks where the corresponding tokens and vaults are deployed. This keeps the prices used by investors, apps and integrations aligned across the product's deployments.
