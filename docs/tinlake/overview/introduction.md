---
id: introduction
order: 1
title: Introduction
category: 1. Overview
redirect_from:
  - /tinlake/
---


 Tinlake is a set of smart contracts that enables borrowers to draw loans against non-fungible assets, such as invoices, royalty payments or warehouse receipts. Anything that can be represented on-chain as NFTs (Non-Fungible Tokens) can   be financed using the Tinlake infrastructure. This is done by issuing an ERC20 token, the Collateral Value Token (CVT), against all of the collateral NFTs that are deposited into the Tinlake contracts.
 
 As borrowers deposit NFTs into Tinlake, new CVT is minted on demand.
 
 
 ## System Overview
 ### Deployments
 Tinlake is a set of smart contracts that can be deployed in different configurations that are generally independent of each other. Each lender to a deployment shares the risk of all assets within the deployment but not from any other deployment. Likewise can all the parameters of a deployment be configured differently.
 
 ### Borrowers and Lenders
 Tinlake interacts with borrowers and lenders. Generally borrowers have individual loans with varying terms and varying durations. Lenders invest in the entire portfolio at a defined rate. 
 
 Borrowers can borrow by depositing NFT collateral which they can get back upon repaying their debt.
 
 ### Administrator
 Generally an administrator determines what assets borrowers are allowed to bring in as collateral and how much they are allowed to borrow against the assets. This however can not only be a single centralized entity but could be a set of automated smart contracts automatically qualifying and pricing an asset. Or you could plug in a DAO that takes control of the Tinlake deployment.
 
 ### NFT Assets 
 In Tinlake the collateral generally is in form of an NFT. Though with a custom adapter, any other collateral could be used. For an asset to be used as collateral in Tinlake it generally must satisfy two conditions:
 1) Ownership of the asset must be transferable to the Tinlake `Shelf` which holds it in escrow until the loan is repaid
 2) Appraisal: There must be a way to determine the value of the collateral with oracles or automated pricing models. 
 
 *Add overview graphic of Tinlake*
  
 
 ## Contracts Overview
 | Contract | Description |
 |----------|-------------|
 | Title | Tracks ownership of each loan. Implements the NFT interface so loans themselves become NFTs. ||
 | Lightswitch | Triggers settlement of the tinlake system if the value of the collateral falls below a certain treshold or some other condition is met(e.g the MakerDAO CDP gets bitten) |
 | Pile | Manages loan debt and token balance, pays out to borrower and receives repayments | 
 | Shelf | Keeps track of approved NFTs and owns NFTs |
 | Valve | Controls minting and burning of Collateral Value Token |
 | Collateral | The collateral value token. |
 | Appraiser| Appraiser is a module that can be plugged in that returns the value of the collateral. | 
 | Reception | Wrapper contract for borrowers |
 | Desk | The "trading desk", wrapper contract for the administrator to manage the lender side |
 | MakerAdapter | Manages a CDP |
 | BackerAdapter | Uses a single account to dra
 | Deployer | Deploys all components in one transaction setting the right wards |
 
