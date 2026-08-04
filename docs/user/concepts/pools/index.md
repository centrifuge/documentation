---
id: pools
title: Pools
category: subpage
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---
import hubAndSpoke from './images/hub-and-spoke.png';

# Pools

Every product on Centrifuge is built around a pool. This page covers the pool itself and the hub-and-spoke structure it runs on. The tokens a pool issues are covered in [Share classes and tokens](/user/concepts/share-tokens).

## The pool

A pool is the onchain representation and management path of a financial product. Whether the product originated offchain (a fund, a credit strategy) or is purely onchain, the pool is where it lives and where it is operated: it maintains the product's onchain balance sheet, defines the share classes, and is the place from which the issuer manages investor access, orders, pricing and liquidity.

Everything else in Centrifuge hangs off a pool: [tokens](/user/concepts/share-tokens) represent claims on it, [vaults](/user/concepts/vaults) are entry points into it, and [permissions](/user/concepts/access-permissions) govern who can interact with it.

## Hub and spokes

Internally, every pool is organized in a hub-and-spoke structure. It matters to the issuer because it defines where each part of the product runs:

- **Hub**: the pool's control and accounting center, on the hub chain chosen at launch. Permissions and roles, pricing and accounting, and the processing of orders live here. The issuer manages the product from its hub.
- **Spokes**: the networks where the product meets investors. Each spoke holds the token's local deployment, its vaults and the pool's balance sheet on that network, including its on/off-ramps.

A pool has one hub and as many spokes as networks it distributes on, kept in sync by the protocol's messaging. Hub and spoke are roles, not separate systems. A spoke can live on the hub's own chain. A product distributed only there still has both, with operations between them settling directly on that chain.

<img
  src={hubAndSpoke}
/>
> One hub controls and accounts for the product. Each distribution network is a spoke, including, if the issuer chooses, the hub chain itself.
