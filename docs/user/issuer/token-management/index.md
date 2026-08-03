---
id: token-management
title: Token management
category: subpage
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---
import settings from '../images/settings.jpg';
import investors from '../images/investors_view.jpg';
import updateShareClass from '../images/update_share_class.jpg';

# Token management

Token management covers the token over its whole life: what it represents, where it is deployed, the rules that govern who can hold and move it, and the day-to-day management of the investor base.

## The token is the ownership layer

Each share class of the pool is represented by a token. The token is what investors hold, what carries the price, and what moves. It can be distributed to multiple chains and, depending on how the issuer configures it, traded or sold on DeFi protocols.

A pool can have a single token or several, each with its own terms.

<img
  src={settings}
  className="screenshot"
/>
> Settings section to manage products and share classes

## Deploying the token to networks

A share class is defined in the pool. Deploying it creates its token on the networks where the product will be distributed. The flow runs from the same settings section:

1. The issuer opens the share class to update it.
2. In the Networks panel, they add all target networks. The selected compliance mode determines whether the same built-in restrictions apply across deployments or each network uses a custom hook.
3. Saving the changes starts the deployment to every newly selected network as one coordinated action from the Hub.

Whether the token launches on one network or on five, it is one step, with no per-chain deployment project. Each deployment remains part of the same share class, and more networks can be added later as distribution grows (see [Distribution](/user/issuer/distribution)).

<img
  src={updateShareClass}
  className="screenshot"
/>
> Update share class modal with several networks being added.

## Transfer restrictions

Subscription, redemption and transfer permissions are three configurable dimensions applied per token. This makes very different distribution models possible on the same infrastructure. Common restriction profiles include:

- **Fully restricted**: subscription, redemption and transfers all require membership. Transfers only settle if the receiver is on the memberlist too. The classic institutional fund share.
- **Transferable but gated**: the memberlist applies to subscriptions and redemptions, while transfers are unrestricted. Where integrations and liquidity are available, the token can be traded or used as collateral in DeFi. Redemption against the pool still requires the holder to be a member.
- **Redemption gated**: subscription and transfers are open, and only members can redeem.
- **Open with freeze controls**: operations are open, and the issuer retains the ability to freeze specific addresses if required.

These controls are scoped per token, not per pool. Each share class carries its own restriction profile and its own memberlist, so two classes of the same product can follow different distribution models. And they are not fixed at launch, as permissions can be updated from the app as the offering evolves. Who is on the memberlist is a separate, day-to-day operation (see [Investor management](#investor-management)).

## Investor management

For permissioned products, the issuer controls which addresses can subscribe and redeem. Onboarding an investor (after the KYC/AML or eligibility process the offering requires) ends with adding their address to the token's memberlist in the app. The addition takes effect onchain on the selected networks. Access is gated per token and per network. The memberlist belongs to the share class the investor is approved for, and approval on one network is not automatically extended to the others.

Beyond adding investors, the app works as the operational console for the investor base:

- View investors and their holdings per network, with search and filters by network and status.
- See each investor's queued and pending investments and redemptions.
- Add several investors at once and label addresses to identify them easily in the app.
- Add or remove addresses from the memberlist as the offering requires.
- Freeze and unfreeze accounts when intervention is needed.
- Review an investor's transaction history, and export investors and transactions to CSV for reporting.

<img
  src={investors}
  className="screenshot"
/>
> Investors view with the option to add new investors.
