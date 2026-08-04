---
id: asset-liquidity
title: Asset and liquidity
category: subpage
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---
import registerAsset from '../images/register_asset.jpg';
import onoffRamp from '../images/onoff_ramp.jpg';
import holdings from '../images/holdings.jpg';
import holdingsWithdraw from '../images/holdings_withdraw.jpg';

# Asset and liquidity

The pool has its own balance sheet, made up of the assets backing the product, held and tracked per network. This section covers how managers register assets, monitor holdings and move liquidity in and out of the product securely.

## Registering assets

Additional assets can be registered for use in the pool's balance sheet and operational flows. A registered asset can become an investor entry point when the manager deploys a vault that accepts it (see [Distribution](/user/manager/distribution)).

<img
  src={registerAsset}
  className="screenshot"
/>
> Asset registration section.

## Holdings

The Holdings view shows the pool's balance sheet per network: each position with its quantity, price and value, and the total value at the top. From the same view, the manager can deposit assets into the balance sheet, withdraw them through the configured off-ramp, and export the holdings for reporting.

<img
  src={holdings}
  className="screenshot"
/>
> Holdings view.

## Secure on/off-ramps

On/off-ramps define how assets move in and out of the pool. They are a one-time setup, configured per network in the pool's settings, that establishes in advance which assets can enter the balance sheet and which approved destinations can receive withdrawals:

- **Deposit assets (on-ramp)**: the assets the pool accepts through the ramp.
- **Withdraw addresses (off-ramp)**: the only destinations that can receive withdrawals, each with a public label.
- **Relayers**: the addresses authorized to trigger withdrawals.

<img
  src={onoffRamp}
  className="screenshot"
/>
> Settings On/Off Ramp section.

Once configured, the flows are simple and constrained by construction:

- **On-ramping is automatic**: assets are sent to the designated manager address. Once received, an automated service forwards them into the pool's balance sheet through the configured on-ramp. After the one-time setup, no additional action in the app is required for each transfer.
- **Off-ramping is restricted**: a withdrawal, initiated from the Holdings view by an authorized relayer, can only reach one of the pre-approved addresses. Funds can never leave the pool to an arbitrary destination.

<img
  src={holdingsWithdraw}
  className="screenshot"
/>
> Withdraw dialog from the Holdings view showing the allowlisted destinations.

These controls are separate from vaults. Vaults define how investors subscribe and redeem, while on/off-ramps support the manager's balance sheet and settlement operations.
