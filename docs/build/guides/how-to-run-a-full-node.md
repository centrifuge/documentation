---
id: how-to-run-a-full-node
order: 2
title: How to run a Centrifuge chain full node
contributors: <NunoAlexandre:nuno@k-f.co>
---


This guide will teach you how to run a Centrifuge Chain full node.

## Prerequisites

- [Set up your Axelar validator](https://docs.axelar.dev/validator/setup/overview)
- Hardware requirements
    - minimum: 2+ cores CPU, 4GB+ RAM, 200GB+ free storage space
    - recommended: 4+ CPU cores, 16GB RAM, 1TB SSD or faster storage
- Check out [Centrifuge Releases](https://github.com/centrifuge/centrifuge-chain/releases) to pick the latest production release
- Install [`Docker`](https://www.docker.com/) OR [`rustup`](https://rustup.rs/)

## Options
1. Run with Docker
2. Run with binaries

## 1. Run with Docker

You can use the container published on the [Centrifuge DockerHub repo](https://hub.docker.com/r/centrifugeio/centrifuge-chain/tags?page=1&ordering=last_updated)
or be fully trustless by cloning the [Centrifuge Chain repository](https://github.com/centrifuge/centrifuge-chain/)
and using the [Dockerfile](https://github.com/centrifuge/centrifuge-chain/blob/main/Dockerfile) (2-4h build time on an average machine),
in the latter make sure to checkout the specific commit for the latest release before building.

You can use the `latest` Docker tag or find the latest release manually in the [Centrifuge repository](https://github.com/centrifuge/centrifuge-chain/releases).

More images in the official [Docker Hub repository](https://hub.docker.com/repository/docker/centrifugeio/centrifuge-chain/tags?page=1&ordering=last_updated).

### Create docker compose file

Create a `docker-compose.yml` file with the contents below, adjusting the following:
- Change the `ports` based on your network setup.
- Replace `/mnt/my_volume/data` with the volume and/or data folder you want to use.
- Optional: To run it as an archive node, add `"--pruning=archive"` before `---name`

```Dockerfile
version: '3'
services:
centrifuge:
    container_name: centrifuge-chain
    image: "centrifugeio/centrifuge-chain:[INSERT_LATEST_RELEASE_HERE]"
    platform: "linux/amd64"
    restart: on-failure
    ports:
    - "30333:30333"
    - "9933:9933"
    - "9944:9944"
    volumes:
    # Mount your biggest drive
    - /mnt/my_volume/data:/data
    command:
    - "--port=30333"
    - "--rpc-port=9933"
    - "--ws-port=9944"
    - "--ws-external"
    - "--rpc-external"
    - "--rpc-cors=all"
    - "--chain=centrifuge"
    - "--parachain-id=2031"
    - "--base-path=/data"
    - "--log=main,info"
    - "--execution=wasm"
    - "--wasm-execution=compiled"
    - "--ws-max-connections=5000"
    - "--bootnodes=/ip4/35.198.171.148/tcp/30333/ws/p2p/12D3KooWDXDwSdqi8wB1Vjjs5SVpAfk6neadvNTPAik5mQXqV7jF"
    - "--bootnodes=/ip4/34.159.117.205/tcp/30333/ws/p2p/12D3KooWMspZo4aMEXWBH4UXm3gfiVkeu1AE68Y2JDdVzU723QPc"
    - "--bootnodes=/dns4/node-7010781199623471104-0.p2p.onfinality.io/tcp/23564/ws/p2p/12D3KooWSN6VXWPvo1hoT5rb5hei5B7YdTWeUyDcc42oTPwLGF2p"
    - "--name=YOUR_NODE_NAME"
    - "--"
    - "--execution=wasm"
    - "--wasm-execution=compiled"
    - "--chain=polkadot"
    - "--sync=fast"
```
  

### Run the container

```bash
docker-compose pull --policy always && docker-compose up -d
```

## 2. Get or build binaries

### Prepare user and folder
```bash
adduser centrifuge_service --system --no-create-home
mkdir /var/lib/centrifuge-data  # Or use a folder location of you choosing. But replace the all occurences of `/var/lib/centrifuge-data` below accordingly
chown -R centrifuge_service /var/lib/centrifuge-data
```

### Getting the binary

#### A. Build your own (recommended)
    
```bash
# This dependencies install is only for Debian Distros:
sudo apt-get install cmake pkg-config libssl-dev git clang libclang-dev protobuf-compiler
git clone https://github.com/centrifuge/centrifuge-chain.git
cd centrifuge-chain
git checkout [INSERT_LATEST_RELEASE_HERE]
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
./scripts/install_toolchain.sh
cargo build --release
cp ./target/release/centrifuge-chain /var/lib/centrifuge-data
```

#### B. "Extract from a docker image"
Use `latest` for testent, or a specific release tag for mainnet binaries. Keep in mind that the retrieved binary is build for Linux.
   
```bash
docker run --rm --name centrifuge-cp -d centrifugeio/centrifuge-chain:[INSERT_LATEST_RELEASE_HERE] --chain centrifuge
docker cp centrifuge-cp:/usr/local/bin/centrifuge-chain /var/lib/centrifuge-data
```

### Configure systemd
#### 1. Create systemd service file
We are now ready to start the node, but to ensure it is running in the background and auto-restarts in case of a server failure, we will set up a service file using systemd.
Change the `ports` based on your network setup.


**Notes**
- It is important to leave the `--bootnodes $ADDR` in one line as otherwise the arguments are not parsed correctly,
    making it impossible for the chain to find peers as no bootnodes will be present.

- To run it as an archive node, add `--pruning=archive \\` before `--name` below.


```bash
sudo tee <<EOF >/dev/null /etc/systemd/system/centrifuge.service
[Unit]
Description="Centrifuge systemd service"
After=network.target
StartLimitIntervalSec=0

[Service]
Type=simple
Restart=always
RestartSec=10
User=centrifuge_service
SyslogIdentifier=centrifuge
SyslogFacility=local7
KillSignal=SIGHUP
ExecStart=/var/lib/centrifuge-data/centrifuge-chain --bootnodes=/ip4/35.198.171.148/tcp/30333/ws/p2p/12D3KooWDXDwSdqi8wB1Vjjs5SVpAfk6neadvNTPAik5mQXqV7jF --bootnodes=/ip4/34.159.117.205/tcp/30333/ws/p2p/12D3KooWMspZo4aMEXWBH4UXm3gfiVkeu1AE68Y2JDdVzU723QPc --bootnodes=/dns4/node-7010781199623471104-0.p2p.onfinality.io/tcp/23564/ws/p2p/12D3KooWSN6VXWPvo1hoT5rb5hei5B7YdTWeUyDcc42oTPwLGF2p \
    --port=30333 \
    --rpc-port=9933 \
    --ws-port=9944 \
    --ws-external \
    --rpc-external \
    --rpc-cors=all \
    --chain=centrifuge \
    --parachain-id=2031 \
    --base-path=/var/lib/centrifuge-data \
    --log=main,info \
    --execution=wasm \
    --wasm-execution=compiled \
    --ws-max-connections=5000 \
    --name=YOUR_NODE_NAME
    -- \
    --chain=polkadot \
    --execution=wasm \
    --wasm-execution=compiled \
    --sync=fast

[Install]
WantedBy=multi-user.target
EOF
```
    


#### 2. Start the systemd service
Actually enable the previously generated service and start it.

```bash
sudo systemctl enable centrifuge.service
sudo systemctl start centrifuge.service
```

If everything was set-up correctly, your node should now be starting the process of synchronization.
This will take several hours, depending on your hardware. To check the status of the running service or to follow the logs, use:

```bash
sudo systemctl status centrifuge.service
sudo journalctl -u centrifuge.service -f
```


## Test your RPC connection

Once your node is fully synced, you can run a cURL request to see the status of your node, use
the port you configured in your `/etc/systemd/system/centrifuge.service` file above

```bash
curl -H "Content-Type: application/json" \
-d '{"id":1, "jsonrpc":"2.0", "method": "eth_syncing", "params":[]}' \
localhost:9933
```

Expected output if node is synced is `{"jsonrpc":"2.0","result":false,"id":1}`


## Optional: Using a snapshot instead of synching from scratch
* By downloading a snapshot from the Centrifuge Dev team:
  - You get faster sync, your full node will be ready in within hours (time depends on how old the snapshot is)
  - You are trusting the Centrifuge's team snapshots and therefore is not as "trustless" or "decentralized" as synching from scratch

Prerequisites:
- [Install Gcloud CLI](https://cloud.google.com/sdk/docs/install)
- Install lz4. Ex: `sudo snap install lz4`

Step-by-step instructions:

```bash
# List the available bundles
gsutil ls gs://centrifuge-snapshots/mainnet

# Download the bundle (~400GB)
# If you try to pipe the download directly into lz4 and tar and the network fails you'll have to
# start from scratch. We recommend downloading first to a file.
gsutil cp gs://centrifuge-snapshots/mainnet/YYYY-MM-DD-snap.tar.lz4 $TMP_PATH/
lz4 -d -c -q  $DATA_FOLDER_PATH/YYYY-MM-DD-snap.tar.lz4 | tar -xvf - -C $DATA_FOLDER_PATH
```

Inspect the `$DATA_FOLDER_PATH` it should contain a `chain` and a `relay-chain` directory, the parachain and relay chain
DB data folders respectively. Use `$DATA_FOLDER_PATH` on your node config as `--base-path=$DATA_FOLDER_PATH` directly
Remove the `chain` directory to sync ONLY the parachain from scratch but keep the relay DB (usually much bigger), this will remove a little bit of trust
in the Centrifuge dev team by synching the parachain from scratch at least, which is what Axelar validators care about most in terms of data.


## Configure `vald`

In order for `vald` to connect to your local node, your `rpc_addr` should be exposed in
vald's `config.toml`.

```bash
[[axelar_bridge_evm]]
name = "centrifuge"
rpc_addr = "http://IP:PORT"
start-with-bridge = true
```

## Troubleshooting
### Error logs during syncing
During fast syncing it is expected to see the following error messages on the `[Relaychain]` side.

```bash
ERROR tokio-runtime-worker sc_service::client::client: [Relaychain] Unable to pin block for finality notification. hash: 0x866f…387c, Error: UnknownBlock: State already discarded [...]
WARN tokio-runtime-worker parachain::runtime-api: [Relaychain] cannot query the runtime API version: Api called for an unknown Block:  State already discarded [...]
```

as long as the following logs are seen

```bash
INFO tokio-runtime-worker substrate: [Relaychain] ⚙️  Syncing, target=#18279012 (9 peers), best: #27674 (0x28a4…6fe6), finalized #27648 (0x406d…b89e), ⬇ 1.1MiB/s ⬆ 34.6kiB/s
INFO tokio-runtime-worker substrate: [Parachain] ⚙️  Syncing 469.4 bps, target=#4306117 (15 peers), best: #33634 (0x79d2…0a45), finalized #0 (0xb3db…9d82), ⬇ 1.3MiB/s ⬆ 2.0kiB/s
```

everything is working correctly. Once the chain is fully synced the errors logs will go away.

### Stalled Syncing
If the chain stops syncing, mostly due to the unavailable blocks then please restart your node. The reason is in most cases that the p2p-view of your node is incorrect at the moment.
Resulting in your node dropping the peers and being unable to further sync. A restart helps in theses cases.

Example logs will look like the following:
```bash
WARN tokio-runtime-worker sync: [Parachain] 💔 Error importing block 0x88591cb0cb4f66474b189a34abab560e335dc508cb8e7926343d6cf8db6840b7: consensus error: Import failed: Database
```

### Changed bootnode or peer identities
It is common  that bootnode change their p2p-identity leading to the following logs:

```bash
WARN tokio-runtime-worker sc_network::service: [Relaychain] 💔 The bootnode you want to connect to at `/dns/polkadot-bootnode.polkadotters.com/tcp/30333/p2p/12D3KooWCgNAXvn3spYBeieVWeZ5V5jcMha5Qq1hLMtGTcFPk93Y` provided a different peer ID `12D3KooWPAVUgBaBk6n8SztLrMk8ESByncbAfRKUdxY1nygb9zG3` than the one you expect `12D3KooWCgNAXvn3spYBeieVWeZ5V5jcMha5Qq1hLMtGTcFPk93Y`.
```

These logs can be safely ignored.
