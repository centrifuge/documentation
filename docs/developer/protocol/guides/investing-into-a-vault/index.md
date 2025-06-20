---
id: investing-into-a-vault
title: Investing into a vault
category: subpage
contributors: 
---

# Investing into a vault

This guide explains how to invest in and redeem from Centrifuge vaults, using both synchronous and asynchronous vault types. We’ll walk through:

* How to deposit and redeem in a synchronous vault (e.g., `deJTRSY` for T-bills).
* How to interact with an asynchronous vault (e.g., `JTRSY`), which operates in two distinct phases for deposits and redemptions.

## Synchronous vaults (e.g., `deJTRSY`)

Synchronous vaults process deposits and redemptions immediately within a single transaction.

### Depositing into a synchronous vault

To deposit assets (e.g., USDC) and receive vault shares:

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

Instead of depositing directly, you submit a request:

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
