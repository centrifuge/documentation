# Run pool workflows

This guide shows how to use the Centrifuge SDK to run pool workflows — buying and selling assets, claiming, and updating NAV — as a strategist or an offchain keeper.

A workflow is a pre-defined, audited script (deposit, redeem, claim, price update, and so on) that a pool manager has whitelisted for a strategist. You run one by name. The SDK reads the pool's onchain policy, rebuilds the proof, and submits the transaction — there is no need to assemble policies, script hashes, or Merkle proofs yourself.

## Prerequisites

Before you begin, make sure you have:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- A package manager: [pnpm](https://pnpm.io/), [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A wallet or signer for the strategist that workflows were whitelisted for (e.g. a private key account via [Viem](https://viem.sh/))

## Installation

```bash
pnpm add @centrifuge/sdk
```

## 1. Initialize the SDK

```typescript
import Centrifuge, { PoolId } from "@centrifuge/sdk";

const centrifuge = new Centrifuge({ environment: "mainnet" });
const pool = await centrifuge.pool(new PoolId(1));
```

:::info
For testing purposes, you can connect to testnet instead by setting environment: `testnet`.
:::

## 2. List the workflows you can run

List the workflows whitelisted for a strategist across all of the pool's chains:

```typescript
const strategist = "0xStrategistAddress";

const workflows = await pool.listWorkflows({ strategist });
// [{ workflowRef, name, group, chainId, runtimeVariables }, ...]
```

## 3. Run a workflow

Run a workflow by its `workflowRef`. The SDK resolves the chain, rebuilds the proof from the onchain policy, and submits:

```typescript
centrifuge.setSigner(strategist);

await pool.executeWorkflow({
  strategist,
  workflowRef: "cfg_<pool>_account", // e.g. an "Update price" workflow
});
```

For workflows that take inputs (for example a redeem amount), pass `runtimeValues`:

```typescript
import { encodeWorkflowInputValue } from "@centrifuge/sdk";

await pool.executeWorkflow({
  strategist,
  workflowRef: "cfg_<pool>_request_redeem",
  runtimeValues: { amount: encodeWorkflowInputValue("uint128", "1000") },
});
```

Pass `{ simulate: true }` to dry-run before submitting:

```typescript
await pool.executeWorkflow({ strategist, workflowRef: "cfg_<pool>_account" }, { simulate: true });
```

## 4. Whitelist workflows (pool manager)

A pool manager controls which workflows each strategist can run. `addToPolicy` reads the pool's current policy, adds the workflow, and updates both the policy metadata and the onchain permissions in one transaction:

```typescript
centrifuge.setSigner(poolManager);

await pool.addToPolicy({ strategist, workflowRef: "cfg_<pool>_request_redeem" });
```

Remove a workflow the same way:

```typescript
await pool.removeFromPolicy({ strategist, workflowRef: "cfg_<pool>_request_redeem" });
```
