---
id: contribute-network
order: 7
title: Contribute to the Network
contributors: <Dennis Wellmann:dennis@centrifuge.io>
---

## Staking

Centrifuge Chain is a parachain in the Polkadot ecosystem.

## Run Node

### Requirements

**_System Requirements_**
We recommend consulting the [standard hardware](https://wiki.polkadot.network/docs/en/maintain-guides-how-to-validate-polkadot#standard-hardware) section of the Polkadot Wiki for specs.

Below we describe two ways of running our chain node:

1. **Docker Container**
   This is the recommended way to experiment with your own node. It will get you started within 5 minutes. Since docker is running pre-build containers, this setup minimizes the steps required to get started and isolates any potential issues.

2. **Bare Metal**
   Running a bare metal setup requires you to compile centrifuge chain from source, which can take between a 10 minutes up to 4 hours, depending on your specs. For a production grade setup, we do recommend to run a bare metal validators for 2 reasons: a) It minimizes the tools involved, which increases security, b) The performance is slightly supperior.

### Run your node in a Docker Container

1. Ensure you have [docker](https://docs.docker.com/install/) as well as [subkey](https://substrate.dev/docs/en/knowledgebase/integrate/subkey) installed. Use `subkey` version `v2.0.0`.
2. Generate a new key pair with subkey that will be used as your node-key: `subkey generate`. Make sure you save the output in a safe place. For mainnet keys use network flag: `subkey generate -n centrifuge`
3. Start your node by running the following, where {name} is the name that will show up in Polkadot Telemetry and {node-key} is the private key you just generated (without the `0x` prefix). Note that we do expose RPC and WS ports here for simplicity – these ports should not be exposed in a production grade setup.

a) Catalyst testnet:

1. Pull down Rococo Chain Spec from: wget -P /config/ https://raw.githubusercontent.com/paritytech/polkadot/08c200f6540f67c16846d3152de50f0fbbc2a73d/node/service/res/rococo.json
2. Place it in a directory of choice that will be mounted in the docker container and refer to it, in the example below I placed it in the /config folder.

```
docker run -it centrifugeio/centrifuge-chain:parachain-20220321225409-cec1169 \
    --base-path=/chain-data \
    --rpc-cors=all \
    --port=<user generated> \
    --rpc-port=9933 \
    --ws-port=9944 \
    --node-key=<user generated> \
    --ws-external \
    --rpc-external \
    --pruning=archive \
    --rpc-methods=Unsafe \
    --name=<user generated> \
    --chain=catalyst \
    --execution=wasm \
    --wasm-execution=compiled \
    --parachain-id=2031 \
    --state-cache-size=0 \
    --bootnodes=/ip4/34.107.115.238/tcp/30333/ws/p2p/12D3KooWHcuqE4UwB8tkiyDazFeuAhHNw9rdUV8DhN6pZCqwMDix \
    -- \
    --rpc-cors=all \
    --port=<user generated> \
    --rpc-port=9934 \
    --ws-port=9945 \
    --node-key=<user generated> \
    --ws-external \
    --rpc-external \
    --no-telemetry \
    --name=<user generated> \
    --chain=/config/rococo.json
```

b) Mainnet:

```
docker run -it centrifugeio/centrifuge-chain:parachain-20220303141305-681f4a6 \
    --base-path=/chain-data \
    --rpc-cors=all \
    --port=<user generated> \
    --rpc-port=9933 \
    --ws-port=9944 \
    --node-key=<user generated> \
    --ws-external \
    --rpc-external \
    --pruning=archive \
    --rpc-methods=Unsafe \
    --name=<user generated> \
    --chain=centrifuge \
    --execution=wasm \
    --wasm-execution=compiled \
    --parachain-id=2031 \
    --state-cache-size=0 \
    --bootnodes=/ip4/34.159.117.205/tcp/30333/ws/p2p/12D3KooWMspZo4aMEXWBH4UXm3gfiVkeu1AE68Y2JDdVzU723QPc \
    -- \
    --rpc-cors=all \
    --port=<user generated> \
    --rpc-port=9934 \
    --ws-port=9945 \
    --node-key=<user generated> \
    --ws-external \
    --rpc-external \
    --no-telemetry \
    --name=<user generated> \
    --chain=polkadot
```

### Bare metal instructions

1. Install dependencies:

   a) On Unix systems (Debian, Ubuntu, ...): `sudo apt install -y cmake pkg-config libssl-dev git gcc build-essential clang libclang-dev`

   b) On MacOS: `brew install openssl cmake llvm`

2. Install Rust: `curl https://sh.rustup.rs -sSf | sh`
3. Make sure that you are using the latest Rust stable by default: `rustup default stable`
4. Install nightly for WASM support:
   ```
   RUST_TOOLCHAIN=nightly
   rustup update $RUST_TOOLCHAIN
   ```
5. If above does not work, use:

   ```
   RUST_TOOLCHAIN=nightly-2020-08-16
   rustup update $RUST_TOOLCHAIN

   rustup toolchain install $RUST_TOOLCHAIN
   rustup default $RUST_TOOLCHAIN

   rustup target add wasm32-unknown-unknown --toolchain $RUST_TOOLCHAIN
   ```

6. Add the WASM target: `rustup target add wasm32-unknown-unknown --toolchain $RUST_TOOLCHAIN`
7. Clone centrifuge-chain: `git clone -b v2.0.0-rc6.0 git@github.com:centrifuge/centrifuge-chain.git`
8. Change directory: `cd centrifuge-chain`
9. Optional - run the tests: `cargo test --all`
10. Build Centrifuge Chain: `cargo build --release`
11. Ensure you have [subkey](https://substrate.dev/docs/en/knowledgebase/integrate/subkey) installed (can be on another machine).
12. Generate a new key pair with subkey that will be used as your node-key: `subkey generate`. Make sure you save the output in a safe place.

The node is now built and available in `target/release/centrifuge-chain`.

#### Executing the binary

Below are the commands to start a node. `{name}` is the name that will show up in [Polkadot Telemetry](https://telemetry.polkadot.io) and `{node-key}` is the private key (`Secret seed` in the output of subkey) you just generated (without the 0x prefix).

Mainnet:

```
centrifuge-chain
    --unsafe-ws-external
    --unsafe-rpc-external
    --rpc-cors=all
    --rpc-methods=unsafe
    --pruning=archive
    --name=centrifuge
    --node-key=NODE_KEY_HERE
    --chain=centrifuge
    --parachain-id=2031
    --bootnodes=/ip4/10.40.2.106/tcp/30333/p2p/12D3KooWJKFcDXQyjxgxRzaf9gjqPdd9C3MBGStiJdG83GBSU5VZ
    --port=30333
    --rpc-port=9933
    --ws-port=9944
    --base-path=DATA_PATH_HERE
    --log=main,info
    --execution=wasm
    --wasm-execution=compiled
    --ws-max-connections=5000
    --
    --execution=wasm
    --wasm-execution=compiled
    --chain=polkadot
```
