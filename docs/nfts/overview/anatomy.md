---
id: nft-info
order: 200
title: Anatomy of an NFT
category: 1. Overview
redirect_from:
  - /nfts/
---

We recommend a certain anatomy for an NFT created with the Centrifuge [privacy enabled ERC721 library](https://github.com/centrifuge/privacy-enabled-erc721/tree/develop).

*Please note that the proposed NFT structure will change pending the launch of the Centrifuge Chain.*

### Metadata

It is useful to store publicly accessible data about the NFT in a separate metadata structure, in order to access and render this data in user facing applications.

We store this metadata in a TokenData structure which typically contains at least the document version and the address of the minter, as well as the fields which are contained in the precise proofs.

For example, an Invoice Document could contain these metadata fields:

```
struct TokenData {
  uint document_version;
  uint gross_amount;
  uint currency;
  uint due_date;
  address invoice_sender;
}
  ```

### Checks

There are several checks that should be done prior to the minting of an NFT:

1. `_checkAnchor`: Checking that the document has been properly anchored

2. `_signed`: Checking that the identity trying to mint the NFT is a valid Centrifuge identity, and that the signing key used for minting contains a signing purpose and is not revoked

3. `_checkTokenData`: If there is a proof present that there is no other token minted in this registry for the provided document, checking that the token data in the passed in token uniqueness proof matches the data on the token to be minted

4. `verify`:  Verify the submitted proofs against the NFT to be minted. For more information, please read the information in Verification of Proof Fields in the subsequent section
