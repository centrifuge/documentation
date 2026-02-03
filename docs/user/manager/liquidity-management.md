---
sidebar_position: 4
---

# Liquidity management

How funds flow through your pool and ensuring you can always pay redemptions.

## Why liquidity matters

When investors redeem shares, you pay them from your **holdings**—onchain escrow accounts that hold assets (USDC, etc.) on behalf of your pool.

If holdings are empty when someone redeems, you can't process the payout.

**Your job:** Ensure sufficient liquidity to meet redemption demand while efficiently deploying capital.

## How funds flow

```
                    INFLOWS                              OUTFLOWS
                       │                                    │
     Investor deposits │                                    │ Investor redemptions
                       ▼                                    ▼
              ┌─────────────┐                      ┌─────────────┐
              │   Vaults    │                      │  Holdings   │
              └──────┬──────┘                      └──────┬──────┘
                     │                                    │
                     │ After you issue shares             │ When you revoke shares
                     ▼                                    ▼
              ┌─────────────┐                      ┌─────────────┐
              │  Holdings   │──────────────────────│   Vaults    │
              └─────────────┘                      └─────────────┘
                     │                                    │
                     │ Withdraw                           │
                     ▼                                    │
              ┌─────────────┐                             │
              │  Off-ramp   │◄────────────────────────────┘
              │  (to fiat)  │
              └─────────────┘
```

## Holdings: Your liquidity pool

Holdings are onchain escrow accounts, one per asset per network.

**Example holdings table:**

| Asset | Network | Balance | Value |
|-------|---------|---------|-------|
| USDC | Base | 500,000 | $500,000 |
| USDC | Arbitrum | 250,000 | $250,000 |
| USDT | Ethereum | 100,000 | $100,000 |

**Total holdings: $850,000**

### Viewing holdings

1. Navigate to **Holdings**
2. See all assets across all networks
3. Total value shown at top

![Holding Overview](/assets/images/holding_page.png)

### Depositing to holdings

When you need more liquidity:

1. Navigate to **Holdings**
2. Find the asset/network you need
3. Click **Actions → Deposit**
4. Choose source:
   - **Connected wallet** - From your Balance Sheet Manager wallet
   - **On/Off-Ramp Manager** - From accumulated on-ramp funds
5. Enter amount
6. Confirm transaction

### Withdrawing from holdings

When you need to move funds out:

1. Navigate to **Holdings**
2. Find the asset/network
3. Click **Actions → Withdraw**
4. Choose destination:
   - **Connected wallet** - To your Balance Sheet Manager wallet
   - **Relayer addresses** - To pre-configured off-ramp receivers
5. Enter amount
6. Confirm transaction

> **Warning:** Ensure sufficient holdings remain for pending redemptions before withdrawing.

## Matching holdings to redemptions

Before processing redemptions, verify you have enough:

```
Required = Shares to Redeem × Price per Share

Example:
- Investor redeeming 10,000 shares
- Current price: $11.00
- Required: 10,000 × $11 = $110,000 USDC
```

If holdings are insufficient:
1. The Revoke Shares modal shows a **warning**
2. You can click to deposit more funds
3. Process redemption after funding

## Multi-network liquidity

Your pool likely operates across multiple networks, each with separate holdings.

### The challenge

- Investor on Base redeems 100,000 USDC
- Base holdings only have 50,000 USDC
- Arbitrum holdings have 200,000 USDC

You can't directly move funds between networks through the app.

### Solutions

**Option 1: Deposit more to the needed network**
1. Transfer USDC to your wallet on Base
2. Deposit to Base holdings
3. Process the redemption

**Option 2: Rebalance via bridge**
1. Withdraw from Arbitrum holdings to your wallet
2. Bridge USDC from Arbitrum to Base (external bridge like Across, Stargate)
3. Deposit to Base holdings
4. Process the redemption

**Option 3: Partial redemption**
1. Approve and process only what Base can cover (50,000)
2. Remaining amount stays pending
3. Fund and process the rest later

### Proactive rebalancing

Monitor holdings across networks and rebalance before you need to:
- Weekly liquidity review
- Move funds to networks with upcoming redemptions
- Keep buffer on each network

## On/Off-Ramp integration

For institutional funds with fiat integration, On/Off-Ramp Managers handle the bridge between crypto and traditional finance.

### What On/Off-Ramp Managers do

- **Receive on-ramp funds** - USDC from banking partners converting fiat
- **Send off-ramp funds** - USDC to exchanges/banks for fiat conversion
- **Control access** - Only authorized relayers can trigger withdrawals to approved addresses

### Setting up On/Off-Ramp

1. Navigate to **Managers**
2. Click **Add on/off ramp manager**
3. Select network
4. Deploy the manager contract

Then configure:

**Deposit assets** - What the manager can receive
**Relayers** - Who can trigger withdrawals
**Receivers** - Pre-approved withdrawal destinations

### On-ramp flow (fiat → pool)

```
Investor wires USD
       ↓
Banking partner converts to USDC
       ↓
USDC sent to On/Off-Ramp Manager
       ↓
Manager balance increases
       ↓
You deposit from Manager → Holdings
       ↓
Ready to process orders
```

**In the app:**
1. See Manager balance in the deposit modal
2. Select "On/Off-Ramp Manager" as source
3. Deposit to holdings

### Off-ramp flow (pool → fiat)

```
Process redemption (Holdings → Investor)
       ↓
Or: Withdraw Holdings → Receiver address
       ↓
Off-ramp partner receives USDC
       ↓
Partner converts to USD
       ↓
USD wired to bank account
```

**In the app:**
1. Withdraw from Holdings
2. Select a pre-configured receiver (e.g., "Circle Off-ramp")
3. Relayer executes the withdrawal

## Liquidity planning

### How much to keep in holdings?

Consider:
- **Pending redemptions** - Must cover these
- **Expected redemptions** - Based on historical patterns
- **Buffer** - Extra cushion for unexpected requests

**Rule of thumb:** Keep 10-20% of NAV in liquid holdings, more if redemption activity is high.

### Monitoring

**Daily:**
- Check holdings balance vs pending redemptions
- Verify you can cover any approved redemptions

**Weekly:**
- Review holdings across all networks
- Plan any rebalancing needed
- Check On/Off-Ramp Manager balances

### Alerts

Set up monitoring for:
- Holdings dropping below threshold
- Large redemption requests
- On/Off-Ramp Manager accumulating funds

## Common scenarios

### "I can't process a redemption—insufficient holdings"

1. Check which network needs funds
2. Options:
   - Deposit from your wallet
   - Deposit from On/Off-Ramp Manager
   - Rebalance from another network
3. Once funded, process the redemption

### "On/Off-Ramp Manager has accumulated funds"

Funds sitting in the manager aren't in holdings and can't pay redemptions.
1. Navigate to Holdings
2. Deposit from On/Off-Ramp Manager
3. Deploy the capital

### "Investor wants fiat, not USDC"

If you handle fiat for investors:
1. Process redemption normally (Holdings → Investor wallet)
2. Investor sends USDC to their own off-ramp

Or, if you manage the off-ramp:
1. Coordinate with investor
2. Withdraw from Holdings to off-ramp receiver
3. Partner converts and wires fiat

### "Need to rebalance but bridge is slow"

Plan ahead:
- Monitor network-level holdings weekly
- Initiate rebalancing before you need funds
- Keep buffer on each active network

## Related

- [Investor lifecycle](investor-lifecycle.md) - Processing redemptions
- [Pricing and NAV](pricing-and-nav.md) - Calculating redemption payouts
- [Access and permissions](access-and-permissions.md) - Setting up On/Off-Ramp Managers
