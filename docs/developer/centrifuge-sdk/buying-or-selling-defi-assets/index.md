# Buy and sell DeFi assets

This guide shows how to use the Centrifuge SDK to buy and sell tokenized DeFi assets within a pool, by running pool workflows (deposit, redeem, claim, and NAV updates) as a strategist or an offchain keeper.

A workflow is a pre-defined, audited script (deposit, redeem, claim, price update, and so on) that a pool manager has added to a strategist's policy. You run one by name. The SDK reads the pool's onchain policy, rebuilds the proof, and submits the transaction, so there is no need to assemble policies, script hashes, or Merkle proofs yourself.

## Prerequisites

Before you begin, make sure you have:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- A package manager: [pnpm](https://pnpm.io/), [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A wallet or signer for the strategist the workflows were added for (e.g. a private key account via [Viem](https://viem.sh/))

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

List the workflows in a strategist's policy across all of the pool's chains:

```typescript
const strategist = "0xStrategistAddress";

const workflows = await pool.listWorkflows({ strategist });
// [{ workflowRef, name, group, chainId, runtimeVariables }, ...]
```

## 3. Manage a strategist's policy (pool manager)

A pool manager controls which workflows each strategist can run. `addToPolicy` reads the pool's current policy, adds the workflow, and updates both the policy metadata and the onchain permissions in one transaction:

```typescript
centrifuge.setSigner(poolManager);

await pool.addToPolicy({ strategist, workflowRef: "cfg_<pool>_request_redeem" });
```

Some workflows expose configurable variables: values the pool manager fixes when adding the workflow (for example a slippage limit). They are pinned into the policy and cannot be changed by the strategist at run time. Pass them as `configurableValues`, keyed by the variable name and ABI-encoded:

```typescript
import { encodeWorkflowInputValue } from "@centrifuge/sdk";

await pool.addToPolicy({
  strategist,
  workflowRef: "cfg_<pool>_request_redeem",
  configurableValues: {
    maxSlippage: encodeWorkflowInputValue("uint256", "100"),
  },
});
```

Remove a workflow the same way:

```typescript
await pool.removeFromPolicy({ strategist, workflowRef: "cfg_<pool>_request_redeem" });
```

## 4. Run a workflow

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
