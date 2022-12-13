---
id: assess-pool
order: 1
title: Assess a Pool
contributors: <Dennis Wellmann:dennis@centrifuge.io>
redirect_from:
  - /use
  - /use/
---

## Introduction

This section walks you through the process as an investor before the first investment: from the home page, to the pool page, and to the resources that will help you decide whether or not you are ready to invest in a pool. After this section, you should be able to do your own research (“DYOR”) and confidently invest in one of the upcoming Tinlake pools.

## The TL;DR Checklist

It’s a lot of information at first, so we put together this step by step list you can use to help you make a decision about which pool you feel best investing in:

- Choosing a pool: Select the pool based on pool value, asset type, and DROP APR that you are most comfortable with.
- Asset Originator: check the Discourse community intro and pool summary, and any other information you find on the web about the company/asset. Check the list of assets financed on Tinlake to see their track record on Tinlake.
- Asset Type: Do I understand what assets I will finance and the risk of this asset type?
- Risk: Am I comfortable with the TIN buffer protecting my DROP?
- Yield: How does the cash drag look in relation to the average asset size?

## For starters: Choosing pools
### Tinlake Pool Dashboard
We gotta start in the most obvious place: tinlake.centrifuge.io. The top banner shows you the total value for all pools but for our purposes, we are only looking at the list of pools which currently (mid January 2021) are:

![](./images/choosing_pools.png)

Each one of these is a pool run by an asset originator. This dashboard currently shows you a list of seven pools. You might notice that some of them have that little yellow label ”oversubscribed;” in the screenshot above these are amongst others Harbor Trade Credit, ConsolFreight and Paperchain. That yellow label means that they are currently not open for additional investments. When these asset originators drop more assets to be financed the pool will open back up and the label will disappear.

Under the Asset Originator, you’ll find the asset type. For New Silver, it’s real estate bridge loans. That means you, as the investor, will be financing New Silver’s active real estate bridge loans. As an investor you finance the entire portfolio, so you finance all loans in the pool, not one single asset. You can actually see the bridge loans converted to NFTs on the Assets page (will go more into that later).

The Pool Value tells you the current volume of financed assets and how big the pool currently is.

The DROP APR is the fixed nominal interest rate DROP investors receive. This rate is applied to the outstanding financing amount of the pool and tells you how much profit you should expect for your invested DAI. The interest in Tinlake (as most DeFi protocols) is accrued every second, so you earn yield every moment you are invested. That means if you invest 10k DAI into a fully deployed Tinlake pool with a 10% DROP APR you will have 11.05k at the end of the year (equal to a 10.52% APY). The effective DROP yield may be slightly lower than the DROP APR due to the pool’s “cash drag” (see below). Also, when you invest, you also receive CFG Rewards on top.

The investment capacity tells you how much investment capacity there currently is for DROP investment. This capacity considers the capacity set by the asset originator and currently locked investments. Note that this may change with investments/redemptions locked before the epoch is closed. If a pool is "oversubscribed"  there currently is no room for additional DROP investments, e.g. to minimize cash drag. 

## Check out Asset Originator and Asset Type

Based on the asset type, let’s say you are most interested in real estate bridge loans. You understand the asset and feel more comfortable with a 5% DROP APR, given your trust in real estate. The Pool Overview tab will be your first resource that helps you check out the Asset Originator. Let’s start below, where you’ll find a short introduction to the Asset Originator and the asset type.
In the header you'll find the most important metrics for this pool: asset type, asset maturity, DROP APR and pool value.
![](./images/pool_info.png)

The asset maturity tells you how liquid your investment may be. The maturity date of every financing lets you know when the asset originator is obliged to pay back the loan. Upon repayment investors will always be able to redeem before an asset originator can use the funds for new financings again. Thus you can see the average maturity as a “soft lockup” period. The reason it is “soft” is because you technically still can withdraw funds from the pool reserve, if the pool reserve has money to draw or other investors want to invest into the pool.

Under Asset Originator Details, you'll find information about the asset originator and links to more resources.
![](./images/asset_originator_details.png)

## Gauging origination history
If you want to take a look at the past and current financings of the pool, change to the “Asset” tab, which will give you a list of the asset originator’s history with Tinlake as well as the graph of the development of asset value and reserve. For all assets in the list, a status of "NFT locked" (so the NFT is locked as collateral but not financed yet) “Ongoing” or “Completed” (fully repaid) will be listed.

![](./images/pool_financings.png)

## Sizing up the Pool by the Numbers: Risk and Return
### Intro
One general rule of thumb in finance (both TradFi and DeFi) is that risks and returns are related — higher potential returns usually equate to higher risks. Investors demand higher returns to be compensated for taking on higher risk. The main question when making investment decisions is whether the (expected) return of an investment is worth taking on the (expected) financial risk associated with it. Investing into Tinlake pools will give you attractive and stable yields, as well as CFG rewards as returns, but as with any other investment, using Tinlake comes with risks. 

### Earning yield
Let’s start with the returns. As a DROP investor, you will earn a stable return on your investment. Every pool has a fixed DROP rate (APR — “Annual Percentage Rate”) that earns you interest. The APR is compounded every second thus your effective yield (APY — “Annual Percentage Yield”) will usually be slightly higher due to the compounding. For example, an APR of 10% translates into an APY of ~10.50% with secondly compounding (please find more information on the differences between APR and APY here).You find both, DROP APR and APY of a pool e.g. on the pools investment page.

Note that the DROP APR is applied on financed assets only and excess liquidity in the pool’s reserve does not earn interest. Therefore keep an eye out on how Issuers manage their liquidity. A high reserve ratio decreases your effective yield. If a pool with an APY of 10.50% has a current reserve of 20% of the pool value you earn an effective yield of roughly 10.50% * (1–20%) = 8.40%. You can find the average DROP APY over the last 30 days for every pool on Tinlake’s Dashboard and at the top of every pool’s overview page.

Returns for TIN investor returns will usually be higher but also more volatile. On top of earning the full interest income of the pool on their investment they also receive the spread between financing fees the Issuers pay and the DROP rate on the DROP share of the pool. In return for these higher fees, they take defaults first. For example, if an Issuer fails to repay their financing for an asset within the pool this default will first reduce the TIN portion of the pool before impacting the DROP. TIN is currently only open for professional investors with a long-term investment horizon. Interested investors can contact the pool’s issuers directly for TIN investments.

### Farming rewards
On top of the interest accrued you can also earn rewards with Tinlake investments through Centrifuge’s native token CFG. CFG holders power the Centrifuge protocol by participating in on-chain governance for future chain upgrades. Note that these are rewards from the Centrifuge protocol for providing liquidity to the ecosystem independent from the pool, it’s issuers, their asset originators, or any Centrifuge entity.

### Credit/Default risk
Credit or default risk is the most common risk associated with an investment. It is defined as the possibility of a loss resulting from a borrower’s (or in Tinlake’s case, an Issuer’s) failure to repay a loan. In Tinlake’s case, this may happen if an outstanding financing is not repaid by an Issuer because an underlying asset, e.g. an invoice, was not repaid.
As a DROP investor you have several layers of protection against defaults. First, many Issuers only finance up to a certain percentage of the value of the underlying assets to protect themselves against default. ConsolFreight (CF4) for example only advances 50–90% of the invoice amount depending on the counterparty. The second layer of protection for DROP investors is the minimum TIN risk buffer. This buffer is a predetermined TIN percentage of the pool, which further insulates DROP investors through the first loss mechanism described above. Issuers also need to invest into TIN themselves to grow the pool and thus have “skin in the game”. If there is a default in a pool, the outstanding financing will be written off and the Issuer will take any first losses themselves, incentivizing them to undertake quality underwriting. Lastly, in case of a default, often a large part or the entire outstanding amount can be recovered through liquidating the collateral, e.g. in the case of New Silver, the underlying real estate. Note that until now, there haven’t been any defaults in any Tinlake pools.

### Liquidity risk
Liquidity is how easily an investment can be converted to cash. In Tinlake this refers to how quickly you can redeem your investment if you want or need to. This depends on how much liquidity currently is in the reserve. If enough liquidity is in the reserve and you lock your DROP/TIN token for redemption they should be executed at the next epoch (usually daily). Repayments from Issuers and investments from other investors also increase the reserve to serve redemptions. This means, the maturity of the underlying assets can be seen as a “soft lock”. In case no one else wants to invest, this is the longest period your investment may be locked before you can redeem.
You can find the expected range of maturities and the current average maturity for every pool on the “Pool Overview” page.

### Interest rate risk
Interest rate risk denotes the risk that changes in the underlying interest rates impact your investment. In the case of Tinlake, this mainly relates to changes in the financing fees (which impact TIN returns) and DROP rate. The financing fees and DROP rate are fixed but they can be changed with a notice period of several weeks by the Issuer. In this case the Issuer amends the pool’s legal documents and informs the pool investors of a pending change to the DROP rate. This gives investors the time to redeem if they do not want to remain invested at the new conditions. Note that this rarely happens and usually in line with market conditions.

### Exchange rate risk
Exchange-rate risk arises from the change in price of one currency in relation to another. This is not inherent to Tinlake but is still a risk you should be aware of in DeFi as well. Tinlake pools are (so far) predominantly denominated in DAI, which is pegged to the USD ~1:1. If the peg breaks the value of your investment in USD terms may change. If you are an investor usually holding funds in a different currency than USD, e.g. EUR or GBP, you take on additional exchange risk between DAI & USD and these currencies.

### Smart Contract risk
Among many innovations and the potential to build a new, open, decentralized financial system DeFi has also introduced a new kind of risk to the financial world: Smart contract risk. Smart contracts may contain bugs that may lead to loss of funds or may be exploited. To minimize this risk, Tinlake’s smart contracts have been audited multiple times. Find these audit reports [here](https://github.com/centrifuge/security/tree/main/audits)

