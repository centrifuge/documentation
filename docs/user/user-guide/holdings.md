---
sidebar_position: 5
---

# Holdings management

Holdings represent the assets that your share class maintains across multiple blockchain networks. These assets form the liquidity backing your share tokens and are used to process investor redemptions.

## Overview

The Holdings feature allows you to:
- View all assets held across multiple networks
- Deposit funds into your share class holdings
- Withdraw funds from holdings
- Track the total value of your holdings
- Create new holdings on additional networks

## Understanding holdings

### What are holdings?

**Holdings** are on-chain escrow accounts that store assets (like stablecoins) on behalf of your share class. They represent:

- **Liquidity reserves**: Funds available to pay out redemptions
- **Multi-chain presence**: Assets distributed across different networks
- **NAV backing**: The real value supporting your share tokens

### Holdings vs investor holdings

| Term | Meaning |
|------|---------|
| **Holdings** (this page) | Pool-level assets held in escrow |
| **Investor Holdings** | An investor's share balance and its value |

The Holdings page manages pool-level assets. Individual investor positions are managed in the Investors section.

### How holdings relate to NAV

Your total holdings value is a key component of NAV:

```
Total Holdings Value = Sum of (Quantity × Price) for each holding
```

This value should be reflected in your NAV calculations to ensure accurate share pricing.

---

## Viewing holdings

### The holdings table

Navigate to **Holdings** in the sidebar. The table displays:

| Column | Description |
|--------|-------------|
| **Asset** | Token symbol (e.g., USDC, USDT) with contract address |
| **Network** | The blockchain where the asset is held |
| **Quantity** | Total tokens held |
| **Price** | Current per-unit price in pool currency |
| **Value** | Total value (Quantity × Price) |
| **Actions** | Deposit and Withdraw buttons |

![Holding Overview](/assets/images/holding_page.png)

### Total holdings

At the top of the page, you'll see the **Total Holdings** value - the sum of all individual holding values, converted to your pool's base currency.

---

## Depositing funds

Deposits add assets to your share class holdings. This is essential for:
- Funding redemption payouts
- Adding new liquidity
- Moving assets from your wallet or on/off-ramp manager

### Who can deposit?

- **Balance Sheet Managers**: Can deposit from their connected wallet
- **On/Off-Ramp Managers**: Can deposit from manager accounts

### How to deposit

#### Step 1: Select the holding

In the Holdings table, find the asset you want to deposit and click the **Actions** dropdown, then select **Deposit**.

![Holding Drop Down options](/assets/images/holdings_dropdown.png)

#### Step 2: Choose the source

Select where the funds will come from:

**Option A: Connected Wallet**
- Available if you're a Balance Sheet Manager
- Funds come directly from your connected wallet
- Shows your current wallet balance

**Option B: On/Off-Ramp Manager**
- Available if a manager is configured for this network
- Funds come from the manager's accumulated balance
- Shows the manager's current balance

![Deposit Holdings](/assets/images/deposit_holding.png)

#### Step 3: Enter the amount

1. Type the amount to deposit
2. Or click **MAX** to deposit the full available balance
3. Review the transaction summary:
   - **Available Balance**: Your current balance in the source
   - **Deposit Amount**: What you're depositing
   - **New Balance**: Resulting holding balance after deposit

#### Step 4: Submit the transaction

1. Click **Deposit**
2. Approve the transaction in your wallet
3. Wait for confirmation
4. The holdings table updates with the new balance

---

## Withdrawing funds

Withdrawals remove assets from your share class holdings. Common use cases:
- Moving funds to your wallet
- Transferring to off-ramp addresses for fiat conversion
- Rebalancing across networks

### Who can withdraw?

- **Balance Sheet Managers**: Can withdraw to their connected wallet
- **Relayers**: Can withdraw to configured receiver addresses

### How to withdraw

#### Step 1: Select the holding

Find the asset and click **Actions** → **Withdraw**.

#### Step 2: Choose the destination

Select where the funds will go:

**Option A: Connected Wallet**
- Available for Balance Sheet Managers
- Funds go directly to your connected wallet

**Option B: Relayer Addresses**
- Available if you're an enabled relayer
- Must select from pre-configured receiver addresses
- Used for off-ramp operations

![Withdraw Holdings](/assets/images/withdraw_holdings.png)

#### Step 3: Enter the amount

1. Type the withdrawal amount
2. Or click **MAX** to withdraw all available funds
3. Review the summary:
   - **Available Balance**: Current holding balance
   - **Withdrawal Amount**: What you're withdrawing
   - **Remaining Balance**: What stays in holdings

> **Warning**: Ensure sufficient holdings remain for pending redemptions.

#### Step 4: Submit the transaction

1. Click **Withdraw**
2. Approve the transaction in your wallet
3. Wait for confirmation

---

## Adding new holdings

Holdings are typically created automatically when you deploy vaults or configure assets for your share class. To add holdings for a new network or asset combination:

1. Deploy a vault on the target network for the desired asset
2. The holding is created as part of the vault deployment
3. The new holding appears in the table with a zero balance
4. You can then deposit funds into it

> **Note**: Contact your administrator if you need to configure additional assets or networks for your pool.

---

## Holdings and redemptions

Holdings are critical for processing redemptions:

### Before revoking shares

When processing redemptions (revoking shares), the system checks:
1. The payout amount based on shares and price
2. Whether sufficient holdings are available

If holdings are insufficient:
- The Revoke Shares modal shows a warning
- You can click to deposit more funds
- Revocation cannot proceed until funded

### Calculating required holdings

```
Required Holdings = Shares to Revoke × Token Price / Asset Price
```

**Example**:
- Investor redeems 1,000 shares
- Token price: $10.50 per share
- Asset price: $1.00 (stablecoin)
- Required: 1,000 × $10.50 / $1.00 = $10,500 USDC

Ensure your holdings can cover anticipated redemptions.

---

## Multi-network holdings management

### Why multiple networks?

Your share class may hold assets across several networks to:
- Support investors on different chains
- Optimize gas costs
- Distribute liquidity for availability

### Viewing by network

The Holdings table shows all holdings together. You can identify the network by:
- The network icon in the Network column
- Filtering or sorting by network

### Rebalancing across networks

To move funds between networks:
1. Withdraw from Network A
2. Bridge funds off-platform (using your preferred bridge)
3. Deposit to Network B

> **Note**: The app does not perform cross-chain transfers directly. Use external bridges for rebalancing.

---

## On/Off-Ramp Manager integration

If an On/Off-Ramp Manager is configured for your share class:

### Manager deposits

1. Funds from on-ramp operations accumulate in the manager
2. View manager balance in the deposit modal
3. Transfer from manager to holdings when ready

### Manager withdrawals

1. Select withdrawal to a receiver address
2. Receiver addresses must be pre-configured
3. Typically used for off-ramp (fiat conversion)

See [Managers](managers.md) for configuring On/Off-Ramp Managers.

---

## Best practices

### Maintain adequate liquidity

- Keep sufficient holdings to cover expected redemptions
- Monitor redemption patterns and trends
- Set up alerts for low balance situations

### Regular reconciliation

- Compare holdings to your NAV calculations
- Verify prices are current
- Check for any discrepancies across networks

### Documentation

- Record all deposits and withdrawals
- Keep audit trail for compliance
- Document rebalancing operations

### Security considerations

- Only Balance Sheet Managers should have deposit/withdraw access
- Use multi-sig for large movements
- Verify addresses carefully for withdrawals

---

## Common questions

### Why is my deposit button disabled?

- You may not have Balance Sheet Manager permissions for this network
- Check that your wallet is connected
- Verify you're on the correct network

### Why can't I withdraw?

- You may not be a Balance Sheet Manager or enabled Relayer
- Check for sufficient balance
- Verify the destination address is configured (for relayer withdrawals)

### How do I add a new asset type?

New assets must be configured at the pool level. Contact your administrator to add support for additional assets.

### What's the difference between holdings and vaults?

- **Holdings**: Where pool assets are stored (escrow accounts)
- **Vaults**: Entry points for investor deposits/redemptions
- Holdings receive funds when investors deposit through vaults

### How often should I check holdings?

- Daily: Quick review of balances
- Before redemptions: Ensure sufficient liquidity
- After large transactions: Verify funds arrived

---

## Related features

- [NAV](nav.md) - Holdings value contributes to NAV
- [Orders](orders.md) - Holdings fund redemption payouts
- [Vaults](vaults.md) - Investor entry points connected to holdings
- [Managers](managers.md) - Configure On/Off-Ramp Managers
