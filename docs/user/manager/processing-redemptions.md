---
sidebar_position: 5
---

# Processing redemptions

When investors request to redeem their shares, you need to approve the redemptions and process payouts. This guide covers the complete redemption workflow.

## Redemption flow

```
Investor Requests Redemption
         ↓
┌─────────────────────────┐
│   Pending Redemptions   │ ← You approve here
└─────────────────────────┘
         ↓
    You Approve
         ↓
┌─────────────────────────┐
│  Approved Redemptions   │ ← You revoke shares here
└─────────────────────────┘
         ↓
    You Revoke Shares
         ↓
┌─────────────────────────┐
│   Closed Redemptions    │ ← Complete, investor paid
└─────────────────────────┘
```

## Permissions required

| Action | Required Role |
|--------|--------------|
| Approve redemptions | Hub Manager |
| Revoke shares | Hub Manager |
| Revoke directly | Balance Sheet Manager |

## Step 1: Approve pending redemptions

### View pending redemptions

Navigate to the Orders page. The **Approve redemptions** section shows:
- Number of pending redemption requests
- Total shares pending redemption
- Estimated payout amounts

### Open the approval modal

Click the **Approve** button.

### Review redemption requests

Each order shows:
- Investor address
- Shares to be redeemed
- Estimated payout (calculated from current price)
- Redemption epoch

<img src="/assets/images/approve_redemptions.png" alt="Approve Redemptions" style={{maxWidth: '500px'}} />

### Select orders to approve

1. Check the checkbox for each order to approve
2. Optionally adjust the approval amount
3. Review the estimated payout

### Submit approval

Click **Approve** and confirm the transaction.

## Step 2: Revoke shares and process payout

After approval, you must revoke shares to burn the tokens and pay investors.

### View approved redemptions

The **Revoke shares** section shows redemptions ready for processing.

### Set the token price

Click **Revoke** to open the modal. For each redemption epoch:

1. Set the **price per share** for redemption
2. The payout is calculated: `Payout = (Shares × Token Price) / Asset Price`

### Check available balance

The modal shows your **available balance** in holdings.

If payout exceeds available balance:
- A warning is displayed in red
- Click the edit icon to deposit more funds first

> **Important**: The system allows submission even with insufficient balance, but the onchain transaction may fail. Ensure adequate holdings before proceeding.

### Submit revocation

1. Ensure sufficient balance is available
2. Review the payout amounts
3. Click **Revoke shares**
4. Confirm the transaction

After revocation:
- Shares are burned (removed from supply)
- Payout is sent to investors from your holdings
- The redemption moves to **Closed redemptions**

## Direct revoke (Balance Sheet Manager)

Balance Sheet Managers can revoke shares directly. Use for:
- Correcting errors
- Processing offchain transactions
- Special situations

1. Click **Revoke directly**
2. Select the network
3. Choose input mode:
   - **Redeemed Amount** - Enter currency amount
   - **Share Amount** - Enter number of shares
4. Add investor entries (address, amount, price)
5. Submit the transaction

<img src="/assets/images/revoke_directly.png" alt="Revoke Directly" style={{maxWidth: '500px'}} />

> **Important**: Direct operations bypass investor protections and audit trails. Use carefully and document thoroughly.

## Ensuring sufficient liquidity

Before processing redemptions:

1. Check current holdings balance
2. Calculate required payout: `Shares × Token Price / Asset Price`
3. If insufficient, deposit funds first (see [Managing holdings](managing-holdings.md))

**Example calculation:**
- Investor redeems 1,000 shares
- Token price: $10.50 per share
- Asset price: $1.00 (USDC)
- Required: 1,000 × $10.50 / $1.00 = **$10,500 USDC**

## Best practices

### Daily workflow

1. Review pending redemptions
2. Ensure sufficient holdings balance
3. Update NAV to reflect current values
4. Approve redemptions
5. Revoke shares and process payouts

### Before revoking

- Always verify the price before revoking shares
- Confirm sufficient holdings balance
- Consider the impact on remaining liquidity

### Error prevention

- Double-check investor addresses for direct operations
- Keep holdings adequately funded for anticipated redemptions
- Document any direct operations

## Common issues

**Can't approve a redemption?**
- Verify you have Hub Manager permissions
- Check epoch ordering requirements
- Ensure you're connected with the correct wallet

**Revoke button disabled?**
- There may be no approved redemptions
- Check for validation errors

**Insufficient balance warning?**
- Deposit more funds to holdings before proceeding
- See [Managing holdings](managing-holdings.md)

**Can I cancel an approved redemption?**
- Approved orders cannot be easily canceled
- Contact the investor to coordinate
- Use direct revoke to correct if needed
- Document the correction thoroughly

## Related

- [Managing NAV](nav-and-pricing.md) - Update pricing before revoking shares
- [Managing holdings](managing-holdings.md) - Ensure sufficient liquidity for payouts
- [Processing investments](processing-investments.md) - Handle investor deposits
