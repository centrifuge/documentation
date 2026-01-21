---
sidebar_position: 8
---

# Managing holdings

Holdings are onchain escrow accounts that store assets (like stablecoins) on behalf of your share class. They represent the liquidity backing your share tokens and are used to process investor redemptions.

![Holding Overview](/assets/images/holding_page.png)

## What holdings represent

- **Liquidity reserves** - Funds available to pay out redemptions
- **Multi-chain presence** - Assets distributed across different networks
- **NAV backing** - The real value supporting your share tokens

## Permissions required

| Action | Required Role |
|--------|--------------|
| View holdings | All connected wallets |
| Deposit from wallet | Balance Sheet Manager |
| Deposit from On/Off-Ramp Manager | Balance Sheet Manager |
| Withdraw to wallet | Balance Sheet Manager |
| Withdraw to receivers | Relayer |

## The holdings table

Navigate to **Holdings** in the sidebar. The table displays:

| Column | Description |
|--------|-------------|
| **Asset** | Token symbol (e.g., USDC, USDT) with contract address |
| **Network** | The blockchain where the asset is held |
| **Quantity** | Total tokens held |
| **Price** | Current per-unit price in pool currency |
| **Value** | Total value (Quantity × Price) |
| **Actions** | Deposit and Withdraw buttons |

**Total Holdings** at the top shows the sum of all holding values in your pool's base currency.

## Depositing funds

Deposits add assets to your share class holdings. Use for:
- Funding redemption payouts
- Adding new liquidity
- Moving assets from your wallet or on/off-ramp manager

### Step 1: Select the holding

Find the asset and click **Actions** → **Deposit**.

![Holding Drop Down options](/assets/images/holdings_dropdown.png)

### Step 2: Choose the source

<img src="/assets/images/deposit_holding.png" alt="Deposit Holdings" style={{maxWidth: '500px'}} />

**Option A: Connected Wallet**
- Available if you're a Balance Sheet Manager
- Funds come directly from your connected wallet

**Option B: On/Off-Ramp Manager**
- Available if a manager is configured for this network
- Funds come from the manager's accumulated balance

### Step 3: Enter the amount

1. Type the amount to deposit
2. Or click **MAX** to deposit the full available balance
3. Review the transaction summary

### Step 4: Submit the transaction

Click **Deposit**, approve in your wallet, and wait for confirmation.

## Withdrawing funds

Withdrawals remove assets from holdings. Use for:
- Moving funds to your wallet
- Transferring to off-ramp addresses for fiat conversion
- Rebalancing across networks

### Step 1: Select the holding

Find the asset and click **Actions** → **Withdraw**.

### Step 2: Choose the destination

<img src="/assets/images/withdraw_holdings.png" alt="Withdraw Holdings" style={{maxWidth: '500px'}} />

**Option A: Connected Wallet**
- Available for Balance Sheet Managers
- Funds go directly to your connected wallet

**Option B: Relayer Addresses**
- Available if you're an enabled relayer
- Must select from pre-configured receiver addresses
- Used for off-ramp operations

### Step 3: Enter the amount

1. Type the withdrawal amount
2. Or click **MAX** to withdraw all available funds
3. Review the summary

> **Warning**: Ensure sufficient holdings remain for pending redemptions.

### Step 4: Submit the transaction

Click **Withdraw** and approve in your wallet.

## Holdings and redemptions

Holdings are critical for processing redemptions.

### Before revoking shares

When processing redemptions, the system checks:
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

**Example:**
- Investor redeems 1,000 shares
- Token price: $10.50 per share
- Asset price: $1.00 (stablecoin)
- Required: 1,000 × $10.50 / $1.00 = **$10,500 USDC**

## Multi-network holdings

### Why multiple networks?

Your share class may hold assets across several networks to:
- Support investors on different chains
- Optimize gas costs
- Distribute liquidity for availability

### Rebalancing across networks

To move funds between networks:
1. Withdraw from Network A
2. Bridge funds off-platform (using your preferred bridge)
3. Deposit to Network B

> **Note**: The app does not perform cross-chain transfers directly. Use external bridges for rebalancing.

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

See [Configuring access](configuring-access.md) for On/Off-Ramp Manager setup.

## Best practices

### Maintain adequate liquidity

- Keep sufficient holdings to cover expected redemptions
- Monitor redemption patterns and trends
- Set up alerts for low balance situations

### Regular reconciliation

- Compare holdings to your NAV calculations
- Verify prices are current
- Check for discrepancies across networks

### Security considerations

- Only Balance Sheet Managers should have deposit/withdraw access
- Use multi-sig for large movements
- Verify addresses carefully for withdrawals

## Common issues

**Deposit button disabled?**
- You may not have Balance Sheet Manager permissions
- Check that your wallet is connected
- Verify you're on the correct network

**Can't withdraw?**
- You may not be a Balance Sheet Manager or enabled Relayer
- Check for sufficient balance
- Verify destination address is configured (for relayer withdrawals)

**What's the difference between holdings and vaults?**
- **Holdings**: Where pool assets are stored (escrow accounts)
- **Vaults**: Entry points for investor deposits/redemptions
- Holdings receive funds when managers deposit, not directly from investors

## Related

- [Processing redemptions](processing-redemptions.md) - Holdings fund redemption payouts
- [Configuring access](configuring-access.md) - Set up On/Off-Ramp Managers
- [Managing NAV](nav-and-pricing.md) - Holdings value contributes to NAV
