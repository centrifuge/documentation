[**@centrifuge/sdk**](../README.md)

***

[@centrifuge/sdk](../README.md) / Reports

# Class: Reports

Defined in: [src/Reports/index.ts:38](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Reports/index.ts#L38)

## Extends

- `Entity`

## Properties

### pool

> **pool**: [`Pool`](Pool.md)

Defined in: [src/Reports/index.ts:43](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Reports/index.ts#L43)

## Methods

### assetList()

> **assetList**(`filter`?): [`Query`](../type-aliases/Query.md)\<[`AssetListReport`](../type-aliases/AssetListReport.md)[]\> **Broken link**

Defined in: [src/Reports/index.ts:77](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Reports/index.ts#L77)

#### Parameters

##### filter?

[`AssetListReportFilter`](../type-aliases/AssetListReportFilter.md) **Broken link**

#### Returns

[`Query`](../type-aliases/Query.md)\<[`AssetListReport`](../type-aliases/AssetListReport.md)[]\> **Broken link**

***

### assetTimeSeries()

> **assetTimeSeries**(`filter`?): [`Query`](../type-aliases/Query.md)\<`AssetTimeSeriesReport`[]\>

Defined in: [src/Reports/index.ts:89](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Reports/index.ts#L89)

#### Parameters

##### filter?

`AssetTimeSeriesReportFilter`

#### Returns

[`Query`](../type-aliases/Query.md)\<`AssetTimeSeriesReport`[]\> 

***

### assetTransactions()

> **assetTransactions**(`filter`?): [`Query`](../type-aliases/Query.md)\<[`AssetTransactionReport`](../type-aliases/AssetTransactionReport.md)[]\> **Broken link**

Defined in: [src/Reports/index.ts:65](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Reports/index.ts#L65)

#### Parameters

##### filter?

[`AssetTransactionReportFilter`](../type-aliases/AssetTransactionReportFilter.md) **Broken link**

#### Returns

[`Query`](../type-aliases/Query.md)\<[`AssetTransactionReport`](../type-aliases/AssetTransactionReport.md)[]\> **Broken link**

***

### balanceSheet()

> **balanceSheet**(`filter`?): [`Query`](../type-aliases/Query.md)\<[`BalanceSheetReport`](../type-aliases/BalanceSheetReport.md)[]\> **Broken link**

Defined in: [src/Reports/index.ts:49](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Reports/index.ts#L49)

#### Parameters

##### filter?

[`ReportFilter`](../type-aliases/ReportFilter.md) **Broken link**

#### Returns

[`Query`](../type-aliases/Query.md)\<[`BalanceSheetReport`](../type-aliases/BalanceSheetReport.md)[]\> **Broken link**

***

### cashflow()

> **cashflow**(`filter`?): [`Query`](../type-aliases/Query.md)\<[`CashflowReport`](../type-aliases/CashflowReport.md)[]\> **Broken link**

Defined in: [src/Reports/index.ts:53](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Reports/index.ts#L53)

#### Parameters

##### filter?

[`ReportFilter`](../type-aliases/ReportFilter.md)

#### Returns

[`Query`](../type-aliases/Query.md)\<[`CashflowReport`](../type-aliases/CashflowReport.md)[]\> **Broken link**

***

### feeTransactions()

> **feeTransactions**(`filter`?): [`Query`](../type-aliases/Query.md)\<[`FeeTransactionReport`](../type-aliases/FeeTransactionReport.md)[]\> **Broken link**

Defined in: [src/Reports/index.ts:73](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Reports/index.ts#L73)

#### Parameters

##### filter?

[`FeeTransactionReportFilter`](../type-aliases/FeeTransactionReportFilter.md) **Broken link**

#### Returns

[`Query`](../type-aliases/Query.md)\<[`FeeTransactionReport`](../type-aliases/FeeTransactionReport.md)[]\> **Broken link**

***

### investorList()

> **investorList**(`filter`?): [`Query`](../type-aliases/Query.md)\<[`InvestorListReport`](../type-aliases/InvestorListReport.md)[]\> **Broken link**

Defined in: [src/Reports/index.ts:81](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Reports/index.ts#L81)

#### Parameters

##### filter?

[`InvestorListReportFilter`](../type-aliases/InvestorListReportFilter.md) **Broken link**

#### Returns

[`Query`](../type-aliases/Query.md)\<[`InvestorListReport`](../type-aliases/InvestorListReport.md)[]\> **Broken link**

***

### investorTransactions()

> **investorTransactions**(`filter`?): [`Query`](../type-aliases/Query.md)\<[`InvestorTransactionsReport`](../type-aliases/InvestorTransactionsReport.md)[]\> **Broken link**

Defined in: [src/Reports/index.ts:61](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Reports/index.ts#L61)

#### Parameters

##### filter?

[`InvestorTransactionsReportFilter`](../type-aliases/InvestorTransactionsReportFilter.md) **Broken link**

#### Returns

[`Query`](../type-aliases/Query.md)\<[`InvestorTransactionsReport`](../type-aliases/InvestorTransactionsReport.md)[]\> **Broken link**

***

### ordersList()

> **ordersList**(`filter`?): [`Query`](../type-aliases/Query.md)\<`OrdersListReport`[]\>

Defined in: [src/Reports/index.ts:85](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Reports/index.ts#L85)

#### Parameters

##### filter?

`OrdersListReportFilter`

#### Returns

[`Query`](../type-aliases/Query.md)\<`OrdersListReport`[]\>

***

### profitAndLoss()

> **profitAndLoss**(`filter`?): [`Query`](../type-aliases/Query.md)\<[`ProfitAndLossReport`](../type-aliases/ProfitAndLossReport.md)[]\> **Broken link**

Defined in: [src/Reports/index.ts:57](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Reports/index.ts#L57)

#### Parameters

##### filter?

[`ReportFilter`](../type-aliases/ReportFilter.md) **Broken link**

#### Returns

[`Query`](../type-aliases/Query.md)\<[`ProfitAndLossReport`](../type-aliases/ProfitAndLossReport.md)[]\> **Broken link**

***

### tokenPrice()

> **tokenPrice**(`filter`?): [`Query`](../type-aliases/Query.md)\<[`TokenPriceReport`](../type-aliases/TokenPriceReport.md)[]\> **Broken link**

Defined in: [src/Reports/index.ts:69](https://github.com/centrifuge/centrifuge-sdk/blob/35076f925246b8dbb28e12a5beeb6327f126023f/src/Reports/index.ts#L69)

#### Parameters

##### filter?

[`TokenPriceReportFilter`](../type-aliases/TokenPriceReportFilter.md) **Broken link**

#### Returns

[`Query`](../type-aliases/Query.md)\<[`TokenPriceReport`](../type-aliases/TokenPriceReport.md)[]\> **Broken link**
