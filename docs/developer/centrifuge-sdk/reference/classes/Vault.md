[**@centrifuge/sdk**](../README.md)

***

[@centrifuge/sdk](../README.md) **Broken link** / Vault

# Class: Vault

Defined in: [src/Vault.ts:19](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Vault.ts#L19)

Query and interact with a vault, which is the main entry point for investing and redeeming funds.
A vault is the combination of a network, a pool, a tranche and an investment currency.

## Extends

- `Entity`

## Properties

### address

> **address**: `` `0x${string}` ``

Defined in: [src/Vault.ts:30](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Vault.ts#L30)

The contract address of the vault.

***

### chainId

> **chainId**: `number`

Defined in: [src/Vault.ts:21](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Vault.ts#L21)

***

### network

> **network**: [`PoolNetwork`](PoolNetwork.md)

Defined in: [src/Vault.ts:34](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Vault.ts#L34)

***

### pool

> **pool**: [`Pool`](Pool.md)

Defined in: [src/Vault.ts:20](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Vault.ts#L20)

***

### trancheId

> **trancheId**: `string`

Defined in: [src/Vault.ts:35](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Vault.ts#L35)

## Methods

### allowance()

> **allowance**(`owner`): [`Query`](../type-aliases/Query.md)\<[`Currency`](Currency.md)\>

Defined in: [src/Vault.ts:84](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Vault.ts#L84)

Get the allowance of the investment currency for the CentrifugeRouter,
which is the contract that moves funds into the vault on behalf of the investor.

#### Parameters

##### owner

`string`

The address of the owner

#### Returns

[`Query`](../type-aliases/Query.md)\<[`Currency`](Currency.md)\>

***

### cancelInvestOrder()

> **cancelInvestOrder**(): [`Transaction`](../type-aliases/Transaction.md)

Defined in: [src/Vault.ts:320](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Vault.ts#L320)

Cancel an open investment order.

#### Returns

[`Transaction`](../type-aliases/Transaction.md)

***

### cancelRedeemOrder()

> **cancelRedeemOrder**(): [`Transaction`](../type-aliases/Transaction.md)

Defined in: [src/Vault.ts:369](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Vault.ts#L369)

Cancel an open redemption order.

#### Returns

[`Transaction`](../type-aliases/Transaction.md)

***

### claim()

> **claim**(`receiver`?, `controller`?): [`Transaction`](../type-aliases/Transaction.md)

Defined in: [src/Vault.ts:395](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Vault.ts#L395)

Claim any outstanding fund shares after an investment has gone through, or funds after an redemption has gone through.

#### Parameters

##### receiver?

`string`

The address that should receive the funds. If not provided, the investor's address is used.

##### controller?

`string`

The address of the user that has invested. Allows someone else to claim on behalf of the user
 if the user has set the CentrifugeRouter as an operator on the vault. If not provided, the investor's address is used.

#### Returns

[`Transaction`](../type-aliases/Transaction.md)

***

### increaseInvestOrder()

> **increaseInvestOrder**(`investAmount`): [`Transaction`](../type-aliases/Transaction.md)

Defined in: [src/Vault.ts:239](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Vault.ts#L239)

Place an order to invest funds in the vault. If an order exists, it will increase the amount.

#### Parameters

##### investAmount

`NumberInput`

The amount to invest in the vault

#### Returns

[`Transaction`](../type-aliases/Transaction.md)

***

### increaseRedeemOrder()

> **increaseRedeemOrder**(`redeemAmount`): [`Transaction`](../type-aliases/Transaction.md)

Defined in: [src/Vault.ts:344](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Vault.ts#L344)

Place an order to redeem funds from the vault. If an order exists, it will increase the amount.

#### Parameters

##### redeemAmount

`NumberInput`

The amount of shares to redeem

#### Returns

[`Transaction`](../type-aliases/Transaction.md)

***

### investment()

> **investment**(`investor`): [`Query`](../type-aliases/Query.md)\<\{ `claimableCancelInvestCurrency`: [`Currency`](Currency.md); `claimableCancelRedeemShares`: `Token`; `claimableInvestCurrencyEquivalent`: [`Currency`](Currency.md); `claimableInvestShares`: `Token`; `claimableRedeemCurrency`: [`Currency`](Currency.md); `claimableRedeemSharesEquivalent`: `Token`; `hasPendingCancelInvestRequest`: `boolean`; `hasPendingCancelRedeemRequest`: `boolean`; `investmentCurrency`: [`CurrencyMetadata`](../type-aliases/CurrencyMetadata.md); `investmentCurrencyAllowance`: [`Currency`](Currency.md); `investmentCurrencyBalance`: [`Currency`](Currency.md); `isAllowedToInvest`: `boolean`; `pendingInvestCurrency`: [`Currency`](Currency.md); `pendingRedeemShares`: `Token`; `shareBalance`: `Token`; `shareCurrency`: [`CurrencyMetadata`](../type-aliases/CurrencyMetadata.md); \}\>

Defined in: [src/Vault.ts:128](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Vault.ts#L128)

Get the details of the investment of an investor in the vault and any pending investments or redemptions.

#### Parameters

##### investor

`string`

The address of the investor

#### Returns

[`Query`](../type-aliases/Query.md)\<\{ `claimableCancelInvestCurrency`: [`Currency`](Currency.md); `claimableCancelRedeemShares`: `Token`; `claimableInvestCurrencyEquivalent`: [`Currency`](Currency.md); `claimableInvestShares`: `Token`; `claimableRedeemCurrency`: [`Currency`](Currency.md); `claimableRedeemSharesEquivalent`: `Token`; `hasPendingCancelInvestRequest`: `boolean`; `hasPendingCancelRedeemRequest`: `boolean`; `investmentCurrency`: [`CurrencyMetadata`](../type-aliases/CurrencyMetadata.md); `investmentCurrencyAllowance`: [`Currency`](Currency.md); `investmentCurrencyBalance`: [`Currency`](Currency.md); `isAllowedToInvest`: `boolean`; `pendingInvestCurrency`: [`Currency`](Currency.md); `pendingRedeemShares`: `Token`; `shareBalance`: `Token`; `shareCurrency`: [`CurrencyMetadata`](../type-aliases/CurrencyMetadata.md); \}\>

***

### investmentCurrency()

> **investmentCurrency**(): [`Query`](../type-aliases/Query.md)\<[`CurrencyMetadata`](../type-aliases/CurrencyMetadata.md)\>

Defined in: [src/Vault.ts:68](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Vault.ts#L68)

Get the details of the investment currency.

#### Returns

[`Query`](../type-aliases/Query.md)\<[`CurrencyMetadata`](../type-aliases/CurrencyMetadata.md)\>

***

### shareCurrency()

> **shareCurrency**(): [`Query`](../type-aliases/Query.md)\<[`CurrencyMetadata`](../type-aliases/CurrencyMetadata.md)\>

Defined in: [src/Vault.ts:75](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Vault.ts#L75)

Get the details of the share token.

#### Returns

[`Query`](../type-aliases/Query.md)\<[`CurrencyMetadata`](../type-aliases/CurrencyMetadata.md)\>
