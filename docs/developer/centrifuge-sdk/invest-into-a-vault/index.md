# Invest into a vault

This guide shows how to invest into a Centrifuge vault using the Centrifuge SDK.  
It covers setup, connecting to mainnet or testnet, and sending your first investment transaction.

## Prerequisites

Before you begin, make sure you have:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- A package manager: [pnpm](https://pnpm.io/), [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A wallet or signer that can connect to Ethereum-compatible chains (e.g. MetaMask, WalletConnect, or a private key account via [Viem](https://viem.sh/))
- Deposit asset (e.g. USDC) on `mainnet` or `testnet`

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

## 3. Get a pool and vault

Each pool can contain multiple share classes and each share class can have multiple vaults issuing tokens against an deposit asset.
You need the pool ID, share class ID, chain ID, and asset address.

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

## 4. Deposit into the vault

You can deposit into the vault using either synchronous or asynchronous deposit methods:

### Synchronous deposits (ERC-4626)

For vaults that support synchronous deposits, use `syncDeposit()`:

```typescript
const { asset } = await vault.details();
const amount = Balance.fromFloat(1000, asset.decimals);
const tx = await vault.syncDeposit(amount);
```

The deposit settles immediately and shares are minted in the same transaction.

### Asynchronous deposits (ERC-7540)

For vaults that support asynchronous deposits, use `asyncDeposit()`:

```typescript
const { asset } = await vault.details();
const amount = Balance.fromFloat(1000, asset.decimals);
const tx = await vault.asyncDeposit(amount);
```

The deposit request is queued and will be processed during the next epoch.

## 5. Claim your shares

For asynchronous deposits, once the deposit request is processed during an epoch, you need to claim your shares:

```typescript
const claimTx = await vault.claim();
console.log("Claim transaction hash:", claimTx.hash);
```

:::info
For synchronous deposits using `syncDeposit()`, shares are minted immediately in the same transaction, so there's no need to claim separately.
:::

## 6. Check investor position

You can query your current position in the vault at any time:

```typescript
const investor = await vault.investment("0xYourWalletAddress");

console.log(investor.shareBalance); // current balance of shares
console.log(investor.pendingDepositAssets); // assets in pending deposit requests
console.log(investor.claimableDepositShares); // shares ready to be claimed
```
