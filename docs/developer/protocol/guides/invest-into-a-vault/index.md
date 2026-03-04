---
id: invest-into-a-vault
title: Invest into a vault
category: subpage
contributors: 
---

# Invest into a vault

This guide explains how to invest in and redeem from Centrifuge vaults, using both synchronous and asynchronous vault types. We’ll walk through:

* How to deposit and redeem in a synchronous deposit vault.
* How to interact with an asynchronous vault, which operates in two distinct phases for deposits and redemptions.
* How to query the share token price using the price oracle.

## Synchronous deposit vaults

Synchronous vaults process deposits immediately within a single transaction, and processes redemptions asynchronously.

### Depositing into a synchronous vault

Before depositing, approve the vault contract to spend your tokens:

```solidity
asset.approve(address(vault), assets);
```

Then deposit assets (e.g., USDC) to receive vault shares:

```solidity
vault.deposit(assets, receiver);
```

* `assets`: Amount of underlying asset to deposit (e.g., 1000 \* 1e6 for 1000 USDC).
* `receiver`: Address to receive the vault shares.

This call mints shares in exchange for assets immediately.

### Redeeming from a synchronous vault

Redemptions occur in two steps:

#### Step 1: Submit a redemption request

```solidity
vault.requestRedeem(shares, user, user);
```

* `shares`: Amount of shares to redeem.
* The second and third `user` arguments specify both the owner and the receiver of the redemption claim.

This step locks in your redemption, signaling intent to redeem vault shares.

#### Step 2: Claim redemption and withdraw assets

After the redemption window has passed (depending on vault-specific rules):

```solidity
vault.withdraw(vault.maxWithdraw(user), receiver, user);
```

* `vault.maxWithdraw(user)` computes the maximum amount of assets that can now be withdrawn.
* `receiver`: Address to receive the underlying asset (e.g., USDC).

## Asynchronous vaults

Asynchronous vaults batch and process deposits at set intervals. Deposits and withdrawals are split into pending and claimable phases.

### Requesting a deposit

Before requesting a deposit, approve the vault contract to spend your tokens:

```solidity
asset.approve(address(vault), assets);
```

Then submit a deposit request:

```solidity
vault.requestDeposit(assets, user, user);
```

* `assets`: Amount of underlying asset to request deposit for.
* The second and third `user` values specify ownership and destination.

Your request is queued and will be processed by the issuer of the pool.

### Claiming a deposit (minting shares)

After the deposit request is fulfilled:

```solidity
vault.mint(vault.maxMint(user), user);
```

* `vault.maxMint(user)` returns the number of shares available to mint based on your request.
* `user`: Receives the minted vault shares.

### Redeeming (same as synchronous)

Asynchronous vaults use the same redemption flow as synchronous ones:

1. Request to redeem:

   ```solidity
   vault.requestRedeem(shares, user, user);
   ```
2. Claim redemption:

   ```solidity
   vault.withdraw(vault.maxWithdraw(user), receiver, user);
   ```

## Depositing or redeeming on behalf of another user

The ERC-7540 standard allows a user to submit deposit and redemption requests on behalf of another address. The `requestDeposit` and `requestRedeem` functions take separate `controller` and `owner` parameters:

```solidity
vault.requestDeposit(assets, controller, owner);
vault.requestRedeem(shares, controller, owner);
```

* `owner`: The source of the assets (for deposits) or shares (for redemptions). Must equal `msg.sender` unless the owner has approved `msg.sender` as an operator.
* `controller`: The address that controls the request. This address can later claim the resulting shares or assets, cancel the request, and manage the request lifecycle.

### Smart contract integrations

If you are building a smart contract that wraps vault interactions (e.g., an aggregator or routing contract):

* Your contract is typically both `msg.sender` and `owner`: users transfer assets to your contract first, and your contract calls `requestDeposit` with itself as the `owner`. Alternatively, users can approve the vault directly and your contract passes the user's address as `owner` (if the user has approved your contract as an operator).
* Track which address is the `controller` for each request, since that address controls the claim and cancellation lifecycle.
* When claiming on behalf of users, ensure the `controller` parameter matches the address that submitted the original request.

:::info
For smart contract integrations, call `vault.isPermissioned(address(yourContract))` before submitting any requests. If your contract cannot hold shares, deposit and claim operations will revert.
:::

### Operator permissions

An owner can approve another address as an operator using `setOperator`:

```solidity
vault.setOperator(operator, true);
```

Once approved, the operator can call `requestDeposit` or `requestRedeem` with the owner's address as the `owner` parameter. The operator can also cancel requests and claim on behalf of the controller.

:::warning
Approving an operator grants it control over both the assets and shares associated with the vault. Only approve trusted addresses.
:::

## Processing times

Asynchronous requests are processed by the pool manager. The time to process depends on the specific product and its subscription or redemption settlement cycle.

## Price oracle

To get the latest price of vault shares in terms of the investment asset, use the `vault.convertToAssets()` method:

```solidity
// First get the share token decimals
uint8 shareDecimals = vault.share().decimals();

// Convert 1 share to its equivalent value in the investment asset
uint256 oneShare = 10 ** shareDecimals;
uint256 assetValue = vault.convertToAssets(oneShare);
```

This method returns the current value denominated in the investment asset (e.g., USDC). The result is expressed in the decimals of the investment asset. For example, if the investment asset is USDC (6 decimals), the returned value will be in USDC's 6 decimal format.

:::info[Deposit and redeem prices]
The latest price returned by `convertToAssets()` might not be the exact price at which your investment or redemption is executed, as there can be a time lag between querying the price and when the transaction is processed.
:::
