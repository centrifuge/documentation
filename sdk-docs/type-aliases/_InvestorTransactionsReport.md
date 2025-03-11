
## Type: InvestorTransactionsReport

> **InvestorTransactionsReport**: `object`

Defined in: [src/types/reports.ts:139](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/types/reports.ts#L139)

### Type declaration

#### account

> **account**: `string`

#### chainId

> **chainId**: `number` \| `"centrifuge"`

#### currencyAmount

> **currencyAmount**: [`Currency`](#class-currency)

#### epoch

> **epoch**: `string`

#### price

> **price**: [`Price`](#class-price)

#### timestamp

> **timestamp**: `string`

#### trancheTokenAmount

> **trancheTokenAmount**: [`Currency`](#class-currency)

#### trancheTokenId

> **trancheTokenId**: `string`

#### transactionHash

> **transactionHash**: `string`

#### transactionType

> **transactionType**: `SubqueryInvestorTransactionType`

#### type

> **type**: `"investorTransactions"`
