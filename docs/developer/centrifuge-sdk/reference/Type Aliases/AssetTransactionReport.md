# Type Alias: AssetTransactionReport

> **AssetTransactionReport**: `object`

Defined in: [src/types/reports.ts:169](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/types/reports.ts#L169)

## Type declaration

### amount

> **amount**: [`Currency`](../classes/Currency.md)

### assetId

> **assetId**: `string`

### epoch

> **epoch**: `string`

### fromAsset?

> `optional` **fromAsset**: `object`

#### fromAsset.id

> **id**: `string`

#### fromAsset.name

> **name**: `string`

### timestamp

> **timestamp**: `string`

### toAsset?

> `optional` **toAsset**: `object`

#### toAsset.id

> **id**: `string`

#### toAsset.name

> **name**: `string`

### transactionHash

> **transactionHash**: `string`

### transactionType

> **transactionType**: `AssetTransactionType`

### type

> **type**: `"assetTransactions"`
