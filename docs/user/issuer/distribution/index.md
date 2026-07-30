---
id: distribution
title: Distribution
category: subpage
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---
import vaults from '../images/vaults.jpg';
import navPanel from '../images/NAV_panel.jpg';
import updateNav from '../images/update_NAV.jpg';
import orders from '../images/orders_view.jpg';

# Distribution

Distribution is how the product reaches its investors: the vaults they enter and exit through, the price their orders settle at, and the order flow the issuer manages day to day.

## Vaults: the product's execution paths

A vault is an execution path the issuer opens into the pool: it defines how investors enter and exit the product. When creating a vault, the issuer decides which investment asset it accepts, on which network it lives, and how execution works.

Execution models are implemented as vault types, and the architecture allows new ones to be introduced over time without changing the token or the pool. Two execution paths are currently available:

- **Instant execution** — the investor deposits and receives tokens in the same transaction, priced at the token's current price. Suited to liquid strategies. The issuer sets a deposit capacity that bounds how much liquidity the vault accepts.
- **Request-based execution** — deposits become orders that the issuer resolves on the hub side at the product's cadence (see [Order management](#order-management)). Suited to products with offchain settlement or periodic valuation.

Redemptions are processed through requests on every vault type — only deposits can settle instantly. This allows redemptions to be processed according to the product's liquidity and settlement terms.

From the app, the issuer manages the product's execution paths over their whole life:

- Deploy vaults as distribution grows — a new accepted investment asset, or a new network. Adding a vault is a configuration step: the issuer selects the vault type, the investment asset and the network, and the protocol deploys it.
- Disable and re-enable a vault. A disabled vault accepts no new deposits or requests, without affecting the rest of the product.
- Adjust the deposit capacity of instant vaults as the strategy's liquidity changes.

Reaching investors on a new network involves the token as well as the vault. A share token can be deployed across multiple networks while remaining part of the same share class — the protocol handles the underlying crosschain coordination, maintaining a unified supply and a consistent price across deployments. The issuer then opens subscriptions and redemptions there by deploying a vault on that network.

Several vaults can serve the same token — for example one per investment asset, or one per chain — and each is managed independently.

<img
  src={vaults}
  className="screenshot"
/>
> Vaults section.

## Pricing (NAV)

Each token's price is derived from the value allocated to its share class and the product's established valuation methodology. The issuer records and publishes valuation updates through the Management app, and the protocol propagates them across every network where the token is distributed.

The update can be entered as a total NAV or as a NAV per share. Before submitting, the app previews the resulting price per token on every network where the token is deployed, so the issuer sees the current and the new price side by side. Once published, the update is propagated to every network. The app shows the status of each deployment and flags any network still awaiting the update, making price alignment easy to verify.

<img
  src={updateNav}
  className="screenshot"
/>
> Update NAV modal.

<img
  src={navPanel}
  className="screenshot"
/>
> The NAV section of the app.

## Order management

For request-based vaults, subscriptions and redemptions arrive as orders, and the Management app gives issuers visibility and control over their full lifecycle:

1. An investor submits a subscription or redemption request. It appears as a pending order with its investor, network and amount.
2. The issuer approves pending orders — in full or in part. Approvals work in buckets: when the approved amount is smaller than the total pending, every order in the bucket is fulfilled pro-rata to its share of the pending total, and the remainder stays pending for a later bucket.
3. The issuer executes the approved bucket, issuing tokens for investments or paying out redemptions. Every order in the bucket settles at the same price — the price at which the bucket is executed, regardless of when the investor claims.
4. The investor claims the resulting tokens or funds. Closed orders remain visible in the order history and can be exported.

For instant-execution vaults, deposits settle without issuer intervention. Redemptions remain request-based.

<img
  src={orders}
  className="screenshot"
/>
> Orders section with pending investments and redemptions.

### Direct issuance

Not every subscription needs to arrive through a vault. For orders received offchain, the issuer can issue tokens directly to an investor's address — or process a direct redemption — using the applicable price for the operation, from the same Orders section. Direct operations still respect the token's whitelist, and give the issuer full flexibility to combine onchain requests with offchain distribution channels. Direct redemptions are best coordinated with the investor in advance, since they bypass the standard request flow.
