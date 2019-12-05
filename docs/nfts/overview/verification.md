---
id: verification 
order: 3
title: Verification of Proof Fields
category: 1. Overview
redirect_from:
  - /nfts/
---

By using [precise proofs](https://medium.com/centrifuge/introducing-precise-proofs-create-validate-field-level-merkle-proofs-a31af9220df0), we can supply privacy preserving proofs that certain fields are present in the NFT to be minted, without revealing the exact value of these fields. Leaves are created by hashing and encoding the property, value, and salts of the data fields which we want to prove:

```  
    bytes32[] memory leaves = new bytes32[](5);
    leaves[0] = sha256(abi.encodePacked(GROSS_AMOUNT, values[0], salts[0]));
    leaves[1] = sha256(abi.encodePacked(CURRENCY, values[1], salts[1]));
    leaves[2] = sha256(abi.encodePacked(DUE_DATE, values[2], salts[2]));
    leaves[3] = sha256(abi.encodePacked(NEXT_VERSION, values[3], salts[3]));
    leaves[4] = sha256(abi.encodePacked(properties[4], values[4], salts[4]));
```


The resulting array of leaves can be verified against the array of supplied proofs which can be generated with our precise-proofs library:


```
proofs = new bytes32[][](5);
        proofs[0] = new bytes32[](7);
        proofs[0][0] = 0xd42948fa37dd912117ac5966b55d4b364005e4dc366e3afb6caf38649dce7d20;
        proofs[0][1] = 0xccaad8761ce1a541483d2fb98d621a9a9c11d7b03d82fdbeb2cefdbb8405916e;
        proofs[0][2] = 0x598e8661d6c2a206e632f12c9031a3b50e02af430b144f71db2bbde83e8da2ec;
        proofs[0][3] = 0x7f8410d0adbc62a9b9933c8cb16a45c0cca73dec62e89b185f22a06073e7b960;
        proofs[0][4] = 0x6a37a214f9f3cb50f0cbdfd4183040781860acf7ccb1a4c8453cf31003fc99e7;
        proofs[0][5] = 0x41337de1d0f1a323f5fcca15144b7a1f37cbb442a053fee73f84f27afbc3d719;
        proofs[0][6] = 0x480d3bf285726b8ecf2199da06f35bb77830e07828e036bf9a8dc8c95129f45e;
        ...
```

The verification method can be found in our optimised [Merkle Verifier](https://github.com/centrifuge/privacy-enabled-erc721/blob/develop/src/merkle.sol) contract.

An example of an NFT with one proof which can be minted using methods from the precise-proofs library is as follows:

    pragma solidity >=0.4.23;
    pragma experimental ABIEncoderV2;
    
    import "privacy-enabled-erc721/nft.sol";
    
    
    contract DocumentationNFT is NFT {
        // compact property for 'loanAmount'
        bytes constant internal AMOUNT = hex"010000000000001cdb691b0c78e9e1432d354d52e26b3cd5054cd1261c4272bf8fce2bcf285908f300000005";
    
        struct TokenData {
            uint document_version;
            uint amount;
            address borrower;
        }
        mapping (uint => TokenData) public data;
    
        constructor (address anchors_) NFT("Documentation NFT", "DNFT", anchors_) public {
        }
    
        // --- Utils ---
        function bytesToUint(bytes memory b) public returns (uint256){
          uint256 number;
          for (uint i = 0; i < b.length; i++){
                  number = number + uint8(b[i]) * (2 ** (8 * (b.length - (i + 1))));
                }
          return number;
        }
    
        // --- Mint Method ---
        function mint(address usr, uint tkn, uint anchor, bytes32 data_root, bytes32 signatures_root, bytes[ memory value, bytes32 memory salt, bytes32[][] memory proofs) public {
    
          data[tkn] = TokenData(
            anchor,
            bytesToUint(values),
            usr
          );
    
          bytes32 leaf = sha256(abi.encodePacked(AMOUNT, value, salt));
    
          require(verify(proofs, data_root, leaves), "Validation of proofs failed.");
          require(_checkAnchor(anchor, data_root, signatures_root), "Validation against document anchor failed.");
          _mint(usr, tkn);
        }
    }
    
 The mint method on this NFT would expect one proof of "loanAmount", which has been hardcoded as a state variable. It would furthermore also check that the document from which the NFT should be minted has been properly anchored, before minting the NFT.