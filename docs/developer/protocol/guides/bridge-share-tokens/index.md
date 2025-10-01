---
id: bridge-share-tokens
title: Bridge share tokens
category: subpage
contributors: 
---

# Bridge share tokens

Centrifuge supports native mint-and-burn bridging for any share token across any supported network. This guide explains how to call this.

## Bridging

To bridge share tokens across chains, you must call the `crosschainTransferShares` function on the `Spoke` contract.

### Parameters

* `centrifugeId`
  The identifier of the target network.
  You can look up valid IDs on the [deployments](https://docs.centrifuge.io/developer/protocol/deployments/#centrifuge-ids) page.

* `poolId`
  The pool identifier from which the shares will be transferred.

* `scId`
  The ID of the share class within the pool.

* `receiver`
  The address of the recipient on the destination chain.
  ⚠️ This must be right-padded with zeros to fit into `bytes32`.

* `amount`
  The amount of share tokens to transfer, expressed in the token’s decimals.
  The most common share token decimal configuration is 18.

* `remoteExtraGasLimit`
  Additional gas forwarded to the remote execution.
  This can be set to `0` in most cases.

## Share token restrictions

You must ensure that the `receiver` on the target network can receive share tokens.

If the share token has whitelist or other forms of restrictions, the receiver must be whitelisted before the transfer is executed on the target chain.

## Monitoring

To follow the progress of the transaction, you can find the status on [Centrifugescan](https://centrifugescan.io/).

If the minting of the share tokens on the destination network fails for some reason, you can also use Centrifugescan to re-execute the transaction.