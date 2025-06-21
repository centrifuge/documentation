---
id: deploy-vaults
title: Deploy vaults
category: subpage
contributors: 
---

# Deploy vaults

The Centrifuge protocol supports deploying and managing different types of vaults that facilitate investment into real-world assets. Vaults are associated with a specific pool (`poolId`), share class (`scId`), asset (`assetId`), and network (`centrifugeId`). The protocol supports both asynchronous and synchronous vault configurations, and relies on standardized interfaces to ensure cross-chain operability and compatibility with multiple asset types.

## Overview

### Asynchronous vaults

Asynchronous vaults are fully request-based and follow the ERC-7540 standard. They allow both deposit and redemption actions to be handled through an asynchronous workflow, using the Centrifuge Hub to manage requests.

### Synchronous deposit vaults

These vaults follow a hybrid model using both ERC-4626 and ERC-7540. Deposits are executed instantly using ERC-4626 behavior, allowing users to receive shares immediately. However, redemptions are handled asynchronously through ERC-7540, using the Hub to queue and manage the withdrawal requests.

### Support for multiple investment assets

The protocol supports ERC-7575 to allow multiple vaults with different investment assets to buy a single share token.

## Deploying vaults

Before deploying a vault, the associated share token must be deployed on the target network. This token represents the share class (`scId`) that investors receive when interacting with the vault.

### Setting up the vault contracts

#### Asynchronous vaults

For asynchronous vaults, the `AsyncRequestManager` contract must be configured in two roles:

1. As the Request Manager, so it can handle investment actions via the Hub.
2. As the Balance Sheet Manager, so it can move assets in and out of the balance sheet.

The configuration is done using the following commands:

```solidity
hub.setRequestManager(poolId, scId, assetId, address(asyncRequestManager).toBytes32());
hub.updateBalanceSheetManager(centrifugeId, poolId, address(asyncRequestManager).toBytes32(), true);
```

After setup, the asynchronous vault can be deployed with:

```solidity
hub.updateVault(poolId, scId, assetId, address(asyncVaultFactory).toBytes32(), VaultUpdateKind.DeployAndLink, 0);
```

#### Synchronous deposit vaults

For synchronous vaults, the `SyncManager` must be set as a Balance Sheet Manager, which allows it to handle asset transfers as part of deposit execution:

```solidity
hub.updateBalanceSheetManager(centrifugeId, poolId, address(syncManager).toBytes32(), true);
```

Once the manager is configured, the vault is deployed using:

```solidity
hub.updateVault(poolId, scId, assetId, address(syncDepositVaultFactory).toBytes32(), VaultUpdateKind.DeployAndLink, 0);
```

### Share price initialization

After the vault is deployed, it cannot accept investments until the share price has been updated at least once. This ensures that the value of shares can be accurately calculated based on the current value of underlying assets.

This is documented on the [manage a pool page](/developer/protocol/guides/manage-a-pool/#pushing-to-price-oracles).