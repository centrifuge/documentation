# On-chain voting

## How to vote in a referendum



### How to vote with conviction

Voting with conviction is a unique and powerful feature in the Polkadot ecosystem. It allows everyone to increase their voting power. What it basically means, is that you can use up to 6X the amount of tokens you vote with, by locking them up for a longer period of time.

If you don’t choose any conviction, the system will select the 0.1X by default. This means that you only vote with 10% of your tokens, but the tokens you used to vote with will be unlocked as soon as the referendum vote ends.

![](./images/LockingPeriod.png)

### How to unlock tokens locked in Governance

To get your locked tokens back after voting, you have to unlock them manually after the lock has expired.

You can see how many tokens you have locked in referenda, by going to the [Accounts section](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ffullnode.parachain.centrifuge.io#/accounts) of the portal and click on the arrow down next to your wallet. To unlock the expired ones, simply click on the three dots, select “Clear expired democracy locks” and sign the transaction.

![](./images/UnlockTokens.png)

## How to create a Governance Proxy
The first step is to [create a hot wallet](https://docs.centrifuge.io/use/setup-wallet/), using the Polkadot.js browser extension. This will be your Governance Proxy.

If your tokens are in a cold wallet (e.g. Parity Signer), you need to import it to the Polkadot.js portal first, using the browser extension. You can find simple instructions on how to do that for Parity Signer [here](https://support.polkadot.network/support/solutions/articles/65000182010-how-to-add-a-parity-signer-account-on-polkadot-js-ui) (use the section *How to add your account through the Polkadot extension*). This way you make your cold wallet hot temporarily while you set up your Governance proxy - make sure to remove it again when you're finished so it remains cold.

Make sure they are both visible on *Centrifuge* (not Centrifuge Chain which is the old standalone chain) in the Polkadot.js browser extension.

![](./images/VisibilityJS.png)

You should now be able to see both your hot and cold wallet addresses in the Polkadot.js portal under [Accounts](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ffullnode.parachain.centrifuge.io#/accounts). 

![](./images/Accounts.png)

You also need to transfer a small amount of tokens to your proxy to cover transaction fees - 1 CFG should be more than enough.

Click on the three dots next to your **cold wallet** and select *"Add proxy"*. 

![](./images/Proxy.png)

1. Select your **hot wallet** as your PROXY ACCOUNT
2. Select **Governance** under TYPE 
3. Click **Submit** and **sign the transaction**

It is very important that you select Governance under 2. and not any of the other options to ensure that the proxy wallet only can be used in Governance, and not to transfer tokens or anything else.

Your Governance Proxy is now set up and ready to be used. If you want to keep your cold wallet cold, make sure to remove it from the extension again, by clicking on the three dots next the wallet in the Polkadot.js browser extension and selecting Forget Account.

![](./images/Forget.png)


### How to vote in a referendum with Proxy

If you already have set up your Proxy wallet (using the description above), you can also vote in on-chain referenda on SubSquare. Log in with your Proxy (hot) wallet, navigate to [settings](https://centrifuge.subsquare.io/setting/proxy) and specify your proxied (cold) wallet. 

![](./images/DefineProxy.png)

1. Paste the address of the cold wallet (i.e. the wallet that created the Proxy)

To vote in a referendum, navigate to [SubSquare](https://centrifuge.subsquare.io/democracy/referenda), find the referendum you want to vote on and click *vote*.

![](./images/ProxyReferendum.png)

1. The Proxy (hot) wallet
2. The Proxied (cold) wallet and the available balance for voting
3. Select voting balance (up to the amount available shown above)
4. Select conviction (lock up period displayed right below)
5. Vote Nay or Aye

Sign the transaction and your vote should be registered.


## Delegation of tokens

Delegation of tokens is another way of transferring your voting power to another wallet, while maintaining full custody of your tokens. This is very convenient for all **on-chain voting**, i.e. referenda, if:

* you want to keep your tokens in a cold wallet and still participate in Governance
* you don't have time to vote but still want to let someone else vote with your tokens actively in Governance
* you don't have enough background knowledge about the proposals and want to delegate your voting power to someone who does

If wallet A delegates tokens to wallet B, then every time wallet B votes in a referendum, it automatically votes with the delegated tokens from wallet A.

The easiest way to start delegating your tokens is to navigate to [SubSquare](https://centrifuge.subsquare.io/democracy/referenda), log in with the **wallet you want to delegate from**, and click on *+ My Delegate*.

![](./images/MyDelegate.png)

![](./images/Delegate.png)

1. The wallet you are delegating from
2. Select the wallet you are delegating to (select from list if it is your own - otherwise paste a CFG address)
3. Select the amount
4. Select the conviction

Whenever 2. votes in an on-chain referendum it will automatically also vote with the amount and conviction specified.

