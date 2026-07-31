---
id: launching-a-product
title: Launching a product
category: subpage
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---
import access from '../images/access.jpg';

# Launching a product

Getting a product onto Centrifuge begins with an onboarding intake. Prospective issuers provide a small set of launch parameters and the pool is then registered onchain. Once registered, its ongoing configuration and operations are managed through the Management app.

The initial parameters are deliberately limited. Other product components — including distribution networks, token permissions, vaults, accepted investment assets and pricing configuration — can be configured after the pool exists. The hub chain and denomination cannot be changed later, so they require particular consideration before launch. The hub chain is where the pool's controls and accounting live — see [Hub and spokes](/user/concepts/pools#hub-and-spokes).

| Required parameter | Notes |
|---|---|
| Hub chain | Where the pool is managed. Cannot be changed later. The default is Ethereum. |
| Denomination | Unit of account for pricing and accounting. Cannot be changed later. The default is USD. |
| Hub manager wallet | Registered as pool admin at creation. Additional hub managers can be added or removed later. |
| Token name | ERC-20 name, 1 to 128 characters. Changeable later. |
| Token ticker | ERC-20 symbol, 1 to 32 characters. Changeable later. |

## Hub manager setup

The hub manager wallet requires particular care before launch. Hub managers have top-level control over the pool: they can deploy tokens and vaults, set prices, update investor permissions, configure crosschain connectivity and grant or revoke manager roles.

Any hub manager can remove another hub manager, including the original admin. The protocol does not prevent the final hub manager from being removed, so changes to this role should be made deliberately.

Recommended practice:

- Multi-party computation (MPC) custody is the recommended default, with a policy requiring more than one approver and destinations restricted to approved Centrifuge Hub contracts.
- A multisig is also suitable, with a threshold of at least 3-of-5. Signers should use separate hardware wallets held by different people, with at least one device kept offline as a recovery signer.
- Keep the admin wallet separate from operational addresses used for issuance and price updates.
- Keep the admin wallet funded with the native gas asset required by its hub chain, including enough to cover crosschain messaging.

## Roles and permissions

Operating a product is a team effort, and the pool separates duties into distinct administrative roles. All of them are granted and revoked from the app's access settings, and every change takes effect onchain:

- **Hub managers** — full control over the pool's configuration: tokens, permissions, pricing and the other roles. The top-level administrators of the product.
- **Balance sheet managers** — authorized to move the product's assets in and out of the pool's balance sheet. Granted per network, so operational reach can be scoped to where each operator works.
- **Policy-based managers and operators** — contract-based operators, such as Merkle Proof Managers and Onchain Portfolio Managers, that execute pre-approved operations within limits defined by the issuer (see [Operations and automation](/user/issuer/operations-automation)).

This separation keeps day-to-day operations away from top-level control: an operator can run the product's routine flows without being able to change its configuration. For guidance on securing the hub manager wallet, see [Hub manager setup](#hub-manager-setup).

<img
  src={access}
  className="screenshot"
/>
> Settings access section showing the managers of a pool.
