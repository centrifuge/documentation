
## Class: Centrifuge

Defined in: [src/Centrifuge.ts:72](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Centrifuge.ts#L72)

### Constructors

#### new Centrifuge()

> **new Centrifuge**(`config`): [`Centrifuge`](#class-centrifuge)

Defined in: [src/Centrifuge.ts:97](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Centrifuge.ts#L97)

##### Parameters

###### config

`Partial`\<[`Config`](#type-config)\> = `{}`

##### Returns

[`Centrifuge`](#class-centrifuge)

### Accessors

#### chains

##### Get Signature

> **get** **chains**(): `number`[]

Defined in: [src/Centrifuge.ts:82](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Centrifuge.ts#L82)

###### Returns

`number`[]

***

#### config

##### Get Signature

> **get** **config**(): `DerivedConfig`

Defined in: [src/Centrifuge.ts:74](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Centrifuge.ts#L74)

###### Returns

`DerivedConfig`

***

#### signer

##### Get Signature

> **get** **signer**(): `null` \| [`Signer`](#type-signer)

Defined in: [src/Centrifuge.ts:93](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Centrifuge.ts#L93)

###### Returns

`null` \| [`Signer`](#type-signer)

### Methods

#### account()

> **account**(`address`, `chainId`?): [`Query`](#type-query)\<`Account`\>

Defined in: [src/Centrifuge.ts:123](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Centrifuge.ts#L123)

##### Parameters

###### address

`string`

###### chainId?

`number`

##### Returns

[`Query`](#type-query)\<`Account`\>

***

#### balance()

> **balance**(`currency`, `owner`, `chainId`?): [`Query`](#type-query)\<[`Currency`](#class-currency)\>

Defined in: [src/Centrifuge.ts:168](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Centrifuge.ts#L168)

Get the balance of an ERC20 token for a given owner.

##### Parameters

###### currency

`string`

The token address

###### owner

`string`

The owner address

###### chainId?

`number`

The chain ID

##### Returns

[`Query`](#type-query)\<[`Currency`](#class-currency)\>

***

#### currency()

> **currency**(`address`, `chainId`?): [`Query`](#type-query)\<[`CurrencyMetadata`](#type-currencymetadata)\>

Defined in: [src/Centrifuge.ts:132](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Centrifuge.ts#L132)

Get the metadata for an ERC20 token

##### Parameters

###### address

`string`

The token address

###### chainId?

`number`

The chain ID

##### Returns

[`Query`](#type-query)\<[`CurrencyMetadata`](#type-currencymetadata)\>

***

#### getChainConfig()

> **getChainConfig**(`chainId`?): `Chain`

Defined in: [src/Centrifuge.ts:85](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Centrifuge.ts#L85)

##### Parameters

###### chainId?

`number`

##### Returns

`Chain`

***

#### getClient()

> **getClient**(`chainId`?): `undefined` \| \{\}

Defined in: [src/Centrifuge.ts:79](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Centrifuge.ts#L79)

##### Parameters

###### chainId?

`number`

##### Returns

`undefined` \| \{\}

***

#### pool()

> **pool**(`id`, `metadataHash`?): [`Query`](#type-query)\<[`Pool`](#class-pool)\>

Defined in: [src/Centrifuge.ts:119](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Centrifuge.ts#L119)

##### Parameters

###### id

`string` | `number`

###### metadataHash?

`string`

##### Returns

[`Query`](#type-query)\<[`Pool`](#class-pool)\>

***

#### setSigner()

> **setSigner**(`signer`): `void`

Defined in: [src/Centrifuge.ts:90](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Centrifuge.ts#L90)

##### Parameters

###### signer

`null` | [`Signer`](#type-signer)

##### Returns

`void`
