---
id: offering-creation
title: Offering Creation
---

# Offering Creation

This guide covers the process of launching an asset-backed issuance using Centrifuge's RWA Launchpad.

## Issuance workflow

### 1. Configure your product

Use the Launchpad interface to configure:

- **Pool details**: Type, issuer info, providers, ratings.
- **Asset type**: Bond, equity, real estate, etc.
- **Share class structure**: Junior/senior tranches, token names.
- **Compliance rules**: Allowlist providers, jurisdictional controls.
- **Manager access controls**: Who can update the pool.

### 2. Deploy your pool

Launchpad deploys a suite of protocol-native contracts:

- ERC-20 share tokens with optional ERC-1404 restrictions
- Vaults using ERC-4626 (synchronous) or ERC-7540 (asynchronous)
- Pooled vaults using ERC-7575 to aggregate capital
- On/Off Ramp Manager to control asset movements
- Fee, accounting, and reporting modules

All contracts are upgrade-free and immutable once deployed.

### 3. Set up on/off-ramping

Configure on-chain and off-chain capital flows:

- **Onramp**: Any user can deposit approved ERC20 tokens into the pool.
- **Offramp**: Only authorized relayers can initiate withdrawals to predefined recipient addresses.

This ensures compliance and control over fund flows.

### 4. Launch your issuance

Once contracts are deployed and configured:

- Begin accepting deposits from whitelisted or open users.
- Mint and distribute share tokens.
- Fund vaults with capital or asset-backed flows.
