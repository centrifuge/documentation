---
id: write-integration-tests
title: Write integration tests
category: subpage
contributors: <Jeroen:jeroen@centrifuge.io>
---

# Write integration tests

When building a custom contract against Centrifuge, you can test it against a fresh deployment of the protocol rather than mocking individual contracts. The protocol repo ships a base test contract that deploys the whole system and exposes helpers to set up a pool and plug in your own hooks and managers.

## Inherit from `CentrifugeIntegrationTestWithUtils`

The base test contract, [`CentrifugeIntegrationTestWithUtils`](https://github.com/centrifuge/protocol/blob/main/test/integration/Integration.t.sol), lives in the protocol repo. Import it through the `centrifuge` remapping and inherit from it:

```solidity
import {CentrifugeIntegrationTestWithUtils} from "centrifuge/test/integration/Integration.t.sol";

contract MyManagerTest is CentrifugeIntegrationTestWithUtils {
    // ...
}
```

Inheriting from it gives your test:

- A fresh deployment of the Centrifuge core contracts
- Helpers to set up a pool, share class, vault, and prices
- Helpers to register a custom manager and plug in hooks

The [`DepositRedeemFeeManager` test](https://github.com/centrifuge/centrifuge-starter-kit/blob/main/test/DepositRedeemFeeManager.t.sol) in the starter kit is a complete worked example of using this base contract to test a custom manager.

## Set up a pool

A typical `setUp` calls `super.setUp()`, deploys your contract, configures a pool, grants the roles your manager needs, and funds test accounts. The starter-kit example does this as follows:

```solidity
contract DepositRedeemFeeManagerTest is CentrifugeIntegrationTestWithUtils {
    function setUp() public override {
        super.setUp(); // fresh Centrifuge deployment

        // give test accounts native gas for cross-chain messaging
        vm.deal(FM, 10 ether);
        vm.deal(INVESTOR, 1 ether);

        // deploy the custom manager under test
        feeManager = new DepositRedeemFeeManager(hubRegistry, batchRequestManager);

        // create the pool (FM is the pool manager) and register USDC as an asset
        _createPool();
        _registerUSDC();

        // grant the manager the hub manager role for this pool
        vm.prank(FM);
        hub.updateHubManager(POOL_A, address(feeManager), true);

        // configure the pool, then fund the investor
        _configurePool();
        _mintUSDC(INVESTOR, DEPOSIT_AMOUNT);
    }
}
```

The roles and helpers above come from the base contract:

- `_createPool`, `_registerUSDC`, `_mintUSDC` are helpers it provides; `FM`, `INVESTOR`, `POOL_A`, `hub`, `hubRegistry`, and `batchRequestManager` are set up for you.
- Call `hub.updateHubManager(POOL_A, address(feeManager), true)` as the pool manager (`FM`) to grant the hub manager role. Grant whatever roles your manager needs here; a balance sheet manager uses `hub.updateBalanceSheetManager(...)`.

`_configurePool()` drives the Hub through the [usual deployment steps](../../guides/deploy-vaults/): notify the pool and share class to the spoke, set the request manager, update the balance sheet manager, deploy and link the vault, and set share and asset prices.

## Write the tests

With a live deployment in place, a test calls your manager and asserts on the resulting onchain state. An assertion after, say, issuing shares reflects the full path through the Hub, spoke, vault, and balance sheet.

Two things make these tests effective:

- **Act as the right role.** Use Foundry's `vm.prank` with the addresses the base contract sets up (the fund manager, an investor) to exercise both the authorized and unauthorized paths. Test the unauthorized path too: assert that an unauthorized caller reverts.
- **Assert on real state and events.** Check balances, share supply, and emitted events after the call.

```solidity
function testIssueSharesWithDepositFee() public {
    vm.prank(FM);
    feeManager.setDepositFee(d18(0.1e18)); // 10%

    // ... investor deposits 1000 USDC and the manager issues shares ...

    // a 10% fee means ~900 shares for a 1000 deposit
    assertApproxEqAbs(shareToken.balanceOf(INVESTOR), 900e18, 1e18);
}

function testSetFeesNotHubManager() public {
    vm.prank(makeAddr("notManager"));
    vm.expectRevert();
    feeManager.setDepositFee(d18(0.01e18));
}
```

For the full set of tests this pattern produces, see the [`DepositRedeemFeeManager` test](https://github.com/centrifuge/centrifuge-starter-kit/blob/main/test/DepositRedeemFeeManager.t.sol).
