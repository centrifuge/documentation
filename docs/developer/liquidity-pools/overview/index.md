---
id: overview
order: 1
title: Overview
category: subpage
contributors: <Jeroen:jeroen@k-f.co>
--- 
# Overview

## High level contract overview
![](https://storage.googleapis.com/centrifuge-hackmd/upload_a119caaac6809ee2d5337d1699a2bf7d.png)

Investors can invest in multiple tranches for each RWA pool. Each of these tranches is a separate deployment of a Liquidity Pool and a Tranche Token.
- [**Liquidity Pool**](https://github.com/centrifuge/liquidity-pools/blob/main/src/LiquidityPool.sol): A [ERC-4626](https://ethereum.org/en/developers/docs/standards/tokens/erc-4626/) compatible contract that enables investors to deposit and withdraw stablecoins to invest in tranches of pools.
- [**Tranche Token**](https://github.com/centrifuge/liquidity-pools/blob/main/src/token/Tranche.sol): An [ERC-20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) token for the tranche, linked to a [`RestrictionManager`](https://github.com/centrifuge/liquidity-pools/blob/main/src/token/RestrictionManager.sol) that manages transfer restrictions. Prices for tranche tokens are computed on Centrifuge.

The deployment of these tranches and the management of investments is controlled by the underlying InvestmentManager, TokenManager, Gateway, and Routers.
- [**Investment Manager**](https://github.com/centrifuge/liquidity-pools/blob/main/src/InvestmentManager.sol): The core business logic contract that handles pool creation, tranche deployment, managing investments and sending tokens to the [`Escrow`](https://github.com/centrifuge/liquidity-pools/blob/main/src/Escrow.sol) and [`UserEscrow`](https://github.com/centrifuge/liquidity-pools/blob/main/src/UserEscrow.sol), and more.
- [**Pool Manager**](https://github.com/centrifuge/liquidity-pools/blob/main/src/PoolManager.sol): The second business logic contract that handles currency bookkeeping, and transferring tranche tokens as well as currencies.
- [**Gateway**](https://github.com/centrifuge/liquidity-pools/blob/main/src/gateway/Gateway.sol): Intermediary contract that encodes and decodes messages using [`Messages`](https://github.com/centrifuge/liquidity-pools/blob/main/src/gateway/Messages.sol) and handles routing to/from Centrifuge.
- [**Routers**](https://github.com/centrifuge/liquidity-pools/tree/main/src/gateway/routers): Contracts that handle communication of messages to and from Centrifuge Chain.

## How it works
Using the Centrifuge protocol, issuers can launch pools of real-world assets. Each pool can have 1 or more tranches that investors can buy. The purpose of these tranches is to give investors different kinds of risk exposure and yield on the same asset class. Each pool has 1 pool currency. The decimals of this pool currency define the decimals of the tranche tokens that are issued per tranche. Both deposit (also known as investments) and redemptions in tranches of Centrifuge pool happen asynchronously, through an epoch mechanism. Prices for tranches are calculated on Centrifuge Chain based on the Net Asset Value of the real world assets in the pool. More information on this can be found in the [documentation](https://docs.centrifuge.io/getting-started/securitization/).

Because of the epoch mechanism, as well as the fact that Liquidity Pools communicate with Centrifuge Chain through messaging layers, deposits and redemptions cannot be executed automatically, and rather are executed asynchronously. A key goal if Liquidity Pools is to increase composability of Centrifuge assets, by leveraging ERC4626. However, ERC4626 assumes atomic deposits and withdrawals, thus the Liquidity Pool contracts are extended with methods for requesting deposits & redemptions. There is also support for permits when requesting deposits/redemptions. More details on this in `User flows` below.

The communication between Liquidity Pools and Centrifuge Chain uses external general message passing protocols. Messages are encoded using a compacted ABI encoding scheme, as implemented in `src/gateway/Messages.sol`.

## Multiple currency support
While there is 1 native pool currency, Liquidity Pools (acronym: LP) are built to support deposits in multiple currencies. Each Liquidity Pool is linked to 1 currency (asset) and 1 tranche token (share), but Liquidity Pools can be deployed linked to the same tranche token (share). The Liquidity Pool contract therefore passes through the ERC20 methods to the underlying share implementation. To support this, the ERC20 of the tranche token uses ERC2771 context, and the tranche token contract ensures that all Liquidity Pools are considered trusted forwarders for this.

The other challenge with supporting multiple currencies is that the decimals between the tranche token (which is based on the native pool currency decimals) and the investment currency (or asset) can differ. Therefore, all price calculations and conversions between shares and assets (or tranche tokens and currencies) need to account for these differences. This is accomplished by normalizing all balances and prices to 18 decimal fixed point integers, doing the calculations using these normalized values, and then unnormalizing back to the intended decimals. Currencies with more than 18 decimals are not supported and blocked in the contracts.

## User flows
### How pools and tranches are created and deployed
![Pool creation flow.](https://github.com/code-423n4/2023-09-centrifuge/blob/main/images/pool_creation_flow.png?raw=true)

### How users can invest
![Simple investment flow.](https://github.com/code-423n4/2023-09-centrifuge/blob/main/images/investment_flow.png?raw=true)