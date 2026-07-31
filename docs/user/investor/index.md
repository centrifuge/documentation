---
id: investor
title: Investor
category: subpage
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---
import home from './images/invest_app_home.jpg';
import productPage from './images/product_page.jpg';
import investPanel from './images/invest_panel.jpg';
import redemptionPanel from './images/redemption_panel.jpg';
import onboarding from './images/onboarding.jpg';
import claim from './images/claim.jpg';

# Investor guide

Centrifuge gives investors direct onchain access to tokenized financial products — funds, yield strategies and other structures published by issuers and asset managers. Investors use the Centrifuge Investment app, directly from their own wallet: they explore the catalog, invest with one of the product's accepted investment assets, receive tokens representing their position and redeem according to the product's terms.

The complexity stays on the platform side: the investor interacts with a simple interface — explore products, invest, track the position, redeem — while permissioning, pricing and settlement run onchain underneath.

<img
  src={home}
  className="screenshot"
/>
> Investment app home with the products catalog.

## What investors can invest in

The products available to investors cover a range of structures:

- **Tokenized funds** — money market, treasury, credit or other pooled vehicles where the token represents a share of the fund and its price tracks the fund's valuation. Each product listing gives the investor access to a specific share token, with its own terms, price and investor requirements.
- **Products backed by offchain assets** — credit, fixed income, equity or other real-world exposures brought onchain.
- **DeFi-native yield tokens** — freely transferable tokens that the investor can also trade on exchanges or use as collateral, in addition to investing and redeeming on the platform.
- **Onchain and blended strategies** — products whose capital is allocated across onchain venues by a curator, or portfolios that combine onchain and offchain assets.
- **Products that invest in other products** — fund-of-funds and feeder structures whose holdings include share tokens issued by other products.

Products can be permissioned, open, or integrated into DeFi — the [Access](#access) section covers what that means for the investor.

The catalog shows each product's key terms at a glance — assets under management, APY, asset type and minimum investment — and each product page expands on them: performance, available networks, facts about the issuer and the product's terms. The product page brings this information together and links to the terms and resources made available by the issuer.

A product is not limited to a single entry point: it can be open on several networks and accept several investment assets. The investor chooses where and how to enter, while the selected share token remains the same and maintains a consistent price across its supported networks and entry points.

<img
  src={productPage}
  className="screenshot"
/>
> Product page with key facts and performance.

## How products are structured

Every product an investor invests in is built from the same three pieces:

- **Pool** — the onchain representation and management path of a financial structure, whether it originated offchain or is purely onchain. The issuer operates the product — investors, orders, pricing, liquidity — through its pool.
- **Token** — the ownership layer of a share class. It is what the investor holds in their wallet, what carries the price, and what moves — across chains or into DeFi, within the rules of the product.
- **Vault** — the way in and out of the product. A vault defines the investment asset, network and subscription flow. Deposits may settle instantly or follow a request-based process, while redemptions are processed through requests. A single token can be served by several vaults, so the same product can accept different investment assets and networks.

See [Pools](/user/concepts/pools) and [Vaults](/user/concepts/vaults) for the background. In the app, this maps to a simple choice: the investor picks the investment asset and network they want to enter with, and the vault behind that choice determines how execution works.

## What the investor needs

- A wallet on one of the networks where the product is distributed, connected to the app.
- The product's accepted investment asset (for example USDC) and gas for transactions.
- Access to the product, where its terms require it — see below.

## Access

Each product defines its own permissioning logic — before investing, the investor should make sure they meet the eligibility requirements.

Some products require whitelisting: the wallet address must be approved by the issuer before the investor can interact with the product. Whitelisting may involve:

- KYC/AML verification
- Jurisdictional restrictions
- Wallet pre-approval

It can apply to investing only, redeeming only, or both — and it is granted per network: approval on one network does not carry over to another. The app flags when onboarding is required — down to the specific investment asset and network — and points the investor to the issuer's onboarding contact. For some products, availability also depends on the investor's jurisdiction, and the app restricts access where required.

Common restriction profiles include:

- **Fully restricted** — subscription, redemption and transfers all require the whitelist: the token only moves between approved addresses.
- **Transferable but gated** — the whitelist applies to subscribing and redeeming, while the token itself circulates freely: even if the investor acquired it on a secondary market, redeeming against the pool still requires being whitelisted.
- **Redemption gated** — subscription and transfers are open; only whitelisted investors can redeem.
- **Open with freeze controls** — operations are open, and the issuer keeps the ability to freeze specific addresses.

<img
  src={onboarding}
  className="screenshot"
/>
> Invest panel showing the onboarding required state.

## How investing works

The investor invests from the product page: they pick the investment asset and network to enter with, enter the amount, and the app shows the tokens they can expect to receive before confirming. The app guides the remaining steps — the token approval and the investment itself. Depending on the vault behind that choice, execution takes one of two forms:

- **Instant** — the investor deposits and receives the tokens in the same transaction. Nothing to wait for and nothing to claim.
- **Request-based** — the deposit becomes an order. The issuer processes orders at the product's cadence — often once related offchain operations complete — and the investor then **claims the tokens** in the app. Receiving the tokens is a two-step experience: deposit, then claim.

While a request is pending, the assets are held by protocol contracts according to the vault's configured flow, and the app keeps the pending amount visible on the product page. Once the order is processed, the app prompts the investor to claim — further investments and redemptions on that product wait until pending claims are collected.

In the app, both operations are available from the product page widget, in its Invest and Redeem tabs.

<img
  src={investPanel}
  className="screenshot"
/>
> Invest panel on the product page.

<img
  src={claim}
  className="screenshot"
/>
> Claimable state prompting the investor to claim their tokens.

## The token

The token the investor receives is the ownership layer of the investment: it carries the price, sits in the investor's wallet, and can be moved within the rules of the product.

- **Valuation** — the token's price is published by the issuer based on the product's valuation methodology and reflected in the app. For many products, gains or losses are reflected through changes in the token price over time.
- **Across chains** — products can be distributed on several chains; depending on the product, the investor can hold the token where it suits them and move it between networks from the app.
- **In DeFi** — freely transferable tokens can be traded on decentralized exchanges or used in other protocols, providing a market-based alternative to platform redemptions where sufficient liquidity is available. Where a secondary market is integrated, the token can be acquired directly from the product page.

The position lives in the investor's wallet, like any other token. On each product page, the app additionally shows the state of the investor's operations in that product — amounts pending processing and amounts ready to claim — for the connected wallet.

## Redeeming

Redemptions follow the order flow on every product: the investor requests a redemption from the product page, sees the estimated amount they will receive, and the issuer processes the request at the product's cadence. The investor then claims the funds — in the product's investment asset, back in their wallet. The final amount is determined by the price at which the request is processed.

For freely transferable tokens, selling on a secondary market is an alternative exit that settles instantly at the market price.

<img
  src={redemptionPanel}
  className="screenshot"
/>
> Redemption panel on the product page.

## What this means for the investor

- **Self-custody** — the investor's position is a token in their own wallet, not an entry in someone's database. Funds in flight sit in onchain escrow, not with the issuer.
- **Transparency** — onchain pricing, positions and order states are surfaced in the app, allowing investors to follow their investment and settlement status.
- **Access on the investor's terms** — invest from the preferred chain, with the investment asset the product accepts.
- **Liquidity options** — platform redemptions on every product, plus DeFi markets where the token is freely transferable.
- **Clear responsibilities** — Centrifuge provides the infrastructure; each product is issued and managed by its issuer. Questions about a specific product go to its issuer, through the contact details on the product page.
