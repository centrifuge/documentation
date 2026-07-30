---
id: issuer
title: Issuer
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---
import deJTRSYDashboard from './images/deJTRSY_dashboard.jpg';

# Issuer guide

Centrifuge gives issuers and asset managers an onchain operations platform for financial products. The issuer structures the offering and the Centrifuge Management app becomes the onchain management path for it: issuance, investor access, pricing, distribution and reporting, operated from one interface.

The protocol abstracts the contract-level complexity. Issuers can configure and operate standard product structures through the app without having to write or deploy code, using controls familiar from traditional financial infrastructure.

<img
  src={deJTRSYDashboard}
  className="screenshot"
/>
> Product page with key facts and performance information.

## What issuers can build

The platform is flexible enough to represent very different product structures:

- **Tokenized funds** — money market, treasury, credit, fixed income, equity or other pooled vehicles, where the token represents a share of the fund.
- **Funds with multiple share classes** — one product with several tokens, each with its own terms, currency or investor base.
- **DeFi-native yield tokens** — freely transferable tokens designed to circulate in DeFi: tradable on exchanges, usable as collateral, composable with other protocols.
- **Purely onchain strategies** — products with no offchain leg, where a curator allocates capital across onchain venues.
- **Blended portfolios** — products that combine onchain and offchain assets in one structure.
- **Products that invest in other products** — fund-of-funds style structures, where one pool subscribes to the share tokens of another.
- **Multi-currency products** — a single share token can be accessed through different vaults accepting different investment assets.

These are patterns, not fixed templates: access rules, currencies, liquidity terms and operational roles are configured per product.

## The offering, onchain

Creating a product in Centrifuge is not primarily a technical act — it is the onchain reflection of a structure the issuer has set up offchain. For purely onchain strategies, it is the structure itself.

That reflection is the pool. The pool represents the product's onchain management: it holds the balance sheet, defines the share classes, and is the place from which the issuer controls operations — investors, orders, pricing, liquidity. Everything in the rest of this guide happens within a pool.

Pools are currently set up through an authorized onboarding process. Once registered onchain, they appear in the Management app, where issuers configure and operate the product's share classes, tokens, vaults, investor access, pricing and distribution. The details of what that process requires are covered in [Launching a product](/user/issuer/launching-a-product).

## Explore

<div className="card-grid">

  <a className="card-tile" href="/user/issuer/launching-a-product">
    <h3>Launching a product</h3>
    <p>The launch parameters, hub manager setup and the roles that operate the pool.</p>
  </a>

  <a className="card-tile" href="/user/issuer/token-management">
    <h3>Token management</h3>
    <p>The token as the ownership layer: transfer restrictions and investor management.</p>
  </a>

  <a className="card-tile" href="/user/issuer/distribution">
    <h3>Distribution</h3>
    <p>Vaults as execution paths, crosschain distribution, pricing and order management.</p>
  </a>

  <a className="card-tile" href="/user/issuer/asset-liquidity">
    <h3>Asset and liquidity</h3>
    <p>Asset registration, the holdings view and secure on/off-ramps.</p>
  </a>

  <a className="card-tile" href="/user/issuer/operations-automation">
    <h3>Operations and automation</h3>
    <p>The Onchain Portfolio Manager: pre-approved workflows within guardrails.</p>
  </a>

</div>

## Why issuers choose Centrifuge

- **One interface for the whole lifecycle** — issuance, investors, pricing, orders, liquidity and distribution are operated from the same app.
- **Complexity is abstracted** — multichain distribution, permissioning and price propagation are platform capabilities, not engineering projects.
- **Controls that meet institutional requirements** — whitelisting, transfer restrictions, freeze capability, role separation and order-based liquidity management.
- **DeFi reach when needed** — the same product can stay fully permissioned or extend into open DeFi distribution, on the issuer's terms.

Issuers evaluating Centrifuge for a product can reach out through [centrifuge.io](https://centrifuge.io) to discuss their structure.
