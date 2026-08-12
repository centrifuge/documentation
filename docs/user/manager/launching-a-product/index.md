---
id: launching-a-product
title: Launching a product
category: subpage
contributors: <Alonso Rodriguez:alonso@centrifuge.io>
---
import access from '../images/access.jpg';
import walletPatterns from '../images/wallet-access-patterns.png';

# Launching a product

Launching a product on Centrifuge requires a small set of launch parameters. Once they are provided, the pool is registered onchain, and from that point its configuration and operations are managed through the Management app. To begin, managers can get in touch through [centrifuge.io](https://centrifuge.io).

The initial parameters are deliberately limited. Other product components (including distribution networks, token permissions, vaults, accepted investment assets and pricing configuration) can be configured after the pool exists. The hub chain and denomination cannot be changed later, so they require particular consideration before launch. The hub chain is where the pool's controls and accounting live (see [Hub and spokes](/user/concepts/pools#hub-and-spokes)).

| Required parameter | Notes |
|---|---|
| Hub chain | Where the pool is managed. Cannot be changed later. The default is Ethereum. |
| Denomination | Unit of account for pricing and accounting. Cannot be changed later. The default is USD. |
| Hub manager wallet | Registered as pool admin at creation. Additional hub managers can be added or removed later. |
| Token name | ERC-20 name, 1 to 128 characters. Changeable later. |
| Token ticker | ERC-20 symbol, 1 to 32 characters. Changeable later. |

## Hub manager setup

The wallet supplied at launch is registered as the pool's initial hub manager. Hub managers have top-level control over the pool: they can deploy tokens and vaults, set prices, update investor permissions, configure crosschain connectivity and grant or revoke manager roles.

Any hub manager can remove another hub manager, including the one registered at launch. The protocol also permits the final hub manager to be removed, which leaves the pool without top-level administrative access.

## Roles and permissions

Operating a product is a team effort, and the pool separates duties into distinct administrative roles. All of them are granted and revoked from the app's access settings, and every change takes effect onchain:

- **Hub managers**: full control over the pool's configuration, including tokens, permissions, pricing and the other roles.
- **Balance sheet managers**: when required, authorized to move the product's assets in and out of the pool's balance sheet. The role is granted per network, so its scope can be limited to specific networks.
- **Policy-based managers and operators**: contract-based operators, such as Merkle Proof Managers and Onchain Portfolio Managers, that execute pre-approved operations within limits defined by the manager (see [Operations and automation](/user/manager/operations-automation)).

These roles separate top-level pool configuration, network-specific balance sheet operations and the execution of pre-approved workflows.

<img
  src={access}
  className="screenshot"
/>
> Settings access section showing the managers of a pool.

In practice, a single MPC wallet can serve as the hub manager and, where required, be granted additional protocol roles. Rather than using separate wallets for hub administration and routine hub operations, its custody policy can apply different approval thresholds based on the transaction. High-risk actions, including pool administration and balance sheet movements, should use stricter approvals. These thresholds are enforced by the MPC policy, not by separate roles in the core protocol.

<img
  src={walletPatterns}
/>
> A single MPC wallet with function-specific approval thresholds.
