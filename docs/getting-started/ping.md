---
id: ping
title: Post installation verification
category: Getting started
---

To make sure that your Centrifuge node setup was successful and is running properly you can ping your node. 

  ```bash
  $ curl -X GET "http://localhost:8082/ping" -H "accept: application/json"
  
  It will return (e.g. Kovan - Bernalheights):
  
  {"version":"0.0.4+master","network":"bernalheights"}
  ```


---

If you use Postman, make sure you have imported the most recent [Centrifuge Postman Collection](https://www.getpostman.com/collections/0d9126c8586a03af7cc7). Then simply ping the node under the menu item _ping_ by clicking _Send_ (do not forget to enter your Centrifuge ID in **Header** > **authorization**).

![](https://i.imgur.com/cI8Ux83.png | width=100)

If your node is running you will get the status "200 OK" and the additional information about what network you are running on (e.g. bernalheights - Kovan).
 
