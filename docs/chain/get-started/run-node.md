---
id: run-node
order: 4
title: Run Your Own Node on Mainnet/Amber/Flint Networks
category: 2. Get Started
---

***System Requirements***
We recommend a machine with at least the following capacity to run the different networks. Likely you will need more in the future though.
- 4 GB RAM
- 50 GB disk
- Standard desktop/server CPU 

## How to run?

1. **Docker Container**
This is the recommended way to experiment with your own node. It will get you started within 5 minutes. Since docker is running pre-build containers, this setup minimizes the steps required to get started and isolates any potential issues.

2. **Bare Metal**
Running a bare metal setup requires you to compile centrifuge chain from source, which can take between a 10 minutes up to 4 hours, depending on your specs. For a production grade setup, we do recommend to run a bare metal validators for 2 reasons: a) It minimizes the tools involved, which increases security, b) The performance is slightly supperior.

## Run your node in a Docker Container

1. Ensure you have [docker](https://docs.docker.com/install/) as well as [subkey](https://substrate.dev/docs/en/development/tools/subkey#installation) installed. Use `subkey` version `v2.0.0-alpha3`.
2. Generate a new key pair with subkey that will be used as your node-key: `subkey generate`. Make sure you save the output in a safe place. For mainnet keys use network flag: `subkey generate -n centrifuge`  
1. Start your node by running the following, where {name} is the name that will show up in Polkadot Telemetry and {node-key} is the private key you just generated (without the `0x` prefix). Note that we do expose RPC and WS ports here for simplicity – these ports should not be exposed in a production grade setup.

a) Amber: 
```
docker run -p 30333:30333 -p 9933:9933 -p 9944:9944 --rm -it centrifugeio/centrifuge-chain:20200506231744-908086f \
    centrifuge-chain \
    --validator \
    --name="{name}" \
    --node-key={node-key} \
    --chain=amber \
    --bootnodes=/ip4/35.242.216.93/tcp/30333/p2p/QmeoT4nzw5QDRaqdkBfnaqW9grMTLiEuYUpu4hSbseKB8C \
    --bootnodes=/ip4/34.89.161.185/tcp/30333/p2p/QmbNXcLkbD7Z2BaSUTfqb1VEkEDTij9rhS79b8F2uiJ3Ki
    --unsafe-rpc-external --unsafe-ws-external --rpc-cors="*"
```
b) Flint:
```
docker run -p 30333:30333 -p 9933:9933 -p 9944:9944 --rm -it centrifugeio/centrifuge-chain:20200506231744-908086f \
    centrifuge-chain \
    --validator \
    --name="{name}" \
    --node-key={node-key} \
    --chain=flint \
    --bootnodes=/ip4/34.89.190.227/tcp/30333/p2p/QmdMJoLc6yduqfrJtMAB6xHegydr3YXzfDCZWEYsaCJaRZ \
    --bootnodes=/ip4/35.234.68.18/tcp/30333/p2p/Qma5M7P5qym3Gfgp1wu6yk1QyMv2RzFV9GztP9AxHoK8PK \
    --unsafe-rpc-external --unsafe-ws-external --rpc-cors="*"
```
c) Mainnet:
```
docker run -p 30333:30333 -p 9933:9933 -p 9944:9944 --rm -it centrifugeio/centrifuge-chain:20200506231744-908086f \
    centrifuge-chain \
    --validator \
    --name="{name}" \
    --node-key={node-key} \
    --chain=mainnet \
    --bootnodes=/ip4/35.242.220.32/tcp/30333/p2p/QmNeEcU7pfcvqYHJhakBvZsAndd2o1wLecpiu5kSDXebSW \
    --bootnodes=/ip4/34.89.236.50/tcp/30333/p2p/Qma8avu1Cwhiynk6vUv5e1vK5LV7zzmLsoaVEd7La4ju8D
```
** Mainnet deployments should follow a more secure setup. Learn more here: https://github.com/w3f/polkadot-secure-validator

4. Generate new session keys in your node's keystore by running: `curl -H 'Content-Type: application/json' --data '{ "jsonrpc":"2.0", "method":"author_rotateKeys", "id": 1 }' http://127.0.0.1:9933` This command will return the public keys under the "result" field starting with `0x...`, which you should copy in order to use them in the next chapter.

## Bare metal instructions

1. Install dependencies: 

    a) On Unix systems (Debian, Ubuntu, ...): `sudo apt install -y cmake pkg-config libssl-dev git gcc build-essential clang libclang-dev`

    b) On MacOS: `brew install openssl cmake llvm`
1. Install Rust: `curl https://sh.rustup.rs -sSf | sh`
1. Make sure that you are using the latest Rust stable by default: `rustup default stable`
1. Install nightly for WASM support: `rustup update nightly`
1. Add the WASM target: `rustup target add wasm32-unknown-unknown --toolchain nightly`
1. Clone centrifuge-chain: `git clone -b release-v1.1.0 git@github.com:centrifuge/centrifuge-chain.git`
7. Change directory: `cd centrifuge-chain`
4. Optional - run the tests: `cargo test --all`
5. Build Centrifuge Chain: `cargo build --release`
6. Ensure you have [subkey](https://substrate.dev/docs/en/knowledgebase/integrate/subkey) installed (can be on another machine).
7. Generate a new key pair with subkey that will be used as your node-key: `subkey generate`. Make sure you save the output in a safe place. 

The node is now built and available in `target/release/centrifuge-chain`.

### Executing the binary

Below are the commands to start a node as a validator. `{name}` is the name that will show up in [Polkadot Telemetry](https://telemetry.polkadot.io) and `{node-key}` is the private key (`Secret seed` in the output of subkey) you just generated (without the 0x prefix).

To run the node for Flint you can use: 

```
./target/release/centrifuge-chain \
    --validator \
    --name="{name}" \
    --node-key={node_key} \
    --chain=flint \
    --bootnodes=/ip4/34.89.190.227/tcp/30333/p2p/QmdMJoLc6yduqfrJtMAB6xHegydr3YXzfDCZWEYsaCJaRZ \
    --bootnodes=/ip /etc/systemd/system/centrifuge-chain.servic4/35.234.68.18/tcp/30333/p2p/Qma5M7P5qym3Gfgp1wu6yk1QyMv2RzFV9GztP9AxHoK8PK
```

or Amber:

```
./target/release/centrifuge-chain \
    --validator \
    --name="{name}" \
    --node-key={node_key} \
    --chain=amber \
    --bootnodes=/ip4/35.242.216.93/tcp/30333/p2p/QmeoT4nzw5QDRaqdkBfnaqW9grMTLiEuYUpu4hSbseKB8C \
    --bootnodes=/ip4/34.89.161.185/tcp/30333/p2p/QmbNXcLkbD7Z2BaSUTfqb1VEkEDTij9rhS79b8F2uiJ3Ki
```

Mainnet:

```
./target/release/centrifuge-chain \
    --validator \
    --name="{name}" \
    --node-key={node_key} \
    --chain=mainnet \
    --bootnodes=/ip4/35.242.220.32/tcp/30333/p2p/QmNeEcU7pfcvqYHJhakBvZsAndd2o1wLecpiu5kSDXebSW \
    --bootnodes=/ip4/34.89.236.50/tcp/30333/p2p/Qma8avu1Cwhiynk6vUv5e1vK5LV7zzmLsoaVEd7La4ju8D
```

### Creating a service

For your convenience, below are templates for running it as a systemd service:

Create a service, where {pwd} is your current working directory, `{name}` is the name that will show up in [Polkadot Telemetry](https://telemetry.polkadot.io) and `{node-key}` is the private key (`Secret seed` in the output of subkey) you just generated (without the 0x prefix).

Copy below template to ` /etc/systemd/system/centrifuge-chain.servic` and replace the `{}` placeholders with your local settings.

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
    --bootnodes=/ip4/34.89.161.185/tcp/30333/p2p/QmbNXcLkbD7Z2BaSUTfqb1VEkEDTij9rhS79b8F2uiJ3Ki

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
    --bootnodes=/ip4/35.234.68.18/tcp/30333/p2p/Qma5M7P5qym3Gfgp1wu6yk1QyMv2RzFV9GztP9AxHoK8PK

[Install]
WantedBy=multi-user.target
```

c) Mainnet:
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
    --chain=mainnet \
    --bootnodes=/ip4/35.242.220.32/tcp/30333/p2p/QmNeEcU7pfcvqYHJhakBvZsAndd2o1wLecpiu5kSDXebSW \
    --bootnodes=/ip4/34.89.236.50/tcp/30333/p2p/Qma8avu1Cwhiynk6vUv5e1vK5LV7zzmLsoaVEd7La4ju8D

[Install]
WantedBy=multi-user.target
```
To run the service:
1. Start your service: `systemctl start centrifuge-chain`
2. Enable automatic restarts of your service after every boot: `systemctl enable centrifuge-chain`
3. To view and follow your logs, run `tail -f /var/log/syslog`

