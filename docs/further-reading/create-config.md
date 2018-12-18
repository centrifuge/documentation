---
id: create-config
title: Create Config
---
The `centrifuge createconfig` command automatically generates all required key pairs and config files
to run the node.

  ```bash
  $ centrifuge createconfig -z  ~/.ethereum/keystore/<KEY-FILE> -e ws://127.0.0.1:8546 -t <DEFINE_CONFIG_DIR_NAME> \
  -a 8082 -p 38204
  ```

Replace the `<KEY-FILE>` with the key file you obtained when creating the Ethereum account and `<DEFINE_CONFIG_DIR_NAME>` with the location where you want the `config.yaml`  file to be stored.

> **NOTE:** If the provided `keystore/<KEY-FILE>` is encrypted the password needs to be added with `-z SAMPLE_PASSWORD` to successfully create the config.

Per default the centrifuge network `russianhill` is using the Ethereum testnet rinkeby.


**Flags for createconfig command:**

```text
   -z, --accountkeypath string   Path of Ethereum Account Key JSON file (default "$HOME/datadir/main.key")
  -k, --accountpwd string       Ethereum Account Password
  -a, --apiPort int             Api Port (default 8082)
  -b, --bootstraps strings      Bootstrap P2P Nodes
  -e, --ethnodeurl string       URL of Ethereum Client Node (default "http://127.0.0.1:9545")
  -h, --help                    help for createconfig
  -n, --network string          Default Network (default "russianhill")
  -p, --p2pPort int             Peer-to-Peer Port (default 38202)
   -t, --targetdir string        Target Data Dir (default "$HOME/datadir")
  -x, --txpoolaccess            Transaction Pool access (default true)
 ```
  


In detail the command performs the following actions:
- create a personal centrifugeID
- create a directory for the [levelDB](http://leveldb.org/) (key/value storage)
- create an Identity Contract ([ERC725](https://github.com/ethereum/EIPs/issues/725)) on Ethereum
- create a signing keypair (SECP256K1) used to verify the signatures on the p2p layer
- create a second authentication keypair (SECP256K1) used to authenticate Ethereum transactions
- add the generated public keys to the identity contract
- create a custom `config.yaml` file

The generated keys are saved in PEM files. 


> NOTE: The generated `config.yaml` includes information about your Ethereum private key. Make sure to store it in a secure environment.

The provided Ethereum account in the `keystore/<KEY-FILE>` needs to have ETH to execute the `centrifuge createconfig` command.

[Rinkeby faucet](https://www.rinkeby.io/#faucet) to get ETH for testing.

## Using Infura 
It is recommended to setup up a local Ethereum node with `geth` to be fully independent and decentralized.
However, it is possible to run the centrifuge node against [Infura](https://infura.io/).

  ```bash
  $ centrifuge createconfig -z  ~/.ethereum/keystore/<KEY-FILE> -e https://rinkeby.infura.io/v3/<INFURA_ENDPOINT_ID> -t <DEFINE_CONFIG_DIR_NAME> \
  -a 8082 -p 38204 -x=false
  ```

 Instead of running against a local node replace -e `https://rinkeby.infura.io/v3/<INFURA_PROJECT_ID>` with your 
personal Infura endpoint instead.

For Infura the flag for transaction pool access needs to be `-x=false`

## Using Parity
For using a Parity node instead of a geth node. Please reach us on Slack. 
