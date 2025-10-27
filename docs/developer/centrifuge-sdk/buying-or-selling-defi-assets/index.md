# Buy and sell DeFi assets

This guide shows how to use the Centrifuge SDK to buy and sell tokenized DeFi assets within a pool.

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

## 2. Deploy Merkle Proof Manager

```typescript
const poolId = new PoolId(1);
const pool = await centrifuge.pool(poolId);
const scId = ShareClassId.from(poolId, 1);
const chainId = 11155111; // Ethereum Sepolia

const poolNetworks = await pool.activeNetworks();

const poolNetwork = poolNetworks.filter(
  (activeNetwork) => activeNetwork.chainId === chainId
);

await poolNetwork.deployMerkleProofManager();
```

## 3. Retrieve Merkle Proof Manager and add as balance sheet manager

Retrieve the deployed Merkle Proof Manager and set it as a BalanceSheet manager:

```typescript
const merkleProofManager = await poolNetwork.merkleProofManager();
await poolNetwork.updateBalanceSheetManagers([{ chainId, address: merkleProofManager.address, canManage: true }]),
```

## 4. Setup policies

Policies define specific contract methods that strategists are authorized to execute for managing pool assets. The Merkle Proof Manager controls access to balance sheet functions and enables whitelisting of strategists, allowing them to perform approved operations securely:

```typescript
const addresses = await centrifuge._protocolAddresses(chainId);
const strategist = "0xStrategistAddress";

const vaultDepositPolicy = {
  assetId: assetId.toString(),
  decoder: addresses.vaultDecoder,
  target: "0xVaultAddress",
  action: "function deposit(uint256,address)",
  valueNonZero: false,
  inputs: [
    {
      parameter: "uint256",
      input: [],
    },
    {
      parameter: "address",
      input: ["0xVaultAddress"],
    },
  ]
  inputCombinations: [
  {
    inputs: [null, randomUser],
    inputsEncoded: encodePacked(["address"], ["0xVaultAddress"]),
  },
]
};

const balanceSheetWithdrawPolicy = {
  assetId: assetId.toString(),
  decoder: addresses.vaultDecoder,
  target: addresses.balanceSheet,
  action: "function withdraw(uint64,bytes16,address,uint256,address,uint128)",
  valueNonZero: false,
  inputs: [
    {
      parameter: "poolId",
      input: [poolId.toString() as HexString],
    },
    {
      parameter: "shareClassId",
      input: [scId.raw],
    },
    {
      parameter: "erc20",
      input: [someErc20],
    },
    {
      parameter: "uint256",
      input: [],
    },
    {
      parameter: "address",
      input: [merkleProofManager.address],
    },
    {
      parameter: "uint128",
      input: [],
    },
  ],
  inputCombinations: [
    {
      inputs: [poolId.toString() as HexString, scId.raw, someErc20, null, merkleProofManager.address, null],
      inputsEncoded: encodePacked(
        ["uint64", "bytes16", "address", "address"],
        [poolId.raw, scId.raw, someErc20, merkleProofManager.address]
      ),
    },
  ],
};

const balanceSheetDepositPolicy = {
  assetId: assetId.toString(),
  decoder: addresses.vaultDecoder,
  target: addresses.balanceSheet,
  action: "function deposit(uint64 poolId, bytes16 scId, address asset, uint256, uint128)",
  valueNonZero: false,
  inputs: [
    {
      parameter: "poolId",
      input: [poolId.toString() as HexString],
    },
    {
      parameter: "shareClassId",
      input: [scId.raw],
    },
    {
      parameter: "erc20",
      input: [someErc20],
    },
    {
      parameter: "uint256",
      input: [],
    },
    {
      parameter: "uint128",
      input: [],
    },
  ],
  inputCombinations: [
    {
      inputs: [poolId.toString() as HexString, scId.raw, someErc20, null, null],
      inputsEncoded: encodePacked(["uint64", "bytes16", "address"], [poolId.raw, scId.raw, someErc20]),
    },
  ],
};

centrifuge.setSigner(fundManager);
await merkleProofManager.setPolicies(strategist, [
  vaultDepositPolicy,
  balanceSheetWithdrawPolicy,
  balanceSheetDepositPolicy,
]);
```

## 5. Withdraw funds from the balance sheet to the manager and deposit (invest) into the vault

Withdraw funds from the pool's balance sheet, transfer them to the manager, and then deposit (invest) those funds into the vault. This process involves executing a sequence of policy-approved transactions using the MerkleProofManager, ensuring that only authorized strategists can perform these operations:

```typescript
centrifuge.setSigner(strategist);
await merkleProofManager.execute([
  {
    policy: balanceSheetWithdrawPolicy,
    inputs: [0, amount],
  },
  {
    policy: vaultDepositPolicy,
    inputs: [amount],
  },
  {
    policy: balanceSheetDepositPolicy,
    inputs: [0, amount],
  },
]);
```
