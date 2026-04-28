# Manage NAV & orders

This guide shows how to update share prices and process investment and redemption orders using the Centrifuge SDK. For the underlying contract-level details, see the [Manage a pool](/developer/protocol/guides/manage-a-pool/) guide.

## Prerequisites

Before you begin, make sure you have:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- A package manager: [pnpm](https://pnpm.io/), [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A wallet or signer with pool manager permissions on the pool you want to manage

## Installation

Install the Centrifuge SDK in your project:

```bash
pnpm add @centrifuge/sdk
```

## 1. Initialize the SDK

```typescript
import Centrifuge, { PoolId, ShareClassId, AssetId, Price, Balance } from "@centrifuge/sdk";

const centrifuge = new Centrifuge({ environment: "mainnet" });
centrifuge.setSigner(signer);
```

:::info
For testing purposes, you can connect to testnet instead by setting `environment: "testnet"`.
:::

## 2. Get the pool and share class

```typescript
const poolId = new PoolId("0x...");
const pool = await centrifuge.pool(poolId);

const scId = ShareClassId.from(poolId, 1);
const shareClass = await pool.shareClass(scId);
```

## 3. Update share price

Call `updateSharePrice` with the new price. The SDK automatically batches the on-chain price update with `notifySharePrice` calls for every active network the share class is deployed on.

```typescript
const pricePerShare = Price.fromFloat(1.05);
await shareClass.updateSharePrice(pricePerShare);
```

`Price.fromFloat` takes a decimal number and converts it to an 18-decimal fixed-point integer.

### Notify share price to specific chains

`updateSharePrice` notifies all active networks automatically. If you need to re-push the price to specific chains without updating it, call `notifySharePrice` per chain. To notify multiple chains, use `Promise.all`:

```typescript
const centrifugeIds = [1, 2, 3]; // Centrifuge network IDs

await Promise.all(centrifugeIds.map((centrifugeId) => shareClass.notifySharePrice(centrifugeId)));
```

## 4. Approve and issue shares (deposits)

When investors submit deposit requests, they sit in a pending queue. As the pool manager, you approve them and lock in a share price. The SDK combines `approveDeposits`, `issueShares`, and the per-investor `notifyDeposit` calls into a single transaction.

```typescript
const assetId = AssetId.from(centrifugeId, assetAddress);

await shareClass.approveDepositsAndIssueShares([
  {
    assetId,
    approveAssetAmount: Balance.fromFloat(100_000, 6), // approve 100,000 USDC
    issuePricePerShare: Price.fromFloat(1.05),         // price at which shares are issued
  },
]);
```

* `approveAssetAmount`: the total asset amount to approve for the current epoch. Must not exceed the pending deposit amount. Omit to skip approval and only issue for a previously approved epoch.
* `issuePricePerShare`: the price at which approved assets are converted into shares. Omit to approve without issuing yet.

The SDK calculates how many per-investor notify calls fit within the available cross-chain gas budget and includes them automatically.

### Issuing across multiple epochs

If shares were not issued immediately when approving (for example, because capital needed to be deployed before the price was known), multiple approved epochs can accumulate. You can issue all of them in one transaction by passing an array of prices, one per epoch in order:

```typescript
await shareClass.approveDepositsAndIssueShares([
  {
    assetId,
    issuePricePerShare: [
      Price.fromFloat(1.04), // epoch N
      Price.fromFloat(1.05), // epoch N+1
    ],
  },
]);
```

You can also combine an approval with a multi-epoch issuance in the same call, which approves the current pending epoch and then immediately issues all accumulated approved epochs.

## 5. Approve and revoke shares (redemptions)

Redemption requests follow the same pattern. Approving allows the balance sheet to start returning assets; revoking burns the shares at the given price.

```typescript
await shareClass.approveRedeemsAndRevokeShares([
  {
    assetId,
    approveShareAmount: Balance.fromFloat(50_000, 18), // approve 50,000 shares for redemption
    revokePricePerShare: Price.fromFloat(1.05),         // price at which shares are converted to assets
  },
]);
```

* `approveShareAmount`: the total share amount to approve for the current epoch. Omit to skip approval and only revoke for a previously approved epoch.
* `revokePricePerShare`: the price applied when burning shares and returning assets. Omit to approve without revoking yet.

The SDK auto-includes `notifyRedeem` calls for investors within the gas budget.

### Revoking across multiple epochs

Similarly, multiple approved redemption epochs can be revoked in one transaction by passing an array of prices:

```typescript
await shareClass.approveRedeemsAndRevokeShares([
  {
    assetId,
    revokePricePerShare: [
      Price.fromFloat(1.04), // epoch N
      Price.fromFloat(1.05), // epoch N+1
    ],
  },
]);
```

## Processing multiple assets

Both methods accept an array, so you can process several assets in one transaction:

```typescript
await shareClass.approveDepositsAndIssueShares([
  {
    assetId: usdcAssetId,
    approveAssetAmount: Balance.fromFloat(100_000, 6),
    issuePricePerShare: Price.fromFloat(1.05),
  },
  {
    assetId: usdtAssetId,
    approveAssetAmount: Balance.fromFloat(50_000, 6),
    issuePricePerShare: Price.fromFloat(1.05),
  },
]);
```

Each asset is processed independently with its own epoch tracking.
