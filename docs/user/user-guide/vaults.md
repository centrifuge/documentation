---
sidebar_position: 6
---

# Vaults Management

Vaults are smart contracts that serve as entry points for investor transactions. They enable investors on various blockchain networks to deposit funds and request redemptions for your share class tokens.

## Overview

The Vaults feature allows Hub Managers to:
- View all deployed vaults across networks
- Deploy new vaults for additional asset/network combinations
- Enable or disable vaults for investor access
- Configure vault parameters (for synchronous vaults)

## Understanding Vaults

### What is a Vault?

A **vault** is an ERC-7540 compliant smart contract that:
- Accepts investor deposits in a specific asset (e.g., USDC)
- Exists on a specific blockchain network (e.g., Base, Arbitrum)
- Connects to your share class for token issuance
- Manages pending investment and redemption requests

### Vault Characteristics

Each vault is uniquely identified by:
- **Share Class**: The token class it issues
- **Network**: The blockchain where it's deployed
- **Asset**: The deposit currency it accepts

### Vault Types

There are two types of vaults with different behaviors:

#### Async Vaults (ERC-7540)

The standard vault type with **asynchronous** operations:

| Characteristic | Behavior |
|---------------|----------|
| Deposits | Queued for manager approval |
| Redemptions | Queued for manager approval |
| Share Issuance | After manager issues shares |
| Best For | Most RWA use cases |

**Flow**:
1. Investor deposits funds → Pending investment created
2. Manager approves and issues shares → Investor receives tokens

#### Sync-Invest Vaults (ERC-7540 + ERC-4626)

A hybrid vault type with **synchronous deposits**:

| Characteristic | Behavior |
|---------------|----------|
| Deposits | Instant share issuance |
| Redemptions | Still asynchronous (queued) |
| Max Deposit | Configurable limit |
| Price Oracle | Required for instant pricing |
| Best For | High liquidity, frequent deposits |

**Flow**:
1. Investor deposits → Shares issued immediately
2. Redemptions still go through approval process

---

## Viewing Vaults

### The Vaults Page

Navigate to **Vaults** in the sidebar. The page displays:
![Vaults Overview](/assets/images/vaults_overview.jpeg)


### Vault Information

Each vault row shows:

| Column | Description |
|--------|-------------|
| **Network** | The blockchain network (icon and name) |
| **Status** | Active (enabled) or Disabled |
| **Type** | Async or Sync-Invest |
| **Asset** | The deposit currency symbol |
| **Vault Address** | Contract address (clickable to explorer) |

### Filtering Vaults

Use the filters at the top to narrow your view:
- **Status**: Active, Disabled, or All
- **Type**: Async, Sync-Invest, or All
- **Asset**: Filter by deposit currency

---

## Vault States

### Active (Enabled/Linked)

When a vault is **active**:
- Investors can make deposits
- Investors can submit redemption requests
- Pending orders are visible in the Orders page
- The vault is "linked" to your share class

### Disabled (Unlinked)

When a vault is **disabled**:
- New deposits are blocked
- New redemption requests are blocked
- Existing pending orders remain (must be processed)
- The vault is "unlinked" from your share class

> **Important**: Disable a vault before processing remaining orders, not after. This prevents new orders while you clear the backlog.

---

## Deploying a New Vault

To accept deposits on a new network or for a new asset, deploy a vault.

### Prerequisites

- You must be a Hub Manager
- The network must be active for your pool
- The asset must be configured on that network

### Step 1: Click Add Vault

Click the **Add vault** button on the Vaults page.

<img src="/assets/images/add_vault.png" alt="Add Vault" style={{maxWidth: '500px'}} />

### Step 2: Select the Network

Choose from available networks:
- Ethereum
- Base
- Arbitrum
- Avalanche
- (Others as configured for your pool)

### Step 3: Select the Asset

Choose the deposit currency:
- USDC
- USDT
- Other configured stablecoins

### Step 4: Select the Vault Type

**Async-Invest**
- Standard two-step process
- Full manager control over share issuance

**Sync-Invest**
- Instant deposits with automatic share issuance
- Requires additional configuration (price oracle, max deposit)
- Redemptions remain asynchronous

### Step 5: Deploy the Vault

Click **Deploy** to create the vault contract. This:
1. Deploys the vault smart contract
2. Links it to your share class
3. Enables investor access

After deployment:
- The vault appears in your Vaults list as Active
- Investors can begin depositing through this vault
- Orders will appear in your Orders page

---

## Editing Vault Settings

Click on any vault row to open the vault detail modal.

### For All Vault Types

**Enable/Disable Toggle**

Control whether the vault accepts new orders:
- **Enabled**: Investors can deposit and redeem
- **Disabled**: No new orders accepted

<img src="/assets/images/update_vault.png" alt="Update Vault" style={{maxWidth: '500px'}} />

### For Sync-Invest Vaults Only

**Max Deposit (Max Reserve)**

Set the maximum amount that can be deposited simultaneously:
- Limits exposure to instant share issuance
- Prevents large surprise deposits
- Adjustable based on liquidity needs

<img src="/assets/images/update_sync_vault.png" alt="Update SyncVault" style={{maxWidth: '500px'}} />

### Vault Information Displayed

The detail modal also shows (read-only):
- Vault contract address 
- Deposit asset details
- Share token address
- Network information
- Pending investment amount
- Pending redemption amount

---

## Managing Vault Status

### When to Disable a Vault

Consider disabling a vault when:
- Pausing operations for maintenance
- Winding down a share class
- Migrating to a different vault configuration

### How to Disable a Vault

1. Click on the vault to open the detail modal
2. Toggle the **Enabled** switch to off
3. Confirm the transaction
4. The vault status changes to "Disabled"

### Restrictions on Enabling

You **cannot enable** a vault that has:
- Pending investments waiting for approval
- Pending redemptions waiting for approval

This prevents issues when re-enabling a vault with stale orders. Process pending orders first, then enable.

> **Note**: Disabling a vault is always allowed, even with pending orders. This lets you stop new orders while processing existing ones.

### Re-enabling a Vault

1. Open the vault detail modal
2. Toggle **Enabled** back on
3. Confirm the transaction
4. Investors can resume depositing

---

## Vault Types in Detail

### Async Vaults: Complete Control

**Advantages**:
- Full control over share issuance timing
- Can set price at issuance time
- No instant exposure to deposits

**Workflow**:
```
Investor Deposits → Pending → Manager Approves → Manager Issues Shares → Complete
```

**Use When**:
- You want to batch process deposits
- You need precise control over issuance pricing

### Sync-Invest Vaults: Instant Liquidity

**Advantages**:
- Better investor experience (instant shares)
- Reduced operational overhead for deposits
- Still maintains control over redemptions

**Limitations**:
- Requires configured price oracle
- Must set and monitor max deposit limits
- Instant exposure to deposit amounts

**Workflow**:
```
Investor Deposits → Shares Issued Immediately
Investor Redeems → Pending → Manager Approves → Manager Revokes → Complete
```

**Use When**:
- You want to reduce investor wait times
- You have reliable real-time pricing
- Your compliance allows instant issuance

### Choosing the Right Type

| Factor | Async | Sync-Invest |
|--------|-------|-------------|
| Deposit processing | Manual | Automatic |
| Redemption processing | Manual | Manual |
| Pricing control | Full | Oracle-based |
| Operational load | Higher | Lower (for deposits) |
| Compliance flexibility | More | Less |
| Investor experience | Slower | Faster |

---

## Vaults and Other Features

### Vaults → Orders

Investor actions through vaults create orders:
- Deposits create **Pending Investments**
- Redemptions create **Pending Redemptions**

Process these in the [Orders](orders.md) page.

### Vaults → Holdings

Vaults connect to your holdings:
- Deposits flow into holdings (after processing)
- Redemptions pay out from holdings

Manage liquidity in the [Holdings](holdings.md) page.

### Vaults → Investors

Vaults enforce investor restrictions:
- Only whitelisted investors can use vaults
- Investor status checked at deposit/redemption time

Manage investors in the Investors section.

---

## Multi-Chain Vault Strategy

### Deploying Across Networks

Consider your strategy for multi-chain deployment:

**Factors to Consider**:
- Where are your investors?
- Gas costs on each network
- Asset availability (e.g., USDC versions)
- Liquidity requirements per network

**Common Patterns**:
- Deploy on 2-3 major networks
- Match networks to investor locations

### Managing Multiple Vaults

With vaults on multiple networks:
- Orders appear grouped by network in the Orders page
- Holdings are managed per-network
- NAV updates apply across all networks

---

## Common Questions

### How many vaults can I have?

There's no hard limit. You can have multiple vaults across different:
- Networks (one per network per asset type)
- Asset types (different stablecoins)
- Vault types (async and sync can coexist for different assets)

### Can I have both vault types for the same asset?

You can deploy both vault types for the same asset on the same network, but **only one can be enabled at a time**. To switch types:
1. Disable the currently enabled vault
2. Enable the other vault type

### What happens to pending orders when I disable a vault?

Pending orders remain and must be processed. The vault just stops accepting new orders. Complete existing orders before disabling.

### Can investors see vault details?

Investors interact with vaults through their own interface. They don't need the management app - they use the investor portal or direct contract interaction.

---

## Related Features

- [Orders](orders.md) - Process deposits and redemptions from vaults
- [Holdings](holdings.md) - Manage funds that flow through vaults
- [Managers](managers.md) - Configure network-level permissions
- [NAV](nav.md) - Pricing affects sync-invest vault behavior
