---
id: overview
title: Overview
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---
import rolesTogether from './images/roles-together.png';

# User documentation

Centrifuge is the open infrastructure for onchain asset management. Financial products are represented and operated onchain through pools: issuers manage product operations, investors access them from their own wallets, and curators design and oversee onchain allocation strategies. Permissions and settlement are enforced onchain, while product valuations are published and kept consistent across deployments. Centrifuge provides the rails; each product remains the responsibility of its issuer and appointed managers.

This section is organized by role. Each guide describes what the platform enables for that role, while the shared background is covered in [Concepts](/user/concepts).

## Roles

**Issuers** structure a financial product and operate it onchain through the Management app — issuance, investor access, pricing, orders, distribution and reporting, from one interface and without writing code. See the [issuer guide](/user/issuer).

**Investors** get direct onchain access to tokenized products: they invest from their own wallet, hold a token representing their position and redeem according to the product's terms. See the [investor guide](/user/investor).

**Curators** design and oversee how a pool's capital is allocated across onchain positions. The Onchain Portfolio Manager provides controlled execution: managers define the permitted workflows and limits, and authorized operators run them. See the [curator guide](/user/curator).

These roles can come together in the same product: the issuer manages the pool, investors enter and exit through its vaults and, where the strategy includes onchain allocation, a curator manages how its capital is deployed.

<img
  src={rolesTogether}
  className="screenshot"
/>
> One product, three roles: the issuer operates the pool, investors enter and exit through its vaults, and the curator — as the product's portfolio manager — allocates its capital across onchain venues.

## Explore

<div className="card-grid">

  <a className="card-tile" href="/user/concepts">
    <h3>Concepts</h3>
    <p>The shared background: pools and share tokens, vaults, pricing, and access and permissions.</p>
  </a>

  <a className="card-tile" href="/user/issuer">
    <h3>Issuer</h3>
    <p>Operate a financial product onchain: tokens, investors, orders, pricing and distribution from one interface.</p>
  </a>

  <a className="card-tile" href="/user/investor">
    <h3>Investor</h3>
    <p>Invest in tokenized products from a wallet: access, investing, claims and redemptions.</p>
  </a>

  <a className="card-tile" href="/user/curator">
    <h3>Curator</h3>
    <p>Design and operate onchain allocation strategies through pre-approved workflows, role separation and guardrails.</p>
  </a>

</div>

Terms used across the documentation are defined in the [glossary](/getting-started/glossary).
