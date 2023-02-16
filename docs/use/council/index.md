---
id: council
order: 10
title: The Centrifuge Council
contributors: <Orhan Klardashti:klardashti@gmail.com>
---

## Introduction

The Centrifuge council currently consists of 9 councilors (this number can be changed by governance) who are elected by the CFG token holders. The council serves to represent the interest of all Centrifuge stakeholders, be they actively participating token holders or not. Some of the tasks of the council are to:

* Propose referenda to the benefit of the network
* Veto proposals that are harmful to the network
* Vote on Treasury proposals

Any CFG token holder can both submit their candidacy to the council and vote on councilors.

The Centrifuge council have rolling elections, which means that every 7 days the votes are counted, and the candidates with the highest amount of votes (in terms of CFG) from *candidates*, *runners up* and *members* will be given a seat in the council.

## How to submit a candidacy to the council

Before you can submit your candidacy to the Centrifuge council, you need to create an **on-chain identity** for the account you will use for your candidacy. You do so by going to [Accounts](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ffullnode.parachain.centrifuge.io#/accounts) in the Polkadot.js web app, then click on the three dots next to the account you want create an on-chain identity for, and select *Set on-chain identity*.

![](./images/SetIdentity.png)

The name you choose will be displayed instead of your wallet address.You can also add additional information, like email, website, Twitter handle, etc. The only obligatory field to fill out is *display name* - all the others are optional. Once you have added the information you want, you simply click *Set identity*. When you create an on-chain identity, an amount of 100 CFG is reserved (locked). This amount will be unlocked again once you remove your on-chain identity.

The next step is to submit your candidacy on-chain. To do that, navigate to the [Council section](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ffullnode.parachain.centrifuge.io#/council) of the Polkadot.js web app and click on *Submit candidacy*.

![](./images/SubmitCandidacy.png)

Select the account you just created an identity for and click *Submit*. There is a self-bond of 1000 CFG which is reserved (locked) for the duration of your candidacy. Just like the identity, you will get this back when you remove your candidacy.

```
If you do not get enough votes to get into either "runners up" or "members" from "candidates" in that election period, your self-bond will be slashed (lost) and the amount will go to the treasury. You can receive your bond back if you manually renounce your candidacy before losing.
```

## How to vote on council candidates

To vote for council candidates, go to the [Council section](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ffullnode.parachain.centrifuge.io#/council) of the portal and click *Vote*.

![](./images/VoteCandidates.png)

1. **Select the wallet** you want to vote from
2. **Select the amount** you want to vote with (always leave some tokens left for transaction fees)
3. **Select the candidate(s)** you want to on (will appear on the right when you click on them)
4. The reserved **voting bond** (in addition to the amount specified under 2.)
5. Click **Vote** and sign the transaction
```
4. When you vote for council candidates, a very small amount of CFG is reserved for the duration of your vote (the amount indicated under voting bond). The reserved amount is calculated by saying: base fee 0.5 CFG + 0.5 CFG per candidate you vote for. 
```
If you vote for more than one candidate, your tokens will be split evenly among the candidates.



Your tokens are only locked for as long as you are voting for the candidates. Once you click *Unvote all*, the locked amount will be transferrable again immediately.

![](./images/Unvote.png)