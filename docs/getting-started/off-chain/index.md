---
id: off-chain
order: 6
title: Linking on-chain to off-chain
---

The legal setup for each pool is designed to mirror the protocol structure and the real-world relationships between the parties. The templates are based on legal structures used for asset-backed securitizations for many decades, and are structured to ensure that investors in the pool have protection by ensuring recourse to the RWA used as collateral in the pool.

Each pool has a legal entity tied to it, a special purpose vehicle (SPV). The SPV keeps the pool issuer’s business separate from the financing activity in the pool and ensures the assets in the pool are bankruptcy remote from the issuer and borrowers. An Operating Agreement defines the operations of the SPV. To tokenize assets, the legal ownership of the assets is transferred to the SPV. 


![](./images/legal-structure.png#width=70%;)

If an asset defaults, the pool issuer is responsible for recovering the capital. The process for this depends on the asset class. For example, an issuer might aim to buy out and replace any non-performing loan with a performing loan, and then deal with collections on their own balance sheet. When cash comes in from the recovery process, the proceeds will be distributed to the token holders as the borrower pays back the loan partially or fully.

## Onboarding & KYC
To onboard investors for a pool, the issuer of the pool needs to ensure KYC & AML regulations are met. Centrifuge has developed an automated onboarding system as a service to the issuers. Service providers verify investor contact information and check accreditation 
for US-based investors, and more. Investors then enter into a Subscription Agreement with the issuer.
