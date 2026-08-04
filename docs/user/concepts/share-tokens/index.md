---
id: share-tokens
title: Share classes and tokens
category: subpage
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---

# Share classes and tokens

A [pool](/user/concepts/pools) reaches its investors through share classes and their tokens. This page covers how classes structure a product and what the token represents.

## Share classes

A pool contains one or more share classes. Each share class has its own token and can define distinct economic terms, pricing and investor permissions. A single product can serve different investor bases through different classes, for example a permissioned institutional class and a freely transferable class distributed through DeFi, both backed by the same pool.

## The token: ownership layer

Each share class is represented by a token, the ownership layer of the product:

- It follows industry token standards, such as ERC-20, making it compatible with common wallets and custody infrastructure.
- It is issued when an investor subscribes and burned when they redeem.
- Changes in the value allocated to the share class are reflected in its price per share. The price may rise or fall, while a holder's balance only changes when tokens are issued, redeemed or transferred.
- Depending on its transfer restrictions and available integrations, it can remain fully permissioned or be used across DeFi.

A token can be distributed to several networks while remaining one asset, with one supply and one price. See [Vaults](/user/concepts/vaults) for how distribution works and [Pricing](/user/concepts/pricing) for how the price stays consistent everywhere.
