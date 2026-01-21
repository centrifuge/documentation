---
sidebar_position: 4
---

# Investors Management

The Investors feature allows you to manage investor whitelisting, view investor positions, and monitor investor activity across your share class.

## Overview

The Investors page provides:
- A complete list of all whitelisted investors
- Real-time holdings and order information per investor
- Tools to add new investors and manage existing ones
- Filtering and search capabilities

## Who Can Manage Investors?

| Action | Required Permission |
|--------|-------------------|
| View investors | All connected wallets |
| Add new investors | Hub Manager |
| Edit investor status | Hub Manager |
| Freeze/unfreeze investors | Hub Manager |

---

## Viewing Investors

### Accessing the Investors Page

1. Select your pool and share class
2. Click **Investors** in the sidebar navigation
![Investor Overview](/assets/images/investor_overview.png)


### Investors Table

The table displays the following information for each investor:

| Column | Description |
|--------|-------------|
| **Network** | The blockchain network where the investor is whitelisted |
| **Wallet** | Investor's wallet address (with label if assigned) |
| **Holdings** | Current token balance and value |
| **Queued Investments** | Investment orders waiting to become pending |
| **Pending Investments** | Investments awaiting approval |
| **Queued Redemptions** | Redemption orders waiting to become pending |
| **Pending Redemptions** | Redemptions awaiting approval |
| **Status** | Whitelisted/Frozen status indicators |

### Total Investors

The page header shows the total count of investors matching your current filters.

---

## Filtering and Searching

### Search by Address

Use the search box to find specific investors:
1. Enter a wallet address (full or partial)
2. Results filter in real-time
3. Clear the search to show all investors


### Filter by Network

Filter investors by blockchain network:
1. Click the network filter dropdown
2. Select one or more networks
3. Table updates to show only investors on selected networks

### Filter by Status

Filter by investor activity:
- **Only active investors**: Shows investors with non-zero holdings (default)
- **All investors**: Shows all whitelisted investors regardless of balance

---

## Adding New Investors

Before investors can deposit funds, they must be whitelisted for your share class.

### Step 1: Open the Add Investor Modal

Click the **Add new investor** button.

> **Note**: This button is only enabled for Hub Managers. If your share class uses a freeze-only restriction hook, whitelisting may not be supported.

### Step 2: Enter Investor Details

Fill in the required information:

**Investor Address** (required)
- Enter the investor's wallet address
- Must be a valid Ethereum address format
- Cannot be an address already whitelisted on the selected network

**Network** (required)
- Select which network to whitelist the investor on
- Investor must be whitelisted separately for each network they'll use

**Label** (optional)
- Add a human-readable name for the investor
- Examples: "Acme Capital", "John Smith", "Fund ABC"
- Labels are stored in pool metadata and visible to other managers

<img src="/assets/images/add_investor.png" alt="Add Investor" style={{maxWidth: '400px'}} />

### Step 3: Queue Multiple Investors

You can add multiple investors in a single transaction:
1. Fill in investor details
2. Click **Add to queue**
3. Repeat for additional investors
4. Review the queued list

<img src="/assets/images/investor_queue.png" alt="Investor Queue" style={{maxWidth: '400px'}} />


### Step 4: Save Changes

Click **Save changes** to submit the transaction:
- All queued investors are whitelisted in batch
- Labels are saved to pool metadata
- Reduces gas costs compared to individual transactions

---

## Editing Investors

Click on any investor row (or the edit icon) to open the Edit Investor modal.

### Available Actions

**Update Label**
- Change the investor's display name
- Useful for identifying investors by name or organization

**Freeze/Unfreeze**
- **Freeze**: Block the investor from making new deposits or redemptions
- **Unfreeze**: Restore the investor's ability to transact
- Frozen investors retain their existing holdings

**Remove from Whitelist**
- Remove the investor's access to make new transactions
- Existing holdings and pending orders are not affected

<img src="/assets/images/edit_investor.png" alt="Edit Investor" style={{maxWidth: '400px'}} />
---

## Understanding Investor Status

### Status Indicators

| Status | Meaning |
|--------|---------|
| **Whitelisted** | Investor can deposit and redeem |
| **Not whitelisted** | Investor cannot make new transactions |
| **Frozen** | Investor is temporarily blocked |

### Frozen vs Not Whitelisted

- **Frozen**: Temporary block, easily reversible. Used for compliance holds or temporary restrictions.
- **Not whitelisted**: Investor removed from access. Can be re-added if needed.

---

## Investor Holdings and Orders

### Holdings Display

Each investor's holdings show:
- **Value**: Holdings converted to pool currency (e.g., $50,000 USD)
- **Tokens**: Actual token balance (e.g., 5,000 tokens)

Holdings are calculated as: `Token Balance × Price Per Share`

### Order Columns

**Queued Orders**
- Orders waiting to become pending
- Will move to pending once previous orders are processed
- Tooltip explains the queuing mechanism

**Pending Orders**
- Active orders awaiting manager approval
- These appear in your Orders page for processing

---

## Multi-Network Whitelisting

Investors must be whitelisted separately on each network:

**Example**:
- Investor wants to deposit on Base and Arbitrum
- You must add them twice: once for Base, once for Arbitrum
- They appear as separate rows in the investors table

### Why Separate Whitelisting?

- Different networks have different smart contracts
- Compliance requirements may vary by jurisdiction
- Allows granular control over investor access

---

## Best Practices

### Onboarding New Investors

1. Complete KYC/AML verification off-chain
2. Collect investor's wallet address
3. Add investor to the appropriate network(s)
4. Assign a meaningful label for identification
5. Communicate vault addresses to the investor

### Managing Investor Labels

- Use consistent naming conventions
- Include identifying information (company name, investor ID)
- Update labels when information changes
- Labels help with audit and reporting

### Compliance Actions

**Temporary Hold**:
1. Freeze the investor
2. Investigate the issue
3. Unfreeze when resolved

**Permanent Removal**:
1. Process any pending orders first
2. Remove from whitelist
3. Document the action

---

## Common Questions

### Can an investor be on multiple networks?

Yes. Each network requires separate whitelisting. The same address can be whitelisted on multiple networks.

### What happens to holdings when I freeze an investor?

Holdings remain unchanged. The investor simply cannot make new deposits or redemptions until unfrozen.

### Can I bulk import investors?

Currently, investors must be added through the modal interface. You can queue multiple investors before submitting to batch the transaction.

### Why can't I add new investors?

Check the following:
- You must be a Hub Manager
- Your share class must support whitelisting
- Some restriction hooks (freeze-only) don't support whitelisting

### How do I transfer holdings between investors?

Direct transfer is not supported through this interface. The investor would need to redeem and the new investor would need to invest.

---

## Related Features

- [Orders](orders.md) - Process investor investments and redemptions
- [Holdings](holdings.md) - Manage fund liquidity for investor payouts
- [Vaults](vaults.md) - Configure where investors can deposit
