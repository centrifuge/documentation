---
id: chain-governance
order: 8
title: Participate in Governance
contributors: <Cassidy Daly:cassidy@centrifuge.io>
---

## What is Centrifuge governance?
Governance in Centrifuge refers to both the on-chain voting and off-chain coordination used to govern (both Centrifuge and Altair). Governance refers to any activity taken to propose changes to the protocol or ecosystem. These include but are not limited to; the Centrifuge chain, the CFG and AIR token reward rates, runtime upgrades, integrations, chain parameters, transactions fees, and the governance system itself. 

To foster a decentralized ecosystem of participants managing and implementing changes to the Centrifuge Chain and Altair as opposed to one single organization controlling both the protocol and the data, we require participation of community members and token holders. 

On-chain referenda on are stake-based voting schemes that are built with the Polkadot Governance mechanism (read more here). This functions like democracy as we know it with one-person having one vote and ‘winning’ referenda requiring a majority-of-votes. However, actors can increase the impact of their votes by holding and staking more CFG. 

To make significant changes to the network, active token holders and the council must go through both the off-chain and on-chain governance process. No matter whether the proposal is made by the public (token holders) or by the council, the final step is a referendum that enables all holders (their influence weighted by stake) to make the decision.

### Referenda
Each referendum has a specific proposal associated with it. Referenda can be started in one of several ways:
As publicly submitted proposals;
As proposals submitted by the council, either through a majority or unanimously;
As proposals submitted as part of the enactment of a prior referendum;
As proposals that are fast-tracked by the council if deemed necessary, through super-majority. Fast tracking means that unless 100% of CFG holders vote, a super majority (>50%) is required to pass referenda. If there is 100% voter turnout a simple 50% majority carries. Basically, the lower the turnout, the greater percentage of yes votes there needs to be (the inverse is also true).
Referenda are open for 7 days, unless fast-tracked. The fast tracked referenda open voting period is set by the council for each proposal and can be as short as 3 hours.

CFG holders vote on referenda proposed by the community with their tokens and increase the weight of their vote by locking up CFG for extended periods of time (this is what stake-weighted voting means). 

The governance of Altair largely functions the same as the governance of Centrifuge with a few different parameters: mostly the speed at which it operates is faster. This document also applies to Altair and differences are highlighted in this document.


Centrifuge Chain has a formalized governance system that is encoded on-chain utilizing the [Substrate democracy pallet](https://crates.io/crates/pallet-democracy). This enables on-chain voting mechanisms for binding and transparent governance by CFG token holders.

To make any change to Centrifuge Chain requires a stake-weighted majority. CFG holders can vote with their stake on referenda that are proposed by the Centrifuge community or the Centrifuge Chain Council; a body of 7 members elected by CFG holders.

CFG holders can propose and vote on changes such as runtime upgrades, distribution of treasury funds, chain parameters, and the governace system itself. CFG holders vote on proposals with their tokens, and increase the weight of their vote by locking up tokens for extended periods of time along with their vote.

## How is governance structured? 
Governance is structured into two bodies: 
- Community members and token holders. They participate through the off-chain governance processes on the Forum and through the on-chain public proposal and democracy process
- The Council, which can submit proposals for vote through the CFG holder democracy process. 

## Who can participate in governance and what can they do?
Community members, CFG Holders and Council members

Community member (ie anyone who considers themselves part of the Centrifuge community) can:
Start a discussion, indicate preference in polls, and comment on any proposal on the Centrifuge governance forum. 
CFG holders can:
- Propose a public referendum
- Prioritize public referenda
- Vote on all active referenda
- Vote for council members
- Become a council member
The more CFG you hold, the more ‘weight’ you have in governance. Participants can also stake their CFG to validate on the network. This is called “nominating”.

## The Council and Council Elections
Any CFG holder can become elected to the council or AIR holder to the Altair Council. The Centrifuge Chain Council comprises a body of 7 elected members and Altair council 9 members who have the ability to vote on certain things directly and they can propose motions that token holders vote on. They can also veto. The purpose of the council is to propose referenda beneficial to the Centrifuge Network, based on member's expertise and experience in developing, maintaining and using Centrifuge. The council serves to represent the interest of all Centrifuge stakeholders, be they actively participating token holders or not.

Council members have the ability to veto incoming proposals. After a cool-down period of 7 days, however, these proposals can be re-submitted, and the council member that vetoed the proposal cannot veto this proposal again.

Proposals that do not pass a majority within the council do not make it to a public referendum. In situations where the council is in unanimous agreement, proposals only need to pass a less-than-majority threshold in a public vote for approval. When only a majority of council members vote Yes (or aye) on a given proposal, the public must approve of the motion with a simple majority.

Council members are elected in rolling elections, with one council member up for election every two weeks from a list of candidates who nominate themselves. The term of each council member is determined by the size of the council, which will change over time due to the adaptive nature of Polkadot governance. This means that one council member’s term length is equal to 2 weeks times the number of council members. For example, if there are 6 council members, one council member’s term lasts for 12 weeks (6x2).

- For Centrifuge there are 7 council members
- For Altair there will be 9 council members


For more information on the process of becoming a councillor and on voting for councillors on Centrifuge and Altair see the Polkadot governance documentation (https://wiki.polkadot.network/docs/learn-governance)

## How the bond occurs towards election
A Centrifuge Chain Council candidate submits their candidacy with 1000 CFG bond and an Altair candidate 500 AIR (The bond will be reserved for the duration of your candidacy and membership).
If you are not elected this bond will be forfeit (burnt)
Token holders can vote for candidates (current members as well as new candidates)
When the term is about to be changed, which is every 7 days for Centrifuge and every 10 for Altair, votes are counted and top 7 or 9 candidates will be elected as new council members until next term.
Token holders can change their votes anytime and the change will be reflected in the next term


#### Submitting a Proposal

Any CFG holder can submit a proposal for a public referenda by staking 10 CFG towards their proposal. Other CFG holders can second this proposal by staking the same amount. Each launch period, currently 7 days on Centrifuge Chain, the proposal with the greatest stake weight behind it is selected for the public queue.

Proposals are made by either the Council or the public. Every launch period, a proposal is brought to vote coming from one of them, prioritising the one that did not get a go the previous period. As a result, the Council controls 50% of the legislative agenda and the public the other 50%.

#### Enactment Delay

Every approved referendum goes through a certain amount of time before it becomes enacted on-chain. This allows participants who disagree with any referenda to leave the network. CFG in support of this referenda is locked, at a minimum, until the upgrade is enacted.

Voters should carefully choose what proposals they vote for, and keep in mind what the impact referenda will have on the health of the entire Centrifuge network.

The current enactment delay period on Centrifuge Chain is 8 days.

#### Fast Tracking

In unexpected conditions where legislative changes need to be made quickly, proposals can be brought to referendum immediately and in parallel to the normal monthly proposals. In the case of approval by a super-majority (>3/4) of the Council, a proposal may be fast-tracked and put to vote in the Referendum chamber immediately, with a far shorter voting period to normal and a near zero enactment period.

The minimum voting period on Centrifuge Chain is currently ~3 hours.

#### Voting

To vote for a proposal in a referendum, CFG and AIR holders lock tokens along with their vote.

Votes are weighed based on 2 criteria:

1. The number of tokens locked
2. The amount of time these tokens will remained locked after the referendum

This time-lock voting is implemented in order to ensure that some minimal economic buy-in to the result is needed and to dissuade vote selling. It is possible to vote without locking at all, for a heavy discount (90%) on the voting weight of the tokens. To use the full weight of the tokens, they must be locked for the entire enactment delay period beyond the end of the referendum.

Voting on Centrifuge Chain uses Adaptive Quorum Biasing, which changes the supermajority required for a referendum to pass based on the percentage of voter turnout. For public referenda, the positive turnout bias requires a heavy supermajority of aye votes to carry at low turnouts, but as turnout increases towards 100%, it becomes a simple majority-carries. We call this a “positive” turnout bias because the required margin of ayes increases as turnout increases.

Based on the voting result, the proposal will be approved and autonomously enacted only after the enactment delay period.

For those who are interested to dig in deeper to some these mechanisms and compare the differences to Polkadot, you can read more in their documentation [here](https://wiki.polkadot.network/docs/en/learn-governance).

> _A sidenote on CFG locked for voting:_
> Token holders must submit a transaction to unlock their tokens once the lock period has ended.
>
> - Holders can check the end of their lock period by querying the chain state with `democracy.locks(AccountId)` which returns the block number that the lock is active until
> - Once the lock period has passed, any holder can call `democracy.unlock(addr)` to unlock the tokens
