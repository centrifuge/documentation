---
sidebar_position: 5
---

# Processing investments

When investors deposit funds into your vaults, you need to approve the deposits and issue shares. This guide covers the complete investment processing workflow.

![Orders Overview](/assets/images/orders_overview.jpeg)

## Investment flow

```
Investor Deposits Funds
         ↓
┌─────────────────────────┐
│   Pending Investments   │ ← You approve here
└─────────────────────────┘
         ↓
    You Approve
         ↓
┌─────────────────────────┐
│  Approved Investments   │ ← You issue shares here
└─────────────────────────┘
         ↓
    You Issue Shares
         ↓
┌─────────────────────────┐
│   Closed Investments    │ ← Complete
└─────────────────────────┘
```

## Permissions required

| Action | Required Role |
|--------|--------------|
| Approve investments | Hub Manager |
| Issue shares | Hub Manager |
| Issue directly | Balance Sheet Manager |

## Step 1: Approve pending investments

### View pending investments

Navigate to the Orders page. The **Approve investments** section shows:
- Number of pending orders
- Total pending amount
- Breakdown by asset and network

![Orders Pending](/assets/images/pending_orders.png)

### Open the approval modal

Click the **Approve** button.

### Review and select orders

Orders are grouped by asset and network. Each row shows:
- **Pending amount** - Total pending deposits
- **Queued amount** - Orders waiting to become pending
- **Network** - Where deposits originated

Click the arrow icon to view individual investor details.

<img src="/assets/images/approve_pending_order.png" alt="Approve Pending" style={{maxWidth: '500px'}} />

### Select orders to approve

1. Check the checkbox for each order group to approve
2. Optionally adjust the approval amount
3. Orders must be approved in **epoch order** (oldest first)

> **Note**: You cannot approve a newer order until older orders in the same group are approved.

### Submit approval

Click **Approve** and confirm the transaction in your wallet.

## Step 2: Issue shares

After approval, you must issue shares to complete the transaction.

### View approved investments

The **Issue shares** section shows approved investments awaiting share issuance.

![Approved Orders](/assets/images/approved_orders.png)

### Set the token price

Click **Issue** to open the modal. For each approved epoch:

1. Set the **price per share** at which shares will be issued
2. The default is the current share class price
3. The system calculates shares: `New Shares = (Invested Amount × Asset Price) / Token Price`

<img src="/assets/images/issue_shares.png" alt="Issue Shares" style={{maxWidth: '500px'}} />

### Submit issuance

1. Review the calculated share amounts
2. Click **Issue shares**
3. Confirm the transaction

After issuance:
- Investors receive their share tokens
- The investment moves to **Closed investments**
- Investor holdings are updated

## Direct issue (Balance Sheet Manager)

Balance Sheet Managers can issue shares directly, bypassing the standard workflow. Use for:
- Correcting errors
- Processing offchain transactions
- Special allocations

1. Click **Issue directly**
2. Select the network
3. Choose input mode:
   - **Invested Amount** - Enter currency, system calculates shares
   - **Shares** - Enter shares, system calculates currency
4. Add investor entries (address, amount, price)
5. Submit the transaction

<img src="/assets/images/issue_directly.png" alt="Issue Directly" style={{maxWidth: '500px'}} />

> **Important**: Direct operations bypass investor protections and audit trails. Use carefully and document thoroughly.

## Best practices

### Daily workflow

1. Update NAV to reflect current asset values
2. Review all pending investments
3. Approve orders in batches
4. Issue shares at the updated price

### Handling large orders

1. Verify investor identity and compliance
2. Confirm sufficient liquidity
3. Consider processing in batches
4. Document the transaction

### Error prevention

- Always verify the price before issuing shares
- Review pending and queued orders together
- Double-check investor addresses for direct operations

## Common issues

**Can't approve an order?**
- Verify you have Hub Manager permissions
- Check if older orders must be approved first (epoch ordering)
- Ensure you're connected with the correct wallet

**Issue button disabled?**
- There may be no approved orders to process
- Check for validation errors in the form

**Approving less than full amount?**
- The partial amount moves forward
- The remaining amount stays pending
- The investor's order is not canceled

## Related

- [Managing NAV](nav-and-pricing.md) - Update pricing before issuing shares
- [Processing redemptions](processing-redemptions.md) - Handle investor withdrawals
- [Managing holdings](managing-holdings.md) - Ensure sufficient liquidity
