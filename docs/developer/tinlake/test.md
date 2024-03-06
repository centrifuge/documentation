---
id: tinlake2
order: 30
title: Tinlake Smart Contracts (Legacy)
contributors: <Dennis Wellmann:dennis@centrifuge.io>, <Devin Black:devin@centrifuge.io>
  - /build/tinlake
  - /build/tinlake/
---
#### NAV

Net Asset Value of all outstanding loans.

#### PoolValue

The pool value is the total value in a Tinlake pool. It includes the currency in the reserve and net asset value of the outstanding loans.

$$
\text{poolValue} = \text{reserve} + \text{NAV}
$$

#### SeniorAsset

The seniorAsset is the amount which belongs to the senior investor (_DROP_) in a pool.

**Expected SeniorAsset**

$$
\text{expectedSeniorAsset} = \text{seniorDebt} + \text{seniorBalance}
$$

**SeniorDebt**

SeniorDebt is the amount which accrues interest for the senior tranche.

$$
\text{seniorDebt} = \text{seniorDebt} * \text{seniorInterestRate}
$$

**SeniorBalance**
SeniorBalance is the amount of the seniorTranche which is not used for interest accumulation.

**Example**

```
Tinlake Pool:
------------------------------------------
| NAV:     80 DAI  | juniorAsset: 10 DAI |
| Reserve: 20 DAI  | seniorAsset: 90 DAI |
------------------------------------------

In this pool, 80% of the pool value is used for loans.
Therefore, 80% of the seniorAsset should be used for interest accumulation.

seniorDebt:     90 DAI * 0.8 =    72 DAI
seniorBalance:  90 DAI - 72 DAI = 18 DAI

Let's say the interest rate is 10%.
The seniorDebt would increase in one time period.

seniorDebt:    72 DAI * 1.10 = 79.2 DAI
seniorBalance:               = 18.0 DAI
seniorAsset:                   97.2 DAI

```

The senior value represents the value of the senior/DROP tranche.

It is calculated as:

$$
\text{seniorAsset} = min(\text{expectedSeniorAsset},  \text{poolValue})
$$

If loans are defaulting, the juniorAsset would cover the losses. If the entire juniorAsset is lost, the poolValue could be lower than the expectedSeniorAsset.

The poolValue can be also expressed as:

$$
\text{poolValue} = \text{seniorAsset} + \text{juniorAsset}
$$

#### JuniorAsset

The juniorAsset is the amount of the poolValue which belongs to junior investors (`TIN`).

The difference between the seniorAsset value poolValue is the juniorAsset.

$$
\text{juniorAsset} = max(\text{poolValue} -  \text{seniorAsset}, 0)
$$

In case of losses, they are first covered by the junior investors.


#### TokenPrices

$$
\text{dropPrice} = \frac{\text{seniorAsset}}{\text{seniorSupply}}
$$

**seniorSupply**
Is the total amount of minted ERC20 DROP tokens.

$$
\text{tinPrice} = \frac{\text{juniorAsset}}{\text{juniorSupply}}
$$

**juniorSupply**
Is the total amount of minted ERC20 TIN tokens.

#### SeniorRatio

The seniorAssetRatio is defined as:

$$
\text{seniorRatio} = \frac{\text{seniorAsset}}{\text{poolValue}}
$$

It describes the percentage of the poolValue which belongs to senior investors.

$$
\text{juniorRatio} = 1 - \text{seniorRatio} =
 \frac{\text{juniorAsset}}{\text{poolValue}}
$$

The juniorRatio is an important metric in the pool because it defines the protections of the junior investors.

The percentage of loan defaults in a pool has to be higher than the juniorRatio until the senior investors are affected.

In the contracts the seniorRatio is used.

#### JuniorRatio Increase

The following investor actions increase the juniorRatio:

- TIN supply
- DROP redeem

#### JuniorRatio Decrease

The following investor actions decrease the juniorRatio:

- TIN redeem
- DROP supply

#### Epoch Execute: State Variable Changes

The lender state variables in Tinlake are changing either because of:

- Interest Accumulation
- Borrow/Repay Loans
- Epoch Execute

In an epoch execution, the orders which can be fulfilled are changing the lender state

- $\text{TIN}_{invest}$
- $\text{DROP}_{invest}$
- $\text{TIN}_{redeem}$
- $\text{DROP}_{redeem}$

#### Reserve
Amount of DAI available in the reserve.

$$
\text{Reserve}_{e+1} = \text{Reserve}_{e}  + \text{TIN}_{invest} + \text{DROP}_{invest}  - \text{TIN}_{redeem} - \text{DROP}_{redeem}
$$

Notation: $\text{Reserve}_{e+1}$ new reserve in the next epoch after of the execution of the current. $\text{Reserve}_{e}$ describes the current.

#### NAV

Net asset value of all ongoing loans expressed in DAI. The NAV is not impacted by the orders but relevant for the constraint calculation.

#### SeniorAsset

$$
\text{SeniorAsset}_{e+1} = \text{SeniorAsset}_{e} + \text{DROP}_{invest} - \text{DROP}_{redeem}
$$

Note: This is a simplification of the seniorAsset formula and does not contain losses. (Not relevant for the solver).

#### JuniorAsset

$$
\text{JuniorAsset}_{e+1} = NAV + \text{Reserve}_{e+1} - \text{SeniorAsset}_{e+1}
$$

Note: This is a simplification of the juniorAsset formula.

## Lender Contracts

### Coordinator Contract

```
The coordinator contract manages the epochs for the investors.
```

#### Main purpose

- Closing and executing epochs
- Responsible for determining the fulfillments of supplyOrders and redeemOrders in an epoch
- Maintaining the pool constraints
- Allowing and handling submissions if not all orders can be fulfilled
- Validating and scoring submitted solutions

#### Contract Diagram

{/*
The epoch coordinator is responsible for determining the token price and the fulfillment percentage of redemption and investment orders within each tranche for a given epoch. This process involves analyzing the aggregate volume of investment and redemption orders, assessing the current equity ratio, evaluating the total repayments, considering the available currency, and factoring in the precedence of order types (e.g., prioritizing redemptions over investments).

It is important to note that the system ensures fairness among users by treating all orders placed within the same epoch identically. The volume of orders and the timing of their submission do not influence the order's priority or likelihood of fulfillment.
*/}

![](./images/coordinator.png)

#### Coordinator State Diagram

![](./images/coordinator_state.png)
