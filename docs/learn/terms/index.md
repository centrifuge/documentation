---
id: terms
order: 6
title: Understanding Centrifuge's Key Terms
contributors: <Dennis Wellmann:dennis@centrifuge.io>, <Jay:jay@centrifuge.io>
redirect_from:
  - /learn
  - /learn/
---

## What are Centrifuge pools?
### Centrifuge Pool
A Centrifuge pool is an open, smart-contract-based financing platform that brings together businesses or "Asset Originators" and Investors through Decentralized Finance (DeFi). With a Centrifuge pool, Asset Originators can finance real-world assets, such as invoices, mortgages, or streaming royalties on-chain via the investment of crypto investors and DeFi protocols. They do this by tokenizing their financial assets into Non-Fungible Tokens (“NFTs”) and using these NFTs as collateral in their Centrifuge pool.

### Revolving pool
Centrifuge pools are set up as "revolving pools". Revolving pools allow investors to lock investments and redemptions at any point in time. A decentralized solver mechanism matches investments and redemptions with the liquidity in the pool and ensures that certain risk metrics remain intact. This ensures that Asset Originators have a constant source of liquidity while investors can flexibly invest and redeem.

## Entities involved in Centrifuge pools
### Issuer
The legal entity (a special purpose vehicle - "SPV") that "holds" the assets, draws down the financing from Centrifuge, issues Senior/Junior tokens in return for investments, and legally manages the pool.

### Asset Originator
The Asset Originator originates real-world assets and pledges these to the Issuer in return for financing. For some pools, Asset Originators set up a dedicated SPV to act as their issuer. For other pools, an issuer can also have several different Asset Originators originating assets for a Centrifuge pool.

### Centrifuge Investors
Centrifuge investors provide the liquidity that issuers use to finance assets and in return earn yield and CFG rewards. For every Centrifuge pool, investors can invest in pool tranche tokens which represent their stake in that tranche. These Junior and Senior token tranches similarly represent a Junior/Senior investment structures common in traditional finance [see below].

### DeFi protocols
Centrifuge pools allow direct integration with DeFi protocols as a source of liquidity. Currently, several pools are directly integrated with a Maker vault; several pools are also integrated with the [RWA Market on Aave](https://rwamarket.io/).

## Centrifuge's investment tokens
### Centrifuge's tranches
Investors usually have different risk preferences. Some investors feel comfortable with bearing higher risks if they expect higher returns. Many other investors are content with relatively stable returns knowing they are at less risk of losing part or all of their investment.
This is why Centrifuge pools come with optionality of one to five tranches. The typical set up is a two tranche system, a senior token with a stable return and a more volatile junior token. The Issuer sets the name of these tokens.  Senior tokens offer a stable return protected against defaults by a Junior buffer. You can find out more details about the Senior & Junior tokens [here](/learn/multi-tranche-system/).

### Senior token
The senior token, known as the “yield token,” is protected against defaults by the Junior token and receives stable (but usually lower) returns. The Senior token return is mainly determined by the Senior token rate (APY) that is applied to assets financed by the issuer.

### Junior token
The Junior token’s returns are expected to be higher, yet more volatile as they absorb any potential default losses first. If a financing is not repaid it is written off, reducing the NAV and thus the Junior token value. This is why the Junior token tranche isn’t fully open to the public as the pools scale with experienced Junior investors first. To join this tranche please contact the pool issuer. 
In return for taking the first-loss risk, the Junior token returns are usually significantly higher than the Senior Token returns as the Junior token also receives the spread between the average financing fee on originated assets and the fixed Senior APY rate. 

## Assets on Centrifuge
### Asset
An asset in a Centrifuge pool is a real-world asset such as invoices, mortgages, or streaming royalties that have a stable value and/or payment stream so it can be used as collateral to borrow against. It is pledged to the legal issuer of the pool. 

### NFT
An NFT on the Centrifuge platform is a tokenized representation of a real-world asset. Centrifuge's NFTs on Ethereum follow the ERC-721 standard. Centrifuge NFTs can be locked into Centrifuge pools as collateral by the Issuer to draw down financing.

### Financing
After locking an NFT as collateral into their Centrifuge pool, an issuer can draw down financing up to the value of the NFT from Centrifuge. Every financing accrues interest at the financing fee. To close the financing, the entire outstanding amount including accrued interest needs to be repaid. The issuer can only unlock the collateral NFT after full repayment.

### Asset value / NAV
The `NAV` (Net asset value) reflects the present value of the outstanding portfolio of financings including the reserve (liquidity) of the pool. It is the sum of the present values of the risk-adjusted expected repayments of all outstanding financings. It is calculated through Centrifuge's Pricing and Valuation Smart contract ("NAV feed") at every `Epoch`. Valuation parameters are also provided by the document underlying the NFT, which is created and shared through Centrifuge's p2p Protocol. The NAV ultimately determines the Junior tranche value and thus the token price at which investors invest and redeem at every epoch. Please find more details about Centrifuge's valuation approach, including simplified examples [here](/learn/pool-valuation/).

## Investments and Redemptions
### Investments
To invest in a Centrifuge pool an investor locks the pool denominated stablecoin into Centrifuge's smart contract. This locked order can be canceled at any time up until the locked transaction is executed at the end of an epoch at the current Senior token/Junior Token price. After the execution of the transaction, investors can collect their Senior token/Junior Token. 
Note that locked orders can also be partially executed. In this case, investors can collect the Senior token/Junior Token based on the partially executed amount. The remaining stablecoin remains locked in Centrifuge's smart contract for further execution until the locked order can be fulfilled or is canceled.

### Redemptions
To redeem an investment from a pool on Centrifuge, an investor locks their Senior token/Junior Token into Centrifuge's smart contract. This locked order can be cancelled at any time up until the locked transaction is executed at the end of an epoch at the current Senior token/Junior Token price. After the execution of the transaction, investors can collect their stablecoin back. 
Note that locked orders can also be partially executed. In this case, investors can collect the stablecoin based on the partially executed amount. The remaining Senior token/Junior Token remains locked in Centrifuge's smart contract for further execution until the locked order is fulfilled or is cancelled.

### Epochs - Execution of investments
For Centrifuge's Revolving Pools all investment inflows/outflows are locked over a defined period of time ("Epoch") and automatically executed at the end of this period following predetermined priorities and risk metrics.
Investors can supply more liquidity at any point during an epoch. At the end of the epoch, all locked orders will be processed and executed at the current Senior token/Junior Token prices considering e.g. the current and maximum liquidity of the pool and the current vs. the minimum Junior risk buffer. If  all orders cannot be executed the Centrifuge linear "Solver" mechanism would be initiated to find the optimal solution while adhering to risk metrics and e.g. Senior Token seniority.


## Pool Liquidity
### Reserve
The `Reserve` is the current liquidity in the pool that is not deployed to finance assets ("~cash" in traditional finance). It is available for redemption by investors and asset originations by the Issuer. New investments and repayments of financings increase the Reserve while redemptions and financing an asset decrease the reserve. The reserve can be limited by the "max reserve amount" via the issuer to reduce "cash drag". 

### Cash drag
Centrifuge's Financing Fees and the Senior APR are applied on financed assets only and excess liquidity in the pool’s reserve does not earn interest. Therefore keep an eye out on how Issuers manage their liquidity - high liquidity or "cash" holding decreases the pool's effective Senior Token and Junior Token yields.

#### MAX Reserve amount
The issuer can limit the liquidity they are willing to  accept with the `maximum reserve amount`. No investments will be accepted if the current `Reserve` is larger than the `max reserve amount.`
 
### Liquidity available
The `Liquidity available` for redemptions is determined by the liquidity in the Reserve. For pools directly integrated with a Maker vault the Reserve is usually zero as liquidity for originations, and redemptions can be minted directly into the pool's reserve from the Maker vault. 

### Senior Tranche investment capacity
The Senior Tranche investment capacity indicates how much capacity is left for additional Senior investments. This capacity can be limited by the `max reserve` set by the pool's issuer and the amount of excess Junior tranche investment left above the minimum Junior risk buffer.

### Oversubscribed pools
If a pool is oversubscribed, no additional Senior investors can join the pool and locked investments cannot be executed. A pool can be oversubscribed for two reasons:
* The pool's reserve is above the `max reserve` set by the issuer
* The Junior risk buffer is at its minimum and thus the pool can not take on more Senior investments without more Junior capital invested. 
The pool can become open for investments again through a decrease of the reserve by Senior investor redemptions, asset originations, an increase of the `max reserve` or additional Junior investments are made into the pool that increase the current `Junior risk buffer`.


## Centrifuge Interest rates, fees, and yields
### Financing Fee
The Financing Fee is the rate at which the outstanding amount of an individual financing accrues interest. It is expressed as an "APR" (Annual Percentage Rate) and compounds interest every second. For example, a financing fee of 8.00% compounding interest over seconds through the course of one year leads to an APY ("Annual Percentage Yield") of 8.xx%. Find more information on the difference between APR and APY [here](https://www.investopedia.com/personal-finance/apr-apy-bank-hopes-cant-tell-difference/). Different assets can have different financing fees depending on their `Risk Score`.

### Senior token APR
The Senior token APR is the rate at which the `Senior token` accrues interest, per second. Note, that this is only applied to deployed capital, thus liquidity in the reserve does not generate yield for the Senior token. The actual Senior token return may therefore differ from the Senior Token APR due to compounding and cash drag.

### 30d Senior token yield
To provide a good approximation of the current Senior token return considering the impact of compounding and "cash drag" Centrifuge also display's the current annualized Senior token yield over the last 30 days. It is calculated as 

$$
30d Senior yield = (\frac{{Senior token price}_{t}}{{Senior token price}_{t-30}}-1)*\frac{365}{30}
$$

where `t` denotes today and `365` is the number of days per year.

### Junior token return
The `junior tranche` does not have a predefined fixed or variable interest rate. Junior token returns are mainly driven by the spread between `financing rates` and `Senior token APRs` and capture the increasing value of the portfolio. As liquidity in the reserve does not generate yield, a high reserve also drags down potential Junior token returns.

### 90d Junior token yield
Junior token returns are displayed as annualized yields of the last 90 days to provide a good approximation of the current Junior token returns. It is calculated as 

$$
90d Junior token yield = (\frac{{Junior token price}_{t}}{{Junior token price}_{t-90}}-1)*\frac{365}{90}
$$

where `t` denotes today and `365` is the number of days per year.

### Annualized CFG rewards
Centrifuge investments earn daily rewards in Centrifuge's native token (CFG). The CFG reward rate is an annualized representation of these rewards based on the current CFG token price. This can be illustrated with a simple example. Let's assume for simplicity, an investor holds a Centrifuge investment of 10k DAI (stablecoin) over the course of a year. If the current reward rate is 10 CFG per 10k per day, this earns the investor 3,650 CFG. Assuming (again, for simplicity) a CFG price of DAI 1.00, for a 10k investment, this would equal an annual return of 36.50%. 
Note that rewards are independent of the pool's issuer and not guaranteed as they are likely to change from time to time - please see the investment disclaimer for more details.

## Risk and pricing
### Junior Tranche risk buffer
The Junior tranche protects the Senior tranche against defaults of financed assets by taking the first loss position. If a financing is not repaid and is written off, this would reduce the NAV and with it the Junior Token value. The Senior token's principal and returns remain unaffected as long as the loss is less than the total Junior tranche of the pool at the time of default or write off. Thus, the current `Junior tranche risk buffer` describes the extent of Junior tranche protection for the Senior tranche. It is calculated as

$$
Current Junior tranche risk buffer = \frac{Junior Value}{Junior Value + Senior Value} = \frac{Junior Value}{Pool Value}
$$

The higher the `Current Junior Ratio` the higher the junior risk protection for the senior tranche.

### Min Junior risk buffer
The minimum Junior risk buffer is the lower limit of the `Junior tranche risk buffer`. It ensures that Senior investors are protected by a certain amount of Junior Token invested in the pool at any time.
If the `current Junior tranche risk buffer` is below the minimum Junior risk buffer Senior tranche Investments, Junior tranche Redemptions and Asset Originations are not possible anymore until the min Junior risk buffer is restored e.g. through further Junior tranche investments. Correspondingly no Senior tranche Investments or Junior tranche redemptions would be accepted that would break the ratio until the Min risk buffer is restored.