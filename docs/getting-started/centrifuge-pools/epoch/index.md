---
id: epoch
order: 3
title: Epochs and Order Execution
contributors: <Dennis Wellmann:dennis@centrifuge.io>, <Jay:jay@centrifuge.io>
category: subpage
---

## Overview

A decentralized pool where investors can invest/redeem and Asset Originators originate/repay at any time needs a decentralized mechanism to coordinate investments, redemptions, originations and repayments. Welcome the `Epoch`.

For Centrifuge's revolving pools, all investment inflows/outflows are locked over a defined period of time ("Epoch") and automatically executed at the and of this period following predetermined priorities and risk metrics. The Asset Originator can use the available liquidity reserve after the invest/redeem transactions have been executed to finance asset originations through to the next epoch. Repayments can also happen at any time throughout the epoch, but are collected in a separate reserve and can be used only for financings in the next epoch to allow investors priority for their redemptions.

To summarize: The following types of inflows/outflows on the asset side can happen during an epoch by the Asset Originator:

- Financing repayments
- Asset Originations / Financing Drawdowns

The following types of inflows/outflows on the investment side are locked during the epoch and executed at the end of the epoch:

- Tranche token investments
- Tranche token redemptions

## Length of an Epoch

On the smart contract level, Centrifuge epochs have a minimum duration that the smart contracts will enforce. Thus an epoch cannot be closed before the minimum duration has lapsed. This can be defined flexibly by the issuer, e.g. daily epochs or monthly epochs. An epoch does not have an enforced maximum duration. Thus epochs remain open until closed. After the minimum time period has passed the contracts can be called to close the current epoch. So if e.g. the minimum duration of an epoch is set at 24h, an epoch will have to last at least 24h but can also last longer. This flexibility allows for longer epochs at the start of a pool to ramp up funding and, at times of high gas prices, makes it possible to wait till they drop to facilitate lower transaction costs. A mature, liquid pool can have an off-chain service added that limits epochs to a certain length of time by closing them after a pre-defined interval. Once an epoch is closed the smart contracts start to process the current state of the pool and process all locked orders (see more details below).

## The invest/redeem process

Investors can supply more liquidity at any point during an epoch. The supplied liquidity will be locked in the pool contract until the end of the epoch. The investor can cancel their lock as long as the current epoch is still active. In that case, the locked liquidity will be transferred back to their wallet. At the end of the epoch, all locked orders will be processed and executed at the current token prices considering the max reserve amount and subordination ratios. After the epoch turn, investors can collect the executed orders in the UI. If parts of the investments/redemptions could not be executed, it will be rolled over into the next epoch; thus the corresponding liquidity remains locked. This locked order can be cancelled at any time.

The redeem process works similarly. If existing investors want to redeem (part of their) tokens they can lock these tokens into Centrifuge at any point during the epoch. At the end of the epoch, all locked orders will be processed and executed at the current respective token prices considering the max reserve amount and min Junior risk buffer. After the epoch turn, investors can collect the liquidity from the executed orders in the UI. If part of the investment/redemption could not be executed, it will be rolled over into the next epoch and these tokens remain locked. This locked order can be cancelled at any time.

## The turn of the Epoch

Once the minimum length of an epoch has passed anyone can call the contracts to "close" the epoch. Once the epoch is closed investors can no longer unlock their orders. All orders locked after the close will be collected and processed. If an epoch close is called without any locked invest/redeem transactions, the epoch number will be bumped but the process described below will not be started.

At the epoch turn, the contracts first process the current state of the pool:

- Total Debt
- Asset Value/NAV
- Reserve
- Token Debts
- Token Balances (associated reserve liquidity)
- Token Values
- Token prices
- Subordination ratios

Then the contracts check whether all set orders can be executed with the capital available and without breaking the subordination ratios or the maximum reserve restrictions. If this is the case all orders are immediately executed and the contracts process the new state of the pool. You can find a simple model that illustrates the processing of orders and calculation of the pool state [here](https://docs.google.com/spreadsheets/d/1mkIbWzhD7IXbnbYXKreTMYuaZJEzyTVqllhJnP4YdPs/edit#gid=161507348)

If not all orders can be executed, e.g. because there is not enough capital available in the Reserve (plus new investments) to serve all redemption orders or executing all senior investments would break the
ratios the Centrifuge "Solver mechanism" would be initiated.

## The Solver mechanism

### How an epoch is currently displayed

These are the different states of an epoch.

| Status                  | Case                                           | Consequence                                               |
| ----------------------- | ---------------------------------------------- | --------------------------------------------------------- |
| Ongoing                 | Minimum epoch duration (24h) has not completed | Minimum duration is passed (Investors can invest, redeem) |
| Minimum duration passed | No orders locked                               | Epoch will not close                                      |
| Minimum duration passed | Locked orders can be executed                  | Epoch closes automatically at 10AM CET                    |
| Minimum duration passed | Locked orders can only be partially executed   | Epoch needs to be closed manually                         |
| Minimum duration passed | Locked orders cannot be executed               | Epoch needs to be closed manually                         |
| Computing orders        | The epoch is being executed                    | New epoch is started                                      |

### Why introduce a solver mechanism?

If not all orders can be executed a mechanism is required to find the optimal solution to ensure as many transactions as possible are executed while adhering to certain restrictions such as the Max Reserve amount, subordination ratios, senior sovereignty etc. Finding the optimal solution for mulitple invest/redeem type of transactions under a defined set of restrictions depicts a classic maximization problem that can be solved with linear programming.

### How it works

Implementing linear programming in smart contracts is theoretically possible but in practice very complex and expensive in terms of gas fees paid. Centrifuge smart contracts thus have a decentralized approach where anyone can run a solver and submit the solution for executed orders for the four invest/redeem transaction types via a simple contract call. The smart contracts check that the state resulting by this submission adheres to all restrictions described above. If this is the case, a 30min challenging period starts in which anyone can submit a superior solution. The superiority of solutions is determined by a "max weight function" multiplying the amount of orders executed with weights. The weights for this function can differ between pools but usually, e.g. senior redemptions would contain the highest weight to ensure the senior Tranche's seniority.

If a competing viable solution is submitted resulting in a higher "max function" a new 30min challenging period starts. If no superior solution is submitted anyone can call the "Epoch execute" function after the 30min challenging period to execute the pending transactions according to the accepted solution.

![](./images/solver_mechanism.png)

### The solver optimization

The linear programming of the Centrifuge solver maximizes the execution of the invest/redeem orders (all in pool currency values) according to a max function that allocates a weight to each of the executed order types. Assuming a two tranche pool, sample weights to ensure a waterfall-like priority focused on senior yoken seniority could e.g.

- Senior Tranche redemptions: 1,000,000 [Ensure seniority]
- Junior Tranche investments: 10,000 [Build up risk buffer]
- Senior Tranche investments: 1,000
- Junior Tranche redemptions: 100,000 [Ensure Min Junior risk buffer stability]

The according sample max function could e.g. be:

$$
MaxFunctionResult =
   \newline SeniorTrancheRedemptions * 100,000,000,000 +
   \newline JuniorTrancheInvestments * 100,000,000 +
   \newline SeniorInvestments * 100,000 +
   \newline JuniorRedemptions * 100
$$

The restrictions for this optimization problem are:

- Executed order needs to be smaller or equal to the submitted order [e.g. Total executed Junior invest <= Total locked Junior invest]
- All executed orders need to be larger than or equal to zero [e.g. Total Junior invest > 0]
- The Reserve is larger than zero and smaller than the `max eserve amount` after all transactions are executed [0 < Reserve < Maximum Reserve Amount]
- A sub-ordination ratio of the resulting state is smaller than the required suboardination ratio for any tranche [Min subordination ratio > Current subordination ratio]

## Tranche Debt Rebalancing

With every epoch that has executed invest/redeem transactions the relation between different tranches changes. This also needs to be reflected in `Tranche Debt` to ensure that interest accrued on tranche debt is in line with the tranche value relation. To ensure this, Tranche Debt is rebalanced in line with the relation between the `Tranche Value = (Tranche Debt + Tranche Balance)` and the `Pool Value = (NAV + Reserve)`. This relation is called `Tranche Ratio`.

$$
Tranche Ratio = \frac{Tranche Debt + Tranche Balance}{NAV + Reserve}
$$

The tranche ratio is multiplied by the NAV to calculate the `Target Tranche Debt` and the tranche debt and balance are re-balanced to set the tranche debt equal to `Target Tranche Debt`. Note that the `Tranche value` remains unchanged. You can find a simple model that illustrates the re-balancing mechanism [here](https://docs.google.com/spreadsheets/d/1mkIbWzhD7IXbnbYXKreTMYuaZJEzyTVqllhJnP4YdPs/edit#gid=880740688).

## Process Overview

The following graphs summarize the entire flow of the turn of an epoch:

![](./images/solver_mechanism_process_overview.png)
