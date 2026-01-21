---
id: manager
title: Manager Guide
---

# Manager guide

This guide helps managers tokenize and operate investment products using Centrifuge. It covers the end-to-end process from launching an offering to day-to-day operations.

**Manager App:** [https://manage.centrifuge.io/](https://manage.centrifuge.io/)

## What managers do

Managers (also called issuers or fund administrators) are responsible for:

- **Launching offerings** - Configure and deploy tokenized investment products
- **Managing NAV** - Update pricing and valuations
- **Processing orders** - Approve investments and redemptions
- **Managing investors** - Whitelist and manage investor access
- **Managing liquidity** - Deposit and withdraw from holdings
- **Configuring access** - Set up team permissions across networks

## Getting started

### Prerequisites

Before launching an offering, ensure you have:

1. **KYC/AML processes** - Offchain verification for your investors
2. **Asset documentation** - Details about your underlying assets
3. **Wallet setup** - A secure wallet (EOA, Safe multi-sig, or MPC custody)

### Launching an offering

The RWA Launchpad provides a guided workflow to configure and deploy your tokenized product.

#### Step 1: Configure your product

Use the Launchpad interface to configure:

- **Pool details** - Type, issuer info, providers, ratings
- **Asset type** - Bond, equity, real estate, credit, etc.
- **Share class structure** - Single class or tranched (junior/senior)
- **Compliance rules** - Allowlist requirements, jurisdictional controls
- **Manager access** - Who can perform operations

<details>
<summary>Pool details configuration</summary>

![Pool Details](/assets/images/page1.png)

</details>

<details>
<summary>Asset and share class configuration</summary>

![Share Class Details](/assets/images/page2.png)

</details>

<details>
<summary>Access control configuration</summary>

![Access Control](/assets/images/page3.png)

</details>

#### Step 2: Deploy your pool

The Launchpad deploys protocol-native smart contracts:

- **Share tokens** - ERC-20 with optional ERC-1404 restrictions
- **Vaults** - ERC-4626 (synchronous) or ERC-7540 (asynchronous)
- **Pooled vaults** - ERC-7575 for multi-asset support
- **On/Off-Ramp Manager** - Controls asset movements
- **Modules** - Fee, accounting, and reporting

All contracts are immutable once deployed.

#### Step 3: Configure on/off-ramping

Set up capital flow controls:

- **On-ramp** - Users deposit approved ERC-20 tokens into vaults
- **Off-ramp** - Authorized relayers withdraw to predefined addresses

See [Configuring access](configuring-access.md) for detailed setup.

#### Step 4: Launch

Once deployed and configured:

1. Begin accepting deposits from whitelisted investors
2. Mint and distribute share tokens
3. Fund vaults with capital

## Daily operations

Once your offering is live, your workflow typically includes:

| Task | Frequency | Guide |
|------|-----------|-------|
| Monitor dashboard | Daily | [Dashboard overview](dashboard.md) |
| Update NAV | Daily/Weekly | [Managing NAV](nav-and-pricing.md) |
| Process investments | As needed | [Processing investments](processing-investments.md) |
| Process redemptions | As needed | [Processing redemptions](processing-redemptions.md) |
| Manage investors | As needed | [Managing investors](managing-investors.md) |
| Manage liquidity | As needed | [Managing holdings](managing-holdings.md) |

## Manager permissions

Different roles have different capabilities:

| Role | Capabilities |
|------|-------------|
| **Hub Manager** | Full access - NAV, orders, investors, settings |
| **Balance Sheet Manager** | Holdings deposits/withdrawals, direct issue/revoke |
| **Relayer** | Withdraw to pre-approved addresses |

See [Configuring access](configuring-access.md) for permission setup.

## Guides

<div className="card-grid">
  <a className="card-tile" href="/user/manager/workflows">
    <h3>Example workflows</h3>
    <p>End-to-end walkthroughs for common operations.</p>
  </a>
  <a className="card-tile" href="/user/manager/nav-and-pricing">
    <h3>Managing NAV</h3>
    <p>Update share prices and valuations across all networks.</p>
  </a>
  <a className="card-tile" href="/user/manager/processing-investments">
    <h3>Processing investments</h3>
    <p>Approve deposits and issue shares to investors.</p>
  </a>
  <a className="card-tile" href="/user/manager/processing-redemptions">
    <h3>Processing redemptions</h3>
    <p>Approve redemptions and process investor payouts.</p>
  </a>
  <a className="card-tile" href="/user/manager/managing-investors">
    <h3>Managing investors</h3>
    <p>Whitelist investors and manage their access.</p>
  </a>
  <a className="card-tile" href="/user/manager/managing-tokens">
    <h3>Managing tokens</h3>
    <p>View and configure share classes and token settings.</p>
  </a>
  <a className="card-tile" href="/user/manager/managing-holdings">
    <h3>Managing holdings</h3>
    <p>Deposit and withdraw funds, maintain liquidity.</p>
  </a>
  <a className="card-tile" href="/user/manager/configuring-vaults">
    <h3>Configuring vaults</h3>
    <p>Deploy and manage vaults across networks.</p>
  </a>
  <a className="card-tile" href="/user/manager/configuring-access">
    <h3>Configuring access</h3>
    <p>Set up managers and permissions for your team.</p>
  </a>
  <a className="card-tile" href="/user/manager/pool-settings">
    <h3>Pool settings</h3>
    <p>Manage share classes, offchain holdings, and hub managers.</p>
  </a>
</div>
