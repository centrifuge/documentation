---
id: manage-a-pool
order: 11
title: Manage a Pool
---

This section guides asset originators in managing their pools.

## Managing liquidity

### How to manage pool's liquidity
The investment capacity on Tinlake's dashboard indicates how much external investment the pool is looking for. The investment capacity is set in DAI.  
Each pool can adjust the amount in the Pool's Management tab. In the Management tab is split into different areas. One area is Pool Liquidity and one is Liquidity Management. With the help of the Pool Liquidity box the asset originator can access the DAI amount available for originations, investment and redemption orders and repaid amounts that will be available in the next epoch. 

![](https://storage.googleapis.com/centrifuge-hackmd/upload_25ce67a91abf36f2d96cfec437307393.png)


In the Liquidity Management box the asset originator can update the maximum reserve based on their needs. The difference between max. reserve and the available liquidity is the displayed investment capacity.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_60f92106f1ea7ea322328eccd2603d3e.png)

## Closing an epoch manually

### How closing an epoch works
The minimum length of an epoch is set at 23 hours and 50 minutes. An epoch will have to last at least 23 hours and 50 minutes but can also last longer. Closing an epoch requires a contract call, epochs don’t close automatically. This contract call is an open function - anyone can do it, there is no admin access required. Usually epochs are closed automatically by a service but in case locked orders can not or only be partially executed epochs need to be closed and executed manually.
There are three steps to close an epoch **where not all orders can be fully executed**:

* Close - first transaction to initiate the end of an epoch after the minimum epoch time has passed.
* Submit solution - this will trigger the solver mechanism to calculate the best possible solution for executing orders and submit this solution to Tinlake.
* After submitting a solution, there is a challenge period (usually 30min) to allow alternative solutions to be submitted.
* Execute epoch - after the `challenge period` has passed a third call executes the epoch and the best submitted solution will be chosen.

### Closing and executing an epoch through Tinlake UI

1. Go the pool and go to the investment tab.
2. When you're an admin of the pool you will see the **close epoch button**.
3. If you're not an admin you can add feature flag to the URL `/investments?show_close_epoch=true` 
4. Click on `Close epoch` button.
![](https://storage.googleapis.com/centrifuge-hackmd/upload_149846e233930958fed66be080e88452.png)
5. Confirm transaction in Metamask.
6. Click on `Submit solution` button that will appear instead of `Close epoch`.
7. Wait till the challenge period (30min) has passed.
8. Click on `Execute epoch` button to execute the epoch. The locked orders will be executed according to the best solution submitted to the contracts.


## Liquidity On-ramps and Off-ramps

The easiest and cheapest way to off/on-ramp is to exchange DAI directly in EUR or USD pairs.  

**USD/DAI Pairs:**

Coinbase: https://pro.coinbase.com/trade/DAI-USD

Kraken: https://trade.kraken.com/charts/KRAKEN:DAI-USD

**EUR/DAI Pairs:**

Kraken: https://trade.kraken.com/charts/KRAKEN:DAI-EUR

Alternatively, DAI can be exchanged for the stablecoins USDC or USDT, on any decentralized exchange.

