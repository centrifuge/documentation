
## Centrifuge SDK [![Codecov](https://codecov.io/gh/centrifuge/sdk/graph/badge.svg?token=Q2yU8QfefP)](https://codecov.io/gh/centrifuge/sdk) [![Build CI status](https://github.com/centrifuge/sdk/actions/workflows/build-test-report.yml/badge.svg)](https://github.com/centrifuge/sdk/actions/workflows/build-test-report.yml) [![Latest Release](https://img.shields.io/github/v/release/centrifuge/sdk?sort=semver)](https://github.com/centrifuge/sdk/releases/latest)

The Centrifuge SDK is a JavaScript client for interacting with the [Centrifuge](https://centrifuge.io) ecosystem. It provides a comprehensive, fully typed library to integrate investments and redemptions, generate financial reports, manage pools, and much more.

### Installation

Centrifuge SDK uses [Viem](https://viem.sh/) under the hood. It's necessary to install it alongside the SDK.

```bash
npm install --save @centrifuge/sdk viem
## or
yarn install @centrifuge/sdk viem
```

### Init and config

Create an instance and pass optional configuration

```js
import Centrifuge from '@centrifuge/sdk'

const centrifuge = new Centrifuge()
```

The following config options can be passed on initialization of the SDK:

- `environment: 'mainnet' | 'demo' | 'dev'`
  - Optional
  - Default value: `mainnet`
- `rpcUrls: Record<number, string>`
  - Optional
  - A object mapping chain ids to RPC URLs

### Queries

Queries return Promise-like [Observables](https://rxjs.dev/guide/observable). They can be either awaited to get a single value, or subscribed to to get fresh data whenever on-chain data changes.

```js
try {
  const pool = await centrifuge.pools()
} catch (error) {
  console.error(error)
}
```

```js
const subscription = centrifuge.pools().subscribe(
  (pool) => console.log(pool),
  (error) => console.error(error)
)
subscription.unsubscribe()
```

The returned results are either immutable values, or entities that can be further queried.

### Transactions

To perform transactions, you need to set a signer on the `centrifuge` instance.

```js
centrifuge.setSigner(signer)
```

`signer` can be a [EIP1193](https://eips.ethereum.org/EIPS/eip-1193)-compatible provider or a Viem [LocalAccount](https://viem.sh/docs/accounts/local).

With this you can call transaction methods. Similar to queries they can be awaited to get their final result, or subscribed to get get status updates.

```js
const pool = await centrifuge.pool('1')
try {
  const status = await pool.closeEpoch()
  console.log(status)
} catch (error) {
  console.error(error)
}
```

```js
const pool = await centrifuge.pool('1')
const subscription = pool.closeEpoch().subscribe(
  (status) => console.log(pool),
  (error) => console.error(error),
  () => console.log('complete')
)
```

### Investments

Investments for a pool are done via [ERC-7540 Tokenized Vaults](https://eips.ethereum.org/EIPS/eip-7540). Vaults can be deployed for a tranche on any supported network, for any supported currency

Retrieve a vault by querying it from the pool:

```js
const pool = await centrifuge.pool('1')
const vault = await pool.vault(1, '0xabc...', '0xdef...') // Chain ID, tranche ID, investment currency address
```

Query the state of an investment on the vault for an investor:

```js
const investment = await vault.investment('0x123...')
// Will return an object containing:
// isAllowedToInvest - Whether an investor is allowed to invest in the tranche
// investmentCurrency - The ERC20 token that is used to invest in the vault
// investmentCurrencyBalance - The balance of the investor of the investment currency
// investmentCurrencyAllowance - The allowance of the vault
// shareCurrency - The ERC20 token that is issued to investors to account for their share in the tranche
// shareBalance - The number of shares the investor has in the tranche
// claimableInvestShares - The number of shares an investor can claim after their invest order has been processed (partially or not)
// claimableInvestCurrencyEquivalent - The equivalent value of the claimable shares denominated in the invest currency
// claimableRedeemCurrency - The amout of money an investor can claim after their redeem order has been processed (partially or not)
// claimableRedeemSharesEquivalent - The amount of shares that have been redeemed for which the investor can claim money
// pendingInvestCurrency - The amount of money that the investor wants to invest in the tranche that has not been processed yet
// pendingRedeemShares - The amount of shares that the investor wants to redeem from the tranche that has not been processed yet
// claimableCancelInvestCurrency - The amount of money an investor can claim after an invest order cancellation has been processed
// claimableCancelRedeemShares - The amount of shares an investor can claim after a redeem order cancellation has been processed
// hasPendingCancelInvestRequest - Whether the investor has an invest order that is in the process of being cancelled
// hasPendingCancelRedeemRequest - Whether the investor has a redeem order that is in the process of being cancelled
```

Invest in a vault:

```js
const result = await vault.increaseInvestOrder(1000)
console.log(result.hash)
```

Once an order has been processed, `claimableInvestShares` will positive and shares can be claimed with:

```js
const result = await vault.claim()
```

### Reports

Reports are generated from data from the Centrifuge API and are combined with pool metadata to provide a comprehensive view of the pool's financials.

Available reports are:

- `balanceSheet`
- `profitAndLoss`
- `cashflow`

```ts
const pool = await centrifuge.pool('<pool-id>')
const balanceSheetReport = await pool.reports.balanceSheet()
```

#### Report Filtering

Reports can be filtered using the `ReportFilter` type.

```ts
type GroupBy = 'day' | 'month' | 'quarter' | 'year'

const balanceSheetReport = await pool.reports.balanceSheet({
  from: '2024-01-01',
  to: '2024-01-31',
  groupBy: 'month',
})
```

### Developer Docs

#### Dev server

```bash
yarn dev
```

#### Build

```bash
yarn build
```

#### Test

```bash
yarn test
yarn test:single <path-to-file>
yarn test:simple:single <path-to-file> ## without setup file, faster and without tenderly setup
```

### User Docs

User docs are written and maintained in the [sdk-docs](https://github.com/centrifuge/sdk-docs) repository. On push to the `main` branch, a GitHub Action will run and update the docs with the auto-generated docs from this repository using ([typedoc](https://typedoc.org/)).

#### PR Naming Convention

PR naming should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

#### Semantic Versioning

PRs should be marked with the appropriate type: `major`, `minor`, `patch`, `no-release`.
