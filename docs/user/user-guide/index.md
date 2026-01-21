# Centrifuge Management App - User Guide

Welcome to the Centrifuge Management App documentation. This guide is designed for fund operations teams managing tokenized real-world assets on the Centrifuge platform.

## What is the Centrifuge Management App?

The Centrifuge Management App is a web-based interface for managing your tokenized fund operations, including:

- Processing investor investments and redemptions
- Managing net asset value (NAV) and share pricing
- Controlling fund liquidity across multiple blockchain networks
- Configuring access permissions for your operations team

![Centrifuge Management App Dashboard](/assets/images/manage_dashboard.jpeg)

---

## Getting Started

### Prerequisites

Before using the Management App, ensure you have:

1. **A connected wallet**: MetaMask, Safe, Rabby, or another supported wallet
2. **Manager permissions**: Hub Manager or Balance Sheet Manager access to your pool
3. **The correct network**: Ensure your wallet is connected to the appropriate network

### Connecting Your Wallet

1. Navigate to the Management App
2. Click **Connect Wallet**
3. Select your wallet provider
4. Approve the connection

For institutional operations, we recommend using a [Safe (multi-sig) wallet](custody-setup.md).

---

## Core Features

### [Dashboard](dashboard.md)

A consolidated overview of your share class showing NAV, pending orders, and holdings at a glance.

**Key Information**:
- NAV summary and performance chart
- Pending and approved order totals
- Holdings preview

---

### [NAV Management](nav.md)

Update the Net Asset Value for your share classes. NAV determines the price per share that investors receive.

**Key Operations**:
- Update total NAV value
- Set price per share directly
- View pricing across all networks

---

### [Orders Processing](orders.md)

Process investor investments and redemptions through a two-stage workflow.

**Key Operations**:
- Approve pending investments
- Issue shares to investors
- Approve pending redemptions
- Revoke shares and process payouts

---

### [Investors Management](investors.md)

Manage investor whitelisting, view positions, and monitor investor activity.

**Key Operations**:
- Add new investors to the whitelist
- View investor holdings and orders
- Freeze/unfreeze investor access
- Search and filter investors

---

### [Holdings Management](holdings.md)

Manage the assets that back your share class across multiple networks.

**Key Operations**:
- View holdings by asset and network
- Deposit funds into holdings
- Withdraw funds from holdings
- Create new holdings on additional networks

---

### [Vaults Configuration](vaults.md)

Configure the smart contracts that serve as entry points for investor transactions.

**Key Operations**:
- Deploy new vaults on networks
- Enable/disable vaults
- Configure vault parameters
- Manage vault types (Async vs Sync-Invest)

---

### [Managers Setup](managers.md)

Control who can perform various operations on your pool.

**Key Operations**:
- Add/remove Hub Managers
- Configure Balance Sheet Managers per network
- Set up On/Off-Ramp Managers
- Configure Merkle Proof Managers

---

### [Pool Settings](settings.md)

Configure pool-level settings including structure, access, and off-chain holdings.

**Key Operations**:
- View hub chain and denomination
- Upload off-chain holdings CSV
- Manage tokens (share classes)
- Configure hub managers

---

### [Custody Setup](custody-setup.md)

Configure institutional custody solutions for secure fund operations.

**Key Topics**:
- MPC custody (Fireblocks, Fordefi)
- Safe (multi-sig) wallets
- Transaction approval workflows

---

## Understanding Permissions

| Role | Capabilities |
|------|-------------|
| **Hub Manager** | Full access: NAV, orders, investors, vaults, managers |
| **Balance Sheet Manager** | Network-specific: deposits, withdrawals, direct issue/revoke |
| **Relayer** | Limited: withdrawals to approved addresses only |

---

## Daily Operations Workflow

A typical daily workflow for fund operations:

1. **Review Orders** - Check for pending investments and redemptions
2. **Update NAV** - Set current asset values for accurate pricing
3. **Approve Orders** - Process pending investments and redemptions
4. **Issue/Revoke Shares** - Complete approved orders
5. **Monitor Holdings** - Ensure adequate liquidity for redemptions
6. **Review Transactions** - Verify completed operations

---

## Multi-Chain Operations

The Management App supports operations across multiple blockchain networks:

- **Ethereum** (Hub) - Primary network for pool management
- **Base** - Layer 2 for cost-effective operations
- **Arbitrum** - Layer 2 alternative
- **Avalanche** - Additional chain support

Each network may have separate:
- Balance Sheet Managers
- On/Off-Ramp Managers
- Vaults and Holdings

---

## Support and Resources

### Getting Help

- Review this documentation for common workflows
- Contact your Centrifuge representative for technical support
- Visit [centrifuge.io](https://centrifuge.io) for platform information

### Documentation Updates

This documentation is updated regularly. Check for new features and workflow improvements.

---

## Quick Reference

| Task | Go To | Required Role |
|------|-------|---------------|
| View operations summary | [Dashboard](dashboard.md) | Any |
| Update share price | [NAV](nav.md) | Hub Manager |
| Approve investor deposits | [Orders](orders.md) | Hub Manager |
| Issue shares | [Orders](orders.md) | Hub Manager |
| Approve redemptions | [Orders](orders.md) | Hub Manager |
| Process payouts | [Orders](orders.md) | Hub Manager |
| Add new investor | [Investors](investors.md) | Hub Manager |
| View investor positions | [Investors](investors.md) | Any |
| Deposit funds | [Holdings](holdings.md) | Balance Sheet Manager |
| Withdraw funds | [Holdings](holdings.md) | Balance Sheet Manager / Relayer |
| Deploy a vault | [Vaults](vaults.md) | Hub Manager |
| Add team members | [Managers](managers.md) | Hub Manager |
| Upload off-chain holdings | [Settings](settings.md) | Hub Manager |
| Manage share classes | [Settings](settings.md) | Hub Manager |
| Configure custody | [Custody Setup](custody-setup.md) | - |
