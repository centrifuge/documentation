---
id: messaging
title: Messaging scheme
category: subpage
contributors: <Jeroen:jeroen@k-f.co>
---

# Messaging scheme

The Centrifuge Protocol routes messages between chains through its Gateway layer. To minimize cross-chain gas costs, all messages use a custom packed binary encoding rather than standard ABI encoding.

## Encoding

Each message is a tightly packed byte sequence. The first byte is a `uint8` that identifies the message type. All subsequent fields are packed in a fixed order with no padding or dynamic offset tables, using Solidity's `abi.encodePacked`. Fixed-width types occupy exactly their natural byte size (e.g. `uint128` → 16 bytes, `bytes32` → 32 bytes, `bool` → 1 byte).

This differs from standard ABI encoding, which zero-pads all values to 32-byte slots and prepends dynamic offset tables. For cross-chain messages that may be relayed through bridges with per-byte fees, the savings are significant.

Messages with variable-length payloads (`UpdateRestriction`, `Request`, `RequestCallback`, `TrustedContractUpdate`, and `UntrustedContractUpdate`) encode the payload length as a `uint16` immediately before the payload bytes. The base message size does not include this variable portion.

All pool-scoped messages (from `NotifyPool` onwards) carry a `poolId` at byte offset 1.

Some messages include a `extraGasLimit` parameter, which lets the initiator reserve additional gas for the forwarded call on the destination chain.

## Core messages

### Pool-independent messages

These messages are not scoped to a specific pool.

#### ScheduleUpgrade

Schedules a contract upgrade for the given target.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 1) |
| 1 | 32 | target | `bytes32` |

**Total: 33 bytes**

#### CancelUpgrade

Cancels a previously scheduled upgrade for the given target.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 2) |
| 1 | 32 | target | `bytes32` |

**Total: 33 bytes**

#### RecoverTokens

Recovers tokens from a target contract, sending them to a specified recipient.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 3) |
| 1 | 32 | target | `bytes32` |
| 33 | 32 | token | `bytes32` |
| 65 | 32 | tokenId | `uint256` |
| 97 | 32 | to | `bytes32` |
| 129 | 32 | amount | `uint256` |

**Total: 161 bytes**

#### RegisterAsset

Registers an asset with its identifier and decimal precision.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 4) |
| 1 | 16 | assetId | `uint128` |
| 17 | 1 | decimals | `uint8` |

**Total: 18 bytes**

#### SetPoolAdapters

Sets the set of adapters for a pool, along with a confirmation threshold and a recovery index. The `adapterList` is variable-length; the 2-byte `length` field at offset 11 gives the number of entries.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 5) |
| 1 | 8 | poolId | `uint64` |
| 9 | 1 | threshold | `uint8` |
| 10 | 1 | recoveryIndex | `uint8` |
| 11 | 2 | length | `uint16` |
| 13 | N×32 | adapterList | `bytes32[]` |

**Total: 13 + N×32 bytes**

---

### Pool-scoped messages

These messages carry a `poolId` at offset 1 and are routed to a specific pool.

#### NotifyPool

Notifies a remote chain that a pool exists.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 6) |
| 1 | 8 | poolId | `uint64` |

**Total: 9 bytes**

#### NotifyShareClass

Notifies a remote chain of a share class and its initial configuration.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 7) |
| 1 | 8 | poolId | `uint64` |
| 9 | 16 | scId | `bytes16` |
| 25 | 128 | name | fixed 128-byte UTF-8 string |
| 153 | 32 | symbol | `bytes32` UTF-8 |
| 185 | 1 | decimals | `uint8` |
| 186 | 32 | salt | `bytes32` |
| 218 | 32 | hook | `bytes32` |

**Total: 250 bytes**

#### NotifyPricePoolPerShare

Publishes the pool-per-share price for a share class at a given timestamp.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 8) |
| 1 | 8 | poolId | `uint64` |
| 9 | 16 | scId | `bytes16` |
| 25 | 16 | price | `uint128` |
| 41 | 8 | timestamp | `uint64` |

**Total: 49 bytes**

#### NotifyPricePoolPerAsset

Publishes the pool-per-asset price for a specific asset in a share class.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 9) |
| 1 | 8 | poolId | `uint64` |
| 9 | 16 | scId | `bytes16` |
| 25 | 16 | assetId | `uint128` |
| 41 | 16 | price | `uint128` |
| 57 | 8 | timestamp | `uint64` |

**Total: 65 bytes**

#### NotifyShareMetadata

Updates the name and symbol metadata for a share class on a remote chain.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 10) |
| 1 | 8 | poolId | `uint64` |
| 9 | 16 | scId | `bytes16` |
| 25 | 128 | name | fixed 128-byte UTF-8 string |
| 153 | 32 | symbol | `bytes32` UTF-8 |

**Total: 185 bytes**

#### UpdateShareHook

Sets the hook contract address for a share class.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 11) |
| 1 | 8 | poolId | `uint64` |
| 9 | 16 | scId | `bytes16` |
| 25 | 32 | hook | `bytes32` |

**Total: 57 bytes**

#### InitiateTransferShares

Initiates a cross-chain share transfer from the originating chain. Carries separate gas limits for the local execution and the remote leg of the transfer.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 12) |
| 1 | 8 | poolId | `uint64` |
| 9 | 16 | scId | `bytes16` |
| 25 | 2 | centrifugeId | `uint16` |
| 27 | 32 | receiver | `bytes32` |
| 59 | 16 | amount | `uint128` |
| 75 | 16 | remoteExtraGasLimit | `uint128` |
| 91 | 16 | extraGasLimit | `uint128` |

**Total: 107 bytes**

#### ExecuteTransferShares

Executes the receiving side of a cross-chain share transfer.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 13) |
| 1 | 8 | poolId | `uint64` |
| 9 | 16 | scId | `bytes16` |
| 25 | 32 | receiver | `bytes32` |
| 57 | 16 | amount | `uint128` |
| 73 | 16 | extraGasLimit | `uint128` |

**Total: 89 bytes**

#### UpdateRestriction

Delivers a restriction update to a share class hook. The `payload` is a submessage encoded using `UpdateRestrictionMessageLib` (see [UpdateRestriction submessages](#updaterestriction-submessages) below).

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 14) |
| 1 | 8 | poolId | `uint64` |
| 9 | 16 | scId | `bytes16` |
| 25 | 16 | extraGasLimit | `uint128` |
| 41 | 2 | payloadLength | `uint16` |
| 43 | payloadLength | payload | `bytes` |

**Base: 43 bytes + payload**

#### UpdateVault

Deploys, links, or unlinks a vault for a share class and asset. The `kind` field maps to `VaultUpdateKind`: `0` for DeployAndLink, `1` for Link, `2` for Unlink.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 15) |
| 1 | 8 | poolId | `uint64` |
| 9 | 16 | scId | `bytes16` |
| 25 | 16 | assetId | `uint128` |
| 41 | 32 | vaultOrFactory | `bytes32` |
| 73 | 1 | kind | `uint8` |
| 74 | 16 | extraGasLimit | `uint128` |

**Total: 90 bytes**

#### UpdateBalanceSheetManager

Grants or revokes balance sheet management rights for a pool.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 16) |
| 1 | 8 | poolId | `uint64` |
| 9 | 32 | who | `bytes32` |
| 41 | 1 | canManage | `bool` |

**Total: 42 bytes**

#### UpdateGatewayManager

Grants or revokes gateway management rights for a pool.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 17) |
| 1 | 8 | poolId | `uint64` |
| 9 | 32 | who | `bytes32` |
| 41 | 1 | canManage | `bool` |

**Total: 42 bytes**

#### UpdateHoldingAmount

Updates the recorded holding amount for a share class and asset, including price and whether the update is an increase, a snapshot, or both.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 18) |
| 1 | 8 | poolId | `uint64` |
| 9 | 16 | scId | `bytes16` |
| 25 | 16 | assetId | `uint128` |
| 41 | 16 | amount | `uint128` |
| 57 | 16 | pricePoolPerAsset | `uint128` |
| 73 | 8 | timestamp | `uint64` |
| 81 | 1 | isIncrease | `bool` |
| 82 | 1 | isSnapshot | `bool` |
| 83 | 8 | nonce | `uint64` |
| 91 | 16 | extraGasLimit | `uint128` |

**Total: 107 bytes**

#### UpdateShares

Records share issuance or revocation for a share class, with snapshot and ordering metadata.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 19) |
| 1 | 8 | poolId | `uint64` |
| 9 | 16 | scId | `bytes16` |
| 25 | 16 | shares | `uint128` |
| 41 | 8 | timestamp | `uint64` |
| 49 | 1 | isIssuance | `bool` |
| 50 | 1 | isSnapshot | `bool` |
| 51 | 8 | nonce | `uint64` |
| 59 | 16 | extraGasLimit | `uint128` |

**Total: 75 bytes**

#### SetMaxAssetPriceAge

Sets the maximum acceptable age of an asset price feed for a share class.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 20) |
| 1 | 8 | poolId | `uint64` |
| 9 | 16 | scId | `bytes16` |
| 25 | 16 | assetId | `uint128` |
| 41 | 8 | maxPriceAge | `uint64` |

**Total: 49 bytes**

#### SetMaxSharePriceAge

Sets the maximum acceptable age of a share price feed for a share class.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 21) |
| 1 | 8 | poolId | `uint64` |
| 9 | 16 | scId | `bytes16` |
| 25 | 8 | maxPriceAge | `uint64` |

**Total: 33 bytes**

#### Request

Forwards an investor request (deposit, redeem, or cancel) from a spoke chain to the hub. The `payload` is a submessage encoded using `RequestMessageLib` (see [Request submessages](#request-submessages) below).

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 22) |
| 1 | 8 | poolId | `uint64` |
| 9 | 16 | scId | `bytes16` |
| 25 | 16 | assetId | `uint128` |
| 41 | 16 | extraGasLimit | `uint128` |
| 57 | 2 | payloadLength | `uint16` |
| 59 | payloadLength | payload | `bytes` |

**Base: 59 bytes + payload**

#### RequestCallback

Returns the result of a processed investor request from the hub back to the spoke. The `payload` is a submessage encoded using `RequestCallbackMessageLib` (see [RequestCallback submessages](#requestcallback-submessages) below).

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 23) |
| 1 | 8 | poolId | `uint64` |
| 9 | 16 | scId | `bytes16` |
| 25 | 16 | assetId | `uint128` |
| 41 | 16 | extraGasLimit | `uint128` |
| 57 | 2 | payloadLength | `uint16` |
| 59 | payloadLength | payload | `bytes` |

**Base: 59 bytes + payload**

#### SetRequestManager

Assigns a request manager contract for a pool on the remote chain.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 24) |
| 1 | 8 | poolId | `uint64` |
| 9 | 32 | manager | `bytes32` |

**Total: 41 bytes**

#### TrustedContractUpdate

Forwards an arbitrary call to a trusted contract on a remote chain. The `payload` is standard ABI-encoded calldata for the target contract. Because the call is forwarded without a sender check, the target must already trust all messages arriving via the protocol. See [Extensibility via contract updates](#extensibility-via-contract-updates) for details.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 25) |
| 1 | 8 | poolId | `uint64` |
| 9 | 16 | scId | `bytes16` |
| 25 | 32 | target | `bytes32` |
| 57 | 16 | extraGasLimit | `uint128` |
| 73 | 2 | payloadLength | `uint16` |
| 75 | payloadLength | payload | `bytes` |

**Base: 75 bytes + payload**

#### UntrustedContractUpdate

Forwards an arbitrary call to a contract on a remote chain, including a `sender` field so the target can verify the originator. This is appropriate for contracts that do not unconditionally trust all protocol messages. See [Extensibility via contract updates](#extensibility-via-contract-updates) for details.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 26) |
| 1 | 8 | poolId | `uint64` |
| 9 | 16 | scId | `bytes16` |
| 25 | 32 | target | `bytes32` |
| 57 | 32 | sender | `bytes32` |
| 89 | 16 | extraGasLimit | `uint128` |
| 105 | 2 | payloadLength | `uint16` |
| 107 | payloadLength | payload | `bytes` |

**Base: 107 bytes + payload**

---

## Submessages

Several core messages carry an inner `payload` that is itself a packed submessage. Each submessage library follows the same convention as `MessageLib`: a 1-byte type prefix followed by packed fields.

The submessage encoding scheme is not enforced by the core protocol. The following schema is used by the hook and vault implementations included in the protocol periphery code, but alternative submessage schemes may also be used by integrators.

### UpdateRestriction submessages

Encoded by `UpdateRestrictionMessageLib` and carried inside `UpdateRestriction.payload`. The `UpdateRestrictionType` enum governs the submessage kind.

#### Member (code 1)

Adds or extends a user's membership in a restricted share class, valid until the given timestamp.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 1) |
| 1 | 32 | user | `bytes32` |
| 33 | 8 | validUntil | `uint64` |

**Total: 41 bytes**

#### Freeze (code 2)

Freezes a user's ability to transfer shares in a restricted share class.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 2) |
| 1 | 32 | user | `bytes32` |

**Total: 33 bytes**

#### Unfreeze (code 3)

Reverses a freeze on a user's share transfers.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 3) |
| 1 | 32 | user | `bytes32` |

**Total: 33 bytes**

---

### Request submessages

Encoded by `RequestMessageLib` and carried inside `Request.payload`. The `RequestType` enum governs the submessage kind.

#### DepositRequest (code 1)

Requests a deposit of `amount` assets on behalf of `investor`.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 1) |
| 1 | 32 | investor | `bytes32` |
| 33 | 16 | amount | `uint128` |

**Total: 49 bytes**

#### RedeemRequest (code 2)

Requests a redemption of `amount` shares on behalf of `investor`.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 2) |
| 1 | 32 | investor | `bytes32` |
| 33 | 16 | amount | `uint128` |

**Total: 49 bytes**

#### CancelDepositRequest (code 3)

Cancels an outstanding deposit request for `investor`.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 3) |
| 1 | 32 | investor | `bytes32` |

**Total: 33 bytes**

#### CancelRedeemRequest (code 4)

Cancels an outstanding redeem request for `investor`.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 4) |
| 1 | 32 | investor | `bytes32` |

**Total: 33 bytes**

---

### RequestCallback submessages

Encoded by `RequestCallbackMessageLib` and carried inside `RequestCallback.payload`. The `RequestCallbackType` enum governs the submessage kind. These messages flow from the hub back to spoke chains to report the outcome of processed requests.

#### ApprovedDeposits (code 1)

Reports that a batch of deposits has been approved at a given price.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 1) |
| 1 | 16 | assetAmount | `uint128` |
| 17 | 16 | pricePoolPerAsset | `uint128` |

**Total: 33 bytes**

#### IssuedShares (code 2)

Reports that shares have been issued at a given price.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 2) |
| 1 | 16 | shareAmount | `uint128` |
| 17 | 16 | pricePoolPerShare | `uint128` |

**Total: 33 bytes**

#### RevokedShares (code 3)

Reports that shares have been revoked, returning both asset and share amounts at the given price.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 3) |
| 1 | 16 | assetAmount | `uint128` |
| 17 | 16 | shareAmount | `uint128` |
| 33 | 16 | pricePoolPerShare | `uint128` |

**Total: 49 bytes**

#### FulfilledDepositRequest (code 4)

Notifies an investor that their deposit request has been fulfilled, including any cancelled portion.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 4) |
| 1 | 32 | investor | `bytes32` |
| 33 | 16 | fulfilledAssetAmount | `uint128` |
| 49 | 16 | fulfilledShareAmount | `uint128` |
| 65 | 16 | cancelledAssetAmount | `uint128` |

**Total: 81 bytes**

#### FulfilledRedeemRequest (code 5)

Notifies an investor that their redeem request has been fulfilled, including any cancelled portion.

| Offset | Size | Field | Type |
|--------|------|-------|------|
| 0 | 1 | type | `uint8` (code 5) |
| 1 | 32 | investor | `bytes32` |
| 33 | 16 | fulfilledAssetAmount | `uint128` |
| 49 | 16 | fulfilledShareAmount | `uint128` |
| 65 | 16 | cancelledShareAmount | `uint128` |

**Total: 81 bytes**

---

## Extensibility via contract updates

`TrustedContractUpdate` and `UntrustedContractUpdate` provide a general-purpose escape hatch for sending arbitrary cross-chain calls without adding a new message type to `MessageLib`. Both carry a `payload` of standard ABI-encoded calldata, including the 4-byte function selector. The receiving chain's `Gateway` forwards the call by invoking the `target` contract with that payload directly.

The two variants serve opposite directions and trust levels:

- **TrustedContractUpdate** flows hub to spoke. It is initiated by a pool's hub manager through the `Hub` contract, so the receiving spoke can trust that any message of this type was authorized at the hub level. No sender field is included, and the target contract is expected to accept calls from the Gateway without additional verification.

- **UntrustedContractUpdate** flows spoke to hub. It can be triggered by anyone on a spoke chain, so the hub-side target cannot assume the caller is authorized. The `sender` field carries the originating address so the target contract can apply its own access control checks.
