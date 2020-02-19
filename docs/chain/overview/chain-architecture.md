---
id: chain-architecture
order: 2
title: Centrifuge Chain Architecture
category: 1. Overview
---

## Chain Architecture
 
Centrifuge Chain will use its own native token - the Radial (RAD) token. It will also incentivize Validators and Nominators to participate through a block reward.

Centrifuge Chain is built on [Parity Substrate](https://substrate.dev), and relies on staked Validators to come to consensus over 3 components to commit blocks to the blockchain:
* BABE - block production/authorship
* GRANDPA - finality gadget
* NPoS - Validator selection algorithm

Any node can offer itself as a Validator candindate, but only a limited number will be selected. Only top Validators by stake are elected into the Validator Set. Validators can stake their own RAD and can be elected by staked Nominators.

Validators must run a full node and directly particiate in block authorship, finality, and validity checks. They are able to choose a reward commission that is taken up-front from the reward before splitting the remainder with Nominators. 

Validators must stay online and available with very high up-time. They will be held responsible and incur slashing penalties for deliberate attacks, running modified software, severe bugs in the code, and unresponsiveness, to name just a few slashing conditions.

For a deeper dive into the architecture and economics of Centrifuge Chain, read our **[Token Design Specification](https://docs.google.com/document/d/1T4DF3XHs8l4gTzpnk6KASpD4JWjSoIWzxNX6DyVz__Q/edit?usp=sharing)**.
