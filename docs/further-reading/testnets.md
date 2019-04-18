---
id: testnets
order: 2
title: Network configurations
category: 4.Further information
---

Besides the mainnet, Ethereum has three testnets (Rinkeby, Kovan, Ropsten) than can be used. The network configuration for the different testnets is also part of the [code base](https://github.com/centrifuge/go-centrifuge/blob/master/build/configs/default_config.yaml). This enables the client user to run on top of them with minimum configuration needed.

## RussianHill  -  Rinkeby

This network is a testnet that operates over a Proof-of-Authority Ethereum network.

- Client: geth
- Purpose: Testnet
- Bootstrap Nodes: 
  ```/ip4/35.225.200.42/tcp/38202/ipfs/
     12D3KooWNsZsW7TbcZ58N71UQSK5DjZqmFkHPHwxFKTAyoUUD8df```
  
  ```/ip4/35.225.86.210/tcp/38202/ipfs/
     12D3KooWDe2swWE3f2iJbUeQ9GUUQBHCrWLbBca9MGMqfmbCgrub```

- Deployed Smart Contracts:
    - IdentityFactory: ``0xf880b860103bd45a523574AeeC07C492031f4781``
    - AnchorRepository:     ``0x92AD44BB8F23D5d129eB82a50d3868bB4b1ceF1F``
    - InvoiceUnpaidNFT: ``0xc4A8eB27fB3Ea2C0955F8a5B1615B26d85FCBe8e``

## BernalHeights  -  Kovan

This network is a testnet that operates over a Proof-of-Authority Ethereum network (Kovan).

- Client: parity
- Purpose: Testnet
- Bootstrap Nodes:
    ```/ip4/104.154.18.51/tcp/38202/ipfs/
       12D3KooWSbxbKCbZh9JVtsQyVGdTPra4RpSA4tbvs6an11jwGA2z```
    
    ```/ip4/104.155.185.237/tcp/38202/ipfs/
       12D3KooWQm2cSmrEiaSMV4gUv7WGhpgRwo8woFSsHhZGbGi3aA8x```

- Deployed Smart Contracts:
    - IdentityFactory: ``0x1362EcBf8679243E24fA0EC425d2e10A08223c7D``
    - AnchorRepository: ``0x7180D77310dec8AB28Aa802Ec09FfA2DF64e907c``
    - InvoiceUnpaidNFT: ``0x183170481648feffe4940F3DAAd3a7bcbb0c5AAF``

## Dogpatch  -  Ropsten
This network is a testnet that operates over a Proof-of-Work Ethereum network.

- Client: geth
- Purpose: Testnet
- Bootstrap Nodes:
    ```/ip4/35.225.200.42/tcp/38202/ipfs/
       12D3KooWNsZsW7TbcZ58N71UQSK5DjZqmFkHPHwxFKTAyoUUD8df```
    
    ```/ip4/35.225.86.210/tcp/38202/ipfs/
       12D3KooWDe2swWE3f2iJbUeQ9GUUQBHCrWLbBca9MGMqfmbCgrub```

- Deployed Smart Contracts:
    - IdentityFactory: ``0x0d391E72325CedC41E48053E77288a89F2E31115``
    - AnchorRepository: ``0x2C80F1DafDa7aADeb2C175d4B43A858473E11713``
    - InvoiceUnpaidNFT: ``0xE73841140Fce93912Ec769dAd8F482Bf5c768DA5``


## Embarcadero  -  Mainnet

This network is the production network that operates over the main Proof-of-Work Ethereum network (Mainnet).

- Client: geth | parity
- Purpose: Mainnet
- Bootstrap Nodes:
    ```/ip4/35.198.122.117/tcp/38202/ipfs/
       12D3KooWAg3EcAtrYVCxwz6k6sT9iZSRztz9D7yUzpBPREFzrUoV```
    
    ```/ip4/35.242.221.111/tcp/38202/ipfs/
        12D3KooWKGwixXenuXAVqkJKmnHSAJDjzf7eGMo6troigZxm7A5R```

- Deployed Smart Contracts:
    - IdentityFactory: ``0xAF456c16386a64fd4F4b69af13a86Df0B562Aa00``
    - AnchorRepository: ``0x637B8C3D2AA3Cc206D94519b54892089c9E67990``
    - InvoiceUnpaidNFT: ``0xB5e423dCc740bBC80f906133e15601f980998356``
