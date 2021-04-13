---
id: p2p-protocol
order: 5
title: P2P Protocol
contributors: <Dylan Dedi:dylan@centrifuge.io>
---

## Introduction

The Centrifuge Protocol provides a secure method to create, exchange and verify financial data between collaborators. Asset originators can selectively share asset details with service providers who can asses the data and contribute information to the document. The data origin can be verified using cryptographic signatures.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_81ec42645c03abeabe14b15adf24780f.png)

The components of the Centrifuge protocol are a collection of Ethereum smart contracts, TODO HOWISCHAININVOLDED CHAIN TODO and a peer to peer (P2P) network implemented on libp2p. Ethereum smart contracts are used for (i) maintaining identities in a similar format to the ERC725 standard, (ii) anchoring state commitments and (iii) minting NFTs from off chain Centrifuge documents. The peer to peer network is used for private, off-chain transactions and business document exchange.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_063ce9b51fdc6cd93c726cf8b1a636bc.png)

## Node

Each collaborator runs or accesses a Centrifuge node to connect to the network. The Centrifuge Node provides a simple API interface to interact with the peer to peer network as well as the Ethereum smart contracts. The Node operates on a “service bus” principal where plugins and outside systems can subscribe to messages about specific objects (e.g., a procurement application can subscribe to changes of order objects). The P2P Node abstracts the events that occur on the public blockchain, sidechain, and P2P Layer and translates them into messages on this internal bus for other applications to consume. The Node also offers the connectivity to Ethereum for applications that build on top of the network.

## Identities

A Centrifuge Identity (CentrifugeID) is a unique ID assigned to a participant of Centrifuge in a network. Centrifuge identities smart contracts on Ethereum. It keeps track of the different cryptographic keys in use and enforces that this data can only be modified by the creator and/or a delegate chosen by the creator.

An identity has the following credentials:

Peer to Peer Messaging Encryption Keys: are used for message encryption. These keys are used to identify the nodes over the P2P network and establish an encrypted communication channel between peers.

Signing Keys: Documents in Centrifuge are signed with signing keys. These signatures are a part of the Merkle root that is anchored on the public chain and verifiable at a later time.

Ethereum Accounts: When interacting with a smart contract on Ethereum, an account needs to be linked to the identity to act on its behalf. The linked Ethereum accounts are the accounts that are allowed to interact with DApps utilizing Centrifuge.

The unique identifier of a participant in the Centrifuge protocol is equivalent to the Ethereum address of his/her identity contract. Centrifuge is adopting the DID-compatible ERC725v1 Ethereum standard for self sovereign identities. More information can be found here.

## Document

A document is a structured set of fields with specific field types. The protocol supports any document types as long as the formats are agreed upon (via a schema) and shared between selected collaborators. Documents are exchanged encrypted, and are only accessible for parties involved in this private data exchange. Collaborators can be added and removed from a document. Different collaborators can update a document and publish new versions within the set of nodes with access.

A smart contract called AnchorRepository is used for carbon dating state updates ensure that the update is made known to all collaborators. A document anchor is the root hash of the Merkle tree of the document. The tree is constructed by adding all fields of a document together with the collected digital signatures from all collaborators (an identity as defined above) as leaves in the tree.
![](https://storage.googleapis.com/centrifuge-hackmd/upload_c536a5a48472227b3f073ce9be060dac.png)
Publishing this anchor achieves that even if a party is censored on the P2P network, it can find out about the update by checking the Ethereum blockchain. A third party can easily verify the correctness of a received document on-chain and off-chain by reconstructing the Merkle root from the document based on the well-known document structure for the respective document type. Structuring the document as a Merkle tree allows creation of proofs only revealing individual fields of the document as opposed to revealing the entire document when making a statement about it.

Publishing this anchor achieves that even if a party is censored on the P2P network, it can find out about the update by checking the Ethereum blockchain. A third party can easily verify the correctness of a received document on-chain and off-chain by reconstructing the Merkle root from the document based on the well-known document structure for the respective document type. Structuring the document as a Merkle tree allows creation of proofs only revealing individual fields of the document as opposed to revealing the entire document when making a statement about it.

A Centrifuge node can create a document and share it with others. The transport of a document happens privately over secure channels in the P2P network. Every document collaborator keeps a local copy of a document in their storage. An update of a document can be triggered by multiple collaborators and is not restricted to the initial document creator. Whenever a change is made, a calculated merkle root of a document is committed on chain. A new version is only accepted by others if the document root hash exists in the AnchorRepository and the set of mandatory document fields in the new version satisfy protocol-specific requirements.

## NFT

Privacy-enabled NFTs (non-fungible tokens) are a self-mintable, tokenized representation of assets/documents, keeping some or all of the assets attributes private, while a public, decentralized ledger tracks the asset ownership. Privacy-enabled NFTs are compatible with ERC-721 and thus can leverage all infrastructure compatible with ERC-721 NFTs.

Typically the metadata and the detailed information of an NFT is publicly readable on Ethereum. For many use-cases, there is a need to keep data related to the asset private. We propose the use of Merkle proofs that verify the original ownership and document authenticity of an off-chain document, combined with an on-chain document registry that allows the NFT contract to verify the authenticity of a request to mint a specific token.

## Document <> NFT

The creator of a document on the p2p layer can register an NFT through the on-chain NFT registry by submitting an “ownership proof”. The NFTs themselves only hold a minimal set of the data of the original document on-chain to avoid leaking private data. The NFT metadata contains a link back to the on-chain anchor as well as a link to the private document on the p2p layer. The on-chain data is used to identify the document uniquely and allows anyone to verify the NFTs data as well as exchange the full document data privately within the network. The p2p network is operating in such a way that the current NFT holder gains access to the private off-chain information.

A token can be minted by anyone who can prove their claim to a document. The document then receives all of the benefits of standard on-chain NFTs, while an off-chain location holds the verifiable private data. At any point, the current holder of an NFT can gain access to the off-chain document by creating a signature that proves ownership of the private key of the address that owns the NFT. This approach introduces decentralized access control schemes where an NFT ownership change can lead to off-chain access revocation.

## Minting the NFT

### Before Minting

describe using an on-chain token registry, following ERC-721, with a custom mint-method, and a pointer to the off-chain asset via an NFT’s metadata. The NFT registry’s mint-method allows anyone to create a token that represents the off-chain document, who can prove their rightful ownership of the off-chain data. What “ownership” means is up to the NFT registry itself. One example, as in Centrifuge OS, of original ownership could be the proof that the token creator is the supplier that is registered on an invoice. The supplier is the original “owner” of the invoice and is the only one who can register the on-chain representation.

By using precise proofs, we can supply privacy preserving proofs that certain fields are present in the NFT to be minted, without revealing the exact value of these fields. Leaves are created by hashing and encoding the property, value, and salts of the data fields which we want to prove

The mint method on this NFT would expect one proof of "loanAmount", which has been hardcoded as a state variable. It would furthermore also check that the document from which the NFT should be minted has been properly anchored, before minting the NFT

![](https://storage.googleapis.com/centrifuge-hackmd/upload_9dbcbd4a0443c9e3446c07968ad47cfb.png)

## Using an NFT

Any owner of a previously minted privacy-enabled NFT can sign requests for the off-chain data with the private key of the account that currently holds a particular token. The off-chain data store then allows the current NFT owner to interact with the private data.

## Resources

- [P2P Node](https://developer.centrifuge.io/cent-node/) and [NFT](https://developer.centrifuge.io/nfts/overview/introduction/) DevDocs
- [Protocol White Paper](https://staticw.centrifuge.io/assets/centrifuge_os_protocol_paper.pdf)
- [Precise Proofs blog post](https://medium.com/centrifuge/introducing-precise-proofs-create-validate-field-level-merkle-proofs-a31af9220df0)
- [NFT White Paper](https://github.com/centrifuge/paper-privacy-enabled-nfts/releases/download/v1.01/paper-privacy-enabled-nfts.pdf)
