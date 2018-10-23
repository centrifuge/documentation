---
id: introduction
title: Introduction
---

## Centrifuge Operating System

Centrifuge is an open, decentralized operating system which provides a method to create, exchange, and use the data that is used in the financial supply chain. It creates transparent and shareable relationships between interacting companies. Data owners can selectively share the information with their business partners or other users of the OS. This creates the foundation for data ownership, privacy, and transparency throughout the financial supply chain. It also allows Third parties to offer additional services based on the information shared with them. The data owners have the power to decide whether or not to take advantage of those services.

Centrifuge OS provides a censorship resistant way to verify the authenticity of data that is transacted through and stored in it.

## Ethereum

Ethereum is a decentralized platform that runs smart contracts. Smart contracts are applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference. Functionality deployed on Ethereum acts as the primary and trusted entry point and anchor for the other Centrifuge OS components. The censorship­ resistance and decentralized nature of the platform provide trustless lookups for Centrifuge OS users. Ethereum allows users to publish identity, reputation management, and document information through Centrifuge OS Smart Contracts without relying on any Third party. Furthermore, Ethereum’s architecture provides a well-tested system for the issuance of
tokens to incentivize honest participation within the OS, issuance of tokens directly related to business documents, as well as decentralized governance layers of the OS at large.

For more information, see [Ethereum Project](https://www.ethereum.org/)

## Centrifuge Identity

A Centrifuge Identity (CentrifugeID) is a unique ID assigned to a participant of the Centrifuge OS in a network. When a new CentrifugeID is generated, a unique public representation of the Indentity is created in the public blockchain as a _smart contract_. The data associated with a CentrifugeID is only modifiable by the creator and/or a delegate chosen by the creator.

A CentrifugeID has the following credentials:

* Peer to Peer Messaging Encryption Keys: are responsible for message encryption. These keys are used to identify the nodes over the P2P protocol.

* Signing Keys: Documents that pass through the P2P layer are signed with the signing keys. These signatures are a part of the merkle root that is anchored on the public chain and verifiable at a later time.

* Ethereuem Accounts: When interacting with a smart contract on Ethereum, an account needs to be linked to the identity to act on its behalf. The linked Ethereum accounts are the accounts that are allowed to interact with DApps utilizing Centrifuge OS.

## Centrifuge Node

The Centrifuge Node serves an interface to the upstream system in addition to being a part of the peer to peer network that forms the Centrifuge OS ecosystem.<!-- (Need more information here).-->
