# Class: PoolNetwork

Defined in: [src/PoolNetwork.ts:16](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/PoolNetwork.ts#L16)

Query and interact with a pool on a specific network.

## Extends

- `Entity`

## Properties

### chainId

> **chainId**: `number`

Defined in: [src/PoolNetwork.ts:21](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/PoolNetwork.ts#L21)

---

### pool

> **pool**: [`Pool`](Pool.md)

Defined in: [src/PoolNetwork.ts:20](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/PoolNetwork.ts#L20)

## Methods

### canTrancheBeDeployed()

> **canTrancheBeDeployed**(`trancheId`): [`Query`](../type-aliases/Query.md)\<`boolean`\>

Defined in: [src/PoolNetwork.ts:269](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/PoolNetwork.ts#L269)

Get whether a pool is active and the tranche token can be deployed.

#### Parameters

##### trancheId

`string`

The tranche ID

#### Returns

[`Query`](../type-aliases/Query.md)\<`boolean`\>

---

### deployTranche()

> **deployTranche**(`trancheId`): [`Transaction`](../type-aliases/Transaction.md)

Defined in: [src/PoolNetwork.ts:306](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/PoolNetwork.ts#L306)

Deploy a tranche token for the pool.

#### Parameters

##### trancheId

`string`

The tranche ID

#### Returns

[`Transaction`](../type-aliases/Transaction.md)

---

### deployVault()

> **deployVault**(`trancheId`, `currencyAddress`): [`Transaction`](../type-aliases/Transaction.md)

Defined in: [src/PoolNetwork.ts:330](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/PoolNetwork.ts#L330)

Deploy a vault for a specific tranche x currency combination.

#### Parameters

##### trancheId

`string`

The tranche ID

##### currencyAddress

`string`

The investment currency address

#### Returns

[`Transaction`](../type-aliases/Transaction.md)

---

### isActive()

> **isActive**(): [`Query`](../type-aliases/Query.md)\<`boolean`\>

Defined in: [src/PoolNetwork.ts:232](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/PoolNetwork.ts#L232)

Get whether the pool is active on this network. It's a prerequisite for deploying vaults,
and doesn't indicate whether any vaults have been deployed.

#### Returns

[`Query`](../type-aliases/Query.md)\<`boolean`\>

---

### shareCurrency()

> **shareCurrency**(`trancheId`): [`Query`](../type-aliases/Query.md)\<[`CurrencyMetadata`](../type-aliases/CurrencyMetadata.md)\>

Defined in: [src/PoolNetwork.ts:143](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/PoolNetwork.ts#L143)

Get the details of the share token.

#### Parameters

##### trancheId

`string`

The tranche ID

#### Returns

[`Query`](../type-aliases/Query.md)\<[`CurrencyMetadata`](../type-aliases/CurrencyMetadata.md)\>

---

### vault()

> **vault**(`trancheId`, `asset`): [`Query`](../type-aliases/Query.md)\<[`Vault`](Vault.md)\>

Defined in: [src/PoolNetwork.ts:215](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/PoolNetwork.ts#L215)

Get a specific Vault for a given tranche and investment currency.

#### Parameters

##### trancheId

`string`

The tranche ID

##### asset

`string`

The investment currency address

#### Returns

[`Query`](../type-aliases/Query.md)\<[`Vault`](Vault.md)\>

---

### vaults()

> **vaults**(`trancheId`): [`Query`](../type-aliases/Query.md)\<[`Vault`](Vault.md)[]\>

Defined in: [src/PoolNetwork.ts:154](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/PoolNetwork.ts#L154)

Get the deployed Vaults for a given tranche. There may exist one Vault for each allowed investment currency.
Vaults are used to submit/claim investments and redemptions.

#### Parameters

##### trancheId

`string`

The tranche ID

#### Returns

[`Query`](../type-aliases/Query.md)\<[`Vault`](Vault.md)[]\>

---

### vaultsByTranche()

> **vaultsByTranche**(): [`Query`](../type-aliases/Query.md)\<`Record`\<`string`, [`Vault`](Vault.md)\>\>

Defined in: [src/PoolNetwork.ts:198](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/PoolNetwork.ts#L198)

Get all Vaults for all tranches in the pool.

#### Returns

[`Query`](../type-aliases/Query.md)\<`Record`\<`string`, [`Vault`](Vault.md)\>\>

An object of tranche ID to Vault.
