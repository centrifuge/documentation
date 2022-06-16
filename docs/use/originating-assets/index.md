---
id: originating-assets
order: 10
title: Originating Assets 
---
## High level user flow
![](https://storage.googleapis.com/centrifuge-hackmd/upload_9e677fa9504dc2cdfae62dd3b6d1fcab.png)

## Mint NFT in Gateway
### What is the Gateway
[Centrifuge Gateway](https://gateway.centrifuge.io/) is the GUI of a Centrifuge Node that allows to securely create and exchange customised documents representing real-world assets as part of the Centrifuge P2P-protocol and mint NFTs based on these documents.

### Register for Gateway [One time set-up]
As an asset originator you should have received an invitation email to your email addresss. Click on the `Activate` button in the email. Enter the email shared with the Centrifuge team and choose a safe password according to the required criteria. The 2fa code upon registering is not sent at the moment. So after registering, just login again as normal to receive 2fa code per email. 

### Login to Gateway
* Go to https://gateway.centrifuge.io/
* Login with your email address and password
* You should receive a 2FA security code to your email to complete the login 
![](https://storage.googleapis.com/centrifuge-hackmd/upload_de80606d6d02f11356486a2ef36d0a3c.png)

### Create Document
- Click on `Documents tab`
- Click on `Create Document`
- Select your schema
- Your document fields appear
- Fill in Document details
![](https://storage.googleapis.com/centrifuge-hackmd/upload_0c42a416470f91fb299ecacab0ebb502.png)
- Click on `Save` to create the document
- The document will appear with status `Creating` in the document list
- Please wait 10-20 seconds until the document is created and anchored on chain
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

## Financing Asset in Tinlake
- You need to be connected with Tinlake with the borrower ETH account that holds the NFT.

### Lock the NFT
- Open the document in Gateway and click on `Open loan` next to the NFT data
![](https://storage.googleapis.com/centrifuge-hackmd/upload_39148b732f72e28584e878186005ec9f.png)

This will open the Lock NFT page in your Tinlake pool, and prefill the token registry and the token ID from the Gateway document.

An alternative how to access the assets of your pool:

- Go to your Tinlake pool
- Click on the Asset tab
- Copy and paste the token registry and token ID from the Gateway document
![](https://storage.googleapis.com/centrifuge-hackmd/upload_2d50bcb655f6588491c7b8aba198c5f1.png) 
- Click on Lock NFT when data is filled in
- Confirm the transaction in Metamask or Ledger

### Finance the Asset
- Go back to the asset list on the Assets tab
- The new NFT/asset should have been added on top of the list
- Click on the asset to open the asset details
- Input the amount you want to finance in the input field
- Click on `Finance Asset` (the button will become active, once you input an amount >0)
- Confirm the transaction in Metamask or Ledger
![](https://storage.googleapis.com/centrifuge-hackmd/upload_b429fa50ea6bcae6af1ece3837d7b776.png)

### Repay the asset
- Go back to the asset list on the Assets tab in Tinlake
- Click on the asset to open the asset details
- Click `Set Max` for the repay amount 
- Click on `Repay` (the button will become active, once you input an amount >0)
- Confirm the transaction with your wallet
