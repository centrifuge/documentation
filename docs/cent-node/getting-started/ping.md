---
id: ping
order: 5
title: Post install verification
category: 2. Getting started
---

To make sure that your Centrifuge node setup was successful and is running properly you can ping your node. 

  ```bash
  $ curl -X GET "http://localhost:8082/ping" -H "accept: application/json"
  ```
  
  It will return (e.g. Kovan - Bernalheights):
  
  ``` {"version":"0.0.6+master","network":"bernalheights"}```
  
---

If you use Postman, make sure you have imported the most recent [Centrifuge Postman Collection](https://www.getpostman.com/collections/828cc6af5bc56642ba42). Then simply ping the node under the menu item _ping_ by clicking _Send_ (do not forget to enter your Centrifuge ID in **Header** > **authorization**).

![Ping](../../../src/images/cent-node/ping.png)
![Ping_Selection](../../../src/images/cent-node/ping-selection.png)

If your node is running you will get the status "200 OK" and the additional information about what network you are running on (e.g. bernalheights - Kovan).
 
