---
id: codebase
title: Codebase
category: subpage
contributors: <William Freudenberger:william@centrifuge.io>, <Cosmin Damian:cosmin@centrifuge.io>
---

# Centrifuge Chain Codebase

The Centrifuge Chain functionality is grouped in 4 key groups of modules (also known as pallets). `pool-system` is at the core of everything, tieing together the investment side with the asset side.

**Pools** (`pool-system`, `pool-registry`, `investments`, `pool-fees`): The core logic for managing investment pools such as bundling loans, slicing pools into tranches and controlling investment epochs, as well as charging and accruing fees incurred by pool issuers.

**Assets** (`loans`, `interest-accrual`, `anchors`, `oracle-`): Managing the assets that make up the value of a pool, computing the NAV (Net Asset Value) of a pool, managing data feeds (oracles) that brings in pricing from external sources, and any other asset related features.

**Liquidity Pools** (`liquidity-pools-`, `foreign-investment`, `swaps`, `order-book`, `token-mux`): Enables investment activities on EVM chains using Solidity contracts, bridging the liquidity of EVM ecosystems with the efficiency and security of the Polkadot ecosystem through the flexibly configurable LP Gateway.

**Permissioning** (`restricted-(x)tokens`, `transfer-allowlist`): Extension of the token logic that enables strict permissioning, to ensure regulatory compliance for tranche tokens of pools, as well as increased operational security for stablecoins and other pool currencies.

![](./images/centrifuge-chain-pallets.png#width=120%;)

## Centrifuge Chain Pallets

On top of the [Substrate FRAME](https://docs.substrate.io/reference/frame-pallets/) framework, Centrifuge Chain is composed of custom pallets which can be found inside the [pallets directory](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets). The following list gives a brief overview, and links to the corresponding documentation:

- [**anchors**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/anchors) ([docs](https://reference.centrifuge.io/pallet_anchors/index.html)): Storing hashes of documents on-chain. The documents are stored in the Private Off-chain Data (POD) node network.

- [**block-rewards**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/block-rewards) ([docs](https://reference.centrifuge.io/pallet_block_rewards/index.html)): Provides means of configuring and distributing block rewards to collators as well as the annual treasury inflation.

<!-- - [**bridge**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/bridge) ([docs](https://reference.centrifuge.io/pallet_bridge/index.html)): Connecting [ChainBridge](https://github.com/centrifuge/chainbridge-substrate) to transfer tokens to and from Ethereum. -->

- [**collator-allowlist**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/collator-allowlist) ([docs](https://reference.centrifuge.io/pallet_collator_allowlist/index.html)): Tracking active collators, and allows the root account to manage this list.

- [**ethereum-transaction**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/ethereum-transaction) ([docs](https://reference.centrifuge.io/pallet_ethereum_transaction/index.html)): Wrapper around the Ethereum pallet which allows other pallets to execute EVM calls.

- [**fees**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/fees) ([docs](https://reference.centrifuge.io/pallet_fees/index.html)): Taking fees from accounts and sending this to the treasury, to the author, or burning them.

- [**foreign-investments**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/foreign-investments) ([docs](https://reference.centrifuge.io/pallet_foreign_investments/index.html)): Enables investing, redeeming and collecting in foreign and non-foreign currencies. Can be regarded as an extension of `pallet-investments` which provides the same toolset for pool (non-foreign) currencies.

- [**interest-accrual**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/interest-accrual) ([docs](https://reference.centrifuge.io/pallet_interest_accrual/index.html)): Keeping account of the outstanding debt through interest accrual calculations.

- [**investments**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/investments) ([docs](https://reference.centrifuge.io/pallet_investments/index.html)): Provides orders for assets and allows user to collect these orders.

- [**keystore**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/keystore) ([docs](https://reference.centrifuge.io/pallet_keystore/index.html)): Linking public keys to accounts. Supporting the operations of the offchain document consensus layer through the Centrifuge POD (Private Offchain Data) Node.

- [**liquidity-pools**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/liquidity-pools-gateway) ([docs](https://reference.centrifuge.io/pallet_liquidity_pools/index.html)): Provides the toolset to enable foreign investments on foreign domains.

- [**liquidity-pools-gateway**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/liquidity-pools-gateway) ([docs](https://reference.centrifuge.io/pallet_liquidity_pools_gateway/index.html)): The main handler of incoming and outgoing Liquidity Pools messages.

- [**liquidity-rewards**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/liquidity-rewards) ([docs](https://reference.centrifuge.io/pallet_liquidity_rewards/index.html)): Epoch based reward system.

- [**loans**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/loans) ([docs](https://reference.centrifuge.io/pallet_loans/index.html)): Locking a collateral NFT into a pool allowing to borrow from the pool. The loans pallet is also used for bookkeeping loan values and outstanding debt.

- [**oracle-collection**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/oracle-collection) ([docs](https://reference.centrifuge.io/pallet_oracle_collection/index.html)): Pallet used to collect and aggregate oracle values.

- [**oracle-feed**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/oracle-feed) ([docs](https://reference.centrifuge.io/pallet_oracle_feed/index.html)): Pallet used to feed oracle values.

- [**order-book**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/order-book) ([docs](https://reference.centrifuge.io/pallet_order_book/index.html)): Allows orders for currency swaps to be placed and fulfilled.

- [**permissions**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/permissions) ([docs](https://reference.centrifuge.io/pallet_permissions/index.html)): Linking roles to accounts. It is adding and removing relationships between roles and accounts on chain.

- [**pool-fees**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/pool-fees) ([docs](https://reference.centrifuge.io/pallet_pool_fees/index.html)): Stores all the fees related to a pool and allows for these fees to be charged.

- [**pool-registry**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/pool-registry) ([docs](https://reference.centrifuge.io/pallet_pool_registry/index.html)): Used for creating, updating, and setting the metadata of pools.

- [**pool-system**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/pool-system) ([docs](https://reference.centrifuge.io/pallet_pool_system/index.html)): Creating and managing investment pools. It is bundling loans, slicing pools into tranches, and controlling investment epochs.

- [**restricted-tokens**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/restricted-tokens) ([docs](https://reference.centrifuge.io/pallet_restricted_tokens/index.html)): Transferring tokens and setting balances. It is wrapping `orml-tokens` with the addition of checking for permissions.

- [**restricted-xtokens**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/restricted-xtokens) ([docs](https://reference.centrifuge.io/pallet_restricted_xtokens/index.html)): Wrapper pallet over `orml-xtokens` which allows the runtime to create arbitrary filters for transfers of x-chain-transfers.

- [**rewards**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/rewards) ([docs](https://reference.centrifuge.io/pallet_rewards/index.html)): Implement a [scalable reward distribution](https://solmaz.io/2019/02/24/scalable-reward-changing/) mechanism that can be used for other pallets to create different rewards systems.

- [**swaps**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/token-mux) ([docs](https://reference.centrifuge.io/pallet_token_mux/index.html)): Enables applying swaps independently of previous swaps in the same or opposite directions.

- [**token-mux**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/token-mux) ([docs](https://reference.centrifuge.io/pallet_token_mux/index.html)): Enables proxying variants of the same foreign assets to a local asset representation.

- [**transfer-allowlist**](https://github.com/centrifuge/centrifuge-chain/tree/main/pallets/transfer-allowlist) ([docs](https://reference.centrifuge.io/pallet_transfer_allowlist/index.html)): This pallet checks whether an account should be allowed to make a transfer to a receiving location with a specific currency.
