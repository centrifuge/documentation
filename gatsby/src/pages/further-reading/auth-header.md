---
id: auth-header
title: Auth Header
---

A Centrifuge Node can be used as a host of multiple Centrifuge accounts. Therefore every API call, that requires an account as a context, needs to provide an authorization header.

At the moment the authorization header is simply the Centrifuge ID of the account:

Assuming that my Centrifuge ID is `0x8c8cfaf851d1`, the header will be as shown for a curl request: 

`-H "authorization: "0x8c8cfaf851d1"`

