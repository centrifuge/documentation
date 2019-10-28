---
id: liquidation
order: 2
title: Liquidation
category: 5 . Further Information
---

The total amount of CVT minted by the Tinlake contracts always represents the value of the entire pool. If a new loan is borrowed by locking an NFT, new CVT are minted to represent the pool value increase.  In case of repayment, the CVT related to the loan are burned. The value of a pool increases or decreases not only by borrowing new loans or repaying existing ones. Individual NFTs could also increase or decrease in value. For example, an invoice NFT would decrease in value if an invoice is overdue for couple of days because it increases the risk of a default. A decrease or increase of an individual assets affects the entire pool.

### Liquidation by Underwriter
If the value of an NFT within the pool drops below its required collateralization value, the underlying loan has to be repaid by the underwriter. In this scenario, the debt (principal + interest) is transferred to the lending protocol by the underwriter in exchange for CVT tokens. The underlying NFT is removed from the pool and placed in escrow, temporarily transferring ownership to the underwriter for the duration of the loan period.


### Liquidation by Lending Protocol
Liquidation by the lending protocol should only occur in case the admin is not reacting on a value decrease of the pool which exceeds the preconfigured risk margin/threshhold. In order to protect the lenders from defaults, the admin has a high incentive to react on value decreases of the pool which bring the pool value below the defined threshhold. In the ideal case, a liquidation from the lending protocol like in CDP liquidation in Maker should never occur. In addition, each pool has a collateral factor which prevents a liquidation.
Each pool can have a different collaterization ratio which determines a liquidation event.
