---
id: curator
title: Curator
category: subpage
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---

import onchainPM from './images/onchainPM.jpg';
import subscribe from './images/subscribe.jpg';

# Curator guide

Curators design and operate allocation strategies using the same infrastructure issuers use for tokenized products. In the curator role, they focus on allocating a pool's capital across onchain venues — including other tokenized products, DeFi protocols and liquidity across networks — rather than originating the underlying assets. The resulting strategy can be fully onchain or form the onchain allocation layer of a blended product.

This guide covers what is specific to curators: executing a strategy through the Onchain Portfolio Manager (Onchain PM). Everything else about operating the product — tokens, vaults, investors, pricing — works as described in the [issuer guide](/user/issuer).

## What curators do

A curated product uses the same pool structure as other products: investors subscribe and redeem through vaults and hold the share token of their share class. What distinguishes the curator role is how capital is allocated. The curator can compose a strategy from onchain building blocks, either as a fully onchain product or as part of a broader blended strategy:

- **Other tokenized products** — subscribing to the share tokens of other pools, in fund-of-funds or feeder structures.
- **DeFi venues** — deploying liquidity into established protocols, such as lending markets or yield strategies.
- **Multiple networks** — placing the product's liquidity where it is needed, across the networks the product operates on.

These onchain positions make the strategy auditable end to end: holdings and operations are recorded onchain, while their accounting values are reflected in the pool's balance sheet as prices are updated.

## The Onchain PM

Executing a strategy involves recurring operations — subscribing, redeeming, rebalancing, moving liquidity. The Onchain PM is the pool's execution layer for these operations, built around a separation of duties:

- **The manager defines what is allowed.** The manager selects the workflows available to each operator and configures their parameters and limits.
- **The operator executes within those boundaries.** An authorized operator runs the approved workflows when the strategy requires it. Operations outside the approved set, or beyond the configured limits, do not execute.

Curator describes responsibility for the investment strategy, while manager and operator describe onchain permissions. Depending on the operating model, the curator may act as manager or operator, or delegate execution to another party. These boundaries are enforced onchain, allowing routine operations to be delegated without granting unrestricted control over the pool's configuration or assets.

Before submission, the app can simulate a workflow and preview its expected effect based on the current onchain state. The steps submitted in a transaction execute atomically on the originating network. Crosschain operations initiate a separate settlement process on the destination network.

<img
  src={onchainPM}
  className="screenshot"
/>
> Workflow section.

For the underlying mechanism, see the [onchainPM](/developer/protocol/managers/merkle-proof-manager/) in the developer documentation.

## What can be automated

The workflow catalog turns recurring operations into repeatable, pre-approved flows. An operator triggers a workflow, which then executes its configured sequence of actions:

- **Subscribing to other products** — workflows can cover each stage of the investment lifecycle: subscribing, claiming share tokens, requesting a redemption and claiming the resulting assets.
- **Moving liquidity across networks** — transferring the product's stablecoins or share tokens between the networks it operates on.
- **Price updates** — updating the recorded value of onchain positions so that the pool's net asset value (NAV) and share price can reflect them accurately.
- **DeFi operations** — deploying and withdrawing liquidity in supported external protocols.

### Guardrails

Approved workflows operate within controls configured by the manager:

- **Policy restrictions** — only workflows assigned to the operator can execute.
- **Fixed parameters** — addresses, assets or other sensitive inputs can be fixed when the workflow is approved.
- **Slippage protection** — limits acceptable value loss per execution and cumulatively over a period.
- **Circuit breakers** — rolling limits can cap how much value moves within a configured period.

If an onchain guardrail rejects a workflow, the transaction reverts and its local actions are rolled back.

<img
  src={subscribe}
  className="screenshot"
/>
> Workflow execution view with its simulation summary.

## The result

Curators can separate strategy control from routine execution while retaining onchain enforcement and auditability. Managers define the permitted workflows and guardrails, while operators execute them without receiving unrestricted control over the pool's assets.
