
## Type: AssetTransactionReport

> **AssetTransactionReport**: `object`

Defined in: [src/types/reports.ts:169](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/types/reports.ts#L169)

### Type declaration

#### amount

> **amount**: [`Currency`](#class-currency)

#### assetId

> **assetId**: `string`

#### epoch

> **epoch**: `string`

#### fromAsset?

> `optional` **fromAsset**: `object`

##### fromAsset.id

> **id**: `string`

##### fromAsset.name

> **name**: `string`

#### interestAmount

> **interestAmount**: [`Currency`](#class-currency) \| `null`

#### name

> **name**: `string`

#### principalAmount

> **principalAmount**: [`Currency`](#class-currency) \| `null`

#### timestamp

> **timestamp**: `string`

#### toAsset?

> `optional` **toAsset**: `object`

##### toAsset.id

> **id**: `string`

##### toAsset.name

> **name**: `string`

#### transactionHash

> **transactionHash**: `string`

#### transactionType

> **transactionType**: `AssetTransactionType`

#### type

> **type**: `"assetTransactions"`
