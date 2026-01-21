---
sidebar_position: 11
---

# Pool settings

The Settings page provides pool-level configuration options that apply across all share classes. Changes made here affect the entire pool, not just individual tokens.

![Settings Overview](/assets/images/settings.jpeg)

## Accessing settings

1. Select your pool from the token list
2. Click **Settings** in the sidebar (under the pool name, not under a share class)

> **Important**: A banner reminds you that settings apply to the entire pool. Changes affect all tokens.

## Structure tab

### Hub chain setup

Displays read-only information about your pool's hub configuration:

| Field | Description |
|-------|-------------|
| **Hub Chain** | The primary blockchain for your pool (typically Ethereum) |
| **Pool Denomination** | The base currency for NAV and pricing (e.g., USD, USDC) |

This information is set at pool creation and cannot be changed.

### Offchain holdings setup

Track assets that exist outside the blockchain:
- Bank account balances
- Traditional securities
- Real estate valuations
- Other offchain assets

#### Uploading offchain holdings

1. Click **Upload holdings**
2. Prepare your CSV file with appropriate columns
3. Upload the file in the modal
4. Review the parsed data
5. Confirm to save to pool metadata

#### CSV file format

Your CSV should include headers describing your offchain assets:

```csv
Asset,Type,Value,Currency,Custodian,Date
Treasury Bills,Fixed Income,1000000,USD,Bank ABC,2024-01-15
Real Estate Fund,Real Estate,500000,USD,Property Co,2024-01-15
```

> **Note**: The system accepts any CSV structure. Define columns that match your reporting needs.

Only **Hub Managers** can upload offchain holdings data.

### Tokens management

View and manage all share classes (tokens) in your pool.

| Column | Description |
|--------|-------------|
| **Name** | Share class display name |
| **Symbol** | Token ticker symbol |
| **Min Investment** | Minimum initial investment amount |
| **Networks** | Blockchains where the token is deployed |

#### Editing a share class

1. Click the edit icon on a token row
2. Modify available settings (name, minimum investment)
3. Save changes

<img src="/assets/images/update_token.png" alt="update token holdings" style={{maxWidth: '500px'}} />

#### Adding a new share class

1. Click **Add a share class**
2. Fill in required information (name, symbol, initial parameters)
3. Confirm to deploy

<img src="/assets/images/add_token_holding.png" alt="Add token holdings" style={{maxWidth: '500px'}} />

> **Note**: Adding share classes creates new smart contracts. Plan carefully before adding.

## Access tab

Manage Hub Managers for your pool.

### What are Hub Managers?

Hub Managers have full administrative access:
- Update NAV and pricing
- Process all orders
- Manage investors
- Configure vaults and managers
- Access all settings

### Viewing Hub Managers

<img src="/assets/images/hub_manager_access.png" alt= "hub manager access" style={{maxWidth: '500px'}} />

The table shows all addresses with Hub Manager permissions.

### Adding a Hub Manager

1. Click **Add hub manager**
2. Enter the wallet address
3. Confirm the transaction

<img src="/assets/images/add_hub_manager.png" alt= "add hub manager" style={{maxWidth: '500px'}} />

### Removing a Hub Manager

1. Click the delete icon next to the manager
2. Confirm the removal

> **Warning**: Ensure at least one Hub Manager remains. Removing all managers locks you out of the pool.

## Best practices

### Offchain holdings

- **Regular Updates**: Upload new holdings data on a consistent schedule
- **Consistent Format**: Use the same CSV structure each time
- **Audit Trail**: Archive previous uploads for compliance

### Hub Manager access

- **Minimum Necessary**: Only grant access to those who need it
- **Multi-Sig**: Use Safe wallets for Hub Manager addresses when possible
- **Regular Review**: Periodically audit the manager list
- **Prompt Removal**: Remove departed team members immediately

### Token management

- **Plan Ahead**: Share class parameters are difficult to change after creation
- **Naming Conventions**: Use clear, consistent naming

## Common issues

**Can I change the hub chain or denomination?**
No. These are set at pool creation and cannot be modified.

**Do offchain holdings affect NAV calculations?**
Offchain holdings are stored as metadata for reporting purposes. They do not automatically update NAV. Include offchain asset values when updating NAV.

**What's the difference between Settings and Managers?**
- **Settings > Access**: Pool-level Hub Managers
- **Managers page**: Network-specific Balance Sheet Managers, On/Off-Ramp Managers

**Why is "Add hub manager" disabled?**
You must be an existing Hub Manager to add new Hub Managers.

## Related

- [Configuring access](configuring-access.md) - Network-specific manager configuration
- [Managing NAV](nav-and-pricing.md) - Update NAV including offchain asset values
- [Configuring vaults](configuring-vaults.md) - Configure share class vaults
