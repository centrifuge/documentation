# Class: Pool

Defined in: [src/Pool.ts:8](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Pool.ts#L8)

## Extends

- `Entity`

## Properties

### id

> **id**: `string`

Defined in: [src/Pool.ts:12](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Pool.ts#L12)

---

### metadataHash?

> `optional` **metadataHash**: `string`

Defined in: [src/Pool.ts:13](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Pool.ts#L13)

## Accessors

### reports

#### Get Signature

> **get** **reports**(): [`Reports`](Reports.md)

Defined in: [src/Pool.ts:18](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Pool.ts#L18)

##### Returns

[`Reports`](Reports.md)

## Methods

### activeNetworks()

> **activeNetworks**(): [`Query`](../type-aliases/Query.md)\<[`PoolNetwork`](PoolNetwork.md)[]\>

Defined in: [src/Pool.ts:79](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Pool.ts#L79)

Get the networks where a pool is active. It doesn't mean that any vaults are deployed there necessarily.

#### Returns

[`Query`](../type-aliases/Query.md)\<[`PoolNetwork`](PoolNetwork.md)[]\>

---

### metadata()

> **metadata**(): [`Query`](../type-aliases/Query.md)\<`PoolMetadata`\> \| [`Query`](../type-aliases/Query.md)\<`null`\>

Defined in: [src/Pool.ts:22](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Pool.ts#L22)

#### Returns

[`Query`](../type-aliases/Query.md)\<`PoolMetadata`\> \| [`Query`](../type-aliases/Query.md)\<`null`\>

---

### network()

> **network**(`chainId`): [`Query`](../type-aliases/Query.md)\<[`PoolNetwork`](PoolNetwork.md)\>

Defined in: [src/Pool.ts:64](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Pool.ts#L64)

Get a specific network where a pool can potentially be deployed.

#### Parameters

##### chainId

`number`

#### Returns

[`Query`](../type-aliases/Query.md)\<[`PoolNetwork`](PoolNetwork.md)\>

---

### networks()

> **networks**(): [`Query`](../type-aliases/Query.md)\<[`PoolNetwork`](PoolNetwork.md)[]\>

Defined in: [src/Pool.ts:51](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Pool.ts#L51)

Get all networks where a pool can potentially be deployed.

#### Returns

[`Query`](../type-aliases/Query.md)\<[`PoolNetwork`](PoolNetwork.md)[]\>

---

### trancheIds()

> **trancheIds**(): [`Query`](../type-aliases/Query.md)\<`string`[]\>

Defined in: [src/Pool.ts:28](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Pool.ts#L28)

#### Returns

[`Query`](../type-aliases/Query.md)\<`string`[]\>

---

### vault()

> **vault**(`chainId`, `trancheId`, `asset`): [`Query`](../type-aliases/Query.md)\<[`Vault`](Vault.md)\>

Defined in: [src/Pool.ts:100](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Pool.ts#L100)

#### Parameters

##### chainId

`number`

##### trancheId

`string`

##### asset

`string`

#### Returns

[`Query`](../type-aliases/Query.md)\<[`Vault`](Vault.md)\>
