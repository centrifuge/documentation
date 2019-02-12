---
id: workflow
title: Document State Consensus
category: Getting Started
---
Now that you have installed the Centrifuge node, you can send documents such as invoices, purchase orders, and so on. The following section describes some scenarios for sending documents and how consensus on document state is reached between the collaborating parties.

For the peer-to-peer document exchange, the Centrifuge network considers cost-effectiveness, scalability, privacy and auditability. This requires a network that allows direct, verifiable, communication between the collaborators at high speeds without waiting for commits and transactions being propagated through the public blockchain. For this purpose, Centrifuge uses nodes that communicate in a peer-to-peer fashion to exchange cryptographically signed messages between the users.

To create an immutable record of the messages, their signatures, and the hashes of the messages are published to the public blockchain as an *anchor*. This anchor is created after collaborators of a document agreed on a new document state. In the case of a disagreement on documnet state, the collaborators can independently publish new anchors, essentially creating forks of a specific document. This process allows for consistent private, verifiable exchange of data and publishing new anchor versions on demand, for example, when agreement was achieved between two or more nodes on the content of a specific document.

## Workflows for a Simple P2P Document Exchange

The following is a simplistic walkthrough of the document exchange workflow, signature, and anchoring process.

For the purpose of this example, we will assume two nodes A and B, where node A wants to send a document to node B. Before sending the document, node A calculates the Merkle root that uniquely identifies their document with the help of [precise proofs](https://github.com/centrifuge/precise-proofs) and signs the root hash with a private key. At this point, user at node A has the following options:

* Submit the signed root hash to the public blockchain before sending the document to node B in order to anchor the document.
* Submit the signed root hash with the document to node B.

Node A can send a document to Node B using the following steps:

1. Node A searches for Node B using the Centrifuge ID that helps identify Node B on the peer-to-peer network.

2. The upstream system provides Node A's Centrifuge ID.

3. Node A looks up the public keys attached to Node B's Centrifuge ID on Ethereum.

4. Node A then resolves Node B's address by retrieving public keys on the public blockchain using lip2p and a distributed hash table that contains the mapping between the public key and Node B's address.

Now that Node A knows the identity and location of Node B, it can share the document.

Upon receipt, Node B processes the document by calculating the Merkle root according to the same rules as Node A and then signs the root with its own private key. Node B now has the following options to deal with the document:

1. Reply with a signed root hash to signal an agreement for document validity.

2. End the communication and store the calculated document plus hash locally.

3. Submit its own signed hash to the public blockchain to anchor the document or append the signature chain if the sender node had previously anchored the document.

In the normal course of interaction, Node B would return its signature of the root hash to Node A. Node A then creates another Merkle Tree from the collection of all signatures (Node A, Node B) and the document root hash, plus some additional information. The root hash of this Merkle Tree is committed to Ethereum as the next anchor.

Throughout the process all upstream systems associated with Node A and Node B are notified of the document transfer status and can process information as necessary on either end.

## Changes to a Shared Document

After a document has been shared between collaborators and the receiving collaborator has acknowledged the document, they can edit or modify a shared document. In such a scenario, there could be multiple outcomes as described the following example:

* User A (at Node A) submits an update to the document by requesting a lock on the document from User B (at Node B) for a certain period of time (block height).
* User B acknowledges the lock commitment and does not make any changes to the document in that period.
* User A requests a signature from User B for the updated document.
* User B signs the request.
* User A then submits an anchor to Ethereum to save the updated, acknowledged document as the new version. 

This is the simplest scenario where all users are responsive and accommodating of other user's requests. There are more complicated scenarios where user's could potentially time out, or be malicious and update the document without acknowledging the other user's request to update the document.
