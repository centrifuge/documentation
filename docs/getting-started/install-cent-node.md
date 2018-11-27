---
id: install-cent-node
title: Installing the Centrifuge Node
---
This section describes the procedure to install the Centrifuge node. This involves creating an Ethereum account, installing the Centrifuge API node and installing the Ethereum Rinkeby node.

## Creating an Ethereum account

1. Install the stable version of [Go Ethereum](https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Ubuntu):

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
 P2P Port: open ingress/egress
 API Port: restrict at will, only you or your upstream systems should need to talk to it
<!--
**Resource Requirements for Centrifuge API Node**
* 1 Gigabyte memory
* 1 core
-->

### Running the Ethereum Rinkeby Node

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
* Syncing will take about 1-2 hours. This can vary depending on the resource availability of the full node(s).
  * Optionally, you can use SSDs speed it up.

Start the `geth` process: 

  ```bash
  $ geth --rinkeby --syncmode light --rpc --rpcapi db,eth,net,web3,txpool --ws \
  --wsorigins "*" --wsapi db,eth,net,web3,txpool > /tmp/geth.log 2>&1 &
   ```

This command runs go-ethereum in the light mode for speed and simplicity. You can modify this command based on your requirements.

You now need to wait for about 1-2 hours depending on the resources under the P2P connected network for the local node to sync up with the Rinkeby network.

### Installing the Centrifuge Node

Once you have installed all the necessary packages, follow these steps to install the Centrifuge node:

1. Download and install the latest [centrifuge binary](https://github.com/centrifuge/go-centrifuge/releases).

    If you want to build the node from source, follow the description in the [source code](https://github.com/centrifuge/go-centrifuge/blob/develop/README.md).

2. Add the Centrifuge binary to the `$PATH`. Or, modify the command invocation to point to the correct library.

3. Create the `config.yaml` file using the `createconfig` utility:

  ```bash
  $ centrifuge createconfig -z  ~/.ethereum/keystore/KEY-FILE> -e ws://127.0.0.1:8546 -t <PATH-TO-CONFIG-FILE> \
  -a 8082 -p 38204
  ```

  This command automatically creates an Identity and the key pairs. It then generates the config.yaml file required to run the node.
  
  Replace the `_KEY-FILE_` with the key file you obtained when creating the Ethereum account and `_PATH-TO-CONFIG-FILE_` with the location where you want the `config.yaml`  file to be stored.

4. Run the Centrifuge Node using the `config.yaml` file you created:

  ```bash
  $ centrifuge run -c /PATH-TO-CONFIG-FILE/config.yaml
  ```
  Replace the `_PATH-TO-CONFIG-FILE_` with the location of the `config.yaml` file.

#### Additional custom configuration
* Configure node under NAT

If you want your node to be accessible outside your private network, you will need to manually specify the External IP of the node:
```yaml
p2p:
  externalIP: "100.111.112.113"
``` 

* Configure notification webhook (for incoming data from other peers)

To receive an event when a new document has been shared with your node, set your WebHook endpoint in the config.yaml file:
```yaml
notifications:
  endpoint: "YOUR_WEBHOOK_ENDPOINT"
```
For more information, see the [Notification Payload](https://app.swaggerhub.com/apis/centrifuge.io/cent-node/0.0.1#/NotificationDummyService/Notify)
 
### Post-Install Verification

To make sure that your Centrifuge node setup was successful, you can run the following API calls. For example:

* To perform a health check, ping your node:

  ```bash
  $ curl -X GET "https://localhost/ping" -H "accept: application/json"
  ```
* To create an invoice:

  ```bash
  $ curl -X POST "https://localhost/invoice" -H "accept: application/json" \
  -H "Content-Type: application/json" -d "{ \"collaborators\": [ \"string\" ], \
  \"data\": { \"invoice_status\": \"string\", \"invoice_number\": \"string\", \
  \"sender_name\": \"string\", \"sender_street\": \"string\", \"sender_city\": \
  \"string\", \"sender_zipcode\": \"string\", \"sender_country\": \"string\", \
  \"recipient_name\": \"string\", \"recipient_street\": \"string\", \
  \"recipient_city\": \"string\", \"recipient_zipcode\": \"string\", \
  \"recipient_country\": \"string\", \"currency\": \"string\", \
  \"gross_amount\": \"string\", \"net_amount\": \"string\", \
  \"tax_amount\": \"string\", \"tax_rate\": \"string\", \
  \"recipient\": \"string\", \"sender\": \"string\", \"payee\": \"string\", \
  \"comment\": \"string\", \"due_date\": \"2018-10-19T08:18:22.167Z\", \ 
  \"date_created\": \"2018-10-19T08:18:22.167Z\", \"extra_data\": \"string\" }}"
  ```
