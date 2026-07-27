---
id: access-permissions
title: Access and permissions
category: subpage
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---

# Access and permissions

## The whitelisting model

Products can apply whitelist requirements separately to subscriptions, redemptions and token transfers. When an offering requires KYC/AML verification, anti-money laundering or other eligibility checks, those checks take place through the issuer's onboarding process. Once approved, the investor's address is added to the relevant whitelist through the Management app.

Two properties are worth remembering:

- **Access is granted per network.** An investor approved on one network is not automatically approved on the others.
- **Enforcement is onchain.** Restricted actions are checked by the token and vault contracts and do not settle when their requirements are not met.

## Transfer-control patterns

Combined, these controls produce very different distribution models on the same infrastructure. Common restriction profiles include:

- **Fully restricted** — subscription, redemption and transfers all require the whitelist. Transfers only settle if the receiver is whitelisted too. The classic institutional fund share.
- **Transferable but gated** — the whitelist applies to subscriptions and redemptions, while transfers are unrestricted: the token can circulate in DeFi, but redeeming against the pool still requires the holder to be whitelisted.
- **Redemption gated** — subscription and transfers are open; only whitelisted investors can redeem.
- **Open with freeze controls** — operations are open, and the issuer retains the ability to freeze specific addresses if required.

These controls are not fixed at launch: the issuer can update permissions as the offering evolves.
