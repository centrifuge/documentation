---
id: cent-chain
order: 1
title: Centrifuge Chain
contributors: <Cassidy Daly:cassidy@centrifuge.io>, <Dennis Wellmann:dennis@centrifuge.io>
redirect_from:
  - /build/
---

## Introduction

### The Centrifuge Stack

![Cent Stack](./images/cent-stack.png)

The Centrifuge stack consists of a peer-to-peer messaging protocol to store and exchange business documents in a private, secure way. As the next layer, we built Centrifuge Chain using Substrate to hold the unalterable, single source of truth of these documents for all parties. Using Centrifuge Chain and dApps built on top, businesses can tokenize documents and use this as collateral to access financing. Tinlake is our securitization protocol for these tokenized assets built on Centrifuge Chain to optimize risk allocation and connect Centrifuge to the DeFi ecosystem.

### Centrifuge Chain

[Centrifuge Chain](https://github.com/centrifuge/centrifuge-chain) is the gateway for real-world assets to the Blockchain Multiverse. We built Centrifuge Chain on [Parity Substrate](https://substrate.dev) with an initial bridge to Ethereum. This allows us to move faster and use a consistent approach for certain features.

Substrate allows us to easily tap into the [Polkadot](https://polkadot.network) ecosystem and to connect with other blockchains that support the standard, which in turn increases interoperability.

We envision a larger ecosystem of many, connected blockchains- where Dapps on Ethereum could use data from other chains, value could move freely, and Centrifuge Chain can [enable off-chain assets to access financing](https://medium.com/centrifuge/centrifuge-chain-the-gateway-for-real-world-assets-to-the-blockchain-multiverse-41dd5597ecf1) through DeFi.

#### Centrifuge Chain Efficiencies

Centrifuge Chain is optimized specifically for the transactions required by our specific use case. This focus allows us to improve upon our current architecture in a few key ways: speed, cost, storage efficiencies, and privacy.

Ethereum works well for low volumes of high value transactions. High volumes of privacy-requiring use-cases require a different solution. The average business user, SMBs and large enterprises alike, would be paying many times more using Centrifuge on Ethereum compared to their existing solutions. It wouldn’t be worth it for most businesses to make a switch. But what if we could lower that cost and have high throughput capabilities?

The transactions on the Centrifuge Chain are optimized for the small subset of operations needed by our specific use case. This allows for faster execution of logic and finality of transactions. The optimization of transactions, together with our PoS architecture, is also what brings down the transaction costs dramatically. Centrifuge Chain also implements a state rent model that requires users to pay for continuous availability of their data over long periods of time. This encourages decentralization because less resources are required to run a node. Building our own chain also allows us to improve upon the user and developer experience for Centrifuge. Our users require privacy, and this is something we can build for directly — targeting the features they need from the start. For developers, we can provide custom APIs and tools that come with the blockchain node itself instead of smart contract APIs which are harder to integrate with.

While there are downsides to building a single purpose chain, the advantages for our use case outweigh the costs. Integration with other Ethereum and DeFi projects becomes a bit more involved. Our experience with Ethereum development, combined with a standardized bridge to get data to/from our Parity Substrate based chain reduces the overhead substantially, while still benefiting from the upside of our own chain.

#### How does Centrifuge Work?

![Centrifuge OS Flow](./images/CentrifugeOS-flow.png)

A company, such as Paper Records, uses the Centrifuge P2P Network to sign and send an invoice to Spotify. Spotify verifies receipt of the document and its correctness with its signature and sends an updated, signed version of the document back to Paper Records. Centrifuge Chain is used for the node identities, allowing Paper Records to look up Spotify and for Spotify to verify Paper Records. Paper Records is then able to anchor the document hash with both signatures onto Centrifuge Chain. Using these elements Paper Records can now mint an NFT on Centrifuge Chain that represents the unpaid invoice — **_and use this NFT as collateral to access financing_** on other blockchains such as Ethereum. Third parties, from traditional lenders to DeFi lending pools, can verify the value of the NFT against the on-chain anchors and identities, as well as get access granted to the off-chain document whose authenticity can be verified against the on-chain anchor as well.

### Chain Architecture

Centrifuge Chain uses its own native token - the Centrifuge (CFG) token. It also incentivizes Validators and Nominators to participate through a block reward.

Centrifuge Chain is built on [Parity Substrate](https://substrate.dev), and relies on staked Validators to come to consensus over 3 components to commit blocks to the blockchain:

- BABE - block production/authorship
- GRANDPA - finality gadget
- NPoS - Validator selection algorithm

Any node can offer itself as a Validator candindate, but only a limited number will be selected. Only top Validators by stake are elected into the Validator Set. Validators can stake their own CFG and can be elected by staked Nominators.

Validators must run a full node and directly particiate in block authorship, finality, and validity checks. They are able to choose a reward commission that is taken up-front from the reward before splitting the remainder with Nominators.

Validators must stay online and available with very high up-time. They will be held responsible and incur slashing penalties for deliberate attacks, running modified software, severe bugs in the code, and unresponsiveness, to name just a few slashing conditions.

For a deeper dive into the Centrifuge token that powers Centrifuge Chain, read our **[Centrifuge Token Summary](https://centrifuge.io/cfg-token-summary)**.

## Create an account
**Need to create an account?** This section has moved. Read how to [Setup a wallet](/use/setup-wallet).

## Centrifuge Chain Test Networks

Centrifuge has multiple testnets online that have been created to test and stabilize the interaction between Centrifuge’s components, but are unaudited and experimental for now. These testnets have no economic value on-chain.

- **Amber** is our release candidate and our second testnet. It is meant for audits and testing the stability of release candidates. Think of Amber as a way to test beta releases.

- **Flint** is our first testnet that has been running since November 2019. It is meant for breaking changes and testing integration with other parts of the Centrifuge ecosystem. Think of Flint as a way to test previews and alpha releases.

### View the status of the testnets on Polkadot Telemetry:

Some nodes on our testnets are reporting telemetry ot telemetry.polkadot.io. You can look at the information here:

- [Amber Network Telemetry](https://telemetry.polkadot.io/#list/Centrifuge%20Testnet%20Amber%20CC2)
- [Flint Network Telemetry](https://telemetry.polkadot.io/#list/Centrifuge%20Testnet%20Flint%20CC3)

### Getting Testnet Tokens

You can get the testnet tokens _Amber (ACFG)_ or _Flint (FRAD)_ from BlockXLabs' faucet:

[BlockXLabs Faucet](https://faucets.blockxlabs.com/centrifuge)

If you have a need for more ACFG or FRAD than what the faucet provides, we can send you more on a case by case basis. Please reach out to us at chain@centrifuge.io with a description of what you want to use the tokens for and your address so we can send you the appropriate amount.

## Further Resources

### Substrate/Polkadot Resources

- [Kusama Documentation](https://guide.kusama.network/en/latest/try/validate)
- [W3F Guide](https://github.com/w3f/polkadot-secure-validator) on Production Grade Setups for Validators on Substrate chains
- [Guides by Certus One](https://kb.certus.one/) (Cosmos Validator)
- [Architecture Deep Dive by Chorus](https://gdoc.pub/doc/e/2PACX-1vQXb1kd0zqYT8K4B4XYb-lrlfRIuPDXsgiTjj94gDOjw3ezEUAtjvxR8yfbKJypmioKeGRrhkLCtZog)
- [Polkadot Wiki](https://wiki.polkadot.network/docs/) (also covering Substrate relevant features)
