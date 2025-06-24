---
id: overview
title: Overview
category: subpage
contributors: <Jeroen:jeroen@k-f.co>
---

# Overview

Centrifuge V3 is an open, decentralized protocol for onchain asset management. Built on immutable smart contracts, it enables permissionless deployment of customizable tokenization products.

Build a wide range of use cases—from permissioned funds to onchain loans—while enabling fast, secure deployment. ERC-4626 and ERC-7540 vaults allow seamless integration into DeFi.

Using protocol-level chain abstraction, tokenization issuers access liquidity across any network, all managed from one Hub chain of their choice.

## Protocol

Centrifuge V3 operates on a [hub-and-spoke model](/developer/protocol/chain-abstraction/). Each pool chooses a single hub chain, and can tokenize and manage liquidity on many spoke chains.

![](./images/overview.png)

### Centrifuge Hub
* Manage and control your tokens from a single chain of your choice
* Consolidate accounting of all your vaults in a single place
* Control price oracles across all networks
* Manage investment requests from all investors

### Centrifuge Spoke
* Tokenize ownership using ERC-20 - customizable with modules of your choice
* Distribute to DeFi with ERC-4626 and ERC-7540 vaults
* Multiple vaults supported for pooled liquidity from different assets
* Support 1:1 token transfers between chains using burn-and-mint process