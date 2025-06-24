---
id: querying-v2-data
title: Querying V2 data
category: subpage
contributors: <NunoAlexandre:nuno@k-f.co>
---

# Querying V2 data

You can follow the official GraphQL guide [here](https://graphql.org/learn/) to learn more about GraphQL, how it works, and how to use it:

- There are libraries to help you implement GraphQL in your application.
- For an in-depth learning experience with practical tutorials, see How to GraphQL.
- Check out the free online course, Exploring GraphQL: A Query Language for APIs.

## Endpoints

| **Network** | **GraphQL Endpoint**                                         |
| ----------- | ------------------------------------------------------------ |
| Centrifuge  | https://api.subquery.network/sq/centrifuge/pools             |
| Dev         | https://api.subquery.network/sq/centrifuge/pools-development |

## Sample Queries

Queries can be tested in a dedicated [SubQL Sandbox](https://explorer.subquery.network/subquery/embrio-tech/centrifuge-subql). The [SubQL documentation](https://academy.subquery.network/run_publish/query.html) provides some insights on how to perform queries in their SubQuery explorer.

Here some important hints and common pitfalls that can save you some time when working woth our data:

- Currencies and Token amounts are expressed in fixed decimal precision

  As pools have different reference currencies, the amount this precision can vary. For this matter we reference the Currency entity in Pools, so that the correct amount of decimals can be queried together with each pool.

- Queries return a maximum of 100 entries per page by default

  This can be increased to a maximum of 1000 entries per page in production environments. Sanbox environments are limited to 100 results.

- Entities ids are not necessarily the same as on chain ids
  Therefore, when querying an entity, always refer to the GraphQL data model to verify how the id is composed.

### Get net portfolio valuation and active loans for all Centrifuge Pools

```graphql
{
  pools {
    nodes {
      id
      currency {
        id
        decimals
      }
      portfolioValuation
      sumNumberOfActiveLoans
    }
  }
}
```

### Get balances and last investor transactions for an account

```graphql
{
  account(id: "kALNreUp6oBmtfG87fe7MakWR8BnmQ4SmKjjfG27iVd3nuTue") {
    id
    outstandingOrders {
      nodes {
        investAmount
        redeemAmount
        trancheId
      }
    }
    investorTransactions(last: 2) {
      nodes {
        type
        currencyAmount
        tokenAmount
      }
    }
    currencyBalances {
      nodes {
        amount
      }
    }
    trancheBalances {
      nodes {
        trancheId
        sumInvestOrderedAmount
        sumInvestCollectedAmount
        sumInvestUncollectedAmount
      }
    }
  }
}
```

### Get outstanding debt information for loans belongig to a pool

```graphql
{
  pool(id: "2825130900") {
    id
    currency {
      id
      decimals
    }
    loans {
      nodes {
        id
        outstandingDebt
      }
    }
  }
}
```

### Get historical token price and token supply evolution for a given tranche token

```graphql
{
  trancheSnapshots(
    orderBy: TIMESTAMP_ASC
    filter: {
      trancheId: { equalTo: "1873519631-0xb05f8e95eaf6ffc940ab4b4fbcb6324b" }
    }
  ) {
    nodes {
      id
      timestamp
      tokenPrice
      tokenSupply
    }
  }
}
```

### Get TVL for single pools or for the entire ecosystem

The TVL for each pool can be obtained with the following query:

```graphql
{
  pools {
    nodes {
      value
    }
  }
}
```

The total for the entire CFG ecosystem is obtained by summing across all results.
