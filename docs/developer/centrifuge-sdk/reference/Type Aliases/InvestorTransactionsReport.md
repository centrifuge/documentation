# Type Alias: InvestorTransactionsReport

> **InvestorTransactionsReport**: `object`

Defined in: [src/types/reports.ts:139](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/types/reports.ts#L139)

## Type declaration

### account

> **account**: `string`

### chainId

> **chainId**: `number` \| `"centrifuge"`

### currencyAmount

> **currencyAmount**: [`Currency`](../classes/Currency.md)

### epoch

> **epoch**: `string`

### price

> **price**: [`Price`](../classes/Price.md)

### timestamp

> **timestamp**: `string`

### trancheTokenAmount

> **trancheTokenAmount**: [`Currency`](../classes/Currency.md)

### trancheTokenId

> **trancheTokenId**: `string`

### transactionHash

> **transactionHash**: `string`

### transactionType

> **transactionType**: `SubqueryInvestorTransactionType`

### type

> **type**: `"investorTransactions"`
