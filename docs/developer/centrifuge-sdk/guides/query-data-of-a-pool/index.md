# Query data of a pool

This guide shows how to use the Centrifuge SDK to read pool data, vaults, and investor positions.

## Prerequisites

Before you begin, make sure you have:

- Node.js v18 or later
- npm or yarn
- Access to a wallet or provider if you want to query investor-specific data

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

Pools are the main entry point to query data.

```typescript
// Get a pool by ID
const poolId = new PoolId(1);
const pool = await centrifuge.pool(poolId);
```

## 4. Get a pool metadata

This includes general pool information such as name, manager, and configuration.

```typescript
const metadata = await pool.metadata();
console.log(metadata);
```

## 4. Query a vault

Each pool can contain multiple tokens and each token can have multiple vaults.
You can query a single vault using pool ID, token ID, chain ID, and asset address

```typescript
// Get tokenId based on previously defined poolId
const tokenId = ShareClassId.from(poolId, 1);
const assetId = AssetId.from(centId, 1);
const chainId = 11155111; // Ethereum Sepolia
// Get a vault
const vault = await pool.vault(chainId, tokenId, assetId);
```

## 5. Query investor position

Get the details of the investment of an investor in the vault and any pending investments or redemptions.

```typescript
const investment = await vault.investment("0xInvestorAddress");

console.log(investment.shareBalance);
console.log(investment.shareCurrency);
console.log(investment.shareBalance);
console.log(investment.investmentCurren);
console.log(investment.investmentCurrencyAllowance);
console.log(investment.isAllowedToInvest);
console.log(investment.isAllowedToRedeem);
console.log(investment.isSyncInvest);
console.log(investment.maxInvest);
console.log(investment.claimableInvestShares);
console.log(investment.claimableInvestCurrencyEquivalent);
console.log(investment.claimableRedeemCurrency);
console.log(investment.claimableRedeemSharesEquivalent);
console.log(investment.pendingInvestCurrency);
console.log(investment.pendingRedeemShares);
console.log(investment.claimableCancelInvestCurrency);
console.log(investment.claimableCancelRedeemShares);
console.log(investment.hasPendingCancelInvestRequest);
console.log(investment.hasPendingCancelRedeemRequest);
console.log(investment.investmentCurrency);
```

## 6. Query reports

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
