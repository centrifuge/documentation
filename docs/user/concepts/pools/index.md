---
id: pools
title: Pools
category: subpage
contributors: <Graham Nelson:graham@k-f.co>
---

# Pools

A pool is the core structure that represents an investment product on Centrifuge. Each pool can contain one or more vaults, serve one or multiple investor groups, and be deployed across multiple chains.

Pools are created and managed by issuers or curators, who configure how capital is accepted, tracked, and distributed.

## What is a pool?

A pool brings together everything needed to run a tokenized investment strategy:

- Share tokens for investors
- Vaults to manage deposits and redemptions
- Pricing logic and valuation updates
- Permissions and investor rules

Each pool has a unique ID and is anchored on a single hub chain. From there, it can operate across any number of supported spoke chains.

## Pools can include:

- **Multiple vaults**, each with its own logic or currency
- **Multiple share classes**, such as junior/senior tranches
- **Custom permissions**, including investor whitelisting and redemption restrictions

## Share classes and share tokens

Each pool contains one or more **share classes**, which define how tokens are issued and what claims investors have.

- Every share class issues its own token
- Tokens follow the ERC-20 standard, with optional compliance rules
- Tokens can be permissioned or fully open depending on the configuration

For example, a pool might include:

- A permissioned senior share class for institutional investors
- A permissionless junior share class for open access

## Vaults within a pool

Each share class can be connected to one or more vaults. Vaults are deployed to spoke chains where users invest and redeem.

- Vaults define how assets flow into and out of the pool
- Vaults can use synchronous or asynchronous flows
- Assets are tracked and settled across chains through the Hub

For more, see the [Vaults](/user/vaults) section.

## Creating a pool

Pool creation is currently permissioned but will become open to all users. When creating a pool, managers choose:

- A hub chain (for central control)
- A base currency (e.g. USD, USDC)
- Share classes and their names, symbols, and metadata
- Permissioning rules for each share class

After setup, the pool is registered across selected networks and ready to accept deposits.

## Managing a pool

Pool managers are responsible for maintaining and updating:

- **Share prices**, which determine how much each token is worth
- **Asset prices**, especially in multi-asset vaults
- **Investment requests**, including approval, issuance, and redemption flows

All of this is coordinated through the Hub chain, even if users are interacting from other chains.

For asynchronous vaults, requests go through a lifecycle that includes:

1. **Pending**: The user submits a deposit or redemption
2. **Approved**: The request is confirmed and capital is unlocked
3. **Issued or revoked**: The share price is applied
4. **Fulfilled**: The vault is updated
5. **Claimed**: The user receives their shares or assets

Vaults using synchronous deposits (ERC-4626) skip this process, shares are minted immediately upon deposit.

## Summary

Pools are the foundation for every product in Centrifuge. They allow managers to launch customizable, multi-chain investment strategies with:

- Multiple share classes and investor types
- Vaults tailored to capital flow and liquidity needs
- Cross-chain operations, all coordinated through one hub

Whether you're launching a tokenized fund or investing in a diversified strategy, everything starts with a pool.