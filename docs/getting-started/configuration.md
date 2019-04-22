---
id: configuration
order: 4
title: Centrifuge configuration
category: 2. Getting started
---

The default configuration with all available options is accessible [here](https://github.com/centrifuge/go-centrifuge/blob/develop/build/configs/default_config.yaml). You may adjust certain configurations according to your requirements.

* Configure node under NAT

  If you want your node to be accessible outside your private network, you will need to manually specify the External IP of the node:

  ```yaml
  p2p:
    externalIP: "100.111.112.113"
  ```

* Configure notification webhook (for incoming data from other peers)

  To receive an event when a new document has been shared with your node, add your WebHook endpoint in the config.yaml file:

  ```yaml
  notifications:
    endpoint: "http://localhost:8080/endpoint/"
  ```

  For more information, see the [Notification Payload](https://centrifuge-os-node-api.api-docs.io/0.0.3/dummy/Gbku2Joxnodad8i2J).
  
* Ethereum max gas price

  To adjust the maximum gas price (in wei) you are willing to pay per transaction:
    
  ```yaml
  ethereum:
    maxGasPrice: "xx000000000"
  ```
  
  Note: 20 Gwei would be "20000000000".
    
* Disable Pre-commit

    The pre-commit option configures the node to acquire a lock on the anchor that should be anchored next before asking other peers to sign the message. This setting is enabled by default. We do not recommend disabling it. Only do so if you know what you are doing.
  
    ```yaml
  anchoring:
      precommit: false
    ```
