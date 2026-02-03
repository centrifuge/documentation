---
sidebar_position: 5
---

# Access and permissions

Setting up your team, controlling who can do what, and configuring how investors interact with your pool.

## Why access control matters

Your pool handles real money. Proper access control ensures:
- **Security** - Only authorized people can move funds
- **Compliance** - Audit trail of who did what
- **Operations** - Right people have right permissions for their role

## The permission model

Centrifuge uses a **hub-and-spoke** model:

```
                    ┌─────────────────┐
                    │   Hub Manager   │
                    │   (Full Access) │
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
         ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│  Balance Sheet  │ │  Balance Sheet  │ │    Relayer      │
│    Manager      │ │    Manager      │ │                 │
│   (Base)        │ │   (Arbitrum)    │ │   (Off-ramp)    │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

## Roles explained

### Hub Manager

**What they can do:** Everything.

- Update NAV and pricing
- Approve investments and redemptions
- Issue and revoke shares
- Add/remove investors
- Configure vaults
- Add/remove other managers
- Change pool settings

**Who should be a Hub Manager:**
- Fund administrators
- Senior operations staff
- Authorized signers (often a Safe multi-sig)

**Where to configure:** Settings → Access

### Balance Sheet Manager

**What they can do:** Move funds on their assigned network.

- Deposit to holdings from their wallet
- Withdraw from holdings to their wallet
- Issue shares directly (bypass approval flow)
- Revoke shares directly (bypass approval flow)

**What they can't do:**
- Update NAV
- Approve orders
- Add investors
- Configure vaults

**Who should be a Balance Sheet Manager:**
- Treasury managers
- Operations staff responsible for specific networks
- On/off-ramp operators

**Where to configure:** Managers page

### Relayer

**What they can do:** Trigger withdrawals to pre-approved addresses.

- Execute withdrawals from On/Off-Ramp Manager to receivers
- Cannot withdraw to arbitrary addresses

**Who should be a Relayer:**
- Automated systems
- Operations staff handling off-ramp

**Where to configure:** Managers → On/Off-Ramp Manager

## Setting up your team

### Step 1: Add Hub Managers

During pool creation or after:

1. Navigate to **Settings → Access**
2. Click **Add hub manager**
3. Enter wallet address
4. Confirm transaction

**Best practice:** Use a Safe multi-sig as a Hub Manager for security.

### Step 2: Add Balance Sheet Managers

For each network where you need treasury operations:

1. Navigate to **Managers**
2. Click **Add balance sheet manager**
3. Select network(s)
4. Enter wallet address
5. Confirm transaction

**Note:** Same address can be Balance Sheet Manager on multiple networks, or use different addresses per network.

![Managers Overview](/assets/images/manager_overview.png)

### Step 3: Set up On/Off-Ramp (if needed)

If you're integrating with fiat rails:

1. **Deploy the manager**
   - Navigate to **Managers**
   - Click **Add on/off ramp manager**
   - Select network
   - Confirm deployment

2. **Configure deposit assets**
   - Expand the manager
   - Click **Add deposit asset**
   - Select USDC (or other asset)
   - Confirm

3. **Add relayers**
   - Click **Add relayer**
   - Enter relayer wallet address
   - Confirm

4. **Add receiver addresses**
   - Click **Add withdraw address**
   - Select asset
   - Enter receiver address (e.g., exchange, bank off-ramp)
   - Add label for identification
   - Confirm

## Permission summary

| Action | Hub Manager | Balance Sheet Manager | Relayer |
|--------|:-----------:|:--------------------:|:-------:|
| Update NAV | ✓ | | |
| Approve orders | ✓ | | |
| Issue/revoke shares | ✓ | ✓ (direct) | |
| Add investors | ✓ | | |
| Configure vaults | ✓ | | |
| Deposit to holdings | | ✓ | |
| Withdraw to wallet | | ✓ | |
| Withdraw to receivers | | | ✓ |
| Add/remove managers | ✓ | | |
| Change settings | ✓ | | |

## Configuring vaults

Vaults are where investors interact with your pool. You control:
- Which networks have vaults
- Which assets each vault accepts
- Whether deposits are instant or require approval

### Deploying a vault

1. Navigate to **Vaults**
2. Click **Add vault**
3. Select:
   - **Network** (Base, Arbitrum, etc.)
   - **Asset** (USDC, USDT, etc.)
   - **Vault type**:
     - **Async** - You approve all deposits before issuing shares
     - **Sync-Invest** - Instant deposits, you still approve redemptions
4. Deploy

### Enabling/Disabling vaults

Control whether investors can use a vault:

1. Click on a vault row
2. Toggle **Enabled**
3. Confirm

**Disabled vault:**
- No new deposits accepted
- No new redemption requests
- Existing pending orders still need processing

**Use case:** Pause deposits while processing backlog, or wind down a network.

### Vault types

**Async vaults (ERC-7540):**
- Deposits queue until you approve
- Full control over when shares are issued
- Best for: RWA funds, illiquid strategies, compliance-heavy offerings

**Sync-Invest vaults (ERC-4626 + ERC-7540):**
- Deposits mint shares instantly
- Redemptions still go through approval
- Best for: Liquid strategies, better investor UX

**When to use which:**

| Factor | Async | Sync-Invest |
|--------|-------|-------------|
| Pricing control | Full | Need price oracle |
| Investor experience | Slower | Instant deposits |
| Compliance review | Before issuance | After issuance |
| Operational load | Higher | Lower |

## Multi-network considerations

### Network-specific permissions

Each network has separate permissions:
- Balance Sheet Manager on Base ≠ Balance Sheet Manager on Arbitrum
- Must configure managers for each network

### Consistent team structure

**Option A: Same people, all networks**
- Add same addresses as Balance Sheet Manager on each network
- Simpler management

**Option B: Network specialists**
- Different people manage different networks
- More specialized, harder to coordinate

### Cross-network operations

Things that work across networks:
- NAV updates (propagate automatically)
- Investor whitelisting (but must whitelist per network)

Things that don't:
- Moving funds (need to bridge externally)
- Balance Sheet Manager actions (network-specific)

## Pool settings

Pool-level configuration that affects all share classes.

### Hub chain info (read-only)

- **Hub chain** - Where your pool is anchored (usually Ethereum)
- **Pool denomination** - Base currency for NAV (USD, USDC, etc.)

Set at creation, cannot change.

### Offchain holdings

Track assets outside the blockchain for reporting:

1. Navigate to **Settings → Structure**
2. Click **Upload holdings**
3. Upload CSV with your offchain assets
4. Review and confirm

**Note:** Offchain holdings are metadata—they don't automatically affect NAV. Include them in your NAV calculations manually.

### Token management

View and edit share classes:
- Token name
- Minimum investment
- Deployed networks

See [Managing tokens](managing-tokens.md) for details.

## Security best practices

### Use multi-sig for Hub Managers

A compromised Hub Manager wallet = full control of your pool.

**Recommendation:** Use a Safe multi-sig requiring 2-of-3 or 3-of-5 signatures.

### Minimize permissions

- Only give Balance Sheet Manager access to people who need treasury operations
- Only add relayers who need off-ramp access
- Review and remove departed team members immediately

### Regular audits

Monthly:
- Review all Hub Managers
- Review Balance Sheet Managers per network
- Review relayers and receiver addresses
- Remove any that shouldn't have access

### Document everything

- Who has what role and why
- Process for adding/removing access
- Incident response if wallet is compromised

## Common scenarios

### "Team member is leaving"

1. Remove as Hub Manager (Settings → Access)
2. Remove as Balance Sheet Manager (Managers)
3. Remove as Relayer if applicable
4. Rotate any shared credentials

### "Need to add a new network"

1. Deploy vault on new network
2. Add Balance Sheet Manager for that network
3. Whitelist investors for that network
4. Optionally deploy On/Off-Ramp Manager

### "Lost access to Hub Manager wallet"

If you have another Hub Manager address, use it to add a new one.

If no other Hub Managers exist, you've lost admin access—this is why multi-sig is critical.

## Related

- [Getting started](getting-started.md) - Initial team setup
- [Liquidity management](liquidity-management.md) - Using On/Off-Ramp Managers
- [Investor lifecycle](investor-lifecycle.md) - What Hub Managers do daily
