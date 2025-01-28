# Reports

```ts
const pool = await centrifuge.pool("<pool-id>", "<metadata-hash>");
const balanceSheetReport = await pool.reports.balanceSheet();
```

Reports are generated from data from the Centrifuge API and are combined with pool metadata to provide a comprehensive view of the pool's financials.

Some reports rely on the pool metadata. The metadata hash should be provided to the `pool` function.

Available reports are:

- `balanceSheet`
- `profitAndLoss`
- `cashflow`
- `investorTransactions`
- `assetTransactions`
- `tokenPrice`
- `feeTransactions`
- `assetList`
- `investorList`
- `ordersList`
- `assetTimeSeries`

### Report Filtering

Reports can be filtered using the `ReportFilter` type.

```ts
type GroupBy = "day" | "month" | "quarter" | "year";

const balanceSheetReport = await pool.reports.balanceSheet({
  from: "2024-01-01",
  to: "2024-01-31",
  groupBy: "month",
});
```

Some reports have additional filtering options. They can be found in the TypeScript [type definitions](https://github.com/centrifuge/sdk/blob/main/src/types/reports.ts#L153).
