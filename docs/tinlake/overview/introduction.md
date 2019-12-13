---
id: introduction
order: 1
title: Introduction
category: 1. Overview
redirect_from:
  - /tinlake/
---

[Tinlake](https://centrifuge.io/technology/tinlake) is a set of smart contracts that enables borrowers to draw loans against non-fungible assets, such as invoices, royalty payments or warehouse receipts. Anything that can be represented on-chain as NFTs (Non-Fungible Tokens) can be financed using the Tinlake infrastructure. This is done by issuing an ERC20 token, the Collateral Value Token (CVT), against all of the collateral NFTs that are deposited into the Tinlake contracts.

Each Collateral Value Token (CVT) represents a fraction of the respective set of collateral, and the number of minted CVTs will be determined by independent configurations for each different type of assets.  As borrowers deposit NFTs into Tinlake, new CVT is minted on demand to draw funding from crypto funding sources.

Collateral management (an administrator) assumes the responsibilities of underwriting and valuing the assets, as well as keeping a balanced portfolio. In the case of payment default, collateral governance manages the liquidation of the assets.

## User roles
### Borrowers and Lenders
Tinlake interacts with borrowers and lenders. Generally, borrowers have individual loans with varying terms and varying durations drawn against their collateral. Lenders invest in the entire collateral portfolio at a defined rate. Borrowers can borrow by depositing an NFT collateral representing ownership of an asset, which they can get back upon repaying their debt.

### Administrator
Generally, an administrator determines what assets borrowers are allowed to bring in as collateral and how much they are allowed to borrow against the assets. This administrator could be a single centralized entity, a set of smart contracts automatically qualifying and pricing an asset or a decentralised autonomous organisation (DAO) that manages the Tinlake deployment.

## System Overview
![System Overview](../../../src/images/tinlake/system-overview.svg)
