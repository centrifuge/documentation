
## Class: ~~Rate~~

Defined in: [src/utils/BigInt.ts:183](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L183)

### Deprecated

### Extends

- `DecimalWrapper`

### Constructors

#### new Rate()

> **new Rate**(`value`, `decimals`): [`Rate`](#class-rate)

Defined in: [src/utils/BigInt.ts:29](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L29)

##### Parameters

###### value

`bigint` | `Numeric`

###### decimals

`number` = `27`

##### Returns

[`Rate`](#class-rate)

##### Inherited from

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

> `static` **decimals**: `number` = `27`

Defined in: [src/utils/BigInt.ts:184](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L184)

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

#### ~~toApr()~~

> **toApr**(): `Decimal`

Defined in: [src/utils/BigInt.ts:208](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L208)

##### Returns

`Decimal`

***

#### ~~toAprPercent()~~

> **toAprPercent**(): `Decimal`

Defined in: [src/utils/BigInt.ts:216](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L216)

##### Returns

`Decimal`

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

Defined in: [src/utils/BigInt.ts:204](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L204)

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

#### ~~fromApr()~~

> `static` **fromApr**(`apr`): [`Rate`](#class-rate)

Defined in: [src/utils/BigInt.ts:194](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L194)

##### Parameters

###### apr

`Numeric`

##### Returns

[`Rate`](#class-rate)

***

#### ~~fromAprPercent()~~

> `static` **fromAprPercent**(`apr`): [`Rate`](#class-rate)

Defined in: [src/utils/BigInt.ts:200](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L200)

##### Parameters

###### apr

`Numeric`

##### Returns

[`Rate`](#class-rate)

***

#### ~~fromFloat()~~

> `static` **fromFloat**(`number`): [`Rate`](#class-rate)

Defined in: [src/utils/BigInt.ts:186](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L186)

##### Parameters

###### number

`Numeric`

##### Returns

[`Rate`](#class-rate)

***

#### ~~fromPercent()~~

> `static` **fromPercent**(`number`): [`Rate`](#class-rate)

Defined in: [src/utils/BigInt.ts:190](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/utils/BigInt.ts#L190)

##### Parameters

###### number

`Numeric`

##### Returns

[`Rate`](#class-rate)
