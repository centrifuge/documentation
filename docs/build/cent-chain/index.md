---
id: cent-chain
order: 1
title: Centrifuge Chain
contributors: <Cassidy Daly:cassidy@centrifuge.io>, <Dennis Wellmann:dennis@centrifuge.io>
redirect_from:
  - /build/
---

## Introduction

### The Centrifuge Stack

The Centrifuge mission is to change the rules of global trade to foster economic opportunity everywhere. Global B2B spend (a.k.a. sent invoices) amounts to roughly [\$180 Trillion](https://www.businesswire.com/news/home/20121017005521/en/Visa-Estimates-109.1-Trillion-Global-Commercial-Spend). With payment terms at an average of [60 days](https://www.statista.com/statistics/474224/average-wait-for-invoice-payment-by-sector-united-kingdom/), businesses, and especially SMEs, need financing to bridge the gap. It is one of the main reasons that sustainable growth is so much harder for SMEs than for larger corporates. Existing solutions today, such as factoring and reverse factoring, only address a small portion of that need. This is why we built Centrifuge OS — to allow businesses to exchange business documents (such as invoices) and tokenize those assets to have [greater access to financing](https://medium.com/centrifuge/centrifuge-tinlake-adding-real-world-assets-to-mcd-68cbcb67e9a4) — **thereby unlocking value that has previously been inaccessible.**

![Cent Stack](./images/cent-stack.png)

Centrifuge OS is a decentralized platform to support a new generation of applications for the financial supply chain. The stack consists of a peer-to-peer messaging protocol to store and exchange business documents in a private, secure way. As the next layer, we built Centrifuge Chain using Substrate to hold the unalterable, single source of truth of these documents for all parties. Using Centrifuge Chain and dApps built on top, businesses can tokenize documents and use this as collateral to access financing. Tinlake is our securitization protocol for these tokenized assets built on Centrifuge Chain to optimize risk allocation and connect Centrifuge to the DeFi ecosystem.

### Centrifuge Chain

[Centrifuge Chain](https://github.com/centrifuge/centrifuge-chain) is the gateway for real-world assets to the Blockchain Multiverse. We built Centrifuge Chain on [Parity Substrate](https://substrate.dev) with an initial bridge to Ethereum. This allows us to move faster and use a consistent approach for certain features.

At the same time we are able to develop a standardized bridge to Ethereum that can be reused by other projects, which in turn increases interoperability. Substrate allows us to easily tap into the [Polkadot](https://polkadot.network) ecosystem and to connect with other blockchains that support the standard.

We envision a larger ecosystem of many, connected blockchains- where Dapps on Ethereum could use data from other chains, value could move freely, and Centrifuge Chain can [enable off-chain assets to access financing](https://medium.com/centrifuge/centrifuge-chain-the-gateway-for-real-world-assets-to-the-blockchain-multiverse-41dd5597ecf1) through DeFi.

#### Centrifuge Chain Efficiencies

Centrifuge Chain is optimized specifically for the transactions required by our specific use case. This focus allows us to improve upon our current architecture in a few key ways: speed, cost, storage efficiencies, and privacy.

Ethereum works well for low volumes of high value transactions. High volumes of privacy-requiring use-cases require a different solution. The average business user, SMBs and large enterprises alike, would be paying many times more using Centrifuge on Ethereum compared to their existing solutions. It wouldn’t be worth it for most businesses to make a switch. But what if we could lower that cost and have high throughput capabilities?

The transactions on the Centrifuge Chain are optimized for the small subset of operations needed by our specific use case. This allows for faster execution of logic and finality of transactions. The optimization of transactions, together with our PoS architecture, is also what brings down the transaction costs dramatically. Centrifuge Chain also implements a state rent model that requires users to pay for continuous availability of their data over long periods of time. This encourages decentralization because less resources are required to run a node. Building our own chain also allows us to improve upon the user and developer experience for Centrifuge. Our users require privacy, and this is something we can build for directly — targeting the features they need from the start. For developers, we can provide custom APIs and tools that come with the blockchain node itself instead of smart contract APIs which are harder to integrate with.

Centrifuge Chain is optimized specifically for the transactions required by the protocol. This achieves a much more efficient execution of these transactions and allows for targeted use-cases. While there are downsides to building a single purpose chain, the advantages for our use case outweigh the costs. Integration with other Ethereum and DeFi projects becomes a bit more involved. Our experience with Ethereum development, combined with a standardized bridge to get data to/from our Parity Substrate based chain reduces the overhead substantially, while still benefiting from the upside of our own chain.

#### How does Centrifuge Work?

![Centrifuge OS Flow](./images/CentrifugeOS-flow.png)

A company, such as Paper Records, uses the Centrifuge P2P Network to sign and send an invoice to Spotify. Spotify verifies receipt of the document and its correctness with its signature and sends an updated, signed version of the document back to Paper Records. Centrifuge Chain is used for the node identities, allowing Paper Records to look up Spotify and for Spotify to verify Paper Records. Paper Records is then able to anchor the document hash with both signatures onto Centrifuge Chain. Using these elements Paper Records can now mint an NFT on Centrifuge Chain that represents the unpaid invoice — **_and use this NFT as collateral to access financing_** on other blockchains such as Ethereum. Third parties, from traditional lenders to DeFi lending pools, can verify the value of the NFT against the on-chain anchors and identities, as well as get access granted to the off-chain document whose authenticity can be verified against the on-chain anchor as well.

### Chain Architecture

Centrifuge Chain uses its own native token - the Centrifuge (CFG) token. It also incentivizes Validators and Nominators to participate through a block reward.

Centrifuge Chain is built on [Parity Substrate](https://substrate.dev), and relies on staked Validators to come to consensus over 3 components to commit blocks to the blockchain:

- BABE - block production/authorship
- GRANDPA - finality gadget
- NPoS - Validator selection algorithm

Any node can offer itself as a Validator candindate, but only a limited number will be selected. Only top Validators by stake are elected into the Validator Set. Validators can stake their own CFG and can be elected by staked Nominators.

Validators must run a full node and directly particiate in block authorship, finality, and validity checks. They are able to choose a reward commission that is taken up-front from the reward before splitting the remainder with Nominators.

Validators must stay online and available with very high up-time. They will be held responsible and incur slashing penalties for deliberate attacks, running modified software, severe bugs in the code, and unresponsiveness, to name just a few slashing conditions.

For a deeper dive into the Centrifuge token that powers Centrifuge Chain, read our **[Centrifuge Token Summary](https://centrifuge.io/cfg-token-summary)**.

## Centrifuge Chain Test Networks

Centrifuge has multiple testnets online that have been created to test and stabilize the interaction between Centrifuge’s components, but are unaudited and experimental for now. These testnets have no economic value on-chain.

- **Amber** is our release candidate and our second testnet. It is meant for audits and testing the stability of release candidates. Think of Amber as a way to test beta releases.

- **Flint** is our first testnet that has been running since November 2019. It is meant for breaking changes and testing integration with other parts of the Centrifuge ecosystem. Think of Flint as a way to test previews and alpha releases.

### View the status of the testnets on Polkadot Telemetry:

Some nodes on our testnets are reporting telemetry ot telemetry.polkadot.io. You can look at the information here:

- [Amber Network Telemetry](https://telemetry.polkadot.io/#list/Centrifuge%20Testnet%20Amber%20CC2)

- [Flint Network Telemetry](https://telemetry.polkadot.io/#list/Centrifuge%20Testnet%20Flint%20CC3)

## Create an Account

### Chain Portal

Centrifuge hosts an instance of the chain portal at [portal.chain.centrifuge.io](https://portal.chain.centrifuge.io). You can use it to interact with a full node provided by Centrifuge. The portal serves all three of our permanent networks.

**Mainnet:** https://portal.chain.centrifuge.io/#?rpc=wss://fullnode.centrifuge.io<br />
**Amber:** https://portal.chain.centrifuge.io/#?rpc=wss://fullnode.amber.centrifuge.io<br />
**Flint:** https://portal.chain.centrifuge.io/#?rpc=wss://fullnode.flint.centrifuge.io

### Create an account/key pair using the Portal UI

1. Open the Portal
1. Create a new account for your user by navigating to "Accounts" and clicking "Add account".

   Fill in the form, e. g. for Peter Parker: ![](./images/create-account.png)

1. Click "Save" and then "Create and backup account". Make sure you save the downloaded JSON file in a safe place.

1. Done! You can now copy your address and send it to others to receive tokens. The address is the string starting with `5...` under the name of your account, e. g. `5HKk5u...wp29Zd` in the following. You can copy it by clicking on the icon to the left of your account name: ![](./images/account-address.png)

### Create an account using the Parity Signer App

This is an unofficial guide on how to use the Parity Signer App to create an account on Centrifuge Chain. Please consult the official Parity Signer documentation [here](https://github.com/paritytech/parity-signer).

| DISCLAIMER: _Use of this guide is at your own risk. To the maximum extent permitted by applicable law, the services are provided without warranties of any kind, whether express, implied, statutory or otherwise, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or non-infringement. Further, to the fullest extent allowed by applicable law, in no event shall the company or its affiliates, be liable to you or any third party for any damages of any kind._ |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |


#### How to connect to Centrifuge Chain Mainnet

1. Open the Portal Website on your computer at: https://portal.chain.centrifuge.io/

2. In the top left, ensure that the Newtork is set to 'Centrifuge Mainnet'

![](./images/portal-website.png)

3. To navigate to Mainnet, or to one of the Centrifuge testnets Amber or Flint, click on the top left corner and select custom endpoint to change the network.

![](./images/change-network.png)

4. For Mainnet, the endpoint should be set to `wss://fullnode.centrifuge.io`. Once a new endpoint is set, Save & Reload

![](./images/endpoint.png)

#### How to Generate an Address Using Parity Signer

1. Buy an old or new device (ex. ipod touch, android phone, etc.)
   - **Important** only charge it with a battery bank or wall charger, **don’t plug it into a computer!!!** Use a charge only cable, not a data cable.
1. Set up a passcode and set it to wipe the device upon entering the code incorrectly too many times.
1. Install the [Parity Signer App](https://www.parity.io/signer/) from below links:
   - [Link for apple device](https://itunes.apple.com/us/app/parity-signer/id1218174838)
   - [Link for android device](https://play.google.com/store/apps/details?id=io.parity.signer)
1. Never connect the the device to a computer, even to upgrade it.
1. Turn off wifi & bluetooth (**NEVER TURN IT ON AGAIN!**)
1. Create a key for Centrifuge Mainnet using the Parity Signer App

   - Create your identity to get started

   ![](./images/new-identity.png#width=400)

   - Write down your 24 word Recovery Phrase (**THIS IS VERY IMPORTANT**)

   ![](./images/recovery-phrase.png#width=400)

   - Set your Identity PIN
     - **You will use this PIN to sign all of your transactions using this device.**
   - Create your first Keypair - select the Centrifuge Mainnet Network

   ![](./images/create-keypair.png#width=400)

1) Get your address by scanning the QR code on the Portal Website.

   - On your computer, navigate to https://portal.chain.centrifuge.io/
   - Make sure the endpoint is set to `wss://fullnode.centrifuge.io`
   - Click on Accounts
   - Click on 'Add via QR'

     ![](./images/add-via-qr.png#width=400)

   - Scan the QR code on your device for your Centrifuge Mainnet Public Address

     ![](./images/public-address-qr.png#width=400)

   - Your address for Centrifuge Mainnet should begin with a '4...'

1) To manually check the above process:
   - Delete the key from the app
   - Recover the key from your backed up phrase
   - Verify the address matches what you obtained above
1) Send some test CFG to another address and use Parity Signer to sign this transaction

   - If you don't have any CFG, email faucet@centrifuge.foundation to request some CFG for this test
   - Initiate a transfer on the Portal Website by selecting 'Transfer' in the left menu or on 'Send' from the Accounts page
   - Click 'Make Transfer'
   - Click 'Sign via QR'
   - Using the Parity Signer App, scan the QR code in your browser with the App's QR Scanner from this account screen:
     ![](./images/public-address-qr.png#width=400)
   - In the app, confirm your signature of the transaction by entering your PIN
   - Click 'Scan Signature QR' in the browser
   - Sign the transaction

1) Backup your Recovery Phrase and keep it somewhere safe. Please do research on secure methods for storage and recovery.

If you intend to stake your tokens towards validators on Centrifuge Chain, it is advised to generate another address (a "controller" address). You can generate that address by adding a new Identity and following steps 6 to 10 above, which gives you a new recovery phrase.

To add a new identity:

- Select the person icon on the top right
- Select 'Add Identity'

![](./images/add-identity.png#width=400)

> **A note on app updates:**
> If a new version of the app becomes available, please exercise the following caution.
> Ideally, replace the device or do not update the app.
> If an update is necessary:
>
> 1.  Hard reset the device and wipe everything
> 2.  Re-install the new parity signer app
> 3.  Turn off wifi & bluetooth (**NEVER TURN IT ON AGAIN**)
> 4.  Recover your key from seed phrase

#### Remember to write down your secret phrase & STORE IT SAFELY!

- Follow a secure protocol to save and store your private keys. Please do some research and choose a secure method that will work best for you.

### Getting Tokens

#### Mainnet

If you need CFG to run a Validator or interact with Centrifuge Chain, email faucet@centrifuge.foundation.

#### Amber/Flint

You can get the testnet tokens _Amber Radial (ARAD)_ or _Flint Radial (FRAD)_ from BlockXLabs' faucet:

[BlockXLabs Faucet](https://faucets.blockxlabs.com/centrifuge)

If you have a need for more ARAD or FRAD than what the faucet provides, we can send you more on a case by case basis. Please reach out to us at chain@centrifuge.io with a description of what you want to use the tokens for and your address so we can send you the appropriate amount.

## Further Resources

### Substrate/Polkadot Resources

- [Kusama Documentation](https://guide.kusama.network/en/latest/try/validate)
- [W3F Guide](https://github.com/w3f/polkadot-secure-validator) on Production Grade Setups for Validators on Substrate chains
- [Guides by Certus One](https://kb.certus.one/) (Cosmos Validator)
- [Architecture Deep Dive by Chorus](https://gdoc.pub/doc/e/2PACX-1vQXb1kd0zqYT8K4B4XYb-lrlfRIuPDXsgiTjj94gDOjw3ezEUAtjvxR8yfbKJypmioKeGRrhkLCtZog)
- [Polkadot Wiki](https://wiki.polkadot.network/docs/) (also covering Substrate relevant features)

### Get Help

- Centrifuge Chain on [Github](https://github.com/centrifuge/centrifuge-chain)
- Ask questions in our [Community Slack](https://centrifuge.io/slack)
- Join the conversation on [Discourse](https://discourse.centrifuge.io)
- Read our [Medium Blog](https://medium.com/centrifuge)

![](./images/cent-chain-graphic.png)
