---
id: userflow
order: 3
title: How to use Tinlake DEMO
category: 5. Tinlake DEMO 
---

# How to use Tinlake DEMO
## Introduction
Recall, that the main features you can test in Tinlake DEMO are:
- Mint an NFT representing a financial asset as collateral
- Whitelist this NFT as eligible for a loan in Tinlake
- Borrow and repay a loan with the NFT as collateral

These actions typically need to be conducted in this order:
![](https://storage.googleapis.com/centrifuge-hackmd/upload_eabef585660776bb146dc568bca2ecaa.png)

## Open Tinlake DEMO
Follow this link: https://kovan.demo.tinlake.centrifuge.io to access Tinlake DEMO.

## The Dashboard
The first screen you see when accessing Tinlake DEMO will be the Dashboard.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_6b8bf596c9f59ce4f2bf175fa5ab02b8.png =600x)


This shows you the current status of the DEMO deployment summarized in key metrics and a graph on top as well as a list of all repaid and ongoing loans.

## Connect your Metamask account
To use the full feature-set of Tinlake DEMO you need to be connected with your Metamask account. First, switch to the account you want to use in Metamask.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_72aaf934c57cba65b44b6b1afc3ecc68.png =200x)

Make sure you have selected the `Kovan Test Network` as your network.

If you click on `Connect` in the top right corner, a modal opens with available wallets. Note, that at the moment, Tinlake DEMO only supports the Metamask wallet. You can then select Metamask to connect with your Metamask account.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_ad89db28922ef3dadd8f873125d942fb.png =x100)

Once connected, the available tabs will change and lead you to the respective features.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_4d6d354cfd2a963cf7eaf1a13a5fe654.png =600x)


In the top right corner of the tab bar you will also find information about the account your are currently connected with as well as a `Help` link to this guide in case you have any problems or questions. Note, that you are also automatically connected as an Admin.

[Optional: Before using TINLAKE DEMO or your account the first time, make sure you added the Dummy Currency `DKTN` and the `TPT` NFT to you Metamask account (see section `Getting Started` for instructions)]

When using Metamask, for every transaction you initiate in Tinlake, a Metamask confirmation modal will pop-up and ask you to confirm the transaction. Note, that these windows sometimes do not pop up but are rather indicated on the extension's icon in the toolbar.

## Mint NFT
In this demo, you can mint a test NFT reflecting an sample invoice worth USD 1.000 into your wallet. Note, that this feature is only made available for Tinlake DEMO's adapted feature set. If you are interested in minting customized NFTs please see the [Centrifuge Node Documentation](https://developer.centrifuge.io/cent-node/overview/introduction/) or contact us. 

- To mint an NFT, change to the `Mint NFT` tab

![](https://storage.googleapis.com/centrifuge-hackmd/upload_10b27bc296c9d954d6d8996c2d1084b8.png)


- Fill in a "NFT Reference" as a unique identifier for your invoice NFT
- Asset type (="Invoice") and Invoice amount (= 1.000 USD) are filled in automatically

![](https://storage.googleapis.com/centrifuge-hackmd/upload_c3f11ed4d014857a9723c070d321b979.png)


- Click on `Mint NFT`
- Confirm the transaction in Metamask

![](https://storage.googleapis.com/centrifuge-hackmd/upload_21aeb8e17f081112f570da9264d80f10.png =200x)


- Tinlake automatically mints the NFT to your connected account (You can verify this in Metamask, if you have added the `TPT` Token to your extension. See above for instructions)

![](https://storage.googleapis.com/centrifuge-hackmd/upload_90fc444a01b51c286843ced3f8e7877c.png =200x)

- Once minted, the Tinlake DEMO UI will display the Token ID:

![](https://storage.googleapis.com/centrifuge-hackmd/upload_20912618f88c179343c93cfc81e746d3.png)

- You can procedd to whitelist the NFT by clicking on the corresponding link `Proceed to whitelisting` in the confirmation box
- In this case, your Token ID will be pasted in automatically in the corresponding field in the subsequent whitelisting screen. 
- If you want to whitelist your NFT later, **please copy/store the Token ID for whitelisting**. Note that if you do not copy or store your Token ID, you cannot whitelist the NFT later and will have to mint a new NFT.

## Whitelist NFT
- Change to the `Whitelisting` tab

![](https://storage.googleapis.com/centrifuge-hackmd/upload_37a8050f48af5002af99ba8b6c01e426.png =600x)

- Paste the copied/stored Token ID into the respective field. If you were forwared from minting the NFT, the Token ID will be pasted automatically. The corresponding NFT metadata will automatically be displayed.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_f6a90cc9bfc88fa48be6392dd75bd53a.png)


- Fill in the "Appraisal" (reflecting the value of the underlying asset), the "Principal" (defining the maximum loan amount) and the annual interest rate.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_45658f85a25b26d265cbc972cf029157.png)

- Click on the ```Whitelist``` button
- Confirm transactions in Metamask
- Tinlake DEMO will display a confirmation message

![](https://storage.googleapis.com/centrifuge-hackmd/upload_9f0dac9a250e5e4f9d35c32c19ae6a5b.png)


- If you change to the `My loans` tab, the whitelisted NFT should appear at the top of the loan list. Note that this may take a few seconds.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_ee15075a143b0d21daaadae9f21596a1.png)



## Borrow Loan
- Make sure you have succesfully minted and whitelisted an NFT (see above)
- Change to ```My loans``` tab
- In the ```Loans``` list, find the whitelisted loan and click on ```View``` in the `Actions` column

![](https://storage.googleapis.com/centrifuge-hackmd/upload_98749e0a2946d5953828c5189f434031.png)

- The next screen shows you all the details in regards to your loan and the underlying NFT

![](https://storage.googleapis.com/centrifuge-hackmd/upload_6618b86995e660b690e5be3fa5453632.png)


- Click on the ```Borrow``` Button
- The ```Borrow Amount``` will be filled in automatically in Tinlake DEMO equal to the Principal

![](https://storage.googleapis.com/centrifuge-hackmd/upload_958fcd5a2991d87ef6bb9599dc5873a4.png)


- Click on the ```Confirm``` Button
- Confirm transactions in Metamask
- Tinlake DEMO will display a confirmation message

![](https://storage.googleapis.com/centrifuge-hackmd/upload_740882cde941fd351c345e5f1df04bdb.png)


- Check you Metamask account, that the loan amount in "Testnet DAI"`DTKN` has been transferred to your account. Note, that it may take Metamask a few seconds to display the transfer.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_d47183172a78385df5fe9b8f4f448cee.png =200x)

- The NFT has automatically been transferred to the Tinlake smart contracts as collateral and is not in your wallet anymore
- You can view the status of your loan at any time by clicking on `View` in the `My loans` list

![](https://storage.googleapis.com/centrifuge-hackmd/upload_a6f479f122d5157419903e077af8d4cf.png)

- Note, that interest will accrue every second from the moment you take out the loan

## Repay Loan
- Change to ```My loans``` tab
- In the ```Loans``` list, find the loan you want ro repay and click on ```View``` in the action column. Your loan details will be displayed:

![](https://storage.googleapis.com/centrifuge-hackmd/upload_9024fe2b7b58ce8aa3c1d4dc5db616e0.png)


- Click on the ```Repay``` Button
- Tinlake DEMO displays the total "Debt" you will need to repay including accrued interest. Note, that in Tinlake DEMO you can only repay the entire amount:

![](https://storage.googleapis.com/centrifuge-hackmd/upload_960d219cbf0a056e95d459d6c0d7efa7.png)

- Make sure, your account is funded with enough "Testnet DAI" to cover your accrued interest 
    - If you need to fund your account, click on ```Fund wallet``` button
    - Confirm transaction in Metamask
    - Tinlake DEMO will display a confirmation message and your account will automatically be funded with 100 Testnet DAI. The `Fund wallet` button will be deactivated.
    - ![](https://storage.googleapis.com/centrifuge-hackmd/upload_14f8c36b15034e176c5bce7aadae9cf6.png)

    - Verify that you now have sufficient funds in your Metamask account.
- To repay the loan, click on the ```Confirm``` Button
- Confirm the transaction in Metamask
- Tinlake DEMO will display a confirmation message

![](https://storage.googleapis.com/centrifuge-hackmd/upload_0ecaef73318ee5f2a0e8eb2e91f4612f.png)

- You have succesfully repaid your loan. Your NFT was automatically returned. Check the `DTKN` and `TPT` balance in your Metamask account.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_5e8a35fc9fad4b9056142a8030663f32.png =200x)
