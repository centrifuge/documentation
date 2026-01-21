---
sidebar_position: 3
---

# Orders Management

The Orders feature is where fund operations teams process investor requests for investments (deposits) and redemptions. This is a core workflow that requires careful attention to ensure investors receive accurate share allocations and payouts.

![Orders Overview](/assets/images/orders_overview.jpeg)


## Overview

The Orders page manages the complete lifecycle of investor transactions:

1. **Approve Investments** - Review and approve pending deposit requests
2. **Issue Shares** - Convert approved investments into share tokens
3. **Approve Redemptions** - Review and approve pending withdrawal requests
4. **Revoke Shares** - Burn shares and prepare payouts for approved redemptions

## Understanding the Order Lifecycle

### Investment Flow

```
Investor Submits Deposit Request
         ↓
┌─────────────────────────┐
│   Pending Investments   │ ← Orders appear here
└─────────────────────────┘
         ↓
    Manager Approves
         ↓
┌─────────────────────────┐
│  Approved Investments   │ ← Ready for share issuance
└─────────────────────────┘
         ↓
    Manager Issues Shares
         ↓
┌─────────────────────────┐
│   Closed Investments    │ ← Historical record
└─────────────────────────┘
```

### Redemption Flow

```
Investor Submits Redemption Request
         ↓
┌─────────────────────────┐
│   Pending Redemptions   │ ← Orders appear here
└─────────────────────────┘
         ↓
    Manager Approves
         ↓
┌─────────────────────────┐
│  Approved Redemptions   │ ← Ready for share revocation
└─────────────────────────┘
         ↓
    Manager Revokes Shares
         ↓
┌─────────────────────────┐
│   Closed Redemptions    │ ← Historical record
└─────────────────────────┘
```

## Who Can Process Orders?

| Action | Required Permission |
|--------|-------------------|
| Approve Investments/Redemptions | Hub Manager |
| Issue/Revoke Shares | Hub Manager |
| Issue/Revoke Directly | Balance Sheet Manager |

---

## Approving Investments

When investors deposit funds into your vaults, their orders appear as **Pending Investments**.

### Step 1: View Pending Investments

Navigate to the Orders page. The **Approve investments** section shows:
- Number of pending orders
- Total pending amount
- Breakdown by asset and network

![Orders Pending](/assets/images/pending_orders.png)

### Step 2: Open the Approval Modal

Click the **Approve** button to open the approval modal.

### Step 3: Review Pending Orders

The modal displays orders grouped by:
- **Asset**: The currency deposited (e.g., USDC)
- **Network**: The blockchain where the deposit was made (e.g., Base)

Each row shows:
- **Pending amount**: Total pending deposits for this asset/network
- **Queued amount**: Orders waiting to become pending
- **Network**: Where the deposits originated

Click the arrow icon on any row to view individual investor details (addresses, amounts, epochs).

<img src="/assets/images/approve_pending_order.png" alt="Approve Pending" style={{maxWidth: '500px'}} />

### Step 4: Select Orders to Approve

For each order group:
1. Check the checkbox to include in approval
2. Optionally adjust the approval amount (can approve less than the full pending amount)
3. Orders must be approved in **epoch order** (oldest first)

> **Note**: You cannot approve a newer order until older orders in the same group are approved.

### Step 5: Submit Approval

1. Review your selections
2. Click **Approve**
3. Confirm the transaction in your wallet
4. Wait for confirmation

### What Happens After Approval?

Approved investments move to the **Issue shares** section. They are now ready for share issuance but the investor has not yet received their tokens.

---

## Issuing Shares

After approving investments, you must **issue shares** to complete the transaction and mint tokens for investors.

### Step 1: View Approved Investments

The **Issue shares** section shows investments that have been approved but not yet converted to shares.
![Approved Orders](/assets/images/approved_orders.png)

### Step 2: Open the Issue Shares Modal

Click the **Issue** button.

### Step 3: Set the Token Price

For each approved investment epoch, you must set the **price per share** at which shares will be issued.

- The default price is the current share class price
- You can adjust the price if needed
- The system calculates how many shares the investor will receive:

```
New Shares = (Invested Amount × Asset Price) / Token Price Per Share
```

<img src="/assets/images/issue_shares.png" alt="Issue Shares" style={{maxWidth: '500px'}} />

### Step 4: Review and Submit

1. Review the calculated share amounts for each investor
2. Click **Issue shares**
3. Confirm the transaction in your wallet

### After Issuance

- Investors receive their share tokens
- The transaction moves to **Closed investments** (historical record)
- Investor holdings are updated

---

## Approving Redemptions

When investors request to redeem their shares, orders appear as **Pending Redemptions**.

### Step 1: View Pending Redemptions

The **Approve redemptions** section shows:
- Number of pending redemption requests
- Total shares pending redemption
- Estimated payout amounts

### Step 2: Open the Approval Modal

Click the **Approve** button.

### Step 3: Review Redemption Requests

Each order shows:
- Investor address
- Shares to be redeemed
- Estimated payout (calculated from current price)
- Redemption epoch

<img src="/assets/images/approve_redemptions.png" alt="Approve Redemptions" style={{maxWidth: '500px'}} />

### Step 4: Select Orders to Approve

1. Check the checkbox for each order to approve
2. Optionally adjust the approval amount
3. Review the estimated payout for each investor

### Step 5: Submit Approval

1. Review your selections
2. Click **Approve**
3. Confirm the transaction

### What Happens After Approval?

Approved redemptions move to the **Revoke shares** section, ready for final processing.

---

## Revoking Shares

After approving redemptions, you must **revoke shares** to burn the tokens and process payouts.

### Step 1: View Approved Redemptions

The **Revoke shares** section shows redemptions ready for processing.

### Step 2: Open the Revoke Shares Modal

Click the **Revoke** button.

### Step 3: Set the Token Price

For each redemption epoch, set the **price per share** at which shares will be redeemed.

The payout is calculated as:

```
Payout Amount = (Shares × Token Price Per Share) / Asset Price
```

### Step 4: Check Available Balance

The modal shows the **available balance** in your holdings. If the payout amount exceeds available balance:
- A warning is displayed in red
- You can click the edit icon to deposit more funds

> **Note**: The system allows submission even with insufficient balance, but the on-chain transaction may fail. Ensure adequate holdings before proceeding.

### Step 5: Review and Submit

1. Ensure sufficient balance is available
2. Review the payout amounts
3. Click **Revoke shares**
4. Confirm the transaction

### After Revocation

- Shares are burned (removed from supply)
- Payout is sent to investors from your holdings
- The transaction moves to **Closed redemptions**

---

## Direct Issue and Revoke (Balance Sheet Manager)

Balance Sheet Managers have access to direct operations that bypass the standard order workflow. These are useful for:
- Correcting errors
- Processing off-chain transactions
- Special allocations

### Issue Directly

1. Click **Issue directly** button
2. Select the network
3. Choose input mode:
   - **Invested Amount**: Enter the currency amount, system calculates shares
   - **Shares**: Enter the share amount, system calculates currency
4. Add investor entries:
   - Investor wallet address
   - Amount
   - Token price
5. Submit the transaction

<img src="/assets/images/issue_directly.png" alt="Issue Directly" style={{maxWidth: '500px'}} />


### Revoke Directly

1. Click **Revoke directly** button
2. Select the network
3. Choose input mode:
   - **Redeemed Amount**: Enter the currency amount
   - **Share Amount**: Enter the number of shares
4. Add investor entries with amount and price
5. Submit the transaction

> **Important**: Direct operations should be used carefully as they bypass investor protections and audit trails of the standard workflow.


<img src="/assets/images/revoke_directly.png" alt="Revoke Directly" style={{maxWidth: '500px'}} />

---

## Viewing Closed Orders

The **Closed investments** and **Closed redemptions** sections show historical records of completed transactions.

### Information Available

- Investor addresses
- Amounts processed
- Completion timestamps
- Asset and network details

### Viewing Details

Click **View all** to see the complete history. You can drill down to individual investors to see their specific transaction details.

<img src="/assets/images/view_closed_orders.png" alt="View closed orders" style={{maxWidth: '500px'}} />

---

## Understanding Queued Orders

**Queued orders** are investor requests that are waiting to become pending. This happens when:
- There are already pending orders for the same asset/network
- Orders must be processed in sequence (FIFO)

In the approval modals, queued orders are shown:
- In a separate **Queued** column alongside the Pending column
- With a tooltip explaining: "Queued orders will become pending once the pending orders have been approved and executed"
- Queued amounts are informational - you can only approve pending amounts

---

## Processing Orders with Multi-Sig (Safe)

When using a Safe wallet, order approvals and share operations require multiple signatures:

1. Perform the operation as normal
2. The transaction is proposed to your Safe
3. Other signers approve in the Safe interface at [safe.global](https://app.safe.global)
4. Once the signature threshold is met, the transaction executes


---

## Best Practices

### Daily Operations Checklist

1. **Check pending investments**: Review new deposit requests
2. **Approve in batches**: Process orders at regular intervals
3. **Verify pricing**: Ensure NAV is updated before issuing shares
4. **Monitor holdings**: Ensure sufficient balance for redemptions
5. **Document exceptions**: Keep records of any direct operations

### Common Workflows

#### End-of-Day Processing

1. Update NAV to reflect current asset values
2. Approve all pending investments
3. Issue shares at the updated price
4. Approve pending redemptions
5. Ensure sufficient holdings balance
6. Revoke shares and process payouts

#### Handling Large Orders

For unusually large orders:
1. Verify investor identity and compliance
2. Confirm sufficient liquidity
3. Consider processing in batches if needed
4. Document the transaction

### Error Prevention

- Always verify the price before issuing/revoking shares
- Double-check investor addresses for direct operations
- Review pending and queued orders together to understand the full picture
- Keep holdings adequately funded for anticipated redemptions

---

## Common Questions

### Why can't I approve an order?

- Verify you have Hub Manager permissions
- Check if there are older orders that must be approved first (epoch ordering)
- Ensure you're connected with the correct wallet

### Why is the Issue/Revoke button disabled?

- There may be no approved orders to process
- You may not have the required permissions
- Check for validation errors in the form

### What happens if I approve less than the full amount?

- The partial amount is approved and moves forward
- The remaining amount stays as pending for future approval
- The investor's order is not canceled

### Can I cancel an approved order?

Approved orders cannot be easily canceled. If you need to reverse an operation:
1. Contact the investor to coordinate
2. Use direct issue/revoke to correct the situation
3. Document the correction thoroughly

---

## Related Features

- [NAV](nav.md) - Update pricing before processing orders
- [Holdings](holdings.md) - Ensure sufficient balance for redemptions
- [Vaults](vaults.md) - Understand where investor deposits originate