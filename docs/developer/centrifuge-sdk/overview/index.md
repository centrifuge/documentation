# Overview

[![Codecov](https://codecov.io/gh/centrifuge/sdk/graph/badge.svg?token=Q2yU8QfefP)](https://codecov.io/gh/centrifuge/sdk) [![Build CI status](https://github.com/centrifuge/sdk/actions/workflows/build-test-report.yml/badge.svg)](https://github.com/centrifuge/sdk/actions/workflows/build-test-report.yml) [![Latest Release](https://img.shields.io/github/v/release/centrifuge/sdk?sort=semver)](https://github.com/centrifuge/sdk/releases/latest)

Welcome to the Centrifuge SDK documentation. The Centrifuge SDK is a JavaScript client for interacting with the [Centrifuge](https://centrifuge.io) ecosystem. It provides a comprehensive, fully typed library to integrate investments and redemptions, generate financial reports, manage pools, and much more.

# Installation

The SDK is available as an npm package. It it is built to run both client-side and server-side. The SDK uses [viem](https://viem.sh/) under the hood and is required as a peer dependency.

```bash
npm install @centrifuge/sdk
```

# Basic Setup (Mainnet)

```typescript
import Centrifuge from "@centrifuge/sdk";

const centrifuge = new Centrifuge({
  environment: "mainnet",
});
```

> 💡 Side note: To connect to the testnet instead, replace "mainnet" with "testnet".

```typescript
const centrifuge = new Centrifuge({
  environment: "testnet",
});
```

## Key Concepts

- Pool: A collection of assets that investors can invest in or redeem from.
- Vault: A mechanism for handling investments/redemptions via tokenized share classes.
- Investor position: Data about an investor's balance, pending orders, and what can be claimed.
- Reports: Financial views like token price.

## Common Tasks

### Query data (read-only)

```typescript
const pools = await centrifuge.pools();
```

### Perform transactions

First set a signer, e.g. a wallet provider:

```typescript
centrifuge.setSigner(signer);
const poolId = PoolId.from(1, 1);
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
const poolId = PoolId.from(1, 1);
const pool = await centrifuge.pool(poolId);
const report = await pool.reports.sharePrices({
  from: fromNum,
  to: toNum,
  groupBy: "day",
});
console.log(report);
```

## Example Full Flow (Mainnet)

```typescript
import Centrifuge from "@centrifuge/sdk";

async function main() {
  const centrifuge = new Centrifuge({ environment: "mainnet" });
  // set signer (wallet or provider)
  centrifuge.setSigner(walletProvider);

  // get a pool
  const poolId = PoolId.from(1, 1);
  const pool = await centrifuge.pool(poolId);
  const scId = ShareClassId.from(poolId, 1);
  const assetId = AssetId.from(centId, 1);

  // invest
  const vault = await pool.vault(11155111, scId, assetId);
  await vault.increaseInvestOrder(Balance.fromFloat(1000, 18));

  // once processed, claim
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
