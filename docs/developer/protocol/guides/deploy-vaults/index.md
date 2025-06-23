---
id: deploy-vaults
title: Deploy vaults
category: subpage
contributors: 
---

# Deploy vaults

The Centrifuge protocol supports deploying and managing different types of vaults that facilitate investment into real-world assets. Vaults are associated with a specific pool (`poolId`), share class (`scId`), asset (`assetId`), and network (`centrifugeId`). The protocol supports both asynchronous and synchronous vault configurations, and relies on standardized interfaces to ensure cross-chain operability and compatibility with multiple asset types.

## Deploying vaults

Before deploying a vault, the associated share token must be deployed on the target network. This token represents the share class (`scId`) that investors receive when interacting with the vault.

### Setting up the vault contracts

#### Asynchronous vaults

For asynchronous vaults, the `AsyncRequestManager` contract must be configured in two roles:

1. As the Request Manager, so it can handle investment actions via the Hub.
2. As the Balance Sheet Manager, so it can move assets in and out of the balance sheet.

The configuration is done using the following commands:

```solidity
hub.setRequestManager(poolId, scId, assetId, bytes32(bytes20(address(asyncRequestManager))));
hub.updateBalanceSheetManager(centrifugeId, poolId, bytes32(bytes20(address(asyncRequestManager))), true);
```

After setup, the asynchronous vault can be deployed with:

```solidity
hub.updateVault(poolId, scId, assetId, bytes32(bytes20(address(asyncVaultFactory))), VaultUpdateKind.DeployAndLink, 0);
```

#### Synchronous deposit vaults

For synchronous vaults, the `SyncManager` must be set as a Balance Sheet Manager, which allows it to handle asset transfers as part of deposit execution:

```solidity
hub.updateBalanceSheetManager(centrifugeId, poolId, bytes32(bytes20(address(syncManager))), true);
```

Once the manager is configured, the vault is deployed using:

```solidity
hub.updateVault(poolId, scId, assetId, bytes32(bytes20(address(syncDepositVaultFactory))), VaultUpdateKind.DeployAndLink, 0);
```

### Share price initialization

After the vault is deployed, it cannot accept investments until the share price has been updated at least once. This ensures that the value of shares can be accurately calculated based on the current value of underlying assets.

This is documented on the [manage a pool page](/developer/protocol/guides/manage-a-pool/#pushing-to-price-oracles).