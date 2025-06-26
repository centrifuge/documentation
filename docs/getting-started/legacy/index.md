---
id: legacy
title: Legacy
contributors: <Frederik Gartenmeister:frederik@k-f.co>
---

# Legacy Protocols
Centrifuge was founded with the vision of bringing real-world financial products on-chain, and its journey can be traced through three major protocol generations, with [Centrifuge V3](/getting-started/protocol-summary) being the latest one.

**2017 – The first on-chain tokenized credit system**
The team’s initial milestone was building one of the earliest tokenized financing systems on Ethereum. Even in its earliest form, the protocol showed how off-chain receivables—such as invoices or loan agreements—could be represented by ERC-20 tokens, opening traditional credit markets to the emerging world of DeFi.

**2020 – Centrifuge V1 (“Tinlake”)**
Launched as an end-to-end securitization engine, Tinlake combined:

* **On-chain smart contracts:** a two-tranche structure (“TIN” for junior / first-loss investors and “DROP” for senior investors) that automated interest accrual, repayments, and waterfall distributions.
* **Off-chain P2P deal room:** parties could negotiate and digitally sign legal agreements; once finalized, the resulting claims were “minted” as non-fungible asset NFTs on Ethereum.
* **Dual-token approach:** every real-world asset produced two sets of tokens—asset tokens that tracked principal/interest and share tokens that represented senior or junior exposure.

Tinlake’s most notable achievement was its integration with MakerDAO’s credit line. Approved issuers could lock DROP tokens as collateral and mint DAI, proving that real-world assets could back a major stablecoin. Yet Tinlake also exposed Ethereum’s limitations: gas prices made large-scale credit operations costly and slow.

**2021 – Centrifuge V2 on Substrate**
To overcome scalability constraints, development pivoted to a dedicated L2 built with the Substrate framework (and later connected to Polkadot as a parachain). Goals for V2 included:

* **Greater flexibility:** developers could model classic multi-tranche securitizations or simpler single-share funds within the same contract set.
* **Higher throughput & lower fees:** Substrate’s modular architecture provided block-level customization and a path to sub-second finality—crucial for high-volume asset minting and frequent interest calculations.

**2023 – Solving fragmented liquidity**
While V2 handled throughput, liquidity was still scattered across Ethereum, Polygon, and other networks. Centrifuge answered with *Liquidity Pools*—EVM-compatible bridge contracts that let capital flow into Centrifuge regardless of its origin chain. Investors could commit funds on their preferred network, while issuers tapped unified liquidity on the Centrifuge parachain.

**Today - Centrifuge V3 - An open, multi-chain tokenization product**
The latest iteration of Centrifuge is a multi-chain tokenization product, deployable on any EVM chain, connected between all deployments - Read more [here](/getting-started/protocol-summary). 
