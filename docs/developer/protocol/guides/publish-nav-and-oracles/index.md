---
id: publish-nav-and-oracles
title: NAV and oracles
category: subpage
---

# NAV and oracles

Centrifuge has a built-in Net Asset Value oracle. This **primary NAV** is set by the issuer and is the protocol's onchain source of truth for a pool's value and share price. It is enough to run a pool end to end.

The primary NAV is already consumable onchain by other protocols. On top of it, you can optionally work with third-party oracle providers such as Chronicle to add an independent verification layer, which some DeFi integrations prefer.

## How the primary NAV is published

The issuer sets the primary NAV by publishing a share price to the Hub, which holds the protocol's source of truth. A pool can have multiple share classes, and each has its own price that is kept up to date to reflect its current value.

A pool's NAV is typically computed offchain, for example from a portfolio held with a bank or custodian. The issuer publishes the resulting share price to the Hub:

```solidity
hub.updateSharePrice(poolId, scId, sharePrice, uint64(block.timestamp));
```

* `poolId`: the unique identifier of the pool
* `scId`: the identifier of the share class within the pool
* `sharePrice`: the new price of the share token (18 decimal fixed point integer)
* `uint64(block.timestamp)`: timestamp when the price was computed

This published share price is the pool's reference price across all networks. The execution price for individual deposit and redemption batches is set separately in the `BatchRequestManager` (see [Manage a pool](/developer/protocol/guides/manage-a-pool#managing-investment-requests)).

### Pushing to price oracles

After updating the share price, push it to the price oracle on each network where the share token is deployed. This lets other contracts and offchain components retrieve the latest price.

```solidity
hub.notifySharePrice{value: gas}(poolId, scId, centrifugeId, msg.sender);
```

* `poolId`: the identifier of the pool whose share price was updated
* `scId`: the share class identifier for which the price was updated
* `centrifugeId`: the network identifier where the oracle should receive the updated price
* `gas`: the amount of native currency to cover cross-chain messaging costs (excess is refunded)
* `msg.sender`: address to receive any excess gas refund

### Updating and pushing asset prices

Since multiple assets can be used to invest in the same pool, the price of each asset denominated in the pool currency (for example, USD) also needs to be set. By default this price is assumed to be `1.0`, implying a 1-to-1 peg between all assets.

This needs to be pushed to the asset price oracle on each network once:

```solidity
hub.notifyAssetPrice{value: gas}(poolId, scId, assetId, msg.sender);
```

* `gas`: the amount of native currency to cover cross-chain messaging costs (excess is refunded)
* `msg.sender`: address to receive any excess gas refund

## Integrating a third-party oracle

A third-party oracle such as Chronicle lives in its own contract. To bring its value onchain into the pool, use a small wrapper that reads the oracle and calls `hub.updateSharePrice()`. The [Pushing to price oracles](#pushing-to-price-oracles) step then propagates it across networks.

This is separate from the per-asset accounting setup, where individual holdings are valued onchain to compute NAV. For that, see [Set up onchain valuation](/developer/protocol/guides/setup-onchain-valuation).
