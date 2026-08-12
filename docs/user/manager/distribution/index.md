---
id: distribution
title: Distribution
category: subpage
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---
import vaults from '../images/vaults.jpg';
import orders from '../images/orders_view.jpg';
import issue from '../images/issue.jpg';

# Distribution

Distribution is how the product reaches its investors: the vaults they enter and exit through, and the order flow the manager operates day to day. How the product's valuation and share prices are published is covered in [NAV and share prices](/user/manager/nav).

## Vaults: the product's execution paths

A vault is an execution path the manager opens into the pool. It defines how investors enter and exit the product. When creating a vault, the manager decides which investment asset it accepts, on which network it lives, and how execution works.

Execution models are implemented as vault types, and the architecture allows new ones to be introduced over time without changing the token or the pool. Two execution paths are currently available:

- **Instant execution**: the investor deposits and receives tokens in the same transaction, priced at the token's current price. Suited to liquid strategies. The manager sets a deposit capacity that bounds how much liquidity the vault accepts.
- **Request-based execution**: deposits become orders that the manager resolves on the hub side at the product's cadence (see [Order management](#order-management)). Suited to products with offchain settlement or periodic valuation.

Redemptions are processed through requests on every vault type. Only deposits can settle instantly. This allows redemptions to be processed according to the product's liquidity and settlement terms.

From the app, the manager operates the product's execution paths over their whole life:

- Deploy vaults as distribution grows: a new accepted investment asset, or a new network. Adding a vault is a configuration step: the manager selects the vault type, the investment asset and the network, and the protocol deploys it.
- Disable and re-enable a vault. A disabled vault accepts no new deposits or requests, without affecting the rest of the product.
- Adjust the deposit capacity of instant vaults as the strategy's liquidity changes.

Reaching investors on a new network involves the token as well as the vault. A share token can be deployed across multiple networks while remaining part of the same share class. The protocol handles the underlying crosschain coordination, maintaining a unified supply and a consistent price across deployments (see [Deploying the token to networks](/user/manager/token-management#deploying-the-token-to-networks)). The manager then opens subscriptions and redemptions there by deploying a vault on that network.

Several vaults can serve the same token (for example one per investment asset, or one per chain), and each is managed independently.

<img
  src={vaults}
  className="screenshot"
/>
> Vaults section.

## Order management

For request-based vaults, subscriptions and redemptions arrive as orders, and the Management app gives managers visibility and control over their full lifecycle:

1. An investor submits a subscription or redemption request. It appears as a pending order with its investor, network and amount.
2. The manager approves pending orders, in full or in part. Approvals work in buckets. When the approved amount is smaller than the total pending, every order in the bucket is fulfilled pro-rata to its share of the pending total, and the remainder stays pending for a later bucket.
3. The manager executes the approved bucket, issuing tokens for investments or paying out redemptions. Every order in the bucket settles at the price at which the bucket is executed, regardless of when the investor claims.
4. The investor claims the resulting tokens or funds. Closed orders remain visible in the order history and can be exported.

For instant-execution vaults, deposits settle without manager intervention. Redemptions remain request-based.

<img
  src={orders}
  className="screenshot"
/>
> Orders section with pending investments and redemptions.

### Direct issuance

Not every subscription needs to arrive through a vault. For orders received offchain, the manager can issue tokens directly to an investor's address, or process a direct redemption, using the applicable price for the operation, from the same Orders section. In one direct-issuance flow, the manager can add multiple investors and assign an individual amount and execution price to each, useful for settling a batch of offchain subscriptions executed under different terms. These per-investor execution prices apply only to the corresponding direct settlements, and they do not change the share class's published token price.

Direct operations still respect the token's memberlist, and give the manager full flexibility to combine onchain requests with offchain distribution channels. Direct redemptions are best coordinated with the investor in advance, since they bypass the standard request flow.

<img
  src={issue}
  className="screenshot"
/>
> Issue shares directly view with several investors at different token prices.
