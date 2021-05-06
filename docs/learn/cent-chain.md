---
id: cent-chain
order: 4
title: Deep Dive into our Cent chain
contributors: <Dennis Wellmann:dennis@centrifuge.io>, <Cassidy Daly:cassidy@centrifuge.io>
---

## Intro
Centrifuge Chain is optimized specifically for the transactions required by our specific use case. This focus allows us to improve upon our current architecture in a few key ways: speed, cost, storage efficiencies, and privacy.
Ethereum works well for low volumes of high value transactions. High volumes of privacy-requiring use-cases require a different solution. The average business user, SMBs and large enterprises alike, would be paying many times more using Centrifuge on Ethereum compared to their existing solutions. It wouldn’t be worth it for most businesses to make a switch. But what if we could lower that cost and have high throughput capabilities?

The transactions on the Centrifuge Chain are optimized for the small subset of operations required by the Centrifuge protocol. This allows for faster execution of logic and finality of transactions. The optimization of transactions, together with our PoS architecture, is also what brings down the transaction costs dramatically. Centrifuge Chain also implements a state rent model that requires users to pay for continuous availability of their data over long periods of time. This encourages decentralization because less resources are required to run a node. Building our own chain also allows us to improve upon the user and developer experience for Centrifuge. Our users require privacy, and this is something we can build for directly — targeting the features they need from the start. For developers, we can provide custom APIs and tools that come with the blockchain node itself instead of smart contract APIs which are harder to integrate with.

While there are downsides to building a single purpose chain, the advantages for our use case outweigh the costs. Integration with other Ethereum and DeFi projects becomes a bit more involved. Our experience with Ethereum development, combined with a standardized bridge to get data to/from our Parity Substrate based chain reduces the overhead substantially, while still benefiting from the upside of our own chain.

## Substrate/Polkadot
Centrifuge Chain is built on Substrate and will connect to the Polkadot Relay Chain as a Parachain. A parachain is a blockchain that is connected to a larger relay chain. The goal is for the relay chain to provide a high level of security, with its large validator set and high value at stake, to all of its connected parachains. Centrifuge plans to become a parachain to outsource its chain security to achieve a higher level of security at a better cost - allowing Centrifuge to focus on its core features. Another important benefit for Centrifuge will be using the relay chain to bridge to other chains in the Polkadot ecosystem.

There is a lot more information available [here](https://wiki.polkadot.network/docs/en/learn-parachains) for those who want to dive deeper!

Polkadot will auction the first parachain slots later this year - and Centrifuge plans to be one of the first projects to obtain a parachain slot.

## Test Networks
Centrifuge has multiple testnets online that have been created to test and stabilize the interaction between Centrifuge’s components, but are unaudited and experimental for now. These testnets have no economic value on-chain.

- Amber is our release candidate and our second testnet. It is meant for audits and testing the stability of release candidates. Think of Amber as a way to test beta releases.
- Flint is our first testnet that has been running since November 2019. It is meant for breaking changes and testing integration with other parts of the Centrifuge ecosystem. Think of Flint as a way to test previews and alpha releases.

### View the status of the testnets on Polkadot Telemetry:
Some nodes on our testnets are reporting telemetry ot telemetry.polkadot.io. You can look at the information here:
- [Amber Network Telemetry](https://telemetry.polkadot.io/#list/Centrifuge%20Testnet%20Amber%20CC2)
- [Flint Network Telemetry](https://telemetry.polkadot.io/#list/Centrifuge%20Testnet%20Flint%20CC3)

## Bridge
Centrifuge Chain supports the [ChainSafe Bridge Pallet](https://github.com/ChainSafe/chainbridge-substrate) which enables users to securely move assets between Centrifuge Chain and Ethereum. It is a bi-directional blockchain bridge to allow data and value transfer between both chains.
The Centrifuge<>Ethereum Bridge currently has 6 whitelisted, trusted relayers to both networks that have been added through on-chain democracy referenda. The authorized set currently includes 2 Centrifuge relayers and 4 external relayers that are also validators on Centrifuge Chain: PureStake, ChorusOne, Staked.us, and Stake Capital.

Read more about the bridge design in the [ChainBridge Specification](https://github.com/ChainSafe/ChainBridge/blob/master/docs/spec.md).
The Centrifuge<>Ethereum bridge currently supports Substrate Native <> ERC20 token transfers.

## Governance
Centrifuge Chain has a formalized governance system that is encoded on-chain utilizing the [Substrate democracy pallet](https://crates.io/crates/pallet-democracy). This enables on-chain voting mechanisms for binding and transparent governance by CFG token holders.

To make any change to the Centrifuge Chain requires a stake-weighted majority. CFG holders can vote with their stake on referenda that are proposed by the Centrifuge community or the Centrifuge Chain Council; a body of 7 members elected by CFG holders.

CFG holders can propose and vote on changes such as runtime upgrades, distribution of treasury funds, chain parameters, and the governance system itself. CFG holders vote on proposals with their tokens, and increase the weight of their vote by locking up tokens for extended periods of time along with their vote.

## Centrifuge Chain Council
The Centrifuge Chain Council comprises a body of 7 elected members who gain prioritized voting rights over other CFG holders. The purpose of the council is to propose referenda beneficial to the Centrifuge Network, based on member's expertise and experience in developing, maintaining and using Centrifuge. The council also serves to represent passive CFG holders who may not participate in all referenda.

Though Public Referenda can be proposed by any CFG holder, the vote needed to pass is generally super-majority carried, adaptive to the voter turnout. However, when the Council proposes a motion and >3/4 of the Council vote in favour of the proposal, the vote becomes a simple majority-carries with no reference to turnout. When a proposal is unanimously voted in favor by the council, it benefits from negative turnout bias. This requires a heavy supermajority of nay votes to reject at low turnouts, but as turnout increases towards 100%, it becomes a simple majority-carries. 