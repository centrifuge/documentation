---
id: offering-structure
order: 3
title: Offering Structure Overview & Templates
category: 5. Further Information
---

_Disclaimer: This is not legal advice. The information provided here is solely for informational purposes. We recommend you consult a lawyer if you want legal advice. No attorney-client or confidential relationship exists or will be formed between you and any contributors to Centrifuge.
This article describes the legal structure at a high level and provides boilerplate legal agreements as an example for how to set up the legal framework necessary to ensure Real World Assets can be tokenized and a legal recourse exists for anyone holding these tokens._

The legal setup for each pool is mirroring the Tinlake smart-contract structure and real-world relationships between the involved parties. It is structured with two goals in mind:

1. Ensure that investors in the pool have the most protection possible giving them recourse on the RWA used as collateral in the pool
The source of truth is on chain. The legal contracts delegate all possible responsibilities to the on chain smart contracts.
2. For this purpose, each pool as a legal entity tied to it. This special purpose vehicle (SPV) serves the purpose of keeping the Asset Originators' own business and the financing activity in the pool separate.

This article goes into the current template for a general offering structure, was developed for US-based offerings. It is the simplest and most straight forward offering structure but is continuously being developed with law firms with a background in international asset-backed financing, security laws, and token, crypto, or virtual/digital assets regulations.

There is also work to bring offering structures for other non-US jurisdictions. The outlined structure is supporting either a 506(b) or a 506(c) offering under Regulation D of the US Securities Act of 1933 for a US-based issuing SPV offering investments directly to either US investors with accredited investor status or non-US investors from domiciled in jurisdictions with United States Income Tax Treaties under the Foreign Account Tax Compliance Act FATCA.

#### What is an SPV?
A Special Purpose Vehicle (SPV) is a separate legal entity. The SPV is a distinct company with its own assets and liabilities, as well as its own legal status. Usually, they are created for a specific objective, often to isolate financial risk. As it is a separate legal entity, if the parent company goes bankrupt, the special purpose vehicle can carry on. Read more on https://corporatefinanceinstitute.com/resources/knowledge/strategy/special-purpose-vehicle-spv/

## Overview of a Transaction
### Asset Finance Flow

The general flow of financing typically looks as follow:

1. The Asset Originator sets up a legal entity, a special purpose vehicle per pool. They set up the SPV to keep all financings remote and separate from the Asset Originator.

2. The Borrower wishes to finance an asset such as an invoice or a property

3. The Asset Originator originates this RWA. They have a business relationship with the borrower and perform the underwriting. They then verify the RWA and mint an NFT for the asset to be used as collateral on chain.


4. The Borrower enters into a financing agreement with the SPV and asks the Asset Originator to lock its NFT in the Tinlake tied to the SPV. As the NFT is locked in Tinlake, DAI is drawn from the Tinlake pool reserve, and either directly transferred to the Borrowers wallet or the SPVs wallet, which exchanges DAI for USD and does a bank transfer to the Borrower’s bank account. The SPV is set up as a special purpose vehicle (SPV) to keep all financings remote and separate from the Asset Originator. A bankruptcy of the Asset Originator shall not impact the SPV and thus the financing. All financing transactions and payments are done directly between Borrowers, the SPV, and Investors and happen on-chain in Tinlake. The SPV is a pass-through entity without the aim to generate profits. It does not employ any employees, has the sole purpose of financing specific RWAs as underlying assets of one specific Tinlake pool. The SPV administers this pool and all its services are performed by third parties for a service fee and instructed by the SPV. The SPV’s operations are defined in the [Operating Agreement](https://docs.google.com/document/d/14I8x16nRvSVgtnV6EoahZQ9GGVrdvKNbIK7tAN5gBaY).


5. The Borrower pays back the financing amount plus the financing fee at the maturity date of the NFT. This either happens directly on-chain in DAI, or the Borrower does a USD bank transfer to SPV, the SPV exchanges USD for DAI and pays it back to the Tinlake pool. The full repayment of the NFT unlocks the NFT, which is then returned back to the Asset Originator where it can be burned.


### Investors
Investors can join a pool and provide liquidity for assets to be financed. They go through the following process.

1. Investors can either purchase DROP or TIN ERC20 tokens issued by a Tinlake pool. They need to go through a Know Your Customer and Anti-Money Laundering (KYC/AML) process. This process is handled by the Asset Originator on behalf of the SPV. Centrifuge [partners with Securitize](https://coinbench.com/centrifuge-partners-with-securitize/) to offer a compliant investor onboarding service and a US accredited investor status check to the SPVs issuing the tokens. Securitze is a SEC licensed transfer agent offering compliant investor onboarding services. Investors which passed KYC/AML and verified accredited investor status if required get a [Securitize iD](https://www.securitize.io/product/securitize-id), which allows them to subscribe for all Tinlake pools.
2. Once KYC’ed, the investor can sign the subscription document for the Tinlake pool they wish to invest in. They either sign a DROP or a TIN token subscription agreement. This only needs to happen once. The subscription agreement outlines the general structure, risks, terms and conditions of a DROP or a TIN investment. An additional pool specific Executive Summary outlines the specifics of the Asset Originator, the SPV, and the underlying financed assets. Whereas the [DROP Token Subscription Agreement](https://drive.google.com/file/d/1GhTrd6x1OS8KzR9NErFngSZAT737tRLj) and the [TIN Token Subscription Agreement](https://drive.google.com/file/d/1hXS1jrHSedJwFlV7u2pYPIcv89DYUpk0) are templates which are easy to reuse, the Executive Summary is very pool specific and requires legal review.
  [Example Executive Summary](https://drive.google.com/file/d/1AHUqJWuWAq1UlFoyUSpoaiuUl4K6t7bc/view?usp=sharing) for the ConsolFreight Tinlake Pool CF3.
3. The SPV as the issuer of DROP and TIN is countersigning the subscription agreements using Securitze and whitelists the registered investor wallet address in Tinlake.
4. The Investor can now invest [on Tinlake](https://tinlake.centrifuge.io) in the respective pool by simply purchasing the DROP or TIN tokens with Dai.
5. The Investor can at any time request a redemption of its DROP or TIN tokens, whereas DROP tokens have priority over TIN tokens and TIN token investments must not fall under the threshold of the minimum TIN buffer set for the pool. The redemptions are executed pro-rata between the addresses requesting a redemption on best effort basis. All repayments from the underlying assets (NFTs) will be used for open redemption requests before they can be recycled to finance new assets (NFTs). This means a pool stops to finance new assets if redemptions exceed investments. The pool is forced by its investors into liquidation as already outlined in the previous mentioned posts purely by the Tinlake smart contracts and all DROP investors are treated equally.



## Legal Contract Templates
Tinlake Pool uses the following templates to achieve the above described setup.

* [Operating Agreement](https://docs.google.com/document/d/14I8x16nRvSVgtnV6EoahZQ9GGVrdvKNbIK7tAN5gBaY): describes the SPVs operation
* [DROP Subscription Document](https://drive.google.com/file/d/1GhTrd6x1OS8KzR9NErFngSZAT737tRLj): The subscription agreement outlines the general structure, risks, terms and conditions of a DROP investment.
* [TIN Subscription Document](https://drive.google.com/file/d/1hXS1jrHSedJwFlV7u2pYPIcv89DYUpk0): The subscription agreement outlines the general structure, risks, terms and conditions of a TIN investment.
* Incorporation Documents: Used to incorporate the Series-LLC (following soon)




