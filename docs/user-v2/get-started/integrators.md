---
id: integrators
title: Quickstart for Integrators
sidebar_position: 2
---

# Quickstart for Integrators

Integrate Centrifuge RWA pools into your dApp, wallet, or protocol.

## Integration Patterns

### 1. Investing (ERC-4626)
For synchronous vaults, you can interact with them just like any other ERC-4626 vault.

```solidity
import {IERC4626} from "openzeppelin/token/ERC20/extensions/ERC4626.sol";

function depositIntoRWA(address vault, uint256 amount) external {
    IERC20(asset).approve(vault, amount);
    IERC4626(vault).deposit(amount, receiver);
}
```

### 2. Investing (ERC-7540)
For asynchronous vaults, you must handle the request lifecycle.

1.  **Request Deposit**: Call `requestDeposit(assets, receiver, owner)`.
2.  **Wait**: Wait for the next epoch/processing cycle.
3.  **Claim**: Call `deposit(assets, receiver)` to finalize.

### 3. Reading Data
- **Share Price**: `convertToAssets(1 share)`
- **NAV**: `totalAssets()`

## Developer Resources
- [Developer Docs](/developer)
- [Subsquid Indexer](https://docs.subsquid.io/centrifuge) for historical data.
