---
id: terms
order: 1
title: Understanding Tinlake's Key Terms
contributors: <Dennis Wellmann:dennis@centrifuge.io>
redirect_from:
  - /learn
  - /learn/
---

## What are Tinlake pools?
### Tinlake Pool
A Tinlake pool is an open, smart-contract-based financing platform that brings together businesses or "Asset Originators" and Investors through Decentralized Finance (DeFi). With a Tinlake pool, Asset Originators can finance real-world assets, such as invoices, mortgages, or streaming royalties on-chain via the investment of crypto investors and Defi protocols. They do this by tokenizing their financial assets into Non-Fungible Tokens (“NFTs”) and using these NFTs as collateral in their Tinlake pool.

### Revolving pool
Tinlake pools are set up as "Revolving pools". Revolving pools allow investors to lock investments and redemptions at any point in time. A decentralized solver mechanism matches investments and redemptions with the liquidity in the pool and ensures that certain risk metrics remain intact. This ensures that Asset Originators have a constant source of liquidity while investors can flexibly invest and redeem.

## Entities involved in Tinlake pools
### Issuer
The legal entity (a special purpose vehicle - "SPV") that "holds" the assets, draws down the financing from Tinlake, issues TIN/DROP tokens in return for investments, and legally manages the pool.

### Asset Originator
The Asset Originator originates real-world assets and pledges these to the Issuer in return for financing. For some pools, Asset Originators set up a dedicated SPV to act as their issuer. For other pools, an issuer can also have several different Asset Originators originating assets for a Tinlake pool.

### Tinlake Investors
Tinlake investors provide the liquidity that issuers use to finance assets and in return earn yield and CFG rewards. For every Tinlake pool, investors can invest in two different tokens, TIN and DROP,  similar to Junior/Senior investment structures common in traditional finance [see below].

### DeFi protocols
Tinlake pools allow direct integration with DeFi protocols as a source of liquidity. Currently, several pools are directly integrated with a Maker vault. Centrifuge is currently also working on an integration with Aave.

## Tinlake's investment tokens
### Tinlake pools two tranches
Investors usually have different risk preferences. Some investors feel comfortable with bearing higher risks if they expect higher returns. Many other investors are content with relatively stable returns knowing they are at less risk of losing part or all of their investment.
This is why Tinlake pools come with two different tranches, a senior token with a stable return ("DROP") and a more volatile junior token ("TIN").  DROP tokens offer a stable return protected against defaults by a TIN buffer. You can find out more details about the TIN & DROP tokens [here](TODO Link to two tranches section).

### Senior token (DROP)
The senior token, DROP, known as the “yield token,” is protected against defaults by the TIN token and receives stable (but usually lower) returns. The DROP return is mainly determined by the DROP rate (APR) that is applied to assets financed by the issuer.

### Junior token (TIN)
TIN’s returns are expected to be higher, yet more volatile as they absorb any potential defaults first. If a financing is not repaid it is written off, reducing the NAV and thus the TIN value. This is why TIN isn’t fully open to the public yet as the pools scale with experienced TIN investors first. 
In return for taking the first-loss risk, the TIN returns are usually significantly higher than DROP returns as TIN also receives the spread between the average financing fee on originated assets and the DROP rate. 

## Tinlake Assets
### Asset
An asset in Tinlake is a real-world asset such as invoices, mortgages, or streaming royalties that have a stable value and/or payment stream so it can be used as collateral to borrow against. It is pledged to the legal issuer of the pool. 

### NFT
An NFT on the Tinlake patform is a tokenized representation of a real-world asset. Centrifuge's NFTs on Ethereum follow the ERC-721 standard. Centrifuge NFTs can be locked into Tinlake pools as collateral by the Issuer to draw down financing.

### Financing
After locking an NFT as collateral into their Tinlake pool, an issuer can draw down financing up to the value of the NFT from Tinlake. Every financing accrues interest at the financing fee. To close the financing, the entire outstanding amount including accrued interest needs to be repaid. The issuer can only unlock the collateral NFT after full repayment.

### Asset value / NAV
The `NAV` (Net asset value) reflects the present value of the outstanding portfolio of financings including the reserve (liquidity) of the pool. It is the sum of the present values of the risk-adjusted expected repayments of all outstanding financings. It is calculated through Tinlake's Pricing and Valuation Smart contract ("NAV feed") at every `Epoch`. Valuation parameters are also provided by the document underlying the NFT, which is created and shared through Centrifuge's p2p Protocol. The NAV ultimately determines the TIN tranche value and thus the token price at which investors invest and redeem at every epoch. Please find more details about Tinlake's valuation approach, including simplified examples [here](/learn/pool-valuation/).

## Investments and Redemptions
### Tinlake investments
To invest in a Tinlake pool an investor locks DAI into Tinlake's smart contract. This locked order can be canceled at any time until the locked transaction is executed at the end of an epoch at the current DROP/TIN price. After the execution of the transaction, investors can collect their DROP/TIN. 
Note that locked orders can also be partially executed. In this case, investors can collect the DROP/TIN based on the partially executed amount. The remaining DAI remains locked in Tinlake's smart contract for further execution until the locked order is canceled.

### Tinlake redemptions
To redeem an investment from a Tinlake pool an investor locks DROP/TIN into Tinlake's smart contract. This locked order can be cancelled at any time until the locked transaction is executed at the end of an epoch at the current DROP/TIN price. After the execution of the transaction, investors can collect their DAI. 
Note that locked orders can also be partially executed. In this case, investors can collect the DAI based on the partially executed amount. The remaining DROP/TIN remains locked in Tinlake's smart contract for further execution until the locked order is cancelled.

### Epochs - Execution of investments
For Tinlake's Revolving Pools all investment inflows/outflows are locked over a defined period of time ("Epoch") and automatically executed at the end of this period following predetermined priorities and risk metrics.
Investors can supply more liquidity at any point during an epoch. At the end of the epoch, all locked orders will be processed and executed at the current TIN/DROP prices considering e.g. the current and maximum liquidity of the pool and the current vs. the minimum TIN risk buffer. If  all orders cannot be executed the Tinlake linear "Solver" mechanism would be initiated to find the optimal solution while adhering to risk metrics and e.g. DROP seniority.


## Pool Liquidity
### Reserve
The `Reserve` is the current liquidity in the pool that is not deployed to finance assets ("~cash" in traditional finance). It is available for redemption by investors and asset originations by the Asset Originator. New investments and repayments of financings increase the Reserve while redemptions and financing an asset decrease the reserve. The reserve can be limited by the "max reserve amount" via the issuer to reduce "cash drag". 

### Cash drag
Tinlake's Financing Fees and the DROP APR are applied on financed assets only and excess liquidity in the pool’s reserve does not earn interest. Therefore keep an eye out on how Issuers manage their liquidity - high liquidity or "cash" holding decreases the pool's effective DROP and TIN yields.

#### MAX Reserve amount
The issuer can limit the liquidity they are willing to  accept with the `maximum reserve amount`. No investments will be accepted if the current `Reserve` is larger than the `max reserve amount.`
 
### Liquidity available
The `Liquidity available` for redemptions is determined by the liquidity in the Reserve. For pools directly integrated with a Maker vault the Reserve is usually zero as liquidity for originations, and redemptions can be minted directly into the pool's reserve from the Maker vault.

### DROP investment capacity
The DROP investment capacity indicates how much capacity is left for additional DROP investments. This capacity can be limited by the `max reserve` set by the pool's issuer and the amount of excess TIN left above the minimum TIN risk buffer.

### Oversubscribed pools
If a pool is oversubscribed, no additional DROP can join the pool and locked investments cannot be executed. A pool can be oversubscribed for two reasons:
* The pool's reserve is above the `max reserve` set by the issuer
* The TIN risk buffer is at its minimum
The pool can become open for investments again through a decrease of the reserve by DROP redemptions or asset originations, an increase of the `max reserve` or additional TIN investments that increase the current `TIN risk buffer`.


## Tinlake Interest rates, fees, and yields
### Financing Fee
The Financing Fee is the rate at which the outstanding amount of an individual financing accrues interest. It is expressed as an "APR" (Annual Percentage Rate) and compounds interest every second. For example, a financing fee of 8.00% compounding interest over seconds through the course of one year leads to an APY ("Annual Percentage Yield") of 8.xx%. Find more information on the difference between APR and APY [here](https://www.investopedia.com/personal-finance/apr-apy-bank-hopes-cant-tell-difference/). Different assets can have different financing fees depending on their `Risk Score`.

### DROP APR
The DROP APR is the rate at which the `DROP token` accrues interest, per second. Note, that this is only applied to deployed capital, thus liquidity in the reserve does not generate yield for the DROP token. The actual DROP return may therefore differ from the DROP APR due to compounding and cash drag.

### 30d DROP yield
To provide a good approximation of the current DROP return considering the impact of compounding and "cash drag" Tinlake also display's the current annualized DROP yield over the last 30 days. It is calculated as 

$$
30d DROP yield = (\frac{{DROP token price}_{t}}{{DROP token price}_{t-30}}-1)*\frac{365}{30}
$$

where `t` denotes today and `365` is the number of days per year.

### TIN return
The `junior tranche` does not have a predefined fixed or variable interest rate. TIN returns are mainly driven by the spread between `financing rates` and `DROP APRs` and capture the increasing value of the portfolio. As liquidity in the reserve does not generate yield, a high reserve also drags down TIN returns.

### 90d TIN yield
TIN returns are displayed as annualized yields of the last 90 days to provide a good approximation of the current TIN returns. It is calculated as 

$$
90d TIN yield = (\frac{{TIN token price}_{t}}{{TIN token price}_{t-90}}-1)*\frac{365}{90}
$$

where `t` denotes today and `365` is the number of days per year.

### Annualized CFG rewards
Tinlake investments earn daily rewards in Centrifuge's native token (CFG). The CFG reward rate is an annualized representation of these rewards based on the current CFG token price. This can be illustrated with a simple example. Let's assume for simplicity, an investor holds a Tinlake investment of 10k DAI over the course of a year. If the current reward rate is 10 CFG per 10k per day, this earns the investor 3,650 CFG. Assuming (again, for simplicity) a CFG price of DAI 1.00, for a 10k investment, this would equal an annual return of 36.50%. 
Note that rewards are independent of the pool's issuer and not guaranteed - please see the investment disclaimer for more details.

## Risk and pricing
### TIN risk buffer
TIN protects the DROP tranche against defaults of financed assets. If a financing is not repaid it is written off, reducing the NAV and with it the TIN value. DROP's principal and returns remain unaffected as long as there is TIN left in the pool. Thus, the current `Tin risk buffer` describes the extent of TIN protection for the DROP tranche. It is calculated as

$$
Current TIN risk buffer = \frac{Junior Value}{Junior Value + Senior Value} = \frac{Junior Value}{Pool Value}
$$

The higher the `Current TIN Ratio` the higher the TIN risk protection for DROP.

### Min TIN risk buffer
The minimum TIN risk buffer is the lower limit of the `TIN risk buffer`. It ensures that DROP investors are protected by a certain amount of TIN invested in the pool at any time.
If the `current TIN risk buffer` is below the minimum TIN risk buffer DROP Investments, TIN Redemptions and Asset Originations are not possible anymore until the min TIN risk buffer is restored e.g. through further TIN investments. Correspondingly no DROP Investments or TIN redemptions would be accepted that would break the ratio until the Min risk buffer is restored.

### Risk scorecard
The financing fee per financing is determined by a `risk score` which is stored in the pool's `risk scorecard` in a smart contract. A pricing oracle determines the risk score and value of every NFT locked into Tinlake based on pricing information about the asset/NFT shared via the Centrifuge p2p Protocol. Please find more information on how pricing based on a scorecard works [here](https://medium.com/p/cf6655132bef). The risk score also determines the risk adjustment applied to calculate the present value of a financing which determines the `NAV`.
