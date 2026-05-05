---
id: onchain-portfolio-manager
title: Onchain Portfolio Manager
category: subpage
contributors: <Jeroen:jeroen@centrifuge.io>
---

# Onchain Portfolio Manager

The Onchain Portfolio Manager lets pool operators and strategists execute pre-approved DeFi workflows on behalf of a Centrifuge pool. Workflows are multi-step sequences: withdraw from the balance sheet, deploy into protocols like Aave or Morpho, bridge across chains, and deposit received tokens back, all in a single atomic transaction.

Workflows are Weiroll scripts: ordered command sequences where each step can consume outputs from previous ones, enabling reactive strategies that read live onchain data (prices, balances) at execution time. Every script is authorized by the pool's Hub managers through a Merkle proof policy. Strategists can only execute scripts whose hash is included in their approved policy, and Hub managers can pin specific parameters so strategists cannot substitute addresses or modify amounts at execution time.

:::info Credits
The execution model builds on [Weiroll](https://github.com/weiroll/weiroll), originally developed by [@DeanEigenmann](https://x.com/deanpierce), [@matthewdif](https://x.com/matthewdif), and [@nicksdjohnson](https://x.com/nicksdjohnson). Script-level authorization was further developed by [Enso](https://www.enso.finance/). The policy leaf architecture for address-level filtering is inspired by [Boring Vault](https://github.com/Se7en-Seas/boring-vault) by Se7en-Seas.
:::

## Flow of funds

Assets invested into a Centrifuge pool go through the standard ERC-7540 async vault lifecycle: investors deposit, the pool operator approves deposits, and shares are issued. Once deposits are approved, the underlying assets sit on the pool's balance sheet, a non-custodial smart contract that holds all pool assets.

From there, Onchain PM workflows can batch multiple operations atomically:

1. Withdraw assets from the balance sheet
2. Deploy into underlying protocols (lending, staking, liquidity pools) or bridge to other chains
3. Deposit any received tokens (aTokens, LP tokens, receipt tokens) back to the balance sheet

No single party has unilateral access to withdraw funds outside of the approved Hub manager and workflow framework.

Assets moving across chains or sitting in async queues are tracked as ERC-6909 accounting tokens. When an asset leaves the balance sheet, a receipt token is minted in its place; when it arrives or settles, a corresponding liability token is recorded. Both are valued identically to the underlying asset, so NAV stays accurate throughout.

## Available workflows

A library of over 860 ready-to-use workflow templates covers lending and withdrawals on Aave V3 and Morpho, ERC-4626 and ERC-7540 vault interactions on Centrifuge, cross-chain USDC transfers via Circle CCTP, and USDT0 bridging.

New templates for additional protocols, assets, and chains can be added. The workflow format is open and extensible. If your use case requires a workflow that is not yet listed, reach out to the Centrifuge team or contribute a template directly.

## Security model

Every workflow execution is protected by multiple layers:

**Merkle proof policy**: only scripts approved in the strategist's policy tree can execute. The policy is a Merkle root assigned per strategist by Hub managers via cross-chain trusted calls, and can be updated or revoked at any time.

**Fixed state slots**: Hub managers can pin specific parameters (addresses, amounts) in a workflow script. Changing a pinned value invalidates the Merkle proof, preventing strategists from substituting addresses or redirecting funds at execution time.

**SlippageGuard**: enforces per-script slippage bounds and cumulative period loss limits across all touched assets.

**Circuit breaker**: rolling-window throughput limits and per-update value deviation caps, providing a hard ceiling on capital exposure per execution window.
