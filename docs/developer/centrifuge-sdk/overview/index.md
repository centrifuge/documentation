# Overview

[![Codecov](https://codecov.io/gh/centrifuge/sdk/graph/badge.svg?token=Q2yU8QfefP)](https://codecov.io/gh/centrifuge/sdk) [![Build CI status](https://github.com/centrifuge/sdk/actions/workflows/build-test-report.yml/badge.svg)](https://github.com/centrifuge/sdk/actions/workflows/build-test-report.yml) [![Latest Release](https://img.shields.io/github/v/release/centrifuge/sdk?sort=semver)](https://github.com/centrifuge/sdk/releases/latest)

Welcome to the Centrifuge SDK documentation. The Centrifuge SDK is a JavaScript client for interacting with the [Centrifuge](https://centrifuge.io) ecosystem. It provides a comprehensive, fully typed library to integrate investments and redemptions, generate financial reports, manage pools, and much more.

# Installation

The SDK is available as an npm package. It it is built to run both client-side and server-side. The SDK uses [viem](https://viem.sh/) under the hood and is required as a peer dependency.

```bash
npm install @centrifuge/sdk viem

# or

yarn add @centrifuge/sdk viem
```

# Initialization

The SDK can be initialized with or without a config object. If no config is provided, the SDK will use the default values.

```typescript
import { Centrifuge } from "@centrifuge/sdk";

const centrifuge = new Centrifuge();
```

## Config

```typescript
type Config = {
  environment: "mainnet" | "demo" | "dev";
  rpcUrls?: Record<number | string, string>;
  indexerUrl: string;
  ipfsUrl: string;
};
```

### Mainnet

Mainnet is the default environment if no config is provided. Any configurations can be overridden in the config object.

```typescript
const centrifuge = new Centrifuge({
  environment: "mainnet",
  rpcUrls: {
    1: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
  },
  indexerUrl: "https://indexer.centrifuge.io",
  ipfsUrl: "https://ipfs.centrifuge.io",
});
```

### Demo

By setting the environment to `demo`, the SDK will connect to Sepolia testnet.

```typescript
const centrifuge = new Centrifuge({
  environment: "demo",
});
```

# SDK Overview

The Centrifuge SDK provides the following interfaces (more will be added soon):

- [Pools](https://docs.centrifuge.io/developer/centrifuge-sdk/pools/)
- [Reports](https://docs.centrifuge.io/developer/centrifuge-sdk/reports/)
- [Account](https://docs.centrifuge.io/developer/centrifuge-sdk/account/)

## Queries

Queries return Promise-like [Observables](https://rxjs.dev/guide/observable). They can be either awaited to get a single value, or subscribed to to get fresh data whenever on-chain data changes.

The returned results are either immutable values, or entities that can be further queried.

```ts
try {
  const pool = await centrifuge.pools();
} catch (error) {
  console.error(error);
}
```

```js
const subscription = centrifuge.pools().subscribe(
  (pool) => console.log(pool),
  (error) => console.error(error)
);
subscription.unsubscribe();
```

### Query caching

```ts
const report1 = await pool.reports.balanceSheet();
const report2 = await pool.reports.balanceSheet(); // resolves immediately
const report3 = await pool.reports.balanceSheet({ groupBy: "month" }); // also resolves immediately as it doesn't need to fetch new data

sleep(5 * 60 * 1000);

const report4 = await pool.reports.balanceSheet(); // will wait for fresh data
```

The results of queries are cached and shared between observables. When subscribing to a query multiple times, the underlying observables that fetch data are only subscribed to once. Data remains cached for a few minutes and will be passed to new subscribers. This is particularly useful in user-facing applications as queries can sometimes lead to a cascade of 4 or 5 requests and can slow down an application.

```ts
const centrifuge = new Centrifuge({ cache: false }); // TODO NOT YET IMPLEMENTED

// ...

const investment1 = await vault.investment("0x...");

await vault.claim();

const investment2 = await vault.investment("0x..."); // will fetch again
```

In a script you may want to disable caching to ensure that data is always fresh.

## Transactions

To perform transactions, you need to set a signer on the `centrifuge` instance.

```js
centrifuge.setSigner(signer);
```

`signer` can be a [EIP1193](https://eips.ethereum.org/EIPS/eip-1193)-compatible provider or a Viem [LocalAccount](https://viem.sh/docs/accounts/local).

With this you can call transaction methods. Similar to queries they can be awaited to get their final result, or subscribed to get get status updates.

```ts
const pool = await centrifuge.pool("1");
try {
  const status = await pool.closeEpoch();
  console.log(status);
} catch (error) {
  console.error(error);
}
```

```js
const pool = await centrifuge.pool("1");
const subscription = pool.closeEpoch().subscribe(
  (status) => console.log(pool),
  (error) => console.error(error),
  () => console.log("complete")
);
```
