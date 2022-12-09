---
id: setup-wallet
order: 5
title: Set up your CFG Wallet
contributors: <Dennis Wellmann:dennis@centrifuge.io>
---

DISCLAIMER: _Use of this guide is at your own risk. To the maximum extent permitted by applicable law, the services are provided without warranties of any kind, whether express, implied, statutory or otherwise, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or non-infringement. Further, to the fullest extent allowed by applicable law, in no event shall the company or its affiliates, be liable to you or any third party for any damages of any kind._


A Centrifuge Chain address can be created through [Polkadot.js website](hhttps://polkadot.js.org/apps/#/explorer), the [Polkadot.js browser extension](https://polkadot.js.org/extension/), or through [Parity Signer](https://www.parity.io/signer/).

**Note that Ledger currently does not support Centrifuge Chain (CFG)**

## Using the Polkadot.js website
**Of all options, this is the least secure and is not recommended.**

1. Open Polkadot.js[https://polkadot.js.org/apps/#/explorer]
2. Click the dropdown at the top left and select Centrifuge (listed under "Polkadot & Parachains")
3. Create a new account for your user by navigating to "Accounts" and clicking "Add account".

   Fill in the form, e. g. for Peter Parker: ![](./images/create-account.png)

4. Click "Save" and then "Create and backup account". Make sure you save the downloaded JSON file in a safe place.

5. Done! You can now copy your address and send it to others to receive tokens. The address is the string starting with `4...` (for Centrifuge Mainnet). You can copy it by clicking on the icon to the left of your account name: ![](./images/account-address.png)

## Using the Polkadot.js extension

1. Download the extension [here](https://polkadot.js.org/extension/)
1. Create a new account by clicking on "+" in the top right of the extension and selecting "Create new account"
1. Save your recovery phrase in a safe place before you continue (**THIS IS VERY IMPORTANT**)
1. Set a name and password for this account
1. Once created, backup the account by selecting the 3 dots to the right of the account name and clicking "Export Account"
1. Make sure you save the downloaded JSON file in a safe place, and remember the password for this account
1. Done! You can now copy your address and send it to others to receive tokens.

## Create an account using the Parity Signer App

This is an unofficial guide on how to use the Parity Signer App to create an account on Centrifuge Chain. Please consult the official Parity Signer documentation [here](https://github.com/paritytech/parity-signer).

### Connect to Centrifuge Chain Mainnet

1. Open the [Polkadot.js website](https://polkadot.js.org/apps/#/explorer) on your computer.
2. In the top left, ensure that the network is set to Centrifuge.

![](./images/portal-website.png)

### How to Generate an Address Using Parity Signer

1. Buy an old or new device (ex. iPod touch, Android phone, etc.)
     - **Important:** only charge it with a battery bank or wall charger, **don’t plug it into a computer!!!** Use a charge only cable, not a data cable.
2. Set up a passcode and set it to wipe the device upon entering the code incorrectly too many times.
3. Install the [Parity Signer App](https://www.parity.io/signer/) from below links:
     - [Link for Apple device](https://itunes.apple.com/us/app/parity-signer/id1218174838)
     - [Link for Android device](https://play.google.com/store/apps/details?id=io.parity.signer)
4. Never connect the the device to a computer, even to upgrade it.
5. Turn off WiFi & Bluetooth (**NEVER TURN IT ON AGAIN!**)
6. Create a key for Centrifuge Mainnet using the Parity Signer App
     - Create your identity to get started

       ![](./images/new-identity.png#width=400)
     - Write down your 24 word Recovery Phrase (**THIS IS VERY IMPORTANT**)

       ![](./images/recovery-phrase.png#width=400)
     - Set your Identity PIN
       - **You will use this PIN to sign all of your transactions using this device.**
     - Create your first Keypair - select the Centrifuge Mainnet Network
       ![](./images/create-keypair.png#width=400)
7. Get your address by scanning the QR code on the Polkadot.js website.
     - On your computer, navigate to https://polkadot.js.org/apps/#/explorer
     - Make sure the network is set to Centrifuge.
     - Click on Accounts
     - Click on 'Add via QR'
       ![](./images/add-via-qr.png#width=400)
     - Scan the QR code on your device for your Centrifuge Mainnet Public Address
       ![](./images/public-address-qr.png#width=400)
     - Your address for Centrifuge Mainnet should begin with a '4...'
1. To manually check the above process:
     - Delete the key from the app
     - Recover the key from your backed up phrase
     - Verify the address matches what you obtained above

1) Send some test CFG to another address and use Parity Signer to sign this transaction
     - You will first need to send some CFG to this account
     - Initiate a transfer on the Polkadot.js website by selecting 'Transfer' in the left menu or on 'Send' from the Accounts page
     - Click 'Make Transfer'
     - Click 'Sign via QR'
     - Using the Parity Signer App, scan the QR code in your browser with the App's QR Scanner from this account screen (see above on how to get it).
     - In the app, confirm your signature of the transaction by entering your PIN
     - Click 'Scan Signature QR' in the browser
     - Sign the transaction

1) Backup your Recovery Phrase and keep it somewhere safe. Please do research on secure methods for storage and recovery.

> **A note on app updates:**
> If a new version of the app becomes available, please exercise the following caution.
> Ideally, replace the device or do not update the app.
> If an update is necessary:
>
> 1.  Hard reset the device and wipe everything
> 2.  Re-install the new parity signer app
> 3.  Turn off wifi & bluetooth and **NEVER TURN IT ON AGAIN**
> 4.  Recover your key from seed phrase

- **Remember to write down your secret phrase & STORE IT SAFELY!**
  Follow a secure protocol to save and store your private keys. Please do some research and choose a secure method that will work best for you.

## Third Party Custodians
The following custodians offer custody of CFG or wCFG (ERC20 on Ethereum).
* Bitcoin Suisse Vault (native CFG)
* Coinbase Custody (ERC20 only
* BitGo (ERC20 only)
