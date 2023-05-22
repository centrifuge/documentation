---
id: epoch
order: 2
title: Centrifuge's Epochs - How investments and redemptions are executed
contributors: <Dennis Wellmann:dennis@centrifuge.io>, <Jay:jay@centrifuge.io>
---

## Overview 

A decentralized pool where investors can invest/redeem and AOs originate/repay at any time needs a decentralized mechanism to coordinate investments, redemptions, originations and repayments. Welcome the `Epoch`.

For Centrifuge's Revolving Pools, all investment inflows/outflows are locked over a defined period of time ("Epoch") and automatically executed at the and of this period following predetermined priorities and risk metrics. The Asset Originator can use the available liquidity reserve after the invest/redeem transactions have been executed to finance asset originations through to the next epoch. Repayments can also happen at any time throughout the epoch, but are collected in a separate reserve and can be used only for financings in the next epoch to allow investors priority for their redemptions.

To summarize: The following types of inflows/outflows on the asset side can happen during an epoch by the Asset Originator:

- Financing repayments
- Asset Originations / Financing Drawdowns

The following types of inflows/outflows on the investment side are locked during the epoch and executed at the end of the epoch:

- Senior Tranche redemptions
- Junior Tranche redemptions
- Senior Tranche investments
- Junior Tranche investments



## Length of an Epoch

On the smart contract level, Centrifuge epochs have a minimum duration that the smart contracts will enforce. Thus an epoch cannot be closed before the minimum duration has lapsed. An epoch does not have a maximum duration. After the minimum time period has passed the contracts can be called to close the current epoch. So if e.g. the minimum duration of an epoch is set at 24h, an epoch will have to last at least 24h but can also last longer. This flexibility allows for longer epochs at the start of a pool to ramp up funding and, at times of high gas prices, makes it possible to wait till they drop to facilitate lower transaction costs. A mature, liquid pool can have a service added that limits epochs to a certain length of time by closing them after a pre-defined interval. Once an epoch is closed the smart contracts start to process the current state of the pool and process all locked orders (see more details below).

## The invest/redeem process

Investors can supply more liquidity at any point during an epoch. The supplied Dai will be locked in the Centrifuge contract until the end of the epoch. The investor can cancel his lock as long as the current epoch is still active. In that case, the locked DAI will be transferred back to his wallet. At the end of the epoch, all locked orders will be processed and executed at the current Junior Token/Senior Token prices considering the max reserve amount and min Junior risk buffer. After the epoch turn, investors can collect the executed orders in the UI. If part of the investment/redemption could not be executed, it will be rolled over into the next epoch; thus the corresponding DAI remains locked. This locked order can be cancelled at any time.

The redeem process works similarly. If existing Junior Tranche/Senior Tranche investors want to redeem (part of their) Junior Tokens/Senior Tokens they can lock these tokens into Centrifuge at any point during the epoch. At the end of the epoch, all locked orders will be processed and executed at the current respective token prices considering the max reserve amount and min Junior risk buffer. After the epoch turn, investors can collect the DAI from the executed orders in the UI. If part of the investment/redemption could not be executed, it will be rolled over into the next epoch and these tokens remain locked. This locked order can be cancelled at any time.

## The turn of the Epoch

Once the minimum length of an epoch has passed anyone can call the contracts to "close" the epoch. Once the epoch is closed investors can no longer unlock their orders. All orders locked after the close will be collected and processed. If an epoch close is called without any locked invest/redeem transactions, the epoch number will be bumped but the process described below will not be started.

At the epoch turn, the contracts first process the current state of the pool:

- Total Debt
- NAV
- Reserve
- Senior Debt
- Senior Balance
- Senior Value
- Junior Value
- Junior/Senior Token prices
- Junior risk buffer

Then the contracts check whether all set orders can be executed with the capital available and without breaking the Junior risk buffer or the Max reserve restrictions. If this is the case all orders are immediately executed and the contracts process the new state of the pool. You can find a simple model that illustrates the processing of orders and calculation of the pool state [here](https://docs.google.com/spreadsheets/d/1mkIbWzhD7IXbnbYXKreTMYuaZJEzyTVqllhJnP4YdPs/edit#gid=161507348)

If not all orders can be executed, e.g. because there is not enough capital available in the Reserve (plus new investments) to serve all redemption orders or executing all Senior investments would break the Min Junior risk buffer the Centrifuge "Solver mechanism" would be initiated.

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

If not all orders can be executed a mechanism is required to find the optimal solution to ensure as many transactions as possible are executed while adhering to certain restrictions such as the Max Reserve amount, min Junior risk buffer, Senior sovereignty etc. Finding the optimal solution for the four invest redeem transactions type of transactions (Senior redemptions, Junior redemptions, Senior investments, Junior investments) under a defined set of restrictions depicts a classic maximization problem that can be solved with linear programming.

### How it works

Implementing linear programming in smart contracts is theoretically possible but in practice very complex and expensive in terms of gas fees paid. Centrifuge smart contracts thus have a decentralized approach where anyone can run a solver and submit the solution for executed orders for the four invest/redeem transaction types via a simple contract call. The smart contracts check that the state resulting by this submission adheres to all restrictions described above. If this is the case, a 30min challenging period starts in which anyone can submit a superior solution. The superiority of solutions is determined by a "max weight function" multiplying the amount of orders executed with weights. The weights for this function can differ between pools but usually, e.g. Senior redemption would contain the highest weight to ensure the Senior Tranche's seniority.

If a competing viable solution is submitted resulting in a higher "max function" a new 30min challenging period starts. If no superior solution is submitted anyone can call the "Epoch execute" function after the 30min challenging period to execute the pending transactions according to the accepted solution.

![](./images/solver_mechanism.png)

### The solver optimization

The linear programming of the Centrifuge solver maximizes the execution of the four invest/redeem orders (all in DAI values)…

- JuniorTrancheInvestOrder
- SeniorTrancheInvestOrder
- JuniorTrancheRedeemOrder
- SeniorTrancheRedeemOrder

…according to a max function that allocates a weight to each of the executed order types. Sample weights to ensure a waterfall-like priority focused on Senior Token seniority could e.g.

- Senior Tranche redemptions: 1,000,000 [Ensure seniority]
- Junior Tranche investments: 10,000 [Build up risk buffer]
- Senior Tranche investments: 1,000
- Junior Tranche redemptions: 100,000 [Ensure Min Junior risk buffer stability]

The according sample max function could e.g. be:

$$
Maxfunctionresult = Senior Tranche redemptions * 100,000,000,000 +  Junior Tranche investments * 100,000,000 + Senior investments * 100,000 + Junior redemptions * 100
$$

The restrictions for this optimization problem are:

- Executed order needs to be smaller or equal to the submitted order [e.g. Total executed Junior invest <= Total locked Junior invest]
- All executed orders need to be larger than or equal to zero [e.g. Total Junior invest > 0]
- The Reserve is larger than zero and smaller than the `max Reserve amount` after all transactions are executed [0 < Reserve < Maximum Reserve Amount]
- The Junior ratio of the resulting state is larger than the MIN Junior ratio and smaller than the Max Junior ratio [Min Junior risk buffer < Current Junior risk buffer]

## Senior Debt Rebalancing

With every epoch that has executed invest/redeem transactions the relation between Senior and Junior Tranche changes. This also needs to be reflected in `Senior Debt` to ensure that interest accrued on Senior Debt is in line with the Junior/Senior relation and the Senior Tranche does not accrue too much or too little interest. To ensure this, Senior Debt is rebalanced in line with the relation between the `Senior Value = (Senior Debt + Senior Balance)` and the `Pool Value = (NAV + Reserve)`. This relation is called `Senior Ratio`.

$$
Senior Ratio = \frac{Senior Debt + Senior Balance}{NAV + Reserve}
$$

The Senior Ratio is multiplied by the NAV to calculate the `Target Senior Debt` and the Senior Debt and Senior balance are re-balanced to set the 'Senior Debt' equal to `Target Senior Debt`. Note that the `Senior value` remains unchanged. You can find a simple model that illustrates the re-balancing mechanism [here](https://docs.google.com/spreadsheets/d/1mkIbWzhD7IXbnbYXKreTMYuaZJEzyTVqllhJnP4YdPs/edit#gid=880740688)

## Process Overview

The following graphs summarize the entire flow of the turn of an epoch:

![](./images/solver_mechanism_process_overview.png)
