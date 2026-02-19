---
sidebar_position: 3
---

# Token management

How share pricing works in Centrifuge and why it matters for your investors.

## Why pricing matters

Your share token's price determines:
- **What investors pay** when they deposit
- **What investors receive** when they redeem
- **The value** investors see in their wallets

Unlike traditional funds where you hold "units," Centrifuge uses **price-accruing tokens**. An investor's token balance stays constant, but the value per token increases as your fund grows.

**Example:**
- Investor buys 10,000 tokens at $1.00 = $10,000 invested
- Fund grows, NAV increases
- Token price rises to $1.10
- Investor still holds 10,000 tokens, now worth $11,000

## How NAV and price connect

**NAV (Net Asset Value)** is the total value of all assets backing your share class.

**Price per share** is calculated automatically:

$$
\text{Price per Share} = \frac{\text{Total NAV}}{\text{Total Share Supply}}
$$

When you update NAV, the system recalculates the price. This new price is used for all subsequent investments and redemptions.

## When to update NAV

Update frequency depends on your underlying assets:

| Asset type | Typical frequency |
|------------|------------------|
| Liquid assets (treasuries, public securities) | Daily |
| Semi-liquid (private credit, loans) | Weekly |
| Illiquid (real estate, infrastructure) | Monthly or quarterly |

**Always update NAV before:**
- Processing pending investments (so investors get fair pricing)
- Processing pending redemptions (so payouts reflect current value)

## How to update NAV

1. **Calculate your current NAV**
   - Value all underlying assets
   - Add accrued income (interest, dividends)
   - Subtract fees and expenses
   - Sum to get total NAV

2. **Update in the app**
   - Navigate to **NAV**
   - Click **Update NAV**
   - Enter total NAV or target price per share
   - Review the price change percentage
   - Submit transaction

<img src="/assets/images/nav_update.png" alt="Update NAV modal" style={{maxWidth: '500px'}} />

3. **Wait for propagation**
   - Hub chain (Ethereum) updates immediately
   - Spoke chains (Base, Arbitrum, etc.) update within ~30 minutes

<img src="/assets/images/nav_overview.png" alt="NAV overview" style={{maxWidth: '600px'}} />

## Multi-chain pricing

Your pool may operate across multiple networks. When you update NAV:

- You update **once** on the hub chain
- The new price **propagates automatically** to all spoke chains
- All investors see the **same price** regardless of which network they're on

This ensures fair, consistent pricing across your entire investor base.

## Price and order processing

### Investment flow

![Investment flow](/assets/images/investment-flow.svg)

Investor receives: 10,000 / 1.05 = **9,523 shares**

### Redemption flow

![Redemption flow](/assets/images/redemption-flow.svg)

Investor receives: 5,000 × 1.10 = **5,500 USDC**

## Token types and pricing behavior

### Price-accruing tokens (default)

- Token balance stays constant
- Value increases as price rises
- Most common for RWA funds

### Rebasing tokens (if configured)

- Token balance increases over time
- Price stays constant (usually $1.00)
- Used for some yield-bearing products

Your token type is set at pool creation.

<img src="/assets/images/update_token.png" alt="Token settings" style={{maxWidth: '500px'}} />

## Best practices

### Before updating

- [ ] Verify your NAV calculation is accurate
- [ ] Check for any pending orders that will process at the new price
- [ ] Review the price change - large swings may need explanation to investors

### Consistency

- Update on a regular schedule (same time, same day)
- Document your valuation methodology
- Keep records for audit purposes

### Communication

- Large price changes may warrant investor communication
- Consider publishing NAV updates to build transparency

## Common scenarios

### Price dropped - should I still update?

Yes. Accurate pricing protects both you and your investors. Delaying updates to hide losses creates bigger problems later.

### Can I update NAV multiple times per day?

Yes, but typically unnecessary. Each update is a transaction with gas costs.

### What if I made a mistake?

Update NAV again with the correct value. The most recent update is what counts.

### Pending orders and NAV timing

Orders are processed at the price **when you issue/revoke shares**, not when the investor submitted their request. This gives you control over pricing timing.

## Related

- [Investor Management](investor-management.md) - How pricing affects investments and redemptions
- [Offering Creation](offering-creation.md) - Setting initial NAV
