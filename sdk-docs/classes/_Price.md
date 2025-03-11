
## Class: Price

Defined in: [src/utils/BigInt.ts:221](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L221)

### Extends

- `DecimalWrapper`

### Constructors

#### new Price()

> **new Price**(`value`): [`Price`](#class-price)

Defined in: [src/utils/BigInt.ts:224](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L224)

##### Parameters

###### value

`bigint` | `Numeric`

##### Returns

[`Price`](#class-price)

##### Overrides

`DecimalWrapper.constructor`

### Properties

#### decimals

> `readonly` **decimals**: `number` = `27`

Defined in: [src/utils/BigInt.ts:27](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L27)

##### Inherited from

`DecimalWrapper.decimals`

***

#### value

> `protected` **value**: `bigint`

Defined in: [src/utils/BigInt.ts:3](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L3)

##### Inherited from

`DecimalWrapper.value`

***

#### decimals

> `static` **decimals**: `number` = `18`

Defined in: [src/utils/BigInt.ts:222](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L222)

### Methods

#### add()

> **add**(`value`): [`Price`](#class-price)

Defined in: [src/utils/BigInt.ts:232](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L232)

##### Parameters

###### value

`bigint` | [`Price`](#class-price)

##### Returns

[`Price`](#class-price)

***

#### div()

> **div**(`value`): [`Price`](#class-price)

Defined in: [src/utils/BigInt.ts:244](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L244)

##### Parameters

###### value

`bigint` | [`Price`](#class-price)

##### Returns

[`Price`](#class-price)

***

#### eq()

> **eq**\<`T`\>(`value`): `boolean`

Defined in: [src/utils/BigInt.ts:121](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L121)

##### Type Parameters

• **T**

##### Parameters

###### value

`bigint` | `T` *extends* `BigIntWrapper` ? `T`\<`T`\> : `never`

##### Returns

`boolean`

##### Inherited from

`DecimalWrapper.eq`

***

#### gt()

> **gt**\<`T`\>(`value`): `boolean`

Defined in: [src/utils/BigInt.ts:111](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L111)

##### Type Parameters

• **T**

##### Parameters

###### value

`bigint` | `T` *extends* `BigIntWrapper` ? `T`\<`T`\> : `never`

##### Returns

`boolean`

##### Inherited from

`DecimalWrapper.gt`

***

#### gte()

> **gte**\<`T`\>(`value`): `boolean`

Defined in: [src/utils/BigInt.ts:116](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L116)

##### Type Parameters

• **T**

##### Parameters

###### value

`bigint` | `T` *extends* `BigIntWrapper` ? `T`\<`T`\> : `never`

##### Returns

`boolean`

##### Inherited from

`DecimalWrapper.gte`

***

#### isZero()

> **isZero**(): `boolean`

Defined in: [src/utils/BigInt.ts:125](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L125)

##### Returns

`boolean`

##### Inherited from

`DecimalWrapper.isZero`

***

#### lt()

> **lt**\<`T`\>(`value`): `boolean`

Defined in: [src/utils/BigInt.ts:101](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L101)

##### Type Parameters

• **T**

##### Parameters

###### value

`bigint` | `T` *extends* `BigIntWrapper` ? `T`\<`T`\> : `never`

##### Returns

`boolean`

##### Inherited from

`DecimalWrapper.lt`

***

#### lte()

> **lte**\<`T`\>(`value`): `boolean`

Defined in: [src/utils/BigInt.ts:106](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L106)

##### Type Parameters

• **T**

##### Parameters

###### value

`bigint` | `T` *extends* `BigIntWrapper` ? `T`\<`T`\> : `never`

##### Returns

`boolean`

##### Inherited from

`DecimalWrapper.lte`

***

#### mul()

> **mul**(`value`): [`Price`](#class-price)

Defined in: [src/utils/BigInt.ts:240](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L240)

##### Parameters

###### value

`bigint` | [`Price`](#class-price) | `Decimal`

##### Returns

[`Price`](#class-price)

***

#### sub()

> **sub**(`value`): [`Price`](#class-price)

Defined in: [src/utils/BigInt.ts:236](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L236)

##### Parameters

###### value

`bigint` | [`Price`](#class-price)

##### Returns

[`Price`](#class-price)

***

#### toBigInt()

> **toBigInt**(): `bigint`

Defined in: [src/utils/BigInt.ts:21](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L21)

##### Returns

`bigint`

##### Inherited from

`DecimalWrapper.toBigInt`

***

#### toDecimal()

> **toDecimal**(): `Decimal`

Defined in: [src/utils/BigInt.ts:43](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L43)

##### Returns

`Decimal`

##### Inherited from

`DecimalWrapper.toDecimal`

***

#### toFloat()

> **toFloat**(): `number`

Defined in: [src/utils/BigInt.ts:47](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L47)

##### Returns

`number`

##### Inherited from

`DecimalWrapper.toFloat`

***

#### toString()

> **toString**(): `string`

Defined in: [src/utils/BigInt.ts:17](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L17)

##### Returns

`string`

##### Inherited from

`DecimalWrapper.toString`

***

#### fromFloat()

> `static` **fromFloat**(`number`): [`Price`](#class-price)

Defined in: [src/utils/BigInt.ts:228](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L228)

##### Parameters

###### number

`Numeric`

##### Returns

[`Price`](#class-price)
