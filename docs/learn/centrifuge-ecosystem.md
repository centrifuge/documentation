---
id: centrifuge-ecosystem
order: 2
title: Centrifuge Ecosystem
contributors: <Dylan Dedi:dylan@centrifuge.io>, <Sounak Pradhan:sounak@abc.io>
---

## Our Tech Stack

![](https://storage.googleapis.com/centrifuge-hackmd/upload_97fee2b240526bdc58d21e94b8ed61ba.png)

### Tinlake

Tinlake is the consumer facing Dapp used by asset originators and investors to finance assets. This is currently built on Ethereum, Tinlake communicates to the Centrifuge Chain via a Chainsafe bridge, but moving forward Tinlake will fully migrate to the Centrifuge Chain.

Tinlake allows for on-chain borrowing against collateralized assets completely managed by smart contracts. Not only does Tinlake enable Asset Originators to access the growing liquidity in the Decentralized Finance ecosystem, it also enables stablecoin issuers to offer a stable store of value backed by collateralized asset pools. Ultimately, Tinlake will become a fully decentralized financing protocol that interoperates with different blockchains and plugs into a variety of funding sources, including a variety of stablecoins.

### Centrifuge Chain

**Centrifuge Chain is the home for real-world assets (RWA) on-chain.** It is a Proof-of-Stake blockchain built on Substrate that enables users to bring their assets on-chain as non-fungible tokens (NFTs). This is the starting point to unlock financing for any type of asset through DeFi. Bridged to Ethereum from day 1.
Centrifuge Chain uses its own native token - the Centrifuge (CFG) token. It also incentivizes nodes (known as Collators) and Nominators to participate through a block reward. This public chain is owned and operated by no single party: the Centrifuge token empowers its holders with an on-chain governance mechanism that empowers token holders to guide the development of Centrifuge. The chain also employs the Centrifuge token to stake value and provides rewards for security and for Centrifuge adoption, currently through liquidity rewards.

**Centrifuge Chain is built on Parity Substrate, and is currently transitioning from a sovereign chain to a parachain on Polkadot.** It relies on staked nodes (Collators) to author blocks and, once Centrifuge Chain becomes a parachain, they will maintain the Centrifuge parachain by collecting transactions from users and producing state transition proofs for Polkadot Relay Chain validators. Any node can offer itself as a Collator candidate, but only a limited number will be selected. Only top Collators by stake are elected into the Active Set. Collators can stake their own CFG and can be elected by staked Nominators.

In order to secure a parachain slot, **Centrifuge will host a Crowd Loan from DOT holders in a Parachain Loan Offering (timeline TBA!).** DOT holders who stake their tokens on behalf of the Centrifuge parachain slot will receive CFG as a reward.

### P2P protocol and Node

The p2p protocol provides a method to create, exchange and verify asset data and is used for private, off-chain data exchange. Asset originators can selectively share asset details with service providers who can assess the data and contribute pricing and underwriting information to the document. The data origin can be verified using cryptographic signatures. The components of the p2p protocol are a collection of Ethereum smart contracts and a peer to peer (p2p) network implemented on libp2p. Ethereum smart contracts are used for

1.  maintaining identities in a similar format to the ERC725 standard,
2.  Anchoring state commitments
3.  Minting NFTs from off chain Centrifuge documents.

The Centrifuge Node provides a simple API interface to interact with the peer to peer network as well as the Ethereum smart contracts.

## Centrifuge Token

The Centrifuge token (CFG) powers the Centrifuge Chain. CFG is designed to incentivize desirable behavior on Centrifuge Chain — so called mechanism design — to create a robust, decentralized system. Owning CFG gives users a stake in the Centrifuge network and can be used to pay for transaction fees, stake towards Collators, and participate in Centrifuge on-chain governance. It will also incentivize chain security - both by rewarding DOT holders in the Parachain Loan Offering, and by distributing a block reward to Collators and Nominators.
Centrifuge also empowers its holders with governance. Centrifuge Chain uses Substrate’s native governance module, comprising an elected council and the ability to administer network upgrades.

As the utility of Centrifuge grows, the Centrifuge token will capture the growing value provided to users of the network through each of its utilities. This value is primarily captured in the use of CFG for transaction fees, and additionally through its importance in Governance of the network. The token will also serve as a store-of-value through the implementation of the insurance DAO in which CFG will be staked.

## Integrations/Composability

### The ETH/DOT Relationship

Centrifuge Chain bridges the Ethereum and Polkadot ecosystems - bringing DeFi liquidity from both to finance real-world assets on Tinlake.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_72394c0efdb9b3a89c451e0b7803554d.png)

This gives Centrifuge an edge on accessing two of the biggest ecosystems in crypto: one for DeFi liquidity today (ETH) and one for speed and a growing ecosystem (DOT).

### Current Integrations

Centrifuge Chain is built on substrate and bridged to Ethereum from day 1 through Tinlake. This enables us to plug into on-chain DeFi liquidity across platforms as is reflected in our partnerships with e.g. MakerDAO and Aave.

With MakerDAO, Centrifuge has been collaborating as the first protocol to back its Multi Collateral DAI with tokenized, real-world assets. This is a milestone for MakerDAO and the wider DeFi ecosystem as it not only diversifies collateral risk, but also bridges trillions in volume to DeFi. On the flip side, DeFi opens up a whole new (financial) universe to those companies that have been traditionally neglected by the prevailing financial system. Predatory lending and banks are replaced by smart contracts: a decentralized line of credit approved by a DAO.

MakerDAO is a first, and Centrifuge continues innovating with Aave and other large DeFi protocols to unlock instant liquidity.

## Our community

### Platforms

We have several social platforms for collaborative discussion, each serving a different purpose. Here’s a quick overview:

- [Telegram Chat](http://t.me/centrifuge_chat)
- [Telegram Announcements](http://t.me/centrifuge)
- [Forum](https://gov.centrifuge.io/)
- [Discord](https://discord.gg/yEzyUq5gxF)
- [Newsletter](https://centrifuge.io/newsletter/)

### Participate

You can take a more active role in the Centrifuge community through the following:

- Invest in Tinlake
- Originate Assets
- Hold CFG
- Become a validator
- Get funded for a project

To learn more about how to get involved in these ways, head to our [Discord](https://discord.gg/yEzyUq5gxF).
