---
id: droptin-tranches
order: 1
title: "Drop & Tin: An Intro to Tranches"
category: 5 . Further Information
---

## Introduction
Investors often want different kinds of risk exposure and yield on the same asset class. In the traditional finance world one way to achieve this is by using structured finance products and introducing a tiered investment structure or in other words, different tranches. This means that investors can invest in the same asset through different classes of shares with different risk/return profiles. Tinlake implements this functionality by offering the option to issue two tokens, the Tin and Drop tokens, which behave very similarly to how tranches work in the traditional finance world. Note, that Tinlake can also be deployed with just one token (Tin).

## Two-tiered structures in finance
While there can be several different tranches in structured finance products, this document this focuses in the following on a common two-tiered structure, with two different tranches. In finance this is usually called an A/B tranche or junior/senior tranche structure. In this case, the first class of shares (A/Senior class) usually has a rather stable but lower return than the second class (B/Junior class). In exchange, the junior class usually has higher, but also more variable returns, as it protects the senior class from losses (e.g. from defaulted assets).

## Allocation of Proceeds ("Waterfall")
In a standard investment vehicle, investors share the risk and return of the investments pro rata, meaning they share it corresponding to their investment volume. In a tiered investment structure, investors do not share all risks and returns pro rata. Therefore, it somehow needs to be defined how the proceeds are allocated between the different tranches. This is called the waterfall.

Most waterfalls usually follow the principle that proceeds are distributed from top (senior tranche) to bottom (junior tranche). This implicitly means, that losses/defaults are allocated from bottom to top, meaning they are borne by the junior tranche that protects the senior tranche. Therefore, the junior tranche is also sometimes referred to as a `first loss piece`. 

A simple waterfall could be, for example, that the senior tranche receives their investment back first and also their (fixed) returns. The remaining proceeds are then allocated to the junior tranche. The higher the proceeds left in the waterfall for the junior tranche are, the higher the return. Another simple waterfall could be, that the senior tranche receives their investment back first, then the junior tranche receives their investment back, then the senior tranche receives their (fixed) return and the remaining proceeds go the junior tranche.  

## A Simplified example 
To illustrate how a two-tiered structure works in more detail, let’s look at a hypothetical $1M fund investing in SME invoices targeting an average annual interest rate of 9%. When setting up a structured fund, part of the paperwork is to define how many shares are being issued in each class. For example, the issuer could say they will sell 20% of the $1M investment in a junior tranche and 80% in a senior tranche. Let’s assume the senior tranche is guaranteed a fixed return of 5%. The junior tranche has a variable return depending on the success of the investment. Now let’s look at a few different scenarios to explain how this structure affects the risk and return of the different investment classes.

## Base case scenario
Assume that the money to return to investors is $1.09M based on the 9% interest rate ($1M in principal and $90k in interest). During the lifetime of the fund, any repayments are first used to repay the share of the senior investors along with the 5% interest accrued on their investment (5% of $800k = $40k). Once all outstanding senior debt and interest has been paid off, the waterfall pays out the remaining proceeds to the junior investors. That means that if there are no losses, the junior investors will be paid $50k on a $200k investment. This is equivalent to a 25% return.

## Partial Loss for the Junior Tranche
Let’s assume again that out of the $1M lent, $1.09M were due incl. accrued interest. However, there is a 6% default rate resulting in a total loss of $60k of the portfolio. For simplicity, we further assume that interest is impacted similarly, so the total interest paid from the portfolio is $84.6k. The senior tranche is not impacted and still returns 5% of $800k equal to $40k. The junior investors take the first loss and their net value drops to $140k. The junior tranche still receives the remaining interest payments of $44.6k from the waterfall. Thus, overall the junior tranche has an ending net value of $188.6k equal to a loss of 7.7%.

## How Tin and Drop work in Tinlake
Tinlake’s two tokens behave very similarly to how tranches work in a common two-tiered structure. The Tin token can be seen as the junior tranche and token holders that own these tokens take second priority to the Drop token holders when money flows from borrowers back to funders, but depending on the performance of the pool also have the potential to generate a much higher return on their token value than Drop token holders.

## Interest Rate Model 
The Drop token’s return is defined by a fee function. Our default implementation lets the deployer set an interest rate compounding per second on the deployed capital but one could also quite easily peg it to say Maker’s stability fee or any other externally defined fee function. The Tin token only gets a return on their investment if the Drop token holders have all been fully redeemed. Therefore, Tin token holders do not have a guaranteed fee or return but measure their return by what the Drop token contract determines to be the appropriate return.

## Minimum Tranche Ratio 
A Drop purchaser taking the senior tranche would want to have a guarantee that there is at least a minimum percentage of Tin in the pool to make sure that they are protected against a certain amount of losses. Setting this variable guarantees them a certain risk profile. When deploying a pool this variable needs to be set and enforced by the contracts. When the minimum ratio is broken, investments and the issuance of additional Drop token is stopped until the minimum ratio is restored.
