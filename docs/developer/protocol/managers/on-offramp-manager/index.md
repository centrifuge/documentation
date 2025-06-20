---
id: on-off-ramp-manager
title: On/Off Ramp Manager
category: subpage
contributors: <Jeroen:jeroen@k-f.co>
---

# On/Off Ramp Manager

The **On/Off Ramp Manager** in the Centrifuge Protocol is a smart contract responsible for managing the flow of ERC20 assets between external wallets and the pool's internal balance sheet. It ensures secure, efficient, and compliant asset movement via well-defined onramping and offramping mechanisms.

## Onramping (Deposits)

Anyone can initiate the onramp process, provided the following conditions are met:

* The asset is on the **approved token list**.
* ERC20 tokens have already been transferred to the On/Off Ramp Manager's address.

#### How it works

1. A user transfers approved ERC20 tokens to the On/Off Ramp Manager contract.
2. Anyone (including the user or a third party) can then call the contract to finalize the onramp.
3. The tokens are credited to the internal balance sheet of the pool.

---

## Offramping (Withdrawals)

Offramping is restricted to enhance security and compliance. Only **predefined relayers** can initiate a withdrawal to a **predefined recipient (offramp) account**.

#### Key features

* Only authorized relayers can execute withdrawals.
* Offramp accounts must be preconfigured and recognized by the pool.
* Relayers act as regulated bridges between the pool and external accounts.
