[**@centrifuge/sdk**](../README.md)

***

[@centrifuge/sdk](../README.md) / Rate

# Class: ~~Rate~~

Defined in: [src/utils/BigInt.ts:177](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L177)

## Deprecated

## Extends

- `DecimalWrapper`

## Constructors

### new Rate()

> **new Rate**(`value`, `decimals`): [`Rate`](Rate.md)

Defined in: [src/utils/BigInt.ts:29](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L29)

#### Parameters

##### value

`bigint` | `Numeric`

##### decimals

`number` = `27`

#### Returns

[`Rate`](Rate.md)

#### Inherited from

`DecimalWrapper.constructor`

## Properties

### ~~decimals~~

> `readonly` **decimals**: `number` = `27`

Defined in: [src/utils/BigInt.ts:27](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L27)

#### Inherited from

`DecimalWrapper.decimals`

***

### ~~value~~

> `protected` **value**: `bigint`

Defined in: [src/utils/BigInt.ts:3](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L3)

#### Inherited from

`DecimalWrapper.value`

***

### ~~decimals~~

> `static` **decimals**: `number` = `27`

Defined in: [src/utils/BigInt.ts:178](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L178)

## Methods

### ~~eq()~~

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

### ~~gt()~~

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

### ~~gte()~~

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

### ~~isZero()~~

> **isZero**(): `boolean`

Defined in: [src/utils/BigInt.ts:119](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L119)

#### Returns

`boolean`

#### Inherited from

`DecimalWrapper.isZero`

***

### ~~lt()~~

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

### ~~lte()~~

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

### ~~toApr()~~

> **toApr**(): `Decimal`

Defined in: [src/utils/BigInt.ts:202](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L202)

#### Returns

`Decimal`

***

### ~~toAprPercent()~~

> **toAprPercent**(): `Decimal`

Defined in: [src/utils/BigInt.ts:210](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L210)

#### Returns

`Decimal`

***

### ~~toBigInt()~~

> **toBigInt**(): `bigint`

Defined in: [src/utils/BigInt.ts:21](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L21)

#### Returns

`bigint`

#### Inherited from

`DecimalWrapper.toBigInt`

***

### ~~toDecimal()~~

> **toDecimal**(): `Decimal`

Defined in: [src/utils/BigInt.ts:43](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L43)

#### Returns

`Decimal`

#### Inherited from

`DecimalWrapper.toDecimal`

***

### ~~toFloat()~~

> **toFloat**(): `number`

Defined in: [src/utils/BigInt.ts:47](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L47)

#### Returns

`number`

#### Inherited from

`DecimalWrapper.toFloat`

***

### ~~toPercent()~~

> **toPercent**(): `Decimal`

Defined in: [src/utils/BigInt.ts:198](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L198)

#### Returns

`Decimal`

***

### ~~toString()~~

> **toString**(): `string`

Defined in: [src/utils/BigInt.ts:17](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L17)

#### Returns

`string`

#### Inherited from

`DecimalWrapper.toString`

***

### ~~fromApr()~~

> `static` **fromApr**(`apr`): [`Rate`](Rate.md)

Defined in: [src/utils/BigInt.ts:188](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L188)

#### Parameters

##### apr

`Numeric`

#### Returns

[`Rate`](Rate.md)

***

### ~~fromAprPercent()~~

> `static` **fromAprPercent**(`apr`): [`Rate`](Rate.md)

Defined in: [src/utils/BigInt.ts:194](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L194)

#### Parameters

##### apr

`Numeric`

#### Returns

[`Rate`](Rate.md)

***

### ~~fromFloat()~~

> `static` **fromFloat**(`number`): [`Rate`](Rate.md)

Defined in: [src/utils/BigInt.ts:180](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L180)

#### Parameters

##### number

`Numeric`

#### Returns

[`Rate`](Rate.md)

***

### ~~fromPercent()~~

> `static` **fromPercent**(`number`): [`Rate`](Rate.md)

Defined in: [src/utils/BigInt.ts:184](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/utils/BigInt.ts#L184)

#### Parameters

##### number

`Numeric`

#### Returns

[`Rate`](Rate.md)
