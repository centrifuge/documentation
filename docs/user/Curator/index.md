---
id: curator
title: Curator
contributors: <Graham Nelson:graham@k-f.co>
---

# Curators

Curators are specialized participants in the Centrifuge protocol who manage and create tokenized strategies by managing asset allocation and NAV within pools. Unlike issuers, curators do not originate assets but **invest in existing ones**, including assets from other Centrifuge pools (e.g. JTRSY) or any DeFi asset.

## Key Differences from Issuers

1. **Asset Allocation**  
   Curators configure pools that allocate capital into other assets and not necessarily those originated by themselves. These assets can be on-chain tokens, other Centrifuge pool tokens, or DeFi strategies.

   Some examples of asset allocations: 
   - RWA's issued by Anemoy 
   - Leveraged stablecoin strategy 
   - Stablecoin yield index fund 
   - Combination of the above

   See more below regarding the **Merkle Proof Manager** which curators can leverage to enhance security and enforce programmable strategies

2. **NAV Management**  
   They actively manage and update the Net Asset Value (NAV) of their pools, tracking underlying asset performance and price.

3. **Custom UI & Interfaces**  
   Curators can build their own front-end on top of the Centrifuge pool interface to manage distribution, user experience, and reporting. 

   Curators should co-ordinate with the Centrifuge team if they want their pool to visible on the Centrifuge UI. 

4. **Vault Configuration**  
   Curators choose between:
   - **Synchronous vaults** (with real-time liquidity)
   - **Asynchronous vaults** (with delayed withdrawal or investment periods)
   - Or a combination of both, depending on the strategy

---

## Merkle Proof Manager

Curators can leverage the **Merkle Proof Manager** to enhance security and enforce programmable strategies.

> Learn more: [Merkle Proof Manager →](/developer/protocol/managers/merkle-proof-manager/)

The Merkle Proof Manager is a smart contract module that enforces **policy-based call restrictions** using Merkle proofs. It enables pool managers to **predefine and limit contract interactions**, ensuring secure strategy execution.

### Benefits

- Ensures only authorized contract calls are executed
- Offers fine-grained control over target addresses and calldata
- Enables composable but secure integrations

---
