
## Class: ~~Perquintill~~

Defined in: [src/utils/BigInt.ts:252](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L252)

### Deprecated

### Extends

- `DecimalWrapper`

### Constructors

#### new Perquintill()

> **new Perquintill**(`value`): [`Perquintill`](#class-perquintill)

Defined in: [src/utils/BigInt.ts:255](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L255)

##### Parameters

###### value

`bigint` | `Numeric`

##### Returns

[`Perquintill`](#class-perquintill)

##### Overrides

`DecimalWrapper.constructor`

### Properties

#### ~~decimals~~

> `readonly` **decimals**: `number` = `27`

Defined in: [src/utils/BigInt.ts:27](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L27)

##### Inherited from

`DecimalWrapper.decimals`

***

#### ~~value~~

> `protected` **value**: `bigint`

Defined in: [src/utils/BigInt.ts:3](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L3)

##### Inherited from

`DecimalWrapper.value`

***

#### ~~decimals~~

> `static` **decimals**: `number` = `18`

Defined in: [src/utils/BigInt.ts:253](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L253)

### Methods

#### ~~eq()~~

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

#### ~~gt()~~

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

#### ~~gte()~~

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

#### ~~isZero()~~

> **isZero**(): `boolean`

Defined in: [src/utils/BigInt.ts:125](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L125)

##### Returns

`boolean`

##### Inherited from

`DecimalWrapper.isZero`

***

#### ~~lt()~~

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

#### ~~lte()~~

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

#### ~~toBigInt()~~

> **toBigInt**(): `bigint`

Defined in: [src/utils/BigInt.ts:21](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L21)

##### Returns

`bigint`

##### Inherited from

`DecimalWrapper.toBigInt`

***

#### ~~toDecimal()~~

> **toDecimal**(): `Decimal`

Defined in: [src/utils/BigInt.ts:43](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L43)

##### Returns

`Decimal`

##### Inherited from

`DecimalWrapper.toDecimal`

***

#### ~~toFloat()~~

> **toFloat**(): `number`

Defined in: [src/utils/BigInt.ts:47](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L47)

##### Returns

`number`

##### Inherited from

`DecimalWrapper.toFloat`

***

#### ~~toPercent()~~

> **toPercent**(): `Decimal`

Defined in: [src/utils/BigInt.ts:267](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L267)

##### Returns

`Decimal`

***

#### ~~toString()~~

> **toString**(): `string`

Defined in: [src/utils/BigInt.ts:17](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L17)

##### Returns

`string`

##### Inherited from

`DecimalWrapper.toString`

***

#### ~~fromFloat()~~

> `static` **fromFloat**(`number`): [`Perquintill`](#class-perquintill)

Defined in: [src/utils/BigInt.ts:259](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L259)

##### Parameters

###### number

`Numeric`

##### Returns

[`Perquintill`](#class-perquintill)

***

#### ~~fromPercent()~~

> `static` **fromPercent**(`number`): [`Perquintill`](#class-perquintill)

Defined in: [src/utils/BigInt.ts:263](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L263)

##### Parameters

###### number

`Numeric`

##### Returns

[`Perquintill`](#class-perquintill)
