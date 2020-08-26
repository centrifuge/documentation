---
id: testnets
order: 1
title: Network configurations
category: 4. Further information
---

Besides the mainnet, Centrifuge has support for Kovan testnet in Ethereum. The network configuration for the different testnets is also part of the [code base](https://github.com/centrifuge/go-centrifuge/blob/master/build/configs/default_config.yaml). This enables the client user to run on top of them with minimum configuration needed. Please find the most important information summarized below.

## Flint  -  Kovan

This network is a testnet that operates over a Proof-of-Authority Ethereum network (Kovan) and a Proof-of-Stake in the Centrifuge Chain.

- Client: parity
- Purpose: Testnet
- Bootstrap Nodes:

```
/ip4/35.242.230.116/tcp/38202/ipfs/12D3KooWSbxbKCbZh9JVtsQyVGdTPra4RpSA4tbvs6an11jwGA2z
```
    
```
/ip4/35.234.72.127/tcp/38202/ipfs/12D3KooWQm2cSmrEiaSMV4gUv7WGhpgRwo8woFSsHhZGbGi3aA8x
```

- Deployed Smart Contracts:
  - identityFactory: "0x1362EcBf8679243E24fA0EC425d2e10A08223c7D"

## Amber  -  Kovan

This network is a testnet that operates over a Proof-of-Authority Ethereum network (Kovan) and a Proof-of-Stake in the Centrifuge Chain.

- Client: parity
- Purpose: Testnet
- Bootstrap Nodes:

```
/ip4/35.242.230.116/tcp/38202/ipfs/12D3KooWSbxbKCbZh9JVtsQyVGdTPra4RpSA4tbvs6an11jwGA2z
```
    
```
/ip4/35.234.72.127/tcp/38202/ipfs/12D3KooWQm2cSmrEiaSMV4gUv7WGhpgRwo8woFSsHhZGbGi3aA8x
```

- Deployed Smart Contracts:
  - identityFactory: "0x1362EcBf8679243E24fA0EC425d2e10A08223c7D"


## Mainnet

This network is the production network that operates over the main Proof-of-Work Ethereum network (Mainnet) and a Proof-of-Stake in the Centrifuge Chain.

- Client: geth | parity
- Purpose: Mainnet
- Bootstrap Nodes:

```
/ip4/35.198.122.117/tcp/38202/ipfs/12D3KooWAg3EcAtrYVCxwz6k6sT9iZSRztz9D7yUzpBPREFzrUoV
```
    
```
/ip4/35.242.221.111/tcp/38202/ipfs/ 12D3KooWKGwixXenuXAVqkJKmnHSAJDjzf7eGMo6troigZxm7A5R
```

- Deployed Smart Contracts:
    - IdentityFactory: ``0xAF456c16386a64fd4F4b69af13a86Df0B562Aa00``
