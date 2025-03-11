
## Class: Reports

Defined in: [src/Reports/index.ts:38](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Reports/index.ts#L38)

### Extends

- `Entity`

### Properties

#### pool

> **pool**: [`Pool`](#class-pool)

Defined in: [src/Reports/index.ts:43](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Reports/index.ts#L43)

### Methods

#### assetList()

> **assetList**(`filter`?): [`Query`](#type-query)\<[`AssetListReport`](#type-assetlistreport)[]\>

Defined in: [src/Reports/index.ts:77](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Reports/index.ts#L77)

##### Parameters

###### filter?

[`AssetListReportFilter`](#type-assetlistreportfilter)

##### Returns

[`Query`](#type-query)\<[`AssetListReport`](#type-assetlistreport)[]\>

***

#### assetTimeSeries()

> **assetTimeSeries**(`filter`?): [`Query`](#type-query)\<`AssetTimeSeriesReport`[]\>

Defined in: [src/Reports/index.ts:89](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Reports/index.ts#L89)

##### Parameters

###### filter?

`AssetTimeSeriesReportFilter`

##### Returns

[`Query`](#type-query)\<`AssetTimeSeriesReport`[]\>

***

#### assetTransactions()

> **assetTransactions**(`filter`?): [`Query`](#type-query)\<[`AssetTransactionReport`](#type-assettransactionreport)[]\>

Defined in: [src/Reports/index.ts:65](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Reports/index.ts#L65)

##### Parameters

###### filter?

[`AssetTransactionReportFilter`](#type-assettransactionreportfilter)

##### Returns

[`Query`](#type-query)\<[`AssetTransactionReport`](#type-assettransactionreport)[]\>

***

#### balanceSheet()

> **balanceSheet**(`filter`?): [`Query`](#type-query)\<[`BalanceSheetReport`](#type-balancesheetreport)[]\>

Defined in: [src/Reports/index.ts:49](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Reports/index.ts#L49)

##### Parameters

###### filter?

[`ReportFilter`](#type-reportfilter)

##### Returns

[`Query`](#type-query)\<[`BalanceSheetReport`](#type-balancesheetreport)[]\>

***

#### cashflow()

> **cashflow**(`filter`?): [`Query`](#type-query)\<[`CashflowReport`](#type-cashflowreport)[]\>

Defined in: [src/Reports/index.ts:53](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Reports/index.ts#L53)

##### Parameters

###### filter?

[`ReportFilter`](#type-reportfilter)

##### Returns

[`Query`](#type-query)\<[`CashflowReport`](#type-cashflowreport)[]\>

***

#### feeTransactions()

> **feeTransactions**(`filter`?): [`Query`](#type-query)\<[`FeeTransactionReport`](#type-feetransactionreport)[]\>

Defined in: [src/Reports/index.ts:73](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Reports/index.ts#L73)

##### Parameters

###### filter?

[`FeeTransactionReportFilter`](#type-feetransactionreportfilter)

##### Returns

[`Query`](#type-query)\<[`FeeTransactionReport`](#type-feetransactionreport)[]\>

***

#### investorList()

> **investorList**(`filter`?): [`Query`](#type-query)\<[`InvestorListReport`](#type-investorlistreport)[]\>

Defined in: [src/Reports/index.ts:81](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Reports/index.ts#L81)

##### Parameters

###### filter?

[`InvestorListReportFilter`](#type-investorlistreportfilter)

##### Returns

[`Query`](#type-query)\<[`InvestorListReport`](#type-investorlistreport)[]\>

***

#### investorTransactions()

> **investorTransactions**(`filter`?): [`Query`](#type-query)\<[`InvestorTransactionsReport`](#type-investortransactionsreport)[]\>

Defined in: [src/Reports/index.ts:61](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Reports/index.ts#L61)

##### Parameters

###### filter?

[`InvestorTransactionsReportFilter`](#type-investortransactionsreportfilter)

##### Returns

[`Query`](#type-query)\<[`InvestorTransactionsReport`](#type-investortransactionsreport)[]\>

***

#### ordersList()

> **ordersList**(`filter`?): [`Query`](#type-query)\<`OrdersListReport`[]\>

Defined in: [src/Reports/index.ts:85](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Reports/index.ts#L85)

##### Parameters

###### filter?

`OrdersListReportFilter`

##### Returns

[`Query`](#type-query)\<`OrdersListReport`[]\>

***

#### profitAndLoss()

> **profitAndLoss**(`filter`?): [`Query`](#type-query)\<[`ProfitAndLossReport`](#type-profitandlossreport)[]\>

Defined in: [src/Reports/index.ts:57](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Reports/index.ts#L57)

##### Parameters

###### filter?

[`ReportFilter`](#type-reportfilter)

##### Returns

[`Query`](#type-query)\<[`ProfitAndLossReport`](#type-profitandlossreport)[]\>

***

#### tokenPrice()

> **tokenPrice**(`filter`?): [`Query`](#type-query)\<[`TokenPriceReport`](#type-tokenpricereport)[]\>

Defined in: [src/Reports/index.ts:69](https://github.com/centrifuge/sdk/blob/7e5c9c56f5322c91813d51c7522dcd987e27a503/src/Reports/index.ts#L69)

##### Parameters

###### filter?

[`TokenPriceReportFilter`](#type-tokenpricereportfilter)

##### Returns

[`Query`](#type-query)\<[`TokenPriceReport`](#type-tokenpricereport)[]\>
