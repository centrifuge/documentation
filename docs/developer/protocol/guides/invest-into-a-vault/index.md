---
id: invest-into-a-vault
title: Invest into a vault
category: subpage
contributors: 
---

# Invest into a vault

This guide explains how to invest in and redeem from Centrifuge vaults, using both synchronous and asynchronous vault types. We’ll walk through:

* How to deposit and redeem in a synchronous deposit vault (e.g., `deJTRSY` for T-bills).
* How to interact with an asynchronous vault (e.g., `JTRSY`), which operates in two distinct phases for deposits and redemptions.
* How to query the share token price using the price oracle.

## Synchronous deposit vaults (e.g., `deJTRSY`)

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

## Asynchronous vaults (e.g., `JTRSY`)

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
