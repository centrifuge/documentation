---
sidebar_position: 1
---

# Offering creation

Launch your first tokenized offering on Centrifuge in five steps.

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

<img src="/assets/images/add_vault.png" alt="Add vault" style={{maxWidth: '500px'}} />

**Vault types:**
- **Async** - You approve deposits before issuing shares
- **Sync-Invest** - Instant deposits (you still approve redemptions)

## Step 3: Set initial NAV

Set your starting price before accepting investors:

1. Navigate to **NAV**
2. Click **Update NAV**
3. Enter initial price (typically $1.00 for new funds)
4. Submit

<img src="/assets/images/nav_update.png" alt="Update NAV" style={{maxWidth: '500px'}} />

→ *Learn more: [Token Management](token-management.md)*

## Step 4: Add your team

Configure who can do what:

| Role | What they do |
|------|--------------|
| Hub Manager | Everything - NAV, orders, investors, settings |
| Balance Sheet Manager | Move funds, direct issue/revoke |
| Relayer | Withdraw to off-ramp addresses |

<img src="/assets/images/settings.jpeg" alt="Settings" style={{maxWidth: '500px'}} />

## Step 5: Whitelist investors (if permissioned)

1. Navigate to **Investors**
2. Click **Add new investor**
3. Enter wallet address, network, and label
4. Save

<img src="/assets/images/add_investor.png" alt="Add investor" style={{maxWidth: '500px'}} />


<img src="/assets/images/investor_overview.png" alt="Investor overview" style={{maxWidth: '500px'}} />

→ *Learn more: [Investor Management](investor-management.md)*

## You're live

Once investors deposit, your workflow is:

1. **Update NAV** regularly (daily/weekly based on your assets)
2. **Approve investments** and issue shares
3. **Approve redemptions** and process payouts
4. **Manage liquidity** to ensure you can pay redemptions

## Next steps

| Guide | What you'll learn |
|-------|-------------------|
| [Investor Management](investor-management.md) | Onboarding → investing → redeeming |
| [Token Management](token-management.md) | How share pricing works, when to update |
| [Distribution Management](distribution-management.md) | Holdings, on/off-ramp, paying redemptions |
