---
id: privacy-first-tokenization
order: 2
title: Privacy-first tokenization
---

At a fundamental level, there needs to be an on-chain representation of the off-chain, real world asset. For this, each borrower mints an NFT (Non Fungible Token). However, any information attached to these assets, about what they represent, will be public by default. With real world use cases, this is infeasible: investors will require access to extensive information about assets, but the issuer cannot publish all of this information.

The Centrifuge Private Data layer is the solution to this. A network of nodes connect with each other and share data across the network, similar to IPFS.  It is used to create documents and store these off-chain, and then anchor them on-chain. Anchoring is the process of providing proof that a certain document is present on the Private Data layer. This document can then be shared through the Private Data network with collaborators, defined by known identities which are stored on-chain. These can either be given read access, such as institutional investors in the pool, or write access can be given to specific fields, which makes use cases possible such as only allowing a third-party valuation agent to assess assets.

![](./images/tokenization.png#width=30%;)

The NFT that is minted for each asset then contains a reference to the anchor, creating a link between the on-chain representation of the asset (the NFT) and the off-chain, private information.
