---
id: securitization
order: 3
title: On-chain Securitization
---

To efficiently finance credit, liquid instruments create efficient markets. By nature, real world assets are often illiquid. A way to solve this is by pooling multiple assets together, and allowing investors to provide financing for this pool instead of each asset individually. This is called a securitization. This technique has been used successfully for many years in the traditional financial markets.

Thus, after an asset is tokenized using the Private Data layer and an NFT is minted on-chain, this NFT is used as a representation of the off-chain collateral for a loan within an investment pool, as visualized below. The loan is priced and liquidity from the pool is borrowed against this loan. Over time, debt is repaid either partially for interest repayments or fully for the principal repayment at maturity.

Together, this creates on-chain, asset level transparency: an investor can see at a glance what assets (NFTs) a pool contains, what has been borrowed against and repaid, what is overdue, and so on. This creates an immutable, transparent track record of financial transactions that can be publicly verified for decades to come. Compare this to the current state of traditional finance, where historical financial data is hidden and locked in private, siloed databases unavailable to the public, and financial analysis is done based on shared, trusted spreadsheets. 

![](./images/pooling.png#width=25%;)

## Revolving pools
In traditional finance, many securitizations are static: a group of investors provides capital to the issuer, the issuer finances debt, and then repays interest and principal of the assets over time as they mature. At the end, the investors get their capital back plus the yield. Instead of being a good deal for investors, this situation creates unnecessary overhead, because they have to re-invest after the pools mature. This has complications for the integration of these instruments into the DeFi ecosystem, as protocols and other parties will have to re-integrate with new pools constantly.

To solve this, pools using the Centrifuge Protocol are revolving: investment and redemption (the withdrawal of invested capital) orders can come in at any time, and assets can be financed and repaid continuously. This has multiple advantages for both issuers and investors:
Issuers can finance assets at any time given liquidity in the pools;
Investors, including DeFi protocols, can make flexible portfolio allocation decisions without the need to constantly re-invest;
The overhead of setting up and operating the underlying legal structure multiple times is removed.

Two fundamental components are needed to make this work: an epoch mechanism and an on-chain NAV (Net Asset Value) calculation.

An epoch mechanism is required because if investments and redemptions were immediately executed when ordered, this could create significant front-running opportunities. When a repayment comes in, an investor could quickly redeem all the incoming funds, leaving all other investors with nothing. The remaining investors will have to wait for the next inflow of capital and then have to make sure they are in time. To address this, each pool is managed using epochs: sessions with a fixed minimum time (e.g. 24 hours) over which investment and redemption orders can be submitted. At the end of the epoch, a decentralized solver mechanism considers the pool state and executes the orders according to seniority (e.g. senior redemptions take priority over junior redemptions) and available liquidity.

## On-chain NAV
The second component to enable revolving pools is an on-chain NAV (Net Asset Value) calculation: to support continuous investments and redemptions, accurate pricing for the pool tokens is required. In traditional finance, pricing for such illiquid assets is usually done using Discounted Cash Flow (DCF) models: expected cash flows (e.g. principal payments of assets in the pool at maturity) are discounted to their present value. The Protocol brings these calculations on-chain and calculates the new NAV on an ongoing basis.

The NAV should also account for different kinds of loans, to ensure accurate pricing: financing for real world assets can vary from simple bullet loans (borrow now and repay principal plus interest at maturity) to complex amortization schedules (repayment of principal plus interest at specific intervals).

The NAV also needs to account for defaults of assets: if the borrower fails to repay, the NAV should represent this. The Protocol supports this through on-chain representation of write offs of assets. The Protocol will show written off assets on a predefined write-off schedule (e.g. when an asset is 30 days overdue, 25% of the asset value should be written off, and a penalty interest rate of 3% should apply). This enables fairer pricing of overdue assets and incentivizes borrowers to repay, in order to avoid further write-offs. Assets can also be written off manually by a third party.

## Tranching
Investors often want different kinds of risk exposure and yield on the same asset class. In the traditional finance world, one way to achieve this is by introducing a tiered investment structure or in other words, different tranches. This means that investors can invest in the same group of assets through different classes of debt with different risk/return profiles. An example is shown below.

![](./images/tranching.png#width=40%;)

At its most common form, a pool could have a junior and senior tranche, with the junior tranche tracking the first loss position and receiving the excess yield, while the senior position receives a lower, fixed yield, but is protected from losses by junior. A key advantage of this structure is that it allows the issuer of the pool to invest in the junior tranche and thus take a first loss position in the pool, ensuring skin in the game. Another example includes a three tranche structure, where a super senior lender such as MakerDAO invests in the most senior tranche, other investors invest in a mezzanine tranche, and the pool issuer invests in the junior tranche.

For each tranche, tokens are issued that investors receive, representing interests in the tranches of the pool. The pool issuer can specify which accounts are allowed to hold which tranche tokens, and holders can only transfer their tranche tokens to these known accounts.
