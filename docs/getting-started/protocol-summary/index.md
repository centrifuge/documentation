---
id: protocol-summary
title: Centrifuge Protocol
contributors: <Devin Black:devin@k-f.co>
---

# The Centrifuge Protocol 
Centrifuge V3 is a new, fully open-source protocol for tokenization and tokenized financial products that follows a hub-and-spoke design. The code can be deployed on any EVM-compatible network, and every deployment automatically links to the others, creating a single multi-chain fabric for real-world asset (RWA) tokenization and distribution.
This next evolution of Centrifuge represents an open, non-opinionated set of immutable smart-contracts that users can use directly or build on top of to realize their specific use-cases and fulfill their business logic needs. 

## Core ideas

* **Hub and spoke model**
    * *Hub*: one chain selected by the operator  to serve as the operational back-office. All bookkeeping and control actions for a tokenization flow through this chain.
    * *Spokes*: additional chains that act as separate balance sheets. Tokens can be issued, transferred, or redeemed on any spoke; Assets can be deposited or withdrawn to the balance sheet on their origination chain, the hub consolidates each spoke’s balances into one coherent view.

* **Multi-asset pools**
    * Every operator operates a **pool** on the hub chain.
    * A pool consists of multiple **tokens**.
    * A pool holds assets that belong to tokens.
    * Any compatible onchain asset can be held - ERC-20, ERC-721, ERC-6909.
    * Tokens represent ownership of the assets held in the pool for this token.
    * Tokens are issued and revoked on any chain through the spokes;
    * Burn-and-mint mechanics allow 1:1 transfers of tokens between chains. Allowing tokens to flow where they have the highest utility and composability without making a compromise on the security and reliability of the token.
    
* **Multi-asset liquidity**
    * Operators choose which assets they accept as liquidity on a specific spoke
    * Accept multiple assets as liquidity; Tokens can be distributed against multiple assets, allowing to bundle liquidity and limiting operational overhead for targeting multiple asset. 
    * Distribute tokens against exotic asset as long as they are ERC-20, ERC-721, ERC-6909 compatible.

* **Protocol-level chain abstraction**
    * Operators interact only with the hub; the protocol relays state changes to all spokes.
    * Liquidity providers can choose the chain they already use, while still accessing the same underlying tokens.
    * Interaction between hub and spokes are secured by a per-pool multi-bridge approach; Operators choose which and how many bridges a message must be relayed over until it is deemed valid. Giving them full control about the security of their operations.  

* **Open infrastructure and extendability**
    * Core of the protocol is non-opinionated
    * Protocol provides vault implementations for ERC-4626 and ERC-7540 vaults; Extensively audited and tested, to accelerate go-to-market times.
    * Operators are free to provide their own vault implementations or extend the access to their balance sheet on the spokes.
    * Valuation of assets and tokens can be extended depending on the business logic needed. 

## Use-cases
Centrifuge V3 is the open infrastructure for tokenized financial products. While the protocol does provide all means to tokenize offchain structures, it is build openly, allowing other protocols to build on top.    

* Tokenize and distribute offchain equity; The core of the protocol is designed to reflect the complexity and flexibility needs of offchain operations.
* Build use-case specific business logic on top of the protocol - From tranched securitization to multi-shareclass fund structures - the world of smart contracts is the limit.  
* Construct portfolios on multiple chains and tie them together into a single token; Extending the existing possibilities of portfolio managers/curators beyond a single chain.  

## Next steps
* Dive deeper into the core [concepts](/user/concepts)
* Explore how specific [user](/user/user) interact with the protocol
* Review contract interfaces for pools, share classes, and assets.
* Explore our [testnet deployments](/user/deployments) and get familiar with the system

For more details see our [User documentation](/user) and our [Developer documentation](/developer)
