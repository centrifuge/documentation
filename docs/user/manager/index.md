---
id: manager
title: Manager
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---
import JTRSYDashboard from './images/JTRSY_dashboard.jpg';

# Manager guide

Centrifuge gives managers an onchain operations platform for financial products. The manager structures the offering and the Centrifuge Management app becomes the onchain management path for it: issuance, investor access, pricing, distribution and reporting, operated from one interface.

The protocol abstracts the contract level complexity. Managers can configure and operate standard product structures through the app without having to write or deploy code, using controls familiar from traditional financial infrastructure.

<img
  src={JTRSYDashboard}
  className="screenshot"
/>
> Product page with key facts and performance information.

## What managers can build

The platform is flexible enough to represent very different product structures:

- **Tokenized funds**: money market, treasury, credit, fixed income, equity or other pooled vehicles, where the token represents a share of the fund.
- **Funds with multiple share classes**: one product with several tokens, each with its own terms, currency or investor base.
- **DeFi-native yield tokens**: freely transferable tokens designed to circulate in DeFi: tradable on exchanges, usable as collateral, composable with other protocols.
- **Purely onchain strategies**: products with no offchain leg, where a curator allocates capital across onchain venues.
- **Blended portfolios**: products that combine onchain and offchain assets in one structure.
- **Products that invest in other products**: fund-of-funds style structures, where one pool subscribes to the share tokens of another.
- **Multi-currency products**: a single share token can be accessed through different vaults accepting different investment assets.

These are patterns, not fixed templates: access rules, currencies, liquidity terms and operational roles are configured per product.

## The offering, onchain

Creating a product in Centrifuge is not primarily a technical act. It is the onchain reflection of a structure the manager has set up offchain. For purely onchain strategies, it is the structure itself.

That reflection is the pool. The pool represents the product's onchain management: it holds the balance sheet, defines the share classes, and is the place from which the manager controls operations (investors, orders, pricing, liquidity). Everything in the rest of this guide happens within a pool.

Pools are currently set up through an authorized onboarding process. Once registered onchain, they appear in the Management app, where managers configure and operate the product's share classes, tokens, vaults, investor access, pricing and distribution. The details of what that process requires are covered in [Launching a product](/user/manager/launching-a-product).

## Explore

<div className="card-grid">

  <a className="card-tile" href="/user/manager/launching-a-product">
    <h3>Launching a product</h3>
    <p>The launch parameters, hub manager setup and the roles that operate the pool.</p>
  </a>

  <a className="card-tile" href="/user/manager/token-management">
    <h3>Token management</h3>
    <p>The token as the ownership layer: transfer restrictions and investor management.</p>
  </a>

  <a className="card-tile" href="/user/manager/distribution">
    <h3>Distribution</h3>
    <p>Vaults as execution paths, crosschain distribution, pricing and order management.</p>
  </a>

  <a className="card-tile" href="/user/manager/asset-liquidity">
    <h3>Asset and liquidity</h3>
    <p>Asset registration, the holdings view and secure on/off-ramps.</p>
  </a>

  <a className="card-tile" href="/user/manager/operations-automation">
    <h3>Operations and automation</h3>
    <p>The Onchain Portfolio Manager: pre-approved workflows within guardrails.</p>
  </a>

</div>

