---
id: prerequisites
title: Prerequisites
---
 1. Make sure you have installed the following packages. Based on your OS, the commands are as follows:
      **Linux**:
     * Install the `jq` package:
         ```
        $ sudo apt-get install jq
        ```
     * Install the `truffle` framework:
         ```
        $ npm install -g truffle@4.0.4
        ```
     * Install `dep` tool:
         ```
        $ curl https://raw.githubusercontent.com/golang/dep/master/install.sh | sh
        ```
     * Download and install `docker-compose`:
         ```
        $ sudo curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
        ```
         ```
        $ sudo chmod +x /usr/local/bin/docker-compose
        ```
        **Mac**:
      * Install the `jq` package:
         ```
        $ brew install jq
        ```
      * Install the `truffle` framework:
         ```
        $ npm install -g truffle@4.0.4
        ```
     * Install the `dep` tool:
          ```
        $ curl https://raw.githubusercontent.com/golang/dep/master/install.sh | sh
        ```
     * Install `docker-compose`. Generally, the `docker-compose` package is bundled with the Mac OS Docker. For more information, see [Install Docker Compose](https://docs.docker.com/compose/install/#install-compose).
 2. After you have all the necessary packages, initialize `docker`:
     ```
    $ sudo systemctl start docker
    ```
 3. Install the `geth` package:
     ```
    $ sudo add-apt-repository -y ppa:ethereum/ethereum
    ```
     ```
    $ sudo apt-get update
    ```
     ```
    $ sudo apt-get install ethereum
    ```
4. Clone the `go-centrifuge` repository:
    ```
    # mkdir -p $GOPATH/src/github.com/centrifuge/go-centrifuge
    ```
     ```
    # git clone git@github.com:centrifuge/go-centrifuge.git $GOPATH/src/github.com/centrifuge/go-centrifuge
    ```
