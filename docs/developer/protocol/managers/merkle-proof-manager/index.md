---
id: merkle-proof-manager
title: Merkle Proof Manager
category: subpage
contributors: <Jeroen:jeroen@k-f.co>
---

# Merkle Proof Manager

> Credits: Inspired by and adapted from [Boring Vault](https://github.com/Se7en-Seas/boring-vault) by Se7en-Seas.

The Merkle Proof Manager is a smart contract component in the Centrifuge protocol that enforces programmable allocation policies using Merkle tree proofs. It provides a secure and verifiable mechanism for limiting strategists to a predefined set of allocation calls, ensuring that funds can only be moved in accordance with an approved policy.

This approach enhances composability and decentralization by allowing flexible integrations while maintaining strict security boundaries.

## How It Works

At the heart of the Merkle Proof Manager is a Merkle tree, where each leaf node encodes a specific call that is permitted under the policy. The root hash of this tree—called the policy—is stored on-chain.

Each leaf is derived from the following components:

- **Decoder contract address**:
   A small, protocol-specific smart contract that extracts relevant addresses from the call.

- **Target contract address**:
   The address of the external smart contract to be interacted with.

- **Function signature**:
   The exact function to be called on the target contract.

-  **Address inputs**:
   The critical addresses used in the function call, extracted via the decoder.

- **Value flag**:
   A flag indicating whether the function call includes native gas tokens (e.g., `msg.value > 0`).

To verify that a strategist call is allowed, the caller must submit a Merkle proof. This proof confirms that the proposed call is one of the authorized leaves under the current policy root.

## Supporting New Integrations

To support a new protocol, a custom decoder contract must be implemented. The decoder’s job is to expose the function’s address-type inputs so they can be filtered and validated during the Merkle proof process.

#### Example: ERC-7540 Deposit Request

To support deposit requests into an ERC-7540 vault, a minimal decoder might look like this:

```solidity
function requestDeposit(
    uint256, 
    address controller, 
    address owner
) external view virtual returns (bytes memory addressesFound) {
    addressesFound = abi.encodePacked(controller, owner);
}
```

This function allows the Merkle Proof Manager to extract and validate the `controller` and `owner` addresses, ensuring only allowed accounts are involved in the call.

## Security

The Merkle Proof Manager enables pool managers to:

* Predefine exactly which contract calls are permitted
* Limit address-level permissions per call
* Prevent strategists from executing unauthorized transactions

This model ensures strategy-level control without compromising on extensibility.