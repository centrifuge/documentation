---
id: overview
title: Overview
category: subpage
contributors: <Filippo:filippo@embriotech.ch>
---

# Overview

Centrifuge API leverages [GraphQl](https://graphql.org/). GraphQL is an open-source query language standard for APIs and a runtime. It uses a strongly-typed approach to querying large and complex sets of data. It provides a more efficient, powerful, and flexible alternative to the traditional REST API approach. With GraphQL, clients can request exactly the data they need, and nothing more, which reduces the amount of data transferred over the network and improves performance. It also allows for more predictable and structured responses, making it easier to work with complex data structures.

## Open Source Client Libraries

To interact with the Centrifuge API, you can use a variety of open-source client libraries that simplify the process of querying GraphQL data. Here are some popular options:

- **[Apollo Client](https://github.com/apollographql/apollo-client)**: A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. It is highly flexible and can be used with any JavaScript front-end framework, such as React, Angular, or Vue.js.
- **[Relay](https://github.com/facebook/relay)**: A JavaScript framework for building data-driven React applications powered by GraphQL. Relay is known for its performance and scalability, making it suitable for large applications.
- **[urql](https://github.com/urql-graphql/urql)**: A lightweight and flexible GraphQL client for React that is easy to set up and use. It provides a simple API for querying and mutating data.
- **[graffle](https://github.com/graffle-js/graffle)**: Minimal GraphQL client supporting Node and browsers for scripts or simple apps.

These libraries provide robust solutions for interacting with GraphQL APIs, each with its own strengths and use cases. Choose the one that best fits your project's requirements and your team's familiarity with the technology stack.

## Getting started

The Centrifuge GraphQL API endpoint is located at `https://api.centrifuge.io`. It offers a GraphiQL UI for interactively testing queries and includes extensive documentation about graph filters and available entities. For programmatic use, you can send GraphQL compliant POST requests to this endpoint.

Autocomplete is your friend when building queries in GraphiQL. Use `Ctrl + Space` to trigger the contextual menu, which provides suggestions based on the current context of your query. This feature helps in quickly discovering available fields, arguments, and even documentation for the API, making query building more efficient and less error-prone.

The Centrifuge GraphQL API provides read-only access to data indexed from the multi-chain Centrifuge mainnet protocol deployment. There are no write mutations accessible, ensuring that all interactions with the API are limited to data retrieval.

<iframe title="GraphiQL" width="100%" height="300px" src="https://embed.graphql.com/embed?endpointURL=%22https%3A%2F%2Fapi.centrifuge.io%22&query=%22query%20GetActivePools%20%7B%5Cn%20%20pools(where%3A%20%7BisActive%3A%20true%2C%20name_not%3A%20null%7D%2C%20limit%3A%205)%20%7B%5Cn%20%20%20%20items%20%7B%5Cn%20%20%20%20%20%20id%5Cn%20%20%20%20%20%20name%5Cn%20%20%20%20%20%20centrifugeId%5Cn%20%20%20%20%20%20isActive%5Cn%20%20%20%20%20%20tokens%20%7B%5Cn%20%20%20%20%20%20%20%20items%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20id%5Cn%20%20%20%20%20%20%20%20%20%20name%5Cn%20%20%20%20%20%20%20%20%20%20symbol%5Cn%20%20%20%20%20%20%20%20%20%20totalIssuance%5Cn%20%20%20%20%20%20%20%20%20%20tokenPrice%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%20%20%7D%5Cn%7D%22&variables=%22%22&response=%22Hit%20run!%5Cn%22&history=false&prettify=false&docs=false" />

The Centrifuge GraphQL API is currently public and does not require authentication. All data is read-only and sourced from public blockchain data.

## Indexed Entities

### Infrastructure

- **Blockchain** - Includes all blockchains the indexer is currently tracking.
- **Deployment** - Includes all protocol contracts and addresses that are deployed to a particular blockchain.

### Protocol Hub Resources

- **Pool** - Includes all pools the indexer is currently tracking. A pool represents a collection of assets in the Centrifuge protocol, where each pool is a unique set of tokenized real-world assets that can be tracked and managed.
- **Token** - Represents a token or shareclass in the Centrifuge protocol, which is a digital asset that can represent ownership or a stake in a pool of real-world assets. These tokens are used to facilitate transactions, manage assets, and provide liquidity within the Centrifuge ecosystem.
- **AssetRegistration** - Represents a successful registration of an asset in a particular hub chain of the Centrifuge protocol.
- **Holding** - Holdings tracks pool-level asset positions across different blockchains, providing a unified view of what each pool owns.
- **HoldingAccount** - A Holding Account represents a specific asset position for a pool, tracking the exact amount of a particular asset that pool owns.
- **OnOffRampManager** - OnOfframpManager enables cross-chain asset movement for pools, allowing investors to deposit assets on one blockchain and receive shares on another, or withdraw assets from one chain using shares from another.
- **OfframpRelayer** - Offramp relayers are authorized third-party services that can process withdrawal requests on behalf of investors, enabling automated and efficient asset withdrawals from pools.
- **OnRampAsset** - Onramp assets are specific token types that investors can deposit to receive pool shares, enabling multi-asset investment opportunities across different blockchains.
- **OffRampAddress** - Offramp addresses are pre-approved withdrawal destinations that specify where assets can be sent when investors withdraw from pools, providing controlled and secure asset distribution.
- **Policy** - A policy is a merkle tree root that represents the complete set of allowed operations for a specific strategist.
- **MerkleProofManager** - MerkleProofManager enables third-party strategists to execute complex multi-call operations on behalf of pools

### Protocol Spoke Resources

- **Vault** - Vaults are a secure storage mechanism for digital assets. Vaults are used to manage and segregate assets, ensuring that they are safely held and can be efficiently accessed or transferred within the Centrifuge ecosystem. They play a crucial role in maintaining the integrity and liquidity of asset pools.
- **Asset** - Represents an asset in the Centrifuge protocol living on a spoke chain.
- **TokenInstance** - The instance of a shareClass token deployed on a particular spoke chain.
- **Escrow** - PoolEscrow acts as a custodial wallet for each pool's assets, providing secure asset management and controlled access.

### Crosschain Communication

- **CrosschainPayload** - A payload is the actual data content being sent from one blockchain to another, containing the specific instructions and parameters for the operation to be executed on the destination chain.
- **CrosschainMessage** - A cross-chain message is a structured communication between different blockchains in the Centrifuge protocol, enabling operations on one chain to trigger actions on another chain. Messages are encapsulated in a payload and sent across a crosschain bridge.
- **Adapter** - Adapters are the core components that bridge the Centrifuge protocol across different blockchains, relaying payloads between different networks.
- **AdapterParticipation** - AdapterParticipations track the participation of adapters in the transfer of cross-chain payloads and proofs.

### Transactional Data

- **InvestorTransaction** - Represents a transaction that has been executed by an investor in the Centrifuge protocol. These transactions are used to track and manage the ownership and transfer of assets within the Centrifuge ecosystem.
- **OutstandingInvest** - Represents an outstanding order at the investor level, which is an order placed by the user and waiting to be asynchronously approved and fulfilled in exchange for share tokens of the pool.
- **OutstandingRedeem** - Represents an outstanding redeem order at the investor level, which is an order placed by the user to close a position and exchange the shares back for the underlying assets.
- **EpochOutstandingInvest** - Represents an outstanding invest order at the epoch level (aka a batch of invest orders), which aggregates orders placed by the user and waiting to be asynchronously approved and fulfilled in exchange for share tokens of the pool.
- **EpochOutstandingRedeem** - Represents an outstanding redeem order at the epoch level (aka a batch of redeem orders), which aggregates outstanding redeem orders placed by the user and waiting to be asynchronously approved and fulfilled to return shares in exchange for underlying assets.
- **InvestOrder** - Represents a placed and approved invest order at the investor level. Tracks the order from approval to issuance and claim.
- **RedeemOrder** - Represents a placed and approved redeem order at the investor level. Tracks the order from approval to revocation and claim.
- **EpochInvestOrder** - Represents a placed and approved invest order at the epoch level (aka a batch of invest orders). Tracks the order from approval to issuance.
- **EpochRedeemOrder** - Represents a placed and approved redeem order at the epoch level (aka a batch of redeem orders). Tracks the order from approval to revocation of shares.
- **TokenInstancePosition** - Represents an investor's position holding a particular share class token.

### Actors and Participants

- **Account** - An account is a user-owned address (UOA) in the Centrifuge protocol.
- **PoolManager** - Represents a manager of a pool in the Centrifuge protocol either as a hub or spoke manager.
- **WhitelistedInvestor** - Represents a whitelisted investor in the Centrifuge protocol. Whitelisted investors are allowed to invest in a pool.

### Historical Entities

- **PoolSnapshot** - Captures the state of a pool at a specific point in time.
- **TokenSnapshot** - Records the details of a token at a particular moment.
- **TokenInstanceSnapshot** - Represents the status of a token instance on a specific spoke chain at a given time.
- **HoldingSnapshot** - Reflects the asset positions of a pool across blockchains at a certain time.

All snapshots include these common fields:

- **timestamp**: The exact time when the snapshot was captured.
- **blockNumber**: The blockchain block number at which the snapshot was initiated.
- **trigger**: The specific event that caused the snapshot to be taken (e.g., "NewPeriod").
- **triggerTxHash**: The transaction hash associated with the event that triggered the snapshot.
- **triggerChainId**: The ID of the blockchain where the triggering event occurred.

## Multiplex queries

The Centrifuge GraphQL API supports batching multiple queries into a single request for improved performance. This is particularly useful when building dashboards that need data from multiple entities.

## Limits

The following limits apply to the Centrifuge GraphQL API.

| Limit             | Default                                                                                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Maximum page size | 1000 records (items) per page. Applies to most connections in the API. Particular connections may have different max page size limits that are higher or lower. |
| Request timeout   | 30 seconds.                                                                                                                                                     |

## Performance tips

Here are a few tips for speeding up slow GraphQL queries.

1. Limit query depth: Each layer of depth in a GraphQL query introduces at least one additional sequential database query. Avoid queries that are more than 2 layers deep.
2. Use pagination: Use cursor-based pagination to fetch records in smaller, more manageable chunks. This can help reduce the load on the database.


## Supported networks

The Centrifuge API v3 indexes data from multiple blockchain networks:

- **Ethereum** (Chain ID: 1)
- **Arbitrum** (Chain ID: 42161)
- **Base** (Chain ID: 8453)
- **Avalanche** (Chain ID: 43114)
- **Plume** (Chain ID: 98866)

## Data freshness

The API provides real-time data that is updated as blockchain events occur. Data is typically available within 1-2 minutes of being confirmed on the blockchain.

For historical data, the API maintains complete snapshots at regular intervals (daily), allowing for point-in-time queries and historical analysis. Some entities are snapshotted on particular trigger events also.

## Error handling

The API returns detailed error messages for common issues:

- **Invalid query syntax**: Returns parsing errors with line and column information
- **Field not found**: Returns field resolution errors
- **Type mismatch**: Returns type validation errors
- **Rate limit exceeded**: Returns rate limiting errors with retry information
- **Query complexity exceeded**: Returns complexity limit errors with suggestions

All errors follow the GraphQL error specification and include helpful context for debugging.

## Pagination
For more detailed information on implementing pagination in GraphQL, please refer to the [Ponder.sh documentation](https://ponder.sh/docs/query/graphql#pagination).



## Sorting
Use the orderBy and orderDirection arguments to sort the result by a column. By default, the result is sorted by the primary key column(s) in ascending order.

| Pagination option | Default                |
|-------------------|------------------------|
| orderBy           | Primary key column(s)  |
| orderDirection    | "asc"                  |

order direction supports `asc` or `desc` order.

## Filters
Use the `where` argument to filter for records that match certain criteria. The `where` argument type includes filter options for every column defined on a table. Here are the filter options available for each column type.

| Filter option         | Available for column types       | Include records where [column]...                  |
|-----------------------|----------------------------------|----------------------------------------------------|
| [column]              | All                              | equals the value                                   |
| [column]_not          | All                              | does not equal the value                           |
| [column]_in           | All primitives and enums         | is one of the values                               |
| [column]_not_in       | All primitives and enums         | is not one of the values                           |
| [column]_gt           | Numeric primitives               | is greater than the value                          |
| [column]_lt           | Numeric primitives               | is less than the value                             |
| [column]_gte          | Numeric primitives               | is greater than or equal to the value              |
| [column]_lte          | Numeric primitives               | is less than or equal to the value                 |
| [column]_contains     | String primitives                | contains the substring                             |
| [column]_not_contains | String primitives                | does not contain the substring                     |
| [column]_starts_with  | String primitives                | starts with the substring                          |
| [column]_not_starts_with | String primitives             | does not start with the substring                  |
| [column]_ends_with    | String primitives                | ends with the substring                            |
| [column]_not_ends_with| String primitives                | does not end with the substring                    |
| [column]_has          | Lists of primitives and enums    | has the value as an element                        |
| [column]_not_has      | Lists of primitives and enums    | does not have the value as an element              |

You can compose filters using the AND and OR operators. These special fields accept an array of filter objects.

here an example for a filtered query:
<iframe title="GraphiQL" width="100%" height="300px" src="https://embed.graphql.com/embed?endpointURL=%22https%3A%2F%2Fapi.centrifuge.io%22&query=%22%7B%5Cn%20%20tokenInstanceSnapshots(%5Cn%20%20%20%20orderBy%3A%20%5C%22timestamp%5C%22%5Cn%20%20%20%20orderDirection%3A%20%5C%22asc%5C%22%5Cn%20%20%20%20where%3A%20%7BtokenId%3A%20%5C%220x00010000000000060000000000000001%5C%22%2C%20trigger_starts_with%3A%20%5C%22ethereum%5C%22%7D%5Cn%20%20)%20%7B%5Cn%20%20%20%20items%20%7B%5Cn%20%20%20%20%20%20tokenId%5Cn%20%20%20%20%20%20triggerChainId%5Cn%20%20%20%20%20%20trigger%5Cn%20%20%20%20%20%20timestamp%5Cn%20%20%20%20%20%20totalIssuance%5Cn%20%20%20%20%20%20tokenPrice%5Cn%20%20%20%20%7D%5Cn%20%20%7D%5Cn%7D%22&variables=%22%22&response=%22Hit%20run!%5Cn%22&history=false&prettify=false&docs=false" />

## Useful GraphQL example queries

### TVL By Pool Token

The Total Value Locked (TVL) by pool token can be obtained by multiplying `totalIssuance` and `tokenPrice`, while considering the underlying pool currency `decimals`. All details can be obtained with the query below:

<iframe title="GraphiQL" width="100%" height="300px" src="https://embed.graphql.com/embed?endpointURL=%22https%3A%2F%2Fapi.centrifuge.io%22&query=%22query%20GetTvlByToken%20%7B%5Cn%20%20tokens%20%7B%5Cn%20%20%20%20items%20%7B%5Cn%20%20%20%20%20%20id%5Cn%20%20%20%20%20%20name%5Cn%20%20%20%20%20%20totalIssuance%5Cn%20%20%20%20%20%20tokenPrice%5Cn%20%20%20%20%20%20pool%20%7B%5Cn%20%20%20%20%20%20%20%20asset%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20decimals%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%5Cn%20%20%7D%5Cn%7D%22&variables=%22%22&response=%22Hit%20run!%5Cn%22&history=false&prettify=false&docs=false" />


