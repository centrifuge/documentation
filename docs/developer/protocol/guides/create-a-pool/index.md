---
id: create-a-pool
title: Create a pool
category: subpage
contributors: 
---

# Create a pool

Centrifuge enables the tokenization and management of pools on multiple chains. This guide walks you through the process of creating a pool, launching share classes, and deploying share tokens using the Centrifuge protocol.

## Core concepts

#### Pool

A Pool represents a distinct investment product or strategy. Each pool can exist across multiple chains, identified globally by a unique `poolId`.

#### Share class

Each pool can have multiple share classes, each with its own share token. These tokens represent claims to the underlying assets or yield and can be permissioned or permissionless.

#### Share token

Each share class is deployed as a token (ERC-20 compatible) on every supported network. These tokens have a transfer hook to enable permission logic.

## Pool parameters

When creating a pool, you need to choose two key parameters that cannot be changed after creation: the hub chain and the denomination currency.

### Hub chain

The hub chain is the primary network where your pool is created and managed. All administrative transactions (such as deploying tokens and vaults, updating permissions, and managing requests) are submitted on the hub chain and then bridged to all other spoke chains where the pool operates.

Choosing the right hub chain is important because:
* It cannot be changed: Once a pool is created on a hub chain, migrating to a different hub chain would require creating an entirely new pool and migrating all users.
* Transaction costs: All management operations incur gas costs on the hub chain.

For more details on how the hub and spoke architecture works, read more [about the architecture here](/developer/protocol/features/chain-abstraction#centrifuges-hub-and-spoke-solution).


### Denomination currency

The denomination currency is the accounting unit for your pool. It does not restrict which assets investors can deposit or redeem, those are determined by which [vaults you deploy](/developer/protocol/guides/deploy-vaults). Instead, it serves as an intermediate unit that the protocol uses internally for pricing and accounting.

#### How pricing works

The protocol uses two prices to convert between deposit assets and shares:

- **`pricePoolPerAsset`**: The value of one asset unit in pool currency units (e.g., 1 USDC = 1.0 USD)
- **`pricePoolPerShare`**: The value of one share unit in pool currency units (e.g., 1 share = 1.05 USD)

When an investor deposits assets, the conversion flows through the pool currency:

![Asset conversion flow](./images/asset-conversion.svg)

For redemptions, the flow reverses: shares convert to pool currency via `pricePoolPerShare`, then to payout assets via `pricePoolPerAsset`.

#### Where the denomination currency matters

- **Asset price oracles**: If you accept deposit assets that are not pegged 1:1 to the pool currency (e.g., ETH deposits into a USD-denominated pool), you need to configure a price oracle on the hub chain to provide the `pricePoolPerAsset` for those assets
- **Onchain accounting**: If you use [onchain accounting](/developer/protocol/features/onchain-accounting), all calculations are expressed in this currency

Note that shares and pool currency always use the same number of decimals, so no decimal conversion is needed between them.

#### Choosing a denomination currency

You can use:

- **Fiat currencies**: Use `newAssetId(isoCode)` where `isoCode` is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) numeric code (e.g., `840` for USD, `978` for EUR)
- **Registered assets**: Any ERC20 token that has been registered as an asset on any chain

## Step-by-step: creating a pool

### 1. Derive the unique pool ID

To deploy a pool across different networks, choose which network you want to use as the Hub network. This will be where you create the pool, manage permissions, and control all other networks.

Use the `centrifugeId` as the network identifier of the Hub chain and derive a network-specific `PoolId`.



```solidity
PoolId poolId = hubRegistry.poolId(centrifugeId, 1); // Derive a unique PoolId using centrifugeId and a local identifier
```

* `centrifugeId`: [View all possible centrifuge IDs here](/developer/protocol/deployments/#centrifuge-ids)
* `1`: A local identifier.


### 2. Create the pool

Call the `createPool` function with the derived `PoolId`, the pool manager, and the [denomination currency](#denomination-currency).

```solidity
hub.createPool(poolId, msg.sender, newAssetId(840));
```

:::info
Currently, pool creation is still permissioned, while the protocol is in its initial rollout. Pool creation will be opened up permissionlessly in the following months.
:::

### 3. Set metadata

Optionally set metadata to describe the pool:

```solidity
hub.setPoolMetadata(poolId, bytes("Testing pool"));
```

This can include information to be shown in the UI.

### 4. Notify pool registration

Once created, the pool must notify the other networks of its existence. This should be called for every `centrifugeId` where the pool is going to be launched.

```solidity
hub.notifyPool{value: gas}(poolId, centrifugeId, msg.sender);
```

* `gas`: The amount of native currency to cover cross-chain messaging costs (excess will be refunded)
* `msg.sender`: Address to receive any excess gas refund

## Adding share classes

Each pool can support multiple share classes, e.g., for different tranches or investor types.

### 1. Preview share class ID

Before creating a share class, preview its ID to use for further configuration.

```solidity
ShareClassId scId = shareClassManager.previewNextShareClassId(poolId);
```

### 2. Add the share class

Add a new share class with a name, symbol, and optional metadata:

```solidity
hub.addShareClass(poolId, "Tokenized MMF", "MMF", bytes32(bytes("1")));
```

* `"Tokenized MMF"`: ERC20 token name
* `"MMF"`: ERC20 token symbol
* `bytes32(bytes("1"))`: Salt, to be used for deterministic deployments and vanity addresses. Needs to be globally unique.

### 3. Deploy the share token(s)

Once created, the pool must notify the other networks of each share class. This should be called for every `centrifugeId` where the share token is going to be launched.

For each token, choose the hook that you want:
- **`fullRestrictions`**: any user needs to be added to the memberlist for every deposit/redeem request.
- **`redemptionRestrictions`**: any user needs to be added to the memberlist only for redeem requests.
- **`freezeOnly`**: users don't need to be added for requests, but it is possible to freeze users.
- **`address(0)`**: token is fully permissionless.

```solidity
hub.notifyShareClass{value: gas}(poolId, scId, centrifugeId, bytes32(bytes20(hook)), msg.sender);
```

* `gas`: The amount of native currency to cover cross-chain messaging costs (excess will be refunded)
* `msg.sender`: Address to receive any excess gas refund

This will deploy the ERC20 share token.
