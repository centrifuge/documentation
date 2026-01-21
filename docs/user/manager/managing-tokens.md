---
sidebar_position: 7
---

# Managing tokens

Share tokens represent investor ownership in your pool. Each share class issues its own token that can be deployed across multiple networks. This guide covers viewing, editing, and managing your share class tokens.

## Understanding share tokens

### What are share tokens?

Share tokens are ERC-20 compatible tokens that represent a claim on your pool's assets. Key characteristics:

- **Price-accruing** - Token balance stays constant, but value increases as NAV grows
- **Multi-chain** - Same token can exist on multiple networks, coordinated through the hub
- **Permissioned** - Transfer restrictions can be applied based on your compliance requirements

### How pricing works

Each token has a **price per share** updated when you change NAV:

```
Token Value = Token Balance × Price Per Share
```

Because tokens are price-accruing, an investor holding 1,000 tokens sees:
- Balance: 1,000 tokens (unchanged)
- Value: Increases as price per share rises

### Multi-chain tokens

Your share token can be deployed across multiple networks:
- Total supply is tracked on the hub chain
- Each spoke chain has its own token contract
- Prices are synchronized across all networks
- Investors can hold the same token on different chains

## Viewing token details

### In pool settings

Navigate to **Settings → Structure → Tokens** to see all share classes:

| Column | Description |
|--------|-------------|
| **Name** | Share class display name |
| **Symbol** | Token ticker symbol (e.g., ACME-SR) |
| **Min Investment** | Minimum initial investment amount |
| **Networks** | Blockchains where the token is deployed |

### Token information

For each share class, you can view:
- Total supply across all networks
- Current price per share
- Token contract addresses per network
- Restriction/compliance settings

## Editing share class settings

Click the edit icon on a token row to modify settings.

<img src="/assets/images/update_token.png" alt="update token" style={{maxWidth: '500px'}} />

### Editable fields

**Token Name**
- The display name shown in the app and to investors
- Can be updated without affecting the token contract

**Minimum Investment**
- The minimum amount for initial investments
- Helps filter small deposits
- Can be changed at any time

**Metadata**
- Additional descriptive information
- Stored in pool metadata

### Non-editable fields

Some settings cannot be changed after deployment:
- Token symbol
- Token contract addresses
- Core restriction logic

## Adding a new share class

You can add additional share classes to support different investor types or risk profiles.

<img src="/assets/images/add_token_holding.png" alt="Add share class" style={{maxWidth: '500px'}} />

### When to add a share class

Common scenarios:
- **Tranched structure** - Senior and junior classes with different risk/return profiles
- **Investor segmentation** - Institutional vs retail classes
- **Fee structures** - Different management fees per class

### How to add

1. Navigate to **Settings → Structure → Tokens**
2. Click **Add a share class**
3. Configure the new class:
   - Name and symbol
   - Initial parameters
   - Restriction settings
4. Confirm deployment

> **Note**: Adding a share class deploys new smart contracts. Plan carefully before adding.

### After adding

Once deployed:
- The new token appears in your share class selector
- You can deploy vaults for the new class
- Investors can be whitelisted for the new class
- NAV must be managed separately for each class

## Token restrictions

Share tokens can have transfer restrictions for compliance purposes.

### Restriction types

**Fully permissionless**
- Anyone can invest, redeem, or transfer
- No whitelist required

**Whitelist required**
- Only whitelisted addresses can hold tokens
- Transfers between non-whitelisted addresses blocked

**Freeze-only**
- No whitelist, but specific addresses can be frozen
- Useful for compliance holds

**Restricted redemptions**
- Deposits are open
- Redemptions require approval

### Managing restrictions

Restrictions are enforced at the smart contract level. To manage:
- **Whitelist investors** - See [Managing investors](managing-investors.md)
- **Freeze addresses** - See [Managing investors](managing-investors.md)

## Share classes and vaults

Each share class connects to vaults for investor access:

```
Share Class (Token)
       │
       ├── Vault (Base, USDC)
       ├── Vault (Arbitrum, USDC)
       └── Vault (Ethereum, USDT)
```

- One share class can have multiple vaults
- Each vault accepts a specific asset on a specific network
- All vaults for a class issue the same token

See [Configuring vaults](configuring-vaults.md) for vault setup.

## Best practices

### Naming conventions

- Use clear, consistent naming (e.g., "Senior", "Junior", "Class A")
- Include identifiers in symbols (e.g., ACME-SR, ACME-JR)
- Document the purpose of each class

### Planning share classes

- Determine your structure before deployment
- Consider investor types and regulatory requirements
- Share class parameters are difficult to change later

### Monitoring tokens

- Track total supply across networks
- Monitor price changes after NAV updates
- Verify token balances reconcile with investor records

## Common issues

**Can I change a token's symbol?**
No, the symbol is set at deployment and cannot be changed.

**Can I delete a share class?**
Share classes cannot be deleted once deployed. You can disable all vaults to prevent new investments.

**Why do I have different supplies on different networks?**
Supply varies by network based on where investors hold tokens. Total supply is tracked on the hub chain.

**Can investors transfer tokens between networks?**
Not directly through the app. Cross-chain transfers require bridging, which may have restrictions based on your compliance settings.

## How restrictions are enforced

Centrifuge uses Identity Providers and Verifiers to ensure only eligible addresses can hold share tokens:

1. **Onboarding** - Investors complete KYC/KYB with a third-party provider
2. **Verification** - Provider signs a claim attached to the investor's onchain identity (DID)
3. **Permissioning** - Pool checks claims against allowed criteria (e.g., "Accredited Investor")

Token transfers are gated at the contract level using ERC-1404. Each share class can have its own permission settings—some may be restricted to whitelisted addresses while others can be held by any address.

See [Managing investors](managing-investors.md) for whitelisting workflows.

## Related

- [Managing NAV](nav-and-pricing.md) - Token price is derived from NAV
- [Managing investors](managing-investors.md) - Control who can hold tokens
- [Configuring vaults](configuring-vaults.md) - Where investors get tokens
- [Pool settings](pool-settings.md) - Access token management
