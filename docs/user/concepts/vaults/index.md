---
id: vaults
title: Vaults
category: subpage
---

<!-- Will add some flow diagrams later -->

# Vaults

Vaults are the core building blocks of Centrifuge V3. Each vault defines how users can invest into a pool, how capital is managed, and how redemptions are handled.

Every pool can deploy one or more vaults, each with its own configuration and strategy. Vaults determine how share tokens are issued and how liquidity flows in and out of the system.

## What does a vault do?

A vault in Centrifuge:

- Accepts investor deposits in specific assets (e.g. USDC, DAI)
- Mints share tokens that represent ownership in the strategy
- Coordinates investment or redemption flows with the Hub
- Routes capital into other assets or protocols via the Balance Sheet

Each vault operates on a **spoke chain**, but is coordinated by the **Hub chain**.

## Vault types

Centrifuge supports two main vault types:

### Synchronous vaults

- Based on the ERC-4626 standard
- Deposits are executed immediately
- Share tokens are minted instantly
- Redemptions are queued and processed asynchronously

This vault type is familiar to many DeFi users, ideal for real-time access and integrations with other protocols.

### Asynchronous vaults

- Based on the ERC-7540 standard
- Both deposits and redemptions happen in two steps:
  - A request is submitted (`requestDeposit` / `requestRedeem`)
  - Later, the user completes the flow with a `claim`

These vaults allow for controlled liquidity flows, ideal for strategies that need time-based rebalancing or require manager approval.

### Hybrid flows

Some vaults use a **hybrid model** where deposits are synchronous (ERC-4626), but redemptions are handled asynchronously (ERC-7540). This allows users to get shares instantly while giving the pool manager more flexibility on liquidity outflows.

## Multi-asset vaults

Vaults can accept multiple investment currencies by using the ERC-7575 standard. This allows a single vault to hold several assets (e.g. USDC, DAI, wETH), while tracking ownership and share pricing accurately.

When using pooled vaults:

- Liquidity is aggregated across all currencies
- Assets are managed under a single balance sheet
- Share token supply is unified, regardless of input asset

## User experience

As an **investor**, you simply:

1. Choose a pool and a vault
2. Deposit the accepted currency
3. Receive share tokens (immediately or after a claim)
4. Redeem your shares when ready

Whether the vault is synchronous or asynchronous, the Centrifuge UI guides you through the right flow, showing when to request, claim, or wait for processing.

## Vault lifecycle

1. **Creation**  
   A pool deploys a vault on a chosen spoke chain, defining asset type, flow (sync/async), and any permissioning rules.

2. **Investment**  
   Users deposit accepted assets and receive share tokens.

3. **NAV updates**  
   The Hub updates pricing regularly to reflect the value of assets held in the vault.

4. **Redemption**  
   Users redeem their shares and receive their claimable assets based on vault timing and rules.

## Summary

Vaults are where users interact with pools. They determine how you invest, what you receive, and how liquidity is managed. Whether you’re building a strategy or allocating capital, vaults are the access point into Centrifuge.

- Choose synchronous for instant access
- Choose asynchronous for managed liquidity
- Choose pooled vaults for multi-asset strategies