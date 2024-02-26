---
id: intro-to-pools
order: 1
title: Introduction to Pools
contributors: <Dennis Wellmann:dennis@centrifuge.io>, <Jay:jay@centrifuge.io>, <Devin Black:devin@k-f.co>
category: subpage
---

This page explores the core concepts and terminology of Centrifuge's pools.

## Centrifuge pool

A Centrifuge pool is an onchain structure that brings together asset issuers and investors. With a Centrifuge pool, issuers can finance real-world assets, including but not limited to consumer finance, real estate, or U.S. treasuries onchain via the investment of crypto investors and DeFi protocols. They do this by tokenizing their financial assets into non-fungible tokens (NFTs) and using these NFTs as collateral in their Centrifuge pool.

### Revolving pool

Centrifuge pools are set up as "revolving pools". Revolving pools allow investors to lock investments and redemptions at any point in time. A decentralized solver mechanism matches investments and redemptions with the liquidity in the pool and ensures that certain risk metrics remain intact. This ensures that issuerss have a constant source of liquidity while investors can flexibly invest and redeem.

## Entities involved in Centrifuge pools

### Issuer

The legal entity (a special purpose vehicle - "SPV") that "holds" the assets, draws down the financing from Centrifuge, issues tranche tokens in return for investments, and manages the pool.

### Asset originator

The asset originator originates real-world assets and pledges these to the issuer in return for financing. For some pools, asset originators set up a dedicated SPV to act as their issuer. For other pools, an issuer can also have several different asset originators originating assets for a Centrifuge pool.

### Investors

Investors provide the liquidity that issuers use to finance assets and in return earn yield. For every Centrifuge pool, investors can invest in pool tranche tokens which represent their stake in that tranche. These tranches represent a tired investment structure with different tranches common in traditional finance — see below.

## Tranche tokens

### Centrifuge's tranches

Investors usually have different risk preferences. Some investors feel comfortable with bearing higher risks if they expect higher returns. Many other investors are content with relatively stable returns knowing they are at less risk of losing part or all of their investment.

This is why Centrifuge pools come with optionality of one to five tranches. The typical set up is a two tranche system: a senior token with a stable return and a more volatile junior token. The issuer sets the name of these tokens. Senior tokens offer a stable return protected against defaults by a junior buffer.

### Senior token
The senior token, known as the “yield token,” is protected against defaults by the junior token and receives stable (but usually lower) returns. The senior token return is mainly determined by the senior token rate (APR) that is applied to assets financed by the issuer.

### Mezzanine token
Mezzanine token represent tranches stacked between senior and junior tranches. They also have a fixed return and are protected against defaults by the junior tranche while being subordinated to senior.

### Junior token
The junior token’s returns are expected to be higher, yet more volatile as they absorb any potential default losses first. For this reason, the junior token tranche is typically not open to the public as the pools scale with experienced junior investors first. Typically you would contact the pool issuer directly to join the junior tranche.

## Assets on Centrifuge

### Asset
An asset in a Centrifuge pool is a real-world asset — like real estate or US treasuries — tokenized onchain. These assets typically have a stable value and/or payment stream so it can be used as collateral to borrow against. It is pledged to the legal issuer of the pool.

### NFT
An NFT on Centrifuge is a tokenized representation of a real-world asset. Centrifuge NFTs can be locked into Centrifuge pools as collateral by the issuer to draw down financing.

### Financing
After locking an NFT as collateral in their Centrifuge pool, an issuer can draw down financing from Centrifuge up to the value of the NFT. Every financing accrues interest at the financing fee. To close the financing, the entire outstanding amount including accrued interest needs to be repaid. The issuer can only unlock the collateral NFT after full repayment.

### Asset value / NAV
The NAV (net asset value) reflects the present value of the outstanding portfolio of financings including the reserve (liquidity) of the pool. It is the sum of the present values of the risk-adjusted expected repayments of all outstanding financings. Valuation parameters are also provided by the document underlying the NFT, which is created and shared through Centrifuge's private offchain data layer.

The NAV ultimately determines the junior tranche value and thus the token price at which investors invest and redeem at every epoch. Centrifuge pools allow for different type of valuation methods. You can find more details about Centrifuge's valuation approach, including simplified examples [here](/getting-started/pool-valuation/).

## Investments and redemptions

### Investments
To invest in a Centrifuge pool, an investor submits an investment order in the pool denominated stablecoin. This order can be canceled at any time up until the transaction is executed at the end of an epoch at the current token price. After the execution of the transaction, investors can collect their tranche token.

Note that investment orders can also be partially executed. In this case, investors can collect their tranche token based on the partially executed amount. The remaining stablecoins in the order remain submitted for further execution until the  order can be fulfilled or is canceled.

### Redemptions
To redeem an investment from a pool on Centrifuge, an investor submits an order to redeem their tranche tokens. This order can be cancelled at any time up until the order is executed at the end of an epoch at the current token price. After the execution of the transaction, investors can collect their stablecoins back.

As with investment orders, redemption orders can also be partially executed. In this case, investors can collect their stablecoins based on the partially executed amount. The remaining tranche tokens remain in the pool, awaiting further redemption in subsequent epochs until the order is fulfilled or is cancelled.

### Epochs and order execution

For Centrifuge's revolving pools, all investment and redemption are locked over a defined period of time ("Epoch") and automatically executed at the end of this period following predetermined priorities and risk metrics. Investors can supply more liquidity at any point during an epoch; they can also adjust a redemption order during the epoch.

At the end of the epoch, all locked orders will be processed and executed at the current token prices considering the current and maximum liquidity of the pool and the current subordination ratios. If all orders cannot be executed, Centrifuge's solver mechanism will be initiated to find the optimal solution while adhering to risk metrics and tranche token seniority.

## Pool Liquidity

### Reserve
The reserve is the current liquidity in the pool that is not deployed to finance assets ("cash" in traditional finance). It is available for redemption by investors and for asset financing by the issuer. New investments and repayments of financed assets increase the reserve, while redemptions and financing an asset decrease the reserve. A maximum reserve amount can be set by the issuer to reduce cash drag.

### Cash drag
Centrifuge's financing fees are applied on financed assets only and excess liquidity in the pool’s reserve does not earn interest. Therefore, it's important to note on how issuers manage their liquidity. High liquidity or "cash" holding decreases the pool's effective yields.

### Max Reserve amount
The issuer can limit the liquidity they are willing to accept with the maximum reserve amount. No investments will be accepted if the current reserve is larger than the max reserve amount.

### Available liquidity
The liquidity available for redemptions is determined by the liquidity in the reserve. For pools directly integrated with a Maker vault, the reserve is usually zero as liquidity for originations, and redemptions can be minted directly into the pool's reserve from the Maker vault.

### Tranche investment capacity
The tranche investment capacity indicates how much capacity is left for additional investments. This capacity can be limited by the max reserve set by the pool's issuer and the tranche subordination ratios.

### Oversubscribed pools
If a pool is oversubscribed, no additional senior investors can join the pool, and investment orders cannot be executed. A pool can be oversubscribed for two reasons:

- The pool's reserve is above the max reserve` set by the issuer.
- The senior subordination ratio is at its limit and thus the pool can not take on more senior tranche investments without more capital invested into the junior tranche.

- The pool can become open for investments again through a decrease of the reserve by senior investor redemptions, asset originations, an increase of the max reserve or additional junior investments are made into the pool that increase the current junior subordination.

## Interest rates, fees, and yields
### Financing Fee
The Financing Fee is the rate at which the outstanding amount of an individual asset financing accrues interest. It is expressed as an "APR" (Annual Percentage Rate) and compounds interest every second. For example, a financing fee of 8.00% compounding interest over seconds through the course of one year leads to an APY ("Annual Percentage Yield") of 8.xx%. Different assets can have different financing fees depending on their risk score.

### Senior token return
The senior token APR is the rate at which the senior token accrues interest per second. Note, that this is only applied to deployed capital, thus liquidity in the reserve does not generate yield for the senior token. The actual senior token return may therefore differ from the senior Token APR due to compounding and cash drag.

### Junior token return
The junior tranche does not have a predefined fixed or variable interest rate. Junior token returns are mainly driven by the spread between financing rates and senior token APR and capture the increasing value of the portfolio. As liquidity in the reserve does not generate yield, a high reserve also drags down potential junior token returns.

## Risk and pricing
### Current Subordination
The junior tranche protects the more senior tranches against defaults of financed assets by taking the first loss position. If a financing is not repaid and is written off, this would reduce the NAV and with it the junior token value. The senior token's principal and returns remain unaffected as long as the loss is less than the total junior tranche of the pool at the time of default or write off. Thus, the current subordination ratios describe the extent of junior tranche protection for the more senior tranches. It is calculated per tranche as

$$
Current subordination  = \frac{Sum of subordinated tranche values}{Pool Value}
$$

The higher the subordination ratio, the higher the risk protection for the respective tranche.

### Min subordination ratio
The minimum ratio is the lower limit of the current subordination ratio. It ensures that senior investors are protected by a certain amount of more junior token invested in the pool at any time.

If the current subordination ratio is below the minimum subordination ratio, certain transactions (tranche investments, junior tranche redemptions and asset originations) are not possible anymore until the subordination ratio is restored e.g. through further investments in the junior tranche.
