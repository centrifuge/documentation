---
id: token-summary
title: The CFG Token
contributors: <Lucas Vogelsang:lucas@centrifuge.foundation>, <Cassidy Daly:cassidy@centrifuge.foundation>, <Devin Black:devin@k-f.co>, <Imdior:ivan@centrifuge.io>
---

# The CFG Token
# CFG Token

CFG is the native governance token of Centrifuge, empowering holders to shape the protocol’s evolution through a decentralized, onchain governance system. With the transition to Centrifuge V3, an EVM-based protocol, CFG is migrating from the legacy Centrifuge Chain to Ethereum as of mid-March 2025. This shift deprecates the original CFG on Centrifuge Chain and Wrapped CFG (WCFG) on Ethereum, consolidating them into a single EVM-compatible CFG token.

> **Note:** For instructions on migrating your legacy CFG or WCFG, see [Legacy CFG/WCFG Migration to Ethereum](./token-migration).


## Governance

CFG holders steer the Centrifuge protocol by voting on proposals, including runtime upgrades and strategic initiatives. With the deprecation of the Centrifuge Chain (expected Q4 2025), governance is transitioning to EVM-based tools:

- **Phase 1:** Voting will continue as usual on the Centrifuge Chain until control is given over to the council via an onchain vote. ETA is still to be announced.
- **Phase 2:** Offchain voting starting post the launch of Centrifuge V3 in Q3.
- **Phase 3:** A future onchain governance framework using smart contracts, to be detailed in a subsequent proposal.

Voting power is proportional to a holder’s CFG stake, ensuring decentralized control over the protocol’s evolution.



## CFG on Ethereum

As of **May 20, 2025**, a new ERC20 CFG went live on Ethereum, replacing both the legacy CFG (Centrifuge Chain) and WCFG (Ethereum).

**Key details:**

- **Token Address:** [0xcccCCCcCCC33D538DBC2EE4fEab0a7A1FF4e8A94](https://etherscan.io/token/0xcccccccccc33d538dbc2ee4feab0a7a1ff4e8a94)
- **Migration:** Legacy CFG and WCFG holders can swap 1:1 for the new CFG token. See [Migration Details](./token-migration) for details. Migration ends **November 30, 2025**.
- **Bridging:** The previous CFG bridge between Centrifuge Chain and Ethereum will be discontinued with the deprecation of the chain.


## Tokenomics, block explorer, and token supply endpoints

The migration introduces an updated token supply:
- **Current Supply (Pre-Migration):** [~564,565,045 CFG](https://europe-west3-peak-vista-185616.cloudfunctions.net/centrifuge-total-issuance)   
- **Post-Migration Total Supply:** 680,000,000 CFG (includes 115M newly minted tokens for strategic initiatives, released gradually)
- **Inflation:** 3% yearly inflation will continue, accruing to the Centrifuge DAO Treasury on Ethereum

You can find the block explorer for the legacy CFG token on [Centrifuge chain here on ](https://centrifuge.subscan.io/) and [WCFG on Etherscan here](https://etherscan.io/token/0xc221b7e65ffc80de234bbb6667abdd46593d34f0), to see accounts, transactions, and statistics about WCFG,CFG and Centrifuge Chain.

**Endpoints:**

- Total Supply: [https://webapi.centrifuge.io/getPlainTotalSupply](https://webapi.centrifuge.io/getPlainTotalSupply)
- Circulating Supply: [https://europe-west3-peak-vista-185616.cloudfunctions.net/centrifuge-total-issuance](https://europe-west3-peak-vista-185616.cloudfunctions.net/centrifuge-total-issuance)

## New Minted Tokens
Following the approval of [**CP149**](https://github.com/centrifuge/cps/blob/main/cps/CP149/CP149.md), a total of **115 million CFG tokens** have been minted to the Centrifuge Network Foundation. This allocation is intended to support key initiatives aimed at strengthening the Centrifuge protocol and its ecosystem.

### Purpose of the Minted Tokens

The newly minted CFG tokens will be used to:

- Support the migration of the CFG token with exchanges and market makers
- Incentivize targeted and relevant DeFi users to participate in value-aligned activities
- Fund strategic initiatives that promote protocol adoption, user engagement, and TVL retention

### Distribution and Vesting Schedule

![](./images/vestingchart.png#width=60%)

To ensure a transparent and sustainable release, the distribution of the 115 million CFG tokens is structured as follows:

- **100,000,000 CFG** will be linearly vested over a four-year period, starting from **May 20, 2025**. These tokens will be gradually released to align incentives and promote long-term growth of the protocol.
- **15,000,000 CFG** are unlocked immediately and available for use in the near term to facilitate operations, early-stage initiatives, and strategic activities.

> This vesting and distribution plan represents the current intended strategy. It is subject to change, with any significant modifications or actions to be communicated to the Centrifuge DAO.

**Additional Notes:**

- Core team members have 48-month lockups when they join, with a 12-month cliff.
- Generally, CFG sales are also subject to long-term lockups.
- Rewards may also be subject to lockups.
- During the migration phase, CFG tokens can be utilised to facilitate and support the migration of legacy tokens. 
This may result in transfers exceeding the currently unlocked token amounts. Please note that exchanged legacy tokens will be migrated from the legacy chain and then re-added to the unvested amount upon completion of the migration process. 


This section will be updated post the full migration to reflect the up-to-date total supply.
