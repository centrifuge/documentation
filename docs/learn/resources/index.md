---
id: resources
order: 7
title: More Resources
contributors: <Dylan Dedi:dylan@centrifuge.io>
---

### Where else can I learn about Centrifuge?

#### Analyses

- [Centrifuge — Research by Cryp2Gem](https://cryp2gem.medium.com/centrifuge-research-by-cryp2gem-8331d02c824a)

#### Further Reading

- [Sizing up a pool](https://medium.com/centrifuge/investing-in-your-first-tinlake-pool-how-to-dyor-5b79cf88861c)
- [Tinlake v3](https://medium.com/centrifuge/tinlake-v3-growing-defi-usability-to-the-real-world-4d6acce869d8)
- [Originating assets on Centrifuge Chain](https://medium.com/centrifuge/why-originate-real-world-assets-on-centrifuge-chain-cedd705fcca1)
- [Pricing real-world assets](https://medium.com/centrifuge/tinlake-pricing-and-valuation-series-part-1-how-to-price-real-world-assets-cf6655132bef)
- [Centrifuge Liquidity Rewards](https://medium.com/centrifuge/start-earning-radial-rad-rewards-for-tinlake-cbd98fcd8330)

#### Governance Proposals

- [Centrifuge Liquidity Rewards Parameter Update](https://gov.centrifuge.io/t/request-for-comments-radial-rewards-parameter-update/1769)

### Glossary / Terms

#### General

| Term             | Explanation                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Asset Originator | Companies that provide advance financing to multiple businesses. Asset Originators access financing via investors in Tinlake Pools.                                                                                                                                                                                                                                              |
| RWA              | Real-World Assets; these are non native crypto assets, such as invoices or music streaming royalties.                                                                                                                                                                                                                                                                            |
| SPV              | Special Purpose Vehicle - a legal entity created to fulfill narrow, specific or temporary objectives. Typically used by companies to isolate the firm from financial risk. In Centrifuge, SPVs enforce that legal recourse is available to holders of DROP and TIN.                                                                                                              |
| DROP and TIN     | Based on each NFT pool, ERC20 tokens (TIN and DROP) are minted. These two tokens represent the underlying collateral. DROP is the Senior token with a fixed interest rate and stable returns, loss protected by TIN. TIN is the Junior token with higher yield and risk; takes loss first. You can read more [here.](https://developer.centrifuge.io/tinlake/overview/tranches/) |
| NFT              | "Non-Fungible Token" as a digital representation of a single unique collateral, IE one invoice. The Centrifuge business NFT follows the ERC-/EIP-721 Ethereum standard.                                                                                                                                                                                                          |
| Revolving Pool   | A pool which funds assets continuously; a revolving pool spins continuously as long as there are new assets to be financed and investors to deposit funds.                                                                                                                                                                                                                       |

#### Tinlake Terms

| Term | Explanation |
| ---- | ---- |
| Pool Value | Total pool value calculated as: sum of Asset Value and Pool Reserve. |
| Asset Value | The Asset Value (NAV) reflects the present value of the outstanding portfolio of financings. It is the sum of the present values of the risk-adjusted expected repayments of all outstanding financings. |
| Pool reserve | Amount of currency currently held in the pool that is not currently deployed for financings by the Asset Originator. The reserve is available for financing by the Asset Originator and redemptions by investors. |
| DROP APR | Annual interest rate (APR) at which the DROP Token accrues interest applied on outstanding financings (compounded secondly). |
| TIN Risk Buffer | Amount of TIN in relation to the Pool Value. The Minimum TIN Risk Buffer indicates the lower limit and ensures that DROP investors are protected by a certain amount of TIN invested in the pool at any time. |
| Outstanding Volume | Sum of the debt on all financings in the pool. This deviates from the Asset Value which considers expected repayments and risk-adjustments. |
| DROP Value | Total value of outstanding DROP tokens at the current DROP token price. |
| TIN Value | Total value of outstanding TIN tokens at the current TIN token price. |
| Epoch # | Invest and redeem transactions are locked over a defined period of time ("Epoch") and automatically executed at best effort at the end of this period, adhering to the pools predetermined risk limits such as the Minimum TIN Risk Buffer. |
| Minimum epoch duration | Minimum time of an epoch for this pool during which invest and redeem orders can be locked. At the end of the epoch the locked orders will be executed by the smart contracts. An epoch can also take longer, if no outstanding orders are locked. |
| Total epoch investment capacity | The investment capacity indicates how much investors can invest before the pool is oversubscribed. It is calculated as the difference between the maximum reserve allowed for this pool and currently locked invest and redeem orders. |
| Available for financing | The value of the underlying collateral determines how much an Asset Originator can finance against a locked NFT. An Asset Originator may choose to finance less than the available amount. |
| Risk group | The risk group of a financing determines the interest rate based on the underlying scorecard. |
| Maturity date | Expected repayment date for the outstanding financing. It is used to calculate the present value of the financing for the pool's asset value. |
| Financing Fee | Annual interest rate (APR) at which the interest for the outstanding financing is accrued with secondly compounding. |
