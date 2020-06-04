---
id: patterns
order: 4
title: Smart Contract - Design Patterns
category: 2. Contracts
---

## Small modular contracts
The Tinlake contracts use the ward pattern for authorizing internal contracts to modify system parameters. To modularize and simplify the code base, independent functions are put into different contracts that can be changed out.

## Contract Call Authorization Scheme
Most contracts have a very simple authorization mechanism for separating public calls that anyone can do and system internal calls. This pattern was established by DappHub/MakerDAO. Instead of more fine grained complex access control within the contract, permissions are binary. Limiting what actions callers can do is not necessary if the caller is a smart contract, as this can be enforced on the caller side by simply writing the contract such that it can't do anything it shouldn't do.


```solidity,
contract Shelf {
    // --- Auth ---
    mapping (address => uint) public wards;
    function rely(address usr) public auth { wards[usr] = 1; }
    function deny(address usr) public auth { wards[usr] = 0; }
    modifier auth { require(wards[msg.sender] == 1); _; }

    // [...]

}
```
