---
id: investor
title: Investor
category: subpage
contributors: <Graham Nelson:graham@k-f.co>
---

# Investor

Investors participate in Centrifuge pools by investing in share tokens, gaining exposure to tokenized strategies offered by issuers or curators. Each pool is customizable, so access, currency, and liquidity terms can vary.

## Access requirements

Each pool defines its own permissioning logic. Before investing, ensure you meet the eligibility requirements.

### Whitelisting

Some pools require whitelisting before investment or redemption. This may include:

- KYC/AML verification
- Jurisdictional restrictions
- Wallet pre-approval

Whitelisting can apply to:

- **Investing only**
- **Redeeming only**
- **Both investing and redeeming**

You’ll be notified during the process if your address must be whitelisted before interacting with the pool.

## Supported currencies

The currencies accepted for investment are defined per pool. Common options include:

- USDC
- Other pool assets
- Other ERC-20 tokens approved by the pool’s issuer or curator

Each vault supports one or more investment assets depending on configuration.

## Available chains

Centrifuge operates on a **hub-and-spoke** model. Investors interact with pools on the **spoke chains** where the vaults are deployed.

You can invest directly from any supported chain selected by the issuer or curator, without needing to use the Hub chain yourself.

## Investing

To invest in a pool:

1. Navigate to the pool’s page
2. Review the investment terms
3. Choose the amount and asset to deposit
4. Follow the onchain flow

### Vault behavior

Each pool uses one of the following vault types:

#### Synchronous vaults

- Follow the ERC-4626 standard
- Deposits are instant
- Shares are minted immediately to the investor
- Redemptions are processed through a request-based flow

#### Asynchronous vaults

- Follow the ERC-7540 standard
- Both deposits and redemptions happen in two steps:
  - You submit a `requestDeposit` or `requestRedeem`
  - Later, you complete the action using `claimDeposit` or `claimRedeem`
- Timing depends on the pool’s processing schedule

Make sure to check whether the pool uses a synchronous or asynchronous flow before investing.

<!-- Add UI flows to show what's happening -->

## Redemptions

When withdrawing funds:

- **Synchronous vaults**: Redemptions are requested and fulfilled asynchronously via `requestRedeem` and `claimRedeem`
- **Asynchronous vaults**: Same two-step redemption flow, with timing depending on the pool’s liquidity and policies

Redemptions may be delayed based on vault configuration and available liquidity.

## What to consider

- **Access control**: Ensure your wallet is allowed to invest or redeem
- **Redemption timing**: Async vaults introduce a delay before funds are claimable
- **Chain experience**: Transactions must be performed on the same chain as the pool

Investors are encouraged to read the pool’s documentation or terms carefully before participating.