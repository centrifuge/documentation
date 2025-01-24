# BigInt Wrappers

BigInt wrappers can be used to easily categorize and handle different types of numbers. When fetching data from the SDK any numerical data is returned as a BigInt Wrapper.

| Type     | Decimals | Description                                      |
| -------- | -------- | ------------------------------------------------ |
| Currency | n        | A wrapper for currency values                    |
| Token    | n        | A wrapper for token values                       |
| Rate     | 27       | Often used for Rates such as APR/APY             |
| Price    | 18       | Often used for EVM token prices with 18 decimals |

## Currency/Token

Both Currency and Token have the exact same methods and functionality. They are intended to make it easier to understand the data returned from the SDK. In the future their methods may differ.

```typescript
const currency = new Currency(1000n, 6);
currency.toBigInt(); // 1000n
currency.toNumber(); // 0.001
currency.toString(); // '1000'
currency.toDecimal(); // 0.001
```

Takes a number and the decimals of the currency and returns an object that can be converted into different formats.

## Currency.fromFloat()

```typescript
const currency = Currency.fromFloat(1000, 6);
currency.toBigInt(); // 1_000_000_000n
currency.toNumber(); // 1000
currency.toString(); // '1000000000'
currency.toDecimal(); // 1000
```

The static method `fromFloat` can be used to create a Currency object from a floating point number.

## Currency Arithmetic

```typescript
const currency = new Currency(1000n, 6);
const currency2 = new Currency(2000n, 6);

const sum = currency.add(currency2);
const difference = currency.sub(currency2);
const product = currency.mul(currency2);
const quotient = currency.div(currency2);
```

Basic arithmetic operations are available on the Currency object. When an operation is performed on two Currency objects, the result is a new Currency object. The result will have the same decimals as the original Currency object.

Operations can also be performed by passing in a bigint. The result will still have the same decimals as the original Currency object and will be returned as a Currency object.

## Currency Comparison

```typescript
const currency = new Currency(1000n, 6);
const currency2 = new Currency(2000n, 6);
const isEqual = currency.equals(currency2);
const isGreaterThan = currency.greaterThan(currency2);
const isLessThan = currency.lessThan(currency2);
```

Just like arithmetic operations, comparison operations are available on the Currency object. When an operation is performed on two Currency objects, the result is a boolean.

Operations can also be performed by passing in a bigint. The result will still be a boolean.

## Rate

## Price
