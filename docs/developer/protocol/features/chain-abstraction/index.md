---
id: chain-abstraction
title: Multi-chain asset management
category: subpage
contributors: <Jeroen:jeroen@k-f.co>
---

# Multi-chain asset management

The Centrifuge protocol is designed to scale tokenized assets across multiple blockchains using a hub-and-spoke architecture. This model solves a fundamental limitation of traditional tokenization protocols: the inability to efficiently operate across chains.

## The problem with isolated multi-chain tokenization

In legacy designs, each token is issued on each network, fully isolated. That means if a pool wants to make its asset available across Ethereum, Base, and Arbitrum, it must issue three separate tokens - one on each chain. Each version of the token has to be deployed, managed, and reconciled separately.

This model introduces operational overhead:

* Each chain requires its own custodian setup or self-custody wallet.
* Gas tokens must be managed on every chain.
* Blockchain endpoints must be monitored and maintained.
* Token accounting becomes fragmented and complex.

This approach does not scale in a multi-chain world, where asset issuers increasingly seek access to liquidity across many L1s and L2s. Managing each chain as a silo creates complexity and risk, making cross-chain tokenization inefficient and brittle.

## Centrifuge’s hub-and-spoke solution

Centrifuge solves this challenge with a hub-and-spoke architecture. Each pool selects a single hub chain, its source of truth and control, and issues assets and vaults across any number of spoke chains.

![](./images/hub-and-spoke.png)

The hub chain serves as the control layer for the pool. It holds the authoritative state of the pool, its vaults, and the overall accounting.

The spoke chains are where tokens are deployed and liquidity is accessed. These include Ethereum, Base, Arbitrum, and other supported networks.

## Scalable interoperability

To make this possible, Centrifuge includes a robust messaging system between the hub and spoke chains. This system is designed to handle large-scale cross-chain activity with minimal overhead and maximum security.

### Multi-message aggregation

To increase the security of cross-chain communication, the protocol integrates multiple interoperability providers. Each message is sent along with multiple independent proofs, allowing verification through more than one interoperability provider. This reduces the risk of a single interoperability provider impacting the security of the system.

### Automatic batching of messages

Centrifuge automatically groups multiple messages together whenever possible, into a single payload and set of proofs. This reduces the total number of relayed messages and significantly lowers gas costs.

Batching is handled by the protocol itself, requiring no configuration from pool deployers.

### Automatic gas subsidies

The protocol also includes automatic gas subsidies for users of a pool, such that:

* Gas payments can be subsidized or reimbursed by the pool manager
* Pool users do not need to hold native gas tokens on each spoke chain
* Centrifuge relays gas tokens automatically between chains to fund transactions

These features remove the burden of managing gas on multiple chains and create a seamless user experience, even when interacting with vaults across different networks.

### Built-in retries and repayments

Message execution across multiple chains can fail for several issues. To reduce the overhead, the protocol implements:

* Built-in repayment method for messages that were underfunded with gas
* Automatic retry logic for failed messages

This ensures that cross-chain actions are reliably executed without requiring manual intervention from the pool manager or end user.