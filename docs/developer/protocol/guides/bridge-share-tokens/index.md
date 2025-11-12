---
id: bridge-share-tokens
title: Bridge share tokens
category: subpage
contributors: 
---

# Bridge share tokens

Centrifuge supports native mint-and-burn bridging for any share token across any supported network. This guide explains how to use the bridge.

## Bridging

To bridge share tokens across chains, you must call the `crosschainTransferShares` function on the `Spoke` contract.

```solidity
spoke.crosschainTransferShares{value: gas}(centrifugeId, poolId, scId, receiver, amount, remoteExtraGasLimit);
```

* `centrifugeId`
  The identifier of the target network.
  You can look up valid IDs on the [deployments](https://docs.centrifuge.io/developer/protocol/deployments/#centrifuge-ids) page.

* `poolId`
  The pool identifier from which the shares will be transferred.

* `scId`
  The ID of the share class within the pool.

* `receiver`
  The address of the recipient on the destination chain.
  :::info
  EVM addresses must be right-padded with zeros to 32 bytes. E.g. `0x7Ed48C31f2fdC40d37407cBaBf0870B2b688368f` becomes `0x7Ed48C31f2fdC40d37407cBaBf0870B2b688368f000000000000000000000000`.
  :::

* `amount`
  The amount of share tokens to transfer, expressed in the token’s decimals.
  The most common share token decimal configuration is 18.

* `remoteExtraGasLimit`
  Additional gas forwarded to the remote execution.
  This can be set to `0` in most cases.

The gas value passed to the transaction is used to pay for the cross-chain transfer. You can overestimate this value as any excess gas will be refunded in the same transaction.

## Share token restrictions

You must ensure that the `receiver` on the target network can receive share tokens.

If the share token has a whitelist or other forms of restrictions, the receiver must be whitelisted before the transfer is executed on the target chain. If the receiver is not whitelisted, the minting transaction on the destination network will fail, and will need to be manually re-executed once the receiver is whitelisted.

## Monitoring

To follow the progress of the transaction, you can find the status on [Centrifugescan](https://centrifugescan.io/).

If the minting of the share tokens on the destination network fails for some reason, you can also use Centrifugescan to re-execute the transaction.