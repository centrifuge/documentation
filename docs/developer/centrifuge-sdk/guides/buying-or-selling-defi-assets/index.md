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

## 3. Deploy MerkleProofManager

```typescript
const poolId = new PoolId(1);
const pool = await centrifuge.pool(poolId);
const scId = ShareClassId.from(poolId, 1);

const poolNetworks = await pool.activeNetworks();

await poolNetwork.deployMerkleProofManager();
```

## 4. Retrieve MerkleProofManager and add as balance sheet manager

Retrieve the deployed MerkleProofManager and set it as a BalanceSheet manager:

```typescript
const merkleProofManager = await poolNetwork.merkleProofManager();
await poolNetwork.updateBalanceSheetManagers([{ chainId, address: merkleProofManager.address, canManage: true }]),
```

## 5. Withdraw pool funds

Use the MerkleProofManager to deposit funds from the BalanceSheet into an external vault:

```typescript
const addresses = await centrifuge._protocolAddresses(chainId);
const strategist = "0xStrategistAddress";

const policy = {
  assetId: assetId.toString(),
  decoder: addresses.vaultDecoder,
  target: "0xVaultAddress",
  abi: "function deposit(uint256,address)",
  args: [null, strategist],
  argsEncoded: encodePacked(["address"], ["0xVaultAddress"]),
};

centrifuge.setSigner(fundManager);
await merkleProofManager.setPolicies(strategist, [policy]);

centrifuge.setSigner(strategist);
await merkleProofManager.execute([
  {
    policy,
    inputs: [amountToDeposit],
  },
]);
```

## 6. Deposit asset into the pool

Deposit an asset into the pool balance sheet after it has been purchased:

```typescript
centrifuge.setSigner(strategist);
await balanceSheet.deposit(assetId, amount);
```
