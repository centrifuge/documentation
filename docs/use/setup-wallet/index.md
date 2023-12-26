---
id: setup-wallet
order: 1
title: Connect and set up your wallet
contributors: <Dennis Wellmann:dennis@k-f.co>, <Anna Mehrlaender:anna@k-f.co>, <Orhan:klardashti@gmail.com>
redirect_from:
  - /use
  - /use/
---

DISCLAIMER: _Use of this guide is at your own risk. To the maximum extent permitted by applicable law, the services are provided without warranties of any kind, whether express, implied, statutory or otherwise, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or non-infringement. Further, to the fullest extent allowed by applicable law, in no event shall the company or its affiliates, be liable to you or any third party for any damages of any kind._


## EVM and Substrate Wallets
Centrifuge supports both EVM and Substrate accounts. If you already have an Ethereum compatible wallet setup, the easiest way is to use this your existing Ethereum wallet. For expert users it might be helpful to use a Substrate compatible wallet such as Polkadot Vault. EVM wallets can be used to connect to any of the live networks while Substrate Wallets only work with Centrifuge chain.


## Connect your wallet
When using Centrifuge you can choose between pools deployed on Centrifuge Chain and on Ethereum. You can connect to both chains via our wallet component that allows you to pick the wallet of your choice. To do so, click on `Connect` in the top right corner. Then, first select the chain you want to connect with (currently Ethereum and Centrifuge):

![](./images/wallet-component1.png#width=40%;)

In the second step select the wallet of your choice. On Centrifuge the system currently supports [Talisman](https://www.talisman.xyz/), [Subwallet](https://chrome.google.com/webstore/detail/subwallet-polkadot-extens/onhogfjeacnfoofkfgppdlbmlmnplgbn) and [Polkadot.js](https://polkadot.js.org/extension/).

![](./images/wallet-component-cf.png#width=40%;)

On Ethereum, the system supports [MetaMask](https://metamask.io/download.html), [Coinbase Wallet](https://www.coinbase.com/wallet) and multiple other wallets through [Wallet Connect](https://walletconnect.com/).

![](./images/wallet-component-eth.png#width=40%;)

## Set up Ethereum wallet with MetaMask
Metamask is a popular browser extension allowing you to access EVM compatible blockchains. If you do not yet have MetaMask set up, head over to [MetaMask](https://metamask.io/download/) to download and install MetaMask.

On the [Centrifuge App](https://app.centrifuge.io) to connect a MetaMask wallet:
- Click on the Connect button in the top right corner.
- Choose the MetaMask wallet in the wallet dialog.

![](./images/choose_network.png)

## Using Ledger with Centrifuge
If you do not yet have your Ledger configured, read their [getting started guide](https://support.ledger.com/hc/en-us/articles/360015259693-Choose-your-Ledger-device?docs=true). You will also need to install the [Ethereum App](https://support.ledger.com/hc/en-us/articles/360009576554-Ethereum-ETH-) and [enable blind signing](https://support.ledger.com/hc/en-us/articles/4405481324433-Enable-blind-signing-in-the-Ethereum-ETH-app?docs=true). Make sure to [connect your ledger](https://support.ledger.com/hc/en-us/articles/4404366864657-Connect-your-Ledger-to-MetaMask) to Metamask.

## Set up a Substrate wallet
### Overview
You can create a Centrifuge account in any wallet that supports Polkadot/Substrate addresses. For detailed information on how to set up Polkadot accounts using the different tools that Web3 Foundation/Parity developed and supports, please also see [the documentation from Polkadot](https://support.polkadot.network/support/solutions/articles/65000098878-how-to-create-a-dot-account). The tutorial below will cover how to set up wallets using:

- [Talisman](https://app.talisman.xyz/portfolio)
- [Polkadot.js browser extension](https://polkadot.js.org/extension/)
- [Polkadot Vault](https://signer.parity.io/) (formerly called Parity Signer)

## Using Talisman
Talisman is a wallet that supports Substrate (Polkadot) and Ethereum accounts. The Talisman wallet browser extension is available on Google Chrome, Brave, and Firefox, and a corresponding asset dashboard is accessible at [app.talisman.xyz](https://app.talisman.xyz/portfolio).

To set up Talisman:

- Download the extension [here](https://chrome.google.com/webstore/detail/talisman-polkadot-wallet/fijngjgcjhjmmpcmkeiomlglpeiijkld/related) and install it.
- Create a wallet using the instructions from Talisman [here](https://docs.talisman.xyz/talisman/navigating-the-paraverse/account-management/create-a-talisman-wallet).
- Back up your wallet using the the instructions from Talisman [here](https://docs.talisman.xyz/talisman/navigating-the-paraverse/account-management/back-up-your-secret-phrase) (**THIS IS VERY IMPORTANT**).

You can create or import an account in Talisman by clicking on `More options` and `Add account`. This will open a browser tab that allows you to create a new account or add existing accounts via Recovery Phrase, JSON or from your Ledger.

![](./images/Talisman_Newaccount.png#width=60%;)

If you want to create a new account, click on `New Account` and `Polkadot`.

![](./images/Talisman_Newaccount_Create.png#width=60%;)

Input a name and Talisman will create the account for you. Note, that by default Talisman will display your Polkadot and Kusama balances.

 ![](./images/Talisman_Created.png#width=60%;)

To find the CFG address of your account, click on `Copy Address` and search for Centrifuge. Once the balance of your Centrifuge address is larger than zero, it will automatically be displayed in your account list as well.

 ![](./images/Talisman_FindCFG.png#width=60%;)

Finally, to see an overview of your CFG accounts, click on "Receive" under your account. To see your native wallet address on Centrifuge Chain select CFG (Centrifuge) from the list.

![](./images/talisman-wallet.png#width=400)

## Using the Polkadot.js extension

Polkadot.js browser extension allows you to manage your accounts. The browser extension is available on Google Chrome, Brave and Firefox, and you can use [Polkadot.js Apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fcentrifuge-parachain.api.onfinality.io%2Fpublic-ws#/accounts) to see your balance, transfer tokens, participate in governance etc.

- Download the extension [here](https://polkadot.js.org/extension/) and install it.
- Create a new account by clicking on "+" in the top right of the extension and selecting "Create new account".
- Save your recovery phrase in a safe place before you continue (**THIS IS VERY IMPORTANT**).
- Set NETWORK to "Centrifuge Chain" and give your account a name and password.

![](./images/set-up-polkadotjs.png#width=400)

- Once created, backup the account by selecting the 3 dots to the right of the account name and clicking "Export Account"
- Make sure you save the downloaded JSON file in a safe place, and remember the password for this account

![](./images/export-account-json.png#width=400)

You can always recover your account in either of two ways:

* Importing the account by using your seed phrase
* Importing your account by using the JSON file + the password to your account

## Using the Polkadot Vault App
The `Polkadot Vault` (formerly `Parity Signer`) is a cold storage solution that allows you to use a phone in airplane mode as an air-gapped wallet. The Vault app is not technically a wallet, as it does not allow to transfer funds. It is more of a key-chain tool that will enable you the create, manage, and restore accounts or transfer funds together with other wallets or the [Polkadot.js UI](https://wiki.polkadot.network/docs/polkadotjs-ui).

To set up a Centrifuge account using the `Parity Vault`, download the app from https://signer.parity.io/ and follow the instructions in the [guide](https://paritytech.github.io/parity-signer/tutorials/Start.html). When you create an account, make sure to create keys for the `Centrifuge Mainnet Network`.
 ![](./images/create-keypair.png#width=40%;)

You can look up your Centrifuge address by scanning the QR code on the Polkadot.js UI.
- On your computer, navigate to https://polkadot.js.org/apps/#/explorer.
- Make sure the network is set to Centrifuge.
- Click on Accounts.
- Click on 'Add via QR'.
- Scan the QR code on your device for your Centrifuge Mainnet Public Address.
- Your address for Centrifuge Mainnet should begin with a '4...'.

If you want to sign transactions with your account you will first need to send some CFG to this account. You can then initiate a transfer on the [Polkadot.js UI](https://polkadot.js.org/apps/#/explorer) by selecting 'Transfer' in the left menu or on 'Send' from the Accounts page and sign the transaction with your Vault via QR code.

Some best practices using the Parity vault securly include:
- Use the phone only as a cold storage solution with the Vault app (You can use or buy an old phone and wipe it)
- After setting up the app turn off WiFi & Bluetooth and never turn it on again (to airgap the phone)
- Only charge your phone with a battery bank or wall charger. Use a charge only cable, not a data cable.
- Never connect the the device to a computer
- Backup your Recovery Phrase and keep it somewhere safe. Please do research on secure methods for storage and recovery.

