---
id: install-cent-node
title: Installing the Centrifuge Node
---
This section describes the procedure to install the Centrifuge node. This involves creating an Ethereum account, installing the Centrifuge API node and installing the Ethereum Rinkeby node.

## Creating an Ethereum account

1. Install the stable version of Go Ethereum:

  ```bash
  $ sudo add-apt-repository -y ppa:ethereum/ethereum
  ```
  ```bash
  $ sudo apt-get update
  ```
  ```bash
  $ sudo apt-get install ethereum
  ```

2. Install `geth`:

  ```bash
  $ sudo apt install geth
  ```

For instructions to install `geth` on MacOS, see [Instructions for MacOS](https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Mac).

3. Create a new `geth` account:

  ```bash
  $ geth account new
  Your new account is locked with a password. Please give a password. Do not forget this password.
  Passphrase:
  Repeat Passphrase:
  Address: {168bc315a2ee09042d83d7c5811b533620531f67}
  ```

  Creating a new `geth` account generates a keyfile stored at `~/.ethereum/keystore`.

> NOTE: You will not be able to access the account if you lose the `Passphrase`. Make sure to store it securely. There is no **Forgot my password** option available here.

## Installing the Centrifuge Node

### System Requirements for Installing the Centrifuge Node:

To accept the incoming P2P connections, you will need to open two ports for incoming TCP connections.

**Resource Requirements for Centrifuge API Node**

* 1 Gigabyte memory
* 1 core
* Allocate 100 Gigabyte of disk space (local copy of document data).


### Installing the Centrifuge Node

Once you have installed all the necessary packages, follow these steps to install the Centrifuge node:

1. Download and install the latest [centrifuge binary](https://github.com/centrifuge/go-centrifuge/releases).

    If you want to build the node from source, follow the description in the [source code](https://github.com/centrifuge/go-centrifuge/blob/develop/README.md).

2. Add the centrifuge binary to the `$PATH`. Or, modify the command invocation to point to the correct library.

3. Create the `config.yaml` file using the `createconfig` utility:

  ```bash
  $ centrifuge createconfig -z  ~/.ethereum/keystore/KEY-FILE> -e ws://127.0.0.1:8546 -t <PATH-FOR-CONFIG-FILE> -a 8082 -p 38204`
  ```

  This command automatically adds the Identity keys to the `config.yaml` file.
  Replace the `_KEY-FILE_` with the key file you obtained when creating the Ethereum account and `_PATH-FOR-CONFIG-FILE_` with the location where you want the `config.yaml`  file to be stored.

3. Run the Centrifuge Node using the `config.yaml` file you created:

  ```bash
  $ centrifuge run -c /PATH-TO-CONFIG-FILE/config.yaml
  ```
  Replace the `_PATH-FOR-CONFIG-FILE_` with the location of the `config.yaml` file.

### Installing the Ethereum Rinkeby Node

Rinkeby is a testnet

**Resource Requirements**

* 4 Gigabyte memory
  * Syncing mode uses around 3 Gigabyte
  * Normal sync uses around 400 Megabyte
* 2 cores
  * Syncing mode uses about 2-3 cores
  * Normal mode uses about 0.2 cores
* Allocated disk space of at least 100 Gigabyte
  * Sync mode uses about 1 Gigabyte
  * Full node requires about 50 Gigabyte
* Syncing will take about 1-2 hours
  * Optionally, you can use SSDs speed it up.


1. To run Ethereum node in the light mode as a binary, install `geth`. Installation instructions are available at [https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Ubuntu](https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Ubuntu).

2. Set the following environment variables in the `config.yaml` file:

  * RPC_PORT = 8545
  * WS_PORT = 8546
  * ETH_DATADIR = $HOME/Ethereum/Library/rinkeby


3. Start the `geth` process:

  ```bash
  $ geth --rinkeby --light --rpc --rpcapi db,eth,net,web3,txpool --ws \
  --wsorigins "*" --wsapi db,eth,net,web3,txpool > /tmp/geth.log 2>&1 &
   ```

You now need to wait for about 1-2 hours depending on the resources under the P2P connected network for the local node to sync up with the Rinkeby network.

### Post-Install Verification

To make sure that your Centrifuge node setup was successful, you can run the following API calls. For example:

* To perform a health check, ping your node:

  ```bash
  curl -X GET "https://localhost/ping" -H "accept: application/json"
  ```
* To create an invoice:

  ```bash
  curl -X POST "https://localhost/invoice" -H "accept: application/json" -H \
  "Content-Type: application/json" -d "{ \"collaborators\": [ \"string\" ], \
  \"data\": { \"invoice_status\": \"string\", \"invoice_number\": \"string\", \
  \"sender_name\": \"string\", \"sender_street\": \"string\", \"sender_city\": \
  \"string\", \"sender_zipcode\": \"string\", \"sender_country\": \"string\", \
  \"recipient_name\": \"string\", \"recipient_street\": \"string\", \
  \"recipient_city\": \"string\", \"recipient_zipcode\": \"string\", \
  \"recipient_country\": \"string\", \"currency\": \"string\", \
  \"gross_amount\": \"string\", \"net_amount\": \"string\", \
  \"tax_amount\": \"string\", \"tax_rate\": \"string\", \
  \"recipient\": \"string\", \"sender\": \"string\", \"payee\": \"string\", \
  \"comment\": \"string\", \"due_date\": \"2018-10-19T08:18:22.167Z\", \ \"date_created\": \"2018-10-19T08:18:22.167Z\", \"extra_data\": \"string\" }}"
  ```
