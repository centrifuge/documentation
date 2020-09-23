---
id: ethereum-bridge
order: 2
title: Bridge Operations
category: 3. Ethereum Bridge
---

# Bridge Operations

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
```=bash
export ETH_RPC_URL="YOUR_ETH_CLIENT_URL"
export ETH_PRIVATE_KEY="YOU_PRIVATE_KEY"
export ETH_GAS_LIMIT=300000
export BRIDGE_ERC20_RESOURCE_ID="0x00000000000000000000000000000009e974040e705c10fb4de576d6cc261900"

```

Amber (Kovan) Config:
```=bash
export ERC20_ADDRESS="0xE222266F3307dee63056230646AD6cD06a7D6627"
export BRIDGE_ADDRESS="0x478ab279Ac5F4bd69382D34cF2382606E6208eFc"
export BRIDGE_ERC20_HANDLER="0x3483c3a1Af5e78AE5AaB07de3Ea57b6F3877745F"
export ETH_GAS_PRICE=10000000000

```

Mainnet Config:
```=bash
export ERC20_ADDRESS="0xd5209a7dfD89Ad5288D2464d99D1575a673BC795"
export BRIDGE_ADDRESS="0xFe50BA7241b635Eda23a32875c383A34E8a3596c"
export BRIDGE_ERC20_HANDLER="0x84D1e77F472a4aA697359168C4aF4ADD4D2a71fa"
export ETH_GAS_PRICE=40000000000

```

## Substrate Native to ERC20 Ethereum
In the substrate UI select the `Extrinsics` tab, and call `example.transferNative` with these parameters:
- Amount: `1000000000000000000` 1 RAD **(select `Atto` for units)**
- Recipient: `0xff93B45308FD417dF303D6515aB04D9e89a750Ca` (Your ETH target account)
- Dest Id: `0`

Depending on environment and network state, might take some time.

You can query the recipients balance on ethereum:
```=bash
cb-sol-cli --url $ETH_RPC_URL  erc20 balance --address 0xff93B45308FD417dF303D6515aB04D9e89a750Ca --erc20Address $ERC20_ADDRESS
```

## ERC20 to Substrate Native

Approve ERC20 Handler to move tokens on your behalf:
```=bash
cb-sol-cli --gasLimit $ETH_GAS_LIMIT --gasPrice $ETH_GAS_PRICE --privateKey $ETH_PRIVATE_KEY --url $ETH_RPC_URL erc20 approve --amount 1000000000000000000 --recipient $BRIDGE_ERC20_HANDLER --erc20Address $ERC20_ADDRESS

```
Trigger Deposit against target chain and address:
```=bash
TARGET_SUBSTRATE_ADDR="YOUR_SUBSTRATE_SS58_ADDRESS"
TARGET_PUBLICKEY=`subkey -o json inspect $TARGET_SUBSTRATE_ADDR | jq  -r '.publicKey'`

cb-sol-cli --gasLimit $ETH_GAS_LIMIT --gasPrice $ETH_GAS_PRICE --privateKey $ETH_PRIVATE_KEY --url $ETH_RPC_URL erc20 deposit --amount 1000000000000000000 --dest 1 --recipient $TARGET_PUBLICKEY --resourceId $BRIDGE_ERC20_RESOURCE_ID --bridge $BRIDGE_ADDRESS
```



