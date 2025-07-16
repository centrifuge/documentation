---
id: multi-chain 
title: Multi-Chain Protocol 
contributors: <Graham Nelson:graham@k-f.co>
---
# Multi-Chain Protocol

Centrifuge V3 is built to work seamlessly across multiple blockchains. Using a hub-and-spoke model, the protocol gives users a unified experience regardless of which network they use.

This means:

- You can interact with vaults on any supported chain
- Managers only need one hub to coordinate everything
- Tokens and accounting stay consistent, even across chains


## What problem does this solve?

Many protocols issue separate tokens on every chain. This leads to duplication and unnecessary complexity.

Each network needs its own:

- Token contracts
- Pricing oracles
- Wallet setup and funding
- Manual reconciliation

This makes scaling difficult and creates a fragmented experience for both users and managers.

## Centrifuge’s approach

Centrifuge solves this with a single point of control: the hub chain.

- The hub manages the rules, prices, and accounting for your pool
- Vaults are deployed to spoke chains where users interact and capital flows
- Everything stays connected and consistent across chains

## If you’re a pool manager

- Choose one hub chain to manage your pool
- Deploy vaults on the chains where your users and liquidity are
- Avoid duplicating infrastructure or managing each chain separately

## If you’re an investor

- Deposit and redeem on the chain you prefer
- No need to know where the hub is
- Gas costs can be covered by the pool
- You get a consistent experience across networks

## What happens behind the scenes?

The Centrifuge protocol handles all the complexity:

- Cross-chain messages are sent and verified securely
- Messages are bundled together to reduce gas costs
- If something fails, it is automatically retried
- You do not need to hold gas tokens on every chain

## Why it matters

Centrifuge’s multi-chain design gives you:

- One connected experience across Ethereum, Base, Arbitrum, and other networks
- Vaults that work the same way no matter where you access them
- Pools that are easy to scale and manage across chains

This architecture makes Centrifuge ready for a multi-chain world without introducing additional burden for users or managers.

> See the [developer documentation on chain abstraction](/developer/protocol/chain-abstraction/)