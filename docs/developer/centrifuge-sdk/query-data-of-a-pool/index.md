# Query data of a pool

This guide shows how to use the Centrifuge SDK to read pool data, vaults, and investor positions.

## Prerequisites

Before you begin, make sure you have:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- A package manager: [pnpm](https://pnpm.io/), [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A wallet or signer that can connect to Ethereum-compatible chains (e.g. MetaMask, WalletConnect, or a private key account via [Viem](https://viem.sh/))

## Installation

Install the Centrifuge SDK in your project:

```bash
pnpm add @centrifuge/sdk
```

## 1. Initialize the SDK

Create a Centrifuge instance and connect it to mainnet:

```typescript
import Centrifuge from "@centrifuge/sdk";

const centrifuge = new Centrifuge({
  environment: "mainnet",
});
```

:::info
For testing purposes, you can connect to testnet instead by setting environment: `testnet`.
:::

## 2. Set a signer

To send transactions, attach a signer (for example, from MetaMask or another EIP-1193 compatible provider):

```typescript
// Example: using a MetaMask injected provider
const provider = (window as any).ethereum;
await provider.request({ method: "eth_requestAccounts" });

centrifuge.setSigner(provider);
```

If you’re using a private key or server-side setup, you can also provide a [Viem LocalAccount](https://viem.sh/docs/accounts/local).

## 3. Get a pool

Pools are the main entry point to query data:

```typescript
// Get a pool by ID
const poolId = new PoolId(1);
const pool = await centrifuge.pool(poolId);
```

## 4. Get a pool metadata

This includes general pool information such as name, manager, and configuration:

```typescript
const metadata = await pool.metadata();
console.log(metadata);
```

## 5. Query a vault

Each pool can contain multiple tokens and each token can have multiple vaults.
You can query a single vault using pool ID, token ID, centrifuge ID, and asset address:

```typescript
// Get tokenId based on previously defined poolId
const tokenId = ShareClassId.from(poolId, 1);
const assetId = AssetId.from(centId, 1);
const centrifugeId = 1; // Centrifuge network ID
// Get a vault
const vault = await pool.vault(centrifugeId, tokenId, assetId);
```

or if you do not know token ID and asset ID you can do:

```typescript
// This has information about tokens
const poolDetails = await pool.details();
const shareClasses = poolDetails.shareClasses;

// This will return all the networks to which pool is deployed
const poolNetworks = await pool.activeNetworks();

// Now we can loop through networks and tokens to retrieve the desired token ID and call:

const vaults = await poolNetwork.vaults(tokenId);

// OR

const vaults = await shareClass.vaults(centrifugeId);

// OR if we do have asset address

const vault = await poolNetwork.vault(tokenId, assetAddress);
```

## 6. Get share token price

To get the current price per share of a vault's share token, use the `shareClass.details()` method:

```typescript
// Get the share class (token) details
const shareClassDetails = await shareClass.details();

// Access the price per share
const pricePerShare = shareClassDetails.pricePerShare;
console.log(`Price per share: ${pricePerShare}`);
```

The `pricePerShare` field represents the current value of one share token in the vault's underlying currency. It is always denominated as an 18 decimals fixed point integer.

## 7. Query investor position

Get the details of the investment of an investor in the vault and any pending deposits or redemptions:

```typescript
const investment = await vault.investment("0xInvestorAddress");

console.log(investment.shareBalance);
console.log(investment.share);
console.log(investment.assetBalance);
console.log(investment.assetAllowance);
console.log(investment.isAllowedToDeposit);
console.log(investment.isAllowedToRedeem);
console.log(investment.isSyncDeposit);
console.log(investment.maxDeposit);
console.log(investment.claimableDepositShares);
console.log(investment.claimableDepositAssetEquivalent);
console.log(investment.claimableRedeemAssets);
console.log(investment.claimableRedeemSharesEquivalent);
console.log(investment.pendingDepositAssets);
console.log(investment.pendingRedeemShares);
console.log(investment.claimableCancelDepositAssets);
console.log(investment.claimableCancelRedeemShares);
console.log(investment.hasPendingCancelDepositRequest);
console.log(investment.hasPendingCancelRedeemRequest);
console.log(investment.asset);
```

## 7. Query reports

```typescript
const poolId = new PoolId(1);
const pool = await centrifuge.pool(poolId);
const report = await pool.reports.sharePrices({
  from: fromNum,
  to: toNum,
  groupBy: "day",
});

console.log(report);
```
