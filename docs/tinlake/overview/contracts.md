---
id: contracts
order: 1
title: Contracts Overview
category: 2. Contracts
redirect_from:
  - /tinlake/
---

### List of all Tinlake contracts

| Contract | Description |
|----------|-------------|
| Title | Tracks ownership of each loan. Implements the NFT interface so loans themselves become NFTs. ||
| Lightswitch | Triggers settlement of the Tinlake system if the value of the collateral falls below a certain threshold or some other condition is met (e.g the MakerDAO CDP gets bitten) |
| Pile | Manages loan debt and token balance, pays out to borrower and receives repayments | 
| Shelf | Keeps track of approved NFTs and owns NFTs |
| Valve | Controls minting and burning of Collateral Value Token |
| Collateral | The collateral value token (CVT) ERC20 contract |
| Appraiser | Appraiser is a module that can be plugged in that returns the value of the collateral. | 
| Reception | Wrapper contract for borrowers |
| Desk | The "trading desk", wrapper contract for the administrator to manage the lender side |
| MakerAdapter | Manages a CDP to borrow Dai from MakerDAO by depositing CVT |
| BackerAdapter | Uses a single account to manage payment transfers in the lending process
| Deployer | Deploys all components in one transaction, and sets the right access control |


![](https://storage.googleapis.com/centrifuge-hackmd/upload_ebcf6c3a9716a904257e42842c4536fd.png)


### Main Interactions
#### Whitelist an NFT
`Admin.whitelist(address registry, uint nft, uint principal, uint appraisal, uint fee, address usr)`

An admin (underwriter) can whitelist an NFT for Tinlake. The admin has to define a principal, appraisal and interest rate (APR) for the NFT. Only whitelisted NFTs can be used to receive loans.  


#### Borrow a loan
`Reception.borrow(uint loan, address deposit)`

The owner of a whitelisted NFT can call `borrow` on the reception contract. As a first step, the ownership of the NFT is transferred to the Tinlake shelf contract. (Pre required is an `approve` in the NFT registry contract). The new locked NFT causes a value (appraisal) increase of the collateral pool. New CVT are minted to represent the increase. Afterwards, the new CVT are used as collateral in a decentralized lending protocol like Maker or Compound (depending on the adapter) to receive funding in DAI (principal amount).  The borrow transaction automatically whithdraws the received DAI to the deposit address. If borrow is successful, the loan status changes to `ongoing` and interest accrues.

#### Repay a loan
`Reception.close(uint loan, address usr)`

An ongoing loan can be repaid in any point in time by calling the close function. (Pre required is an `approve` on DAI ERC20 contract). Tinlake   transfers the debt (principal + interest) to the decentralized lending protocol to receive back the CVT. After that, the underlying NFT is removed from the pool by transferring the ownership back to the borrower. The NFT transfer causes a value decrease in the pool. Therefore, the received CVT are burned. During the entire loan cycle the total amount of CVT represents the value of the locked NFT. If close is successful, the loan status changes to `repaid`. 