---
id: understanding-tinlake
order: 3
title: Understanding Tinlake
contributors: <Dylan Dedi:dylan@centrifuge.io>, <Sounak Pradhan:sounak@abc.io>
---

## Intro

## Revolving Pool / Epoch / Solver

## Tinlake Terms

## DROP & TIN: The Two Tranches

### Introduction

Investors often want different kinds of risk exposure and yield on the same asset class. In the traditional finance world, one way to achieve this is by using structured finance products and introducing a tiered investment structure or in other words, different tranches. This means that investors can invest in the same asset through different classes of shares with different risk/return profiles. Tinlake implements this functionality by offering the option to issue two tokens, the Tin and Drop tokens, which behave very similarly to how tranches work in the traditional finance world. Note, that Tinlake can also be deployed with just one token (Tin).

### Two-tiered structures in finance: Tinlake's DROP and TIN

While there can be several different tranches in structured finance products, Tinlake's default implementation is a common two-tiered structure, with two different tranches. In finance, this is usually called an A/B tranche or junior/senior tranche structure. In this case, the first class of shares (A/Senior class) usually has a rather stable but lower return than the second class (B/Junior class). In exchange, the junior class usually has higher, but also more variable returns, as it protects the senior class from losses (e.g. from defaulted assets).

Tinlake’s two tokens behave very similarly to how tranches work in a common two-tiered structure. The Tin token can be seen as the junior tranche and token holders that own these tokens take second priority to the Drop token holders when money flows from borrowers back to funders, but depending on the performance of the pool also have the potential to generate a much higher return on their token value than Drop token holders.

### Allocation of Proceeds ("Waterfall")

![Waterfall](./images/loan_waterfall.svg#float=left;margin=20px;width=300px;)

In a standard investment vehicle, investors share the risk and return of the investments pro rata, meaning they share it corresponding to their investment volume. In a tiered investment structure, investors do not share all risks and returns pro rata. Therefore, it somehow needs to be defined how the proceeds are allocated between the different tranches. This is called the waterfall.

Most waterfalls usually follow the principle that proceeds are distributed from top (senior tranche) to bottom (junior tranche). This implicitly means, that losses/defaults are allocated from bottom to top, meaning they are borne by the junior tranche that protects the senior tranche. Therefore, the junior tranche is also sometimes referred to as a _first loss piece_.

A simple waterfall could be, for example, that the senior tranche receives their investment back first and also their (fixed) returns. The remaining proceeds are then allocated to the junior tranche. The higher the proceeds left in the waterfall for the junior tranche are, the higher the return. However there are many different configurations. Another setup could be that the senior tranche receives their investment back first, then the junior tranche receives their investment back, then the senior tranche receives their (fixed) return and the remaining proceeds go the junior tranche.

### A Simplified example

To illustrate how the DROP and TIN tokens work in more detail, let’s look at a hypothetical $1M fund investing in SME invoices targeting an average annual interest rate of 9%. When setting up a structured fund, part of the paperwork is to define how many shares are being issued in each class. For example, the issuer could say they will sell 20% of the $1M investment in a junior tranche and 80% in a senior tranche. Let’s assume the senior tranche is guaranteed a fixed return of 5%. The junior tranche has a variable return depending on the success of the investment. Now let’s look at a few different scenarios to explain how this structure affects the risk and return of the different investment classes.

![Base Case](./images/tranche_base_case.svg#margin=10px;width=250px;float=left;)

#### Base case scenario

Assume that the money to return to investors is $1.09M based on the 9% interest rate ($1M in principal and $90k in interest). During the lifetime of the fund, any repayments are first used to repay the share of the senior investors along with the 5% interest accrued on their investment (5% of $800k = $40k). Once all outstanding senior debt and interest has been paid off, the waterfall pays out the remaining proceeds to the junior investors. That means that if there are no losses, the junior investors will be paid $50k on a \$200k investment. This is equivalent to a 25% return.

<div style="clear:both;"></div>

![Junior Loss](./images/tranche_junior_loss.svg#margin=10px;width=250px;float=left;)

#### Partial Loss for the Junior Tranche

Let’s assume again that out of the $1M lent, $1.09M were due incl. accrued interest. However, there is a 6% default rate resulting in a total loss of $60k of the portfolio. For simplicity, we further assume that interest is impacted similarly, so the total interest paid from the portfolio is $84.6k. The senior tranche is not impacted and still returns 5% of $800k equal to $40k. The junior investors take the first loss and their net value drops to $140k. The junior tranche still receives the remaining interest payments of $44.6k from the waterfall. Thus, overall the junior tranche has an ending net value of \$188.6k equal to a loss of 7.7%.

<div style="clear:both;"></div>

#### Losses for Senior Tranche

The senior tranche would be protected against any losses of their investment and their guaranteed fixed return as long as potential defaults do not exceed the volume of the junior tranche. This would be the case up to a default rate of 22.9% under the above assumptions. With a default rate of 22.9% the loss of the portfolio is $229k leaving a total of $771k of the loan portfolio being paid back. The total interest still paid from the portfolio is $69k. Thus, the senior tranche is not impacted, receiving $840k ($771k + $69k) and still returns 5%. The junior tranche takes the first loss again and their net value drops to \$0k. For defaults higher than 22.9% the senior tranche would also start to accrue losses, first on their expected return, and then on their initial investment.

#### Interest Rate Model

The Drop token’s return is defined by a fee function. Unless modified, the default implementation has a fixed interest per pool compounding per second. The interest is only charged on the deployed capital. The Tin token only gets a return on their investment if the Drop token holders have all been fully redeemed. Therefore, Tin token holders do not have a guaranteed fee or return but measure their return by what the Drop token contract leaves in the system.

An overview of how to calculate interest rates for Tinlake contracts can be found [here](#interest-rate-methodology).

### Minimum Tranche Ratio

A Drop purchaser taking the senior tranche would want to have a guarantee that there is at least a minimum percentage of Tin in the pool to make sure that they are protected against a certain amount of losses. Setting this variable guarantees them a certain risk profile. When deploying a pool this variable is set upon initialization and enforced by the contracts. When the minimum ratio is broken, investments and the issuance of additional Drop token is stopped until the minimum ratio is restored.

## Interest Rate Methodology

Tinlake uses an interest rate mechanism that is typically implemented as compounding per second. The implementation can be found in [github.com/centrifuge/tinlake-math](https://github.com/centrifuge/tinlake-math).

Below we show abstract examples of how this is calculated:

| Variable     | Description                                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| $P$          | Principal                                                                                                                     |
| $D$          | Debt                                                                                                                          |
| $rate$       | interest rate per second                                                                                                      |
| $n$          | the number of times the interest is compounded, compounding is once per second, so "n" is seconds past since last calculation |
| $\mathtt{R}$ | Nominal interest rate (5% would be 0.05)                                                                                      |
| $\mathtt{A}$ | Annual Percentage Rate (APR)                                                                                                  |
| $\mathtt{y}$ | constant, seconds in a year: $3600 \cdot 24 \cdot 365 = 31536000$                                                             |

The basic formula is:

$$
D = P \cdot rate^{n}
$$

Debt equals to Principal (or the previous debt amount) times rate to the power of seconds since last calculation.

### Example: Interest rate compounding per second

$$
P = 100 \newline
r = 0.05 \newline
n = 3600 \cdot 24 \cdot 365 = 31536000 \newline
$$

Using the formula above, the Debt $D$ after half a year
$(n = \mathtt{y} / 2 = 15768000)$ would result in $D = 102.5315$.

After one year ($n = \mathtt{y}$) the $D$ would be $105.1271$.

Thus a 5.00% interest rate compounded every second is equivalent to an annually compounded rate of 5.127%.

The annual percentage rate $\mathtt{A}$ could also be calculated directly from the percentage rate $\mathtt{R}$ (using $n = \mathtt{y} = 31536000$):

$$
\mathtt{A} = (1 + \frac{\mathtt{R}}{\mathtt{y}})^\mathtt{y} = 1.05127
$$

#### Rate per Second

To calculate the Debt, we initialize an interest rate in Tinlake with a variable called `ratePerSecond` or $rate$. The ratePerSecond represents the interest accrued per second in Tinlake.

$$
rate = 1 + \frac{\mathtt{R}}{\mathtt{y}}
$$

#### Calculate Debt

$$
D = P * rate^t
$$

The debt can be calculated by multipling the principial $P$ with $rate$ to the power of $n$. The variable $n$ represents the time passed in seconds since the loan has been borrowed.

Continuing the example from above for annual interest:

$$
rate  = 1 + \frac{0.05}{31536000} = 1.0000000015854900 \newline
D = 100 \cdot 1.0000000015854900^{31536000} = 105.1271
$$

### Using an annual percentage rate (APR) in Tinlake

The Tinlake User Interface uses an annual percentage rate (APR) as input. Tinlake transforms this annually compounded rate $\mathtt{A}$ into the equivalent rate used for compounding per seconds $rate$. This is achieved by solving the equation:

$$
\mathtt{A} = (1 + \frac{rate}{\mathtt{y}})^\mathtt{y}
$$

for $r$:

$$
r = \mathtt{y} \cdot (\mathtt{A}^{\frac{1}{\mathtt{y}}}-1)
$$

Using the calculated $r$ compounding every second leads to the same amount of debt like using $\mathtt{A}$ compounding annually over the course of a year. Thus, the calculated `rate` can be used to achive an interest per year (APR) behaviour with the compounding per second implementation in Tinlake.

Continuing the example from above with an 5.00% annual interest rate (APR):

### Decimal Precision

We use fixed precision decimals for any monetary amounts. Interest Rates are typically of type `ray` with 27 digits precision and amounts are of type `wad` which has 18 digits precision.

This is usually explicitally mentioned in throught the codebase.

## Asset Pricing

Centrifuge’s Tinlake is an asset-backed smart contract lending platform built to responsibly bridge real-world assets, such as invoices, mortgages or streaming royalties to the DeFi ecosystem. This post is the first in a multiple part series about how valuation and pricing of **real-world assets** work within the Tinlake ecosystem. Collectively, this series will form our knowledge base on real-world asset pricing and will be used to educate the DeFi community as we bridge non-native crypto assets into the decentralized finance ecosystem.
This post starts with the **fundamentals of pricing real-world assets.** It will focus on one particular asset — an invoice — and explain which factors are usually considered in pricing this asset and how these factors may be turned into an interest rate. Invoices are particularly interesting collateral for Tinlake and DeFi because they have historically low default rates and a short maturity of 30–90 days.

### Financing an Invoice

For our purposes, an invoice is a bill sent from one entity (supplier) to another (buyer) in connection with the delivery of goods or services. Key data points on an invoice usually are:

1. Invoice amount
2. Counterparty name and address
3. Issuance date
4. Due date
5. Line items (e.g. type and quantity of goods)
6. Payment terms and conditions

Suppliers around the world typically have to wait for 30–90 days to get paid for an invoice. Instead of waiting several months until the invoice is due, the supplier has an alternative: find a way to convert the invoice into capital quickly by financing it through a capital provider, e.g. an Asset Originator or a factor.

The parties involved in issuing and financing an invoice through Tinlake usually are the following:

| Roles             | Description                                                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Supplier/Borrower | Invoices the buyer for delievered goods or services; has to wait for payment by the buyer; finances this invoice to get paid right away. |
| Buyer             | Purchases the goods or services and incurs the charges related to the invoice for the goods or services                                  |
| Asset Originator  | Provides capital to supplier at a discount to the face value of the invoice, and 100% of the collections related to the invoices.        |
| Lender            | Lends money to the Asset Originator in exchange for certain rights and privileges regarding the invoice payments of buyers.              |

Financing an invoice can be structured as a simple loan with one bullet repayment. The two decisive pricing parameters are **advance rate** and **interest rate.** The advance rate acts as a reserve or protection for the Lender against losses. The interest amount/finance fee is usually deducted up-front and the loan is then paid back in relation to the payment due date of the invoice.

Imagine e.g. an invoice with a face value of _USD 100_ due in 90 days. A supplier may use this invoice as collateral to receive early payment in form of a short term loan. Assuming an 80% advance rate and a 7.0% interest rate (APR) a supplier could receive a loan (“early payment amount”) of USD _78.6_ (deducting interest of USD 1.4 = _USD 80_ _ (7.5% _ (90/360)) and pay back _USD 80_ after 90 days when he receives the payment of the buyer. If the supplier wants to finance this invoice through Tinlake, he could turn to an Asset Originator who would tokenize it and use a Tinlake pool to draw funding in stablecoin from a Lender, e.g. from a decentralized lending protocol, against the invoice NFT as collateral.

### Factors for Pricing Invoices

There are several different factors to consider when setting advance rate and fee/interest rate for financing an invoice. These different factors are relevant for both the Asset Originator as well as the Lender. _For brevity, I will refer to both parties as just the Lender in the section below:_

#### 1. Buyer Credit Risk

The value of an invoice is firstly based on the buyer’s ability and willingness to pay. In some cases, this can be represented by publicly available credit ratings. In others, credit bureau data, the payment history of the buyer or publicly available news may be used.

#### 2. Supplier Credit Risk

The stability of the supplier is another important factor to be considered. Lenders are underwriting the supplier as much as the invoices themselves. The suppliers working capital management is of particular importance. Is the supplier’s net working capital positive or negative? How have its metrics trended in the past? What is the supplier’s collection history with this specific buyer? Also, what is its history of commercial disputes and/or failures to deliver?

#### 3. Industry and Country

In addition to the supplier’s and buyer’s individual credit risk, the market impact on pricing by industry and country is another important factor. While some industries have a robust, constant supply chain, other industries may be subject to seasonality or prone to disruption. Each country carries with it some amount of systematic risk that trickles down to suppliers and its ability to pay. Further, the recovery of defaulted amounts or the ability to collect an overdue payment often depends on a country’s legal system.

#### 4. History

There is inherent bias baked into repeating relationships that can be either positive or negative. If a Lender has some track record with a supplier/borrower, then the impact of a continuing relationship will work its way into the pricing. For instance, if an efficiently run supplier has a long track record, with invoices based on contracts with stable counterparties, they will get favorable pricing on its invoice population.

#### 5. Portfolio Volume

The most important factor when estimating the advance rate/fee for invoices is volume. To a Lender, a large number of invoices means the risk of non-payment is spread across a number of counterparties — more invoices are better than less. If one is pricing a pool of invoices, the statistics around the invoice pool can be considered. One can think of a distribution function where a great sample amount means a smoother distribution. Lower invoice counts mean that collecting on the discrete, single invoice has a more significant impact on the pool’s return.

### Estimating Advance Fee and Rate

Now let’s take a look at how considering all these factors may translate into advance rate and a fee/interest rate for financing an invoice. This will be illustrated with a very simple example. Having this in mind, please note that valuation and pricing generally come with a large variety of approaches and different, usually higher levels of complexity.

Imagine a large Buyer, “Sneaker Group” and a Supplier, “Laces Inc”. There is also “Lender Co” willing to provide financing. Laces invoices Sneaker for its delivery of laces worth USD \$1,000 with payment due in 90 days. Laces wants to request financing from Lender with the invoice as collateral.

To set interest and advance rates, the Lender may use a homemade risk scorecard. These scorecards come in a variety of forms and different levels of complexity. For this purpose, we will assume a very simple scorecard, where with five individual factors described above (Note, that portfolio aspects are not considered for this simple example of an individual invoice) contribute equally with a score from 1 (the worst) to 10 (the best) to an overall risk score of up to 50. Let’s assume the following scores for Laces Inc:

| Factor                                     | Score | Description                                                                                                                                                                                                                                                             |
| ------------------------------------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Supplier Credit Worthiness ("Laces, Inc.") | 7     | Laces provides its financial information, tax returns, bank statements to AO so that it can estimate credit worthiness. The analysis leads to an above average score which implies risk of default is lower compared to the overall market. Lower advance rates needed. |
| Buyer Credit Worthiness (“Sneaker Group”)  | 10    | Sneaker is a large buyer and publicly traded with excellent credit ratings provided by established rating agencies                                                                                                                                                      |
| Relationship/History                       | 7     | A strong relationship means less variance around the outcome, thus lower risk.                                                                                                                                                                                          |
| Industry                                   | 5     | Lace’s industry is cyclical and can impact collections.                                                                                                                                                                                                                 |
| Country                                    | 7     | Sneaker and Laces operate lower risk jurisdictions and warrant pricing that reflects this lower risk.                                                                                                                                                                   |

Adding up the individual scores for each of these factors leads to a risk score of 36 for Laces.

This risk score can be mapped on a risk scorecard with assigned advance and interest rates for risk scores. The typical advance rate is usually between 70% to 90%. As of the writing of this blog, annual rates (APR) around 6% to 8% on a loan 90-day invoice are consistent with observable market rates. These rates would also include and reflect the Lenders operational costs and cost of capital, which are similar for all loans. Having this in mind, a simple scorecard could look like this:

| Risk Rating | Score | Advance Rate          | Interest Rate    |
| ----------- | ----- | --------------------- | ---------------- |
| A           | 45-50 | 90%                   | 5.00%            |
| B           | 40-44 | 80%                   | 6.00%            |
| C           | 30-39 | 80%                   | 7.00%            |
| D           | 20-29 | 70%                   | 8.00%            |
| F           | 5-20  | No financing approved | ("Risk cut-off") |

Based on this scorecard, Laces would be assigned a risk rating of C and Lender could offer Laces financing with an advance rate of 80% and an interest rate/fee of 7.00% against the invoice as collateral. The Asset Originator would advance $786 (80% advance less $14 interest at 7% interest) and collect \$800 in 90 days from Laces.

## Asset Valuation
