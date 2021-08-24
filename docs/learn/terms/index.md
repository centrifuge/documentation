---
id: terms
order: 1
title: Understanding Tinlake's Key Terms
contributors: <Dennis Wellmann:dennis@centrifuge.io>
redirect_from:
  - /learn
  - /learn/
---

## Asset side

### Total Debt

Currently outstanding debt of the pool (~financed assets incl. accrued interest). Every financing accruess secondly compounded interest at the `Financing Fee`. `Total Debt` is the sum of all currently outstanding Debts per assets.

### NAV

The `NAV` (Net asset value) reflects the present value of the outstanding portfolio of financings. It is basically the sum of present values of the risk-adjusted expected repayments of all outstanding financings. It is calulated through Tinlake's Pricing and Valuation Smart contract ("NAV feed") at every `Epoch` based on an on-chain a fair value valuation (“marked to model”). Valuation parameters are also provided by the document underlying the NFT, which is created and shared through Centrifuge's p2p Protocol. The NAV ultimately determines the tranches values and thus token prices at which investors invest and redeem at every epoch. Please find more details about Tinlake's valuation approch, including simplified examples [here](https://centrifuge.hackmd.io/PgKrCfcUT3Ot63d_YfeNYw).

### Reserve

The `Reserve` is the current liquidity in the pool that is not deployed to finance assets ("~cash" in traditional finance). It is available for redemption by investors and asset orginations by the Asset Originator and limited by the "Max reserve amount".

### Senior Debt

The share of `Total Debt` that accrues interest at the `DROP APR` for the DROP tranche. The "Senior Debt" is rebalanced at every epoch to reflect the share of DROP invested into the pool. Please find more information on the rebalancing mechanism below.

### Senior Balance

Share of the DROP tranche that is currently not deployed in financings and thus does not accrue interest at the `DROP APR`.

## Investment Side

### Senior Tranche

The senior tranche holds all DROP investments. DROP, known as the “yield token,” is protected against defaults by the TIN token and receives stable (but usually lower) returns.

### Junior Tranche

The junior tranche holds all TIN investments. TIN, known as the “risk token,” takes the risk of defaults first but also receives higher returns.

### Senior Value

The Senior Value represents the value of the senior/DROP tranche. It is calculated as

$$
seniorValue = min(Senior Debt + Senior Balance, NAV + Reserve)
$$

If NAV + Reserve are smaller then the Senior Value or in other words the sum of senior Debt + Senior Balance , TIN's risk cusion would be worthless (e.g. taken all losses). Then the entire NAV and the currency left in Reserve belong to the senior tranche. The senior value is used to calculate the DROP tokenprice.

### Junior Value

Junior Value denominates the current value of the junior/TIN tranche. It is mainly driven by the NAV and Reserve and calculated as:

$$
juniorValue = max(NAV + Reserve - Senior Value,0)
$$

The Junior value is used to calculate the TIN token price.

### Pool Value

The Pool Value is the sum of Senior and Junior Value:

$$
Pool Value = Junior Value + Senior Value = NAV + reserve
$$

Note that it is equivalent to the sum of NAV and reserve.

### TIN/DROP Token Supply

TIN/DROP Token Supply denote the amount of outstanding TIN and DROP tokens per pool.

### TIN/DROP Price

The price per TIN/DROP token is calculated by:

$$
DROP Token Price=\frac{senior Value}{DROP Token Supply}
$$

and

$$
TIN Token Price =\frac{juniorAssetValue}{TINTokenSupply}
$$

## Interest rates

### Financing Fee

This is the rate at which the Debt of an indiviual Financings accrues interest. It is expressed as an APR and compounds interest every second. Different assets can have different Financing Rates depending on their individual `Risk Score`.
The Financing Fee per risk score is stored in a `Risk Scorecard` in a smart contract. A pricing oracle determines the risk score and value of every NFT locked into Tinlake based on the underlying document and NFT shared/minted via the Centrifuge p2p Protocol. The `Financing Fee` per Financing is determined automatically based on the set `Risk score` of the underlying NFT. Please find more information how pricing based ona Scorecard works [here](TODO link blogpost).

### DROP APR

This is the rate at which the `Senior Debt` accrues interest per second. Note, that this is only applied on deployed Senior tranche capital but not on the `Senior Reserve`. The actual DROP return may thus differ from the DROP APR.

### TIN return

The `Junior Tranche` does not have a pre-defined fixed or variable interest rate. TIN tokens capture the increasing value of the portfolio and the spread between `Financing rates` and `DROP APRs`.

### Pool risk metrics and restrictions

#### Current TIN risk buffer

The `Current tin risk buffer` describes the extend of TIN protection for the DROP tranche. It is calulated as

$$
Current TIN risk buffer = \frac{Junior Value}{Junior Value + Senior Value} = \frac{Junior Value}{Pool Value}
$$

The higher the `Current TIN Ratio` the higher the TIN risk protection for DROP.

#### Min TIN risk buffer

The Min TIN risk buffer is the lower limit of the `Current TIN risk buffer`. It ensures that DROP investors are protected by a certain amount of TIN invested in the pool at any time.
If the `Current TIN risk buffer` is below the Min TIN risk buffer DROP Investments, TIN Redemptions and Asset Originations are not possible any more until the the min TIN risk buffer is restored e.g. through further TIN investments. Correspondingly no DROP Investments or TIN redemptions would be accepted that would break the ratio.

#### MAX Reserve amount

A high reserve drags down the DROP and TIN returns as this capital is not generating interest income.This is why the AO can limit the amount of investments it is willing accept with the `Maximum reserve amount`. No investments will be accepted if the current `Reserve` is larger than the `Max reserve amount`. The `Max reserve amount` can be set and adjusted by the Asset Originator on a constant basis to manage the investments allowed into the pool based on their need for liquidity.
