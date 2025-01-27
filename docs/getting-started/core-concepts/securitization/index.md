---
id: securitization
title: Onchain Securitization
contributors: <Jeroen Offerijns:jeroen@k-f.co>, <Dennis Wellmann:dennis@k-f.co>, <Devin Black:devin@k-f.co>
category: subpage
redirect_from:
  - /getting-started/securitization
  - /getting-started/securitization/
---

# Onchain Securitization

By nature, real-world assets are often illiquid and can have maturities up to several years. This makes investing in individual assets extremely difficult. A way to solve this is by pooling multiple assets together, and allowing investors to provide financing for this pool instead of each asset individually. This is called a securitization and is a well established concept in traditional financial markets.

After an asset is tokenized and an NFT is minted onchain, this NFT is used as a representation of the offchain collateral for an asset linked to an investment pool, as visualized below. The asset is priced and the issuer borrows liquidity from the pool. Over time, the accruing debt per asset is repaid by the issuer including interest payments and principal repayments.

![](./images/pooling.png#width=60%;)

Together, this creates onchain, asset-level transparency: an investor can see at a glance what assets (NFTs) a pool contains, what has been borrowed against and repaid, what is overdue, and so on. This creates an immutable, transparent track record of financial transactions that can be publicly verified. Compare this to the current state of traditional finance, where historical financial data is often hidden and locked in private, siloed databases unavailable to the public, and financial analysis is done based on spreadsheets.

## Revolving pools

In traditional finance, many securitizations are static: a group of investors provides capital to the issuer, the issuer finances debt, and then repays interest and principal of the assets over time as they mature. At the end, the investors get their capital back plus the yield. Instead of being a good deal for investors, this situation creates unnecessary overhead, because they have to reinvest after the pools mature. This also makes it harder for other DeFi protocols to integrate with the Centrifuge, as they will have to invest in new pools constantly.

To solve this, pools on Centrifuge are revolving: investment and redemption (the withdrawal of invested capital) orders can come in at any time, and assets can be financed and repaid continuously. This has multiple advantages for both issuers and investors:

- Issuers can finance assets at any time given liquidity in the pools;
- Investors, including DeFi protocols, can make flexible portfolio allocation decisions without the need to constantly reinvest;
- The overhead of setting up and operating the underlying legal structure multiple times is removed.

Two fundamental components are needed to make this work: an epoch mechanism and an on-chain NAV (Net Asset Value) calculation.

## Epoch mechanism

A decentralized pool where investors of different tranches can invest and redeem at any time needs a decentralized mechanism to coordinate the inflow of investments and outflow of redemptions. To address this, each pool is managed using “Epochs”: sessions with a fixed minimum time (e.g. 24 hours) over which investment and redemption orders can be submitted. At the end of the epoch, a decentralized solver mechanism considers the pool state and executes the orders according to seniority of the tranches (e.g. senior tranche redemptions take priority over junior tranche redemptions) and available liquidity.

## Onchain NAV

The second component to enable revolving pools is an onchain NAV (Net Asset Value) calculation: to support continuous investments and redemptions, accurate pricing for the pool tokens is required. In traditional finance, pricing for such illiquid assets is usually done using Discounted Cash Flow (DCF) models: expected cash flows (e.g. principal payments of assets in the pool at maturity) are discounted to their present value. Centrifuge brings these calculations onchain and calculates the new NAV on an ongoing basis.

The NAV should also account for different kinds of loans, to ensure accurate pricing: financing for real-world assets can vary from simple bullet loans (borrow now and repay principal plus interest at maturity) to complex amortization schedules (repayment of principal plus interest at specific intervals).

The NAV also needs to account for defaults of assets: if an asset fails to be repaid, the NAV should represent this. Centrifuge supports this through onchain representation of write offs of assets. The Protocol will show written off assets on a predefined write-off schedule (e.g. when an asset is 30 days overdue, 25% of the asset value should be written off, and a penalty interest rate of 3% should apply). This enables fairer pricing of overdue assets. Assets can also be written off manually by a third party.

## Tranching

Investors often want different kinds of risk exposure and yield on the same asset class. In the traditional finance world, one way to achieve this is by introducing a tiered investment structure or in other words, different tranches. This means that investors can invest in the same group of assets through different classes of debt with different risk/return profiles. A standard example is shown below.

![](./images/tranching.png#width=60%;)

At its most common form, a pool can have a junior and senior tranche, with the junior tranche tracking the first loss position and receiving the excess yield, while the senior position receives a lower, fixed yield, but is protected from losses by junior. A key advantage of this structure is that it allows the issuer of the pool to invest in the junior tranche and thus take a first loss position in the pool, ensuring skin in the game.

Another example includes a three tranche structure, where a super senior lender such as MakerDAO invests in the most senior tranche, other investors invest in a mezzanine tranche, and the pool issuer invests in the junior tranche.

For each tranche, tokens are issued that investors receive, representing interests in the tranches of the pool. These tokens are considered securities, thus can only be held by and transferred to KYCed accounts. The pool issuer can specify which accounts are allowed to hold which tranche tokens.
