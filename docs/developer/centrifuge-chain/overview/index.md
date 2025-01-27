---
id: overview
title: Overview
contributors: <Cassidy Daly:cassidy@centrifuge.io>, <Dennis Wellmann:dennis@centrifuge.io>
redirect_from:
  - /build
  - /build/
  - /build/cent-chain
  - /build/cent-chain/
category: subpage
---

# Centrifuge Chain Overview

Centrifuge Chain is our blockchain built with Rust and the [Polkadot SDK](https://github.com/paritytech/polkadot-sdk), purpose built for real-world assets. Pools (and their assets, tranches, etc), [onchain governance](https://docs.centrifuge.io/use/governance-process/) and the Centrifuge treasury, and the CFG token live on Centrifuge Chain.

Investors can invest in assets on Centrifuge from other chains via Liquidity Pools deployed on supported chains. For example, a Liquidity Pool deployed on Ethereum allows users on Ethereum to invest in a pool on Centrifuge without leaving Ethereum.

## Centrifuge Chain Efficiencies

Centrifuge Chain is optimized specifically for the transactions required by our specific use case. This focus allows us to improve upon our current architecture in a few key ways: speed, cost, storage efficiencies, and privacy.

Ethereum works well for low volumes of high value transactions. High volumes of privacy-requiring use-cases require a different solution. The average business user, SMBs and large enterprises alike, would be paying many times more using Centrifuge on Ethereum compared to their existing solutions. It wouldn’t be worth it for most businesses to make a switch. But what if we could lower that cost and have high throughput capabilities?

## Optimization for use cases

The transactions on the Centrifuge Chain are optimized for the small subset of operations needed by our specific use case. This allows for faster execution of logic and finality of transactions. The optimization of transactions, together with our PoS architecture, is also what brings down the transaction costs dramatically. This encourages decentralization because less resources are required to run a node. Building our own chain also allows us to improve upon the user and developer experience for Centrifuge. Our users require privacy, and this is something we can build for directly — targeting the features they need from the start. For developers, we can provide custom APIs and tools that come with the blockchain node itself instead of smart contract APIs which are harder to integrate with.

While there are downsides to building a single purpose chain, the advantages for our use case outweigh the costs. Integration with other Ethereum and DeFi projects becomes a bit more involved. Our experience with Ethereum development, combined with a standardized bridge to get data to/from our Parity Substrate based chain reduces the overhead substantially, while still benefiting from the upside of our own chain.
