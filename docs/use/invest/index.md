---
id: invest
order: 3
title: Investing into and Redeeming from a pool
contributors: <Dennis Wellmann:dennis@k-f.co>, <Jay:jay@k-f.co>
---

# Investment requirements

## Legal requirements
- KYC/KYB has been successfully completed
    - Find more information how to onboard [here](/use/onboarding/)
    - Note that there are some [countries with restricted access](https://docs.centrifuge.io/use/onboarding/#excluded-countries) and *US individual investors must be accredited investors*
- Signed `Token Subscription Agreement`


## Technical requirements

- A web browser with a web3 wallet. Centrifuge supports the following wallets:

- Centrifuge/Polkadot
    - [Polkadot{.js}](https://polkadot.js.org/extension/)
    - [Talisman - Polkadot Wallet](https://chrome.google.com/webstore/detail/talisman-polkadot-wallet/fijngjgcjhjmmpcmkeiomlglpeiijkld)
    - [SubWallet](https://chrome.google.com/webstore/detail/subwallet-polkadot-extens/onhogfjeacnfoofkfgppdlbmlmnplgbn)
- Ethereum
    - [Ledger](https://www.ledger.com/) (Note, if using a Ledger Device, please enable "Blind Signing" in the Ethereum app settings and ensure the device has been updated to the latest firmware. It's recommended to disable blind signing after each use.)
    - [Metamask](https://metamask.io/download.html)
    - [Wallet Connect](https://walletconnect.com/)


If you are setting up a wallet for the first time please apply appropriate security measures when setting up your web3 wallet. Find more information how to set up a web3 wallet [here](/use/setup-wallet/).

When attempting to invest, ensure you are connected with the wallet address you connected with during the initial KYC process to invest in a pool. If you encounter an issue please confirm KYC has been completed and that the correct wallet is selected. If issue remains please contact support@centrifuge.io.

## Fund Investment address

Before you invest, please make sure that your KYCed investment address is funded with both the investment amount in the stablecoin of the selected pool and sufficient native chain currency (such as ETH or CFG) to pay for the transaction fees. There are [several centralized and decentralized exchanges](https://cointelegraph.com/ethereum-for-beginners/how-to-buy-ethereum), such as [Coinbase](https://www.coinbase.com/) or [Uniswap](https://uniswap.org/) where you can buy and/or trade ETH and Stablecoins against USD and other tokens.

# Investment flow summary

Investments and redemptions on Centrifuge are executed in epochs. During an epoch you can lock your investment or redemption order. You can also cancel your locked order during an epoch period. At the end of an epoch all locked orders automatically executed at best effort considering investment/redemption supply and demand and the pool's risk metrics such as minim tranche risk buffers. 

Once an investment is executed, the  tranche tokens (in the case of an investment) or stable coin (in the case of a redemption) at any time following the start of the next epoch. If your order only partially executes you can collect that portion of your order. The unfulfilled part of the order remains locked for investment/redemption pending execution. As with your initial order, this lock can be canceled at any time.

## Step-by-step investment guide

### Navigate to [app.centrifuge.io/pools](app.centrifuge.io/pools)
### Connect your wallet 
- Connect your investment wallet to the app by clicking "Connect" in the top right corner (if you do not see a "Connect Button", try to either expand your screen or look on the bottom of the page). Please ensure the connected wallet is the same wallet used during the KYC process.

![](./images/pool_overview.png#width=600px)


- When connecting your wallet you can choose from various networks such as **Centrifuge** and **Ethereum**. First choose the network you would like to transact on. Please note, that you should choose the network that matches the network of the Pool you would like to invest in is in. You can find the network in the bottom corner of the pool logo.

![](./images/Connect_Wallet.png#width=600px)

- Once you have chosen your network, then choose the wallet provider you have your wallet in. 

- For the Centrifuge Network, you can choose from Talisman, Subwallet or Polkadot{.js}. 

- For Ethereum, can choose from MetaMask, Coinbase Wallet, or Connect through Wallet Connect.

- From the wallet list, select the wallet you KYC'd with during onboarding and ensure funds are deposited for investment and ready to be deployed. 

### How to change wallets
If you need to change wallets follow the steps below. Please note, that in order to invest you must invest with a wallet that has been whitelisted for the desired pool. Note, if using MetaMask to invest in an Ethereum Pool you must change your wallet in the MetaMask Browser Extension.
- Navigate to the Wallet button in the top right corner of the page and select it. It will open a drop down with a button labeled "Switch Account". Select this and change your wallet. If you need to change network select Back in the top corner of the change wallet box. 
- If using MetaMask and you wish to switch wallets, you can change your connected address within the MetaMask app browser extension.
- Select desired wallet from the list and begin transacting. 

![](./images/switch_wallet.png#width=600px)

### Invest into the pool

Once you have connected your wallet, ensure that your Verification Status says "Completed", this represents your KYC status.

You can view your status in your wallet in the top right corner. In order to invest the Verification Status should be **Complete**. If the status says **Verify Identity**, you still need to complete the KYC process. 

![](./images/kyc_status.png#width=600px)

Once you are verified and completed pool onboarding by signing the subscription agreement, uploading tax documents, and for US investors certifying investor Accreditation status, you can begin investing in the pool.

- Select the Pool you would like to invest in.
- From the drop down menu Choose the Pool tranche you want to or have already completed onboarding for. When onboarding you will need to confirm KYC, sign the pools Subscription agreement, and provide Tax documentation. ![](./images/select_tranche.png#width=600px) 
- Enter the Amount you would like to invest. Please note each pool may have a minimum Investment amount, in the example pool seen above, the minimum is 10,000 aUSD. Beneath this number, you can also see your wallet's balance of the stablecoin. 
- You can also click the MAX button to invest your entire Available Balance. 
- Once you enter the amount, Click "Invest" and sign the On-chain transaction. Note, once you have clicked "Invest" your order is locked but not Executed into the pool. You must wait for the epoch to conclude before your Pending investment is executed. [Learn more about Epochs and Pending orders Here](https://).

### Changing Locked Investments/Redemptions
- After you lock an investment or redemption order, if you would like to change your order follow the steps below: 
- To change a Locked Order that has not executed to pool (See below for how to check investment status, click "Change Order".![](./images/change_order.png#width=600px) 
- Enter the new amount you would like to invest into the pool and select "Change Order" and sign the on-chain transaction to relock your order. Note, you still must wait for the pending order to be executed at the end of an epoch before your investment is active. 

![](./images/change_order_value.png#width=600px)



### How to check investment/redemption status
- You can check the status of your Pending Order by navigating to "Liquidity" tab of the pool and seeing the remaining time on the epoch for orders to execute.

![](./images/check_status.png#width=600px)

- Scroll down to the bottom of the page to view Order Overview. You can learn more about how orders are processed [here](https://docs.centrifuge.io/learn/epoch/).



### Canceling a locked investment/redemption
- To cancel your Pending Investment or Redemption Order, simply select "Cancel" and sign the transaction.
![](./images/change_order.png#width=600px) 


### Redeeming from a pool
- To initiate a redemption from the pool, navigate to the pool investment tab and select "Redeem".
![](./images/redeem.png#width=600px) 
- Then enter the amount you would like to redeem, click "Redeem" and sign the transaction.
![](./images/redeem_value.png#width=600px) 
- Once your redemption has been fulfilled you will see "Redemption successful".


## Investment Disclaimer
Nothing contained in this website is to be construed as a solicitation or offer, or recommendation, to buy or sell any interest in any note or other security, or to engage in any other transaction, and the content herein does not constitute, and should not be considered to constitute, an offer of securities. No statement herein made constitutes an offer to sell or a solicitation of an offer to buy a note or other security. All information on this Web page is provided and maintained by the issuers of the respective Centrifuge pools. The issuers have full responsibility. Please contact the respective issuer in case of any inquiries. Centrifuge and its affiliates are not liable nor responsible for the information provided hereby.

Before investing in any of the Centrifuge pools, please check the issuer's offering materials and subscription documents including the Executive Summary to understand the terms, conditions, and investment risks of each pool. The issuer provides investment risk factors which are important to understand when you consider whether to invest in a pool. You alone assume the sole responsibility of evaluating the merits and risks associated with the use of any information or other content before making any decisions based on such information or other content.

The Centrifuge protocol is rewarding every Centrifuge investment daily in CFG token, the Centrifuge Chain's native token. Note that these are rewards from the protocol for providing liquidity to the ecosystem independent from the pool, it's issuers, their asset originators, or any Centrifuge entity. There is no guarantee that an investor will receive those rewards.

