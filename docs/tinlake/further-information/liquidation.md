---
id: liquidation
order: 2
title: Liquidation
category: 5 . Further Information
---

## How does loan liquidation in Tinlake work?
The liquidation of bad assets from a Tinlake pool is executed by Liquidators, so called keepers. These can be, e.g. loan collection agencies. These Liquidators are whitelisted by the Administrator and can also be assigned to specific loans. If no dedicated keeper is assigned to a loan, all whitelisted keepers are eligible to collect the loan.

Every loan has a specific Threshold, which is set by the Administrator after the loan is created. This Threshold defines the Maximum Debt amount per loan. If `Debt > Threshold`, Liquidators can remove the underlying NFT from the Tinlake pool at a price supplied by a service provider, e.g. a dedicated valuation firm, through a price oracle.

## Technical implementation
The collection of undercollaterized loans is handled by the Collector contract. To initiate the collection, any user can call `seize` on the Collector. The Collector then calls `get` on Threshold. If `Debt < Threshold`, Collector aborts the action. If `Debt > Threshold`, Collector calls `claim` to move the NFT from the Shelf to the Collector. From there, whitelisted Liquidators can call `collect` to collect the NFT at the price set by the service provider. The funds provided by the Liquidator are transferred to Shelf and `distributor.balance()` is triggered to move it to the tranches. Note that, as soon as the NFT gets seized and the ownership is transferred to the Collector, loan owners are not able to make repayments anymore.
