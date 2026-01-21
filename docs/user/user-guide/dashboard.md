---
sidebar_position: 1
---

# Dashboard

The Dashboard provides a consolidated overview of your share class operations, giving you quick visibility into NAV, pending orders, and holdings without navigating to individual sections.

## Overview

The Dashboard is designed for at-a-glance monitoring, displaying:
- Current NAV and price per share
- Performance chart
- Pending and approved investment totals
- Pending and approved redemption totals
- Holdings summary


---

## Dashboard sections

### NAV section

The top of the dashboard shows your current NAV status:

**NAV Card**
- Current total NAV value
- Current price per share
- Share class symbol and details

**Performance Chart**
- Historical NAV performance over time
- Visual representation of value changes

**Update NAV Button**
- Quick access to update NAV without leaving the dashboard
- Only enabled for Hub Managers

![NAV Section](/assets/images/top_dashboard.png)

---

### Orders summary

The middle section provides a snapshot of order activity:

#### Investments card

| Metric | Description |
|--------|-------------|
| **Pending investments** | Total value of deposits awaiting approval |
| **Approved investments** | Total value of approved deposits awaiting share issuance |

#### Redemptions card

| Metric | Description |
|--------|-------------|
| **Pending redemptions** | Total value of redemption requests awaiting approval |
| **Approved redemptions** | Estimated payout value for approved redemptions awaiting revocation |

All values are displayed in your pool's base currency.

![Orders summary cards](/assets/images/order_overview_dashboard.png)

---

### Holdings preview

The bottom section shows a condensed view of your holdings:

- Asset holdings across all networks
- Quantity and value for each holding
- Same data as the full Holdings page

This helps you quickly assess liquidity without leaving the dashboard.

![Holdings table preview](/assets/images/holding_table_dashboard.png)

---

## Using the dashboard

### Daily monitoring workflow

1. **Check NAV**: Verify current NAV and price are accurate
2. **Review pending investments**: See if new deposits need approval
3. **Review pending redemptions**: Check for redemption requests
4. **Verify approved orders**: Confirm approved orders are ready for processing
5. **Check holdings**: Ensure adequate liquidity for operations

### Quick actions

From the dashboard, you can:
- **Update NAV**: Click the "Update NAV" button to open the NAV modal
- **Navigate to details**: Click on any section to go to the full feature page

---

## Understanding the metrics

### Investment metrics

**Pending Investments**
- Sum of all `pendingDeposit` amounts across vaults
- Converted to pool currency using asset prices
- Represents funds waiting for your approval

**Approved Investments**
- Sum of all `pendingIssuances` amounts
- These have been approved but shares not yet issued
- Your next action: Issue shares

### Redemption metrics

**Pending Redemptions**
- Sum of all `pendingRedeem` amounts (in shares)
- Displayed as estimated value in pool currency
- Represents shares waiting for approval to redeem

**Approved Redemptions**
- Sum of all `pendingRevocations` amounts
- Calculated as estimated payout using current price
- Your next action: Revoke shares and process payout

---

## Dashboard vs individual pages

| Feature | Dashboard | Full Page |
|---------|-----------|-----------|
| NAV update | Quick button | Full controls |
| Orders | Totals only | Individual orders |
| Holdings | Summary table | Full management |
| Actions | Limited | Complete |

Use the Dashboard for monitoring; use individual pages for detailed management.

---

## Common questions

### Why are my totals different from the Orders page?

The Dashboard aggregates totals across all assets and networks. The Orders page shows breakdowns by asset and network. The totals should match when summed.

### Can I process orders from the Dashboard?

No, the Dashboard is view-only for orders. Navigate to the [Orders](orders.md) page to approve investments, issue shares, or process redemptions.

### How often does the Dashboard update?

The Dashboard uses real-time data from the blockchain. Values update automatically as transactions are confirmed.

---

## Related features

- [NAV](nav.md) - Full NAV management
- [Orders](orders.md) - Process investments and redemptions
- [Holdings](holdings.md) - Manage fund liquidity
