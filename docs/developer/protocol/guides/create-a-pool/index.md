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

Call the `createPool` function with the derived `PoolId`, the pool manager, and the denomination currency.

As the denomination currency, you can use `newAssetId(840)`, where 840 is the ISO4217 identifier of USD.

You can also use the ERC20 address of any other token.

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
hub.notifyPool(poolId, centrifugeId);
```

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
hub.notifyShareClass(poolId, scId, centrifugeId, bytes32(bytes20(hook)));
```

This will deploy the ERC20 share token.