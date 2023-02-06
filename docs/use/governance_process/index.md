# Governance Process

Governance is one of the key pillars of the Centrifuge DAO and the Centrifuge protocol is governed by CFG token holders and all proposals must go through a Governance process.

In general, our Governance process can be divided into two parts; *off-chain* and *on-chain Governance*.

*Off-chain Governance:*
This refers to the part of the process that takes place on our Forum (Request For Comments) and OpenSquare Snapshot. The purpose of this is generally to get input from the Community on a proposal and gather support, before moving the proposal on-chain (if necessary - not all proposals need to be submitted on-chain in order to pass).

*On-chain Governance:*
This refers to the part of the process that takes places on the blockchain. First a proposal is created on-chain (can be done by either the public or the Council) and this is generally followed by an on-chain referendum where all token holders can vote Aye or Nay.

Some of these proposal types have different governance processes, but what they all  have in common is that they start with a post on the Forum and all CPs must be submitted to the [Centrifuge Proposals Repository](https://github.com/centrifuge/cps) on Github.

It is very important that the CP is submitted correctly. In the event of an incorrect format of a proposal, the process will need to be repeated.

Please contact the Governance & Coordination Group on the Forum or Discord ([Rhano](https://gov.centrifuge.io/u/Rhano) or [ImdioR](https://gov.centrifuge.io/u/imdior)), if you have any questions regarding the process.

## Request For Comments (RFC)

Creating an RFC is always the first step of a proposal and the off-chain governance. This is posted on the Forum and the purpose is to gauge support and give the Community the opportunity to provide feedback and ask questions about the proposal. If changes are made to the proposal, based on the feedback from the Community, they should be done in this step.

Some proposals may require longer time for discussion than others, but the minimum time an RFC should be running is 7 days. The proposer decides how long an RFC should run before moving on to an OpenSquare Snapshot.

In the templates for each proposal type, there is a description of what the RFC should contain (e.g. title, content etc.) in the Forum post. All RFCs must be posted in the Centrifuge [Request for Comments section](https://gov.centrifuge.io/c/cfg-governance/request-for-comments/37) of the Forum.

## Centrifuge Proposal Repository

All proposals must be submitted to the [Centrifuge Proposals Repository](https://github.com/centrifuge/cps) on Github which is used to log all proposals. The discussion (RFC) takes place on the Forum, and if there are any changes made to the proposal, it must happen via the repository during the RFC phase, i.e. before the proposal proceeds to an OpenSquare Snapshot. This is to ensure that a proposal is not changed during a snapshot vote or after it has ended.

A proposal is only deemed valid, if it has been submitted to the repository.

After a proposal has been submitted, a pull request number (XXXX) will automatically be assigned - this number will be used to index the proposal and in the title of the Proposal post.

## OpenSquare Snapshot 

OpenSquare Snapshots have replaced our Forum polls and is always the next step in the off-chain governance after an RFC (except for CP-2, CP-3 and CP-3.1, that do not require it). Once there has been adequate discussion of a proposal (after a minimum of 7 days) - and the proposal has been submitted to the Proposal Repository - an OpenSquare Snapshot vote must be created on [OpenSquare](https://voting.opensquare.io/space/centrifuge).

If a proposal does not require an on-chain vote, the snapshot vote will be binding (i.e. if the snapshot vote passes, the proposal passes). Otherwise, a snapshot vote acts as an indicator for whether there is support for a proposal to proceed to an on-chain proposal.

The minimum voting time for snapshots on OpenSquare is 7 days - but the proposer could increase this to any amount of days, if they deem it necessary. This information must be communicated to the Community in the Proposal post on the Forum.
Once a proposal has moved on to an OpenSquare Snapshot, a new Forum post (the Proposal post) should be created (see below). 
The outcome of the OpenSquare Snapshot should also be announced in this same post.

## Proposal Post

Once a proposal has moved on from the RFC (and changes made if necessary), submitted to the PR, and the OpenSquare Snapshot has been created, a Proposal post must be created. The purpose of this post is to notify the community that the proposal is now final and ready to proceed.

The title of this post will be CPXXXX (YY): [same title as RFC], where XXXX is the pull request number from Github and YY is the abbreviation for the proposal type, e.g. (MRF).

This post should be created in the [Proposals section](https://gov.centrifuge.io/c/cfg-governance/chain-governance/18) of the Forum.

## On-chain Proposal

If a snapshot vote passes, the next step is to create an on-chain proposal if it is required (see each proposal type for whether they require it or not).

This can be done either as a Democracy Proposal (any token holder can create this) or a Council Motion (only the council can create this).

Once an on-chain proposal has been submitted (Democracy or Council), a new Forum post must be created in the [Proposals section](https://gov.centrifuge.io/c/cfg-governance/chain-governance/18) of the Forum.

## Cooling-off Period

A cooling-off period is the time that must pass before a proposal can be re-submitted. 

If a proposal fails to pass an OpenSquare Snapshot, the cooling-off period is 15 days (counting from when the OpenSquare Snapshot was created) before a new RFC can be resubmitted.

The cooling-off period is important in order to take the feedback from the Community into account and make the necessary changes to the submitted proposal, and re-submit the RFC.

![](./images/cooloff.jpg#width=40%;)


## Proposal Types (CPs)

We have defined the following proposal types (CPs) and assigned them each with a number. Click on each proposal type to see their **respective Governance Process and templates**.

|CP #|Proposal type|Short description|
| --- | --- | --- |
|[CP-1](https://github.com/centrifuge/cps/blob/main/cps/CP1/CP1.md)|Request for Mandate with Funding|Seeking mandate as a group/individual within the Centrifuge DAO to enact a project/work stream|
|[CP-1.1](https://github.com/centrifuge/cps/blob/main/cps/CP1/CP1.md)|Request for Mandate without Funding|Same as CP-1, just without initial funding|
|[CP-1.2](https://github.com/centrifuge/cps/blob/main/cps/CP1/CP1.md)|Removal of Mandate|Removal of a group’s mandate to enact a project/work stream (CP-1)|
|[CP-2](https://github.com/centrifuge/cps/blob/main/cps/CP2/CP2.md)|Request for Funding|Asking for funding from the Treasury|
|[CP-3](https://github.com/centrifuge/cps/blob/main/cps/CP3/CP3.md)|Runtime Upgrades|Proposals for Runtime Upgrades|
|[CP-3.1](https://github.com/centrifuge/cps/blob/main/cps/CP3/CP3.md)|Emergency Proposals|Emergency proposals in case of hacks, exploits, attacks, or network halt|
|[CP-4](https://github.com/centrifuge/cps/blob/main/cps/CP4/CP4.md)|General Improvements|Any proposal type, that does not fit under any of the other CPs|
|[CP-5](../CP5/CP5.md)|Centrifuge Pool Onboarding Proposal (POP)|Onboarding new pools on Centrifuge Chain|

