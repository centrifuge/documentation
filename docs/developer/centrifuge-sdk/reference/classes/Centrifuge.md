# Class: Centrifuge

Defined in: [src/Centrifuge.ts:72](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Centrifuge.ts#L72)

## Constructors

### new Centrifuge()

> **new Centrifuge**(`config`): [`Centrifuge`](Centrifuge.md)

Defined in: [src/Centrifuge.ts:97](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Centrifuge.ts#L97)

#### Parameters

##### config

`Partial`\<[`Config`](../type-aliases/Config.md)\> = `{}`

#### Returns

[`Centrifuge`](Centrifuge.md)

## Accessors

### chains

#### Get Signature

> **get** **chains**(): `number`[]

Defined in: [src/Centrifuge.ts:82](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Centrifuge.ts#L82)

##### Returns

`number`[]

---

### config

#### Get Signature

> **get** **config**(): `DerivedConfig`

Defined in: [src/Centrifuge.ts:74](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Centrifuge.ts#L74)

##### Returns

`DerivedConfig`

---

### signer

#### Get Signature

> **get** **signer**(): `null` \| [`Signer`](../type-aliases/Signer.md)

Defined in: [src/Centrifuge.ts:93](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Centrifuge.ts#L93)

##### Returns

`null` \| [`Signer`](../type-aliases/Signer.md)

## Methods

### account()

> **account**(`address`, `chainId`?): [`Query`](../type-aliases/Query.md)\<`Account`\>

Defined in: [src/Centrifuge.ts:123](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Centrifuge.ts#L123)

#### Parameters

##### address

`string`

##### chainId?

`number`

#### Returns

[`Query`](../type-aliases/Query.md)\<`Account`\>

---

### balance()

> **balance**(`currency`, `owner`, `chainId`?): [`Query`](../type-aliases/Query.md)\<[`Currency`](Currency.md)\>

Defined in: [src/Centrifuge.ts:168](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Centrifuge.ts#L168)

Get the balance of an ERC20 token for a given owner.

#### Parameters

##### currency

`string`

The token address

##### owner

`string`

The owner address

##### chainId?

`number`

The chain ID

#### Returns

[`Query`](../type-aliases/Query.md)\<[`Currency`](Currency.md)\>

---

### currency()

> **currency**(`address`, `chainId`?): [`Query`](../type-aliases/Query.md)\<[`CurrencyMetadata`](../type-aliases/CurrencyMetadata.md)\>

Defined in: [src/Centrifuge.ts:132](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Centrifuge.ts#L132)

Get the metadata for an ERC20 token

#### Parameters

##### address

`string`

The token address

##### chainId?

`number`

The chain ID

#### Returns

[`Query`](../type-aliases/Query.md)\<[`CurrencyMetadata`](../type-aliases/CurrencyMetadata.md)\>

---

### getChainConfig()

> **getChainConfig**(`chainId`?): `Chain`

Defined in: [src/Centrifuge.ts:85](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Centrifuge.ts#L85)

#### Parameters

##### chainId?

`number`

#### Returns

`Chain`

---

### getClient()

> **getClient**(`chainId`?): `undefined` \| \{\}

Defined in: [src/Centrifuge.ts:79](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Centrifuge.ts#L79)

#### Parameters

##### chainId?

`number`

#### Returns

`undefined` \| \{\}

---

### pool()

> **pool**(`id`, `metadataHash`?): [`Query`](../type-aliases/Query.md)\<[`Pool`](Pool.md)\>

Defined in: [src/Centrifuge.ts:119](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Centrifuge.ts#L119)

#### Parameters

##### id

`string` | `number`

##### metadataHash?

`string`

#### Returns

[`Query`](../type-aliases/Query.md)\<[`Pool`](Pool.md)\>

---

### setSigner()

> **setSigner**(`signer`): `void`

Defined in: [src/Centrifuge.ts:90](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Centrifuge.ts#L90)

#### Parameters

##### signer

`null` | [`Signer`](../type-aliases/Signer.md)

#### Returns

`void`
