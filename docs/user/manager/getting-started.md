---
sidebar_position: 1
---

# Getting started

Launch your first tokenized offering on Centrifuge in five steps.

## Before you begin

You'll need:
- **Wallet** - EOA, Safe multi-sig, or MPC custody (Fireblocks, Fordefi)
- **KYC provider** - For investor verification
- **Asset details** - What you're tokenizing

## Step 1: Create your pool

Go to [manage.centrifuge.io](https://manage.centrifuge.io) and configure:

- **Share class** - Name, symbol, minimum investment
- **Restrictions** - Who can hold tokens (whitelist, open, etc.)
- **Hub Managers** - Addresses with full admin access

Deploy when ready.

## Step 2: Deploy vaults

Vaults are where investors deposit. Create one per network you want to support:

1. Navigate to **Vaults**
2. Click **Add vault**
3. Choose network, asset, and vault type
4. Deploy

**Vault types:**
- **Async** - You approve deposits before issuing shares
- **Sync-Invest** - Instant deposits (you still approve redemptions)

→ *Learn more: [Access and permissions](access-and-permissions.md#configuring-vaults)*

## Step 3: Set initial NAV

Set your starting price before accepting investors:

1. Navigate to **NAV**
2. Click **Update NAV**
3. Enter initial price (typically $1.00 for new funds)
4. Submit

→ *Learn more: [Pricing and NAV](pricing-and-nav.md)*

## Step 4: Add your team

Configure who can do what:

| Role | What they do |
|------|--------------|
| Hub Manager | Everything - NAV, orders, investors, settings |
| Balance Sheet Manager | Move funds, direct issue/revoke |
| Relayer | Withdraw to off-ramp addresses |

→ *Learn more: [Access and permissions](access-and-permissions.md)*

## Step 5: Whitelist investors

Add investors who've completed KYC:

1. Navigate to **Investors**
2. Click **Add new investor**
3. Enter wallet address, network, and label
4. Save

Share your vault address with them—they can now deposit.

→ *Learn more: [Investor lifecycle](investor-lifecycle.md)*

## You're live

Once investors deposit, your workflow is:

1. **Update NAV** regularly (daily/weekly based on your assets)
2. **Approve investments** and issue shares
3. **Approve redemptions** and process payouts
4. **Manage liquidity** to ensure you can pay redemptions

## Next steps

| Guide | What you'll learn |
|-------|-------------------|
| [Pricing and NAV](pricing-and-nav.md) | How share pricing works, when to update |
| [Investor lifecycle](investor-lifecycle.md) | Onboarding → investing → redeeming |
| [Liquidity management](liquidity-management.md) | Holdings, on/off-ramp, paying redemptions |
| [Access and permissions](access-and-permissions.md) | Team setup, vaults, pool settings |
