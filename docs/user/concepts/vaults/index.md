---
id: vaults
title: Vaults
category: subpage
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---

# Vaults

A vault is the entry path into a pool: the way investors come in and out of a share token. Each vault defines three things — which investment asset it accepts, on which network it lives, and how execution works.

## Instant vs request-based execution

Centrifuge supports two vault configurations:

**Instant (synchronous, ERC-4626)**

- The investor deposits and receives share tokens in the same transaction.
- Redemptions remain request-based.
- Suited to liquid strategies where on-demand issuance is possible.
- The issuer can bound how much liquidity the vault accepts through a deposit capacity.

**Request-based (asynchronous, ERC-7540)**

- Both deposits and redemptions follow an order lifecycle.
- The investor submits a request, the issuer processes it according to the product's cadence, and the investor claims the resulting tokens or assets.
- Suited to products with offchain settlement or periodic valuation.

Redemptions are processed through requests on every vault type — only deposits can settle instantly. This lets the issuer manage outgoing liquidity according to the product's terms.

## Several vaults, one token

A single share token can be served by several vaults, each accepting a different asset (ERC-7575). One class might be investable in USDC through one vault and in another investment asset through a second, with all capital consolidated in the same pool balance sheet and every investor receiving the same token.

## Vaults and networks

Vaults are how a product reaches investors on different networks. The token itself can be deployed to several chains; to open subscriptions and redemptions on one of them, the issuer deploys a vault there.

Investors interact locally — they invest from whichever network suits them, in the asset that vault accepts — while the protocol coordinates the product across its deployments: one balance sheet, one supply, one price everywhere. See [Pricing](/user/concepts/pricing) for how valuations stay consistent across networks.

Token deployment and vault deployment serve different purposes. Deploying a token makes the share class available to hold or transfer on a network. Deploying a vault opens subscriptions and redemptions there. Crosschain transfers are available only when permitted by the product's configuration.
