---
sidebar_position: 2
---

# NAV management

Net Asset Value (NAV) is the total value of assets backing a share class. Updating NAV is one of the most critical operations for fund managers, as it directly determines the price per share that investors receive when investing or redeeming.

![NAV Overview](/assets/images/nav_overview.png)

## Overview

The NAV feature allows Hub Managers to:
- Update the total value of assets for a share class
- Set a new price per share across all networks
- View current pricing information across all deployed chains

## Key concepts

### What is NAV?

**NAV (Net Asset Value)** represents the total value of all assets in your share class, denominated in your pool's base currency (e.g., USD). This value is used to calculate the price per share token.

### Price per share

The **price per share** (also called "token price") is calculated as:

```
Price Per Share = Total NAV / Total Share Supply
```

When you update NAV, the system automatically calculates and updates the price per share across all networks where your share class is deployed.

### Multi-chain pricing

Your share class may be deployed across multiple networks (Ethereum, Base, Arbitrum, etc.). When you update NAV:
- The new price is propagated to **all networks** automatically. Please note it can take up to 30 minutes for prices to update across spoke chains.
- Each network displays the updated price per share
- Investors on any network see the same consistent pricing

## Who can update NAV?

Only **Hub Managers** (also called Pool Managers or Hub Admins) can update NAV. This permission is verified onchain before any update can be executed.

## How to update NAV

### Step 1: Navigate to the NAV page

1. Select your pool from the token list
2. Select the share class you want to manage
3. Click on **NAV** in the sidebar navigation

### Step 2: Open the update NAV modal

Click the **Update NAV** button to open the NAV update form.


### Step 3: Choose your input method

You have two options for updating NAV:

#### Option A: Enter total NAV

Select **NAV** as your input method if you want to enter the total value of assets.

1. Enter the total asset value in your pool's base currency
2. The system calculates the new price per share automatically
3. Review the calculated price change

<img src="/assets/images/nav_total_nav_update.png" alt="NAV Modal Total NAV" style={{maxWidth: '500px'}} />

#### Option B: Enter price per share

Select **NAV per share** if you already know the target price per token.

1. Enter the desired price per share
2. The system calculates the implied total NAV automatically
3. Review the calculated values

<img src="/assets/images/update_nav_modal.png" alt="NAV Modal Total Price" style={{maxWidth: '500px'}} />

### Step 4: Review price changes

Before submitting, review the price change summary:

- **Current Price**: The existing price per share
- **New Price**: The price after your update
- **Price Change**: Percentage increase or decrease
- **Prices by Network**: New prices across all deployed networks

### Step 5: Submit the update

1. Click **Submit** to initiate the transaction
2. Approve the transaction in your wallet
3. Wait for the transaction to be confirmed onchain

### Step 6: Confirm success

Once confirmed:
- A success toast notification appears
- The NAV page refreshes with updated values
- All networks reflect the new price

## Understanding the price list

The Price List section shows pricing information for each network where your share class is deployed:

| Column | Description |
|--------|-------------|
| **Network** | The blockchain network (Base, Arbitrum, etc.) |
| **Current Price** | The existing price per share on that network |
| **New Price** | The price after your update (preview) |

This helps you verify that the price update will be applied consistently across all networks.

## Best practices

### Regular NAV updates

- Update NAV on a consistent schedule (daily, weekly, or as required by your fund documentation)
- Ensure the NAV reflects the fair market value of underlying assets
- Document your valuation methodology for audit purposes

### Before updating NAV

1. **Verify underlying asset values**: Ensure your NAV calculation is accurate
2. **Check pending orders**: Be aware of any pending investments or redemptions that will be processed at the new price
3. **Review the price change**: Large price changes should be double-checked

### Multi-sig considerations

If using a Safe (multi-sig) wallet:
- The NAV update will be queued as a transaction
- Other signers will need to approve before execution

## Common questions

### Why can't I update NAV?

- Verify you are connected with a Hub Manager wallet
- Check that you have selected the correct pool and share class

### How often should I update NAV?

This depends on your fund's requirements and underlying assets:
- **Daily**: For funds with frequently trading underlying assets
- **Weekly/Monthly**: For funds with less liquid or stable underlying assets
- **On-demand**: When significant value changes occur

### What happens to pending orders when I update NAV?

Pending investment and redemption orders are **not** automatically processed when you update NAV. They will be processed at the new price when you approve and execute them in the Orders section.

### Can I update NAV to any value?

Yes, but:
- The value must be a valid number greater than zero
- Large price changes should be carefully reviewed
- The system displays an information banner showing the price change for any update

## Related features

- [Orders](orders.md) - Process investments and redemptions at the updated NAV
- [Holdings](holdings.md) - View and manage the assets that comprise your NAV
