---
id: page
order: 9
title: Tools to manage a pool
---
# Manage a pool 

This section is for asset originators to understand how to manage their pools. 

## How to close an epoch?

The minimum length of an epoch is set at 24 hours. An epoch will have to last at least 24 hours but can also last longer. Closing an epoch requires a contract call, epochs don’t close automatically. This contract call is an open function - anyone can do it, there is no admin access required.
Centrifuge built a service/bot that crawls the pools and checks whether epochs can be closed.

 1) After the minimum epoch duration of all locked pool orders has passed, the order can be fully executed - the bot closes the epoch and it is executed automatically

After an epoch is closed, the contracts check if all locked orders can be fully executed. If so, all orders are executed and the next epoch starts right away.

 2) If (some of) the locked investment/redemptions orders can only be partially executed there is a manual decision by Centrifuge team or asset originator whether an epoch will be closed. There are three steps to close an epoch:

	* Close - first transaction to initiate the end of an epoch
	* Submit solution (=a viable solution needs to be submitted through a contract call to calculate which amount of each transaction type can be executed)
	* [Wait till challenge period as passed] - There is a challenge period (usually 30min) to allow alternative solutions to be submitted
	* Execute epoch - after the `challenge period` has passed a third call executes the epoch and the best submitted solution will be chosen
![](https://storage.googleapis.com/centrifuge-hackmd/upload_5dbf422c96272a3f5380e7108df46e1d.png) 
3) If no orders are locked the epoch will not be closed.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_e5ca1b0c56ae7a4a5296c055c3151d52.png)

### Centrifuge UI

1. Go the pool and go to the investment tab 
2. When you're an admin on the pool you will see the 
**close epoch button**
3. If you're not an admin you can add feature flag to the URL `/investments?show_close_epoch=true` 
4. Click on close epoch button
5. Confirm transaction in Metamask
6. Epoch will be closed in the next 30 minutes

![](https://storage.googleapis.com/centrifuge-hackmd/upload_149846e233930958fed66be080e88452.png)

### How an epoch is currently displayed 
These are the different states of an epoch.  

| Status | Case | Consequence |
| -------- | -------- | -------- |
| Ongoing | Minimum epoch duration (24h) has not completed  | Minimum duration is passed (Investors can invest, redeem) |
| Minimum duration passed | No orders locked | Epoch will not close |
| Minimum duration passed | Locked orders can be executed | Epoch closes automatically at 10AM CET |
| Minimum duration passed | Locked orders can only be partially executed | Epoch needs to be closed manually |
| Minimum duration passed | Locked orders cannot be executed | Epoch needs to be closed manually |
| Computing orders | The epoch is being executed | New epoch is started |

## Set-up (DeFi) tools to manage a pool

### What is Metamask?
MetaMask is a browser extension that allows you to use Ethereum Protocols or`dApps` ("decentralized Apps") such as Centrifuge right in your browser. Metamask holds your private keys, and once it's set up, you can connect it to the dApp in your browser and confirm your transactions in the dApp with Metamask. It also serves as a wallet for ETH and `ERC20 tokens`, such as DAI, TIN or DROP and allows you to transfer and receive such tokens.

### How to install Metamask in your browser
1. Go to https://metamask.io/download.html
2. Choose the Browser you want to use
3. You will be directed to corresponding web store
4. Follow the steps there to add the extension to your browser.
5. After setting up your wallet, Metamask should pop-up as a Fox icon ![](https://storage.googleapis.com/centrifuge-hackmd/upload_7dd07df8a7fc7d1b29743ec9535dbba7.png =20x) in your browser bar.

#### How to use Metamask with Centrifuge
- Connect your account
- Click on Connect (top right corner)
- Choose the Metamask or the wallet you would like to connect
![](https://storage.googleapis.com/centrifuge-hackmd/upload_7ce191ec0d5455f0228b8e9779c54719.png)

### How to use Metamask with a hardware wallet, e.g. Ledger?
A hardware wallet stores the user's private keys in a secure hardware device. To use an address/wallet stored on a hard ware wallet a user needs to be in physical posession of this hardware wallet. Popolar hardware wallets are e.g [Ledger](https://www.ledger.com/) or [Trezor](https://trezor.io/).

#### Set-up the Ledger
Download the [Ledger Live App](https://www.ledger.com/ledger-live/) and follow the steps in the App also described [here]( https://support.ledger.com/hc/en-us/articles/360018784134) to set up you Ledger.

#### Install Ethereum App
1. Open the Manager in Ledger Live
2. Connect and unlock your device
3. If asked, allow the manager on your device
4. Find Ethereum in the app catalog
5. Click the Install button of the app
    - An installation window appears
    - Your device will display `Processing...`
    - The app installation is confirmed

See also [Install Ethereum App on your Ledger](https://support.ledger.com/hc/en-us/articles/360009576554-Ethereum-ETH-)

#### Configure Ethereum App 

1. Open the Ethereum App Settings
2. Change Contract Data to `Yes`
3. [OPTIONAL] For older versions of Ledger, make sure Browser Support is set to `Yes` 
Newer Ledger Versions are supporting it by default. 

#### Connect Hardware Wallet in Metamask
1. Open Metamask by clicking on the fox icon
2. Make sure to select the correct network (`Main Ethereum Network` or `Kovan Test Network`) at the top
3. Click on the circle in the top right corner
4. Click on `Connect Hardware Wallet`
5. A new modal opens. Select `Ledger` and click `Connect`
6. Select address you would like to use. Your Ledger already entails several addresses you can chose from (autogenerated for you).

#### Confirm transactions with your hardware wallet (Ledger/Trezor)
When your Metamask account is connected to your hardware wallet then you need to confirm each transaction with the ledger. 

- Connect ledger with your computer
- Issue the transaction
- Confirm transaction with hardware wallet

## Minting and financing NFTs with Centrifuge Gateway and Centrifuge

### High level user flow
![](https://storage.googleapis.com/centrifuge-hackmd/upload_9e677fa9504dc2cdfae62dd3b6d1fcab.png)

## Mint NFT in Gateway
### What is the Gateway
[Centrifuge Gateway](https://gateway.centrifuge.io/) is the GUI of a Centrifuge Node that allows to securely create and exchange customised documents representing real-world as part of the Centrifuge P2P-protocol and mint NFTs based on these documents.

### Register for Gateway [One time set-up]
As an asset originator you should have received an invitation email to your email addresss. Click on the `Activate` button in the email. Enter the email shared with the Centrifuge team and choose a safe password according to the required criteria. The 2fa code upon registering is not sent at the moment. So after registering, just login again as normal (see below) to receive 2fa code per email. 

### Login to Gateway
* Go to https://gateway.centrifuge.io/
* Login with your email address and password
* You should receive a 2fa security code to your email to complete the login 
![](https://storage.googleapis.com/centrifuge-hackmd/upload_de80606d6d02f11356486a2ef36d0a3c.png =200x)

### Create Document
- Click on Document tab
- Click on Create Document
- Select your schema
- Your document fields appear
- Fill in Document details
![](https://storage.googleapis.com/centrifuge-hackmd/upload_0c42a416470f91fb299ecacab0ebb502.png)
- Click on `Save` to create the document
- The document will appear with status `Creating` in the document list
- Please wait 10-20sec until Document is created and anchored on chain
--> **Done** The document should appear as `Created` in your document list


### Mint NFT
- In the document list open the document you created
- You may note the Asset Originator Centrifuge ID and a unique Asset ID (the on chain anchor) have been added to the document
- Click on `Edit`
- Click on `Mint NFT` button
![](https://storage.googleapis.com/centrifuge-hackmd/upload_76b32416d4288bf4a7d9bd4247425a5e.png)
- Leave the NFT registry as "MainnetAssetNFT" and paste in your borrower ETH address
- Click on Mint
- Wait till NFT is minted (status will be updated in document list)
- Note that minting may take a few minutes and the UI only updates once the NFT is minted
- Always wait until one NFT is finished before minting the second one

To see the pending minting transaction you can click on your CF ID in the NAV bar. This opens etherscan for your CF ID where you will see the pending/succesful/failed transactions in the transaction list arriving at some point. 
You can also open the [Gateway node contract](https://etherscan.io/address/0x3ba4280217e78a0eaea612c1502fc2e92a7fe5d7) that shows the minting and pricing transactions in its transaction list. Also here they will only be initiated after a few minutes once the verified NFT proofs have been bridged from the Centrifuge Chain to Ethereum.

### Steps in Centrifuge
You need to be connected with Tinlake with the borrower ETH account that holds the NFT

#### Lock the NFT
- Open the document in Gateway and click on "Open loan" next to the NFT data
![](https://storage.googleapis.com/centrifuge-hackmd/upload_39148b732f72e28584e878186005ec9f.png)

This will open the Lock NFT page in your Tinlake pool and prefill token registry and token ID from the Gateway document.

An alternative how to access the assets of your pool: 

- Go to your Tinlake pool
- Click on the Asset tab
- Copy and paste the token registry and token ID from the Gateway document
![](https://storage.googleapis.com/centrifuge-hackmd/upload_2d50bcb655f6588491c7b8aba198c5f1.png) 
- Click on Lock NFT when data is filled in
- Confirm the transaction in Metamask or Ledger

#### Finance the asset
- Go back to the asset list on the Assets tab
- The new NFT/asset should have been added on top of the list
- Click on the asset to open the asset details
- Input the amount you want to finance in the input field
- Click on `Finance Asset` (the button will become active, once you input an amount >0)
- Confirm the transaction in Metamask or Ledger
![](https://storage.googleapis.com/centrifuge-hackmd/upload_b429fa50ea6bcae6af1ece3837d7b776.png)

#### Repay the asset
- Go back to the asset list on the Assets tab
- Click on the asset to open the asset details
- Click 'set max' for the repay amount 
- Click on `Repay` (the button will become active, once you input an amount >0)
- Confirm the transaction with Metamask/ Ledger





