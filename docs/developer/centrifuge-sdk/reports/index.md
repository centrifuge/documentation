# Reports

```ts
const pool = await centrifuge.pool("<pool-id>");
const balanceSheetReport = await pool.reports.balanceSheet();
```

Reports are generated from data from the Centrifuge API and are combined with pool metadata to provide a comprehensive view of the pool's financials.

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
