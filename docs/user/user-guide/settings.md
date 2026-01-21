---
sidebar_position: 8
---

# Pool settings

The Settings page provides pool-level configuration options that apply across all share classes. Changes made here affect the entire pool, not just individual tokens.

## Overview

The Settings page includes three tabs:
- **Structure**: Hub chain information, off-chain holdings, and token management
- **Access**: Hub manager configuration
- **Details**: Additional pool details (coming soon)

## Accessing settings

1. Select your pool from the token list
2. Click **Settings** in the sidebar (under the pool name, not under a share class)

> **Important**: A banner reminds you that settings apply to the entire pool. Changes affect all tokens in the pool.

![Settings Overview](/assets/images/settings.jpeg)

---

## Structure tab

### Hub chain setup

Displays read-only information about your pool's hub configuration:

| Field | Description |
|-------|-------------|
| **Hub Chain** | The primary blockchain for your pool (typically Ethereum) |
| **Pool Denomination** | The base currency for NAV and pricing (e.g., USD, USDC) |

This information is set at pool creation and cannot be changed.

---

### Off-chain holdings setup

Track assets that exist outside the blockchain, such as:
- Bank account balances
- Traditional securities
- Real estate valuations
- Other off-chain assets

#### Why track off-chain holdings?

- Complete picture of fund assets
- Accurate NAV calculations
- Audit and reporting requirements
- Investor transparency

#### Viewing off-chain holdings

If holdings have been uploaded:
- **Template section**: Shows the CSV column headers
- **Holdings table**: Displays all uploaded holding records
- Pagination for large datasets

#### Uploading off-chain holdings

1. Click **Upload holdings** button
2. Prepare your CSV file with appropriate columns
3. Upload the file in the modal
4. Review the parsed data
5. Confirm to save to pool metadata

#### CSV file format

Your CSV should include headers that describe your off-chain assets. Common columns:
- Asset name or identifier
- Asset type
- Quantity or value
- Valuation date
- Custodian or location

**Example CSV**:
```csv
Asset,Type,Value,Currency,Custodian,Date
Treasury Bills,Fixed Income,1000000,USD,Bank ABC,2024-01-15
Real Estate Fund,Real Estate,500000,USD,Property Co,2024-01-15
```

> **Note**: The system accepts any CSV structure. Define columns that match your reporting needs.

#### Who can upload holdings?

Only **Hub Managers** can upload off-chain holdings data.

---

### Tokens management

View and manage all share classes (tokens) in your pool.

#### Tokens table

| Column | Description |
|--------|-------------|
| **Name** | Share class display name |
| **Symbol** | Token ticker symbol |
| **Min Investment** | Minimum initial investment amount |
| **Networks** | Blockchains where the token is deployed |


#### Editing a share class

1. Click the edit icon on a token row
2. The Update Token modal opens
3. Modify available settings
4. Save changes

**Editable Fields**:
- Token name
- Minimum investment amount
- Other metadata fields

<img src="/assets/images/update_token.png" alt="update token holdings" style={{maxWidth: '500px'}} />

#### Adding a new share class

1. Click **Add a share class** button
2. Fill in the required information:
   - Name
   - Symbol
   - Initial parameters
3. Confirm to deploy the new share class

> **Note**: Adding share classes is an advanced operation that creates new smart contracts. Plan carefully before adding.

<img src="/assets/images/add_token_holding.png" alt="Add token holdings" style={{maxWidth: '500px'}} />

---

## Access tab

Manage Hub Managers for your pool.

### What are Hub Managers?

Hub Managers have full administrative access to the pool:
- Update NAV and pricing
- Process all orders
- Manage investors
- Configure vaults and managers
- Access all settings

### Viewing Hub Managers

The table shows all addresses with Hub Manager permissions:
- Wallet address (with explorer link)
- Delete button for each manager


<img src="/assets/images/hub_manager_access.png" alt= "hub manager access" style={{maxWidth: '500px'}} />


### Adding a Hub Manager

1. Click **Add hub manager**
2. Enter the wallet address
3. Confirm the transaction
4. The new manager appears in the list

<img src="/assets/images/add_hub_manager.png" alt= "add hub manager" style={{maxWidth: '500px'}} />

### Removing a Hub Manager

1. Click the delete icon next to the manager
2. Confirm the removal
3. The manager loses access after transaction confirms

> **Warning**: Ensure at least one Hub Manager remains. Removing all managers locks you out of the pool.

> **Note**: Removal is processing is indicated by a "Update in progress" banner.

---

## Best practices

### Off-chain holdings

- **Regular Updates**: Upload new holdings data on a consistent schedule
- **Consistent Format**: Use the same CSV structure each time
- **Documentation**: Keep records of your column definitions
- **Audit Trail**: Archive previous uploads for compliance

### Hub Manager access

- **Minimum Necessary**: Only grant Hub Manager access to those who need it
- **Multi-Sig**: Use Safe wallets for Hub Manager addresses when possible
- **Regular Review**: Periodically audit the manager list
- **Prompt Removal**: Remove departed team members immediately

### Token management

- **Plan Ahead**: Share class parameters are difficult to change after creation
- **Naming Conventions**: Use clear, consistent naming
- **Documentation**: Keep records of each share class purpose

---

## Common questions

### Can I change the hub chain or denomination?

No. These are set at pool creation and cannot be modified. You would need to create a new pool.

### Do off-chain holdings affect NAV calculations?

Off-chain holdings are stored as metadata for reporting purposes. They do not automatically update NAV. You must include off-chain asset values when updating NAV.

### Can I have multiple templates for off-chain holdings?

Currently, only one holdings template is stored. Uploading new data replaces the existing data.

### What's the difference between Settings and Managers?

- **Settings > Access**: Pool-level Hub Managers
- **Managers page**: Network-specific Balance Sheet Managers, On/Off-Ramp Managers, and Merkle Proof Managers

### Why is "Add hub manager" disabled?

You must be an existing Hub Manager to add new Hub Managers.

---

## Related features

- [Managers](managers.md) - Network-specific manager configuration
- [NAV](nav.md) - Update NAV including off-chain asset values
- [Vaults](vaults.md) - Configure share class vaults
