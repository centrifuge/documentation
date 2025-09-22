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

## 3. Get a pool and a vault

Select the pool and vault where you want to buy or sell assets.

```typescript
// Get a pool by ID
const poolId = new PoolId(1);
const pool = await centrifuge.pool(poolId);
const scId = ShareClassId.from(poolId, 1);
const assetId = AssetId.from(centId, 1);
const chainId = 11155111; // Ethereum Sepolia
// Get a vault
const vault = await pool.vault(chainId, scId, assetId);
```

## 4. Buy assets (invest into a vault)

Placing a buy order means increasing the invest order in the vault.

```typescript
const { investmentCurrency } = await vault.details();
const amount = Balance.fromFloat(1000, investmentCurrency.decimals);
const tx = await vault.increaseInvestOrder(amount);
```

Depending on the vault type:

- Sync vaults: the investment settles immediately.
- Async vaults: the order is processed during the next epoch.

## 5. Claim your shares

Once the investment is processed (immediately or after an epoch), you need to claim your shares:

```typescript
const claimTx = await vault.claim();
console.log("Claim transaction hash:", claimTx.hash);
```

## 6. Sell assets (redeem from a vault)

Selling assets means creating a redeem order to exchange your shares back into currency.

```typescript
const amount = Balance.fromFloat(500, decimals);
const redeemTx = await vault.increaseRedeemOrder(amount); // redeem 500 shares
console.log("Redeem transaction hash:", redeemTx.hash);
```

After the order is processed, claim your redeemed currency:

```typescript
const claimRedeemTx = await vault.claim();
console.log("Claim redeem transaction hash:", claimRedeemTx.hash);
```

## 7. Check investor position

You can check your balance, pending investments, and pending redemptions.

```typescript
const investment = await vault.investment("0xInvestorAddress");

console.log(investment.shareBalance);
console.log(investment.shareCurrency);
console.log(investment.claimableRedeemCurrency);
console.log(investment.claimableRedeemSharesEquivalent);
console.log(investment.pendingRedeemShares);
console.log(investment.claimableCancelRedeemShares);
console.log(investment.hasPendingCancelRedeemRequest);
```
