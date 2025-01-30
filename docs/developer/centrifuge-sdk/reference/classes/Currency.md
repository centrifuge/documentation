[**@centrifuge/sdk**](../README.md)

***

[@centrifuge/sdk](../README.md) / Currency

# Class: Currency

Defined in: [src/utils/BigInt.ts:124](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L124)

## Extends

- `DecimalWrapper`

## Constructors

### new Currency()

> **new Currency**(`value`, `decimals`): [`Currency`](Currency.md)

Defined in: [src/utils/BigInt.ts:29](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L29)

#### Parameters

##### value

`bigint` | `Numeric`

##### decimals

`number` = `27`

#### Returns

[`Currency`](Currency.md)

#### Inherited from

`DecimalWrapper.constructor`

## Properties

### decimals

> `readonly` **decimals**: `number` = `27`

Defined in: [src/utils/BigInt.ts:27](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L27)

#### Inherited from

`DecimalWrapper.decimals`

***

### value

> `protected` **value**: `bigint`

Defined in: [src/utils/BigInt.ts:3](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L3)

#### Inherited from

`DecimalWrapper.value`

***

### ZERO

> `static` **ZERO**: [`Currency`](Currency.md)

Defined in: [src/utils/BigInt.ts:129](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L129)

## Methods

### add()

> **add**(`value`): [`Currency`](Currency.md)

Defined in: [src/utils/BigInt.ts:131](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L131)

#### Parameters

##### value

`bigint` | [`Currency`](Currency.md)

#### Returns

[`Currency`](Currency.md)

***

### div()

> **div**(`value`): [`Currency`](Currency.md)

Defined in: [src/utils/BigInt.ts:143](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L143)

#### Parameters

##### value

`bigint` | [`Currency`](Currency.md)

#### Returns

[`Currency`](Currency.md)

***

### eq()

> **eq**\<`T`\>(`value`): `boolean`

Defined in: [src/utils/BigInt.ts:115](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L115)

#### Type Parameters

• **T**

#### Parameters

##### value

`bigint` | `T` *extends* `BigIntWrapper` ? `T`\<`T`\> : `never`

#### Returns

`boolean`

#### Inherited from

`DecimalWrapper.eq`

***

### gt()

> **gt**\<`T`\>(`value`): `boolean`

Defined in: [src/utils/BigInt.ts:105](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L105)

#### Type Parameters

• **T**

#### Parameters

##### value

`bigint` | `T` *extends* `BigIntWrapper` ? `T`\<`T`\> : `never`

#### Returns

`boolean`

#### Inherited from

`DecimalWrapper.gt`

***

### gte()

> **gte**\<`T`\>(`value`): `boolean`

Defined in: [src/utils/BigInt.ts:110](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L110)

#### Type Parameters

• **T**

#### Parameters

##### value

`bigint` | `T` *extends* `BigIntWrapper` ? `T`\<`T`\> : `never`

#### Returns

`boolean`

#### Inherited from

`DecimalWrapper.gte`

***

### isZero()

> **isZero**(): `boolean`

Defined in: [src/utils/BigInt.ts:119](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L119)

#### Returns

`boolean`

#### Inherited from

`DecimalWrapper.isZero`

***

### lt()

> **lt**\<`T`\>(`value`): `boolean`

Defined in: [src/utils/BigInt.ts:95](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L95)

#### Type Parameters

• **T**

#### Parameters

##### value

`bigint` | `T` *extends* `BigIntWrapper` ? `T`\<`T`\> : `never`

#### Returns

`boolean`

#### Inherited from

`DecimalWrapper.lt`

***

### lte()

> **lte**\<`T`\>(`value`): `boolean`

Defined in: [src/utils/BigInt.ts:100](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L100)

#### Type Parameters

• **T**

#### Parameters

##### value

`bigint` | `T` *extends* `BigIntWrapper` ? `T`\<`T`\> : `never`

#### Returns

`boolean`

#### Inherited from

`DecimalWrapper.lte`

***

### mul()

> **mul**(`value`): [`Currency`](Currency.md)

Defined in: [src/utils/BigInt.ts:139](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L139)

#### Parameters

##### value

`bigint` | [`Currency`](Currency.md) | [`Price`](Price.md)

#### Returns

[`Currency`](Currency.md)

***

### sub()

> **sub**(`value`): [`Currency`](Currency.md)

Defined in: [src/utils/BigInt.ts:135](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L135)

#### Parameters

##### value

`bigint` | [`Currency`](Currency.md)

#### Returns

[`Currency`](Currency.md)

***

### toBigInt()

> **toBigInt**(): `bigint`

Defined in: [src/utils/BigInt.ts:21](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L21)

#### Returns

`bigint`

#### Inherited from

`DecimalWrapper.toBigInt`

***

### toDecimal()

> **toDecimal**(): `Decimal`

Defined in: [src/utils/BigInt.ts:43](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L43)

#### Returns

`Decimal`

#### Inherited from

`DecimalWrapper.toDecimal`

***

### toFloat()

> **toFloat**(): `number`

Defined in: [src/utils/BigInt.ts:47](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L47)

#### Returns

`number`

#### Inherited from

`DecimalWrapper.toFloat`

***

### toString()

> **toString**(): `string`

Defined in: [src/utils/BigInt.ts:17](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L17)

#### Returns

`string`

#### Inherited from

`DecimalWrapper.toString`

***

### fromFloat()

> `static` **fromFloat**(`num`, `decimals`): [`Currency`](Currency.md)

Defined in: [src/utils/BigInt.ts:125](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L125)

#### Parameters

##### num

`Numeric`

##### decimals

`number`

#### Returns

[`Currency`](Currency.md)
