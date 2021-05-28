---
id: p2p-node
order: 3
title: P2P Node
contributors: <Dennis Wellmann:dennis@centrifuge.io>
---

## Introduction

### Centrifuge P2P Node

The Centrifuge P2P network is built to support a new generation of applications for the financial supply chain. Centrifuge provides users with the ability to remove intermediaries and create financial business documents as Non-Fungible Tokens (NFTs) that have long-term verifiability, are censorship resistant, and are stored and processed in a decentralized fashion.

The Centrifuge P2P node provides a method to create, exchange, and use the data that exists in the financial supply chain. It creates transparent and shareable relationships between interacting companies. Data owners can selectively share the information with their business partners or other users of the network. Centrifuge provides a censorship resistant way to verify the authenticity of data that is transacted through and stored in it. This creates the foundation for data ownership, privacy, and transparency throughout the financial supply chain and also allows third parties to offer additional services, such as instant and decentralized financing of invoices and orders, trade credit insurance and financing supply chains multiple levels deep.

The underlying Centrifuge protocol has a two layered approach. It is built on Ethereum & Substrate which allows businesses to transact freely on a single verifiable source of truth. The public blockchains are used for business identities, committing document status and minting business NFTs. In addition, a peer to peer network enables private, off-chain transactions and is used to send business documents back and forth.

### Ethereum

Ethereum is a decentralized platform that runs smart contracts. Functionality deployed on Ethereum acts as the primary and trusted entry point and anchor for the other Centrifuge components. The censorship resistance and decentralized nature of the platform provides trustless lookups for users. Ethereum allows users to publish identity and document information through our Centrifuge Smart Contracts without relying on any third party. Furthermore, Ethereum’s architecture provides a well-tested system for the issuance of tokens to incentivize honest participation within the OS, issuance of tokens directly related to business documents, as well as decentralized governance layers of the OS at large.

For more information, see the [Ethereum Project](https://www.ethereum.org/).

### Substrate

Substrate is a modular blockchain framework that enables creating custom blockchains. Centrifuge uses Substrate as the source of truth for document anchoring, heavily involved in the peer to peer document consensus protocol.

For more information, see the [Parity Substrate Project](https://substrate.dev/)

### Centrifuge is Beta Software

Centrifuge and all its components are Beta Software. There will be substantial changes in the future and backwards compatibility is not guaranteed. Please use with caution. See [Disclaimer](/centrifuge-node/further-reading/disclaimer/). Also, please read the details about the [protocol and implementation limitations](/cent-node/further-reading/protocol-limitations/).

## Protocol Architecture

### Centrifuge Protocol

The components of the Centrifuge protocol are a collection of Ethereum smart contracts, Substrate Pallets and a peer to peer (P2P) network implemented on libp2p. Ethereum smart contracts are used for (i) maintaining identities in a similar format to the ERC725 standard and (ii) minting NFTs from off chain Centrifuge documents. Substrate Pallets are used for anchoring state commitments. The peer to peer network is used for private, off-chain transactions and business document exchange.

For detailed information of the Centrifuge Protocol, its first implementation and limitations, read the [Centrifuge Protocol Yellowpaper](https://github.com/centrifuge/protocol/releases)

![Centrifuge architecture](./images/architecture.png)

### Centrifuge Nodes

The Centrifuge Node provides a simple API interface to interact with the peer to peer network as well as the Ethereum smart contracts and Substrate Pallets. The Node operates on a “service bus” principal where plugins and outside systems can subscribe to messages about specific objects (e.g., a procurement application can subscribe to changes of order objects). The P2P Node abstracts the events that occur on the public blockchains and P2P Layer and translates them into messages on this internal bus for other applications to consume. The Node also offers the connectivity to Ethereum and Substrate for applications that build on top of the network.

### Centrifuge Identities

A Centrifuge Identity (CentrifugeID) is a unique ID assigned to a participant of Centrifuge in a network. Centrifuge identities smart contracts on Ethereum. It keeps track of the different cryptographic keys in use and enforces that this data can only be modified by the creator and/or a delegate chosen by the creator.

An identity has the following credentials:

- Peer to Peer Messaging Encryption Keys: are used for message encryption. These keys are used to identify the nodes over the P2P network and establish an encrypted communication channel between peers.

- Signing Keys: Documents in Centrifuge are signed with signing keys. These signatures are a part of the Merkle root that is anchored on the public chain and verifiable at a later time.

- Ethereum Accounts: When interacting with a smart contract on Ethereum, an account needs to be linked to the identity to act on its behalf. The linked Ethereum accounts are the accounts that are allowed to interact with DApps utilizing Centrifuge.

The unique identifier of a participant in the Centrifuge protocol is equivalent to the Ethereum address of his/her identity contract. Centrifuge is adopting the DID-compatible ERC725v1 Ethereum standard for self sovereign identities. More information can be found [here](https://w3c-ccg.github.io/did-spec/).

### Documents within the protocol

A document within the Centrifuge protocol is a structured set of fields with specific types. The protocol supports any document types as long as the formats are agreed upon and shared between the participants, e.g. a document can be an invoice or a purchase order with agreed upon fields and line items. The structure of the document becomes important for reaching consensus by attaching signatures to the document state, as well as creating specific attestations about a document at a later point in time. Documents are exchanged encrypted, and are only accessible for parties involved in this private data exchange. Collaborators can be added and removed from a document. Different collaborators can update a document and publish new versions within the set of nodes with access. A smart contract called AnchorRepository is used for carbon dating state updates and serves as a bulletin board to ensure that the update is made known to all collaborators.

## Recommended Tools

To get started quickly, we recommend using two services that will make your life easier:

### Ethereum through Infura

In order to interact with Ethereum and the Ethereum testnet kovan you need to install the corresponding node. To get started quickly we recommend that you use Infura instead of hosting your own Ethereum node. Infura is a SaaS platform that provides API and developer tools for easy and secure access to Ethereum. In other words, it is core infrastructure that serves as a gateway to the blockchain.

Register and create an Infura account here: https://infura.io/. Create a new project. 
Fetch the appropriate network URL. For kovan, it would look like this `wss://kovan.infura.io/ws/v3/XXXXXXXXXX`

### Centrifuge Chain

In order to interact with our Centrifuge Chain, you can either start your own node and sync with the network or use one of the public full nodes that Centrifuge provides:

- mainnet: `wss://fullnode.centrifuge.io`
- amber: `wss://fullnode.amber.centrifuge.io`
- flint: `wss://fullnode.flint.centrifuge.io`

## Creating a geth Account

### Install Go Ethereum

Before you can create a new go-ethereum (`Geth`) account you have to install a stable version of Go Ethereum. How to install it depends on your operating system. Follow the latest instructions [here](https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum).

### Create a new account

Once you have installed the latest Version of Go Ethereum, create a new `Geth` account by:

```bash
$ geth account new
```

Your new account is locked with a passphrase. Please choose a passphrase and repeat it.

```bash
Passphrase:
Repeat Passphrase:
Address: {168bc315a2ee09042d83d7c5811b533620531f67}
```

NOTE: You will not be able to access the account if you lose your `passphrase`. Make sure to store it in a safe place. There is **no "Forgot my password"** option available here.

Creating a new `geth` account generates a keyfile stored at `~/.ethereum/keystore`. For MacOS, this keyfile will be generated at ~/Library/Ethereum/keystore/.

Locally generated Ethereum accounts can be looked up at any point in time via:

```bash
$ geth account list
```

You can now fund the newly generated Ethereum account with ETH to be able to make transactions.

### Fund the account through Kovan faucet

If you are operating on Kovan testnet, then you can fund the newly generated Ethereum account with dummy ETH by making the request via Gitter: https://gitter.im/kovan-testnet/faucet. You will be able to see whether the funds arrived via https://kovan.etherscan.io/.

## Creating a Centrifuge Chain Account

### Install Parity Substrate Subkey

Before you can create a new centrifuge chain account you have to install a version of Parity Substrate Subkey [here](https://github.com/paritytech/substrate/tree/v2.0.0-alpha.3/bin/utils/subkey).
To install, we recommend you can follow:

#### Build native binary

Download and install rust nightly version:

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

You can now fund the newly generated centrifuge chain account with CFG by making a request in our discord `#dev` channel

## Installing the Centrifuge Node

Before being able to transfer and anchor financial documents and mint NFTs you need to spin up a Centrifuge node on your machine. This is a one time setup.

### Set-up Infura

For this, we [recommend](/cent-node/getting-started/tools) [setting up](/cent-node/getting-started/geth-account) your own geth node.

Otherwise, for convenience in getting started, you can use [Infura](https://infura.io). Once you have registered an account, you can create a new project and select the respective endpoint. It will give the user the option to select: Mainnet, Kovan(testing).

Find the correct Infura link for the different Ethereum testnets on your Infura dahsboard. Choose the correct endpoint and it will give you the option to copy to clipboard. You will need this link again later in the process.

![](./images/infura.jpg)

### Installing the Centrifuge Node

Once you are set up, follow these steps to install the Centrifuge node:

1. Download and install the latest [centrifuge binary](https://github.com/centrifuge/go-centrifuge/releases). <!-- update link-->

If you want to build the node from source, follow the description in the [source code](https://github.com/centrifuge/go-centrifuge/blob/develop/README.md).

2. Add the Centrifuge binary to the `$PATH` or modify the command invocation to point to the correct library.

3. Run `centrifuge createconfig` as seen in the example below. This command automatically creates an identity and the required key pairs. It then generates the `config.yaml` file required to run the node.

**NOTE:** The provided Ethereum account in the `keystore/<KEY-FILE>` needs to have ETH to execute the `centrifuge createconfig` command.

```bash
$ centrifuge createconfig \\
-n mainnet \\
-t <DEFINE_CONFIG_DIR_NAME> \\
-z ~/.ethereum/keystore/<KEY-FILE> \\
-e <infura or your own geth url> \\
-a 8082 -p 38204 \\
--centchainurl <your centchain endpoint> \\
--centchainaddr <your ss58 address> \\
--centchainid  <your public id> \\
--centchainsecret <your secret>
```

Replace the `<KEY-FILE>` with the key file you obtained when creating the Ethereum account and `<DEFINE_CONFIG_DIR_NAME>` with the location where you want the `config.yaml` file to be stored. Note that the target direction -t should be specified with an absolute path. Manually add `https://` to the Infura link (see above).

The password for the provided `keystore/<KEY-FILE>` file is asked once the `createconfig` command is run. If the password is not set, just press `enter`.

**NOTE**: The generated `config.yaml` includes information about your Ethereum private key. Make sure to store it in a secure environment.

### Set up your Centrifuge Node config.yaml for the corresponding testnet or mainnet

If you want to switch between testnets and mainnet, adjust the following accordingly and add the corresponding Infura link (see above). Manually add `https://` to the Infura link.

**Networks:**

- **Kovan - Flint**

Use network `-n flint`

- **Kovan - Amber**

Use network `-n amber`

- **Mainnet**

Use network `-n mainnet`

---

**If you like to run the centrifuge node with your own ethereum or centrifuge chain node please replace the infura urls with your own `Geth` and `centrifuge-chain` Node-URL.**

---

### Look up your Centrifuge ID

A participant of the Centrifuge P2P network will be identified by an identity (Centrifuge ID) within the network. The createconfig command automatically creates an identity and the key pairs.

To look up your Centrifuge ID via Terminal use:

```bash
$ cat /<PATH-TO-CONFIG-DIR>/config.yaml | grep -i 'identityid' | awk '{print $2}'
```

### Running the Centrifuge node after creating the config.yaml

Before running your Centrifuge Node, you need to add your Ethereum key and password as environment variables. The following bash commands show how to set the variables based on the default ethereum key location in macOS for a sample key.

<!-- `CENT_ETHEREUM_ACCOUNTS_MAIN_KEY=$HOME/Library/Ethereum/keystore/UTC--2019-0UTC--2019-mm-dd` -->

```bash
CENT_ETHEREUM_ACCOUNTS_MAIN_KEY=$(cat $HOME/Library/Ethereum/keystore/UTC--2019-04-15T14-43-41.293727000Z--75aecbd0aa7f34207132d686d2a9e470fba2e6e4)
CENT_CENTCHAIN_ACCOUNT_SECRET=<YOUR_CENTCHAIN_SECRET>
```

```bash
CENT_ETHEREUM_ACCOUNTS_MAIN_PASSWORD=<YOUR_PASSWORD>
```

Afterwards, you can run the Centrifuge Node using the `config.yaml` file you created:

```bash
$ centrifuge run -c /<PATH-TO-CONFIG-DIR>/config.yaml
```

Replace the `PATH-TO-CONFIG-DIR` with the location of the `config.yaml` file.

## Centrifuge Configuration

### Changing the default configuration

The default configuration with all available options is accessible [here](https://github.com/centrifuge/go-centrifuge/blob/develop/build/configs/default_config.yaml). You may adjust certain configurations according to your requirements.

- Configure node under NAT

  If you want your node to be accessible outside your private network, you will need to manually specify the External IP of the node:

  ```yaml
  p2p:
    externalIP: "100.111.112.113"
  ```

- Configure notification webhook (for incoming data from other peers)

  To receive an event when a new document has been shared with your node, add your WebHook endpoint in the config.yaml file:

  ```yaml
  notifications:
    endpoint: "http://localhost:8080/endpoint/"
  ```

  For more information, see the [Notification Payload](https://centrifuge-os-node-api-4.api-docs.io/0.0.6/models/notification-message).

- Ethereum max gas price

  To adjust the maximum gas price (in wei) you are willing to pay per transaction:

  ```yaml
  ethereum:
    maxGasPrice: "xx000000000"
  ```

  Note: 20 Gwei would be "20000000000".

- Disable Pre-commit

  The pre-commit option configures the node to acquire a lock on the anchor that should be anchored next before asking other peers to sign the message. This setting is enabled by default. We do not recommend disabling it. Only do so if you know what you are doing.

  ```yaml
  anchoring:
    precommit: false
  ```

### Open ports for incoming P2P connections

To accept the incoming P2P connections, you will need to open two ports for incoming TCP connections.

- P2P Port: open ingress/egress. This port will be configured under `p2p` `port` in your config.
- API Port: restrict at will, only you or your upstream systems should need to talk to it. This port will be configured as `nodeport` in your config.

## Post Install Verification

To make sure that your Centrifuge node setup was successful and is running properly you can ping your node.

```bash
$ curl -X GET "http://localhost:8082/ping" -H "accept: application/json"
```

It will return (e.g. Kovan - Amber):

`{"version":"...","network":"amber"}`

---

## REST API Example Uses

Once the Centrifuge node is up and running you are able to start submitting documents and tokenize these documents via the Rest API. Please refer to the [Node API](https://centrifuge-os-node-api-7.api-docs.io/2.0.0) documentation for a complete list of endpoints.

### Authentication Headers

The Centrifuge node is capable of maintaining multiple accounts. Accounts are used to track of the different users that might be using a single instance of a Centrifuge node. We use an http header for specifying which account to use for a given request.

| Header             | Value                                                  |
| ------------------ | ------------------------------------------------------ |
| **authorization:** | hex encoded identity of the account, e.g. 0xafe241...) |

## Network Configurations

Besides the mainnet, Centrifuge has support for Kovan testnet in Ethereum. The network configuration for the different testnets is also part of the [code base](https://github.com/centrifuge/go-centrifuge/blob/master/build/configs/default_config.yaml). This enables the client user to run on top of them with minimum configuration needed. Please find the most important information summarized below.

### Flint  -  Kovan

This network is a testnet that operates over a Proof-of-Authority Ethereum network (Kovan) and a Proof-of-Stake in the Centrifuge Chain.

- Client: parity
- Purpose: Testnet
- Bootstrap Nodes:

```
/ip4/35.242.230.116/tcp/38202/ipfs/12D3KooWSbxbKCbZh9JVtsQyVGdTPra4RpSA4tbvs6an11jwGA2z
```

```
/ip4/35.234.72.127/tcp/38202/ipfs/12D3KooWQm2cSmrEiaSMV4gUv7WGhpgRwo8woFSsHhZGbGi3aA8x
```

- Deployed Smart Contracts:
  - identityFactory: "0x1362EcBf8679243E24fA0EC425d2e10A08223c7D"

### Amber  -  Kovan

This network is a testnet that operates over a Proof-of-Authority Ethereum network (Kovan) and a Proof-of-Stake in the Centrifuge Chain.

- Client: parity
- Purpose: Testnet
- Bootstrap Nodes:

```
/ip4/35.242.230.116/tcp/38202/ipfs/12D3KooWSbxbKCbZh9JVtsQyVGdTPra4RpSA4tbvs6an11jwGA2z
```

```
/ip4/35.234.72.127/tcp/38202/ipfs/12D3KooWQm2cSmrEiaSMV4gUv7WGhpgRwo8woFSsHhZGbGi3aA8x
```

- Deployed Smart Contracts:
  - identityFactory: "0x1362EcBf8679243E24fA0EC425d2e10A08223c7D"

### Mainnet

This network is the production network that operates over the main Proof-of-Work Ethereum network (Mainnet) and a Proof-of-Stake in the Centrifuge Chain.

- Client: geth | parity
- Purpose: Mainnet
- Bootstrap Nodes:

```
/ip4/35.198.122.117/tcp/38202/ipfs/12D3KooWAg3EcAtrYVCxwz6k6sT9iZSRztz9D7yUzpBPREFzrUoV
```

```
/ip4/35.242.221.111/tcp/38202/ipfs/ 12D3KooWKGwixXenuXAVqkJKmnHSAJDjzf7eGMo6troigZxm7A5R
```

- Deployed Smart Contracts:
  - IdentityFactory: `0xAF456c16386a64fd4F4b69af13a86Df0B562Aa00`

## Disclaimer

### Centrifuge is provided "As Is"

The "Software", which includes but is not limited to the source code of components of Centrifuge, related repositories, client implementations, user interfaces, compiled or deployed binaries and smart contracts all of its components, libraries, supporting services (including, but not limited to, build pipelines, tests, deployments, "boot nodes", code samples, intergrations) is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement.

In no event shall the authors, maintainers, operators or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the Software or the use or other dealings in the Software.

Centrifuge and all its components are Beta Software, which might and will lead to substantial changes in the future, re-architecture, addition and removal of features, as well as unexpected behavior. Use at your own risk.

## Protocol Limitations

Centrifuge is in an early stage of its development. The protocol and its first client implementation have a limited feature set compared to the end-vision. Not all features are implemented yet, and tradeoffs between security, speed, end-user features, and protocol flexibility are made continuously.

Following is a list of important limitations and not yet implemented features of Centrifuge.

### The Meaning of a Signature

When two Centrifuge nodes exchange documents with each other, they automatically attach signatures to the transferred documents after validation of the data payload and signatures/keys. A Centrifuge node validates the structural integrity of a received document as well as the validity of previous signatures compared to the public keys of the corresponding Centrifuge ID of the counterparty. A Centrifuge itself does not validate if the document data makes sense from a business point of view.

A Centrifuge node is a technical client to Centrifuge. This client exchanges and signs data in well-known formats. It does not validate document data authenticity.

Data authenticity and correctness are always validated by the upstream system. E.g. the accounting system interacting with a Centrifuge node.

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
