
## Class: PoolNetwork

Defined in: [src/PoolNetwork.ts:16](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/PoolNetwork.ts#L16)

Query and interact with a pool on a specific network.

### Extends

- `Entity`

### Properties

#### chainId

> **chainId**: `number`

Defined in: [src/PoolNetwork.ts:21](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/PoolNetwork.ts#L21)

***

#### pool

> **pool**: [`Pool`](#class-pool)

Defined in: [src/PoolNetwork.ts:20](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/PoolNetwork.ts#L20)

### Methods

#### canTrancheBeDeployed()

> **canTrancheBeDeployed**(`trancheId`): [`Query`](#type-query)\<`boolean`\>

Defined in: [src/PoolNetwork.ts:269](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/PoolNetwork.ts#L269)

Get whether a pool is active and the tranche token can be deployed.

##### Parameters

###### trancheId

`string`

The tranche ID

##### Returns

[`Query`](#type-query)\<`boolean`\>

***

#### deployTranche()

> **deployTranche**(`trancheId`): [`Transaction`](#type-transaction)

Defined in: [src/PoolNetwork.ts:306](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/PoolNetwork.ts#L306)

Deploy a tranche token for the pool.

##### Parameters

###### trancheId

`string`

The tranche ID

##### Returns

[`Transaction`](#type-transaction)

***

#### deployVault()

> **deployVault**(`trancheId`, `currencyAddress`): [`Transaction`](#type-transaction)

Defined in: [src/PoolNetwork.ts:330](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/PoolNetwork.ts#L330)

Deploy a vault for a specific tranche x currency combination.

##### Parameters

###### trancheId

`string`

The tranche ID

###### currencyAddress

`string`

The investment currency address

##### Returns

[`Transaction`](#type-transaction)

***

#### isActive()

> **isActive**(): [`Query`](#type-query)\<`boolean`\>

Defined in: [src/PoolNetwork.ts:232](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/PoolNetwork.ts#L232)

Get whether the pool is active on this network. It's a prerequisite for deploying vaults,
and doesn't indicate whether any vaults have been deployed.

##### Returns

[`Query`](#type-query)\<`boolean`\>

***

#### shareCurrency()

> **shareCurrency**(`trancheId`): [`Query`](#type-query)\<[`CurrencyMetadata`](#type-currencymetadata)\>

Defined in: [src/PoolNetwork.ts:143](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/PoolNetwork.ts#L143)

Get the details of the share token.

##### Parameters

###### trancheId

`string`

The tranche ID

##### Returns

[`Query`](#type-query)\<[`CurrencyMetadata`](#type-currencymetadata)\>

***

#### vault()

> **vault**(`trancheId`, `asset`): [`Query`](#type-query)\<[`Vault`](#class-vault)\>

Defined in: [src/PoolNetwork.ts:215](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/PoolNetwork.ts#L215)

Get a specific Vault for a given tranche and investment currency.

##### Parameters

###### trancheId

`string`

The tranche ID

###### asset

`string`

The investment currency address

##### Returns

[`Query`](#type-query)\<[`Vault`](#class-vault)\>

***

#### vaults()

> **vaults**(`trancheId`): [`Query`](#type-query)\<[`Vault`](#class-vault)[]\>

Defined in: [src/PoolNetwork.ts:154](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/PoolNetwork.ts#L154)

Get the deployed Vaults for a given tranche. There may exist one Vault for each allowed investment currency.
Vaults are used to submit/claim investments and redemptions.

##### Parameters

###### trancheId

`string`

The tranche ID

##### Returns

[`Query`](#type-query)\<[`Vault`](#class-vault)[]\>

***

#### vaultsByTranche()

> **vaultsByTranche**(): [`Query`](#type-query)\<`Record`\<`string`, [`Vault`](#class-vault)\>\>

Defined in: [src/PoolNetwork.ts:198](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/PoolNetwork.ts#L198)

Get all Vaults for all tranches in the pool.

##### Returns

[`Query`](#type-query)\<`Record`\<`string`, [`Vault`](#class-vault)\>\>

An object of tranche ID to Vault.
