---
id: userflow
order: 3
title: User Flow 
category: 5. Tinlake DEMO 
---

# User flow
## User roles
As mentioned, each Tinlake pool usually has an Operator or Admin, that manages the pool of assets and whitelists NFTs. Thus, certain Tinlake functions are only available to "Admins", while borrowing and repaying the loan is usually conducted by "Borrowers".  Tinlake DEMO has a simplified feature set, where every user automatically is connected as an Admin. This means, that you can whitelist you own NFTs that you can then use to draw loans.

## 0. Before you (initially) start
Note, that the steps described in this section are a one-time set-up for every account you want to use with Tinlake DEMO.

### Fund your account with Kovan Faucet
To use Tinlake DEMO your account should be funded with sufficient Kovan faucet (~Testnet ETH). Please see information on how to fund your account e.g. [here](https://github.com/kovan-testnet/faucet/blob/master/README.md).

### Adding Tinlake DEMO Tokens to your Metamask account
As mentioned above, the Dummy Currency `DTKN` and NFT `TPT` used by Tinlake DEMO should to be added to your Metamask extension for the account balance to be displayed. This is a one time set-up for the specific account you want to use for Tinlake. To add these tokens to the Metamask account you want to use with Tinlake DEMO, first change to your desired account
![](https://storage.googleapis.com/centrifuge-hackmd/upload_349ce7ef87d63428fc632248ccdcfc40.png)

#### Adding Dummy Currency `DTKN`
Then click on `Menu` ![](https://storage.googleapis.com/centrifuge-hackmd/upload_26ea9441c987f33514905f3d43178c2a.png), scroll down and click on `Add Token`. Change to the `Custom token` tab and paste the following Token Address `0x2cab5720ce6e95fdfda58c1a6c693580324b7109` into the `Token Contract Address` field. : 
![](https://storage.googleapis.com/centrifuge-hackmd/upload_e96b2bb50ba1530de89271e991f20030.png)

Token Symboal and Decimals of Precision will be filled in automatically. Click on `Next` and then confirm by clicking on `Add Tokens`.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_a5af2b7caa8a30a4239c3737654ea5e2.png)

#### Adding the Tinlake DEMO NFT `TPT`
Repeat the same steps as described above for the Tinlake DEMO NFT `TPT`. The NFT Token address is `0xac0c1ef395290288028a0a9fdfc8fdebebe54a24`.

You should now see both Tokens in your Metamask account:
![](https://storage.googleapis.com/centrifuge-hackmd/upload_0dab799fe2e4f91812542a3d465ceb34.png)

## 1. Open Tinlake DEMO
Follow this link: https://kovan.demo.tinlake.centrifuge.io to access Tinlake DEMO.

## 2. Connect your Metamask account to Tinlake
- Make sure you are logged-in to your Metamask extension
- Switch to the account you want to use
![](https://storage.googleapis.com/centrifuge-hackmd/upload_349ce7ef87d63428fc632248ccdcfc40.png)
- [Optional: Before using TINLAKE DEMO or your account the first time, make sure you added the Dummy Currency `DKTN` and the `TPT` NFT to you Metamask account (see above for instructions)]
- Make sure you have selected the `Kovan Test Network` as your network ![](https://storage.googleapis.com/centrifuge-hackmd/upload_d8478d02555f217343b4caa26caba120.png)
- Click on ![](https://storage.googleapis.com/centrifuge-hackmd/upload_39384b727860520fdedf79dce6f0c551.png) in the tab bar
- This opens a Modal with available wallets. Click on Metamask to confirm ![](https://storage.googleapis.com/centrifuge-hackmd/upload_0064410ab3b23b0bf505c1c112d41b20.png)
- [Optional: When using Tinlake DEMO and/or the account the first time, a Metamask pop-up asks you to confirm the connection between Metamask and Tinlake. Click on `Confirm`]
- You are now connected to Tinlake with your Metamask account ![](https://storage.googleapis.com/centrifuge-hackmd/upload_f49441840a655640a88ad9fe5c3ffb62.png)
- Note, that you are automatically connected as an Admin


## 3. Mint NFT
Note, that this feature is only made available for Tinlake DEMO's simplified feature set. If you are interested in minting customized NFTs please see the [Centrifuge Node Documentation](https://developer.centrifuge.io/cent-node/overview/introduction/) or contact us. 
- Change to the `Mint NFT` tab

![](https://storage.googleapis.com/centrifuge-hackmd/upload_1d8b115771f186d347c6363451f02443.png)

- Fill in the NFT metadata of your "Generic Asset":
    - Choose a Reference ID or Name that describes your asset (string)
    - Define your asset type (string)
    - Fill in amount reflecting the value in USD (number)

![](https://storage.googleapis.com/centrifuge-hackmd/upload_e1770de10ec862998e39ed580befe0e0.png)

- Click on `Mint NFT`
- Confirm the transaction in Metamask

![](https://storage.googleapis.com/centrifuge-hackmd/upload_0ca1edd26b6e87839e4db70d0cf6c6e8.png)

- Tinlake automatically mints the NFT to your connected account (You can verify this in Metamask, if you added the `TPT` Token to your extension. See above for instructions)
- Once minted, the UI will display the Token ID:

![](https://storage.googleapis.com/centrifuge-hackmd/upload_20961601a71553a5756b69f56b1230f0.png)

- **Copy/Store the Token ID for Whitelisting**. Note that if you do not copy or store your Token ID, you cannot whitelist the NFT and will have to mint a new NFT.
- Click on "Proceed to whitelisting" in the confirmation box or change to the `Whitelisting` tab

## 4. Whitelist NFT
- Change to the `Whitelisting` tab

![](https://storage.googleapis.com/centrifuge-hackmd/upload_521c85cb8943b924a7eff9f8011a18dc.png)

- Paste the copied/stored Token ID into the respective field. The corresponding NFT metadata will automatically be displayed.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_a044120ecec208c9166393403bb82911.png)

- Fill in the Appraisal (reflecting the value of the underlying asset), the Principal (defining the maximum loan amount) and the annual interest rate.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_38095c0587d68eb6e22d9ffc460dacad.png)

- Click on the ```Whitelist``` button
- Confirm transactions in Metamask
- Tinlake DEMO will display a confirmation message

![](https://storage.googleapis.com/centrifuge-hackmd/upload_a118c764e274f8b95d70fe86502728d3.png)

- The whitelisted loan should appear at the bottom of the loan list. Note that this may take a few seconds.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_97e2f823e31043f8b0a4c5fee615bd59.png)


## 4. Borrow Loan
- Change to ```My loans``` tab
- The loan list will be empty, if your are using Tinlake DEMO for the first time. Otherwise, your previously whitelisted, borrowed and repaid loans will be shown here

![](https://storage.googleapis.com/centrifuge-hackmd/upload_97e2f823e31043f8b0a4c5fee615bd59.png)


- In the ```Loans``` list, find the whitelisted loan (usually at the bottom) and click on ```View``` in the `Actions` column

- The next screen shows you all the details in regards to your loan and the underlying NFT

![](https://storage.googleapis.com/centrifuge-hackmd/upload_de1ea12b3974c16e1203272d95efb9d4.png)

- Click on the ```Borrow``` Button
- The ```Borrow Amount``` will be filled in automatically in Tinlake DEMO equal to the Principal

![](https://storage.googleapis.com/centrifuge-hackmd/upload_a353f9004c2ee973cbeb298e53de7bd5.png)

- Click on the ```Confirm``` Button
- Confirm transactions in Metamask
- Tinlake DEMO will display a confirmation message

![](https://storage.googleapis.com/centrifuge-hackmd/upload_42c6a338b26d1d9a9f49391d068d3869.png)

- Check you Metamask account, that the loan amount in "Dummy DAI"`DTKN` has been transferred to your account. Note, that it may take Metamask a few seconds to display the transfer.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_cd8fdcec2e6a47b4168b619bb5f3e6e0.png)

- Note that the NFT has automatically been transferred to the Tinlake smart contracts as collateral
- You can view the status of your lown at any time by clicking on `View` in the `My loans` list

![](https://storage.googleapis.com/centrifuge-hackmd/upload_7139832eacbfd2e76f2bc5abd16c4c81.png)

- Note, that interest will accrue every second from the moment you take out the loan

## 5. Repay Loan
- Change to ```My loans``` tab
- In the ```Loans``` list, find the loan you want ro repay and click on ```View``` in the action column. Your loan details will be displayed:

![](https://storage.googleapis.com/centrifuge-hackmd/upload_7defe533c3ba8a534b9c058a4a9a4595.png)

- Click on the ```Repay``` Button
- Tinlake DEMO displays the total Debt you will need to repay including accrued interest. Note, that in Tinlake DEMO you can only repay the full amount:

![](https://storage.googleapis.com/centrifuge-hackmd/upload_0a7037d967c13a664ed14f6a20ae9b7a.png)

- Make sure, your account is funded with enough "Dummy DAI" to cover your accrued interest 
    - If you need to fund your account, click on ```Fund wallet``` button
    - Confirm transaction in Metamask
    - Tinlake DEMO will display a confirmation message and your account will automatically be funded with 1.000 Dummy DAI. The `Fund wallet` button will be deactivated.
    - ![](https://storage.googleapis.com/centrifuge-hackmd/upload_6a3d443f9304b15e4368b812bbdf687e.png)
    - Verify that you now have sufficient funds in your Metamask account.
- To repay the loan, click on the ```Confirm``` Button
- Confirm the transaction in Metamask
- Tinlake DEMO will display a confirmation message

![](https://storage.googleapis.com/centrifuge-hackmd/upload_4715ddad747cb453fdbd0d88a6c1cc4e.png)

- You have succesfully repaid your loan. Your NFT was automatically returned. Check the `DTKN` and `TODO` balance in your Metamask account.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_9ca1333e46de8343515c6b205dac46fa.png)
