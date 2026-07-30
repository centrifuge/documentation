---
id: investor
title: Investor
category: subpage
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---
import catalog from './images/catalog.jpg';
import deJTRSYDashboard from './images/deJTRSY_dashboard.jpg';
import vaults from './images/vaults.jpg';
import investors from './images/investors_view.jpg';
import orders from './images/orders_panel.jpg';
import holdings from './images/holdings.jpg';
import nav from './images/NAV.jpg';
import closedOrders from './images/closed_orders.jpg';


# Investor guide

Centrifuge gives investors direct onchain access to tokenized financial products — funds, yield strategies and other structures published by issuers and asset managers. Investors access products directly from their own wallet using one of the product’s accepted investment assets. In return, they receive tokens representing their position and can request redemption according to the product’s terms.

The complexity stays on the platform side: the investor interacts with a simple interface — explore products, invest, track the position, redeem — while permissioning, pricing and settlement run onchain underneath.

<img
  src={catalog}
  className="screenshot"
/>
> App home showing the products catalog.

## What investors can invest in

The products available to investors cover a range of structures:

- **Tokenized funds** — money market, treasury, credit or other pooled vehicles where the token represents a share of the fund and its price tracks the fund's valuation. A fund can offer one or several share classes, each with its own terms — the investor invests in a specific class.
- **Products backed by offchain assets** — credit, fixed income, equity or other real-world exposures brought onchain.
- **DeFi-native yield tokens** — freely transferable tokens that the investor can also trade on exchanges or use as collateral, in addition to investing and redeeming on the platform.
- **Onchain and blended strategies** — products whose capital is allocated across onchain venues by a curator, or portfolios that combine onchain and offchain assets.
- **Products that invest in other products** — fund-of-funds and feeder structures whose holdings are other tokens or vaults.

Products can be permissioned, open, or integrated into DeFi — the [Access](#access) section covers what that means for the investor.

Each product defines its own terms: accepted investment assets, access requirements, minimum investment, liquidity and processing cadence. The product page is always the reference.

A product is not limited to a single entry point: it can be open on several networks and accept several investment assets. The investor chooses where and how to enter, and the product remains the same — one balance sheet, one price.

<img
  src={deJTRSYDashboard}
  className="screenshot"
/>
> Product page with key facts and performance.

## How products are structured

Every product an investor invests in is built from the same three pieces:

- **Pool** — the onchain representation and management path of a financial structure, whether it originated offchain or is purely onchain. The issuer operates the product — investors, orders, pricing, liquidity — through its pool.
- **Token** — the ownership layer of a share class. It is what the investor holds in their wallet, what carries the price, and what moves — across chains or into DeFi, within the rules of the product.
- **Vault** — the way in and out of the product. A vault defines the investment asset, network and subscription flow. Deposits may settle instantly or follow a request-based process, while redemptions are processed through requests. A single token can be served by several vaults, so the same product can accept different investment assets and networks.

See [Pools](/user/concepts/pools) and [Vaults](/user/concepts/vaults) for the background.

<img
  src={vaults}
  className="screenshot"
/>
> Vaults panel for deJTRSY.

## What the investor needs

- A wallet on one of the networks where the product is distributed.
- The product's accepted investment asset (for example USDC) and gas for transactions.
- Access to the product, where its terms require it — see below.

## Access

Each product defines its own permissioning logic — before investing, the investor should make sure they meet the eligibility requirements.

Most products require whitelisting: the wallet address must be approved by the issuer before the investor can interact with the product. Whitelisting may involve:

- KYC/AML verification
- Jurisdictional restrictions
- Wallet pre-approval

It can apply to investing only, redeeming only, or both — and it is granted per network: approval on one network does not carry over to another. The onboarding process starts from the product page, and the app tells the investor when it is required.

Common restriction profiles include:

- **Fully restricted** — subscription, redemption and transfers all require the whitelist: the token only moves between approved addresses.
- **Transferable but gated** — the whitelist applies to subscribing and redeeming, while the token itself circulates freely: even if the investor acquired it on a secondary market, redeeming against the pool still requires being whitelisted.
- **Redemption gated** — subscription and transfers are open; only whitelisted investors can redeem.
- **Open with freeze controls** — operations are open, and the issuer keeps the ability to freeze specific addresses.

On the issuer's side, the investor's access takes effect onchain the moment they are added to the product's investor list.

<img
  src={investors}
  className="screenshot"
/>
> Behind the scenes: the investor whitelist as the issuer manages it.

## How investing works

The investor invests directly from their wallet, in the product's accepted investment asset. Depending on the vault they enter through, execution takes one of two forms:

- **Instant** — the investor deposits and receives the tokens in the same transaction. Nothing to wait for and nothing to claim.
- **Request-based** — the deposit becomes an order. The issuer processes orders at the product's cadence — often once related offchain operations complete — and the investor then **claims the tokens** in the app. Receiving the tokens is a two-step experience: deposit, then claim.

While a request is pending, the assets are held by protocol contracts according to the vault’s configured flow. Investors may request cancellation before fulfillment and reclaim the assets once the cancellation is processed.

The app shows the state of the orders at all times — pending, processed, claimable — so the investor always knows where their money is. On the issuer's side, the order appears in their operations view, where it is approved and settled; the full order history remains visible.

<img
  src={orders}
  className="screenshot"
/>
> Behind the scenes: the order as the issuer sees and processes it.

## The token

The token the investor receives is the ownership layer of the investment: it carries the price, sits in the investor's wallet, and can be moved within the rules of the product.

- **Valuation** — the token's price is updated by the issuer and reflected in the app. For most products, returns accrue through the token price: as the strategy earns, the price rises.
- **Across chains** — products can be distributed on several chains; depending on the product, the investor can hold the token where it suits them and move it between networks from the app.
- **In DeFi** — freely transferable tokens can be traded on decentralized exchanges or used in other protocols, giving the investor an instant alternative to platform redemptions.

Positions are visible per network in the holdings view:

<img
  src={holdings}
  className="screenshot"
/>
> Holdings view with the positions in each network.

The token's price history — and every detail behind it — is tracked in the price view:

<img
  src={nav}
  className="screenshot"
/>
> Price history of the token.

## Redeeming

Redemptions follow the order flow on every product: the investor requests a redemption, the issuer processes it at the product's cadence, and the investor then claims the funds — in the product's investment asset, back in their wallet. Like investments, a pending redemption can be cancelled before it is processed.

For freely transferable tokens, selling on a secondary market is an alternative exit that settles instantly at the market price.

Pending and settled redemptions stay visible in the order history:

<img
  src={closedOrders}
  className="screenshot"
/>
> Behind the scenes: redemption history in the issuer's order view.

## What this means for the investor

- **Self-custody** — the investor's position is a token in their own wallet, not an entry in someone's database. Funds in flight sit in onchain escrow, not with the issuer.
- **Transparency** — pricing, orders and settlement are visible onchain and in the app, on both sides of every order.
- **Access on the investor's terms** — invest from the preferred chain, with the investment asset the product accepts.
- **Liquidity options** — platform redemptions on every product, plus DeFi markets where the token is freely transferable.
- **Clear responsibilities** — Centrifuge provides the infrastructure; each product is issued and managed by its issuer. Questions about a specific product go to its issuer, through the contact details on the product page.
