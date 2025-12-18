---
id: token-management
title: Token Management
---

# Token Management

Managing who can invest in your pool is a critical part of the Centrifuge protocol, especially for compliant RWA offerings.

## Access Control

Centrifuge pools use **Identity Providers** and **Verifiers** to ensure that only eligible addresses can hold share tokens.

### Whitelisting Investors

1. **Onboarding**: Investors undergo KYC/KYB with a third-party provider.
2. **Verification**: The provider signs a claim attached to the investor's onchain identity (DID).
3. **Permissioning**: The pool checks these claims against its allowed criteria (e.g., "Accredited Investor in US").

### Token Permissions

Each share class can have its own permission settings.
- **Permissioned Share Classes**: Restricted to whitelisted addresses. Transfers are gated by the token contract (ERC-1404).
- **Unrestricted Share Classes**: Can be held by any address (if configured).

## Investor Dashboard

Issuers can manage investor relationships through the Centrifuge App or their own portal, tracking:
- Active investors
- Pending onboarding requests
- Transaction history
