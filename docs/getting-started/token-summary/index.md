---
id: token-summary
title: The CFG Token
contributors: <Lucas Vogelsang:lucas@centrifuge.foundation>, <Cassidy Daly:cassidy@centrifuge.foundation>, <Devin Black:devin@k-f.co>
---

# The CFG Token

CFG is the native governance token of Centrifuge, empowering holders to shape the protocol’s evolution through a decentralized, onchain governance system. With the transition to Centrifuge V3, an EVM-based protocol, CFG is migrating from the legacy Centrifuge Chain to Ethereum as of mid-March 2025. This shift deprecates the original CFG on Centrifuge Chain and Wrapped CFG (WCFG) on Ethereum, consolidating them into a single EVM-compatible CFG token.

For instructions on migrating your legacy CFG or WCFG, see [Legacy CFG/WCFG Migration to Ethereum](./token-migration).

## Governance

CFG holders steer the Centrifuge protocol by voting on proposals, including runtime upgrades and strategic initiatives. With the deprecation of the Centrifuge Chain (expected Q4 2025), governance is transitioning to EVM-based tools:

- **Phase 1**: Voting will continue as normal on Centrifuge chain until control is given over to the council via a onchain vote. ETA is still to be announced. 
- **Phase 2**: Offchain voting via [Snapshot](https://snapshot.org/#/centrifuge.eth) starting post the launch of V3 in Q2. 
- **Phase 3**: A future onchain governance framework using smart contracts, to be detailed in a subsequent proposal.

Voting power is proportional to a holder’s CFG stake, ensuring decentralized control over the protocol’s evolution.

## CFG on Ethereum

As of April 2025, CFG will operate natively on Ethereum as an ERC20 token, replacing both the legacy CFG (Centrifuge Chain) and WCFG (Ethereum). 

**Key details:**

- **Token Address**: [0xcccCCCcCCC33D538DBC2EE4fEab0a7A1FF4e8A94](https://etherscan.io/token/0xcccccccccc33d538dbc2ee4feab0a7a1ff4e8a94).
- **Migration**: Legacy CFG and WCFG holders can swap 1:1 for the new CFG token. See [Legacy CFG/WCFG Migration to Ethereum](./token-migration) for details.
- **Bridging**: The previous CFG bridge between Centrifuge Chain and Ethereum will be discontinued with the chain’s deprecation.


## Tokenomics, block explorer, and token supply endpoints

The migration introduces an updated token supply:
- **Current Supply (Pre-Migration)**: [~562,565,045 CFG] (https://europe-west3-peak-vista-185616.cloudfunctions.net/centrifuge-total-issuance) 
- **Post-Migration Total Supply**: 675,000,000 CFG, including 115M newly minted tokens for strategic initiatives (released gradually).
- **Inflation**: 3% yearly inflation will continue, accruing to the Centrifuge DAO Treasury on Ethereum.


[You can find the block explorer for the legacy CFG token on Centrifuge here on ](https://centrifuge.subscan.io/), to see accounts, transactions, and statistics about CFG and Centrifuge Chain.

This section will be updated post the full migration to refelect the up to date total supply. 

## CFG Token Distribution

### Initial Distribution

The initial CFG Generation Event was executed by the Centrifuge Network Foundation. The initial distribution created 400,000,000 CFG, which was distributed to the Foundation and initial contributors, including; the core team, investors, and validators. Since genesis, additional tokens have been minted as rewards for chain security and to incentivize adoption. This wide token distribution is core to the decentralization of Centrifuge.

A snapshot of CFG Distribution shortly after genesis, at a supply of 425M:

![](./images/token_distribution.png#width=60%)

### Token Lockups

Token lockups help to align incentives of the token holder to the long-term growth of the Centrifuge ecosystem.

Most CFG tokens have long-term lockups at their distribution. Core team members have 48 month lockups when they join, with a 12-month cliff. Generally CFG sales are also subject to long-term lockups. Rewards may also be subject to lockups.
