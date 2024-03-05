---
id: legal-structure
order: 5
title: Legal Structure
contributors: <Jeroen Offerijns:jeroen@k-f.co>, <Dennis Wellmann:dennis@k-f.co>, <Devin Black:devin@k-f.co>
category: subpage
redirect_from:
  - /getting-started/off-chain
  - /getting-started/off-chain/
---
# Legal Structure
Financing real-world assets requires a real-world legal structure. The setup for each pool is designed to mirror the protocol structure and the real-world relationships between the parties. The templates provided are based on legal structures used for asset-backed securitizations for many decades.

## Legal entities
Each pool has a legal entity tied to it, a special purpose vehicle (SPV). The SPV keeps the asset originator’s business separate from the financing activity underlying the pool and ensures the assets in the pool are bankruptcy remote from the asset originator. An Operating Agreement defines the operations of the SPV. To securitize assets, the legal ownership of the assets is transferred by the asset originator to the SPV. 

![](./images/legal-structure.png#width=70%;)

## Asset defaults
If an asset defaults, the pool issuer is responsible for recovering the capital. The process for this depends on the asset class. For example, an issuer might aim to buy out and replace any non-performing loan with a performing loan, and then deal with collections on their own balance sheet. When cash comes in from the recovery process, the proceeds will be converted to stablecoins and distributed to the token holders as the borrower pays back the loan partially or fully.

## Onboarding
To onboard investors for a pool, the issuer of the pool needs to ensure KYC & AML regulations are met as well as accredited investor verification and tax form submission. Centrifuge utilizes a third party e-KYC provider for an integrated onboarding system as a service to the issuers. Service providers verify investor KYC information and check accredited investor status for US-based investors. Investors can then enter into a Subscription Agreement with the issuer.
