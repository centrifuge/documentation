---
sidebar_position: 4
---

# Managing NAV and pricing

Net Asset Value (NAV) determines the price per share that investors receive when investing or redeeming. Updating NAV is one of the most critical operations for fund managers.

![NAV Overview](/assets/images/nav_overview.png)

## When to update NAV

- **Daily** - For funds with frequently trading underlying assets
- **Weekly/Monthly** - For funds with less liquid or stable underlying assets
- **On-demand** - When significant value changes occur

## Before updating

1. **Verify underlying asset values** - Ensure your NAV calculation is accurate
2. **Check pending orders** - Be aware of any pending investments or redemptions that will be processed at the new price
3. **Review the price change** - Large price changes should be double-checked

## How to update NAV

### Step 1: Open the NAV page

1. Select your pool from the token list
2. Select the share class you want to manage
3. Click **NAV** in the sidebar navigation
4. Click **Update NAV**

### Step 2: Choose your input method

**Option A: Enter total NAV**

1. Select **NAV** as input method
2. Enter the total asset value in your pool's base currency
3. The system calculates the new price per share automatically

<img src="/assets/images/nav_total_nav_update.png" alt="NAV Modal Total NAV" style={{maxWidth: '500px'}} />

**Option B: Enter price per share**

1. Select **NAV per share** as input method
2. Enter the desired price per share
3. The system calculates the implied total NAV automatically

<img src="/assets/images/update_nav_modal.png" alt="NAV Modal Total Price" style={{maxWidth: '500px'}} />

### Step 3: Review and submit

Review the price change summary:
- **Current Price** vs **New Price**
- **Price Change** percentage
- **Prices by Network** - New prices across all deployed networks

Click **Submit**, approve the transaction in your wallet, and wait for confirmation.

## Multi-chain pricing

When you update NAV:
- The new price is propagated to **all networks** automatically
- It can take up to 30 minutes for prices to update across spoke chains
- Investors on any network see the same consistent pricing

## Price calculation

```
Price Per Share = Total NAV / Total Share Supply
```

## Using multi-sig (Safe)

If using a Safe wallet:
1. The NAV update will be queued as a transaction
2. Other signers approve at [app.safe.global](https://app.safe.global)
3. Transaction executes when threshold is met

## Common issues

**Can't update NAV?**
- Verify you are connected with a Hub Manager wallet
- Check that you have selected the correct pool and share class

**What happens to pending orders?**
Pending orders are **not** automatically processed when you update NAV. They will be processed at the new price when you approve and execute them.

## Related

- [Processing investments](processing-investments.md) - Approve and issue shares at the updated NAV
- [Processing redemptions](processing-redemptions.md) - Approve and revoke shares at the updated NAV
