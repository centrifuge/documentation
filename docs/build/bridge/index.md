---
id: bridge
order: 4
title: Centrifuge - Ethereum Bridge
---


## Install ChainBridge Client tool
```=bash
export CB_DEPLOY=${CB_DEPLOY:-v1.0.0}
export CB_SOL_COMMIT=${CB_SOL_COMMIT:-v1.0.0}

cd $PARENT_DIR
git clone https://github.com/ChainSafe/chainbridge-deploy.git
cd $PARENT_DIR/chainbridge-deploy
git checkout $CB_CB_DEPLOY

BRIDGE_DEPLOYMENT_DIR=$PARENT_DIR/chainbridge-deploy/cb-sol-cli
cd $BRIDGE_DEPLOYMENT_DIR
GIT_COMMIT=$CB_SOL_COMMIT make install
```

## Script Dependencies

### Install subkey [Optional]
In the bash snippet below we use `subkey` to convert the SS58 address into its public key representation, required by the deposit operation

Follow instructions here: https://github.com/paritytech/substrate/tree/master/bin/utils/subkey

or run the docker image: https://hub.docker.com/r/parity/subkey

### Install Jq [Optional]
In the bash snippet below we use `jq` to parse a JSON output, you can omit that and paste the address manually.
Otherwise follow instructions here to install in your distribution: https://stedolan.github.io/jq/

## Set environment variables
**Please reach out to us on [Slack](https://centrifuge.io/slack) or [Telegram](https://t.me/centrifuge_chat) for contract addresses.**
```=bash
export ETH_RPC_URL="YOUR_ETH_CLIENT_URL"
export ETH_PRIVATE_KEY="YOUR_PRIVATE_KEY"
export ETH_GAS_LIMIT=300000
export BRIDGE_ERC20_RESOURCE_ID="0x00000000000000000000000000000009e974040e705c10fb4de576d6cc261900"

```

Amber (Kovan) Config:
```=bash
export ERC20_ADDRESS="AMBER_ERC20_CONTRACT"
export BRIDGE_ADDRESS="AMBER_BRIDGE_CONTRACT"
export BRIDGE_ERC20_HANDLER="AMBER_ERC20_HANDLER"
export ETH_GAS_PRICE=10000000000

```

Mainnet Config:
```=bash
export ERC20_ADDRESS="MAINNET_ERC20_CONTRACT"
export BRIDGE_ADDRESS="MAINNET_BRIDGE_CONTRACT"
export BRIDGE_ERC20_HANDLER="MAINNET_ERC20_HANDLER"
export ETH_GAS_PRICE=40000000000

```

## Substrate Native to ERC20 Ethereum
In the substrate UI select the `Extrinsics` tab, and call `palletBridge.transferNative` with these parameters:
- Amount: `1000000000000000000` 1 RAD
- Recipient: `YOUR_ETH_TARGET_ACCOUNT`
- Dest Id: `0`

Depending on environment and network state, might take some time.

You can query the recipients balance on ethereum:
```=bash
cb-sol-cli --url $ETH_RPC_URL  erc20 balance --address YOUR_ETH_TARGET_ACCOUNT --erc20Address $ERC20_ADDRESS
```

## ERC20 to Substrate Native

Approve ERC20 Handler to move tokens on your behalf:
```=bash
cb-sol-cli --gasLimit $ETH_GAS_LIMIT --gasPrice $ETH_GAS_PRICE --privateKey $ETH_PRIVATE_KEY --url $ETH_RPC_URL erc20 approve --amount 1000000000000000000 --recipient $BRIDGE_ERC20_HANDLER --erc20Address $ERC20_ADDRESS

```
Trigger Deposit against target chain and address:
```=bash
TARGET_SUBSTRATE_ADDR="YOUR_SUBSTRATE_SS58_ADDRESS"
TARGET_PUBLICKEY=`subkey inspect --output-type json $TARGET_SUBSTRATE_ADDR | jq  -r '.publicKey'`

cb-sol-cli --gasLimit $ETH_GAS_LIMIT --gasPrice $ETH_GAS_PRICE --privateKey $ETH_PRIVATE_KEY --url $ETH_RPC_URL erc20 deposit --amount 1000000000000000000 --dest 1 --recipient $TARGET_PUBLICKEY --resourceId $BRIDGE_ERC20_RESOURCE_ID --bridge $BRIDGE_ADDRESS
```


