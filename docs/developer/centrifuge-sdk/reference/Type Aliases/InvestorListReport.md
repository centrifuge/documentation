# Type Alias: InvestorListReport

> **InvestorListReport**: `object`

Defined in: [src/types/reports.ts:301](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/types/reports.ts#L301)

## Type declaration

### accountId

> **accountId**: `string`

### chainId

> **chainId**: `number` \| `"centrifuge"` \| `"all"`

### evmAddress?

> `optional` **evmAddress**: `string`

### pendingInvest

> **pendingInvest**: [`Currency`](../classes/Currency.md)

### pendingRedeem

> **pendingRedeem**: [`Currency`](../classes/Currency.md)

### poolPercentage

> **poolPercentage**: [`Rate`](../classes/Rate.md)

### position

> **position**: [`Currency`](../classes/Currency.md)

### trancheId

> **trancheId**: `string`

### type

> **type**: `"investorList"`
