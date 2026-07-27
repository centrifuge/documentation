---
id: pools
title: Pools and share tokens
category: subpage
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---

# Pools and share tokens

## The pool

A pool is the onchain representation and management path of a financial product. Whether the product originated offchain — a fund, a credit strategy — or is purely onchain, the pool is where it lives and where it is operated: it maintains the product's onchain balance sheet, defines the share classes, and is the place from which the issuer manages investor access, orders, pricing and liquidity.

Everything else in Centrifuge hangs off a pool: tokens represent claims on it, [vaults](/user/concepts/vaults) are entry points into it, and [permissions](/user/concepts/access-permissions) govern who can interact with it.

## Share classes

A pool contains one or more share classes. Each share class has its own token and can define distinct economic terms, pricing and investor permissions. A single product can serve different investor bases through different classes: for example, a permissioned institutional class and a freely transferable class distributed through DeFi, both backed by the same pool.

## The token: ownership layer

Each share class is represented by a token — the ownership layer of the product:

- It follows industry token standards, such as ERC-20, making it compatible with common wallets and custody infrastructure.
- It is issued when an investor subscribes and burned when they redeem.
- Changes in the value allocated to the share class are reflected in its price per share. The price may rise or fall; a holder's balance only changes when tokens are issued, redeemed or transferred.
- Depending on its transfer restrictions and available integrations, it can remain fully permissioned or be used across DeFi.

A token can be distributed to several networks while remaining one asset, with one supply and one price — see [Vaults](/user/concepts/vaults) for how distribution works and [Pricing](/user/concepts/pricing) for how the price stays consistent everywhere.

## Why tokenize

Representing ownership as a token is what connects a financial product to onchain distribution:

- **Transferable** — positions can move between approved parties, or freely where the product allows it.
- **Composable** — tokens can integrate with exchanges, lending markets and other protocols.
- **Auditable** — issuance, transfers and redemptions are recorded onchain.
- **Programmable** — product rules can be enforced onchain alongside the offering’s offchain processes.
