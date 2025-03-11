
## Class: Currency

Defined in: [src/utils/BigInt.ts:130](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L130)

### Extends

- `DecimalWrapper`

### Constructors

#### new Currency()

> **new Currency**(`value`, `decimals`): [`Currency`](#class-currency)

Defined in: [src/utils/BigInt.ts:29](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L29)

##### Parameters

###### value

`bigint` | `Numeric`

###### decimals

`number` = `27`

##### Returns

[`Currency`](#class-currency)

##### Inherited from

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

#### ZERO

> `static` **ZERO**: [`Currency`](#class-currency)

Defined in: [src/utils/BigInt.ts:135](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L135)

### Methods

#### add()

> **add**(`value`): [`Currency`](#class-currency)

Defined in: [src/utils/BigInt.ts:137](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L137)

##### Parameters

###### value

`bigint` | [`Currency`](#class-currency)

##### Returns

[`Currency`](#class-currency)

***

#### div()

> **div**(`value`): [`Currency`](#class-currency)

Defined in: [src/utils/BigInt.ts:149](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L149)

##### Parameters

###### value

`bigint` | [`Currency`](#class-currency) | `Decimal`

##### Returns

[`Currency`](#class-currency)

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

> **mul**(`value`): [`Currency`](#class-currency)

Defined in: [src/utils/BigInt.ts:145](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L145)

##### Parameters

###### value

`bigint` | [`Currency`](#class-currency) | [`Price`](#class-price) | `Decimal`

##### Returns

[`Currency`](#class-currency)

***

#### sub()

> **sub**(`value`): [`Currency`](#class-currency)

Defined in: [src/utils/BigInt.ts:141](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L141)

##### Parameters

###### value

`bigint` | [`Currency`](#class-currency)

##### Returns

[`Currency`](#class-currency)

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

> `static` **fromFloat**(`num`, `decimals`): [`Currency`](#class-currency)

Defined in: [src/utils/BigInt.ts:131](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L131)

##### Parameters

###### num

`Numeric`

###### decimals

`number`

##### Returns

[`Currency`](#class-currency)
