
## Class: Vault

Defined in: [src/Vault.ts:19](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Vault.ts#L19)

Query and interact with a vault, which is the main entry point for investing and redeeming funds.
A vault is the combination of a network, a pool, a tranche and an investment currency.

### Extends

- `Entity`

### Properties

#### address

> **address**: `` `0x${string}` ``

Defined in: [src/Vault.ts:30](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Vault.ts#L30)

The contract address of the vault.

***

#### chainId

> **chainId**: `number`

Defined in: [src/Vault.ts:21](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Vault.ts#L21)

***

#### network

> **network**: [`PoolNetwork`](#class-poolnetwork)

Defined in: [src/Vault.ts:34](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Vault.ts#L34)

***

#### pool

> **pool**: [`Pool`](#class-pool)

Defined in: [src/Vault.ts:20](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Vault.ts#L20)

***

#### trancheId

> **trancheId**: `string`

Defined in: [src/Vault.ts:35](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Vault.ts#L35)

### Methods

#### allowance()

> **allowance**(`owner`): [`Query`](#type-query)\<[`Currency`](#class-currency)\>

Defined in: [src/Vault.ts:84](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Vault.ts#L84)

Get the allowance of the investment currency for the CentrifugeRouter,
which is the contract that moves funds into the vault on behalf of the investor.

##### Parameters

###### owner

`string`

The address of the owner

##### Returns

[`Query`](#type-query)\<[`Currency`](#class-currency)\>

***

#### cancelInvestOrder()

> **cancelInvestOrder**(): [`Transaction`](#type-transaction)

Defined in: [src/Vault.ts:320](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Vault.ts#L320)

Cancel an open investment order.

##### Returns

[`Transaction`](#type-transaction)

***

#### cancelRedeemOrder()

> **cancelRedeemOrder**(): [`Transaction`](#type-transaction)

Defined in: [src/Vault.ts:369](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Vault.ts#L369)

Cancel an open redemption order.

##### Returns

[`Transaction`](#type-transaction)

***

#### claim()

> **claim**(`receiver`?, `controller`?): [`Transaction`](#type-transaction)

Defined in: [src/Vault.ts:395](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Vault.ts#L395)

Claim any outstanding fund shares after an investment has gone through, or funds after an redemption has gone through.

##### Parameters

###### receiver?

`string`

The address that should receive the funds. If not provided, the investor's address is used.

###### controller?

`string`

The address of the user that has invested. Allows someone else to claim on behalf of the user
 if the user has set the CentrifugeRouter as an operator on the vault. If not provided, the investor's address is used.

##### Returns

[`Transaction`](#type-transaction)

***

#### increaseInvestOrder()

> **increaseInvestOrder**(`investAmount`): [`Transaction`](#type-transaction)

Defined in: [src/Vault.ts:239](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Vault.ts#L239)

Place an order to invest funds in the vault. If an order exists, it will increase the amount.

##### Parameters

###### investAmount

`NumberInput`

The amount to invest in the vault

##### Returns

[`Transaction`](#type-transaction)

***

#### increaseRedeemOrder()

> **increaseRedeemOrder**(`redeemAmount`): [`Transaction`](#type-transaction)

Defined in: [src/Vault.ts:344](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Vault.ts#L344)

Place an order to redeem funds from the vault. If an order exists, it will increase the amount.

##### Parameters

###### redeemAmount

`NumberInput`

The amount of shares to redeem

##### Returns

[`Transaction`](#type-transaction)

***

#### investment()

> **investment**(`investor`): [`Query`](#type-query)\<\{ `claimableCancelInvestCurrency`: [`Currency`](#class-currency); `claimableCancelRedeemShares`: `Token`; `claimableInvestCurrencyEquivalent`: [`Currency`](#class-currency); `claimableInvestShares`: `Token`; `claimableRedeemCurrency`: [`Currency`](#class-currency); `claimableRedeemSharesEquivalent`: `Token`; `hasPendingCancelInvestRequest`: `boolean`; `hasPendingCancelRedeemRequest`: `boolean`; `investmentCurrency`: [`CurrencyMetadata`](#type-currencymetadata); `investmentCurrencyAllowance`: [`Currency`](#class-currency); `investmentCurrencyBalance`: [`Currency`](#class-currency); `isAllowedToInvest`: `boolean`; `pendingInvestCurrency`: [`Currency`](#class-currency); `pendingRedeemShares`: `Token`; `shareBalance`: `Token`; `shareCurrency`: [`CurrencyMetadata`](#type-currencymetadata); \}\>

Defined in: [src/Vault.ts:128](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Vault.ts#L128)

Get the details of the investment of an investor in the vault and any pending investments or redemptions.

##### Parameters

###### investor

`string`

The address of the investor

##### Returns

[`Query`](#type-query)\<\{ `claimableCancelInvestCurrency`: [`Currency`](#class-currency); `claimableCancelRedeemShares`: `Token`; `claimableInvestCurrencyEquivalent`: [`Currency`](#class-currency); `claimableInvestShares`: `Token`; `claimableRedeemCurrency`: [`Currency`](#class-currency); `claimableRedeemSharesEquivalent`: `Token`; `hasPendingCancelInvestRequest`: `boolean`; `hasPendingCancelRedeemRequest`: `boolean`; `investmentCurrency`: [`CurrencyMetadata`](#type-currencymetadata); `investmentCurrencyAllowance`: [`Currency`](#class-currency); `investmentCurrencyBalance`: [`Currency`](#class-currency); `isAllowedToInvest`: `boolean`; `pendingInvestCurrency`: [`Currency`](#class-currency); `pendingRedeemShares`: `Token`; `shareBalance`: `Token`; `shareCurrency`: [`CurrencyMetadata`](#type-currencymetadata); \}\>

***

#### investmentCurrency()

> **investmentCurrency**(): [`Query`](#type-query)\<[`CurrencyMetadata`](#type-currencymetadata)\>

Defined in: [src/Vault.ts:68](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Vault.ts#L68)

Get the details of the investment currency.

##### Returns

[`Query`](#type-query)\<[`CurrencyMetadata`](#type-currencymetadata)\>

***

#### shareCurrency()

> **shareCurrency**(): [`Query`](#type-query)\<[`CurrencyMetadata`](#type-currencymetadata)\>

Defined in: [src/Vault.ts:75](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Vault.ts#L75)

Get the details of the share token.

##### Returns

[`Query`](#type-query)\<[`CurrencyMetadata`](#type-currencymetadata)\>
