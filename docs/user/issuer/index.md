---
id: issuer
title: Issuer
contributors: <Graham Nelson:graham@k-f.co>
---

# Issuers

This guide helps issuers tokenize real-world assets (RWA) using Centrifuge V3’s RWA Launchpad. It walks through the end-to-end process of launching an asset-backed issuance, from setup to deployment. 

## Overview

The RWA Launchpad is a modular suite of institutional-grade smart contracts for launching tokenized financial products. Issuers can configure asset types, fund structures, and operational logic without writing custom code.

Supported use cases include:

- Tokenized bonds, equity, credit, real estate, and indices
- Fund structures like single-fund, fund-of-funds, or structured credit
- Operational logic such as on/off-ramping, fee distribution, waterfalls, and performance reporting

<img src="https://gateway.pinata.cloud/ipfs/bafybeieu2z5spguobpdeoyeyc7ff5vcoscoa2s4zlvdyt3j76jhviwz5si" alt="RWA Launchpad" width="800" style={{borderRadius: '8px'}} />


## Issuance workflow

### 1. Configure your product

Use the Launchpad interface to configure:

- All pool details (type, issuer info, providers, ratings etc)
<details>
<summary>Show pool details UI</summary>

![Pool Details](https://gateway.pinata.cloud/ipfs/bafkreifgfchfoqbwfqbp6rdstol6wgkwb7iobmpzqlstvpzxit2pxmjfxq)

</details>
- Asset type (e.g. bond, equity, real estate)
- Share class structure (e.g. junior/senior tranches)
<details>
<summary>Asset type & Share class structure UI </summary>

![Pool Details](https://gateway.pinata.cloud/ipfs/bafkreidzhorp36q33djipol2ehqp74x3cgs3n5jqursltvnrjneima35f4)

</details>

- Compliance rules (e.g. allowlist, jurisdictional controls)
- Manager access controls 
<summary>Access Contol UI </summary>
<details>
![Pool Details](https://gateway.pinata.cloud/ipfs/bafkreiewkztvw5izthzpxztxkxrhb5w5gd5hq3ruitkui42ysncfoviszu)

</details>

### 2. Deploy your pool

Launchpad deploys a suite of protocol-native contracts:

- ERC-20 share tokens with optional ERC-1404 restrictions
- Vaults using ERC-4626 (for synchronous deposits) or ERC-7540 (for asynchronous flows)
- Optional pooled vaults using ERC-7575
- On/Off Ramp Manager to control asset movements
- Fee, accounting, and reporting modules

All contracts are upgrade-free and immutable once deployed.

### 3. Set up on/off-ramping

Configure on-chain and off-chain capital flows:

- **Onramp**: any user can deposit approved ERC20 tokens into the pool.
- **Offramp**: only authorized relayers can initiate withdrawals to predefined recipient addresses.

This ensures compliance and control over fund flows.

### 4. Launch your issuance

Once contracts are deployed and configured:

- Begin accepting deposits from whitelisted or any users depending on your configuration
- Mint and distribute share tokens
- Fund the vaults with capital or asset-backed flows

Deposits and redemptions will follow the configured vault logic:
- **Synchronous deposits**: users receive shares immediately (ERC-4626)
- **Asynchronous redemptions**: requests are queued and processed via the Hub (ERC-7540)

## Vault logic

Centrifuge supports two primary vault types:

- **Asynchronous vaults (ERC-7540)**  
  Both deposits and redemptions are queued via a request system and managed through the Centrifuge Hub.

- **Synchronous deposit vaults**  
  Deposits use ERC-4626 and are fulfilled instantly. Redemptions remain asynchronous via ERC-7540.

Issuers can combine multiple vaults into a single pool using the ERC-7575 pooled vault standard. For example, synchronous investments and asynchronous redemptions. 

## Post-launch operations

Track the performance and operations of your issuance:

- Issuer Dashboard

![Issuer Dashboard](https://gateway.pinata.cloud/ipfs/bafkreigmer5ns34nz2pfjyg62dt6czdfqxazpjvdtdjlwx7knpuc24eqmq)

- Live reporting on NAV, share price, and token supply

![Update Dashboard](https://gateway.pinata.cloud/ipfs/bafkreidozv26pnarp75gv5m2th7iyvjyfzc6opb4pdj3zm5tww3w2llayq)


## Extensibility

Launchpad products are fully modular. Issuers can integrate:

- Custom relayers and compliance agents
- Fee structures and waterfall models
- Automated yield strategies
- Interoperability with DeFi protocols

## Benefits for issuers

- **Fast time to market**: Launch in days, not months
- **Secure and immutable**: Smart contracts are non-upgradeable and decentralized
- **Composability**: Plug into the broader DeFi ecosystem
- **Customizability**: Tailor every aspect of your product to fit your asset and investor needs
