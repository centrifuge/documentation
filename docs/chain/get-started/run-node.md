---
id: run-node
order: 4
title: Run Your Own Node on Amber/Flint Testnet
category: 2. Get Started
---

## Run Your Own Node on Amber/Flint Testnet
---
***System Requirements***
The system has not been officially load-tested yet but a machine with the following specs will be able to run a validator for Flint
- 4 GB RAM
- 50 GB disk
- Standard desktop/server CPU 

Validators for the testnet are being run on 
- Google Cloud n1-standard-1 instances
- Digital Ocean droplets with 2GB Memory, 1vCPU
- Standard desktop machines with Docker
- Theoretically also runable on Raspberry Pi 4, but not confirmed
---

To run your own node, you have 2 options: 

1. **Docker Container**
This is the recommended way to experiment with your own node. It will get you started within 5 minutes. Since docker is running pre-build containers, this setup minimizes the steps required to get started and isolates any potential issues.

2. **Bare Metal**
Running a bare metal setup requires you to compile centrifuge chain from source, which can take between a 10 minutes up to 4 hours, depending on your specs. For a production grade setup, we do recommend to run a bare metal validators for 2 reasons: a) It minimizes the tools involved, which increases security, b) The performance is slightly supperior.

### Option 1) Run your node in a Docker Container

1. Ensure you have [docker](https://docs.docker.com/install/) as well as [subkey](https://substrate.dev/docs/en/development/tools/subkey#installation) installed.
1. Generate a new key pair with subkey that will be used as your node-key: `subkey generate`. Make sure you save the output in a safe place. 
1. Start your node by running the following, where {name} is the name that will show up in Polkadot Telemetry and {node-key} is the private key you just generated (without the `0x` prefix). Note that we do expose RPC and WS ports here for simplicity – these ports should not be exposed in a production grade setup.

a) Amber: 
```
docker run -p 30333:30333 -p 9933:9933 -p 9944:9944 --rm -it centrifugeio/centrifuge-chain:20200203153054-c2132bb \
    centrifuge-chain \
    --validator \
    --name="{name}" \
    --node-key={node-key} \
    --chain=amber \
    --bootnodes=/ip4/35.242.216.93/tcp/30333/p2p/QmeoT4nzw5QDRaqdkBfnaqW9grMTLiEuYUpu4hSbseKB8C \
    --bootnodes=/ip4/34.89.161.185/tcp/30333/p2p/QmbNXcLkbD7Z2BaSUTfqb1VEkEDTij9rhS79b8F2uiJ3Ki \
    --bootnodes=/ip4/35.246.201.166/tcp/30333/p2p/QmX1hSCYFgeW876VQvWYkkmxon91ofvsnmk8ceCk1i8Tyv \
    --bootnodes=/ip4/35.242.226.138/tcp/30333/p2p/QmW2NQVT1nLqAJCsxXixHkuCN93bCbbdminYKNSGyEX77R \
    --unsafe-rpc-external --unsafe-ws-external --rpc-cors="*"
```
b) Flint:
```
docker run -p 30333:30333 -p 9933:9933 -p 9944:9944 --rm -it centrifugeio/centrifuge-chain:20200117180836-638b681 \
    centrifuge-chain \
    --validator \
    --name="{name}" \
    --node-key={node-key} \
    --chain=/resources/flint-cc2-spec.json \
    --bootnodes=/ip4/34.89.190.227/tcp/30333/p2p/QmdMJoLc6yduqfrJtMAB6xHegydr3YXzfDCZWEYsaCJaRZ \
    --bootnodes=/ip4/35.234.68.18/tcp/30333/p2p/Qma5M7P5qym3Gfgp1wu6yk1QyMv2RzFV9GztP9AxHoK8PK \
    --bootnodes=/ip4/35.246.244.114/tcp/30333/p2p/QmdjEGZ9ZNVv4aTGGV46AkBqgCdWTHrh9wr9itYhs61gJA \
    --bootnodes=/ip4/34.89.148.219/tcp/30333/p2p/QmNd8inSbEvFuwbRToj5VQBNReqtb414oWGyDjF7tQ1qfX \
    --unsafe-rpc-external --unsafe-ws-external --rpc-cors="*"
```
4. Generate new session keys in your node's keystore by running: `curl -H 'Content-Type: application/json' --data '{ "jsonrpc":"2.0", "method":"author_rotateKeys", "id": 1 }' http://127.0.0.1:9933` This command will return the public keys under the "result" field starting with `0x...`, which you should copy in order to use them in the next chapter.

### Option 2) Run a bare metal node

1. Install dependencies: 

    a) On Unix systems (Debian, Ubuntu, ...): `sudo apt install -y cmake pkg-config libssl-dev git gcc build-essential clang libclang-dev`

    b) On MacOS: `brew install openssl cmake llvm`
1. Install Rust: `curl https://sh.rustup.rs -sSf | sh`
1. Make sure that you are using the latest Rust stable by default: `rustup default stable`
1. Install nightly for WASM support: `rustup update nightly`
1. Add the WASM target: `rustup target add wasm32-unknown-unknown --toolchain nightly`
1. Clone centrifuge-chain:

   a) Amber: `git clone -b v0.0.2 git@github.com:centrifuge/centrifuge-chain.git`

   b) Flint: `git clone -b v0.0.1 git@github.com:centrifuge/centrifuge-chain.git`

7. Change directory: `cd centrifuge-chain`
4. Optional - run the tests: `cargo test --all`
5. Build Centrifuge Chain: `cargo build --release`
6. Ensure you have [subkey](https://substrate.dev/docs/en/development/tools/subkey#installation) installed (can be on another machine).
7. Generate a new key pair with subkey that will be used as your node-key: `subkey generate`. Make sure you save the output in a safe place. 
8. Find out your current working directory: `pwd`
9. Create a service, where {pwd} is your current working directory, {name} is the name that will show up in Polkadot Telemetry and {node-key} is the private key you just generated (without the 0x prefix): `vim /etc/systemd/system/centrifuge-chain.service`

a) Amber:
```service
[Unit]
Description=Centrifuge Chain Validator
After=network.target
StartLimitIntervalSec=0

[Service]
Type=simple
Restart=always
RestartSec=1
ExecStart={pwd}/target/release/centrifuge-chain \
    --validator \
    --name="{name}" \
    --node-key={node_key} \
    --chain=amber \
    --bootnodes=/ip4/35.242.216.93/tcp/30333/p2p/QmeoT4nzw5QDRaqdkBfnaqW9grMTLiEuYUpu4hSbseKB8C \
    --bootnodes=/ip4/34.89.161.185/tcp/30333/p2p/QmbNXcLkbD7Z2BaSUTfqb1VEkEDTij9rhS79b8F2uiJ3Ki \
    --bootnodes=/ip4/35.246.201.166/tcp/30333/p2p/QmX1hSCYFgeW876VQvWYkkmxon91ofvsnmk8ceCk1i8Tyv \
    --bootnodes=/ip4/35.242.226.138/tcp/30333/p2p/QmW2NQVT1nLqAJCsxXixHkuCN93bCbbdminYKNSGyEX77R

[Install]
WantedBy=multi-user.target
```

b) Flint:
```service
[Unit]
Description=Centrifuge Chain Validator
After=network.target
StartLimitIntervalSec=0

[Service]
Type=simple
Restart=always
RestartSec=1
ExecStart={pwd}/target/release/centrifuge-chain \
    --validator \
    --name="{name}" \
    --node-key={node_key} \
    --chain=flint \
    --bootnodes=/ip4/34.89.190.227/tcp/30333/p2p/QmdMJoLc6yduqfrJtMAB6xHegydr3YXzfDCZWEYsaCJaRZ \
    --bootnodes=/ip4/35.234.68.18/tcp/30333/p2p/Qma5M7P5qym3Gfgp1wu6yk1QyMv2RzFV9GztP9AxHoK8PK \
    --bootnodes=/ip4/35.246.244.114/tcp/30333/p2p/QmdjEGZ9ZNVv4aTGGV46AkBqgCdWTHrh9wr9itYhs61gJA \
    --bootnodes=/ip4/34.89.148.219/tcp/30333/p2p/QmNd8inSbEvFuwbRToj5VQBNReqtb414oWGyDjF7tQ1qfX

[Install]
WantedBy=multi-user.target
```

14. Start your service: `systemctl start centrifuge-chain`
1. Enable automatic restarts of your service after every boot: `systemctl enable centrifuge-chain`
1. To view and follow your logs, run `tail -f /var/log/syslog`
1. Generate new session keys in your node's keystore by running: `curl -H 'Content-Type: application/json' --data '{ "jsonrpc":"2.0", "method":"author_rotateKeys", "id": 1 }' http://127.0.0.1:9933` This command will return the public keys under the "result" field starting with `0x...`, which you should copy in order to use them in the next chapter.
