---
id: onchain-portfolio-manager
title: Onchain Portfolio Manager
category: subpage
contributors: <Jeroen:jeroen@centrifuge.io>
---

# Onchain Portfolio Manager

The Onchain Portfolio Manager (Onchain PM) is the execution layer for programmable capital allocation in Centrifuge vaults. It lets vault managers deploy assets into DeFi protocols on supported chains through authorized, multi-step strategies, with unified NAV accounting across all positions including in-transit assets.

Strategies can span swaps, bridging, vault deposits, leveraged loops, and flash loans, executed as a single atomic workflow. Hub managers approve complete workflows rather than individual calls, so execution wallets cannot reorder steps or substitute addresses without invalidating the authorization.

:::info Credits
The execution model builds on [Weiroll](https://github.com/weiroll/weiroll), originally developed by [@DeanEigenmann](https://x.com/deanpierce), [@matthewdif](https://x.com/matthewdif), and [@nicksdjohnson](https://x.com/nicksdjohnson). Script-level authorization was further developed by [Enso](https://www.enso.finance/). The policy leaf architecture for address-level filtering is inspired by [Boring Vault](https://github.com/Se7en-Seas/boring-vault) by Se7en-Seas.
:::

## Execution model

The Onchain PM uses [Weiroll](https://github.com/weiroll/weiroll), a minimal onchain scripting VM. A strategy is a sequence of commands, each encoded as a `bytes32` word containing:

- a 4-byte function selector
- call type flags (`call`, `staticcall`, `delegatecall`)
- input and output state indices
- the target contract address

Commands execute sequentially, threading data through a shared state array. This allows later steps to consume outputs from earlier ones: for example, using the result of a price oracle read as the input amount for a swap.

## Authorization

Scripts are authorized at the workflow level via a Merkle tree. The hash committed to the Merkle leaf incorporates:

- the exact command sequence
- a `stateBitmap` designating which state slots Hub managers pins (fixed) versus which are runtime-variable
- pre-committed callback hashes for flash loan steps

The `stateBitmap` gives Hub managers precise control: it can pin critical addresses and amounts while allowing strategists to supply live market data at execution time. Changing any pinned element invalidates the proof.

Policies are assigned per strategist by the Hub via cross-chain trusted calls, and can be updated or revoked at any time.

## Runtime guards

Three guards protect against strategy-level value loss:

**SlippageGuard** takes balance snapshots before and after execution, enforcing cumulative loss bounds over a rolling time window. This catches aggregate slippage across multi-step strategies.

**ApprovalGuard** verifies that no ERC-20 token approvals remain after a strategy runs. This prevents strategies from leaving residual spending permissions on external contracts.

**Circuit breaker** limits accumulated values such as cross-chain bridging volume over a period, providing a hard cap on capital exposure per execution window.

## In-flight asset accounting

Assets moving across chains or sitting in async vault queues are tracked using ERC-6909 accounting tokens. When an asset leaves the balance sheet (via bridge or async request), a receipt token is minted in its place. When it arrives or settles, a corresponding liability token is recorded.

Both tokens are valued identically to the underlying asset, so NAV stays accurate throughout transfers. The portfolio manager accounts for capital that is deployed, in transit, and settled in a single unified view.

## Supported workflows

The Onchain PM ships with a library of pre-authorized workflows covering the most common DeFi operations. Each entry in the table represents a set of Weiroll scripts that can be composed into multi-step strategies.

| Protocol | Actions | Workflows |
| --- | --- | --- |
| [Aave V3](https://aave.com/) | deposit, withdraw, account, flash loan | ~304 |
| [Morpho](https://morpho.org/) | deposit, withdraw | ~194 |
| [Centrifuge](https://centrifuge.io/) | deposit, request deposit, claim deposit, request redeem, claim redeem, account | ~182 |
| [Circle CCTP](https://www.circle.com/cross-chain-transfer-protocol) | bridge, bridge claim | ~120 |
| [USDT0](https://usdt0.to/) | bridge | ~80 |

## Flash loans

Nested callbacks enable multi-provider flash loan composition. Each callback script is pre-committed in the outer script's authorization hash, with the expected caller verified per invocation. This prevents unauthorized callback substitution even at the correct nesting depth.