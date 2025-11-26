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

1. As the Spoke Request Manager, so it can handle investment actions via the Hub.
2. As the Balance Sheet Manager, so it can move assets in and out of the balance sheet.

The `BatchRequestManager` also needs to be configure das the Hub Request Manager.

The configuration is done using the following commands:

```solidity
hub.setRequestManager{value: gas}(poolId, centrifugeId, hubRequestManagerContract, bytes32(bytes20(address(batchRequestManager))), bytes32(bytes20(address(asyncRequestManager))), msg.sender);
hub.updateBalanceSheetManager{value: gas}(poolId, centrifugeId, bytes32(bytes20(address(asyncRequestManager))), true, msg.sender);
```

* `batchRequestManager`: The Hub-side request manager contract instance
* `asyncRequestManager`: The Spoke-side request manager contract instance
* `gas`: The amount of native currency to cover cross-chain messaging costs (excess will be refunded)
* `msg.sender`: Address to receive any excess gas refund

After setup, the asynchronous vault can be deployed with:

```solidity
hub.updateVault{value: gas}(poolId, scId, assetId, bytes32(bytes20(address(asyncVaultFactory))), VaultUpdateKind.DeployAndLink, 0, msg.sender);
```

* `gas`: The amount of native currency to cover cross-chain messaging costs (excess will be refunded)
* `msg.sender`: Address to receive any excess gas refund

#### Synchronous deposit vaults

For synchronous vaults, the `SyncManager` must be set as a Balance Sheet Manager, which allows it to handle asset transfers as part of deposit execution:

```solidity
hub.updateBalanceSheetManager{value: gas}(poolId, centrifugeId, bytes32(bytes20(address(syncManager))), true, msg.sender);
```

* `gas`: The amount of native currency to cover cross-chain messaging costs (excess will be refunded)
* `msg.sender`: Address to receive any excess gas refund

Once the manager is configured, the vault is deployed using:

```solidity
hub.updateVault{value: gas}(poolId, scId, assetId, bytes32(bytes20(address(syncDepositVaultFactory))), VaultUpdateKind.DeployAndLink, 0, msg.sender);
```

* `gas`: The amount of native currency to cover cross-chain messaging costs (excess will be refunded)
* `msg.sender`: Address to receive any excess gas refund

### Price initialization

After the vault is deployed, it cannot accept investments until the share and asset prices has been updated at least once. This ensures that the value of shares can be accurately calculated based on the current value of underlying assets.

This is documented on the [manage a pool page](/developer/protocol/guides/manage-a-pool/#pushing-to-price-oracles).