---
id: how-to-run-a-centrifuge-node
order: 2
title: How to run a Centrifuge node
contributors: <Jeroen:jeroen@k-f.co> , <Guillermo:guillermo@k-f.co>
--- 
# Running a Centrifuge fullnode

## Hardware requirements

- Hardware requirements
    - minimum: 2+ cores CPU, 4GB+ RAM, 200GB+ free storage space
    - recommended: 4+ CPU cores, 16GB RAM, 1TB SSD or faster storage

Note: synching and Runtime Upgrades might put extra load on the node, it is recommended to burst the resources until the node is fully synched and have an
process manager restart the process if it reaches memory limits and hangs or crashes
- Check out [Centrifuge Releases](https://github.com/centrifuge/centrifuge-chain/releases) to pick the latest production release
- Install [`Docker`](https://www.docker.com/) OR [`rustup`](https://rustup.rs/)


## 1. CLI arguments

### 1.1 Full node
CLI documentation: https://docs.substrate.io/reference/command-line-tools/node-template/
```
    --port=30333
    --rpc-port=9933
    --rpc-external
    --rpc-cors=all
    --chain=centrifuge
    --parachain-id=2031
    --base-path=/data
    --log=main,info,xcm=trace,xcm-executor=trace
    --database=rocksdb
    --execution=wasm
    --wasm-execution=compiled
    --bootnodes=/ip4/35.198.171.148/tcp/30333/ws/p2p/12D3KooWDXDwSdqi8wB1Vjjs5SVpAfk6neadvNTPAik5mQXqV7jF
    --bootnodes=/ip4/34.159.117.205/tcp/30333/ws/p2p/12D3KooWMspZo4aMEXWBH4UXm3gfiVkeu1AE68Y2JDdVzU723QPc
    --bootnodes=/dns4/node-7010781199623471104-0.p2p.onfinality.io/tcp/23564/ws/p2p/12D3KooWSN6VXWPvo1hoT5rb5hei5B7YdTWeUyDcc42oTPwLGF2p
    --name=YOUR_NODE_NAME
    
    --
    --execution=wasm
    --wasm-execution=compiled
    --chain=polkadot
    --sync=fast
```
- The bootnodes, parachain-id and chain options will change for each network.
- Use a descriptive NODE_NAME
- Decide on the [log levels](https://docs.substrate.io/deploy/deployment-options/) depending on your setup

### 1.2 Archive node

Everything same as above but adding `--prune=archive` before the `--` on the CLI arguments

### 1.3 Arguments formatting
The specific format will depend on how you deploy your node:

Docker/Kuberentes
```
    - "--port=30333"
    - "--rpc-port=9933"
    ...
    - "--chain=polkadot"
    - "--sync=fast"    
```

Systemd
```
ExecStart=/var/lib/centrifuge-data/centrifuge-chain \
    --port=30333 \
    --rpc-port=9933 \
    ...
    -- \
    ...
    --sync=fast
```

### 1.4 Network values
#### 1.4.1 Mainnet (Centrifuge Polkadot parachain)
Bootnodes:
```
    --bootnodes=/ip4/35.198.171.148/tcp/30333/ws/p2p/12D3KooWDXDwSdqi8wB1Vjjs5SVpAfk6neadvNTPAik5mQXqV7jF
    --bootnodes=/ip4/34.159.117.205/tcp/30333/ws/p2p/12D3KooWMspZo4aMEXWBH4UXm3gfiVkeu1AE68Y2JDdVzU723QPc
    --bootnodes=/dns4/node-7010781199623471104-0.p2p.onfinality.io/tcp/23564/ws/p2p/12D3KooWSN6VXWPvo1hoT5rb5hei5B7YdTWeUyDcc42oTPwLGF2p
```
Chain args:
```
    --chain=centrifuge
    --parachain-id=2031
    --
    --chain=polkadot
```

#### 1.4.2 Testnet (Centrifuge DEMO)
Bootnodes:
```
    - --bootnodes=/ip4/35.246.168.210/tcp/30333/p2p/12D3KooWCtdW3HWLuxDLD2fuTZfTspCJDHWxnonKCEgT5JfGsoYQ
    - --bootnodes=/ip4/34.89.182.4/tcp/30333/p2p/12D3KooWETyS1VZTS4fS7dBZpXbPKMP129dy4KpFSWoErBWJ5i5d
    - --bootnodes=/ip4/35.198.144.90/tcp/30333/p2p/12D3KooWMJPzvEp5Jhea8eKsUDufBbAzGrn265GcaCmcnp3koPk4
```
Chain args:
```
    --chain=/resources/demo-spec-raw.json
    --parachain-id=2031
    --
    --chain=/resources/westend-alphanet-raw-specs.json
```
`demo-spec-raw.json`and `westend-alphanet-raw-specs.json` can be found either in the path above 
for the docker container or in the `node/res/` folder [in the codebase](https://github.com/centrifuge/centrifuge-chain/tree/main/node/res) 

## 2. Recommended deployments

### 2.1 Docker (docker-compose)

You can use the container published on the [Centrifuge Docker Hub repo](https://hub.docker.com/r/centrifugeio/centrifuge-chain)
or be fully trustless by cloning the [Centrifuge Chain repository](https://github.com/centrifuge/centrifuge-chain/)
and using the [Dockerfile](https://github.com/centrifuge/centrifuge-chain/blob/main/Dockerfile) (2-4h build time on an average machine),
if building the image yourself make sure you have checkout the latest tag for the most recent release:

```
git clone
git checkout
docker buildx

```

#### Create docker compose file

Create a `docker-compose.yml` file with the contents below, adjusting the following:
- Change the `ports` based on your network setup.
- Replace `/mnt/my_volume/data` with the volume and/or data folder you want to use.
- Optional: To run it as an archive node, add `"--pruning=archive"` before `---name`

```Dockerfile
version: '3'
services:
centrifuge:
    container_name: centrifuge-chain
    image: "centrifugeio/centrifuge-chain:[INSERT_RELEASE_HERE]"
    platform: "linux/amd64"
    restart: on-failure
    ports:
    - "30333:30333"
    - "9944:9933"
    volumes:
    # Mount your biggest drive
    - /mnt/my_volume/data:/data
    command:
    - "--port=30333"
    ...
    - "--"
    ...
    - "--chain=polkadot"
    - "--sync=fast"
```


Refer to the CLI arguments on section 1.

#### Run the container

```bash
docker-compose pull --policy always && docker-compose up -d
```

## 2.2 Ubuntu binaries and systemd

#### Prepare user and folder
```bash
adduser centrifuge_service --system --no-create-home
mkdir /var/lib/centrifuge-data  # Or use a folder location of you choosing. But replace the all occurences of `/var/lib/centrifuge-data` below accordingly
chown -R centrifuge_service /var/lib/centrifuge-data
```

#### 2.2 Getting the binary

##### A. Build your own (recommended)
    
```bash
# This dependencies install is only for Debian Distros:
sudo apt-get install cmake pkg-config libssl-dev git clang libclang-dev protobuf-compiler
git clone https://github.com/centrifuge/centrifuge-chain.git
cd centrifuge-chain
git checkout [INSERT_RELEASE_HERE]
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
./scripts/install_toolchain.sh
cargo build --release
cp ./target/release/centrifuge-chain /var/lib/centrifuge-data
```

##### B. "Extract from a docker image"

Pick an appropriate mainnet image for mainnet binaries. Keep in mind that the retrieved binary is build for Linux.
   
```bash
docker run --rm --name centrifuge-cp -d centrifugeio/centrifuge-chain:[INSERT_RELEASE_HERE] --chain centrifuge
docker cp centrifuge-cp:/usr/local/bin/centrifuge-chain /var/lib/centrifuge-data
```

#### Configure systemd
##### 1. Create systemd service file
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
ExecStart=/var/lib/centrifuge-data/centrifuge-chain \
    --port=30333 \
    --rpc-port=9933 \
    ...
    -- \
    ...
    --sync=fast

[Install]
WantedBy=multi-user.target
EOF
```
Refer to the CLI arguments on section 1.



##### 2. Start the systemd service
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


### 3. Test and health monitoring

Once your node is fully synced, you can run a cURL request to see the status of your node, use
the port you configured in your `/etc/systemd/system/centrifuge.service` file above

```bash
curl -H "Content-Type: application/json" \
-d '{"id":1, "jsonrpc":"2.0", "method": "eth_syncing", "params":[]}' \
localhost:9933
```

Expected output if node is synced is `{"jsonrpc":"2.0","result":false,"id":1}`

### 3.1 Use ws-health-exporter

You can monitor your node to make sure it is ready to serve RPC calls using parity's ws-health-exporter. More info [on the parity's Docker Hub page](https://hub.docker.com/r/paritytech/ws-health-exporter)

### 3.2 Monitoring
As it happens with any blockchain, the storage will run out eventually, it's recommended to monitor your storage or use any kind of auto-scaling storage to account for this.
It is also recommended to setup a reverse proxy or an API gateway to monitor the API calls and see the response rate and the response codes to look for errors over time. How to do this is out of the scope of this documentation

### Troubleshooting
#### Error logs during syncing
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

#### Stalled Syncing
If the chain stops syncing, mostly due to the unavailable blocks then please restart your node. The reason is in most cases that the p2p-view of your node is incorrect at the moment.
Resulting in your node dropping the peers and being unable to further sync. A restart helps in theses cases.

Example logs will look like the following:
```bash
WARN tokio-runtime-worker sync: [Parachain] 💔 Error importing block 0x88591cb0cb4f66474b189a34abab560e335dc508cb8e7926343d6cf8db6840b7: consensus error: Import failed: Database
```

#### Changed bootnode or peer identities
It is common  that bootnode change their p2p-identity leading to the following logs:

```bash
WARN tokio-runtime-worker sc_network::service: [Relaychain] 💔 The bootnode you want to connect to at `/dns/polkadot-bootnode.polkadotters.com/tcp/30333/p2p/12D3KooWCgNAXvn3spYBeieVWeZ5V5jcMha5Qq1hLMtGTcFPk93Y` provided a different peer ID `12D3KooWPAVUgBaBk6n8SztLrMk8ESByncbAfRKUdxY1nygb9zG3` than the one you expect `12D3KooWCgNAXvn3spYBeieVWeZ5V5jcMha5Qq1hLMtGTcFPk93Y`.
```

These logs can be safely ignored.
