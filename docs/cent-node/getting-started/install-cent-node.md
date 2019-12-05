---
id: install-cent-node
order: 3
title: Installing the Centrifuge Node
category: 2. Getting started
---

Before being able to transfer and anchor financial documents and mint NFTs you need to spin up a Centrifuge node your machine. This is a one time setup. 

## Set-up Infura

For this, we [recommend](/cent-node/getting-started/tools) [setting up](/cent-node/getting-started/geth-account) your own geth node.

Otherwise, for convenience in getting started, you can use [Infura](https://infura.io). Once you have registered an account, you can create a new project and select the respective endpoint. It will give the user the option to select: Mainnet, Ropsten, Rinkeby or Kovan. 

Find the correct Infura link for the different Ethereum testnets on your Infura dahsboard. Choose the correct endpoint and it will give you the option to copy to clipboard. You will need this link again later in the process.

![](../../../src/images/cent-node/infura.jpg)

## Installing the Centrifuge Node
Once you are set up, follow these steps to install the Centrifuge node:

1. Download and install the latest [centrifuge binary](https://github.com/centrifuge/go-centrifuge/releases). <!-- update link-->

If you want to build the node from source, follow the description in the [source code](https://github.com/centrifuge/go-centrifuge/blob/develop/README.md).

2. Add the Centrifuge binary to the `$PATH` or modify the command invocation to point to the correct library.

3. Run `centrifuge createconfig` as seen in the example below. This command automatically creates an identity and the required key pairs. It then generates the `config.yaml` file required to run the node.

**NOTE:** The provided Ethereum account in the `keystore/<KEY-FILE>` needs to have ETH to execute the `centrifuge createconfig` command. 

```bash
$ centrifuge createconfig \\
-z ~/.ethereum/keystore/<KEY-FILE> \\
-e <infura or your own geth url> \\
-t <DEFINE_CONFIG_DIR_NAME> \\
-a 8082 -p 38204 \\
-n embarcadero
```

Replace the `<KEY-FILE>` with the key file you obtained when creating the Ethereum account and `<DEFINE_CONFIG_DIR_NAME>` with the location where you want the `config.yaml`  file to be stored. Note that the target direction -t should be specified with an absolute path. Manually add `https://` to the Infura link (see above).

The password for the provided `keystore/<KEY-FILE>` file is asked once the `createconfig` command is run. If the password is not set, just press `enter`.
      
**NOTE**: The generated `config.yaml` includes information about your Ethereum private key. Make sure to store it in a secure environment.

## Set up your Centrifuge Node config.yaml for the corresponding testnet or mainnet

If you want to switch between testnets and mainnet, adjust the following accordingly and add the corresponding Infura link (see above).  Manually add `https://` to the Infura link.

**Networks:** 

* **Rinkeby - Russian Hill**

`
$ centrifuge createconfig -z /Users/YOURUSERNAME/Library/Ethereum/keystore/UTC--2019--mm-dd -e "add Infura link for rinkeby testnet" -n russianhill
`

* **Kovan - Bernal Heights**

`
$ centrifuge createconfig -z /Users/YOURUSERNAME/Library/Ethereum/keystore/UTC--2019-mm-dd -e "add Infura link for kovan testnet" -n bernalheights
`

* **Ropsten - Dogpatch**

`
$ centrifuge createconfig -z /Users/YOURUSERNAME/Library/Ethereum/keystore/UTC--2019-mm-dd -e "add Infura link for ropsten testnet" -n dogpatch
`

* **Mainnet - Embarcadero**

`
$ centrifuge createconfig -z /Users/YOURUSERNAME/Library/Ethereum/keystore/UTC--2019-mm-dd -e "add Infura link for mainnet" -n embarcadero
`
------ 
**If you like to run the centrifuge node with your own ethereum node please replace the infura urls with your own `Geth` Node-URL.**

------

## Look up your Centrifuge ID 

A participant of the Centrifuge OS will be identified by an identity (Centrifuge ID) within the network. The createconfig command automatically creates an identity and the key pairs. 

To look up your Centrifuge ID via Terminal use:

```bash
$ cat /<PATH-TO-CONFIG-DIR>/config.yaml | grep -i 'identityid' | awk '{print $2}'
````

## Running the Centrifuge node after creating the config.yaml

Before running your Centrifuge Node, you need to add your Ethereum key and password as environment variables. The following bash commands show how to set the variables based on the default ethereum key location in macOS for a sample key.

<!-- `CENT_ETHEREUM_ACCOUNTS_MAIN_KEY=$HOME/Library/Ethereum/keystore/UTC--2019-0UTC--2019-mm-dd` -->

```bash
CENT_ETHEREUM_ACCOUNTS_MAIN_KEY=$(cat $HOME/Library/Ethereum/keystore/UTC--2019-04-15T14-43-41.293727000Z--75aecbd0aa7f34207132d686d2a9e470fba2e6e4)
````

```bash
CENT_ETHEREUM_ACCOUNTS_MAIN_PASSWORD=<YOUR_PASSWORD>
```

Afterwards, you can run the Centrifuge Node using the `config.yaml` file you created:

```bash
$ centrifuge run -c /<PATH-TO-CONFIG-DIR>/config.yaml
```

Replace the `PATH-TO-CONFIG-DIR` with the location of the `config.yaml` file.
