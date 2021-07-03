---
id: chain-governance
order: 4
title: Participate in Governance
contributors: <Cassidy Daly:cassidy@centrifuge.io>
---

Centrifuge Chain has a formalized governance system that is encoded on-chain utilizing the [Substrate democracy pallet](https://crates.io/crates/pallet-democracy). This enables on-chain voting mechanisms for binding and transparent governance by CFG token holders.

To make any change to Centrifuge Chain requires a stake-weighted majority. CFG holders can vote with their stake on referenda that are proposed by the Centrifuge community or the Centrifuge Chain Council; a body of 7 members elected by CFG holders.

CFG holders can propose and vote on changes such as runtime upgrades, distribution of treasury funds, chain parameters, and the governace system itself. CFG holders vote on proposals with their tokens, and increase the weight of their vote by locking up tokens for extended periods of time along with their vote.

## Centrifuge Chain Council

The Centrifuge Chain Council comprises a body of 7 elected members who gain prioritized voting rights over other CFG holders. The purpose of the council is to propose referenda beneficial to the Centrifuge Network, based on member's expertise and experience in developing, maintaining and using Centrifuge. The council also serves to represent passive CFG holders who may not participate in all referenda.

Though Public Referenda can be proposed by any CFG holder, the vote needed to pass is generally super-majority carries, adaptive to the voter turnout. However, when the Council proposes a motion and >3/4 of the Council vote in favour of the proposal, the vote becomes a simple majority-carries with no reference to turnout. When a proposal is unanimously voted in favor by the council, it benefits from negative turnout bias. This requires a heavy supermajority of nay votes to reject at low turnouts, but as turnout increases towards 100%, it becomes a simple majority-carries.

### Council Election

Council members are elected in rolling elections, with one council seat up for election every 7 days from the set of candidates who nominate themselves by bonding 1,000 RAD. To elect a new council member, Substrate employs the [approval voting](https://en.wikipedia.org/wiki/Approval_voting) method to allow token holders to choose a list of candidates they want to support in equal weight. The candidate with the most approval votes wins the election, while top-N runners-up remain on the candidates’ list for next election.

The term of each council member is determined by the election term duration and the size of the council, which can be changed through governance. This means that with an election term duration of 7 days and 7 council members, one council member’s term lasts for 49 days (7x7).

## Token Holder Participation

CFG holders can use their tokens to:

- Propose a public referendum
- Prioritize public referenda
- Vote on all active referenda
- Vote for council members
- Become a council member

Holders can also stake their CFG towards themselves to offer their node as a Validator candidate, or they can stake their CFG towards other Validators, called "Nominating."

### Referenda

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

To vote for a proposal in a referendum, CFG holders lock tokens along with their vote.

Votes are weighed based on 2 criteria:

1. The number of CFG tokens locked
2. The amount of time these tokens will remained locked after the referendum

This time-lock voting is implemented in order to ensure that some minimal economic buy-in to the result is needed and to dissuade vote selling. It is possible to vote without locking at all, for a heavy discount (90%) on the voting weight of the tokens. To use the full weight of the tokens, they must be locked for the entire enactment delay period beyond the end of the referendum.

Voting on Centrifuge Chain uses Adaptive Quorum Biasing, which changes the supermajority required for a referendum to pass based on the percentage of voter turnout. For public referenda, the positive turnout bias requires a heavy supermajority of aye votes to carry at low turnouts, but as turnout increases towards 100%, it becomes a simple majority-carries. We call this a “positive” turnout bias because the required margin of ayes increases as turnout increases.

Based on the voting result, the proposal will be approved and autonomously enacted only after the enactment delay period.

For those who are interested to dig in deeper to some these mechanisms and compare the differences to Polkadot, you can read more in their documentation [here](https://wiki.polkadot.network/docs/en/learn-governance).

> _A sidenote on CFG locked for voting:_
> CFG holders must submit a transaction to unlock their tokens once the lock period has ended.
>
> - Holders can check the end of their lock period by querying the chain state with `democracy.locks(AccountId)` which returns the block number that the lock is active until
> - Once the lock period has passed, any CFG holder can call `democracy.unlock(addr)` to unlock the tokens
