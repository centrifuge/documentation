---
id: investor-guide
order: 2
title: Tinlake Investor Guide
subtitle: How to conduct your DROP investment/redemption with Tinlake UI
category: 6. Investment Guide
---

_If you have any questions regarding the technical set-up or how to conduct the investment, please contact tinlake@centrifuge.io. For further investment details please refer to the respective legal documentation in [Securitize.io](https://centrifuge.invest.securitize.io/#/login)._

Command Line Instructions for Power Users: https://centrifuge.hackmd.io/-VQUDTEDTPWutLhNT2oYaw

## Investment requirements
### Legal requirements
- Onboarding incl. KYC through [Securitize.io](https://centrifuge.invest.securitize.io/#/login) has been succesfully completed
- Legal documentation (`Subscription Agreement`) for the pool you want to invest in has been signed in Securitize.io

![](https://storage.googleapis.com/centrifuge-hackmd/upload_89b3a8c1b7030a6e718512bdea588857.png#width=600px)

### Technical requirements
- A web browser (preferably Chrome)
- A web3 wallet. Tinlake supports [Metamask](https://metamask.io) and [Portis](https://www.portis.io/) at the moment. If you have not installed a web3 wallet yet, we recommend to use Metamask. This guide will also focus on using Tinlake with Metamask as a [Browser plugin](https://metamask.io/download.html). Please apply approporiate security measures when setting up your web3 wallet(see also below).
- You need to be able to operate the Ethereum address you have specified in the Subscription Agreement through your web3 wallet
- The "Ethereum Address of the Subscriber" needs to hold the DAI you want to invest

## Technical set-up
_If you are familiar with how to use web3wallets such as Metamask please skip to the next section._

### 1. Install Metamask
Tinlake works together with a web3 wallet that holds your private keys to confirm the transactions with Tinlake. To use [Metamask](https://metamask.io), please make sure you have the Metamask plugin installed **in your browser** and have access to the Ethereum address that you want to use for investing. See guides on how to use and install Metamask e.g. [here](https://tokenmarket.net/what-is/how-to-install-and-setup-metamask/) or [here](https://medium.com/publicaio/a-complete-guide-to-using-metamask-updated-version-cd0d6f8c338f). 

We recommend to follow appropriate security measures, e.g. use a multisig or hardware wallet such as a Ledger for holding larger amounts for longer periods. Back-up your seed phrases on paper only. For inexperienced users we recommend to use a freshly generated address without previous transactions. 

_**If you use a Ledger, please make sure to activate `Contract data` in the settings of the Ethereum app and to update to the latest firmware.**_

### 2. Display DAI and TIN/DROP in Metamsk
By default, Metamask only displays your ETH balance under `Assets`. Other tokens need to be added to be displayed. To display the DAI and DROP balances in Metamask, you need to add both tokens to Metamask. 
For DROP and TIN this can be done through Tinlake UI. Just click on `Add DROP/TIN to your wallet` in the respective investment component (see below) and confirm in Metamask.
If you haven't added DAI yet, in Metamask:
- Click on `Assets` tab
- Scroll down, click on `Add token`
- Look for `DAI` in the search field
- Mark `Dai Stablecoin (DAI)`
- Scroll down and click on `Next`
- Add `DAI` with a click on the `Add tokens` button

## Fund your Ethereum address
Please make sure that your Ethereum address is funded with the investment amount in DAI and sufficient ETH to pay for the transactions. There are [several centralized and decentralized exchanges](https://cointelegraph.com/ethereum-for-beginners/how-to-buy-ethereum), such as [Coinbase](https://www.coinbase.com/) or [Uniswap](https://uniswap.org/) where you can buy and/or trade ETH and DAI against USD and other tokens.

_Please note that Ethereum Gas prices are historically high at the moment. Please make sure to set sufficient gas to ensure adequate transaction times. You find current gas prices e.g. [here](https://etherscan.io/gasTracker). Assuming an ETH price of USD 450, the two transactions required for the initial investment will cost appr._

| Gas price | Cost in ETH | Cost in USD |
| -------- | -------- | -------- |
| 10 gwei     | 0.002     | ~USD 1     |
| 100 gwei     | 0.02     | ~USD 10     |
| 500 gwei     | 0.1     | ~USD 50     |

## The investment interface
The investment will be made through the Tinlake UI available at https://tinlake.centrifuge.io/. Select the pool you want to invest in, change to the `Investments` tab and connect your web3 wallet.
At the top of the page you find the most important pool information, such as the current Pool and Tranche values (please refer to [INCLUDE LINK TO TINLAKE DOCUMENTATION] for more details on Tinlake terminology.)

![](https://storage.googleapis.com/centrifuge-hackmd/upload_2055718cadf334da85b0e3043137f657.png)

Below you find the current epoch state to your left and the TIN/DROP invest and redeem components to your right:

![](https://storage.googleapis.com/centrifuge-hackmd/upload_7cdf2224b61642e5e9676d45ed9e3dd5.png)
Under `Current epoch` you can see how much time and investment capacity is left in the current epoch. You can lock your investment/redemption at any time during an epoch. After the minimum epoch duration has passed, the epoch can be closed and all locked orders will be executed following a best effort approach. The table under `Total locked orders` shows you how many TIN/DROP investment and redemption order are locked for the current epoch.

## Investment flow summary
Tinlake's investment's and redemptions are executed in (usually daily ) epochs. During the epoch you can lock your investment or redemption order. You can cancel your locked order at any time throughout the epoch. At the end of the epoch all locked orders automatically executed at best effort considering investment/redemption supply and demand and the pools risk metrics. You can collect your TIN/DROP (in case of an investment) or DAI (in case of an redemption) token at any time following the start of the new epoch. If your order is only partially executed you can collect the executed order. The unfullfilled part of the order remains locked for investment/redemption but can this lock can be cancelled at any time.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_b64f5e85b6d7c2bf12af9b4f39786720.png#width=600px)

## Step- by-step investment guide
### Connect to Tinlake pool
- Go to the [Tinlake URL](https://tinlake.centrifuge.io/) in your browser (preferrably Chrome)
![](https://storage.googleapis.com/centrifuge-hackmd/upload_ee9209a6661542a1ccda0eb229e012c6.png)
- Click on the pool you want to invest in in the list of pools or visit it directly with the provided pool URL. You will see the pool details.
- Select the Ethereum address used for investing in Metamask. Make sure you also select the `Main Ethereum Network` as network.
- Click on the `Connect` button ![](https://storage.googleapis.com/centrifuge-hackmd/upload_44863a396b1b63dabf3530cf2cdbfb88.png =x20) in the top right corner to connect your Ethereum address for the use with Tinlake. Confirm that you want to connect with your Metamask wallet.
- The Navbar changes to:
![](https://storage.googleapis.com/centrifuge-hackmd/upload_676dff1fce8625342cb4eefa1be49b70.png)
and your connected wallet should be displayed in the web3 component in the tob right corner.
- Click on the `Investments` tab.


### Lock your investment
You find the TIN/DROP investment and redemption components at the bottom right corner of the page. 

![](https://storage.googleapis.com/centrifuge-hackmd/upload_f3828a045eda505dec5eec89c6a709ea.png#width=400px)

When you are connected with your whitelisted address after succesfully going through KYC and signing the Subsription Agreement on Securitize, your component will give you the Option to Invest and Redeem

![](https://storage.googleapis.com/centrifuge-hackmd/upload_9f75baf3b09810c637886235d2174268.png#width=400px)

Before you start investing, you may want to `Add TIN/DROP token to your wallet` by simply clicking on the link at the bottom of the component. 

To lock your TIN/DROP investment:
- Click on the `Invest` button
- Input the amount in DAI you want to invest (Note, that the Tinlake Minimum Investment amount is 10,000 DAI)
- Click on `Lock DAI`

![](https://storage.googleapis.com/centrifuge-hackmd/upload_678017512f8d04c2ed0a43cb0d3d723b.png#width=400px)

- This will open Metamask to confirm the transaction
    - If you are "just" using Metamask there will one transaction to confirm
    - If you are using a hardware wallet there will be two transactions to confirm at your first transaction (First `Token Approval` then the `Invest Order`). For all your folling investments there will only be one confirmation in Metamask
- Your sucessfully locked order will be displayed in the component 

![](https://storage.googleapis.com/centrifuge-hackmd/upload_2543ce9b23275ed6613ea457de1e810d.png#width=400px)

- Your investment amount in DAI will be transferred from your wallet and locked in the Tinlake contracts 

**Note that locked DAI are not invested in Tinlake yet and thus do not accrue interest. Your order will be automatically executed at best effort at the close of the epoch.**

### Cancel your locked investment
You can cancel your locked invest order at any time during the epoch. To cancel a locked order:
- Click on the `Cancel Order` button
- Confirm that you want to cancel

![](https://storage.googleapis.com/centrifuge-hackmd/upload_7db9566e8cc94aff6cf4e529ed8bb9a3.png#width=400px)

- This will open Metamask where you need to confirm the cancel transaction

### Epoch close and order execution
When the epoch is closed all locked orders will be executed by the smart contracts at best effort considering the pools risk metrics. E.g. if the current TIN risk buffer is already close to the Minimum TIN risk buffer no further DROP investments may be accepted until further TIN investments are provided. If the amount of locked orders exceed the epoch's `Maximum Investment Capacity` set by the Asset Originator, locked orders can only be partially executed pro rata.

### Collect your executed investment
After all orders are executed your fullfilled TIN/DROP order will be ready for collection:

![](https://storage.googleapis.com/centrifuge-hackmd/upload_4cbdf58793a6b94d609db3bec3ede4c4.png#width=400px)

To collect your TIN/DROP token simply
- Click on the `Collect button`
The TIN/DROP token will be transferred to your wallet.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_236a0a309e83afd017477ecf37fb8448.png#width=400px)

The TIN/DROP token will continue to collect yield reflected in the token price. You can redeem these TIN/DROP at any time (see below).
Note that the token immediatelly start to accrue interest also if you do not collect them immediately. However, you will need to collect these tokens before you can redeem them or make another investment. 

### Collecting a partially executed order
If your order has only been partially executed, you can collect the executed part of your order. The unfulffilled part will remain locked. You can keep this locked until the order is fullfilled or cancel at any time 
