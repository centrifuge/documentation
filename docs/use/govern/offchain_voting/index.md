# Off-chain voting

Off-chain voting takes place on [OpenSquare](https://voting.opensquare.io/space/centrifuge) and you vote with your CFG tokens. This works a bit differently than when you vote in an on-chain referendum in the sense that you are not actually locking your CFG tokens or making any transaction on the blockchain (hence no fees related to it). You can roughly look at OpenSquare Snapshots as *off-chain voting, using on-chain data*.

When you vote on OpenSquare, you don't need to specify any amount or conviction - you just select your option (typically Yes or No) and you will vote with the balance you had when the snapshot was taken (by default when the snapshot was created).

## How to create an OpenSquare Snapshot

Navigate to [OpenSquare](https://voting.opensquare.io/space/centrifuge), log in with your wallet and select **"+ New Proposal"**

Below you can see how to fill out the information.

![](./images/CreateSnap.png)

1. **Title** of the proposal 
2. **Short description** of the proposal including links to GitHub and the RFC
3. Write the **options** (typically Yes and No)
4. Keep it on **Single choice voting** (only one option can be voted on)
5. Select the **duration** of the OpenSquare snapshot
6. The **time of the snapshot** (do not change - by default this will be the time the snapshot was created)

Press *Publish* and the OpenSquare snapshot is created.


## How to vote in an OpenSquare Snapshot

To vote in an OpenSquare Snapshot, navigate to [OpenSquare](https://voting.opensquare.io/space/centrifuge), **log in with your wallet** and find the snapshot you want to vote in.

Select what you want to vote (Yes/No), click *Vote*, sign and your vote is registered.

![](./images/YesNo.png)

## How to vote in an OpenSquare Snapshot with Proxy

To vote in an OpenSquare Snapshot with a proxy, navigate to [OpenSquare](https://voting.opensquare.io/space/centrifuge), **log in with your Proxy (hot) wallet** and find the snapshot you want to vote in.

Select what you want to vote and click on the slider saying *Proxy vote*. In the empty space that appears, you paste the address of your proxied (cold) wallet, click on Proxy Vote and sign the transaction with your Proxy (hot) wallet. The available balance (your voting power) in your cold wallet will also be displayed.

![](./images/ProxyVote.png)