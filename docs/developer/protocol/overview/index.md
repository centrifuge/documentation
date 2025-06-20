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

Centrifuge V3 operates on a hub-and-spoke model. Each pool chooses a single hub chain, and can tokenize and manage liquidity on many spoke chains.

### Centrifuge Hub
* Manage and control your tokens from a single chain of your choice
* Consolidate accounting of all your vaults in a single place
* Manage both RWAs & DeFi-native assets

### Centrifuge Spoke
* Tokenize ownership using ERC-20 — customizable with modules of your choice
* Distribute to DeFi with ERC-4626 and ERC-7540 vaults
* Support 1:1 token transfers between chains using burn-and-mint process

## Project structure
```
.
├── deployments
├── docs
│  └── audits
├── script
├── src
│  ├── misc
│  ├── common
│  ├── hub
│  ├── spoke
│  ├── vaults
│  └── hooks
├── test
├── foundry.toml
└── README.json
```
- `deployments` contains the deployment information of the supported chains
- `docs` documentation, diagrams and security audit reports
- `script` deployment scripts used to deploy a part or the full system, along with adapters.
- `src` main source containing all the contrats. Look for the interfaces and libraries inside of each module.
  - `misc` generic contracts
  - `common` common code to `hub` and `spoke`
  - `hub` code related to Centrifuge Hub
  - `spoke` code related to Centrifuge Spoke
  - `vaults` extension of Centrifuge Spoke, for ERC-4626 and ERC-7540 vaults
  - `hooks` extension of Centrifuge Spoke, for implementing transfer hooks
- `test` cotains all tests: unitary test, integration test per module, and end-to-end integration tests
