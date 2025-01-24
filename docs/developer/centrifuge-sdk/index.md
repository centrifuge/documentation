# Welcome

Welcome to the Centrifuge SDK documentation. The Centrifuge SDK is a JavaScript client for interacting with the [Centrifuge](https://centrifuge.io) ecosystem. It provides a comprehensive, fully typed library to integrate investments and redemptions, generate financial reports, manage pools, and much more.

# Installation

```bash
npm install @centrifuge/sdk viem

# or

yarn add @centrifuge/sdk viem
```

The SDK is available as an npm package. It it is built to run both client-side and server-side. The SDK uses [viem](https://viem.sh/) under the hood and is required as a peer dependency.

# Initialization

```typescript
import { Centrifuge } from "@centrifuge/sdk";

const centrifuge = new Centrifuge();
```

The SDK can be initialized with or without a config object. If no config is provided, the SDK will use the default values.

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

Mainnet is the default environment if no config is provided. Any configurations can be overridden in the config object.

### Demo

```typescript
const centrifuge = new Centrifuge({
  environment: "demo",
});
```

By setting the environment to `demo`, the SDK will connect to Sepolia testnet.

# SDK Overview

The Centrifuge SDK provides the following interfaces (more will be added soon):

- Pools
- Reports
- Account

## Queries

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

Queries return Promise-like [Observables](https://rxjs.dev/guide/observable). They can be either awaited to get a single value, or subscribed to to get fresh data whenever on-chain data changes.

The returned results are either immutable values, or entities that can be further queried.

## Transactions

```js
centrifuge.setSigner(signer);
```

To perform transactions, you need to set a signer on the `centrifuge` instance.

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

`signer` can be a [EIP1193](https://eips.ethereum.org/EIPS/eip-1193)-compatible provider or a Viem [LocalAccount](https://viem.sh/docs/accounts/local).

With this you can call transaction methods. Similar to queries they can be awaited to get their final result, or subscribed to get get status updates.
