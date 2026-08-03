---
id: pools
title: Pools and share tokens
category: subpage
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---
import hubAndSpoke from './images/hub-and-spoke.png';

# Pools and share tokens

## The pool

A pool is the onchain representation and management path of a financial product. Whether the product originated offchain (a fund, a credit strategy) or is purely onchain, the pool is where it lives and where it is operated: it maintains the product's onchain balance sheet, defines the share classes, and is the place from which the issuer manages investor access, orders, pricing and liquidity.

Everything else in Centrifuge hangs off a pool: tokens represent claims on it, [vaults](/user/concepts/vaults) are entry points into it, and [permissions](/user/concepts/access-permissions) govern who can interact with it.

## Hub and spokes

Internally, every pool is organized in a hub-and-spoke structure. It matters to the issuer because it defines where each part of the product runs:

- **Hub**: the pool's control and accounting center, on the hub chain chosen at launch. Permissions and roles, pricing and accounting, and the processing of orders live here: the issuer manages the product from its hub.
- **Spokes**: the networks where the product meets investors. Each spoke holds the token's local deployment, its vaults and the pool's balance sheet on that network, including its on/off-ramps.

A pool has one hub and as many spokes as networks it distributes on, kept in sync by the protocol's messaging. Hub and spoke are roles, not separate systems. A spoke can live on the hub's own chain. A product distributed only there still has both, with operations between them settling directly on that chain.

<img
  src={hubAndSpoke}
/>
> One hub controls and accounts for the product. Each distribution network is a spoke, including, if the issuer chooses, the hub chain itself.

## Share classes

A pool contains one or more share classes. Each share class has its own token and can define distinct economic terms, pricing and investor permissions. A single product can serve different investor bases through different classes, for example a permissioned institutional class and a freely transferable class distributed through DeFi, both backed by the same pool.

## The token: ownership layer

Each share class is represented by a token, the ownership layer of the product:

- It follows industry token standards, such as ERC-20, making it compatible with common wallets and custody infrastructure.
- It is issued when an investor subscribes and burned when they redeem.
- Changes in the value allocated to the share class are reflected in its price per share. The price may rise or fall, while a holder's balance only changes when tokens are issued, redeemed or transferred.
- Depending on its transfer restrictions and available integrations, it can remain fully permissioned or be used across DeFi.

A token can be distributed to several networks while remaining one asset, with one supply and one price. See [Vaults](/user/concepts/vaults) for how distribution works and [Pricing](/user/concepts/pricing) for how the price stays consistent everywhere.
