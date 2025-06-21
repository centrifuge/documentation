---
id: manage-assets
title: Manage assets
category: subpage
contributors: 
---

# Manage assets

This guide walks through how to configure a balance sheet manager, and how to perform asset deposits and withdrawals from the protocol.

## Configuring a Balance Sheet Manager

Before assets can be deposited or withdrawn, a balance sheet manager must be assigned for the pool. This manager controls access to the pool’s assets.

Call the following method on the Hub, to set a balance sheet manager, for the `centrifugeId` where you want to manage assets:

```solidity
hub.updateBalanceSheetManager(centrifugeId, poolId, manager.toBytes32(), true);
```

### Parameters

* `centrifugeId`: The network identifier.
* `poolId`: The pool ID.
* `manager.toBytes32()`: The manager’s address, converted to `bytes32`.
* `true`: Indicates that this manager is being added (use `false` to remove a manager).

### Supported manager types:

* **Gnosis Safe** or **Fireblocks wallet**: For direct control by the manager of the pool.
* [**On/Off Ramp Manager**](/developer/protocol/managers/on-offramp-manager/): Restricts asset flows to a set of predefined whitelisted addresses, suitable for compliance-sensitive use cases.
* [**Merkle Proof Manager**](/developer/protocol/managers/merkle-proof-manager/): Allows integration with third-party protocols and enables permissioned access via Merkle proofs.

## Withdrawing assets

Once a balance sheet manager is configured, assets can be withdrawn manually. Here’s an example for withdrawing USDC:

```solidity
balanceSheet.withdraw(poolId, scId, address(usdc), 0, receiver, amount);
```

### Parameters

* `poolId`: ID of the pool from which to withdraw.
* `scId`: ID of the share class on which to represent the withdrawn assets.
* `address(usdc)`: Token contract address.
* `0`: Token type identifier.
* `receiver`: Address that will receive the withdrawn funds.
* `amount`: Amount of the token to withdraw.

> Token support: The balance sheet supports both ERC20 and ERC6909 tokens. The token type is specified using the numeric identifier — use `0` for ERC20 and a non-zero `tokenId` for ERC6909.

## Depositing assets

To deposit assets into a pool, you must first approve the `balanceSheet` contract to spend the tokens. Then call the `deposit` function.

### Example: Depositing USDC

```solidity
usdc.approve(balanceSheet, amount);
balanceSheet.deposit(poolId, scId, address(usdc), 0, amount);
```

### Parameters

* `poolId`: ID of the destination pool.
* `scId`: ID of the share class on which to represent the deposited assets.
* `address(usdc)`: Token contract address.
* `0`: Token type (`0` for ERC20).
* `amount`: Amount of the token to deposit.
