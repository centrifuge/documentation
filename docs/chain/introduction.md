---
id: introduction
order: 1
title: Centrifuge Chain Validator Guide
category: 1. Overview
redirect_from:
  - /chain/
---

Ask questions in our [Community Slack](https://centrifuge.io/slack) in \#validators 

## Centrifuge Chain
[Centrifuge Chain](https://github.com/centrifuge/centrifuge-chain) is the gateway for real-world assets to the Blockchain Multiverse. It is being built on [Parity Substrate](https://substrate.dev) with an initial bridge to Ethereum. 

Substrate will allow us to easily tap into the [Polkadot](https://polkadot.network) ecosystem at a future point in time as well as re-using [IBC](https://cosmos.network/ibc/) modules to connect with other blockchains that support the standard.

We envision a larger ecosystem of many, connected blockchains- where Centrifuge Chain can [enable off-chain assets to access financing](https://medium.com/centrifuge/centrifuge-chain-the-gateway-for-real-world-assets-to-the-blockchain-multiverse-41dd5597ecf1) through DeFi.

## Specs
For a deeper dive into the architecture and economics of Centrifuge Chain, read our **[Token Design Specification](https://docs.google.com/document/d/1T4DF3XHs8l4gTzpnk6KASpD4JWjSoIWzxNX6DyVz__Q/edit?usp=sharing)**. 

Centrifuge Chain will use its own native token - the Radial (RAD) token. It will also incentivize Validators and Nominators to participate through a block reward.

## Validators Overview
Centrifuge Chain is built on [Parity Substrate](https://substrate.dev), and relies on staked Validators to come to consensus over 3 components to commit blocks to the blockchain:
* BABE - block production
* GRANDPA - finality gadget
* NPoS - Validator selection algorithm

Any node can offer itself as a Validator candindate, but only a limited number will be selected. Only top Validators by stake are elected into the Validator Set. Validators can stake their own RAD and can be elected by staked Nominators.

Validators must run a full node and directly particiate in block authorship, finality, and validity checks. They are able to choose a reward commission that is taken up-front from the reward before splitting the remainder with Nominators. 

Validators must stay online and available with very high up-time. They will be held responsible and incur slashing penalties for deliberate attacks, running modified software, severe bugs in the code, and unresponsiveness, to name just a few slashing conditions.

## Flint Testnet
Flint is a test network for Centrifuge Chain with no economic value on-chain. It is an unaudited and experimental version, created to recognize possible problems before Centrifuge Chain's launch.

### Flint Set-Up Guide
To set up your Validator node, **make sure you go through the [Flint Guide](https://centrifuge.hackmd.io/-xXOPZHnT6GvMK9dpO-jgg) to get started.**

#### System Requirements
The system has not been officially load-tested yet but a machine with the following specs will be able to run a validator for Flint
- 4 GB RAM
- 50 GB disk
- Standard desktop/server CPU 

Validators for the testnet are being run on 
- Google Cloud n1-standard-1 instances
- Digital Ocean droplets with 2GB Memory, 1vCPU
- Standard desktop machines with Docker
- Theoretically also runable on Raspberry Pi 4, but not confirmed


### FRAD Tokens
To run a validator on the Flint Test Network you need to stake Flint Radial (FRAD) tokens.

**Create an account using the [Flint Guide](https://centrifuge.hackmd.io/-xXOPZHnT6GvMK9dpO-jgg)** and reach out to us at chain@centrifuge.io with your address so we can send you the appropriate amount.


## Resources
* [Centrifuge Chain on Github](https://github.com/centrifuge/centrifuge-chain)
