---
id: manage-a-pool
title: Manage a pool
category: subpage
contributors: 
---

# Manage a pool

This guide outlines how to manage a pool on the Centrifuge protocol.

## Updating the share price on the Hub

Each pool on the Centrifuge protocol can have multiple share classes. The price of each share token must be maintained and updated to reflect its current value. This price is managed at the protocol level through the Hub contract.

> Currently, the pricing mechanism is intended to be provided by an off-chain computation. In the future, on-chain price calculations will be implemented, using the holdings and double-entry bookkeeping accounting mechanism of the Hub.

To update the token price for a specific share class in a pool, call the following function on the Hub:

```solidity
hub.updateSharePrice(poolId, scId, sharePrice);
```

* `poolId`: the unique identifier of the pool
* `scId`: the identifier of the share class within the pool
* `sharePrice`: the new price of the share token

The `sharePrice` must be denominated as an 18 decimal fixed point integer.

## Pushing to price oracles

After updating the share token price, it must be pushed to the price oracle on each delpoyed network. This ensures that other contracts and off-chain components can retrieve the latest share price.

To notify the price oracle, call the following function:

```solidity
hub.notifySharePrice(poolId, scId, centrifugeId);
```

* `poolId`: the identifier of the pool whose share price was updated
* `scId`: the share class identifier for which the price was updated
* `centrifugeId`: the network identifier where the oracle should receive the updated price