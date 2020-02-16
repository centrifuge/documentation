---
id: contracts
order: 2
title: Deployments
category: 2. Contracts
---
The Tinlake contracts are intended to be deployed once for every asset class. There are is no shared code between any deployments to allow for a maximum of flexibility. We intend for users to customize and modify the codebase to better suit their needs. The codebase is clearly split into components that could and should be adjusted and core contracts. The core contracts enforce fairly basic rules (such as making sure a borrower can only unlock their NFT if they repaid their entire debt) while allowing other behaviors to be configured (such as how much interest the borrwer needs to pay).

The architecture for the contracts is built to make sure that the contracts intended to be customized have extremely simple interfaces and are purely limited to that functionality. By making these contracts small and simple, the amount of code that needs to be modified is minimized and thus the risk of bugs being introduced through that code is too.

The downside of deploying an entire set of new contracts every time is that the deployment itself needs to be secured and verified for each deployment. The deployment contracts are written to make this easy to do:

* The deployment is completely deterministic and allows no runtime parameters that can be influenced in different transaction payloads.
* The deployment can be verified for integrity by reading out the deployer contract state and verifying the contract bytecode. There is no need to scan transactions for any interference.
* There are no special permissions in the deployment contract and the account used to deploy them does not keep any special properties. This means the deployment can be done from an "untrusted" account/computer.

## Deployment Structure
There are three components used in the deploy process.

### Fabs
To deploy each contract, a contract factory, called `fab`, is created first. The fabs are created beceause uploading the complete byte code for all contracts in one transaction exceeds the gas limit. Fabs can be deployed in separate transactions to allow for smaller transactions.

A fab typically adheres to the following pattern:

```
contract CeilingFactory {
    function newCeiling (address pile) public returns (address) {
        Ceiling ceiling = new Ceiling(pile);
        ceiling.rely(msg.sender);
        ceiling.deny(address(this));
        return address(ceiling);
    }
}
```

A fab always adds the sender as a ward to the contract and immediately removes itself. It returns an address of the created contract and can require arguments that are passed to the contract constructor.

### Deployers
Deployments for the borrower contracts and the lender contracts are in two separate contracts. The deployer pattern is explained with a fictional example below.

The deployer contract has methods to call the fabs and create new contracts and wire them up correctly. The deployer contract requires all fab addresses to be passed into the deployer in the constructor. This means that the `deployComponent` methods don't need any authentication or can be executed in an incorrect way.


```
contract Deployer {
    address public root;
    bytes32 public fooParam;
    bytes32 pulbic barParam;
    FooFab public  fooFab;
    BarFab public  barFab;

    address foo;
    address bar;
    bool    activated;

    constructor (address root_, bytes32 fooParam_, bytes32 barParam_, FooFab fooFab_, BarFab barFab_) public {
        root = root_;
        fooParam = fooParam_;
        barParam = barParam_;
        fooFab = fooFab_;
        barFab = barFab;
    }

    function deployFoo() public {
        // only allow deployFoo to be called once.
        require(foo == address(0);
        foo = fooFab.newFoo(fooParam);
        foo.rely(root);
    }

    function deployBar() public {
        // bar can only be deployed after foo is deployed.
        require(bar == address(0) && foo != address(0));
        bar.rely(root);
    }

    function deploy() public {
        // ensure deploy() can only be called last and only once.
        require(bar != address(0) && activated == false);
        activated = true;
        bar.activate();
    }
}
```


### TinlakeRoot Contract
The `TinlakeRoot` takes both the lender and borrower deployer as arguments. It does the last step of connecting lender and borrower contracts and authorizing certain calls. It also has


```
contract TinlakeRoot is Auth {
    BorrowerDeployer public borrowerDeployer;
    LenderDeployer public   lenderDeployer;

    bool public             deployed;
    address public          deployUsr;

    constructor (address deployUsr_) public {
        deployUsr = deployUsr_;
    }

    // --- Prepare ---
    // Sets the two deployer dependencies. This needs to be called by the deployUsr;
    function prepare(address lender_, address borrower_, address ward_) public {
        require(deployUsr == msg.sender);
        borrowerDeployer = BorrowerDeployer(borrower_);
        lenderDeployer = LenderDeployer(lender_);
        wards[ward_] = 1;
        deployUsr = address(0); // disallow the deploy user to call this more than once.
    }


    // --- Deploy ---
    function deploy() public {
        require(address(borrowerDeployer) != address(0) && address(lenderDeployer) != address(0) && deployed == false);
        deployed = true;

        address distributor_ = lenderDeployer.distributor();
        address poolValue = borrowerDeployer.pricePool();
        DependLike(lenderDeployer.distributor()).depend("shelf", shelf_);
        // [...]

    }

}
```

## Governance Functions using the ward pattern
The TinlakeRoot also provides basic functions to change the behavior of the Tinlake contracts itself. It can designate additional wards on any contracts it is a ward on by exposing a method `relyContract(address target, address usr)` to call the target contract's rely function. Contract access can be revoked by calling `denyContract(address target, address usr)`.

The root will allow any ward on the root to call this function. Once an address is a ward on another contract in the deployment it's `file()` and `depend()` can be called by it. This will allow modifying the system arbitrarily. Therefore wards on the TinlakeRoot have practically unlimited power in the system and should only be given to contracts that limit this by different ways (e.g. a DAO, a time lock or a multisig).
