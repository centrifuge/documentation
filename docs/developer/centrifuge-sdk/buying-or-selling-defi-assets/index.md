# Run pool workflows

This guide shows how to use the Centrifuge SDK to run pool workflows through the Onchain Portfolio Manager — buying and selling assets, claiming, and updating NAV — as a strategist or an offchain keeper.

A workflow is a pre-defined, audited script (deposit, redeem, claim, price update, and so on) published in the workflow marketplace. The Onchain Portfolio Manager (OnchainPM) is the per-pool contract that runs them. A pool manager whitelists a curated set of workflows for each strategist; the strategist (or a keeper) can then execute only those, with no broader access to pool funds.

Each strategist's permissions are stored onchain as a Merkle root over the script hashes of their whitelisted workflows. Executing a workflow submits the script plus a Merkle proof, so the OnchainPM runs exactly what was whitelisted.

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
import Centrifuge, { PoolId, ShareClassId } from "@centrifuge/sdk";

const centrifuge = new Centrifuge({
  environment: "mainnet",
});
```

:::info
For testing purposes, you can connect to testnet instead by setting environment: `testnet`.
:::

## 2. Resolve the pool and its network

Workflows run on a specific network, so resolve the pool, the share class, and the active network you want to operate on:

```typescript
const poolId = new PoolId(1);
const scId = ShareClassId.from(poolId, 1);
const centrifugeId = 1; // Centrifuge network ID

const pool = await centrifuge.pool(poolId);
const networks = await pool.activeNetworks();
const network = networks.find((n) => n.centrifugeId === centrifugeId)!;
```

## 3. Deploy and authorize the Onchain Portfolio Manager

This is a one-time setup done by the pool manager. Deploy the OnchainPM for the network, then authorize it so it can move balance-sheet assets and mint accounting tokens:

```typescript
centrifuge.setSigner(poolManager);

await network.deployOnchainPM();
const onchainPM = await network.onchainPM();

await network.authorizeOnchainPM(onchainPM.address, scId);
```

`authorizeOnchainPM` grants the OnchainPM the two roles workflows need: balance-sheet manager and accounting-token minter. You can check the status at any time with `await onchainPM.isAuthorized()`.

## 4. Choose workflows from the marketplace

Fetch the workflow catalog for the current environment. Each entry is pinned to a chain and carries the actions it runs, its preset variables, and its runtime inputs:

```typescript
const catalog = await centrifuge.workflowMarketplace();

// Pick the workflows you want to whitelist for this pool, by their stable `workflowRef`.
const deposit = catalog.find((w) => w.workflowRef === "cfg_<pool>_deposit")!;
const redeem = catalog.find((w) => w.workflowRef === "cfg_<pool>_request_redeem")!;
```

Workflows in the `account` group (for example "Update price") update NAV and are typically run together as an accounting update — see step 7.

## 5. Whitelist workflows for a strategist

Whitelisting is done by the pool manager. Build a policy entry per workflow (the catalog workflow plus any values pinned at whitelist time), compute the script hashes, and commit them to the OnchainPM. The set you pass becomes the strategist's complete policy on this network:

```typescript
import { computeWorkflowGroupScriptHashes } from "@centrifuge/sdk";

const strategist = "0xStrategistAddress";

const policy = [deposit, redeem].map((workflow) => ({
  workflow,
  configurableValues: {}, // values a pool manager sets at whitelist time, if any
  excludedActions: [], // optional actions to drop from the script
}));

const scriptHashes = await computeWorkflowGroupScriptHashes({
  centrifuge,
  network,
  policy,
  strategist,
  scId,
});

centrifuge.setSigner(poolManager);
await onchainPM.updatePolicy({ scId, strategist, scriptHashes });
```

:::note
`configurableValues` and `excludedActions` are pinned here, at whitelist time, and are immutable afterwards. They become part of the script hash, so the same policy must be passed at execution time to reproduce the proof.
:::

## 6. Execute a workflow

As the strategist (or an offchain keeper signing for that strategist), run one whitelisted workflow. Pass the full `policy` so the SDK can rebuild the Merkle proof, and `run` to select which entry to execute. `runtimeValues` carries any per-execution inputs the workflow declares:

```typescript
import { encodeWorkflowInputValue } from "@centrifuge/sdk";

centrifuge.setSigner(strategist);

await onchainPM.executeWorkflow({
  policy,
  run: 0, // index into `policy` — the deposit workflow
  strategist,
  runtimeValues: {
    amount: encodeWorkflowInputValue("uint256", "1000"),
  },
});
```

Pass `{ simulate: true }` to dry-run the execution before submitting:

```typescript
await onchainPM.executeWorkflow({ policy, run: 0, strategist }, { simulate: true });
```

## 7. Batch workflows into an accounting update

Account-group workflows (price and NAV updates) are usually run together. `executeAccountingBatch` builds each selected workflow and submits them as a single atomic `multicall` — they all succeed or revert together:

```typescript
await onchainPM.executeAccountingBatch({
  policy,
  run: [0, 1, 2], // indices of the account workflows to run
  strategist,
});
```

Simulate the batch first to preview its effect and surface any workflow that would revert:

```typescript
await onchainPM.executeAccountingBatch({ policy, run: [0, 1, 2], strategist }, { simulate: true });
```

Because the batch is atomic, one un-runnable workflow reverts the whole update. Simulating first tells you which one.
