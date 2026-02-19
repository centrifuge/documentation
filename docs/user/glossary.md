---
sidebar_position: 6
---

# Glossary

Quick reference for terms used throughout the Centrifuge platform.

---

## A

### Asset
A cryptocurrency token (typically a stablecoin like USDC or USDT) that investors use to deposit into vaults and that backs share class holdings.

### Async Vault
The standard vault type using ERC-7540 where deposits and redemptions require manager approval before processing. Contrast with Sync-Invest Vault.

### Approved (Order Status)
An order that has been reviewed and approved by a Hub Manager but not yet executed (shares not yet issued or revoked).

---

## B

### Balance Sheet Manager
A network-specific role that can deposit/withdraw funds to/from holdings and directly issue or revoke shares on their assigned chain. Cannot approve orders or update NAV.

---

## C

### Closed (Order Status)
A completed order where shares have been issued (for investments) or revoked (for redemptions). Historical record only.

---

## D

### Deposit
The act of an investor sending assets to a vault to request share tokens, or a manager adding funds to holdings.

---

## E

### Epoch
A time-based grouping for orders. Orders are processed in epoch order (oldest first) to ensure fair treatment of investors.

### ERC-4626
An Ethereum standard for tokenized vaults. Used in Sync-Invest vaults for instant deposit functionality.

### ERC-7540
An Ethereum standard for asynchronous tokenized vaults. The basis for Centrifuge's vault system where deposits and redemptions can be queued and approved.

---

## F

### Fireblocks
An MPC custody provider recommended for institutional fund operations. Provides enterprise-grade wallet infrastructure with policy-based approvals.

### Fordefi
An MPC custody provider recommended for institutional fund operations. Offers built-in policy controls and a native dApp browser.

### Freeze
A temporary block on an investor preventing new deposits or redemptions while preserving existing holdings. Reversible by unfreezing.

---

## H

### Holdings
Onchain escrow accounts storing assets (like stablecoins) on behalf of a share class. Used to fund redemption payouts and represent pool liquidity.

### Hub
The primary blockchain (typically Ethereum) where the pool is deployed and where Hub Managers operate. Part of the hub-and-spoke architecture.

### Hub Manager
The highest permission level. Can update NAV, approve orders, issue/revoke shares, manage investors, configure vaults, and add/remove other managers. Also called Pool Manager or Hub Admin.

---

## I

### Investment
An investor's deposit request to purchase share tokens. Goes through pending, approved, and closed stages.

### Issue Shares
The act of minting new share tokens and distributing them to investors after their investment has been approved.

---

## M

### Merkle Proof Manager
An advanced manager type using cryptographic proofs to enforce complex withdrawal policies. Configured with strategists who define JSON policy files.

### MPC (Multi-Party Computation)
A cryptographic technique where private keys are split across multiple parties and never fully assembled. Used by custody providers like Fireblocks and Fordefi for enhanced security.

### Multi-sig
A wallet requiring multiple signatures to execute transactions. Safe (Gnosis Safe) is the most common multi-sig solution.

---

## N

### NAV (Net Asset Value)
The total value of all assets in a share class, denominated in the pool's base currency. Used to calculate price per share.

### Network
A blockchain where vaults and holdings can be deployed (e.g., Ethereum, Base, Arbitrum, Avalanche).

---

## O

### On/Off-Ramp Manager
A specialized manager for handling structured fund movements with configured relayers (who can execute withdrawals) and receivers (approved destination addresses).

---

## P

### Pending (Order Status)
An order waiting for manager approval. The first stage after an investor submits a deposit or redemption request.

### Pool
A Centrifuge structure containing one or more share classes, configured with specific assets, networks, and manager permissions.

### Price Per Share
The value of one share token, calculated as Total NAV divided by Total Share Supply. Also called token price.

---

## Q

### Queued (Order Status)
Orders waiting to become pending. Occurs when there are already pending orders for the same asset/network that must be processed first.

---

## R

### Receiver
A pre-approved destination address for withdrawals when using an On/Off-Ramp Manager. Relayers can only withdraw to configured receivers.

### Redemption
An investor's request to exchange share tokens for underlying assets. Goes through pending, approved, and closed stages.

### Relayer
An address authorized to execute withdrawals to approved receiver addresses through an On/Off-Ramp Manager. Cannot withdraw to arbitrary addresses.

### Revoke Shares
The act of burning share tokens and sending the corresponding asset value to investors as part of processing a redemption.

---

## S

### Safe
A multi-signature wallet (formerly Gnosis Safe) requiring multiple approvals before transactions execute. Recommended for institutional operations.

### Share Class
A specific token type within a pool, with its own NAV, pricing, and investor list. A pool can have multiple share classes (e.g., senior/junior tranches).

### Share Token
The ERC-20 token investors receive representing their ownership in a share class. Value determined by NAV and total supply.

### Spoke
A secondary blockchain connected to the hub where vaults and holdings can be deployed. Part of the hub-and-spoke architecture.

### Strategist
An address with authority to define withdrawal policies for a Merkle Proof Manager using JSON policy files.

### Sync-Invest Vault
A hybrid vault type where deposits are processed instantly (synchronous) while redemptions remain asynchronous. Requires a price oracle and max deposit configuration.

---

## T

### Token Price
See Price Per Share.

---

## V

### Vault
An ERC-7540 smart contract serving as the entry point for investor transactions. Accepts deposits in a specific asset on a specific network and connects to a share class.

---

## W

### Whitelist
The list of investor addresses approved to interact with a share class on a specific network. Investors must be whitelisted before they can deposit.

### Withdrawal
The act of removing assets from holdings, either to a manager's wallet (Balance Sheet Manager) or to approved receiver addresses (Relayer).
