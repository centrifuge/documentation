---
id: chain-governance
order: 8
title: "Governance"
contributors: <Cassidy Daly:cassidy@centrifuge.io>, <Kate Beecroft:kate@centrifuge.io>
---

## What is governance?

Governance is the process of deciding what changes to make to a blockchain. Examples of things that we can govern: 

-	the amount of collators
-	transaction fees
-	number of council members
-	runtime upgrades
-	interaction with other chains
	
We can split governance into two categories: **off-chain** and **on-chain**.

**Off-chain** governance is the first step in making changes and it happens in the [Forum](https://gov.centrifuge.io/).

![image](https://user-images.githubusercontent.com/93187528/164441566-4b5e35eb-cd23-4035-9f42-7552b8a91782.png)

The purpose of it is to get an idea what other community members think of your idea and get their feedback. This first step is also referred to as **Request For Comments** (**RFC**).
**On-chain** governance takes place when you have received enough support for your idea and a **proposal** is created on the blockchain so people can **second** it (show that they support it and want it to become a referendum that token holders can vote on). This all takes place in the governance section of the portal.

![image](https://user-images.githubusercontent.com/93187528/164443969-2c197934-8c75-449c-bb05-db7656c9e983.png)

![image](https://user-images.githubusercontent.com/93187528/164443987-92b0404d-1ddd-4467-bc6b-6fc4ffdb54ad.png)

A proposal can come from both the **public** (token holders) and the **council**. Regardless of who makes the proposal, it will need to go to a vote (a **referendum**) where all token holders can vote.

### Who can participate in governance

Technically, anyone can participate in **off-chain** governance (discussions in Forum or Discord). 

![image](https://user-images.githubusercontent.com/93187528/164445038-c3015fbe-8c0e-413f-be17-6036018d76e3.png)

However, only **token holders** can participate in **on-chain** governance (second proposals and vote for council and referenda - seconding and voting will be explained later).

![image](https://user-images.githubusercontent.com/93187528/164445111-fda9b867-f3ee-4fe4-886f-10717258d300.png)

### How to participate in governance?

The most crucial part of governance is the discussion, which is the first step of the process, and it takes place on Forum (or Discord). You can participate in this part of governance by joining the discussions and voice your opinion. 
In the later stage of the governance process, you can participate in the voting by using your tokens. The voting takes place in the portal and is explained in more details later in this manual.

### Why participate in governance?

Every project/blockchain has to constantly evolve and in order for it to stay competitive and secure, good decisions have to be made for the direction of the project. 
In the “real world”, one person, or a small group of people, usually makes those decisions. The purpose of governance is to give every token holder a say in all decisions.
This way, everyone gets the possibility to suggest a change and vote on all changes with their tokens.
By participating in governance, you get to shape the project that you are supporting and help it become more decentralized.


## From idea to implementation

![image](https://user-images.githubusercontent.com/93187528/164469167-c329de99-67ea-435f-b145-8bc1276dfdfd.png)

This section will explain the different paths from when someone gets an idea to a change until it is implemented on the blockchain. A proposal can come from both the public and the council. Below you will find a more detailed explanation of what it all means.

## PUBLIC PROPOSAL

A public proposal is a proposal that comes from the community (i.e. not the council) and there are roughly five steps (as shown in the visual below). It is very important that these steps are followed, in order to maintain [good governance practice](https://gov.centrifuge.io/t/governance-best-practices/3496). Note that the **first two steps** of the process take place **off-chain**.

![image](https://user-images.githubusercontent.com/93187528/164448208-c2d7d31b-70cc-452c-b058-0a8b5cbda03b.png)

1)	**Request For Comments** (**RFC**) -> _off-chain proposal in the Forum_
2)	**Create poll** -> _off-chain in the Forum_
3)	**Create proposal** -> _on-chain in the Portal_
4)	**Vote on referendum** -> _on-chain in the Portal_
5)	**Enactment** -> _on-chain_

### 1: Request For Comments (RFC)

![image](https://user-images.githubusercontent.com/93187528/164449061-ba048851-d1d5-4571-9700-461e13c96fc5.png)

Getting feedback from the community is crucial when you want to move forward with an idea. This serves a couple of purposes. There might be someone who can point out something that you have missed or make some suggestions to make the proposal even better. You want to gather support from the community when/if your proposal moves forward and people have to vote.

#### How to create a post for RFC?

Go to the governance section of the Forum - for Centrifuge it is [here](https://gov.centrifuge.io/c/governance/request-for-comments/37) and for Altair it is [here](https://gov.centrifuge.io/c/air-governance/request-for-comments/42).

![image](https://user-images.githubusercontent.com/93187528/164449609-5a00cb9b-dd5b-4962-9277-cfc0767ad3e3.png)

Create a new topic and give it a title that starts with RFC, e.g.  

-	_RFC: Increase the amount of collators by 5_
-	_RFC: Increase the seats in the council from 7 to 9_
	
Make sure to be precise and clear when presenting your idea and the data to back it up. The community needs as much information as possible to be able to give you proper feedback. To see an example of a RFC post in the Forum, click [here](https://gov.centrifuge.io/t/rfc-increase-the-amount-of-self-bond-to-1000-cfg-for-creating-an-on-chain-proposal/3589).

There is no specific timeframe for when there has been enough discussion, but **a week** seems appropriate (could be more if the discussion is still ongoing).

### 2: Create poll

![image](https://user-images.githubusercontent.com/93187528/164450321-f0ec6306-9b19-45e4-92f5-475fabf1d43d.png)

Once there has been enough discussion, it is time to create a poll. More than one poll can be created in the post if necessary. The poll can be either Yes/No or you can provide multiple options to choose from. 
A poll is not binding in any way, but it gives both the proposer, the community and the council a good idea of what the sentiment is around this proposal.

#### How to create a poll?

Go to the governance section of the Forum - for Centrifuge it is [here](https://gov.centrifuge.io/c/cfg-governance/chain-governance/18) and for Altair it is [here](https://gov.centrifuge.io/c/air-governance/proposals/49).

![image](https://user-images.githubusercontent.com/93187528/164450699-aba714f1-2db8-4ba9-99bb-d8c1953ac1ff.png)

Create a new topic and call the post the same as in step 1, except you replace the “RFC” with “Poll”, e.g.

-	_Poll: Increase the amount of collators by 5_
-	_Poll: Increase the seats in the council from 7 to 9_

Always link to the RFC post in step 1 so people can read the discussion before voting on the poll.

The **poll should run for 7 days** to give all community members enough time to vote on it. It is also very important that you make sure that the results are **visible to the public** while the poll is running and that **everyone can vote**.

Look at the screenshots below to see how to create a poll in a post, and which settings to use:

![image](https://user-images.githubusercontent.com/93187528/164451827-7621fc15-311c-415b-8748-26bd98c1545f.png)

Click on the wheel in the bottom right to see more settings for the poll.

![image](https://user-images.githubusercontent.com/93187528/164451896-2c079217-fc54-49f7-80cc-3fd0e5ff8420.png)

To see an example of a poll in the Forum, click [here](https://gov.centrifuge.io/t/poll-proposal-to-increase-the-amount-of-self-bond-for-creating-an-on-chain-proposal/3613).

### 3: Create proposal

![image](https://user-images.githubusercontent.com/93187528/164453858-9d350bc6-a107-4bfe-b9f6-10eb6def65fc.png)

Creating a proposal on-chain requires you to understand the underlying code behind the change you want to make. If you are not familiar with what parameters to set, then you should not do this yourself. Instead you can ask a council member (or someone else) to create the proposal for you. Once the proposal has been created, people can second it (show their support for it). There can be multiple proposals going on simultaneously and every 7 days, the proposal with the most support (seconds) in terms of CFG/AIR, will go to a referendum. The explanation of the code needed to create a proposal will be covered elsewhere.

#### How to second a proposal?

Let us assume that someone already created the proposal and you want to second it. To second a proposal, you would need to bond the same amount of CFG/AIR as the proposer. Right now, that amount is 1000 CFG/500 AIR but this is subject to change through governance. All seconding and voting take place in the governance section of the portal. On Centrifuge, you can find all the ongoing proposals [here](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ffullnode.parachain.centrifuge.io#/democracy) - for Altair, you can find them [here](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ffullnode.altair.centrifuge.io#/democracy).

Find the proposal you want to second and simply press “_Second_”.

![image](https://user-images.githubusercontent.com/93187528/164459302-edf1ecf5-d0b4-4618-bdea-84292e043eb8.png)

Then select the account you want to second with, press _“Second”_ again and sign the transaction.

![image](https://user-images.githubusercontent.com/93187528/164459398-9fd082d2-76dd-406c-b74d-56f9cf686056.png)

The bonded CFG will be **locked until the proposal passes to a referendum**. After that, the proposer (and people who have seconded) will get their tokens back.  Note that the proposer cannot cancel a proposal once it is created - only the council can do that.

If you were the one creating the proposal and it goes to a referendum, remember to post about it in the Forum to make the community aware that a vote is ongoing. 

### 4: Vote on referendum

![image](https://user-images.githubusercontent.com/93187528/164460183-ae4624be-97db-4c5a-9b69-5fac513d529a.png)

The referendum is the actual vote where the outcome will determine whether the proposal will be enacted (implemented on the blockchain). **Every 7 days**, a proposal is selected to become a referendum, based on which one has received the most seconds (support). When a proposal comes from the public, it will require **Super Majority** approval from the **turnout** to pass.

In the portal, there is a calendar showing when a voting period for a referendum ends a new one starts - just navigate to Network -> Event calendar.

![image](https://user-images.githubusercontent.com/93187528/164460698-f103974e-c30e-4c07-aa4d-48546c5c1af4.png)

#### How to vote on a referendum?

To vote for a referendum, go to the governance section in the portal. On Centrifuge, you can find all the ongoing referenda [here](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ffullnode.parachain.centrifuge.io#/democrac) - for Altair, you can find them [here](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ffullnode.altair.centrifuge.io#/democracy).

![image](https://user-images.githubusercontent.com/93187528/164460876-8950da2f-3b85-4430-8415-3d3efa6e4590.png)

Once you find the referendum you want to vote on, simply click “Vote” and:

a)	Select the **account** you want to vote with

b)	Select the **amount** you want to vote with

c)	Select your **conviction**

d)	Select whether you vote **Aye** (yes) or **Nay** (no)

e)	**Sign** the transaction

![image](https://user-images.githubusercontent.com/93187528/164461125-b3cf213e-10cd-48b0-95a3-b626be3fcf85.png)

You can always change your vote from “Aye” to “Nay”, or vice versa, after having voted - along with the amount and your conviction - as long as the referendum is ongoing. 

![image](https://user-images.githubusercontent.com/93187528/164461225-683f51c6-47e9-4c3e-93c8-9823eb6b2bd0.png)

Once you have signed the transaction by typing in your password to the account you are voting from, your vote is registered. An account can only vote once, which means that you can either only vote “Aye” or “Nay”.

#### How many tokens can I vote with?

You can see how many tokens that are available to use for the voting and you can use any amount up until that to vote with. Note that you should always leave some tokens in your wallet to be able to pay for transactions so never use the whole amount.

It is also possible to use tokens that are already locked in other referenda voting and/or locked in staking.

When you vote with your tokens, they never leave your wallet. If your tokens are bonded (locked), it just means that you cannot transfer them.

#### What is voting with conviction?

Voting with conviction is a way to increase your voting power, by locking up your tokens for longer.

![image](https://user-images.githubusercontent.com/93187528/164461536-d0e855c6-73e3-4d3e-984f-f340d932d48b.png)

For example, if you vote with **100 CFG**, your actual voting power will be determined by the conviction you choose.

![image](https://user-images.githubusercontent.com/93187528/164462011-33584dc9-40de-4aba-b6d9-d8af70020d18.png)

_*The lock-up period is in days **after the referendum voting has ended**._

Regardless of what conviction you vote with, you will get your tokens back after some time - you will **not** lose them.

#### How to unlock tokens locked in referenda?

To get your locked tokens back after voting, you have to **unlock them manually** after the lock has expired.

You can see how many tokens you have locked in referenda by going to the account section of the portal and click on the timer icon. To **unlock** the expired ones, simply click on the **three dots** and select **“_Clear expired democracy locks_”**.

![image](https://user-images.githubusercontent.com/93187528/164462928-faab1250-3069-4c42-8870-86b17b522646.png)

#### What is Super Majority Approve?

Super Majority Approve - also referred to as a **positive turnout bias** - means that a super-majority of “Aye” votes is required for the vote to pass.

In other words, the more tokens that vote, the less “Aye” votes are required in order for the vote to pass. The opposite is also true.

The formula used for determining the outcome of a vote, that require Super Majority Approve, looks like this:

![image](https://user-images.githubusercontent.com/93187528/164463233-1f13336b-9f7c-4841-a7c3-4481b02be871.png)

**Against** = amount of tokens voting “Nay” (including the conviction multiplier)

**Approve** = amount of tokens voting “Aye” (including the conviction multiplier)

**Turnout** = total number of voting tokens (**without** the conviction multiplier)

**Electorate** = total number of tokens issued in the network

### 5: Enactment

![image](https://user-images.githubusercontent.com/93187528/164463457-f9aeb12e-ac2c-4d5f-90be-28b8c9969e11.png)

On both Centrifuge and Altair there is an 8-day enactment delay, which means that after the voting of a referendum has ended (and passed), it will take 8 days for the change to be implemented on the blockchain.

However, the council can propose referenda that are **fast-tracked** which means that they will be **enacted immediately after the referendum voting** has ended. Fast-tracked referenda also have a shorter voting time which is set by the council - and they can be as short as 3 hours.

Always remember to post the result of the outcome of a referendum in the Forum if you were the one initiating it.

## COUNCIL PROPOSAL

The council can make proposals that will become referenda without having the community to second it first. 
Council proposals can have three outcomes: passed unanimously, passed not unanimously and not passed. Not passed does not need further explanation as it simply means that the proposal will not go to a referendum - so let’s focus on the two other scenarios.

### PASSED UNANIMOUSLY

![image](https://user-images.githubusercontent.com/93187528/164469723-31106a55-bcad-4da9-9ec9-2d31ff72b6d2.png)

If a proposal is passed unanimously, it means that all council members have agreed on it. The voting mechanism used in the referendum is **Super Majority Against**.

#### What is Super Majority Against?

Super Majority Against - also referred to as a **negative turnout bias** - is the opposite of Super Majority Approve. It means that a super-majority of “Nay” votes is required for the vote **not** to pass.

In other words, the more tokens that vote, the less “Nay” votes are required in order for the vote **not** to pass. The opposite is also true.

The formula used for determining the outcome of a vote, that require Super Majority Approve, looks like this:

![image](https://user-images.githubusercontent.com/93187528/164470283-10ac765f-b470-4a8c-b89a-b0610311ff23.png)

**Against** = amount of tokens voting “Nay” (including the conviction multiplier)

**Approve** = amount of tokens voting “Aye” (including the conviction multiplier)

**Turnout** = total number of voting tokens (**without** the conviction multiplier)

**Electorate** = total number of tokens issued in the network

### PASSED NOT UNANIMOUSLY

![image](https://user-images.githubusercontent.com/93187528/164470871-acdd461c-e3d6-4a37-8264-caa8258144b4.png)

If a proposal is passed not unanimously, it means that the **majority** of council members has agreed on it (and there was no veto). The voting mechanism used in the referendum is **Simple Majority**.

#### What is Simple Majority?

Simple Majority means that he vote just needs more “Aye” votes than “Nay” votes in order to pass.

![image](https://user-images.githubusercontent.com/93187528/164471045-e4d90ff3-5900-4ecf-99a1-de2e56bd3514.png)

**Against** = amount of tokens voting “Nay” (including the conviction multiplier)

**Approve** = amount of tokens voting “Aye” (including the conviction multiplier)

### COUNCIL VETO

![image](https://user-images.githubusercontent.com/93187528/164471154-b48128e4-0248-4832-a26e-f451ae249fb8.png)

A council member can veto a council proposal and in that case, the proposal will not go to a referendum. 
However, a council member can only veto the same proposal **once** - after a cool down period (7 days), that same council member cannot veto that proposal again.

