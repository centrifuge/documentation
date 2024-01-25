---
id: on-chain-voting
order: 9
title: On-chain Voting
contributors: <Orhan Klardashti:klardashti@gmail.com>
---

## Introduction

On-chain voting takes place on the blockchain and requires CFG tokens to vote in referenda. All proposals are posted in [this section](https://gov.centrifuge.io/c/cfg-governance/chain-governance/18) of the Forum. Here you will find all information you need about a proposal (what it is about, where to vote etc).

## How to vote in a referendum

The easiest way to vote is to navigate to [SubSquare](https://centrifuge.subsquare.io/democracy/referenda) and find the referendum you want to vote in.

![](./images/VoteReferendum.png)

1. Vote **Nay** or **Aye**
2. Select **voting balance** (up to the amount available)
3. Select **conviction** (lock up period displayed right below)
4. **Confirm** and sign the transaction

Always leave some CFG in your wallet when voting to be able to pay transaction fees (1 CFG should be more than enough).

### Voting with conviction

Voting with conviction is a unique and powerful feature of the Polkadot ecosystem that allows an individual to increase their voting power. You can vote with up to 6X the amount of your tokens by locking them up for a longer period of time.

If you don’t choose any conviction, the system will select the 0.1X by default. This means that you only vote with 10% of your tokens, but the tokens you use to vote with will be unlocked as soon as the referendum vote ends.

![](./images/LockingPeriod.png)

Note that if the outcome of a referendum is the opposite of what you voted, your tokens will not be locked. E.g. if you vote Nay on a referendum and it passes (and vice versa), then your tokens will not be locked.

### Unlocking tokens locked in governance

To unlock your tokens after voting, you have to do it manually after the lock has expired.

You can see how many tokens you have locked in governance by going to the [Accounts section](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ffullnode.parachain.centrifuge.io#/accounts) of the Polkadot portal and click on the arrow down next to your wallet. To unlock the expired ones, simply click on the three dots, select *Clear expired democracy locks*, and sign the transaction.

## How to vote in a referendum with Proxy

If you already have set up a [Proxy wallet](https://docs.centrifuge.io/use/governance-proxy-and-delegation/), you can also vote on on-chain referenda on SubSquare. Log in with your Proxy (hot) wallet, navigate to [settings](https://centrifuge.subsquare.io/setting/proxy) and specify your proxied (cold) wallet. 

![](./images/DefineProxy.png)

Paste the address of the cold wallet (i.e. the wallet that created the Proxy).

To vote in a referendum, navigate to [SubSquare](https://centrifuge.subsquare.io/democracy/referenda), find the referendum you want to vote on, and click *Vote*.

![](./images/ProxyReferendum.png)

1. The **Proxy** (hot) wallet
2. The **Proxied** (cold) wallet and the available balance for voting
3. Select **voting balance** (up to the amount available)
4. Select **conviction** (lock up period displayed right below)
5. Vote **Nay** or **Aye**

Sign the transaction,and your vote should be registered.




