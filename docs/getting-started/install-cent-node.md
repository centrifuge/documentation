---
id: install-cent-node
title: Installing the Centrifuge Node
category: Getting Started
---

This section describes the procedure to install the Centrifuge node. This involves creating an Ethereum account, installing the Centrifuge API node and installing the Ethereum Rinkeby node.

## Creating an Ethereum account

1. Install the stable version of [Go Ethereum](https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Ubuntu):

  ```bash
  $ sudo add-apt-repository -y ppa:ethereum/ethereum

  $ sudo apt-get update
  
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

  Creating a new `geth` account generates a keyfile stored at `~/.ethereum/keystore`. For MacOS, this keyfile will be generated at ~/Library/Ethereum/keystore/.

> NOTE: You will not be able to access the account if you lose the `Passphrase`. Make sure to store it securely. There is no **Forgot my password** option available here.

## Installing the Centrifuge Node

### System Requirements for Installing the Centrifuge Node:

To accept the incoming P2P connections, you will need to open two ports for incoming TCP connections.
- P2P Port: open ingress/egress. This port will be configured under `p2p` `port` in your config.
- API Port: restrict at will, only you or your upstream systems should need to talk to it. This port will be configured as `nodeport` in your config.

<!--
**Resource Requirements for Centrifuge API Node**
* 1 Gigabyte memory
* 1 core
-->

### Running the Ethereum Rinkeby Node

Centrifuge supports Rinkeby as a testnet. We are currently putting the finishing touches on supporting Kovan out of the box.

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
  $ geth --rinkeby \\
  --syncmode light \\
  --rpc \\
  --rpcapi db,eth,net,web3,txpool \\
  --ws \\
  --wsorigins "*" \\
  --wsapi db,eth,net,web3,txpool > /tmp/geth.log 2>&1
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
  $ centrifuge createconfig \\
  -z ~/.ethereum/keystore/<KEY-FILE> \\
  -e ws://127.0.0.1:8546 \\
  -t <DEFINE_CONFIG_DIR_NAME> \\
  -a 8082 -p 38204
  ```

  This command automatically creates an Identity and the key pairs. It then generates the config.yaml file required to run the node.

  Replace the `<KEY-FILE>` with the key file you obtained when creating the Ethereum account and `<DEFINE_CONFIG_DIR_NAME>` with the location where you want the `config.yaml`  file to be stored.

  If you have entered a password when creating the geth node in the previous step, you will need to enter this password at this step as well:

   ```bash
  $ centrifuge createconfig \\
  -z  ~/.ethereum/keystore/<KEY-FILE> \\
  -e ws://127.0.0.1:8546 \\
  -t <DEFINE_CONFIG_DIR_NAME> \\
  -a 8082 -p 38204 -k <PASSWORD>
  ```

  Additional information about [Create Config](/docs/further-reading/create-config).

4. Run the Centrifuge Node using the `config.yaml` file you created:

  ```bash
  $ centrifuge run \\
  -c /<PATH-TO-CONFIG-DIR>/config.yaml
  ```

  Replace the `PATH-TO-CONFIG-DIR` with the location of the `config.yaml` file.

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

  For more information, see the [Notification Payload](https://centrifuge-os-node-api.api-docs.io/0.0.3/dummy/Gbku2Joxnodad8i2J)

### Post-Install Verification

To make sure that your Centrifuge node setup was successful, you can run the following API calls. For example:

* To perform a health check, ping your node:

  ```bash
  $ curl -k -X GET "https://localhost:8082/ping" \\
  -H "accept: application/json"
  ```
* To create a test invoice, that is not being sent to any other Centrifuge ID:

  ```bash
  $ curl -k -X POST "https://localhost:8082/invoice" \\
  -H "authorization: YOURCENTIDHERE" \\
  -H "accept: application/json" \\
  -H "Content-Type: application/json" \\
  -d @- << 'EOF'
  {
    "data": {
      "invoice_status": "new",
      "invoice_number": "test invoice 1",
      "sender_name": "Jane Doe",
      "currency": "USD",
      "gross_amount": "100100",
      "due_date": "2019-01-01T08:18:22.167Z",
      "date_created": "2018-10-19T08:18:22.167Z"
    }
  }
  EOF
  ```

Assuming all your previous configuration steps were successful this will result in the following output for your local Centrifuge Node

```
06.12.2018 10:46:58.193   INFO   coredocument:  Anchoring document with identifiers: [document: 0xc314b9558fbdd3fe0533d25f27c1daa702cca535e0cb39ea4f8e88119bff06dc,current: 0xc314b9558fbdd3fe0533d25f27c1daa702cca535e0cb39ea4f8e88119bff06dc, next: 0xbcfa64158b0f99ce60b95bdcf575ac07bf5e27770a20d82110bffa33c622082e], rootHash: 0xb7635cf1fd562f363b6abfa75ae255e1e18536886f01d135aaf3f0760faa90f3 processor.go:225
06.12.2018 10:46:58.313   INFO   anchorRepository:  Waiting for confirmation for the anchorID [c314b9558fbdd3fe0533d25f27c1daa702cca535e0cb39ea4f8e88119bff06dc] anchor_confirmation_task.go:136
06.12.2018 10:46:58.610   INFO   anchorRepository:  Sent off the anchor [id: c314b9558fbdd3fe0533d25f27c1daa702cca535e0cb39ea4f8e88119bff06dc, hash: b7635cf1fd562f363b6abfa75ae255e1e18536886f01d135aaf3f0760faa90f3] to registry. Ethereum transaction hash [3fd64d2a66346169038bf3466f3c3dbe6e654114c46f8d251189b5d640a04171] and Nonce [7] and Check [true] ethereum_anchor_repository.go:135
06.12.2018 10:46:58.610   INFO   anchorRepository:  Transfer pending: 0x3fd64d2a66346169038bf3466f3c3dbe6e654114c46f8d251189b5d640a04171 ethereum_anchor_repository.go:137
06.12.2018 10:47:03.653   INFO   anchorRepository:  Received filtered event Anchor Confirmation for AnchorID [c314b9558fbdd3fe0533d25f27c1daa702cca535e0cb39ea4f8e88119bff06dc] and CentrifugeID [0x4ce3c9b3e17f] anchor_confirmation_task.go:159
06.12.2018 10:47:03.662   INFO   coredocument:  Anchored document with identifiers: [document: 0xc314b9558fbdd3fe0533d25f27c1daa702cca535e0cb39ea4f8e88119bff06dc, current: 0xc314b9558fbdd3fe0533d25f27c1daa702cca535e0cb39ea4f8e88119bff06dc, next: 0xbcfa64158b0f99ce60b95bdcf575ac07bf5e27770a20d82110bffa33c622082e], rootHash: 0xb7635cf1fd562f363b6abfa75ae255e1e18536886f01d135aaf3f0760faa90f3 processor.go:232
```

The node received the request to process the invoice data, then signed the document state with its keys and anchored the result on Ethereum. In this example the automatically generated document identifier is `0xc314b9558fbdd3fe0533d25f27c1daa702cca535e0cb39ea4f8e88119bff06dc`, which is also returned back in the JSON response. As no other `collaborator` was specified in this simple call, the only collaborator (Centrifuge ID) on this invoice is automatically set to the Centrifuge ID, configured in your node.

The result of your `curl` call would look like this

```json
{ 
  "header": {
    "document_id": "0x520986bd649d7b48d3a7e1ebaf74bafbfea004290736bdc4f84fc99836e54d85",
    "version_id": "0x520986bd649d7b48d3a7e1ebaf74bafbfea004290736bdc4f84fc99836e54d85",
    "collaborators": [
      "0x8c8cfaf732d3"
    ],
    "transaction_id": "2c572bb1-d3ec-47c3-941d-b55bcdd02a15"
  },
  "data": {
    "invoice_number": "test invoice 1",
    "sender_name": "Jane Doe",
    "currency": "USD",
    "gross_amount" :"100100",
    "due_date": "2019-01-01T08:18:22.167Z",
    "date_created": "2018-10-19T08:18:22.167Z"
  }
}
```

Note the `"transaction_id":"2c572bb1-d3ec-47c3-941d-b55bcdd02a15"` parameter. The Centrifuge Node will perform most of write operations in an asynchronous manner.

* To check on the status of the transaction:
  
  ```bash
  $ curl -k \\
  -X GET "https://35.184.66.29:8082/transactions/2c572bb1-d3ec-47c3-941d-b55bcdd02a15" \\
  -H "accept: application/json" \\
  -H "authorization:YOURCENTIDHERE"
  ```

  Eventually will return:

  ```json
  {
    "transaction_id": "2c572bb1-d3ec-47c3-941d-b55bcdd02a15",
    "status": "success",
    "last_updated": "1970-01-01T00:00:18.726081868Z"
  }
  ```

  Other possible states are `pending` and `failed`