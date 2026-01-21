---
sidebar_position: 7
---

# Managing investors

Before investors can deposit funds, they must be whitelisted for your share class. This guide covers adding, editing, and managing investor access.

![Investor Overview](/assets/images/investor_overview.png)

## Permissions required

| Action | Required Role |
|--------|--------------|
| View investors | All connected wallets |
| Add new investors | Hub Manager |
| Edit investor status | Hub Manager |
| Freeze/unfreeze investors | Hub Manager |

## The investors table

Navigate to **Investors** in the sidebar. The table shows:

| Column | Description |
|--------|-------------|
| **Network** | Blockchain where the investor is whitelisted |
| **Wallet** | Investor's wallet address (with label if assigned) |
| **Holdings** | Current token balance and value |
| **Queued Investments** | Investment orders waiting to become pending |
| **Pending Investments** | Investments awaiting approval |
| **Queued Redemptions** | Redemption orders waiting to become pending |
| **Pending Redemptions** | Redemptions awaiting approval |
| **Status** | Whitelisted/Frozen status |

## Adding new investors

### Step 1: Open the add investor modal

Click **Add new investor**.

> **Note**: This button is only enabled for Hub Managers.

### Step 2: Enter investor details

<img src="/assets/images/add_investor.png" alt="Add Investor" style={{maxWidth: '400px'}} />

**Investor Address** (required)
- Enter the investor's wallet address
- Must be a valid Ethereum address format

**Network** (required)
- Select which network to whitelist the investor on
- Investor must be whitelisted separately for each network they'll use

**Label** (optional)
- Add a human-readable name (e.g., "Acme Capital", "John Smith")
- Labels are stored in pool metadata and visible to other managers

### Step 3: Queue multiple investors

You can add multiple investors in a single transaction:

1. Fill in investor details
2. Click **Add to queue**
3. Repeat for additional investors
4. Review the queued list

<img src="/assets/images/investor_queue.png" alt="Investor Queue" style={{maxWidth: '400px'}} />

### Step 4: Save changes

Click **Save changes** to submit the transaction. All queued investors are whitelisted in batch.

## Editing investors

Click on any investor row to open the Edit Investor modal.

<img src="/assets/images/edit_investor.png" alt="Edit Investor" style={{maxWidth: '400px'}} />

### Available actions

**Update Label**
- Change the investor's display name
- Useful for identifying investors by name or organization

**Freeze/Unfreeze**
- **Freeze**: Block the investor from new deposits or redemptions
- **Unfreeze**: Restore the investor's ability to transact
- Frozen investors retain their existing holdings

**Remove from Whitelist**
- Remove the investor's access to make new transactions
- Existing holdings and pending orders are not affected

## Investor status

| Status | Meaning |
|--------|---------|
| **Whitelisted** | Investor can deposit and redeem |
| **Not whitelisted** | Investor cannot make new transactions |
| **Frozen** | Investor is temporarily blocked |

### Frozen vs not whitelisted

- **Frozen**: Temporary block, easily reversible. Used for compliance holds or temporary restrictions.
- **Not whitelisted**: Investor removed from access. Can be re-added if needed.

## Multi-network whitelisting

Investors must be whitelisted separately on each network.

**Example**: If an investor wants to deposit on Base and Arbitrum:
- Add them once for Base
- Add them again for Arbitrum
- They appear as separate rows in the table

### Why separate whitelisting?

- Different networks have different smart contracts
- Compliance requirements may vary by jurisdiction
- Allows granular control over investor access

## Filtering and searching

### Search by address

Use the search box to find specific investors by wallet address (full or partial).

### Filter by network

Click the network filter dropdown to show only investors on selected networks.

### Filter by status

- **Only active investors**: Shows investors with non-zero holdings (default)
- **All investors**: Shows all whitelisted investors regardless of balance

## Best practices

### Onboarding new investors

1. Complete KYC/AML verification offchain
2. Collect investor's wallet address
3. Add investor to the appropriate network(s)
4. Assign a meaningful label for identification
5. Communicate vault addresses to the investor

### Managing investor labels

- Use consistent naming conventions
- Include identifying information (company name, investor ID)
- Update labels when information changes

### Compliance actions

**Temporary Hold:**
1. Freeze the investor
2. Investigate the issue
3. Unfreeze when resolved

**Permanent Removal:**
1. Process any pending orders first
2. Remove from whitelist
3. Document the action

## Common issues

**Can't add new investors?**
- You must be a Hub Manager
- Some restriction hooks (freeze-only) don't support whitelisting

**What happens to holdings when I freeze an investor?**
Holdings remain unchanged. The investor simply cannot make new deposits or redemptions until unfrozen.

**Can an investor be on multiple networks?**
Yes. Each network requires separate whitelisting. The same address can be whitelisted on multiple networks.

**How do I transfer holdings between investors?**
Direct transfer is not supported. The investor would need to redeem, then the new investor would invest.

## Related

- [Processing investments](processing-investments.md) - Approve investor deposits
- [Processing redemptions](processing-redemptions.md) - Process investor withdrawals
- [Configuring vaults](configuring-vaults.md) - Where investors deposit
