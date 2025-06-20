---
id: create-a-pool
title: Create a pool
category: subpage
contributors: 
---

# Create a pool

Centrifuge enables the tokenization and management of real-world assets on multiple chains. This guide walks you through the process of creating a pool, launching share classes, and deploying share tokens using the Centrifuge protocol.

## Core concepts

### Pool

A Pool represents a distinct investment product or strategy. Each pool can exist across multiple chains, identified globally by a unique `poolId`.

### Share class

Each pool can have multiple share classes, each with its own share token. These tokens represent claims to the underlying assets or yield and can be permissioned or permissionless.

### Share token

Each share class is deployed as a token (ERC-20 compatible) on every supported network. These tokens have a transfer hook to enable permission logic.

## Step-by-step: creating a pool

### 1. Derive the unique pool ID

To deploy a pool across different networks, use the `centrifugeId` as the global identifier and derive a network-specific `PoolId`.

```solidity
PoolId poolId = hubRegistry.poolId(centrifugeId, 1); // Derive a unique PoolId using centrifugeId and a local identifier
```

* `centrifugeId`: A unique global ID for the pool (same across chains).
* `1`: A local identifier.

### 2. Create the pool

Call the `createPool` function with the derived `PoolId`, the pool manager, and the denomination currency.

As the denomination currency, you can use `address(840)`, where 840 is the ISO4217 identifier of USD.

You can also use the ERC20 address of any other token.

```solidity
hub.createPool(poolId, msg.sender, address(840));
```

### 3. Set metadata

Optionally set metadata to describe the pool:

```solidity
hub.setPoolMetadata(poolId, bytes("Testing pool"));
```

This can include information to be shown in the UI.

### 4. Notify pool registration

Once deployed, the pool must notify the other networks of its existence. This should be called for every `centrifugeId` where the pool is going to be launched.

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

* `"Tokenized MMF"`: Display name of the share class
* `"MMF"`: Token symbol
* `bytes32(bytes("1"))`: Custom metadata (e.g., tranche ID or version)

### 3. Notify and configure the share token

Finalize the share class by notifying it with the `centrifugeId` and specifying a transfer hook:

```solidity
hub.notifyShareClass(poolId, scId, centrifugeId, bytes32(bytes20(hook)));
```