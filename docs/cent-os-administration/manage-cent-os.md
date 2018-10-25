---
id: manage-cent-os
title: Interacting with the Centrifuge Node
---

The following section lists the API calls to perform functions like sending documents, validating proofs and so on. For more information, see [Centrifuge Node API documentation](https://app.swaggerhub.com/apis-docs/centrifuge.io/cent-node/0.0.1).

## Invoice Document service

* To create a list of precise proofs for the specified fields of the document given by ID:

  ```bash
  $ curl -X POST "https://localhost/document/IDENTIFIER/proof" -H \
  "accept: application/json" -H "Content-Type: application/json" \
  -d "{ \"identifier\": \"string\", \"type\": \"string\", \"fields\": [ \"string\" ]}"
  ```

  Replace the _IDENTIFIER_ parameter with the ID of your document.

* To create a list of precise proof for the specified fields of the given version of the document given by ID:

  ```bash
  $ curl -X POST "https://localhost/document/IDENTIFIER/VERSION/proof" -H \
  "accept: application/json" -H "Content-Type: application/json" \
  -d "{ \"identifier\": \"string\", \"type\": \"string\", \"version\": \"string\", \
  \"fields\": [ \"string\" ]}"
  ```
  Replace the _IDENTIFIER_ and _VERSION_ parameters with the ID and version of your document.
* To get an invoice:

  ```bash
  $ curl -X POST "https://localhost/invoice/get" -H \
  "accept: application/json" -H "Content-Type: application/json" \
  -d "{ \"document_identifier\": \"string\"}"
  ```

* To create an invoice:

  ```bash
  curl -X POST "https://localhost/invoice" -H "accept: application/json" -H \
  "Content-Type: application/json" -d "{ \"collaborators\": [ \"string\" ], \
  \"data\": { \"invoice_status\": \"string\", \"invoice_number\": \"string\", \
  \"sender_name\": \"string\", \"sender_street\": \"string\", \"sender_city\": \
  \"string\", \"sender_zipcode\": \"string\", \"sender_country\": \"string\", \
  \"recipient_name\": \"string\", \"recipient_street\": \"string\", \
  \"recipient_city\": \"string\", \"recipient_zipcode\": \"string\", \
  \"recipient_country\": \"string\", \"currency\": \"string\", \
  \"gross_amount\": \"string\", \"net_amount\": \"string\", \
  \"tax_amount\": \"string\", \"tax_rate\": \"string\", \
  \"recipient\": \"string\", \"sender\": \"string\", \"payee\": \"string\", \
  \"comment\": \"string\", \"due_date\": \"2018-10-22T01:36:35.832Z\", \
  \"date_created\": \"2018-10-22T01:36:35.832Z\", \"extra_data\": \"string\" }}"
  ```

## Minting an NFT

To mint an NFT from the Centrifuge document:

  ```bash
  $ curl -X POST "https://localhost/token/mint" -H "accept: application/json" \
  -H "Content-Type: application/json" -d "{ \"identifier\": \"string\", \"type\": \
  \"string\", \"registry_address\": \"string\", \"deposit_address\": \"string\", \
  \"proof_fields\": [ \"string\" ]}"
  ```


