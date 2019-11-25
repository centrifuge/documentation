---
id: protocol-architecture
order: 2
title: Centrifuge protocol architecture
category: 1. Overview
---

## Centrifuge Protocol

The components of the Centrifuge protocol are a collection of Ethereum smart contracts and a peer to peer (P2P) network implemented on libp2p. Ethereum smart contracts are used for (i) maintaining identities in a similar format to the ERC725 standard, (ii) anchoring state commitments and (iii) minting NFTs from off chain Centrifuge documents. The peer to peer network is used for private, off-chain transactions and business document exchange.

For detailed information of the Centrifuge Protocol, its first implementation and limitations, read the [Centrifuge Protocol Yellowpaper](https://github.com/centrifuge/protocol/releases)

![Centrifuge architecture](../../../src/images/cent-node/architecture.png)

## Centrifuge Nodes

The Centrifuge Node provides a simple API interface to interact with the peer to peer network as well as the Ethereum smart contracts. The Node operates on a “service bus” principal where plugins and outside systems can subscribe to messages about specific objects (e.g., a procurement application can subscribe to changes of order objects). The P2P Node abstracts the events that occur on the public blockchain, sidechain, and P2P Layer and translates them into messages on this internal bus for other applications to consume. The Node also offers the connectivity to Ethereum for applications that build on top of the network.

## Centrifuge Identities

A Centrifuge Identity (CentrifugeID) is a unique ID assigned to a participant of Centrifuge OS in a network. Centrifuge identities smart contracts on Ethereum. It keeps track of the different cryptographic keys in use and enforces that this data can only be modified by the creator and/or a delegate chosen by the creator.

An identity has the following credentials:

* Peer to Peer Messaging Encryption Keys: are used for message encryption. These keys are used to identify the nodes over the P2P network and establish an encrypted communication channel between peers.

* Signing Keys: Documents in Centrifuge are signed with signing keys. These signatures are a part of the Merkle root that is anchored on the public chain and verifiable at a later time.

* Ethereum Accounts: When interacting with a smart contract on Ethereum, an account needs to be linked to the identity to act on its behalf. The linked Ethereum accounts are the accounts that are allowed to interact with DApps utilizing Centrifuge OS.

The unique identifier of a participant in the Centrifuge protocol is equivalent to the Ethereum address of his/her identity contract. Centrifuge is adopting the DID-compatible ERC725v1 Ethereum standard for self sovereign identities. More information can be found [here](https://w3c-ccg.github.io/did-spec/).

## Documents within the protocol
A document within the Centrifuge protocol is a structured set of fields with specific types. The protocol supports any document types as long as the formats are agreed upon and shared between the participants, e.g. a document can be an invoice or a purchase order with agreed upon fields and line items. The structure of the document becomes important for reaching consensus by attaching signatures to the document state, as well as creating specific attestations about a document at a later point in time. Documents are exchanged encrypted, and are only accessible for parties involved in this private data exchange. Collaborators can be added and removed from a document. Different collaborators can update a document and publish new versions within the set of nodes with access. A smart contract called AnchorRepository is used for carbon dating state updates and serves as a bulletin board to ensure that the update is made known to all collaborators.
