---
id: nav
title: NAV and share prices
category: subpage
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---
import navPanel from '../images/NAV_panel.jpg';
import updateNav from '../images/update_NAV.jpg';

# NAV and share prices

The manager publishes the valuation used to determine each share class's share price from the Assets section of the Management app. The valuation follows the methodology established for the product, while the resulting share price becomes its onchain reference price.

For the distinction between share prices, asset prices and the conversion performed by vaults, see [Pricing](/user/concepts/pricing).

## Publishing a NAV update

An update can be entered as a total NAV or as a NAV per share. Before submitting, the app previews the resulting price per token on every network where the token is deployed, so the manager sees the current and new prices side by side.

Once published, the update is propagated to every network. The app shows the status of each deployment and flags any network still awaiting the update, making price alignment easy to verify.

<img
  src={updateNav}
  className="screenshot"
/>
> Update NAV modal.

<img
  src={navPanel}
  className="screenshot"
/>
> The NAV section of the app.
