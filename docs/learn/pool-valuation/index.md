---
id: pool-valuation
order: 4
title: Pool Valuation (NAV)
contributors: <Dylan Dedi:dylan@centrifuge.io>
---

## Intro

Asset Valuation is the process of determining the current worth of an asset or portfolio by assigning a monetary value. The value of a portfolio of assets is often also expressed as the net asset value (NAV).

A NAV is usually required when a portfolio is sold or when investors want to join/exit an existing investment pool. Then the portfolio value ultimately determines the investment/redemption price. Note that for these purposes the portfolio value may be different to the book value or accounting value of a portfolio.

Determining the value of illiquid assets is notoriously difficult because – by definition – there isn’t a liquid secondary market to determine the value, unlike many stocks, bonds or most fungible tokens. For illiquid asset portfolios the valuation methodology is thus often based on a fair value valuation utilizing a financial model ("marked to model"). This often comes down to valuing the present value of future cash flows expected to receive based on these financings - the so-called discounted cash flow (“DCF”) method.

## Tinlake's approach - Fair value DCF

### Step-by-step overview

Tinlake's valuation methodology is also based on a fair value valuation ("marked to model") utilizing a discounted cash flow model. The approach can be summarized as follows:

1. **Derive Expected Cash flows**
   For every outstanding financing of an asset, the expected cash flow is calculated. The current implementation allows to calculate the Expected Repayment of simple bullet loan structures which are common in particular in invoice financing and trade finance. The `Expected Cash Flow` is calculated based on (i) the expected repayment dates and (ii) the expected repayment amounts.
   (i) The expected repayment date is derived on contractual obligations associated with the financing, e.g. the due date of the underlying invoice. This is provided through an Oracle based on the documents underlying the NFT minted on Centrifuge's P2P Protocol.
   (ii) The expected repayment amount is projected based on the outstanding Tinlake financing by applying the financing fee on the current debt until the repayment date.

2. **Risk-adjust expected cas flows**
   The expected Cash Flow is risk-adjusted for credit risk by the `Expected loss`. Every financing is allocated a risk class that has a `Probability of Default (PD)` and `Loss Given Default (LGD)` assigned to it. The `Expected Loss` is calculated as `Expected loss = Expected Cash Flow * PD * LGD` and substracted from the expected repayment amount to adjust for credit risk. Note that PDs are often communicated per anno and may need to be adjusted to the term of the underlying asset.

3. **Discount risk-adjusted expected cash flows**
   The risk-adjusted expected cash-flows are discounted with an appropriate discount rate (this depends on asset class and pool) to derive the present value of a financing. The discount rate usually reflects the rate
   of return an investor could earn in the marketplace on an investment of comparable size, tenor and risk. Note, that the discount rate is the same for every financing of a pool.
   The standard formula to calculate the PV of a cash flow is

$$

PV=\frac{CF}{(1+r)^t}

$$

with `r = discount rate` and `t = period of cash flows`. As we deal with intra-year cash flows, the formula becomes

$$

PV=\frac{CF}{(1+\frac{r}{n})^{t*n}}

$$


with $n$ being number of discounting periods per year (e.g. 360 days for a financial year).

4. **Calculate NAV**
   Adding up the present values of the risk-adjusted expected cash flows for all financings in the pool leads to the (portfolio) NAV. The NAV plus the liquidity currently in the Reserve of the Pool gives the Pool Value.

![](./images/calculate_NAV.png)

### Write-offs

Tinlake allows for a flexible treatment of write-offs. If a financing is overdue the expected repayment amount can be (partially) reduced by defined percentages after a defined number of days following pre-determined criteria (e.g. a grace period and collection period).

### Operational costs

Average loan maintainance/running costs (such as legal, SPV, servicing) could be substracted from the PV. At the moment these are set to zero in Tinlake's NAV calculation as operating costs are currently borne by the SPV of the issuer.

## Sample calculations

### Simple example for one financing

**General Assumptions:**
Today = 31.03.2020
Discount rate `r` = 5.00%
Days per year: 360
Seconds per year: 31536000

**Financing parameters:**
Financing date = 01.01.2020
Financing amount = 100 DAI
Financing fee = 10% APR
Expected repayment date = 30.06.2020
Expected loan duration = 180 days
(Annual) PD = 4%
LGD = 50%

**Calculations**

1. Calculate the expected cash flow on the 30.06.2020

Remember the textbook compounding formula is

$$
Expected CF = P * (1 + \frac{r}{n})^{(n*t)}
$$

where
P = Principal in DAI [=100]
r = Interest rate (decimal [0.1])
t = Time --> Loan duration i years
n = Number of times interest is compounded per unit `t`

Applying this to our financing assuming compounding per second gives
P = 100 DAI
r = 0.1
t = loan duration in years = 180/360 days = 0.5
n = 31536000 seconds per year

$$
Expected CF = 100 DAI * (1 + \frac{0.1}{31536000})^{(31536000*\frac{180}{365})} = 105.13 DAI
$$

2. Adjust the expected cash flow for default risk:

The Expected Loss with the risk parameters given is

$$
Expected Loss = 105.13 DAI * (0.04/180*360) * 0.5 = 1.05 DAI
$$

Note that the PD is adjusted to reflect the term of the asset. This is substracted from the Expected CF to calculate the risk-adjusted expected CF: 105.13 DAI - 1.05 DAI ~ 104 DAI

3. Discount the risk adjusted expected Cash Flow
   Assuming that today is the 31.03.2020 we first calulate the remaining time till the expected cash flow (30.06.2020) which is 90 days. Applying the discounting formula above with
   r = 0.05
   t = 90 / 360 = 0.25 = loan duration in years
   n = 31536000 seconds per year
   gives:

$$
PV = \frac{104 DAI}{(1 + \frac{0.05}{31536000})^{0.25*31536000}} = 101.5 DAI
$$
