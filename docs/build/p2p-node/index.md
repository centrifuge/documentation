---
id: p2p-node
order: 3
title: Centrifuge POD (P2P Node)
contributors: <Dennis Wellmann:dennis@centrifuge.io>, <Cosmin Damian:cosmin@centrifuge.io>
---

## Introduction

### Centrifuge POD (P2P Node)

The Centrifuge P2P network is built to support a new generation of applications for the financial supply chain. Centrifuge provides users with the ability to remove intermediaries and create financial business documents as Non-Fungible Tokens (NFTs) that have long-term verifiability, are censorship resistant, and are stored and processed in a decentralized fashion.

The Centrifuge P2P node provides a method to create, exchange, and use the data that exists in the financial supply chain. It creates transparent and shareable relationships between interacting companies. Data owners can selectively share the information with their business partners or other users of the network. Centrifuge provides a censorship resistant way to verify the authenticity of data that is transacted through and stored in it. This creates the foundation for data ownership, privacy, and transparency throughout the financial supply chain and also allows third parties to offer additional services, such as instant and decentralized financing of invoices and orders, trade credit insurance and financing supply chains multiple levels deep.

The underlying Centrifuge protocol has a two layered approach. It is built on Substrate which allows businesses to transact freely on a single verifiable source of truth. The public blockchain is used for business identities, committing document status and minting business NFTs. In addition, a peer to peer network enables the exchange of business documents in a private and verifiable way.

### Substrate

Substrate is a modular blockchain framework that enables creating custom blockchains. Centrifuge uses Substrate as the source of truth for document anchoring, heavily involved in the peer to peer document consensus protocol.

For more information, see the [Parity Substrate Project](https://substrate.dev/)

### Centrifuge is Beta Software

Centrifuge and all its components are Beta Software. There will be substantial changes in the future and backwards compatibility is not guaranteed. Please use with caution. See [Disclaimer](/centrifuge-node/further-reading/disclaimer/). Also, please read the details about the [protocol and implementation limitations](/cent-node/further-reading/protocol-limitations/).

## Protocol Architecture

### Centrifuge Protocol

The components of the Centrifuge protocol are a collection Substrate Pallets and a peer to peer (P2P) network implemented on [libp2p](https://libp2p.io/). Substrate Pallets are used for maintaining identities, minting NFTs from off-chain Centrifuge documents, and anchoring state commitments.

![Centrifuge architecture](./images/architecture.png)

### Centrifuge PODs

The Centrifuge POD provides a simple API interface to interact with the p2p network and the Centrifuge Chain. The POD operates on a “service bus” principal where plugins and outside systems can subscribe to messages about specific objects (e.g., a procurement application can subscribe to changes of order objects). The POD abstracts the events that occur on the public blockchain and P2P Layer and translates them into messages on this internal bus for other applications to consume. The POD also offers the connectivity to Centrifuge Chain for applications that build on top of the network.

### Centrifuge Identities

A Centrifuge Identity (CentrifugeID) is a unique ID assigned to a participant of Centrifuge in a network. It keeps track of the different cryptographic keys in use and enforces that this data can only be modified by the creator and/or a delegate chosen by the creator.

An identity has the following credentials:

- Peer to Peer Messaging Encryption Keys: are used for message encryption. These keys are used to identify the nodes over the P2P network and establish an encrypted communication channel between peers.

- Signing Keys: Documents in Centrifuge are signed with signing keys. These signatures are a part of the Merkle root that is anchored on the public chain and verifiable at a later time.

The unique identifier of a participant in the Centrifuge protocol is equivalent to the Centrifuge Chain account ID.

### Documents within the protocol

A document within the Centrifuge protocol is a structured set of fields with specific types. The protocol supports any document types as long as the formats are agreed upon and shared between the participants. E.g.: A document can be an invoice or a purchase order with agreed upon fields and line items. The structure of the document becomes important for reaching consensus by attaching signatures to the document state, as well as creating specific attestations about a document at a later point in time. Documents are exchanged encrypted, and are only accessible for parties involved in this private data exchange. Collaborators can be added and removed from a document. Different collaborators can update a document and publish new versions within the set of nodes with access.

### Centrifuge Chain

In order to interact with Centrifuge Chain, you can either start your own node and sync with the network or use one of the public full nodes that Centrifuge provides:

- mainnet: `wss://fullnode.centrifuge.io`
- catalyst: `wss://fullnode.catalyst.cntrfg.com`

## Creating a Centrifuge Chain Account

### Install Parity Substrate Subkey

Before you can create a new Centrifuge Chain account, you have to install a version of Parity Substrate Subkey [here](https://github.com/paritytech/substrate/tree/v2.0.0-alpha.3/bin/utils/subkey).
To install, we recommend you can follow:

#### Build native binary

Download and install Rust nightly version:

```bash
rustup update nightly-2020-02-27
rustup toolchain install nightly-2020-02-27
rustup default nightly-2020-02-27
rustup target add wasm32-unknown-unknown --toolchain nightly-2020-02-27
```

Checkout https://github.com/paritytech/substrate/tree/v2.0.0-alpha.3

```bash
cargo build --release
```

#### Use docker version

`parity/subkey:2.0.0-alpha.3`

### Create a new account

#### Mainnet

```bash
$ subkey --sr25519 --network centrifuge generate
```

#### Testnets

```bash
$ subkey --sr25519 generate
```

You can now fund the newly generated Centrifuge Chain account with CFG by making a request in our discord `#dev` channel

## POD Bootstrap

### Installation

Before being able to transfer and anchor financial documents and mint NFTs, you need to spin up a Centrifuge POD on your machine and [create an account](#account-creation).

Follow these steps to install the Centrifuge POD:

1. Download and install the latest [Centrifuge binary](https://github.com/centrifuge/go-centrifuge/releases). <!-- update link-->

If you want to build the node from source, follow the description in the [source code](https://github.com/centrifuge/go-centrifuge/blob/develop/README.md).

2. Add the Centrifuge binary to the `$PATH` or modify the command invocation to point to the correct library.

### Configuration

Run `centrifuge createconfig` as seen in the example below. This command automatically creates an identity and the required key pairs. It then generates the `config.yaml` file required to run the node.

```bash
$ centrifuge createconfig \\
-n mainnet \\
-t <DEFINE_CONFIG_DIR_NAME> \\
-a 8082 -p 38204 \\
--centchainurl <your centchain endpoint> \\
--ipfsPinningServiceName pinata \\
--ipfsPinningServiceURL <pinata endpoint> \\
--ipfsPinningServiceAuth <your pinata auth token> \\
--podOperatorSecretSeed <secret seed for POD operator> \\
--podAdminSecretSeed <secret seed for POD admin> \\
```

**NOTE**:

- **The generated `config.yaml` includes sensitive information regarding the accounts used to authenticate and sign transactions. Make sure to store it in a secure environment.**


- `podOperatorSecretSeed` - if this is omitted a new secret seed will be generated by the node, please see [POD operator](#pod-operator) for more information regarding this account.


- `podAdminSecretSeed` - if this is omitted a new secret seed will be generated by the node, please see [POD admin](#pod-admin) and [token usage](#usage) for more information regarding this account.


- For more information regarding IPFS pinning, please see [IPFS](#ipfs).

#### Network Configurations

[//]: # (TODO: Update POD link)

Besides `mainnet`, Centrifuge has support for the `catalyst` test network. The network configuration for the different testnets is also part of the [code base](https://github.com/centrifuge/go-centrifuge/blob/master/build/configs/default_config.yaml). This enables the client user to run on top of them with minimum configuration needed. Please find the most important information summarized below:

##### Catalyst

Use network `-n catalyst`.

This network is a test network running a version of the Centrifuge Chain modified for testing.

- Client: parity
- Purpose: Testnet
- Bootstrap Nodes - ask our team in the DAO Slack channel.

##### Mainnet

Use network `-n mainnet`.

This network is the production network, the Centrifuge Chain.

- Client: parity
- Purpose: Mainnet
- Bootstrap Nodes - ask our team in the DAO Slack channel.

#### Changing the default configuration

[//]: # (TODO: Update POD link)

The default configuration with all available options is accessible [here](https://github.com/centrifuge/go-centrifuge/blob/develop/build/configs/default_config.yaml). You may adjust certain configurations according to your requirements.

- Configure node under NAT

  If you want your node to be accessible outside your private network, you will need to manually specify the External IP of the node:

  ```yaml
  p2p:
    externalIP: "100.111.112.113"
  ```

#### Open ports for incoming P2P connections

To accept the incoming P2P connections, you will need to open two ports for incoming TCP connections.

- P2P Port: open ingress/egress. This port will be configured under `p2p` `port` in your config.
- API Port: restrict at will, only you or your upstream systems should need to talk to it. This port will be configured as `nodeport` in your config.

### Running the Centrifuge POD after creating the configuration

You can run the Centrifuge POD using the `config.yaml` file you created:

```bash
$ centrifuge run -c /<PATH-TO-CONFIG-DIR>/config.yaml
```

Replace the `PATH-TO-CONFIG-DIR` with the location of the `config.yaml` file.

### Post Install Verification

To make sure that your Centrifuge POD setup was successful and is running properly you can ping your node.

```bash
$ curl -X GET "http://localhost:8082/ping" -H "accept: application/json"
```

It will return (e.g. Catalyst):

`{"version":"...","network":"catalyst"}`

---

## Accounts

[//]: # (TODO: Update the swagger link to the latest version.)
The `Accounts` section of our [swagger API docs](https://app.swaggerhub.com/apis/centrifuge.io/cent-node/2.1.0#/Accounts) provides
an overview of all the endpoints available for handling accounts.

---

An account is the POD representation of the user that is performing various operations. The identity of this account
is used when storing documents and performing any action related to the document handling process such as - starting long-running
tasks for committing or minting documents, or sending the document via the p2p layer.

### Account Data

The data stored for each account has the following JSON format:

```json
{
  "data": [
    {
      "identity": "string",
      "document_signing_public_key": [
        0
      ],
      "p2p_public_signing_key": [
        0
      ],
      "pod_operator_account_id": [
        0
      ],
      "precommit_enabled": true,
      "webhook_url": "string"
    }
  ]
}
```

`identity` - hex encoded Centrifuge Chain account ID. This is the identity used for performing the operations described above.

`document_signing_public_key` - read-only - public key that is used for signing documents, this is generated for each account that is created on the POD.

`p2p_public_signing_key` - read-only - public key that is used for interactions on the P2P layer, this is generated during POD [configuration](#configuration).

`pod_operator_account_id` - read-only - the [POD operator](#pod-operator) account ID.

`precommit_enabled` - flag that enables anchoring the document prior to requesting the signatures from all collaborators.

`webhook_url` - URL of the [webhook](#webhooks) that is used for sending updates regarding documents or jobs.

### Account Creation

[//]: # (TODO: Update the swagger link to the latest version.)

An account can be created by calling the [account creation endpoint](https://app.swaggerhub.com/apis/centrifuge.io/cent-node/2.1.0#/Accounts/generate_account_v2) with a valid admin token (see [token usage](#usage)),
and providing the required information - `identity`, `precommit_enabled`, `webhook_url`.

The successful response for the account creation operation will contain the fields mentioned above in [account data](#account-data).

### Account Boostrap

**NOTE** - The following steps are required to ensure that the POD can use a newly created account.

1. Store the `document_signing_public_key` and `p2p_public_signing_key` in the `Keystore` storage of Centrifuge Chain.

   This can be done by submitting the `addKeys` extrinsic of the `Keystore` pallet.

2. Add the POD operator account ID as a `PodOperation` proxy to the `identity`.

   This can be done by submitting the `addProxy` extrinsic of the `Proxy` pallet.

### Identities

Most of the operations performed by the POD rely on the presence of proxies that are used to:
- sign JSON Web3 Tokens used for [authentication](#authentication).
- sign extrinsics that are performed on behalf of the identity, see [POD operator](#pod-operator).

#### POD-specific Accounts

##### POD Admin

The POD admin is an account that is stored on the POD, and its sole purpose is to authorize access for some account related endpoints such as
account generation, accounts listing, and account details retrieval.
This is required since not every user should have the rights to perform the mentioned actions.

##### POD Operator

The POD operator is an account that is stored on the POD, and it is used for submitting extrinsics on behalf of the provided identity.
This is required since an identity can be an anonymous proxy, which is unable to sign any extrinsics.

Given the purpose of this account, it is expected that it's properly funded in order to cover for the transaction fees.

---

## Authentication

Authentication is performed using the JSON Web3 Tokens described [here](https://github.com/hamidra/jw3t).

### Authentication Header

The Centrifuge POD is capable of maintaining multiple accounts. Accounts are used to track of the different users that might be using a single instance of a Centrifuge POD. We use an HTTP header for specifying a JSON Web3 Token that holds information regarding the identity to be used and its delegate.

| Header             | Value               |
| ------------------ |---------------------|
| **authorization:** | Bearer <jw3t_token> |

### Token

The format of the JW3 token that we use is:

`base_64_encoded_json_header.base_64_encoded_json_payload.base_64_encoded_signature`

Where the un-encoded parts are as follows:

Header:

```json
{
  "algorithm": "sr25519", 
  "token_type": "JW3T", 
  "address_type": "ss58"
}
```

---

Payload:

```json
{
  "address": "delegate_address",
  "on_behalf_of": "delegator_address",
  "proxy_type": "proxy_type",
  "expires_at": "1663070957",
  "issued_at": "1662984557",
  "not_before": "1662984557"
}
```

`address` - SS58 address of the proxy delegate (see [usage](#usage) for more info).

`on_behalf_of` - SS58 address of the proxy delegator (see [usage](#usage) for more info).

`proxy_type` - one of the allowed proxy types (see [usage](#usage) for more info):

- `PodAdmin` - defined in the POD.
- `Any` - defined in the Centrifuge Chain.
- `PodOperation` - defined in the Centrifuge Chain.
- `PodAuth` - defined in the Centrifuge Chain.

`expires_at` - token expiration time.

`issued_at` - token creation time.

`not_before` - token activation time.

---

Signature - the `Schnorrkel/Ristretto x25519` signature generated for `json_header.json_payload`.

---

### Usage

The POD has 2 types of authentication mechanisms:

1. On-chain proxies - this is the most commonly used mechanism, and it is used to authenticate any on-chain proxies of the identity.

   In this case, the `address`, `on_behalf_of` and `proxy_type` should contain the information as found on-chain.

   Example:

   `Alice` - identity.

   `Bob` - proxy of `Alice` with type `PodAuth`.

   Token payload:

   ```json
   {
     "address": "ss58_address_of_bob",
     "on_behalf_of": "ss58_address_of_alice",
     "proxy_type": "PodAuth",
     "expires_at": "1663070957",
     "issued_at": "1662984557",
     "not_before": "1662984557"
   }
   ```

2. POD admin - this is used when performing authentication for restricted endpoints.

   In this case, the `address` and `on_behalf_of` fields should be equal and contain the SS58 address of the POD admin, and
   the `proxy_type` should be `PodAdmin`.

   Example:

   ```json
   {
     "address": "pod_admin_ss58_address",
     "on_behalf_of": "pod_admin_ss58_address",
     "proxy_type": "PodAdmin",
     "expires_at": "1663070957",
     "issued_at": "1662984557",
     "not_before": "1662984557"
   }
   ```

---

## REST API Example Uses

[//]: # (TODO: Update the swagger link to the latest version.)
Once the Centrifuge POD is up and running you are able to start submitting documents and tokenize these documents via the Rest API. Please refer to the [swagger API docs](https://app.swaggerhub.com/apis/centrifuge.io/cent-node/2.1.0) documentation for a complete list of endpoints. A short summary can be found below:

### NFTs

[//]: # (TODO: Update the swagger link to the latest version.)

The `NFTs` section of our [swagger API docs](https://app.swaggerhub.com/apis/centrifuge.io/cent-node/2.1.0#/NFTs) provides
an overview of all the endpoints available for handling document NFTs.

The NFT endpoint provides basic functionality for minting NFTs for a document and retrieving NFT specific information
such as attributes, metadata, and owner.

#### IPFS

When minting NFTs, additional information is stored on-chain and on IPFS, as follows:

- document fields that are specified in the minting request are saved on IPFS under the following format:

  ```json
  {
    "name": "ipfs_name",
    "description": "ipfs_description",
    "image": "ipfs_image",
    "properties": {
      "AssetIdentifier": "0x25680a49ff1b6368f7e243130ff957f9523b917c8c83d79aab97c0ef99fd3b15",
      "AssetValue": "100",
      "MaturityDate": "2022-10-13T11:07:28.128752151Z",
      "Originator": "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d",
      "result": "0x0000000000000000000000000000000100000000000000000000000000000064"
    }
  }
  ```

  **NOTE** - at the moment, the only IPFS pinning service that is supported is [pinata](https://www.pinata.cloud/).


- the IPFS hash of the above mentioned fields is set as metadata to the NFT on chain, in the following format - `/ipfs/QmfN7u6hMRHxL83Jboa4bHgme4PJmcS4eQFnkrXye5ctAM`


- the document ID and document version are set as attributes to the NFT on chain.


**NOTE** - All the above information can be found on chain by querying the related storages of the `Uniques` pallet.

---

### Documents

[//]: # (TODO: Update the swagger link to the latest version.)

The `Documents` section of our [swagger API docs](https://app.swaggerhub.com/apis/centrifuge.io/cent-node/2.1.0#/Documents) provides
an overview of all the endpoints available for handling documents.

The main purpose of the POD is to serve as a handler for documents that contain private off-chain data, as described above.

---

### Jobs

[//]: # (TODO: Update the swagger link to the latest version.)

The `Jobs` section of our [swagger API docs](https://app.swaggerhub.com/apis/centrifuge.io/cent-node/2.1.0#/Jobs) provides
an overview of all the endpoints available for retrieving job details.

---

The jobs endpoint returns detailed information for a job.

A job is a long-running operation that is triggered by the POD when performing actions related to documents and/or NFTs.

### Webhooks

[//]: # (TODO: Update the swagger link to the latest version.)

The `Webhook` section of our [swagger API docs](https://app.swaggerhub.com/apis/centrifuge.io/cent-node/2.1.0#/Webhook) provides
an overview the notification message that is sent by the POD for document or job events.

---

## Disclaimer

### Centrifuge is provided "As Is"

The "Software", which includes but is not limited to the source code of components of Centrifuge, related repositories, client implementations, user interfaces, compiled or deployed binaries and smart contracts all of its components, libraries, supporting services (including, but not limited to, build pipelines, tests, deployments, "boot nodes", code samples, integrations) is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement.

In no event shall the authors, maintainers, operators or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the Software or the use or other dealings in the Software.

Centrifuge and all its components are Beta Software, which might and will lead to substantial changes in the future, re-architecture, addition and removal of features, as well as unexpected behavior. Use at your own risk.

## Protocol Limitations

Centrifuge is in an early stage of its development. The protocol and its first client implementation have a limited feature set compared to the end-vision. Not all features are implemented yet, and tradeoffs between security, speed, end-user features, and protocol flexibility are made continuously.

Following is a list of important limitations and not yet implemented features of Centrifuge.

### The Meaning of a Signature

When two Centrifuge POD exchange documents with each other, they automatically attach signatures to the transferred documents after validation of the data payload and signatures/keys. A Centrifuge POD validates the structural integrity of a received document as well as the validity of previous signatures compared to the public keys of the corresponding Centrifuge ID of the counterparty. A Centrifuge POD itself does not validate if the document data makes sense from a business point of view.

A Centrifuge POD is a technical client to Centrifuge. This client exchanges and signs data in well-known formats. It does not validate document data authenticity.

Data authenticity and correctness are always validated by the upstream system. E.g. the accounting system interacting with a Centrifuge POD.

A signature of a collaborator on a Centrifuge document signifies the technical receipt and validation of a message. It does not signify the agreement that a document itself is valid, e.g. if an invoice amount is matching the underlying purchase order.

It is possible to attach additional signatures to a document (e.g., with custom attributes) to indicate "business agreement" of a document. However, this is not part of the protocol specifications and is the responsibility of an upstream system.

### Collaborator List Visible to all Collaborators

Important: Nobody outside of a document can view or deduce the parties who collaborate on a document.

However, the list of collaborators on any single document is visible to all of the document's collaborators. This is part of the implementation approach where signatures are gathered from all collaborators on a document when anchoring a new state. To do this, the list of collaborators has to be known when making an update.

For the initial implementation, we assume that businesses only add their already known and trusted business partners to a document as a collaborator rendering this limitation insignificant.

### No Document Forking

Centrifuge does not support forking or successive merging of document state. If disagreement of document state between collaborators exist this has to be solved by the user by creating a new document.

Collaborators can withhold their signature on a given document update if they choose to do so. The mitigation to this behavior is to remove the withholding/offline collaborator from the document's collaborator list and re-issue the document update and/or create a new document based on the original document data with a new set of collaborators.

For the initial implementation, we assume that businesses only add their trusted business partners to a document as a collaborator. With that, the likelihood of disagreement on the protocol level is low.

#### Blocking Document Updates by Malicious Collaborator

It is possible for a malicious collaborator to publish a new document version that blocks other collaborators from updating the original document. This can be done by the malicious collaborator by removing all collaborators from the original document and then publishing a new version with the "next identifier," essentially preventing other collaborators from publishing a new version of the document with this identifier.

Mid-term this will be mitigated by supporting document forking. Short-term the mitigation is as described above: The users can create a new document with the last benign document data and do not add the malicious actor as a collaborator to the document. This will create a new chain of document updates that the malicious collaborator can neither access nor block.

For the initial implementation, we assume that businesses only add their trusted business partners to a document as a collaborator. With that, the likelihood of a malicious actor trying to block document updates is low.

#### Blocking Document Updates by "Accident"/Race condition

Two or more collaborators could try to update a document at the same time. The "first" update that goes through (the first version being anchored) essentially blocks the other from updating the desired document version.

Mitigation is to always have "pre-commit" enabled. Mid-term this is also possible to be mitigated by supporting document forking/merging.

### No Collaborator Signatures Required to Anchor

It is possible for any collaborator to anchor a new document version at any time. Previous collaborator's signatures are not required to anchor/publish a new document version. This is less of a limitation and more of a feature to prevent malicious collaborators from blocking documents by withholding signatures.

Mid-term a feature could be added that requires an `x of n` signature scheme where a certain threshold of collaborator signatures is required to anchor a new state. For now, anybody can publish a new version of a document.
