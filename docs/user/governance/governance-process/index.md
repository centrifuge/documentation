---
id: governance-process
order: 1
title: Governance Process
contributors: <Orhan Klardashti:klardashti@gmail.com>
category: subpage
redirect_from:
  - /use/governance-process
  - /use/governance-process/
  - /use/governance-proxy-and-delegation
  - /use/governance-proxy-and-delegation/
---

# Governance Process

![](./images/GovProcess.png#width=65%;)

Governance is one of the key pillars of the Centrifuge DAO. The Centrifuge protocol is governed by CFG token holders, and all proposals must go through a governance process.

In general, our governance process can be divided into two parts; **off-chain** and **on-chain governance**.

## Offchain Governance
This is the first part of the process. It takes place on our [Forum](https://gov.centrifuge.io/) (as a Request for Comments) and [OpenSquare](https://voting.opensquare.io/space/centrifuge). The purpose of this is to get input from the Community on a proposal and gather support, before moving the proposal on-chain (if necessary — not all proposals need to be submitted on-chain in order to pass).

## Onchain Governance
This refers to the part of the process that takes places on the blockchain. First a proposal is created on-chain (which can be done by either the public or the Council), and this is generally followed by an on-chain referendum where all token holders can vote Aye or Nay.

Some of these proposals have different governance processes, but they all start with a post on the Forum; furthermore, all CPs (Centrifuge Proposals) must be submitted to the [Centrifuge Proposals Repository](https://github.com/centrifuge/cps) on Github.

It is very important that the CP is submitted correctly. In the event of an incorrectly formatted proposal, the process will need to be repeated.

## Request For Comments (RFC)
Creating an RFC is always the first step of a proposal and the off-chain governance. This is posted on the Forum and the purpose is to give the Community the opportunity to provide feedback and ask questions and gauge support for the proposal. If changes are made to the proposal, based on the feedback from the Community, they should be done in this step.

Some proposals may require longer time for discussion than others. The minimum time an RFC should be running is 7 days but we strongly encourage 14 days or more. The proposer decides how long an RFC should run before moving on to an OpenSquare Snapshot/on-chain vote.

In the templates for each component, there is a description of what the RFC should contain (e.g. title, content etc.) in the Forum post. All RFCs must be posted in the Centrifuge [Proposals section](https://gov.centrifuge.io/c/cfg-governance/chain-governance/18) of the Forum and **this post must be updated as the proposal progresses** by editing it and adding any **new information at the end of the main post**.

## Centrifuge Proposal Repository
All proposals must be submitted to the [Centrifuge Proposals Repository](https://github.com/centrifuge/cps) (PR) on Github which is used to log all proposals. The discussion (RFC) takes place on the Forum, and if there are any changes made to the proposal, it must happen via the PR during the RFC phase, i.e. before the proposal proceeds to a snapshot vote/on-chain vote. 

This is to ensure that a proposal is not changed during a snapshot vote or after it has ended.
A proposal is only deemed valid, if it has been submitted to the PR.

After a proposal has been submitted, a pull request number (XX) will automatically be assigned - this number will be used to index the proposal and in the title of the Forum post. The Forum post must also be updated with a link to the proposal on GitHub.

In case, some typos/minor errors are found in the proposal after it has been finalised, there is an option to correct them. The GCG is responsible for maintaining the Proposal Repository on GitHub so any changes would need to go through GCG - and all **changes must be announced the forum post** so the community can object to it if they think the change(s) will alter the original proposal.

## OpenSquare Snapshot
Snapshot (off-chain) voting is generally the next step in the off-chain governance after the RFC. Once there has been adequate discussion, after a minimum of 7 days, and the proposal is submitted to GitHub, a snapshot vote must be created on [OpenSquare](https://voting.opensquare.io/space/centrifuge).

Snapshot votes typically have three options; "Yes", "No", and "Abstain" and there is a **quorum of 4M CFG**, i.e. if a snapshot has more no than yes votes **or** doesn’t meet the quorum, it will not pass. Votes for “Abstain” count towards the quorum and if a snapshot has more "Abstain" votes, then the option with the 2nd highest votes determines the outcome.

However, not all proposals require an off-chain vote.

**Snapshot voting is required**

- When a proposal does not require an on-chain vote*, i.e. proposals that does not change anything on-chain (e.g. mandate requests, changes to our governance process etc.)
- When a proposal is not going to be followed by an on-chain vote straight after, i.e. proposals that are going to be implemented later (e.g. part of a Runtime Upgrade)

**If a proposal does not require an on-chain vote, the snapshot vote will be binding (i.e. if the snapshot vote passes, the proposal passes).*

**Snapshot voting is optional**

- When a proposal is followed by an on-chain vote right after the off-chain vote

**Snapshot voting is NOT required for**

- Funding Requests (CP2)
- Runtime Upgrades (CP3 and CP3.1)
- POPs (CP5)

The minimum voting time for snapshots on OpenSquare is 7 days but the proposer could increase this to any amount of days, if they deem it necessary. This information has to be communicated to the community in the Forum post. 

As soon as a proposal has moved on to a snapshot vote, the following changes must be made to the Forum post:

- Change the prefix in the title of the Forum post from RFC to CPXXX (XXX is the pull request # from GitHub)
- Update the original post with the link to the snapshot vote on OpenSquare 

Every 1st and 3rd Monday of the month, all proposals that are ready to proceed to a snapshot vote will be submitted at the same time on OpenSquare. However, if there are time sensitive/urgent proposals, we have the option to start the vote vote anytime.

In the unlikely event that two mutually exclusive proposals (like two groups asking for a mandate to enact the same work stream) will start and end their snapshot votes on OpenSquare at the same time, it will be the proposal with most "Yes" votes (in terms of CFG) that will pass - assuming the quorum for the vote is met as well.

## Onchain Proposal
The next step is to create an on-chain proposal if it is required (see description of each component whether they require it or not).

This can be done either as a Democracy Proposal/Treasury Proposal (any token holder can create this) or a Council Motion (only the council can create this).

Once an on-chain proposal has been submitted, the forum post must be updated with the following information:

- The Governance process going forward
- Link to Council Motion/Democracy Proposal/Treasury Proposal (on Subsquare)
- Pre-image hash

If the Council Motion/Democracy Proposal passes, update the post again with a link to the referendum (on Subsquare), so everyone can follow the progress of the proposal.

## Cooling-off Period
A cooling-off period is the time that must pass before a proposal can be re-submitted. 
If a proposal fails to pass an off-chain or an on-chain vote, the cooling-off period is 15 days (counting from when the snapshot vote has ended) before a new RFC can be resubmitted.

The cooling-off period is important in order to take the feedback from the Community into account and make the necessary changes to the submitted proposal, and re-submit the RFC.

## CP Framework Components
These are the components in our CP Framework:

|Component|Name|Short description|
| --- | --- | --- |
|[CP1](https://github.com/centrifuge/cps/blob/main/cps/CP1/CP1.md)|Request for Mandate |Seeking mandate as a group/individual within the Centrifuge DAO to enact a project/work stream|
|[CP1.1](https://github.com/centrifuge/cps/blob/main/cps/CP1/CP1.md#cp11-changing-facilitator)|Changing Facilitator|Changing the facilitator of a mandated group|
|[CP1.2](https://github.com/centrifuge/cps/blob/main/cps/CP1/CP1.md#cp12-removal-of-mandate)|Removal of Mandate|Removal of a group’s mandate to enact a project/work stream (CP-1)|
|[CP2](https://github.com/centrifuge/cps/blob/main/cps/CP2/CP2.md)|Request for Funding|Asking for funding from the Treasury|
|[CP3](https://github.com/centrifuge/cps/blob/main/cps/CP3/CP3.md)|Runtime Upgrades|Proposals for Runtime Upgrades|
|[CP3.1](https://github.com/centrifuge/cps/blob/main/cps/CP3/CP3.md#cp31-emergency-proposals)|Emergency Proposals|Emergency proposals in case of hacks, exploits, attacks, or network halt|
|[CP4](https://github.com/centrifuge/cps/blob/main/cps/CP4/CP4.md)|General Improvements|Any proposal type, that does not fit under any of the other CPs|
|[CP5](https://github.com/centrifuge/cps/blob/main/cps/CP5/CP5.md)|Centrifuge Pool Onboarding Proposal (POP)|Onboarding new pools on Centrifuge Chain|
|[CP32](https://github.com/centrifuge/cps/blob/main/cps/CP32.md)|Roadmap Proposals|Create a Roadmap Proposal to replace the previous one|

Components can have different governance processes, but what they all  have in common is that they start with a post on the Forum and all CPs must be submitted to the [Centrifuge Proposals Repository](https://github.com/centrifuge/cps) on Github. Click on the link for a component above to see its correct process and template.

It is very important that a CP is submitted correctly. In the event of an incorrect format of a proposal, the process will need to be repeated.

## Proposal Tags

We can distinguish between the different stages of a proposal by adding/removing tags as it progresses through the stages. Suggestions to specific tags and their usage:

*rfc*: add when RFC is created on the forum 

*off-chain-voting*: add when OpenSquare snapshot has been created

*on-chain-voting*: add when referendum is live on-chain

*passed/not-passed*: add appropriate tag when the CP has ended

So after a proposal has moved on from the RFC, the *rfc* tag will be removed and replaced by *off-chain-voting* and so on - so the last tag will be either *passed* or *not-passed* which will remain on the post. 

In addition to the tags above, specific tags can be added, depending on what the proposal is about (e.g. *runtime-upgrade*, *governance-process*, *liquidity-rewards*, *pop-submission* etc.) and also which components the proposal consists of (e.g. CP1, CP2, CP3, CP4, CP5 etc.)

Please contact the Governance & Coordination Group on the Forum or Discord ([Rhano](https://gov.centrifuge.io/u/Rhano) or [ImdioR](https://gov.centrifuge.io/u/imdior)), if you have any questions regarding the process or need help with submitting a proposal.
