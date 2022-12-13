---
id: cent-chain
order: 1
title: Centrifuge Chain
contributors: <Cassidy Daly:cassidy@centrifuge.io>, <Dennis Wellmann:dennis@centrifuge.io>
redirect_from:
  - /build
  - /build/
---

## Introduction

### The Centrifuge Stack

![Cent Stack](./images/cent-stack.png)

The Centrifuge stack consists of a peer-to-peer messaging protocol to store and exchange business documents in a private, secure way. As the next layer, we built Centrifuge Chain using Substrate to hold the unalterable, single source of truth of these documents for all parties. Using Centrifuge Chain and dApps built on top, businesses can tokenize documents and use this as collateral to access financing. Tinlake is our securitization protocol for these tokenized assets built on Centrifuge Chain to optimize risk allocation and connect Centrifuge to the DeFi ecosystem.

### Centrifuge Chain

[Centrifuge Chain](https://github.com/centrifuge/centrifuge-chain) is the gateway for real-world assets to the Blockchain Multiverse. We built Centrifuge Chain on [Parity Substrate](https://substrate.dev) with an initial bridge to Ethereum. This allows us to move faster and use a consistent approach for certain features.

Substrate allows us to easily tap into the [Polkadot](https://polkadot.network) ecosystem and to connect with other blockchains that support the standard, which in turn increases interoperability.

We envision a larger ecosystem of many, connected blockchains- where Dapps on Ethereum can use data from other chains, value can move freely, and Centrifuge Chain can [enable off-chain assets to access financing](https://medium.com/centrifuge/centrifuge-chain-the-gateway-for-real-world-assets-to-the-blockchain-multiverse-41dd5597ecf1) through DeFi.

#### Centrifuge Chain Efficiencies

Centrifuge Chain is optimized specifically for the transactions required by our specific use case. This focus allows us to improve upon our current architecture in a few key ways: speed, cost, storage efficiencies, and privacy.

Ethereum works well for low volumes of high value transactions. High volumes of privacy-requiring use-cases require a different solution. The average business user, SMBs and large enterprises alike, would be paying many times more using Centrifuge on Ethereum compared to their existing solutions. It wouldn’t be worth it for most businesses to make a switch. But what if we could lower that cost and have high throughput capabilities?

The transactions on the Centrifuge Chain are optimized for the small subset of operations needed by our specific use case. This allows for faster execution of logic and finality of transactions. The optimization of transactions, together with our PoS architecture, is also what brings down the transaction costs dramatically. Centrifuge Chain also implements a state rent model that requires users to pay for continuous availability of their data over long periods of time. This encourages decentralization because less resources are required to run a node. Building our own chain also allows us to improve upon the user and developer experience for Centrifuge. Our users require privacy, and this is something we can build for directly — targeting the features they need from the start. For developers, we can provide custom APIs and tools that come with the blockchain node itself instead of smart contract APIs which are harder to integrate with.

While there are downsides to building a single purpose chain, the advantages for our use case outweigh the costs. Integration with other Ethereum and DeFi projects becomes a bit more involved. Our experience with Ethereum development, combined with a standardized bridge to get data to/from our Parity Substrate based chain reduces the overhead substantially, while still benefiting from the upside of our own chain.

## Further Resources

### Substrate/Polkadot Resources

- [Kusama Documentation](https://guide.kusama.network/docs/kusama-getting-started)
- [W3F Guide](https://github.com/w3f/polkadot-secure-validator) on Production Grade Setups for Validators on Substrate chains
- [Guides by Certus One](https://kb.certus.one/) (Cosmos Validator)
- [Architecture Deep Dive by Chorus](https://gdoc.pub/doc/e/2PACX-1vQXb1kd0zqYT8K4B4XYb-lrlfRIuPDXsgiTjj94gDOjw3ezEUAtjvxR8yfbKJypmioKeGRrhkLCtZog)
- [Polkadot Wiki](https://wiki.polkadot.network/docs/getting-started) (also covering Substrate relevant features)
