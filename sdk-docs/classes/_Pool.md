
## Class: Pool

Defined in: [src/Pool.ts:8](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Pool.ts#L8)

### Extends

- `Entity`

### Properties

#### id

> **id**: `string`

Defined in: [src/Pool.ts:12](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Pool.ts#L12)

***

#### metadataHash?

> `optional` **metadataHash**: `string`

Defined in: [src/Pool.ts:13](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Pool.ts#L13)

### Accessors

#### reports

##### Get Signature

> **get** **reports**(): [`Reports`](#class-reports)

Defined in: [src/Pool.ts:18](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Pool.ts#L18)

###### Returns

[`Reports`](#class-reports)

### Methods

#### activeNetworks()

> **activeNetworks**(): [`Query`](#type-query)\<[`PoolNetwork`](#class-poolnetwork)[]\>

Defined in: [src/Pool.ts:79](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Pool.ts#L79)

Get the networks where a pool is active. It doesn't mean that any vaults are deployed there necessarily.

##### Returns

[`Query`](#type-query)\<[`PoolNetwork`](#class-poolnetwork)[]\>

***

#### metadata()

> **metadata**(): [`Query`](#type-query)\<`PoolMetadata`\> \| [`Query`](#type-query)\<`null`\>

Defined in: [src/Pool.ts:22](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Pool.ts#L22)

##### Returns

[`Query`](#type-query)\<`PoolMetadata`\> \| [`Query`](#type-query)\<`null`\>

***

#### network()

> **network**(`chainId`): [`Query`](#type-query)\<[`PoolNetwork`](#class-poolnetwork)\>

Defined in: [src/Pool.ts:64](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Pool.ts#L64)

Get a specific network where a pool can potentially be deployed.

##### Parameters

###### chainId

`number`

##### Returns

[`Query`](#type-query)\<[`PoolNetwork`](#class-poolnetwork)\>

***

#### networks()

> **networks**(): [`Query`](#type-query)\<[`PoolNetwork`](#class-poolnetwork)[]\>

Defined in: [src/Pool.ts:51](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Pool.ts#L51)

Get all networks where a pool can potentially be deployed.

##### Returns

[`Query`](#type-query)\<[`PoolNetwork`](#class-poolnetwork)[]\>

***

#### trancheIds()

> **trancheIds**(): [`Query`](#type-query)\<`string`[]\>

Defined in: [src/Pool.ts:28](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Pool.ts#L28)

##### Returns

[`Query`](#type-query)\<`string`[]\>

***

#### vault()

> **vault**(`chainId`, `trancheId`, `asset`): [`Query`](#type-query)\<[`Vault`](#class-vault)\>

Defined in: [src/Pool.ts:100](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Pool.ts#L100)

##### Parameters

###### chainId

`number`

###### trancheId

`string`

###### asset

`string`

##### Returns

[`Query`](#type-query)\<[`Vault`](#class-vault)\>
