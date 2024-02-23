---
id: privacy-first-tokenization
order: 3
title: Tokenization & Private Data
category: subpage
---

## Intro

### Tokenization and private data sharing
To create an on-chain representation of the off-chain, real world asset, each borrower mints an NFT (Non Fungible Token). This NFT contains the most important information required for pricing, financing and valuation and can be locked into pools on the Centrifuge protocol as representations of the collateral used for the financing. However, any on-chain information attached to these NFTs will be public by default. With real world use cases, investors often require access to extensive information about assets, but the issuer does not normally make this public information.

The Private Data Layer of the Centrifuge Protocol solves this. It allows issuers and investors to access additional asset data securely and privately. This asset data is hashed and the hash anchored on-chain and added to the NFTs metadata to create a verifiable link to the NFT without making the data publicly available. 

Technically, the Private Data Layer is a peer-to-peer network of nodes called PODs (“Private Offchain Data Nodes)” connected with each other to securely share information. All actors using this network can decide with whom and how to share the asset level data. Collaborators can be given read access to more detailed off-chain asset data, e.g. for institutional investors in a pool. It is also possible to define write access to specific data fields, which makes use cases possible such as only allowing a third-party valuation agent to price assets.

![](./images/tokenization.png#width=30%;)