---
id: interest
order: 3
title: Interest Calculation
category: 5 . Further Information
---
Tinlake uses an interest rate mechanism that is typically implemented as compounding per second. The implementation can be found in [github.com/centrifuge/tinlake-math](https://github.com/centrifuge/tinlake-math).

Below we show abstract examples of how this is calculated:

| Variable | Description |
|----------|-------------|
| $P$ | Principal |
| $D$ | Debt |
| $r$ | interest rate (5% would be 0.05) |
| $n$ | the number of times the interest is compounded, compounding is once per second|
| $t$ | time |


$$
D = P \times (1 + \frac{r}{n})^{nt}
$$

## Example: Interest rate compounding per second

$$
P = 100 \newline
r = 0.05 \newline
n = 3600 * 24 * 365 \newline
t = \text{time in seconds} \newline
$$

Using the formula above, the Debt $D$ after half a year
$(t = 31536000 / 2 = 15768000)$ would be $D = 102.5315$.

After one year ($t = 31536000$) the $D$ would be $105.1271$.


Thus a 5.00% interest rate r compounded every second is equivalent
to an annually compounded rate i of 5.127%.

This rate $i$
could also be calculated directly (using $n = 31536000$):
$$
i = (1 + (0.05 / n)) ^ n  = 1.05127.
$$

### Tinlake Fee

To calculate the Debt, we initialize an interest rate in Tinlake with a variable called `fee`

$$
fee = (1 + r/n)
$$

Fee represents the interest accrued per second in Tinlake.


### Calculate Debt
$$
D = P * fee^t
$$

The debt can be calculated by multipling the principial `P` with `fee` to the power of`t`. The variable `t` represents the time passed in seconds since the loan has been borrowed.

```
Continuing the example from above for annual interest (t = 31536000):

fee = (1 + 0.05 / 31536000) = 1,0000000015854900.
D = 100 * 1,0000000015854900 ^ 31536000 = 105.1271.
```

## Using an annual percentage rate (APR) in Tinlake

The current Tinlake implementation uses an annual percentage rate (APR) as input. Tinlake transforms this annually compounded rate `i` into the equivalent rate used for compounding per secondes `r`. This is achieved by solving the equation:
```
i = (1 + r/n)^n
```
for `r`:
```
r = n * (i^(1/n)-1)
```

Using the calculated `r` compounding every second leads to the same amount of debt like using `i` compounding annually over the course of a year. Thus, the calculated `r` can be used to achive an interest per year (APR) behaviour with the compounding per second implementation in Tinlake.`

```
Continuing the example from above with an 5.00% annual interest rate (APR):

i = 1.05
n = 600 * 24 * 365 (= 31536000 seconds per year)
t = 31536000

r = 31536000  * ((1.05^(1 / 31536000) - 1) = 0.0487902
fee = (1 + 0.0487902 / 31536000) = 1,0000000015471300.
D = 100 * 1,0000000015471300 ^ 31536000 = 105.00
```

`Note: Values in our contract are fixed precision decimals with 27 digits precision.`
