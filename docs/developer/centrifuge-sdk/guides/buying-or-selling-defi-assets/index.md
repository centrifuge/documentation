# Buying and selling DeFi assets

This guide shows how to use the Centrifuge SDK to buy and sell tokenized DeFi assets within a pool.

## Prerequisites

Before you begin, make sure you have:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- A package manager: [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
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

## 3. Get balance sheet managers or add a new one

Retrieve the current balance sheet managers for a pool, or update the list by adding a new manager.

```typescript
const balanceSheetManager =

// Or add new one
const poolId = new PoolId(1);
const pool = await centrifuge.pool(poolId);
const scId = ShareClassId.from(poolId, 1);
const chainId = 11155111; // Ethereum Sepolia
const assetId = AssetId.from(centId, 1);

const shareClass = new ShareClass(centrifuge, pool, scId.raw)
const balanceSheet = shareClass.balanceSheet(chainId)
await balanceSheet.pool.updateBalanceSheetManagers([{ chainId, address: '0xManagerAddress', canManage: true }])
```

## 4. Withdraw pool funds

Withdraw funds from the pool balance sheet to a specified manager address.

```typescript
const amount = Balance.fromFloat(1, 18);

await balanceSheet.withdraw(assetId, "0xManagerAddress", amount);
```

## 5. Deposit asset into the pool

Deposit an asset into the pool balance sheet after it has been purchased.

```typescript
await balanceSheet.deposit(assetId, amount);
```
