---
id: cfg_bridge
order: 2
title: CFG<>wCFG Bridge
contributors: <Lucas Vogelsang:lucas@centrifuge.io>
---

The **CFG** token lives natively on Centrifuge Chain but can be bridged to Ethereum and used as an ERC20 token. The ERC20 Token is called **wCFG** on Ethereum and has the address `0xc221b7E65FfC80DE234bbB6667aBDd46593D34F0` on Ethereum mainnet.

## How are CFG & wCFG different?
Each wCFG is backed by one CFG locked up in the bridge account on Centrifuge Chain when moved over to Ethereum and you can move between Ethereum and Centrifuge at any time without any restrictions.

Using **CFG** on Centrifuge Chain allows you to:
* Stake and earn staking rewards
* Participate in governance
* Pay for fees on Centrifuge Chain

Using **wCFG** on Ethereum allows you:
* To interact with DeFi apps that support ERC20 tokens
* Use it within Ethereum and hold it in your Ethereum wallet.

## How to use the bridge?
We are planning to release an easy to use UI for the bridge in early July. Please check back here later.

## Technical Architecture of the Bridge
The bridge used by Centrifuge is a trusted relayer bridge. This means a set of relayers are trusted with relaying messages between Ethereum and Centrifuge chain. When assets are moved between the change these relayers pick up the message on Centrifuge chain and trigger a transaction in Ethereum or vice versa. The bridge is built by [ChainSafe](https://chainsafe.io) in collaboration with Celo, Aragon and ETH Classic. [Read ChainSafe's announcement](https://medium.com/chainsafe-systems/chainsafe-building-chainbridge-49d51ff2e0a2) to learn more about the bridge.

Want to run your own bridge? Head over to: [Running the bridge](/build/bridge/)
