---
id: overview
order: 1
title: Overview
category: 5. Tinlake DEMO
---
## About this demo

The [Tinlake DEMO](https://kovan.demo.tinlake.centrifuge.io) is a user interface (UI) that allows anyone to test the features and functionalities of Tinlake: Use any tokenized asset as collateral to borrow from DeFi lending protocols. To make Tinlake DEMO accessible for anyone and simplify the user experience, Tinlake DEMO's feature set has been adapted compared to the standard version of Tinlake. For example, Tinlake DEMO allows you to mint your own NFT for a standardized asset. Further, that Tinlake DEMO is deployed on the [Kovan](https://kovan-testnet.github.io/website/) testnet, thus there is no real money involved.

Note, that Tinlake DEMO has been developed to showcase the features of Tinlake's smart contracts. We have also already a [Tinlake.js library](https://developer.centrifuge.io/tinlake/tinlake-js/overview/) you can use to directly interact with the smart contracts.

## Main Tinlake DEMO features

The main features you can test in Tinlake DEMO are:

- Minting an NFT representing a financial asset as collateral
- Whitelisting this NFT as eligible for a loan in Tinlake DEMO
- Borrowing and repaying a loan with the NFT as collateral

### Tokenize asset / Mint NFT

Recall, that Tinlake normally allows you to use any tokenized asset (this includes financial assets like invoices, purchase orders, warehouse receipts, mortgages, royalty payments as well as commodities, art, etc.) that is represented on-chain as an NFT to use as collateral in DeFi lending protocols. Customized NFTs for any asset can be minted using, e.g., the [Centrifuge Node](https://developer.centrifuge.io/cent-node/overview/introduction/). 

Tinlake DEMO has been simplified to allow you to mint a sample NFT reflecting a generic invoice as collatoral for a loan. This NFT will be automatically minted to your connected account.


### Whitelist NFT
Before an NFT can be submitted to Tinlake as collateral, the underlying asset needs to be assessed and whitelisted by a an underwriter who sets the interest rate and the collateralization ratio between the value of the underlying asset ("Appraisal") and the maximum loan amount ("Principal"). This will usually be done by the Asset Originator or designated underwriters of the corresponding Tinlake Pool. In Tinlake DEMO you can whitelist your own NFT.

### Borrow and repay loan
Once you have whitelisted your NFT, you can use this NFT to take out a loan in "Testnet DAI" (note, that this is not real money). The loan amount will automatically be transferred to your connected account. You can repay this loan at any time (there is no duration or due date in Tinlake DEMO). Note that your account needs to be funded with additional "Testnet DAI" to pay the interest. Tinlake DEMO has an additional feature to fund your wallet accordingly. 

### User roles
Tinlake typically has two different types of user roles:
- "Borrower" - Asset originators, that originate the asset, mint an NFT representing the asset and draw loans from Tinlake
- "Admins" or operators that underwrite the asset, whitelist the NFTs and manage the collateral in Tinlake.

While these users are usally also different entitites, in Tinlake DEMO every user has Admin rights that allow you to test all features with one Metamask account.

## Limitations
Tinlake, Tinlake DEMO, Centrifuge Protocol and all its components are Beta Software and in an early stage of their development. The set of smart contracts and its UI have a limited feature set compared to the end-vision. Not all features are implemented yet, and tradeoffs between security, speed, end-user features, and protocol flexibility are made continuously. This might and will lead to substantial changes in the future, re-architecture, addition and removal of features, as well as unexpected behavior. Use at your own risk.

## Contact us
If you have any questions in regard to Tinlake or Tinlake DEMO please or provide us with feedback, please contact us via:
- Centrifuge Slack Channel: https://bit.ly/2mLzEqr (#tinlake-demo)
- Email: tinlake@centrifuge.io