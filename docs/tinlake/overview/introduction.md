---
id: introduction
order: 1
title: Introduction
category: 1. Overview
redirect_from:
  - /tinlake/
---

[Tinlake](https://centrifuge.io/technology/tinlake) is a set of smart contracts that enables borrowers to draw loans against non-fungible assets, such as invoices, royalty payments or warehouse receipts. Anything that can be represented on-chain as NFTs (Non-Fungible Tokens) can be financed using the Tinlake infrastructure. This is done by issuing an ERC20 token, the Collateral Value Token (CVT), against all of the collateral NFTs that are deposited into the Tinlake contracts.

## System Overview
Tinlake’s set of smart contracts pools NFTs that represent non-fungible assets and issues fungible, interest bearing tokens that represent a claim on a fraction of the proceeds of the entire pool. These fungible tokens can be locked in DeFi lending protocols or transferred to investors to draw funding. When liquidity is injected into Tinlake tokens are minted accordingly. The same mechanism applies in reverse when funding is paid out and tokens are burned.

Tinlake enables lenders to invest two different tranches: A senior tranche issuing a token called DROP, and a junior tranche issuing a token called TIN. The senior tranche has a lower/stable return and bears less risk, while the junior tranche has higher/more volatile returns and takes on more risk of defaulted loans, thus protecting the senior tranche.This structure is similar to common A/B or senior/junior structures in finance.

## User roles
### Borrowers and Lenders
Tinlake interacts with borrowers and lenders. Generally, borrowers have individual loans with varying terms and varying durations drawn against their collateral. Lenders invest in the entire collateral portfolio at a defined rate. Borrowers can borrow by depositing an NFT collateral representing ownership of an asset, which they can get back upon repaying their debt.

### Administrative functions
There needs ot be a way to determine what assets borrowers are allowed to bring in as collateral and how much they are allowed to borrow against the assets. This is done with a set of administrative functions that can be implemented in modular contracts (see below for an example). The simplest implementation is a single centralized entity, a set of smart contracts automatically qualifying and pricing an asset or a decentralised autonomous organisation (DAO) that manages the Tinlake deployment.

## Loan Lifecycle
Tinlake's loans can go through a number of stages in the life cycle depending on a few system variables. You can follow the possible transitions in the diagram below.

&nbsp;<br /><br />

![Loan Lifecycle Diagram](../../../src/images/tinlake/loan_lifecycle.svg)

### Borrow and repay any amount
Borrow and repay can be done repeatedly and with arbitrary amounts (up to some limits). Therefore both borrow and repay can be done multiple times for any amounts (as long as the user is allowed to borrow). A loan can move from `open` to `ready for withdrawal` to `active` and back several times.

### Closing a loan
The contracts enforce that only one loan can be active per NFT. You can not have two loan contract active with the same type of callateral. When a user does not plan to make use of an open loan contract anymore, the loan should be closed. However there is an edge case that we need to handle here:

When a loan is created for a collateral NFT and the NFT is then later transferred to someone else, that person couldn't borrow from that pool if the loan can't be closed by either the loan owner or the collateral NFT owner.

### Ready for withdrawal
There are certain setups where borrowers can't immediately access the funds made available to them when requesting to borrow money. We therefore split the borrowing action into two steps: `borrow` and `withdraw`. The first step is to request the funds from the system and the second step withdraws the funds. Splitting this allows the process to be drawn out over multiple blocks to wait for money to be made available by investors on a moments notice or to have an asset be deposited into the contracts from a cross chain bridge.

One key point is that once `borrow` has been called, in the default model the borrower will start accruing interest. This means that if a significant delay is expected then the interest model will need to factor this in or delay accruing interest with a zero balance withdrawal. If the borrower does not have a sufficient confidence in actually being able to withdraw currency after calling borrow, they should not trigger the borrow transaction.

In most cases, both actions can be made atomically in a single block and we provide helpers in tinlake-actions to do so thus avoiding this risk of borrowing without being able ot withdraw.

## Overview of contracts

![System Overview](../../../src/images/tinlake/core.svg)

