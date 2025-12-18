---
id: vault
title: Vault
sidebar_position: 4
---

# Vault

Vaults are how users interact with pools in Centrifuge. They define how assets are deposited, redeemed, and allocated across strategies.

Each share token is backed by one or more vaults. These vaults live on spoke chains, allowing users to invest directly from the chain of their choice. Vaults are configured to support either synchronous or asynchronous flows.

## Vault types

Centrifuge supports two types of vaults. Pool managers choose the right type depending on their product needs.

### Synchronous vaults

Synchronous vaults use the ERC-4626 standard. When users deposit, they immediately receive share tokens. These vaults offer real-time minting and are best suited for highly liquid strategies where on-demand issuance is feasible.

- Real-time minting  
- Easy DeFi integration  
- Ideal for liquid, onchain strategies

### Asynchronous vaults

Asynchronous vaults follow the ERC-7540 standard. In this model, deposits and redemptions are processed through a request lifecycle managed by the hub chain. Users submit a request and receive or redeem tokens after it’s been approved and priced.

- Request-based flow (invest and redeem)  
- Suited for RWA strategies with offchain components  
- Requests are queued, approved, priced, and fulfilled  

## Multi-asset support

A single share token can be backed by **multiple vaults**, each accepting a different asset. For example, one share class might accept both USDC and DAI by deploying two separate vaults—each linked to the same token.

This setup is supported by [ERC-7575], allowing flexible entry points while consolidating capital into one balance sheet.

- Users can deposit different currencies  
- Capital is aggregated and managed centrally  
- Investors all receive the same share token regardless of entry asset  

## How vaults connect to the protocol

Each vault is deployed to a spoke chain and connected to a pool via:

- A defined share class and share token  
- Asset configuration (what currencies are accepted)  
- Logic for investing, pricing, and redemption  

Vaults can interact with external DeFi protocols or offchain strategies, depending on how the balance sheet and permissions are configured.
