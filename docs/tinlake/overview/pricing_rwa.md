---
id: pricing-rwa
order: 4
title: "Pricing Trade Finance Assets"
category: 1. Overview
redirect_from:
- /tinlake/further-information/pricing-rwa/
---

## How To Price Real-World Assets

Centrifuge’s Tinlake is an asset-backed smart contract lending platform built to responsibly bridge real-world assets, such as invoices, mortgages or streaming royalties to the DeFi ecosystem. This post is the first in a multiple part series about how valuation and pricing of **real-world assets** work within the Tinlake ecosystem. Collectively, this series will form our knowledge base on real-world asset pricing and will be used to educate the DeFi community as we bridge non-native crypto assets into the decentralized finance ecosystem.
This post starts with the **fundamentals of pricing real-world assets.** It will focus on one particular asset — an invoice — and explain which factors are usually considered in pricing this asset and how these factors may be turned into an interest rate. Invoices are particularly interesting collateral for Tinlake and DeFi because they have historically low default rates and a short maturity of 30–90 days.

## Financing an Invoice
For our purposes, an invoice is a bill sent from one entity (supplier) to another (buyer) in connection with the delivery of goods or services. Key data points on an invoice usually are:
1. Invoice amount
2. Counterparty name and address
3. Issuance date
4. Due date
5. Line items (e.g. type and quantity of goods)
6. Payment terms and conditions

Suppliers around the world typically have to wait for 30–90 days to get paid for an invoice. Instead of waiting several months until the invoice is due, the supplier has an alternative: find a way to convert the invoice into capital quickly by financing it through a capital provider, e.g. an Asset Originator or a factor.

The parties involved in issuing and financing an invoice through Tinlake usually are the following:

Roles | Description |
--- | --- |
Supplier/Borrower | Invoices the buyer for delievered goods or services; has to wait for payment by the buyer; finances this invoice to get paid right away.
Buyer | Purchases the goods or services and incurs the charges related to the invoice for the goods or services
Asset Originator | Provides capital to supplier at a discount to the face value of the invoice, and 100% of the collections related to the invoices.
Lender | Lends money to the Asset Originator in exchange for certain rights and privileges regarding the invoice payments of buyers.

Financing an invoice can be structured as a simple loan with one bullet repayment. The two decisive pricing parameters are **advance rate** and **interest rate.** The advance rate acts as a reserve or protection for the Lender against losses. The interest amount/finance fee is usually deducted up-front and the loan is then paid back in relation to the payment due date of the invoice.

Imagine e.g. an invoice with a face value of *USD 100* due in 90 days. A supplier may use this invoice as collateral to receive early payment in form of a short term loan. Assuming an 80% advance rate and a 7.0% interest rate (APR) a supplier could receive a loan (“early payment amount”) of USD *78.6* (deducting interest of USD 1.4 = *USD 80* * (7.5% * (90/360)) and pay back *USD 80* after 90 days when he receives the payment of the buyer. If the supplier wants to finance this invoice through Tinlake, he could turn to an Asset Originator who would tokenize it and use a Tinlake pool to draw funding in stablecoin from a Lender, e.g. from a decentralized lending protocol, against the invoice NFT as collateral.

## Factors for Pricing Invoices
There are several different factors to consider when setting advance rate and fee/interest rate for financing an invoice. These different factors are relevant for both the Asset Originator as well as the Lender. *For brevity, I will refer to both parties as just the Lender in the section below:*

### 1. Buyer Credit Risk
The value of an invoice is firstly based on the buyer’s ability and willingness to pay. In some cases, this can be represented by publicly available credit ratings. In others, credit bureau data, the payment history of the buyer or publicly available news may be used.

### 2. Supplier Credit Risk
The stability of the supplier is another important factor to be considered. Lenders are underwriting the supplier as much as the invoices themselves. The suppliers working capital management is of particular importance. Is the supplier’s net working capital positive or negative? How have its metrics trended in the past? What is the supplier’s collection history with this specific buyer? Also, what is its history of commercial disputes and/or failures to deliver?

### 3. Industry and Country
In addition to the supplier’s and buyer’s individual credit risk, the market impact on pricing by industry and country is another important factor. While some industries have a robust, constant supply chain, other industries may be subject to seasonality or prone to disruption. Each country carries with it some amount of systematic risk that trickles down to suppliers and its ability to pay. Further, the recovery of defaulted amounts or the ability to collect an overdue payment often depends on a country’s legal system.

### 4. History 
There is inherent bias baked into repeating relationships that can be either positive or negative. If a Lender has some track record with a supplier/borrower, then the impact of a continuing relationship will work its way into the pricing. For instance, if an efficiently run supplier has a long track record, with invoices based on contracts with stable counterparties, they will get favorable pricing on its invoice population.

### 5. Portfolio Volume
The most important factor when estimating the advance rate/fee for invoices is volume. To a Lender, a large number of invoices means the risk of non-payment is spread across a number of counterparties — more invoices are better than less. If one is pricing a pool of invoices, the statistics around the invoice pool can be considered. One can think of a distribution function where a great sample amount means a smoother distribution. Lower invoice counts mean that collecting on the discrete, single invoice has a more significant impact on the pool’s return.

## Estimating Advance Fee and Rate 
Now let’s take a look at how considering all these factors may translate into advance rate and a fee/interest rate for financing an invoice. This will be illustrated with a very simple example. Having this in mind, please note that valuation and pricing generally come with a large variety of approaches and different, usually higher levels of complexity.

Imagine a large Buyer, “Sneaker Group” and a Supplier, “Laces Inc”. There is also  “Lender Co” willing to provide financing. Laces invoices Sneaker for its delivery of laces worth USD $1,000 with payment due in 90 days. Laces wants to request financing from Lender with the invoice as collateral.

To set interest and advance rates, the Lender may use a homemade risk scorecard. These scorecards come in a variety of forms and different levels of complexity. For this purpose, we will assume a very simple scorecard, where with five individual factors described above (Note, that portfolio aspects are not considered for this simple example of an individual invoice) contribute equally with a score from 1 (the worst) to 10 (the best) to an overall risk score of up to 50. Let’s assume the following scores for Laces Inc:


Factor | Score | Description
--- | --- | ---
Supplier Credit Worthiness ("Laces, Inc.") | 7 | Laces provides its financial information, tax returns, bank statements to AO so that it can estimate credit worthiness. The analysis leads to an above average score which implies risk of default is lower compared to the overall market. Lower advance rates needed. 
Buyer Credit Worthiness (“Sneaker Group”) | 10 | Sneaker is a large buyer and publicly traded with excellent credit ratings provided by established rating agencies
Relationship/History | 7 | A strong relationship means less variance around the outcome, thus lower risk.
Industry | 5 | Lace’s industry is cyclical and can impact collections.
Country | 7 | Sneaker and Laces operate lower risk jurisdictions and warrant pricing that reflects this lower risk.

Adding up the individual scores for each of these factors leads to a risk score of 36 for Laces. 

This risk score can be mapped on a risk scorecard with assigned advance and interest rates for risk scores. The typical advance rate is usually between 70% to 90%. As of the writing of this blog, annual rates (APR) around 6% to 8% on a loan 90-day invoice are consistent with observable market rates. These rates would also include and reflect the Lenders operational costs and cost of capital, which are similar for all loans. Having this in mind, a simple scorecard could look like this:

Risk Rating | Score | Advance Rate | Interest Rate
--- | --- | --- | --- |
A | 45-50 | 90% | 5.00% 
B | 40-44 | 80% | 6.00%
C | 30-39 | 80% | 7.00% 
D | 20-29 | 70% | 8.00%
F | 5-20 | No financing approved | ("Risk cut-off")

Based on this scorecard, Laces would be assigned a risk rating of C and Lender could offer Laces financing with an advance rate of 80% and an interest rate/fee of 7.00% against the invoice as collateral. The Asset Originator would advance $786 (80% advance less $14 interest at 7% interest) and collect $800 in 90 days from Laces. 
