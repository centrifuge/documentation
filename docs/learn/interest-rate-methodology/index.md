---
id: interest-rate-methodology
order: 5
title: Interest Rate Methodology
contributors: <Dennis Wellmann:dennis@k-f.io>
---

## Introduction
Transactions on the Centrifuge Protocol can be executed at any day and time. This requires an interest rate mechanism that is able to provide the correct amount of interest at any point in time. Hence, the standard within the Centrifuge Protocol is to compound and calculate interest at every second.

## Financial Background
This section gives a general introductio into interest compounding and the difference between APYs and APRs. If you are already familiar with these concepts you can skip this section and start reading how this is implemented on-chain. 

### How does compounding interest work?
Generally, interest can be compounded at different frequencies. Most common techniques are annual, monthly and daily frequencies. Annual compounding is simple. You have $100 and earn 6.00% interest over a year compounded annually. Then you receive $6.00 calculated as `$100 * 6.00% = $6.00 ` at the end of the year. Now assume, you still get 6.00% interest on your $100 but you want to compound monthly. That means you apply the monthly interst rate calculated as of `6.00%/12=0.50%` to receive interest of $0.50 at the end of the first month and end up with $100.50. At the end of the second month, you do the same, but as you also consider n the previously earned interest you get slightly more: `$100.50 * 0.5% = $0.5025`. If you continue to do this for 12 months you end up with $106.1678 at the end of the year. That's slightly more than with annual compounding despite the same interest rate - the "power of compounding". 
You can calculate the total interest accrued by repeating the above calculation 12 times or - much easier -  apply the general interest rate formula:

$$
Debt = Principal * (1 + \frac{i}{n})^{(n*t)},
$$

with 

| Variable     | Description                                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| $i$          | Interest rate defined as APR (decimal)         |                                                                                                         
| $t$          | Time -> Loan duration in years (decimal)     |                            
| $n$          | Compounding frequency (Number of times interest is compounded per unit `t` ) (integer)|

To confirm, applying the numbers above (`i = 0.06, t = 1.00, n = 12`) gives

$$
100 * (1 + \frac{0,06}{12})^{(1*12)} = 106.1678.
$$

The same concept and formula can be applied to any compounding frequency. With secondly compounding (n = 365 * 24 * 60 * 60 = 31536000 seconds per year) the same interest rate would provide you with

$$
100 * (1 + \frac{0.06}{31536000})^{(1*31536000)} = 106.1837.
$$

### APR vs APY
To understand Centrifuge Protocol interest rates and yields it is also important to understand the difference between an `Annual Percentage Rate (APR)` and `Annual Percentage Yield` (APY). The main difference is that an APY takes into account compounded interest, while the APR does not. Thus, for annual compounding APR and APY are equal. For higher compounding frequencies such as monthly or daily compounding an APY is higher than the annual APR. If you think of the example above, the APR is 6.00%. Your APY for monthly compounding is 6.1678%. The APY for secondly compounding 6.1837%. So the higher the compounding frequency the higher the equivalent APY.

In the Centrifuge Protocol the input rate usually is an APR. E.g., if you look up at the financing fee of an asset on-chain, the number you’d find would be an APR. Since this APR is applied every second the effective yield stemming from the interest accrued can be approximated best with an APY compounded secondly. 

## On-chain implementation
### Formula applied
The implementation on-chain is slightly different to the standard compounding formula above, albeit with identical results.
To calculate the `Debt` at any point in time a variable called `ratePerSecond` or `rate` is introduced. This is calculated as

$$
rate = 1 + \frac{\mathtt{i}}{\mathtt{y}}
$$

with 

| Variable     | Description |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| $i$          | Input interest rate defined as APR   |
| $y$          | Constant, reflecting the compounding frequency (for Centrifuge Protocol, seconds in a year: 31536000360) |

The Debt $D$ at any point in time based on Principal $P$ for time $t$ (in seconds) can then be calculated as

$$
D = P \cdot rate^{t}
$$

with $t$ reflecting the time period **in seconds** for the on-chain implementation. 

Continuing the simple example from above with `P = $100 and i = 0.06`, the `rate` variable can be calculated as

$$
rate  = 1 + \frac{0.06}{31536000} = 1.00000000190259. 
$$

Assuming the Debt to be outstanding over the course of a year (so t = 31536000), the Debt at the end of the year amounts to:

$$
D = 100 \cdot 1.0000000015854900^{31536000} = 106.1837
$$

which is equal to the result for secondly compounding given by the standard formula from the example above.

If, e.g. the Debt after half a year needs to be calculated, t would be be $(t = \mathtt{y} / 2 = 15768000)$ resulting in a Debt of:

$$
D = 100 \cdot 1.0000000015854900^{15768000} = 103.0455.
$$

Please find a simple calculator for both standard compounding formulas and the on-chain implementation [here](https://docs.google.com/spreadsheets/d/1Q4UMWtyRwhITqOvJtNd7N2IwKZsT0ihEASOFdWKSJVM/edit#gid=0).

### Etherum on-chain number format
Tinlake uses fixed precision decimals for monetary amounts. Interest Rates usually have 27 digits precision and amounts 18 digits precision.
To illustrate, the 1.00000000190259 $rate$ variable representing a 6.00% APR from the example above would be `1000000001902587519025875190` on-chain. The debt of $106.1837 would be `106183700000000000000`.

### Tinlake interest implementation
On Tinlake, the implementation can be found in [github.com/centrifuge/tinlake-math](https://github.com/centrifuge/tinlake-math).
