# Overview

Welcome to the Centrifuge SDK documentation. The Centrifuge SDK is a JavaScript client for interacting with the [Centrifuge](https://centrifuge.io) ecosystem. It provides a comprehensive, fully typed library to integrate investments and redemptions, generate financial reports, manage pools, and much more.

## Installation

The SDK is available as an npm package. It it is built to run both client-side and server-side.

```bash
pnpm add @centrifuge/sdk
```

## Basic setup (mainnet)

```typescript
import Centrifuge from "@centrifuge/sdk";

const centrifuge = new Centrifuge({
  environment: "mainnet",
});
```

:::info[Testnet]
To connect to the testnet instead, replace `mainnet` with `testnet`.

```typescript
const centrifuge = new Centrifuge({
  environment: "testnet",
});
```

:::

## Key concepts

- Pool: A collection of assets that investors can invest in or redeem from.
- Vault: A mechanism for handling investments/redemptions via tokenized share classes.
- Investor position: Data about an investor's balance, pending orders, and what can be claimed.
- Reports: Financial views like token price.

### Query data (read-only)

```typescript
const pools = await centrifuge.pools();
```

### Perform transactions

First set a signer, e.g. a wallet provider:

```typescript
centrifuge.setSigner(signer);
const poolId = new PoolId(1);
const pool = await centrifuge.pool(poolId);
const tx = await pool.updatePoolManagers([
  {
    address: "0xAddress",
    canManage: true,
  },
]);
console.log(tx.hash);
```

### Generate reports

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

## Example full flow (mainnet)

```typescript
import Centrifuge from "@centrifuge/sdk";

async function main() {
  const centrifuge = new Centrifuge({ environment: "mainnet" });
  // set signer (wallet or provider)
  centrifuge.setSigner(walletProvider);

  // get a pool
  const poolId = new PoolId(1);
  const pool = await centrifuge.pool(poolId);
  const scId = ShareClassId.from(poolId, 1);
  const assetId = AssetId.from(centId, 1);

  // deposit into vault (async)
  const vault = await pool.vault(11155111, scId, assetId);
  await vault.asyncDeposit(Balance.fromFloat(1000, 18));

  // once processed, claim shares
  await vault.claim();

  // get a report
  const fromNum = toUTCEpoch("2025-01-01", "s");
  const toNum = toUTCEpoch("2025-01-02", "s");

  const report = await pool.reports.sharePrices({
    from: fromNum,
    to: toNum,
    groupBy: "day",
  });
  console.log(report);
}

main().catch(console.error);
```
