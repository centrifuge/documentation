---
id: limitations
order: 4
title: Protocol Limitations
category: 4. Further information
---

Centrifuge OS is in an early stage of its development. The protocol and its first client implementation have a limited feature set compared to the end-vision. Not all features are implemented yet, and tradeoffs between security, speed, end-user features, and protocol flexibility are made continuously.

Following is a list of important limitations and not yet implemented features of Centrifuge OS.

## The Meaning of a Signature

When two Centrifuge nodes exchange documents with each other, they automatically attach signatures to the transferred documents after validation of the data payload and signatures/keys. A Centrifuge node validates the structural integrity of a received document as well as the validity of previous signatures compared to the public keys of the corresponding Centrifuge ID of the counterparty. A Centrifuge itself does not validate if the document data makes sense from a business point of view.

A Centrifuge node is a technical client to Centrifuge OS. This client exchanges and signs data in well-known formats. It does not validate document data authenticity.

Data authenticity and correctness are always validated by the upstream system. E.g. the accounting system interacting with a Centrifuge node.

A signature of a collaborator on a Centrifuge document signifies the technical receipt and validation of a message. It does not signify the agreement that a document itself is valid, e.g. if an invoice amount is matching the underlying purchase order.

It is possible to attach additional signatures to a document (e.g., with custom attributes) to indicate "business agreement" of a document. However, this is not part of the protocol specifications and is the responsibility of an upstream system.

## Collaborator List Visible to all Collaborators

Important: Nobody outside of a document can view or deduce the parties who collaborate on a document.

However, the list of collaborators on any single document is visible to all of the document's collaborators. This is part of the implementation approach where signatures are gathered from all collaborators on a document when anchoring a new state. To do this, the list of collaborators has to be known when making an update.

For the initial implementation, we assume that businesses only add their already known and trusted business partners to a document as a collaborator rendering this limitation insignificant.

## No Document Forking

Centrifuge OS does not support forking or successive merging of document state. If disagreement of document state between collaborators exist this has to be solved by the user by creating a new document.

Collaborators can withhold their signature on a given document update if they choose to do so. The mitigation to this behavior is to remove the withholding/offline collaborator from the document's collaborator list and re-issue the document update and/or create a new document based on the original document data with a new set of collaborators.

For the initial implementation, we assume that businesses only add their trusted business partners to a document as a collaborator. With that, the likelihood of disagreement on the protocol level is low.

### Blocking Document Updates by Malicious Collaborator

It is possible for a malicious collaborator to publish a new document version that blocks other collaborators from updating the original document. This can be done by the malicious collaborator by removing all collaborators from the original document and then publishing a new version with the "next identifier," essentially preventing other collaborators from publishing a new version of the document with this identifier.

Mid-term this will be mitigated by supporting document forking. Short-term the mitigation is as described above: The users can create a new document with the last benign document data and do not add the malicious actor as a collaborator to the document. This will create a new chain of document updates that the malicious collaborator can neither access nor block.

For the initial implementation, we assume that businesses only add their trusted business partners to a document as a collaborator. With that, the likelihood of a malicious actor trying to block document updates is low.

### Blocking Document Updates by "Accident"/Race condition

Two or more collaborators could try to update a document at the same time. The "first" update that goes through (the first version being anchored) essentially blocks the other from updating the desired document version.

Mitigation is to always have "pre-commit" enabled. Mid-term this is also possible to be mitigated by supporting document forking/merging.

## No Collaborator Signatures Required to Anchor

It is possible for any collaborator to anchor a new document version at any time. Previous collaborator's signatures are not required to anchor/publish a new document version. This is less of a limitation and more of a feature to prevent malicious collaborators from blocking documents by withholding signatures.

Mid-term a feature could be added that requires an `x of n` signature scheme where a certain threshold of collaborator signatures is required to anchor a new state. For now, anybody can publish a new version of a document.
