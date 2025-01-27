---
id: overview
title: Overview
category: subpage
contributors: <Jeroen:jeroen@k-f.co>
---

# Overview

## High level contract overview

![](https://ipfs.io/ipfs/QmW7N8beQ6TF5efwqkMndouxGub2J1jqsEhv5gXDbyqA2K)

Investors can invest in multiple tranches for each RWA pool. Each of these tranches is a separate deployment of an [ERC-7540](https://eips.ethereum.org/EIPS/eip-7540) Vault and a Tranche Token.

- [**Liquidity Pool)**](https://github.com/centrifuge/liquidity-pools/blob/main/src/ERC7540Vault.sol): An [ERC-7540](https://eips.ethereum.org/EIPS/eip-7540) (extension of [ERC-4626](https://ethereum.org/en/developers/docs/standards/tokens/erc-4626/)) compatible contract that enables investors to deposit and withdraw stablecoins to invest in tranches of pools.
- [**Tranche Token**](https://github.com/centrifuge/liquidity-pools/blob/main/src/token/Tranche.sol): An [ERC-20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) token for the tranche, linked to a [`RestrictionManager`](https://github.com/centrifuge/liquidity-pools/blob/main/src/token/RestrictionManager.sol) that manages transfer restrictions. Prices for tranche tokens are computed on Centrifuge.

The deployment of these tranches and the management of investments is controlled by the underlying InvestmentManager, TokenManager, Gateway, and Adapters.

- [**Investment Manager**](https://github.com/centrifuge/liquidity-pools/blob/main/src/InvestmentManager.sol): The core business logic contract that handles pool creation, tranche deployment, managing investments and sending tokens to the [`Escrow`](https://github.com/centrifuge/liquidity-pools/blob/main/src/Escrow.sol), and more.
- [**Pool Manager**](https://github.com/centrifuge/liquidity-pools/blob/main/src/PoolManager.sol): The second business logic contract that handles asset bookkeeping, and transferring tranche tokens as well as assets.
- [**Gateway**](https://github.com/centrifuge/liquidity-pools/blob/main/src/gateway/Gateway.sol): Multi-Message Aggregation (MMA) implementation, receiving messages from managers, sending these messages as full payload to 1 adapter and a proof to n-1 adapters, and verifying incoming payloads and proofs and sending back to managers.
- [**Adapters**](https://github.com/centrifuge/liquidity-pools/tree/main/src/gateway/adapters): Adapter implementations for messaging layers.

## How it works

Using the Centrifuge protocol, issuers can launch pools of real-world assets. Each pool can have 1 or more tranches that investors can buy. The purpose of these tranches is to give investors different kinds of risk exposure and yield on the same asset class. Each pool has 1 pool asset. The decimals of this pool asset define the decimals of the tranche tokens that are issued per tranche. Both deposit (also known as investments) and redemptions in tranches of Centrifuge pool happen asynchronously, through an epoch mechanism. Prices for tranches are calculated on Centrifuge Chain based on the Net Asset Value of the real world assets in the pool. More information on this can be found in the [documentation](https://docs.centrifuge.io/getting-started/securitization/).

Because of the epoch mechanism, as well as the fact that Liquidity Pools communicate with Centrifuge Chain through messaging layers, deposits and redemptions cannot be executed automatically, and rather are executed asynchronously. A key goal of Liquidity Pools is to increase composability of Centrifuge assets. This is accomplished through the ERC7540 token standard for asynchronous deposits and redemptions. There is also support for permits when requesting deposits/redemptions. More details on this in `User flows` below.

The communication between Liquidity Pools and Centrifuge Chain uses external general message passing protocols. Messages are encoded using a compacted ABI encoding scheme.

### Multiple asset support

While there is 1 native pool asset, ERC-7540 vaults, using the ERC7575 extension, are built to support deposits in multiple assets. Each vault is linked to 1 asset (asset) and 1 tranche token (share), but multiple vaults can be deployed linked to the same tranche token (share). The vault contract therefore passes through the ERC20 methods to the underlying share implementation.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_53a9cc360964cc609a86b41ab0b83c83.png)

The challenge with supporting multiple assets is that the decimals between the tranche token (which is based on the native pool asset decimals) and the investment asset (or asset) can differ. Therefore, all price calculations and conversions between shares and assets (or tranche tokens and assets) need to account for these differences. This is accomplished by normalizing all balances and prices to 18 decimal fixed point integers, doing the calculations using these normalized values, and then unnormalizing back to the intended decimals. Currencies with more than 18 decimals are not supported and blocked in the contracts.

## User flows

`TT` = Tranche Tokens
`<<Message>>` = an encoded message

### Pool creation flow

![Pool creation flow.](./images/poolcreation.png)

### How users can invest

![Simple investment flow.](./images/simpleinvestmentflow.png)

### Flow of funds

![Flow of funds](./images/flowoffunds.png)
