---
id: chain-account
order: 3
title: Creating a Centrifuge Chain account
category: 2. Getting started
---

## Install Parity Substrate Subkey

Before you can create a new centrifuge chain account you have to install a version of Parity Substrate Subkey [here](https://github.com/paritytech/substrate/tree/v2.0.0-alpha.3/bin/utils/subkey).
To install, we recommend you can follow:
### Build native binary 
Download and install rust nightly version:
```bash
rustup update nightly-2020-02-27
rustup toolchain install nightly-2020-02-27
rustup default nightly-2020-02-27
rustup target add wasm32-unknown-unknown --toolchain nightly-2020-02-27
``` 
Checkout https://github.com/paritytech/substrate/tree/v2.0.0-alpha.3

```bash
cargo build --release
```
### Use docker version
`parity/subkey:2.0.0-alpha.3`


## Create a new account

### Mainnet
  ```bash
  $ subkey --sr25519 --network centrifuge generate
  ```

### Testnets
  ```bash
  $ subkey --sr25519 generate
  ```
  
You can now fund the newly generated centrifuge chain account with RAD to be able to send transactions. 

## Fund the account through faucets 

**Amber/Flint:** https://faucets.blockxlabs.com/

**Mainnet:** https://faucet.chain.centrifuge.io/

