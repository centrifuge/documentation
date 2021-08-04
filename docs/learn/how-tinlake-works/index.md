---
id: how-tinlake-works
order: 1
title: How Tinlake Works
contributors: <Dennis Wellmann:dennis@centrifuge.io>
redirect_from:
  - /learn
  - /learn/
---

## The Epoch - How investments and redemptions are executed

### Overview

A decentralized pool where investor can invest/redeem and AOs originate/repay repay at anytime needs a decentralized mechanism to coordinate investments, redemptions, originations and repayments. Welcome the `Epoch`.

For Tinlake's Revolving Pools all investment inflows/outflows are locked over a defined period of time ("Epoch") and automatically executed at the and of this period following predetermined priorities and risk metrics. The Asset Originator can use the available liquidity reserve after the invest/redeem transactions have been executed to finance Asset Originations throught the next epoch. Repayments can also happen at any time throughout the epoch, but are collected in a seperated reserve and can only be used for financings in the next epoch to allow investors priority for their redemptions.

To summarize: The following types of inflos/outflows of the asset side can happen during an Epoch by the Asset Originator:

- Financing repayments
- Asset Originations / Financing Drawdowns

The following types of inflows/outflows on the investment side are locked during the epoch and exected at the end of the epoch:

- DROP redemptions
- TIN redemptions
- DROP investments
- TIN investments

![](./images/inflows_outflows.png)

### Length of an Epoch

On the smart contract level, Tinlake epochs have a minimum length that the smart contracts will enforce. Thus an epoch cannot be closed before the minimum length has passed. An epoch does not have a maximum length. After the minimum length has passed the contracts can be called to close the current epoch. So if e.g. the minimum length of an epoch is set at 24h, an epoch will have to last at least 24h but can also last longer. This allows for a flexible set-up to have longer more flexible epochs at the start of a pool to ramp up funding or to allow for more effecient transaction costs e.g. in times of high gas prices or ensures that a pool can start slower at the beginning. A mature, liquid pool can have a service added that limits the epochs to a certain length by closing the epoch at a pre-defined interval. Once the epoch is closed the smart contracts start to process the current state of the pool and process all locked orders (see more details below).

### The invest/redeem process

Investors can supply more liquidity at any point in time during the epoch. The supplied Dai would be locked in the Tinlake contracts until the end of the epoch. The investor can cancel his lock as long as the current epoche is active. In that case, the locked DAI will be transferred back to his wallet. At the end of the epoch, all locked orders will be processed and executed at the current TIN/DROP prices considering the max reserve amount and min TIN risk buffer. After the epoch turn, investors can collect the executed orders in the UI. If part of the investment/redemption could not be executed, it will be rolled over into the next epoch, thus the DAI remain locked. This locked order can be cancelled at any time.

![](./images/invest_redeem_process.png)

The redeem process works similarly. If Existing TIN/DROP investors want to redeem (part of their) TIN/DROP tokens they can lock this Tokens into Tinlake at any point during the epoch. At the end of the epoch, all locked orders will be processed and executed at the current TIN/DROP prices considering the max reserve amount and min TIN risk buffer. After the epoch turn, investors can collect the DAI from the executed orders in the UI. If part of the investment/redemption could not be executed, it will be rolled over into the next epoch, thus these tokens remain locked. This locked order can be cancelled at any time.

### The turn of the Epoch

Once the minimum length of an epoch has passed anyone can call the contracts to "close" the epoch. Once the epoch is closed investor's can't unlock their orders anymore. All Orders locked after the close will be collected and processed. If an epoch close is called without any locked invest/redeem transactions the epoch number will be bumped but the process described below will not be started.

At the Epoch turn, the contracts first process the current state of the pool:

- Total Debt
- NAV
- Reserve
- Senior Debt
- Senior Balance
- Senior Value
- Junior Value
- TIN/DROP Token prices
- TIN risk buffer

Then the contracts check whether all set orders can be executed with the capital available and without breaking the TIN risk buffer or the Max reserve restrictions. If this is the case all orders are immediately executed and the contracts process the new state of the pool. Please find a simple model that illustrates the processing of orders and calulation of the pool state [here](https://docs.google.com/spreadsheets/d/1mkIbWzhD7IXbnbYXKreTMYuaZJEzyTVqllhJnP4YdPs/edit#gid=161507348)

If not all orders can be executed, e.g. because there is not enough capital available in the Reserve (plus new investments) to serve all redemption orders or executing all DROP investments would break the Min TIN risk buffer the Tinlake "Solver mechanism" would be initiated.

### The Solver mechanism

#### Why introduce a solver mechanism?

If not all orders can be executed a mechanism is required to find the optimal solution to ensure as many transactions as possible are executed while adhering to certain restrictions such as the Max Reserve amount, min TIN risk buffer, DROP sovereignity etc. Finding the optimal solution for the four invest redeem transactions type of transactions (DROP redemptions, TIN redemptions, DROP investments, TIN investments) under a defined set of restrictions depicts a classic maximization problem that can be solved with linear programming.

#### How it works

Implementating linear programming in smart contracts is theoretically possible but in practice very complex and expensive in terms of gas fees paid. Tinlake smart contracts thus have a decentralized approach where anyone can run a solver and submit the solution for executed orders four invest/redeem transaction types via a simple contract call. The smart contracts check that the state resulting by this submission adheres to all restrictions described above. If this is the case, a 30min challenging period starts in which anyone can submit a superior solution. The superiority of solutions is determined by a "max weight function" multiplying the amount of orders executed with weights. The weights for this function can differ between pools but usually, e.g. DROP redemption would contain the highgest weight to ensure DROP senority.

If a competing viable solution is submitted resulting in a higher "max function" a new 30min challenging period starts. If no superior solution is submitted anyone can call the "Epoch execute" function after the 30min challenging period to execute the pending transactions according to the accepted solution.

![](./images/solver_mechanism.png)

#### The solver optimization

The linear programming of the Tinlake solver maximizes the execution of the four invest/redeem orders (all in DAI values)

- TINInvestOrder
- DROPInvestOrder
- DROPRedeemOrder
- TINRedeemOrder

according to a max function that allocates a weight to each of the executed order types. Sample weights to ensure a waterfall-like priority focused on DROP seniority could e.g.

- DROP redemptions: 100,000,000,000 [Ensure seniority]
- TIN investments: 100,000,000 [Build up risk buffer]
- DROP investments: 100,000
- TIN redemptions: 100 [Ensure Min TIN risk buffer stability]

The according sample max function could e.g. be

$$
Maxfunctionresult = DROP redemptions * 100,000,000,000 +  TIN investments * 100,000,000 + DROP investments * 100,000 + TIN redemptions * 100
$$

The restrictions for this optimization problem are:

- Executed order needs to be smaller or equal to the submitted order [e.g. Total executed TIN invest <= Total locked TIN invest]
- All executed orders need to be larger than or equal to zero [e.g. Total TIN invest > 0]
- The Reserve is larger than zero and smaller smaller than the `max Reserve amount` after all transactions are executed [0 < Reserve < Maximum Reserve Amount]
- The Tin ratio of the resulting state is larger than the MIN TIN ratio and smaller than the Max TIN ratio [Min TIN risk buffer < Current TIN risk buffer]

### Senior Debt Rebalancing

With every epoch that has executed invest/redeem transactions the relation between Senior and Junior Tranche changes. This also needs to be reflected in `Senior Debt` to ensure that interest accrued on Senior Debt is in line with the Junior/Senior relation and the Senior Tranche does not accrue too much or too little interest. To ensure this, Senior Debt is rebalanced in line with the relation between the `Senior Value = (Senior Debt + Senior Balance)` and the `Pool Value = (NAV + Reserve)`. This relation is called `Senior Ratio`.

$$
Senior Ratio = \frac{Senior Debt + Senior Balance}{NAV + Reserve}
$$

The Senior Ratio is multiplied with the NAV to calculated the `Target Senior Debt` and the Senior Debt and Senior balanced are re-balanced to set the 'Senior Debt' equal to `Target Senior Debt`. Note that the `Senior value` remains unchanged. Please find a simple model that illustrates the re-balancing mechanism [here](https://docs.google.com/spreadsheets/d/1mkIbWzhD7IXbnbYXKreTMYuaZJEzyTVqllhJnP4YdPs/edit#gid=880740688)

### Process Overview

The following graphs summarizes the entire flow of the turn of an Epoch:

![](./images/solver_mechanism_process_overview.png)

## DROP & TIN: The Two Tranches

### Introduction

Investors often want different kinds of risk exposure and yield on the same asset class. In the traditional finance world, one way to achieve this is by using structured finance products and introducing a tiered investment structure or in other words, different tranches. This means that investors can invest in the same asset through different classes of shares with different risk/return profiles. Tinlake implements this functionality by offering the option to issue two tokens, the Tin and Drop tokens, which behave very similarly to how tranches work in the traditional finance world. Note, that Tinlake can also be deployed with just one token (Tin).

### Two-tiered structures in finance: Tinlake's DROP and TIN

While there can be several different tranches in structured finance products, Tinlake's default implementation is a common two-tiered structure, with two different tranches. In finance, this is usually called an A/B tranche or junior/senior tranche structure. In this case, the first class of shares (A/Senior class) usually has a rather stable but lower return than the second class (B/Junior class). In exchange, the junior class usually has higher, but also more variable returns, as it protects the senior class from losses (e.g. from defaulted assets).

Tinlake’s two tokens behave very similarly to how tranches work in a common two-tiered structure. The Tin token can be seen as the junior tranche and token holders that own these tokens take second priority to the Drop token holders when money flows from borrowers back to funders, but depending on the performance of the pool also have the potential to generate a much higher return on their token value than Drop token holders.

### Allocation of Proceeds ("Waterfall")

![Waterfall](./images/loan_waterfall.svg#float=left;margin=20px;width=300px;)

In a standard investment vehicle, investors share the risk and return of the investments pro rata, meaning they share it corresponding to their investment volume. In a tiered investment structure, investors do not share all risks and returns pro rata. Therefore, it somehow needs to be defined how the proceeds are allocated between the different tranches. This is called the waterfall.

Most waterfalls usually follow the principle that proceeds are distributed from top (senior tranche) to bottom (junior tranche). This implicitly means, that losses/defaults are allocated from bottom to top, meaning they are borne by the junior tranche that protects the senior tranche. Therefore, the junior tranche is also sometimes referred to as a _first loss piece_.

A simple waterfall could be, for example, that the senior tranche receives their investment back first and also their (fixed) returns. The remaining proceeds are then allocated to the junior tranche. The higher the proceeds left in the waterfall for the junior tranche are, the higher the return. However there are many different configurations. Another setup could be that the senior tranche receives their investment back first, then the junior tranche receives their investment back, then the senior tranche receives their (fixed) return and the remaining proceeds go the junior tranche.

### A Simplified example

To illustrate how the DROP and TIN tokens work in more detail, let’s look at a hypothetical $1M fund investing in SME invoices targeting an average annual interest rate of 9%. When setting up a structured fund, part of the paperwork is to define how many shares are being issued in each class. For example, the issuer could say they will sell 20% of the $1M investment in a junior tranche and 80% in a senior tranche. Let’s assume the senior tranche is guaranteed a fixed return of 5%. The junior tranche has a variable return depending on the success of the investment. Now let’s look at a few different scenarios to explain how this structure affects the risk and return of the different investment classes.

![Base Case](./images/tranche_base_case.svg#margin=10px;width=250px;float=left;)

#### Base case scenario

Assume that the money to return to investors is $1.09M based on the 9% interest rate ($1M in principal and $90k in interest). During the lifetime of the fund, any repayments are first used to repay the share of the senior investors along with the 5% interest accrued on their investment (5% of $800k = $40k). Once all outstanding senior debt and interest has been paid off, the waterfall pays out the remaining proceeds to the junior investors. That means that if there are no losses, the junior investors will be paid $50k on a \$200k investment. This is equivalent to a 25% return.

<div style="clear:both;"></div>

![Junior Loss](./images/tranche_junior_loss.svg#margin=10px;width=250px;float=left;)

#### Partial Loss for the Junior Tranche

Let’s assume again that out of the $1M lent, $1.09M were due incl. accrued interest. However, there is a 6% default rate resulting in a total loss of $60k of the portfolio. For simplicity, we further assume that interest is impacted similarly, so the total interest paid from the portfolio is $84.6k. The senior tranche is not impacted and still returns 5% of $800k equal to $40k. The junior investors take the first loss and their net value drops to $140k. The junior tranche still receives the remaining interest payments of $44.6k from the waterfall. Thus, overall the junior tranche has an ending net value of \$188.6k equal to a loss of 7.7%.

<div style="clear:both;"></div>

#### Losses for Senior Tranche

The senior tranche would be protected against any losses of their investment and their guaranteed fixed return as long as potential defaults do not exceed the volume of the junior tranche. This would be the case up to a default rate of 22.9% under the above assumptions. With a default rate of 22.9% the loss of the portfolio is $229k leaving a total of $771k of the loan portfolio being paid back. The total interest still paid from the portfolio is $69k. Thus, the senior tranche is not impacted, receiving $840k ($771k + $69k) and still returns 5%. The junior tranche takes the first loss again and their net value drops to \$0k. For defaults higher than 22.9% the senior tranche would also start to accrue losses, first on their expected return, and then on their initial investment.

#### Interest Rate Model

The Drop token’s return is defined by a fee function. Unless modified, the default implementation has a fixed interest per pool compounding per second. The interest is only charged on the deployed capital. The Tin token only gets a return on their investment if the Drop token holders have all been fully redeemed. Therefore, Tin token holders do not have a guaranteed fee or return but measure their return by what the Drop token contract leaves in the system.

An overview of how to calculate interest rates for Tinlake contracts can be found [here](#interest-rate-methodology).

### Minimum Tranche Ratio

A Drop purchaser taking the senior tranche would want to have a guarantee that there is at least a minimum percentage of Tin in the pool to make sure that they are protected against a certain amount of losses. Setting this variable guarantees them a certain risk profile. When deploying a pool this variable is set upon initialization and enforced by the contracts. When the minimum ratio is broken, investments and the issuance of additional Drop token is stopped until the minimum ratio is restored.

## Tinlake Terms

### Asset side

#### Total Debt

Currently outstanding debt of the pool (~financed assets incl. accrued interest). Every financing accruess secondly compounded interest at the `Financing Fee`. `Total Debt` is the sum of all currently outstanding Debts per assets.

#### NAV

The `NAV` (Net asset value) reflects the present value of the outstanding portfolio of financings. It is basically the sum of present values of the risk-adjusted expected repayments of all outstanding financings. It is calulated through Tinlake's Pricing and Valuation Smart contract ("NAV feed") at every `Epoch` based on an on-chain a fair value valuation (“marked to model”). Valuation parameters are also provided by the document underlying the NFT, which is created and shared through Centrifuge's p2p Protocol. The NAV ultimately determines the tranches values and thus token prices at which investors invest and redeem at every epoch. Please find more details about Tinlake's valuation approch, including simplified examples [here](https://centrifuge.hackmd.io/PgKrCfcUT3Ot63d_YfeNYw).

#### Reserve

The `Reserve` is the current liquidity in the pool that is not deployed to finance assets ("~cash" in traditional finance). It is available for redemption by investors and asset orginations by the Asset Originator and limited by the "Max reserve amount".

#### Senior Debt

The share of `Total Debt` that accrues interest at the `DROP APR` for the DROP tranche. The "Senior Debt" is rebalanced at every epoch to reflect the share of DROP invested into the pool. Please find more information on the rebalancing mechanism below.

#### Senior Balance

Share of the DROP tranche that is currently not deployed in financings and thus does not accrue interest at the `DROP APR`.

### Investment Side

#### Senior Tranche

The senior tranche holds all DROP investments. DROP, known as the “yield token,” is protected against defaults by the TIN token and receives stable (but usually lower) returns.

#### Junior Tranche

The junior tranche holds all TIN investments. TIN, known as the “risk token,” takes the risk of defaults first but also receives higher returns.

#### Senior Value

The Senior Value represents the value of the senior/DROP tranche. It is calculated as

$$
seniorValue = min(Senior Debt + Senior Balance, NAV + Reserve)
$$

If NAV + Reserve are smaller then the Senior Value or in other words the sum of senior Debt + Senior Balance , TIN's risk cusion would be worthless (e.g. taken all losses). Then the entire NAV and the currency left in Reserve belong to the senior tranche. The senior value is used to calculate the DROP tokenprice.

#### Junior Value

Junior Value denominates the current value of the junior/TIN tranche. It is mainly driven by the NAV and Reserve and calculated as:

$$
juniorValue = max(NAV + Reserve - Senior Value,0)
$$

The Junior value is used to calculate the TIN token price.

#### Pool Value

The Pool Value is the sum of Senior and Junior Value:

$$
Pool Value = Junior Value + Senior Value = NAV + reserve
$$

Note that it is equivalent to the sum of NAV and reserve.

#### TIN/DROP Token Supply

TIN/DROP Token Supply denote the amount of outstanding TIN and DROP tokens per pool.

#### TIN/DROP Price

The price per TIN/DROP token is calculated by:

$$
DROP Token Price=\frac{senior Value}{DROP Token Supply}
$$

and

$$
TIN Token Price =\frac{juniorAssetValue}{TINTokenSupply}
$$

### Interest rates

#### Financing Fee

This is the rate at which the Debt of an indiviual Financings accrues interest. It is expressed as an APR and compounds interest every second. Different assets can have different Financing Rates depending on their individual `Risk Score`.
The Financing Fee per risk score is stored in a `Risk Scorecard` in a smart contract. A pricing oracle determines the risk score and value of every NFT locked into Tinlake based on the underlying document and NFT shared/minted via the Centrifuge p2p Protocol. The `Financing Fee` per Financing is determined automatically based on the set `Risk score` of the underlying NFT. Please find more information how pricing based ona Scorecard works [here](TODO link blogpost).

#### DROP APR

This is the rate at which the `Senior Debt` accrues interest per second. Note, that this is only applied on deployed Senior tranche capital but not on the `Senior Reserve`. The actual DROP return may thus differ from the DROP APR.

#### TIN return

The `Junior Tranche` does not have a pre-defined fixed or variable interest rate. TIN tokens capture the increasing value of the portfolio and the spread between `Financing rates` and `DROP APRs`.

#### Pool risk metrics and restrictions

##### Current TIN risk buffer

The `Current tin risk buffer` describes the extend of TIN protection for the DROP tranche. It is calulated as

$$
Current TIN risk buffer = \frac{Junior Value}{Junior Value + Senior Value} = \frac{Junior Value}{Pool Value}
$$

The higher the `Current TIN Ratio` the higher the TIN risk protection for DROP.

##### Min TIN risk buffer

The Min TIN risk buffer is the lower limit of the `Current TIN risk buffer`. It ensures that DROP investors are protected by a certain amount of TIN invested in the pool at any time.
If the `Current TIN risk buffer` is below the Min TIN risk buffer DROP Investments, TIN Redemptions and Asset Originations are not possible any more until the the min TIN risk buffer is restored e.g. through further TIN investments. Correspondingly no DROP Investments or TIN redemptions would be accepted that would break the ratio.

##### MAX Reserve amount

A high reserve drags down the DROP and TIN returns as this capital is not generating interest income.This is why the AO can limit the amount of investments it is willing accept with the `Maximum reserve amount`. No investments will be accepted if the current `Reserve` is larger than the `Max reserve amount`. The `Max reserve amount` can be set and adjusted by the Asset Originator on a constant basis to manage the investments allowed into the pool based on their need for liquidity.
