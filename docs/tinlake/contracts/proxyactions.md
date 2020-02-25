---
id: proxy-actions
order: 3
title: Proxy Actions Pattern
category: 2. Contracts
---
## Introduction
The Tinlake core contracts are a low level set of contracts exposing a set of atomic and simple method calls to interact with the system. This architecture was chosen to keep the core contracts easy to test and secure.

The downside of this is that for an account controlled by a key (not a contract account) to do many basic interactions (like locking an NFT and borrowing against it) can't be done in a single transaction. To mediate this issue, you can choose to interact with Tinlake using a proxy contract. This proxy contract is the loan owner and can execute any method, including calls from a library we provide with convenience methods that combine multiple core contract calls into a single method. These methods can be executed by a proxy contract.

The proxy contract enforces access control through the same way that the core contracts do. An NFT is minted and deposited into the proxy owner's account when deploying the proxy.

![](https://storage.googleapis.com/centrifuge-hackmd/upload_740a7f1fbe8ea661b10095113b00ef8e.png)


## Proxy Registry
To interact with Tinlake through a proxy, the user first needs to deploy a proxy by calling the ProxyRegistry.build() method. This method mints an NFT that into the sender's wallet that is then used to verify access to the contract.

The `ProxyRegistry` implements an ERC721 NFT interface. To transfer ownership over a proxy contract you can use a standard NFT token transfer (`transferFrom(from, to, tokenId)`).

### `isProxy(address addr) public returns (bool)`
Returns true, if the provided address is a proxy that was created by the registry contract.

### `proxies(uint id) public returns (address)`
Returns the proxy contract address for a given `id`. The `id` is the id of the token used to track ownership over the proxy.

### `ownerOf(uint id) public returns (address)`
Returns the owner of the corresponding NFT.

The contract also implements all other ERC721 standard methods as defined in [...] TODO: link

## Proxy
The proxy contract allows execution of arbitray code using the `execute(bytes memory _code, bytes memory _data)` method. This method deploys a contract with the provided code, if it is not already cached and executes it with delegate call.

Deployed contracts are cached in the proxy registry by hashing the bytecode and storing a mapping of hashes to address in the registry under `Registry.cache(bytes32 hash) returns (address)`.

Alternatively, you can call the method `execute(address _target, bytes memory _data)` directly with an address of an already deployed contract.

## Actions
The repo also contains an actions contract. This contract needs to be deployed with the appropriate addresses for the core Tinlake contracts provided so they can then be loaded by the proxy to interact with the correct core contracts.

```
contract TinlakeActions {
    ShelfLike public shelf;
    PileLike  public pile;
    // [... rest omitted]

    constructor (address _shelf, address _pile, ...) {
        shelf = ShelfLike(_shelf);
        pile = PileLike(_pile);
        // [...]
    }

    function repayReturnClose(uint loan) public {
        shelf.repay(loan, uint(-1)); // -1 results in current debt being repaid
        shelf.unlock(loan);
        shelf.close(loan);
    }
}
```

This method does three transactions within one transaction (and one block). While possible to do these three all individually, this would result in a significanlty higher transaction price, possibly spreading it out over multiple blocks and a worse user experience (signing three vs. one transaction).

When a user wants to execute this method, they would simply pass the address of the actions contract to the `execute(addr, data)` method which would result in the proxy executing a DELEGATECALL on the specified contract executing these three calls.

For the complete set of actions, please refer to the source code at [github.com/centrifuge/tinlake-actions](https://github.com/centrifuge/tinlake-actions).

