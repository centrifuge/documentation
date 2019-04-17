---
id: 1-geth-account
title: Greating a geth account
category: 2 Getting started
---

# Creating a new go-ethereum (geth) account

## Install Go Ethereum

Before you can create a new `Geth` account you have to install a stable version of Go Ethereum. How to install it depends on your operating system. Follow the latest instructions [here](https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum). 


## Create a new account

Once you have installed the latest Version of Go Ethereum, create a new ```Geth``` Account by:

  ``` $ geth account new```

  Your new account is locked with a passphrase. Please choose a passphrase and repeat it.
  
  ```bash
  Passphrase:
  Repeat Passphrase:
  Address: {168bc315a2ee09042d83d7c5811b533620531f67}
  ```
  
  > NOTE: You will not be able to access the account if you lose your `passphrase`. Make sure to store it in a safe place. There is no **Forgot my password** option available here.

  Creating a new `geth` account generates a keyfile stored at `~/.ethereum/keystore`. For MacOS, this keyfile will be generated at ~/Library/Ethereum/keystore/.

Locally generated Ethereum accounts can be looked up at any point in time via:

```$ geth account list```


You can now fund the newly generated Ethereum account with ETH to be able to make transactions. 


## Fund the account through faucets

If you are operating on one of the Ethereum testnets you will need to fund the newly generated Ethereum account with dummy ETH. Each testnet has its specific dummy ETH source. Note that this is no real money. 

**Rinkeby** 
If you are deploying the Rinkeby testnet you can request dummy ETH via https://faucet.rinkeby.io/. Simply share your Ethereum address (manually add 0x as prefix to your Ethereum account) on social media (Twitter, Facebook or G+) and paste the link of the post on the faucet website to be able to request ETH. Check your funds via https://rinkeby.etherscan.io/.

**Kovan** 
If you are using the Kovan testnet make the request via Gitter: https://gitter.im/kovan-testnet/faucet. You will be able to see whether the funds arrived via https://kovan.etherscan.io/.

**Ropsten**
If you opt for the Ropsten testnet visit https://faucet.ropsten.be/ and make a request. Track your balance on https://ropsten.etherscan.io/.
