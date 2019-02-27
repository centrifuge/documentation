---
id: interacting-with-node
title: Interacting with the Centrifuge Node
category: Usage
---

The following section lists the API calls to perform functions like sending documents, validating proofs and so on. For more information, see [Centrifuge Node API documentation](https://app.swaggerhub.com/apis-docs/centrifuge.io/cent-node/0.0.3).

# Document-Specific APIs

## Invoice APIs

### Detailed API parameters to create an invoice

```bash
curl -X POST "https://localhost/invoice" \\
-H "accept: application/json" \\
-H "authorization: YOURCENTIDHERE" \\
-H "Content-Type: application/json" \\
-d @- << 'EOF'
{
  "collaborators": [
    "string"
  ],
  "data": {
    "invoice_status": "string",
    "invoice_number": "string",
    "sender_name": "string",
    "sender_street": "string",
    "sender_city": "string",
    "sender_zipcode": "string",
    "sender_country": "string",
    "recipient_name": "string",
    "recipient_street": "string", 
    "recipient_city": "string",
    "recipient_zipcode": "string",
    "recipient_country": "string",
    "currency": "string",
    "gross_amount": "string",
    "net_amount": "string", 
    "tax_amount": "string",
    "tax_rate": "string",
    "recipient": "string",
    "sender": "string",
    "payee": "string",
    "comment": "string",
    "due_date": "2018-10-22T01:36:35.832Z",
    "date_created": "2018-10-22T01:36:35.832Z",
    "extra_data": "string"
  }
}
EOF
```

### Example: Create an invoice and anchor the document

Replace _YOURCENTIDHERE_ with the Centrifuge ID configured on your node.

If you want to send the invoice to another Centrifuge participant, add the "collaborators" parameter to the API call to add an additional collaborator and with that send the document to them.

```bash
curl -k -X POST "https://localhost/invoice" \\
-H "accept: application/json" \\
-H "authorization: YOURCENTIDHERE" \\
-H "Content-Type: application/json" \\
-d @- << 'EOF'
{
  "data": {
    "invoice_status": "new",
    "invoice_number": "INVOICE-0815",
    "sender_name": "Jane Doe",
    "currency": "EUR",
    "gross_amount": "100100",
    "comment": "Thanks for the widgets.",
    "due_date": "2019-05-01T08:18:22.167Z",
    "date_created": "2019-01-31T08:18:22.167Z"
  }
}
EOF
```

### Retrieveing details of an invoice

```bash
$ curl -X POST "https://localhost/invoice/get" \\
-H "authorization: YOURCENTIDHERE" \\
-H "accept: application/json" \\
-H "Content-Type: application/json" \\
-d '{ "document_identifier": "string"}'
```

# Document Agnostic APIs

## Precise Proofs

### Create precise proofs

This call creates the precise proofs for the specified fields of the document given by ID.

```bash
$ curl -X POST \\
"https://localhost/document/IDENTIFIER/proof" \\
-H "authorization: YOURCENTIDHERE" \\
-H "accept: application/json" \\
-H "Content-Type: application/json" \\
-d @- << 'EOF'
{
  "identifier": "string",
  "type": "string",
  "fields": [
    "string"
  ]
}
EOF
```

Replace the _IDENTIFIER_ parameter with the ID of your document.

### Create precise proof for a specific given version of the document

This call creates precise proofs for the specified fields of the given version of the document given by ID.

```bash
$ curl -X POST \\
"https://localhost/document/IDENTIFIER/VERSION/proof" \\
-H "authorization: YOURCENTIDHERE" \\
-H "accept: application/json" \\
-H "Content-Type: application/json" \\
-d @- << 'EOF'
{
  "identifier": "string",
  "type": "string",
  "version": "string",
  "fields": [
    "string"
  ]
}
EOF
```

Replace the _IDENTIFIER_ and _VERSION_ parameters with the ID and version of your document.

## NFT Minting

### Generic minting endpoint API

```bash
$ curl -X POST "https://localhost/token/mint" \\
-H "accept: application/json" \\
-H "authorization: YOURCENTIDHERE" \\
-H "Content-Type: application/json" \\
-d @- << 'EOF'
{
  "identifier": "string",
  "registry_address": "string",
  "deposit_address": "string",
  "proof_fields": [
    "string"
  ]
}
EOF
```

On Rinkeby testnet a payment obligation  [NFT registry](https://rinkeby.etherscan.io/address/0xdb0581a9328664855328addb0e251184640f9e5d) is deployed.

The payment obligation can be minted with an invoice document. 

The address [`0xdb0581A9328664855328AdDb0E251184640f9e5D`](https://rinkeby.etherscan.io/address/0xdb0581a9328664855328addb0e251184640f9e5d) can be used as `registry_address`

The following `proof_fields` are required `["invoice.gross_amount", "invoice.currency", "invoice.due_date", "collaborators[0]"]`
to mint a payment obligation NFT.

The `deposit_address` can be any arbitrary address which should own the NFT. 

### Example NFT Mint Call

An example mint call for a payment obligation of an invoice that was anchored on Rinkeby.

* Replace _YOURCENTIDHERE_ with the Centrifuge ID configured on your node.
* Replace _INVOICE_DOCUMENT_IDENTIFIER_ with the identifier of the invoice you want to mint the token for. For example, _0x285ab92f61507e83a10cbafd1f059e769b93639f960e7ac24c438192f7488989_
* Replace _DEPOSIT_ADDRESS_ with the Ethereum address that should receive the minted NFT.

```bash
curl -k -X POST "https://localhost/token/mint" \\
-H "accept: application/json" \\
-H "authorization: YOURCENTIDHERE" \\
-H "Content-Type: application/json" \\
-d @- << 'EOF'
{
  "identifier": "INVOICE_DOCUMENT_IDENTIFIER",
  "registry_address": "0xdb0581A9328664855328AdDb0E251184640f9e5D",
  "deposit_address": "DEPOSIT_ADDRESS",
  "proof_fields": [
    "invoice.gross_amount",
    "invoice.currency",
    "invoice.due_date",
    "collaborators[0]"
  ]
}
EOF
```