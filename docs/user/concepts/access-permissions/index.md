---
id: access-permissions
title: Access and permissions
category: subpage
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---

# Access and permissions

Access to a product is enforced onchain. This page covers the memberlist that governs who can interact with a token, the compliance controls built on top of it, and the distribution patterns they produce.

## The memberlist model

Products can apply memberlist requirements separately to subscriptions, redemptions and token transfers. When an offering requires KYC/AML verification, anti-money laundering or other eligibility checks, those checks take place through the issuer's onboarding process. Once approved, the investor's address is added to the relevant memberlist through the Management app.

Two properties are worth remembering:

- **Access is granted per network.** An investor approved on one network is not automatically approved on the others.
- **Enforcement is onchain.** Restricted actions are checked by the token and vault contracts and do not settle when their requirements are not met.

## Compliance controls

Beyond the memberlist, each share token supports controls that can be operated throughout the product's life:

- **Action level rules**: depending on the selected restriction profile, subscriptions, redemptions, P2P transfers and crosschain transfers can be checked differently. A product can require approval to subscribe while allowing free secondary market transfers, or restrict crosschain transfers for specific addresses without affecting their vault activity.
- **Freeze and unfreeze**: an authorized manager can freeze a specific address, blocking the operations covered by the token's restriction profile, and unfreeze it when appropriate.
- **Token recovery**: an authorized manager can recover tokens from a lost or compromised wallet through a forced transfer, supporting recovery requirements common to institutional products.
- **Controlled issuance**: only authorized balance sheet managers can issue or revoke tokens.
- **Delegated compliance management**: multiple authorized managers can manage a token's compliance state, allowing responsibilities to be divided across approved teams or wallets.

These controls can be managed centrally from the pool's hub. For example, a batch of investors can be added to the memberlist across the selected networks in one action, avoiding separate updates on each network.

Products with specific requirements can use custom rules, such as maximum holder counts, minimum investment sizes, lockup periods or jurisdiction based restrictions. A share class's restriction profile can also evolve without redeploying the token.

For the underlying mechanism, see [Token compliance](/developer/protocol/features/token-compliance/) in the developer documentation.

## Transfer-control patterns

Combined, these controls produce very different distribution models on the same infrastructure. Common restriction profiles include:

- **Fully restricted**: subscription, redemption and transfers all require membership. Transfers only settle if the receiver is on the memberlist too. The classic institutional fund share.
- **Transferable but gated**: the memberlist applies to subscriptions and redemptions, while transfers are unrestricted. The token can circulate in DeFi, but redeeming against the pool still requires the holder to be a member.
- **Redemption gated**: subscription and transfers are open, and only members can redeem.
- **Open with freeze controls**: operations are open, and the issuer retains the ability to freeze specific addresses if required.

A product can also run fully open, with no restrictions at all. These controls are not fixed at launch, and the issuer can update them as the offering evolves.
