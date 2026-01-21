---
sidebar_position: 10
---

# Configuring vaults

Vaults are smart contracts that serve as entry points for investor transactions. They enable investors on various blockchain networks to deposit funds and request redemptions.

![Vaults Overview](/assets/images/vaults_overview.jpeg)

## Vault types

### Async vaults (ERC-7540)

The standard vault type with **asynchronous** operations:

| Characteristic | Behavior |
|---------------|----------|
| Deposits | Queued for manager approval |
| Redemptions | Queued for manager approval |
| Share Issuance | After manager issues shares |
| Best For | Most RWA use cases |

**Flow**: Investor deposits → Pending → Manager approves → Manager issues shares → Investor receives tokens

### Sync-Invest vaults (ERC-7540 + ERC-4626)

A hybrid vault type with **synchronous deposits**:

| Characteristic | Behavior |
|---------------|----------|
| Deposits | Instant share issuance |
| Redemptions | Still asynchronous (queued) |
| Max Deposit | Configurable limit |
| Price Oracle | Required for instant pricing |
| Best For | High liquidity, frequent deposits |

**Flow**: Investor deposits → Shares issued immediately (redemptions still go through approval)

### Choosing the right type

| Factor | Async | Sync-Invest |
|--------|-------|-------------|
| Deposit processing | Manual | Automatic |
| Redemption processing | Manual | Manual |
| Pricing control | Full | Oracle-based |
| Operational load | Higher | Lower (for deposits) |
| Investor experience | Slower | Faster |

## Viewing vaults

Navigate to **Vaults** in the sidebar. Each vault row shows:

| Column | Description |
|--------|-------------|
| **Network** | The blockchain network |
| **Status** | Active (enabled) or Disabled |
| **Type** | Async or Sync-Invest |
| **Asset** | The deposit currency |
| **Vault Address** | Contract address (clickable) |

### Filtering vaults

Use the filters to narrow your view:
- **Status**: Active, Disabled, or All
- **Type**: Async, Sync-Invest, or All
- **Asset**: Filter by deposit currency

## Deploying a new vault

To accept deposits on a new network or for a new asset, deploy a vault.

### Prerequisites

- You must be a Hub Manager
- The network must be active for your pool
- The asset must be configured on that network

### Step 1: Click Add vault

<img src="/assets/images/add_vault.png" alt="Add Vault" style={{maxWidth: '500px'}} />

### Step 2: Select the network

Choose from available networks (Ethereum, Base, Arbitrum, Avalanche, etc.)

### Step 3: Select the asset

Choose the deposit currency (USDC, USDT, etc.)

### Step 4: Select the vault type

**Async-Invest**
- Standard two-step process
- Full manager control over share issuance

**Sync-Invest**
- Instant deposits with automatic share issuance
- Requires price oracle and max deposit configuration

### Step 5: Deploy

Click **Deploy** to create the vault contract. After deployment:
- The vault appears in your Vaults list as Active
- Investors can begin depositing
- Orders will appear in your Orders page

## Editing vault settings

Click on any vault row to open the detail modal.

### For all vault types

<img src="/assets/images/update_vault.png" alt="Update Vault" style={{maxWidth: '500px'}} />

**Enable/Disable Toggle**
- **Enabled**: Investors can deposit and redeem
- **Disabled**: No new orders accepted (existing pending orders remain)

### For Sync-Invest vaults only

<img src="/assets/images/update_sync_vault.png" alt="Update SyncVault" style={{maxWidth: '500px'}} />

**Max Deposit (Max Reserve)**
- Limits the maximum amount that can be deposited at once
- Prevents large surprise deposits
- Adjustable based on liquidity needs

## Managing vault status

### When to disable a vault

- Pausing operations for maintenance
- Winding down a share class
- Migrating to a different vault configuration

### How to disable

1. Click on the vault to open the detail modal
2. Toggle **Enabled** to off
3. Confirm the transaction

> **Note**: Disabling a vault is always allowed, even with pending orders. This lets you stop new orders while processing existing ones.

### Restrictions on enabling

You **cannot enable** a vault that has:
- Pending investments waiting for approval
- Pending redemptions waiting for approval

Process pending orders first, then enable.

### Re-enabling a vault

1. Process all pending orders
2. Open the vault detail modal
3. Toggle **Enabled** back on
4. Confirm the transaction

## Vault states

### Active (Enabled/Linked)

- Investors can make deposits
- Investors can submit redemption requests
- Pending orders are visible in the Orders page
- The vault is "linked" to your share class

### Disabled (Unlinked)

- New deposits are blocked
- New redemption requests are blocked
- Existing pending orders remain (must be processed)
- The vault is "unlinked" from your share class

## Multi-chain vault strategy

### Deploying across networks

Consider:
- Where are your investors?
- Gas costs on each network
- Asset availability (e.g., USDC versions)
- Liquidity requirements per network

**Common patterns:**
- Deploy on 2-3 major networks
- Match networks to investor locations

### Managing multiple vaults

With vaults on multiple networks:
- Orders appear grouped by network in the Orders page
- Holdings are managed per-network
- NAV updates apply across all networks

## Common issues

**How many vaults can I have?**
No hard limit. You can have multiple vaults across different networks and asset types.

**Can I have both vault types for the same asset?**
Yes, but only one can be enabled at a time. To switch types, disable the current vault and enable the other.

**What happens to pending orders when I disable a vault?**
Pending orders remain and must be processed. The vault just stops accepting new orders.

## Related

- [Processing investments](processing-investments.md) - Process deposits from vaults
- [Processing redemptions](processing-redemptions.md) - Process redemptions from vaults
- [Managing holdings](managing-holdings.md) - Funds that flow through vaults
