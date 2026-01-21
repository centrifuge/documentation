---
sidebar_position: 1
---

# Example workflows

This guide walks through common workflows from end to end, showing how the different features work together in practice.

## Launching an offering

A complete walkthrough from pool creation to your first investor receiving shares.

### 1. Configure your pool

In the manage centrifuge app:

1. **Configure share classes**
   - Name and symbol (e.g., "Senior Tranche", "ACME-SR")
   - Minimum investment amount
   - Restriction settings (whitelist required, freeze-only, etc.)

2. **Set up access control**
   - Add Hub Manager addresses
   - Configure compliance rules

3. **Deploy** - Confirm the transaction to deploy your pool contracts

### 2. Deploy vaults

After pool deployment, create entry points for investors:

1. Navigate to **Vaults**
2. Click **Add vault**
3. Select network (e.g., Base)
4. Select asset (e.g., USDC)
5. Choose vault type:
   - **Async** for manual control over issuance
   - **Sync-Invest** for instant deposits
6. Deploy and repeat for other networks/assets as needed

### 3. Configure managers

Set up your operations team:

1. Navigate to **Managers**
2. Add **Balance Sheet Managers** for each network
3. If using on/off-ramp:
   - Deploy On/Off-Ramp Manager
   - Add deposit assets
   - Configure relayers and receiver addresses

### 4. Set initial NAV

Before accepting investors:

1. Navigate to **NAV**
2. Click **Update NAV**
3. Set initial total NAV or price per share (typically $1.00 for new funds)
4. Submit the transaction

### 5. Whitelist your first investor

1. Navigate to **Investors**
2. Click **Add new investor**
3. Enter investor wallet address
4. Select network
5. Add a label (e.g., "Acme Capital")
6. Save changes

### 6. Investor deposits

The investor:
1. Connects to your vault on their chosen network
2. Approves USDC spending
3. Submits deposit request

You see the deposit appear in **Orders → Pending Investments**.

### 7. Approve and issue shares

1. Navigate to **Orders**
2. Click **Approve** in the Pending Investments section
3. Select the order and approve
4. Click **Issue** in the Approved Investments section
5. Confirm the token price
6. Issue shares

The investor now holds share tokens.

---

## Daily operations

A typical day managing an active offering.

1. **Open Dashboard**
   - Review current NAV and price
   - Check pending investments count
   - Check pending redemptions count
   - Verify holdings balance

2. **Calculate current NAV**
   - Value underlying assets
   - Include any accrued income
   - Account for fees

3. **Update in the app**
   - Navigate to **NAV**
   - Click **Update NAV**
   - Enter new total NAV
   - Review the price change
   - Submit transaction

4. **Wait for propagation**
   - Hub chain updates immediately
   - Spoke chains update within ~30 minutes

**Process investments:**

. Navigate to **Orders**
2. Review **Pending Investments**
   - Verify investor addresses
   - Check amounts
3. Click **Approve** and approve all pending
4. Click **Issue** to issue shares at today's price
5. Confirm transaction

**Process redemptions:**

1. Check **Pending Redemptions**
2. Verify sufficient holdings balance for payouts
3. If needed, deposit more funds to holdings
4. Click **Approve** and approve redemptions
5. Click **Revoke** to process payouts
6. Confirm transaction

## Investor lifecycle

Following a single investor from onboarding to full redemption.

### Phase 1: Onboarding

**Offchain:**
1. Investor completes KYC/KYB with your provider
2. Provider verifies identity and eligibility
3. Investor provides wallet address

**Onchain:**
1. Navigate to **Investors**
2. Click **Add new investor**
3. Enter:
   - Wallet address: `0x1234...`
   - Network: Base
   - Label: "Acme Capital"
4. Save changes
5. Share vault address with investor

### Phase 2: First investment

**Investor action:**
- Deposits 100,000 USDC into Base vault

**Manager action:**
1. See deposit in **Orders → Pending Investments**
   - Amount: 100,000 USDC
   - Network: Base
   - Investor: Acme Capital

2. Approve the investment
   - Click **Approve**
   - Select the order
   - Submit

3. Issue shares
   - Click **Issue**
   - Price: $10.00 per share
   - Shares to issue: 10,000
   - Submit

**Result:**
- Investor holds 10,000 share tokens
- 100,000 USDC in holdings

### Phase 3: Value accrual

Over time:
- NAV increases from $100,000 to $110,000
- Price per share: $10.00 → $11.00
- Investor's 10,000 tokens now worth $110,000

### Phase 4: Partial redemption

**Investor action:**
- Requests redemption of 5,000 shares

**Manager action:**
1. See redemption in **Orders → Pending Redemptions**
   - Shares: 5,000
   - Estimated payout: $55,000

2. Check holdings
   - Navigate to **Holdings**
   - Verify 55,000+ USDC available
   - If insufficient, deposit more first

3. Approve redemption
   - Click **Approve**
   - Select the order
   - Submit

4. Revoke shares
   - Click **Revoke**
   - Price: $11.00 per share
   - Payout: 55,000 USDC
   - Submit

**Result:**
- Investor receives 55,000 USDC
- Investor retains 5,000 share tokens (worth $55,000)
- 5,000 shares burned from supply

### Phase 5: Full exit

**Investor action:**
- Requests redemption of remaining 5,000 shares

**Manager action:**
- Repeat approval and revocation process
- Investor receives final 55,000 USDC
- Investor's token balance: 0

---

## Multi-network operations

Managing a pool deployed across Base, Arbitrum, and Ethereum.

### Setup: Deploy across networks

1. **Hub chain (Ethereum)**
   - Pool contracts deployed here
   - NAV updates originate here
   - This is your control center

2. **Spoke chains (Base, Arbitrum)**
   - Deploy vaults on each
   - Add Balance Sheet Managers per network
   - Configure assets (USDC on Base, USDC on Arbitrum)

### Scenario: Investors on different chains

**Investor A** deposits on Base:
- 50,000 USDC into Base vault

**Investor B** deposits on Arbitrum:
- 75,000 USDC into Arbitrum vault

Both appear in your Orders page, grouped by network.

### Processing orders across networks

1. **Update NAV** (once, on hub)
   - New price propagates to all networks
   - Wait ~30 minutes for spoke chains

2. **Approve investments**
   - Approve Base orders
   - Approve Arbitrum orders
   - Can be done in any order

3. **Issue shares**
   - Issue for Base investors
   - Issue for Arbitrum investors
   - Same price applies to both

### Managing holdings across networks

Your holdings show balances per network:

| Asset | Network | Balance |
|-------|---------|---------|
| USDC | Base | 50,000 |
| USDC | Arbitrum | 75,000 |

**Scenario: Redemption on Base exceeds Base holdings**

Investor A requests 60,000 USDC redemption, but Base only has 50,000.

**Options:**

1. **Deposit more to Base holdings**
   - Transfer USDC to your wallet on Base
   - Deposit to holdings via the app

2. **Rebalance from Arbitrum**
   - Withdraw from Arbitrum holdings to your wallet
   - Bridge USDC from Arbitrum to Base (external bridge)
   - Deposit to Base holdings
   - Then process redemption

3. **Process partial redemption**
   - Approve only what you can cover
   - Remaining stays pending

### Network-specific managers

Each network can have different Balance Sheet Managers:

| Network | Balance Sheet Manager |
|---------|----------------------|
| Ethereum | treasury.eth |
| Base | ops-base.eth |
| Arbitrum | ops-arb.eth |

Each manager can only operate on their assigned network.

### Cross-network investor

Same investor address whitelisted on multiple networks:

1. Navigate to **Investors**
2. Add investor for Base
3. Add same address again for Arbitrum

They appear as separate rows but can deposit on either network.

---

## On/Off-Ramp operations

Setting up and using On/Off-Ramp Managers for fiat integration.

### Setup: Deploy On/Off-Ramp Manager

1. Navigate to **Managers**
2. Click **Add on/off ramp manager**
3. Select the network (e.g., Base)
4. Confirm deployment transaction
5. Wait for contract creation

### Configure deposit assets

After deployment:

1. Expand the manager accordion for your network
2. Click **Add deposit asset**
3. Select USDC (or other asset)
4. Confirm transaction

The manager can now receive this asset.

### Configure relayers

Relayers are addresses authorized to trigger withdrawals:

1. Click **Add relayer**
2. Enter relayer wallet address (e.g., your operations wallet or automated system)
3. Confirm transaction

### Configure receiver addresses

Pre-approved destinations for withdrawals:

1. Click **Add withdraw address**
2. Select asset (USDC)
3. Enter receiver address (e.g., exchange deposit address, bank off-ramp address)
4. Add label (e.g., "Circle Off-ramp", "Coinbase USDC")
5. Confirm transaction

### Workflow: On-ramp (fiat → crypto → pool)

**Step 1: Investor sends fiat**
- Investor wires USD to your banking partner
- Banking partner converts to USDC

**Step 2: USDC sent to On/Off-Ramp Manager**
- Banking partner sends USDC to your On/Off-Ramp Manager contract address
- Manager balance increases

**Step 3: Deposit to holdings**
1. Navigate to **Holdings**
2. Click **Deposit** on the relevant asset
3. Select **On/Off-Ramp Manager** as source
4. Enter amount (or click MAX)
5. Confirm transaction

USDC moves from manager → holdings, ready for redemption payouts.

### Workflow: Off-ramp (pool → crypto → fiat)

**Step 1: Withdraw from holdings to manager**
1. Navigate to **Holdings**
2. Click **Withdraw** on the relevant asset
3. Select receiver address (your off-ramp destination)
4. Enter amount
5. Confirm transaction

**Step 2: Relayer triggers withdrawal**
- If you're a relayer, the withdrawal executes immediately to the receiver
- USDC arrives at your off-ramp partner (e.g., Circle, exchange)

**Step 3: Convert to fiat**
- Off-ramp partner converts USDC to USD
- Fiat sent to destination bank account

### Example: Complete redemption with off-ramp

**Scenario:** Investor redeems $100,000, wants fiat in their bank account.

1. **Process redemption normally**
   - Approve redemption
   - Revoke shares (payout from holdings)
   - Investor receives 100,000 USDC in their wallet

2. **Investor sends to off-ramp** (investor action)
   - Investor transfers USDC to their own off-ramp
   - Or: You handle off-ramp on their behalf (custodial model)

**Alternative: Direct off-ramp** (if handling fiat for investors)

1. Process redemption with payout going to On/Off-Ramp Manager
2. Relayer withdraws to pre-approved off-ramp receiver
3. Off-ramp partner sends fiat to investor's bank

### Manager balance monitoring

The On/Off-Ramp Manager accumulates funds from:
- On-ramp deposits (incoming USDC)
- Any direct transfers to the manager address

Monitor the balance in the deposit modal:
- Shows current manager balance
- Transfer to holdings when ready to deploy capital

---

## Quick reference

### Processing checklist

- [ ] Update NAV with current asset values
- [ ] Review all pending investments
- [ ] Approve investments
- [ ] Issue shares at correct price
- [ ] Review all pending redemptions
- [ ] Verify holdings balance covers payouts
- [ ] Approve redemptions
- [ ] Revoke shares and process payouts
- [ ] Verify closed orders
- [ ] Check investor balances updated

