---
id: installing-node
title: Installing the Centrifuge Node
category: Getting started
---

Before being able to transfer and anchor financial documents and mint NFTs you need to spin up a Centrifuge node your machine. This is a one time setup. 

## Set-up Infura

For this, we [recommend](https://developer.centrifuge.io/docs/getting-started/tools) using [Infura](https://infura.io). Once you have registered an account, you can create a new project and select the respective endpoint. It will give the user the option to select: Mainnet, Ropsten, Rinkeby or Kovan. 

Find the correct Infura link for the different Ethereum testnets on your Infura dahsboard. Choose the correct endpoint and it will give you the option to copy to clipboard. You will need this link again later in the process.

![](https://i.imgur.com/EydBc5a.jpg | width=100)

## Open ports for incoming P2P connections

To accept the incoming P2P connections, you will need to open two ports for incoming TCP connections.
- P2P Port: open ingress/egress. This port will be configured under `p2p` `port` in your config.
- API Port: restrict at will, only you or your upstream systems should need to talk to it. This port will be configured as `nodeport` in your config.

<!--
**Resource Requirements for Centrifuge API Node**
* 1 Gigabyte memory
* 1 core
-->

## Installing the Centrifuge Node
Once you are set up, follow these steps to install the Centrifuge node:

1. Download and install the latest [centrifuge binary](https://github.com/centrifuge/go-centrifuge/releases). <!-- update link-->

     If you want to build the node from source, follow the description in the [source code](https://github.com/centrifuge/go-centrifuge/blob/develop/README.md).

2. Add the Centrifuge binary to the `$PATH` or modify the command invocation to point to the correct library.

3) Run `centrifuge createconfig` as seen in the example below. This command automatically creates an identity and the required key pairs. It then generates the `config.yaml` file required to run the node.

 
   > **NOTE:** The provided Ethereum account in the `keystore/<KEY-FILE>` needs to have ETH to execute the `centrifuge createconfig` command. 

      ```
      $ centrifuge createconfig \
      -z ~/.ethereum/keystore/<KEY-FILE> \
      -e <infura or your own geth url> \
      -t <DEFINE_CONFIG_DIR_NAME> \
      -a 8082 -p 38204 -x=false
      -n embarcadero
      ```

     Replace the `<KEY-FILE>` with the key file you obtained when creating the Ethereum account and `<DEFINE_CONFIG_DIR_NAME>` with the location where you want the `config.yaml`  file to be stored. Note that the target direction -t should be specified with an absolute path.



      The password for the provided `keystore/<KEY-FILE>` file is asked once the `createconfig` command is run. If the password is not set, just press `enter`.
      
      
    > **NOTE**: The generated `config.yaml` includes information about your Ethereum private key. Make sure to store it in a secure environment.


## Set up your Centrifuge Node config.yaml for the corresponding testnet or mainnet

As a next step, adjust the following accordingly and add the corresponding Infura link (see above).

**Networks:** 

* **Rinkeby - Russian Hill**
```$ centrifuge createconfig -z /Users/YOURUSERNAME/Library/Ethereum/keystore/UTC--2019--mm-dd -e "add Infura link for rinkeby testnet" -x=false -n russianhill```

* **Kovan - Bernal Heights**
```$ centrifuge createconfig -z /Users/YOURUSERNAME/Library/Ethereum/keystore/UTC--2019-mm-dd -e "add Infura link for kovan testnet" -x=false -n bernalheights```

* **Ropsten - Dogpatch**
 ```$ centrifuge createconfig -z /Users/YOURUSERNAME/Library/Ethereum/keystore/UTC--2019-mm-dd -e "add Infura link for ropsten testnet" -x=false -n dogpatch```

* **Mainnet - Embarcadero**
```$ centrifuge createconfig -z /Users/YOURUSERNAME/Library/Ethereum/keystore/UTC--2019-mm-dd -e "add Infura link for mainnet" -x=false -n embarcadero```

<!-- not ideal layout-->
 
------ 
**If you like to run the centrifuge node with your own ethereum node please replace the infura urls with your own `Geth` Node-URL.**

------

## Centrifuge ID 

A participant of the Centrifuge OS will be identified by an identity (Centrifuge ID) within the network. The createconfig command automatically creates an identity and the key pairs. 

To look up your Centrifuge ID via Terminal use:

```$ cat /Users/YOURUSERNAME/datadir/config.yaml```

## Running the Centrifuge node after creating the config.yaml

Before running your Centrifuge Node, you need to add your Ethereum key and password as environment variables.

`CENT_ETHEREUM_ACCOUNTS_MAIN_KEY=/Users/YOURUSERNAME/Library/Ethereum/keystore/UTC--2019-0UTC--2019-mm-dd` 

`CENT_ETHEREUM_ACCOUNTS_MAIN_PASSWORD=<password if any. else leave blank>`

Afterwards, you can run the Centrifuge Node using the `config.yaml` file you created:

  ```bash
  $ centrifuge run -c /<PATH-TO-CONFIG-DIR>/config.yaml
  ```

  Replace the `PATH-TO-CONFIG-DIR` with the location of the `config.yaml` file.







