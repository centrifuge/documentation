---
id: multi-tranche-system
order: 2
title: "Pools with multiple tranches"
contributors: <Dennis Wellmann:dennis@centrifuge.io>, <Jay:jay@centrifuge.io>
---

## Introduction to tiered investment structures
### Why introduce several tranches?
Introducing different investment tranches enables customization of the risk-return profile of asset pools for various types of investors. In a standard investment vehicle, investors typically share equal risk and return on investments, proportionate to their share of investment in the pool ("pro rata"). However, a tiered investment structure with predefined tranches allows investors to be exposed to different types of returns, risks, and maturities based on the same asset pool. While there is no theoretical limit to the number of tranches, the most commonly used structures consist of 2-5 tranches stacked from top to bottom. 

### The waterfall
The top tranche is commonly referred to as the senior tranche, the bottom tranche as the junior tranche, and any tranches in between as different forms of mezzanine tranches. The senior tranche is the most secure as it receives proceeds from the asset pool first and is protected against defaults by the tranches below. Consequently, the senior tranche usually offers a lower, often stable or fixed return. The remaining proceeds after serving the senior tranche are further allocated to the subordinated tranches below based on their defined return profiles. The junior tranche receives the remaining proceeds after all other tranches have been served. Hence, the higher the proceeds remaining in the waterfall, the higher the variable returns for the junior tranche. In the event of a default, the junior tranche absorbs the losses first (hence its designation as the "first loss piece"), while more senior investors remain protected against these losses. Only when the junior tranche is fully depleted do more senior investors start bearing losses from defaults. The returns of the junior tranche before losses are usually relatively high to compensate for the risk of facing losses from defaults. The allocation of proceeds from the top and risks from the bottom among the different tranches is commonly known as "the waterfall."

![Waterfall](./images/Pool_tranches.svg#width=50%;)

### The subordination ratio
To ensure that senior and mezzanine investors are consistently protected against defaults to a predetermined degree, each tranche (except the junior tranche) carries a "subordination ratio." This ratio determines the percentage of the asset pool that must be covered by subordinated tranches below in the stacked waterfall. 
For example, in a three-tranche structure, a subordination ratio of 20% for the senior tranche means that the senior tranche should always be protected by a combined mezzanine and junior tranche, accounting for at least 20% of the total asset pool. If the subordination ratio for the mezzanine tranche is 10%, it needs to be protected by at least 10% of the junior tranche. If these ratios are not maintained in a revolving pool, measures such as additional investments provided by junior investors or even selling assets must be taken to restore them. 

### Implicit leverage of the junior tranche
While the junior tranche bears the risk of first-loss defaults to protect the tranches above, it also typically benefits from higher variable returns. This is partly driven by capturing excess returns greater than the fixed rates of the tranches above. 
Let's assume a pool of $100 yields a total return on its portfolio of 10% or $10. It is structured with a $50 senior tranche with a fixed return of 4% (earning $2), a $30 mezzanine tranche with a fixed return of 5% (earning $1.5), and a $20 junior tranche with variable returns. This leaves a 1% return for the junior tranche. However, note that the junior tranche also receives the excess returns from the tranches above. Therefore, its total income on the outstanding $20 tranche is the remaining $6.5 not captured by the other tranches, resulting in a significant return on investment of $6.5/$20 = 32.5%.

## On-chain implementation
### Scalable tranche configuration
The Centrifuge Protocol allows for flexible configuration of multiple tranches within a pool. Upon creation, a pool can be set up with one to five tranches. Each tranche above the junior tranche carries a defined fixed return (expressed as %APR on deployed assets), a position in the waterfall, and a subordination ratio. The junior tranche, by definition, sits at the bottom of the waterfall without a subordination ratio or predefined fixed returns.

### Cash drag across tranches
A pool only accrues interest on the deployed capital or financed assets, while liquidity in the reserve does not earn any interest. This situation can result in what is known as "cash drag." 
For example, consider a pool of $100 with a portfolio of assets worth $80 and a reserve of $20. If the portfolio of assets yields 10%, the pool will generate a total return of 8% because the 20% cash portion of undeployed capital reduces the overall return. 
In Centrifuge's revolving pools, the cash drag is equally distributed across the tranches. So, if the above pool has three tranches yielding fixed returns of 2%, 3%, and 15%, respectively, the effective returns would be 20% lower, resulting in 1.8%, 2.4%, and 12.0%.

### Breach of subordination ratios
Every tranche above the junior tranche carries a fixed subordination ratio to ensure that the tranche is protected by a certain buffer of tranches below at any given time. If a subordination ratio is breached, the pool is partially "frozen," allowing only transactions that would improve the ratio until it is restored. In such a scenario, the following transactions would be blocked:
- Financing of new assets by the issuer
- Further investments into the breached tranche and the tranches above it
- Redemptions of the tranches below the breached tranche

The following transactions would still be allowed:
- Repayments of assets
- Investments in the tranches below the breached tranche
- Redemptions of the senior tranche

### Handling of defaults
As long as a junior tranche exists, write-downs and write-offs resulting from defaults in the asset portfolio will be borne by the junior tranche. This would reduce the value of the junior tranche and, consequently, the token price, resulting in reduced junior returns or even losses for the junior tranche. As long as all subordination ratios remain intact, the pool continues to function normally, albeit with affected junior returns.

### Two-tiered structure for Ethereum pools: DROP and TIN
It is important to note that for existing pools on Ethereum created before the launch of the new app in May 2023, the standard implementation consists of a two-tiered structure, with the senior tranche referred to as DROP and the junior tranche referred to as TIN. Each pool also has a defined "Drop Subordination" or "Minimum TIN ratio."
