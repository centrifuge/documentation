
## Type: InvestorListReport

> **InvestorListReport**: `object`

Defined in: [src/types/reports.ts:306](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/types/reports.ts#L306)

### Type declaration

#### accountId

> **accountId**: `string`

#### chainId

> **chainId**: `number` \| `"centrifuge"` \| `"all"`

#### evmAddress?

> `optional` **evmAddress**: `string`

#### pendingInvest

> **pendingInvest**: [`Currency`](#class-currency)

#### pendingRedeem

> **pendingRedeem**: [`Currency`](#class-currency)

#### poolPercentage

> **poolPercentage**: [`Rate`](#class-rate)

#### position

> **position**: [`Currency`](#class-currency)

#### trancheId

> **trancheId**: `string`

#### type

> **type**: `"investorList"`
