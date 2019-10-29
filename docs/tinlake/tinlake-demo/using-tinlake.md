---
id: using 
order: 2
title: Using Tinlake 
category: 5. Tinlake DEMO 
---

# Using Tinlake

## Prerequisites
- Chrome Browser (preferrably, the Tinlake Demo UI is not optimized for other Browsers yet)
- [Metamask](https://metamask.io/) 
- Account funded with Kovan faucet (~Test Ether) connected to Metamask (please see information on how to fund your account e.g. [here](https://github.com/kovan-testnet/faucet/blob/master/README.md))
- This link to Tinlake DEMO: https://kovan.demo.tinlake.centrifuge.io
- Please note, that Tinlake DEMO has not been optimized for the use on mobile devices yet


## Main Tinlake DEMO features
### Overview
Tinlake is used by two different types of users:
- "Borrowers" that originate the asset, mint an NFT representing the asset and draw loans from Tinlake. 
- "Admins" that underwrite the asset and then whitelist the NFTs in Tinlake.
![](https://storage.googleapis.com/centrifuge-hackmd/upload_859b29868368b32899039133aa793555.png)

For original Tinlake deployments, these users are also different entitites. Tinlake DEMO allows you to test all features with one Metamask account.

### Tokenize asset / Mint NFT
Recall, that Tinlake allows you to use any tokenized asset (this includes financial assets like invoices, purchase orders, warehouse receipts, mortgages, royalty payments as well as commodities, art, etc.) that is represented on-chain as an NFT following the ERC-721 standard to use as collateral in DeFi lending protocols. Customized NFTs for any asset can be minted using, e.g., the [Centrifuge Node](https://developer.centrifuge.io/cent-node/overview/introduction/). 

Tinlake DEMO has been simplified to allow you to mint a generic NFT within the Tinlake DEMO UI based on a simple "Generic asset" that just has an amount representing its value. 

### Whitelist NFT
Before an NFT can be submitted to Tinlake as collateral the underlying asset needs to be assessed and whitelisted by a an underwriter who sets the interest rate and the collateralization ratio between the value of the underlying asset ("Appraisal") and the maximum loan amount ("Principal"). This will usually be done by the Operator of the corresponding Tinlake Pool. In Tinlake DEMO you can whitelist your own NFT.

### Borrow and repay loan
Once you have whitelisted your NFT, you can use this NFT to take out a "Dummy DAI" loan (Note, that this is not real money). The loan amount will automatically be transferred to your connected account. You can repay this loan at any time (there is no duration or due date in Tinlake DEMO). Note that your account needs to be funded with additional "Dummy Dai" to pay the interest. Tinlake DEMO has an additional feature to fund your wallet accordingly. 

## The UI
The first screen you see when accessing Tinlake DEMO will be the Dashboard.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_dfa14c7b146c91e9d51348025b34b388.png)

This shows you the current status of the DEMO deployment summarized in key metrics and a graph on top as well as a list of all repaid and ongoing loans.
If you `Connect` to your Metamask account, the available tabs will change and lead you to the respective features.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_d8cea3e87c3d3395d8faa430f8c7cee8.png)

In the top right corner of the tab bar you will also find information about the account your are currently connected with as well as a link  to this guide in case you have any problems or questions.

## Using Metamask
The Tinlake DEMO Dashboard is publicly accessible, however to use all features of Tinlake DEMO you need to be logged-in to your Metamask Extension. Metamask holds the private keys that are required to confirm your transactions when using Tinlake DEMO. Choose an account you want to use for Tinlake DEMO and connect it to Tinlake via the `Connect` button (see more detailed instructions below). For every transaction, a Metamask confirmation modal will pop-up and ask you to confirm the transaction. Note, that these windows sometimes do not pop up but are rather indicated on the extension's icon in the toolbar 

To use Tinlake DEMO your account should be funded with sufficient Kovan faucet (~Testnet ETH). Please see information on how to fund your account e.g. [here](https://github.com/kovan-testnet/faucet/blob/master/README.md). 

Tinlake uses specific Tokens that need to be added to your Metamask extension in order to display the corresponding balances in your Metamask account. This is a one time set-up described below in more detail as well. 