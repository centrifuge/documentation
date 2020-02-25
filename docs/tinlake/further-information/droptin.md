---
id: droptin-tranches
order: 1
title: "Drop & Tin: An Intro to Tranches"
category: 5 . Further Information
---

## An intro to structured finance
In a normal investment vehicle, investors share the risk and return of the investments pro rata, meaning they share it corresponding to their investment volume.

Securitization or Structured Finance means, that the investor/lender/liability side of an investment vehicle/Fund/SPV is structured in different tranches with different risk/return profile.

In the case of two tranches, they are usually called Senior/Notes/A and Junior/Equity/B tranches. There can also be more than two tranches. In this case the most senior tranche is always called the A tranche. The remaining tranches are labelled with ascending letters. Tranches between Senior and Junior tranches are sometimes called Mezzanine tranches. In the follwing we will focus on a simplified two tranche set-up.

Usually senior tranches have a lower/stable return and bear less risk, while junior tranches have higher/more volatile returns and take on more risk, thus protecting the senior tranche.

A technical note on the term Securitization: Structuring the liability side is often equated with securitization, as the different tranches *can* be sold of as securities. However, technically, a portfolio can also be turned into a security without structuring the liability side. Vice versa, a the liability side of a fund can be structured in tranches without turning the tranches into a security.

## Main use cases
There are generally two main use cases for structured finance or securitization:

###  (A) Static/Term/Maturing Portfolio
A portfolio is built-up and simply matures (=repayments and proceeeds are not reinvested but rather distributed to investors, usually monthly, quarterly or annually; no new investors can enter, once the vehicle is closed;investors cannot leave once all investments are invested) or on existing and maturing portfolio is bought and is isolated in a special purpose vehicle (SPV) and matures there.

### (B) Active/Revolving Portfolio ("Evergreen")
This is a SPV/Fund/Investment Vehicle that manages an active portfolio (=proceeds can stay in the vehicle and can partly reinvested; investors can re-invest, new investors can enter, exisiting investors can leave) which is structured in different tranches. which allocate risk and return according to different waterfalls

## Allocation of Proceeds ("Waterfall")
As investors do not share all risks and returns pro rata, it somehow needs to be defined how these are allocated between investors. This is called the waterfall.

As mentioned, usually senior tranches have a lower, stable return but are protected against risks by the junior tranche. Therefore, the junior tranche has higher, though volatile returns.

This means that most waterfalls usually follow the principle that returns/income are distributed from top to bottom, meaning senior tranches receive their investment back and possibly also their (fixed) returns. This implicitly means, that risk/defaults are allocated from bottom to top, meaning their are borne by the junior tranches which protect the senior tranches. Therefore the junior tranche is often called the "First loss piece"

In case of (A) the senior would first receive all proceeds until he has received his investment plus return back. All following proceeds would go to the junior tranche, creating a volatile return depending on the success of the investments.

In case of (B) evergreens, when the proceeds of the investments are regularly allocated to investors, the proceeds would be allocated according to that waterfall at any payout date.

# Example
## Assumptions
To look at both cases, let's assume a 200k total volume with 100k investment into a Senior/A tranche and a 100k investment into a Junior/Equity/B/First loss tranche.

So, liability/funders/right side of the balance sheet looks like this:

| Tranche  | Capital |
| -------- | ------ |
| Senior   | 100k |
| Equity   | 100k |
| **TOTAL**    | **200k** |


This capital is invested into 4 loans, each 50k each with a 5% interest rate. So the Asset/Investment side/ left side of the balance sheet looks like this:

| Loan  | Volume |
| -------- | ------ |
| 1   | 50k |
| 1   | 50k |
| 1   | 50k |
| 1   | 50k |
| **TOTAL**    | **200k** |

Note, that assets equal liabilities.

## Case (A) - Maturing portfolio / Term portfolio
This works actually relatively simple. You take all the proceeds (simplified: repayments + fees + interest - defaults) and distribute it according to a waterfall. Usually from top to bottom, so senior investors get their investments back first. So when the interest payments and repayments come in, senior investors are paid back until they reach their threshold and the remaing proceeds go then to equity investors

Let's assume a simple waterfall
(i) Senior Principal + 3%
(ii) Rest to Equity

### Scenario (a) - all 4 loans get paid back in full
So we have total proceeds of 200k * 1,05 = 210k
(i) Senior receive 103k (100 investment * 3% return)
(ii) Junior receive the remaining 107k for a return of 7% (google "leverage effect" in case you wonder, why junior makes a 7% return on 5% loans - the beauty of finance)

Note, that this assumes a tenor of the loans and funds of 1 year. Usually these investment vehicles last several years. In this case, the return of the senior would calculated as an IRR (Internal rate of return). This means that the net present value of all his cash flows (investments and disbursements) needs to be 3%.

### Scenario (b) - One loan does default with a loss given default of 100% (=0% recovery rate)
So we have total proceeds of 150k * 1,05 = 157,5k
(i) Senior still receive their 103k
(ii) Junior receive the remaing 54,5 for a bitter loss of nearly half of their investment (the flip side of the leverage effect btw)

In this example, even if two loans completely default, the senior tranche would still receive their full investments back plus a return of 3%. Junior takes all the losses. That's why it is called first loss piece/tranche.

## Case (B) Evergreen - Reinvested repayments and proceeds

### Excourse: Minimum equity tranche threshold
Let's assume the same initial capital structure as described above. As these vehicles are set-up for years and the liability structure may vary with new investors entering, old investors leaving etc senior investors usually require a minimum size for the equity tranche that protects them. This could be expressed in three ways, which can all be converted to each other [Example: Junior 20, Senior 80, Total 100]:  
- (i) junior as a percentage of senior [25%]
- (ii) senior as a multiple of junior [4x], basically leverage
- (iii) junior as percentage of total capital [20%]

Going forward, let's assume a minimum equity/debt ratio of 50% / maximum multiple of 2

We'll now follow our investment vehicle from above (200k balance sheet) through a few succesful and less succesfull years with different scenrios to see what can happen

### Year 1:  One loan is repaid and fully reinvested

Interest earned: 10k
To Senior: 3k
To Junior: 7k
Defaults: none
Portfolio: 200
Cash: 0

The 3k are distributed (paid out) to senior. The 7k for equity can be left in the Fund to increase the equity buffer or also be paid out to equity investors. Let's distribute them to keep the numbers simple. The capital remains the same.

| Tranche  | Capital |
| -------- | ------ |
| Senior   | 100k |
| Equity   | 100k |
| **TOTAL**    | **200k** |

### Year 2:  One loan is only partly repaid
Let's assume a loss given default of one loan of 20k. For simplicity let's assume that the interest had been fully paid on the initial 40k. The 20k are reinvested into a loan with 5% as well.

Interest earned: 10k
To Senior: 3k
To Junior: 7k
Defaults: 20k
Portfolio: 180k

Interest is allocated as above. However, Equity takes the loss and is reduced to 180k

| Tranche  | Capital |
| -------- | ------ |
| Senior   | 100k |
| Equity   | 80k |
| **TOTAL**    | **180k** |

### Year 3:  Another loan completely defaults

Not a good year right. So a further 40k have to be written off. Let's also assume this loan didn't pay any interest.

Interest earned: 140 * 0,05 = 7k
To Senior: 3k
To Junior: 4k
Defaults: 40k
Remaining portfolio: 140k

Interest is distributed to investors again. Senior still receive their target rate, Junior less so. Equity also takes the additional loss and is reduced to 40k

| Tranche  | Capital |
| -------- | ------ |
| Senior   | 100k |
| Equity   | 40k |
| **TOTAL**    | **140k** |

Now, while this vehicle is technically not bust yet (still 40k of Equity left, right?) the equity ratio / multiple is 40% / 2.5 so below / above the threshold. Senior investors could demand equity investors to invest at least another 10k to restore the minimum threshold, otherwise the fund could be closed, all loans auctioned of and the proceeds distributed according to the waterfall (so senior investors would be paid back first)
