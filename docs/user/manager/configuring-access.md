---
sidebar_position: 10
---

# Configuring access

The Managers feature controls who can perform various operations on your pool across different blockchain networks. This is where you configure network-specific managers for your fund operations team.

![Managers Overview](/assets/images/manager_overview.png)

## Manager hierarchy

Centrifuge uses a **Hub and Spoke** model:

```
                    ┌─────────────────┐
                    │   Hub Manager   │
                    │   (Ethereum)    │
                    │   Full Access   │
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
         ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│  Balance Sheet  │ │  Balance Sheet  │ │  Balance Sheet  │
│    Manager      │ │    Manager      │ │    Manager      │
│   (Base)        │ │   (Arbitrum)    │ │   (Avalanche)   │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

## Manager types

### Hub Manager

The highest level of access, controlling the entire pool from the hub chain (Ethereum).

**Permissions:**
- Add/remove other Hub Managers
- Add/remove Balance Sheet Managers on any network
- Configure On/Off-Ramp Managers
- Approve and process all orders
- Update NAV and share pricing
- Add/block investors
- Manage all pool settings

**Who should be a Hub Manager:** Fund administrators, senior operations staff, authorized signers on your custody wallet.

> **Note**: Hub Managers are configured in **Settings → Access**. See [Pool settings](pool-settings.md).

### Balance Sheet Manager

Network-specific managers who can move funds on their assigned chain.

**Permissions:**
- Deposit funds from wallet to holdings (on their network)
- Withdraw funds from holdings to wallet (on their network)
- Issue shares directly
- Revoke shares directly

**Who should be a Balance Sheet Manager:** Operations staff for specific networks, treasury managers, on/off-ramp operators.

### On/Off-Ramp Manager

Specialized managers for handling fund movements in and out of your pool.

**Components:**
- **Manager Contract**: Deployed on each network
- **Relayers**: Addresses that can execute withdrawals
- **Receivers**: Approved destination addresses for withdrawals
- **Deposit Assets**: Assets the manager can receive

### Merkle Proof Manager

Advanced access control using cryptographic proofs for withdrawal policies.

**Components:**
- **Manager Contract**: Deployed on each network
- **Strategists**: Addresses with policy-setting authority
- **Policies**: JSON-defined rules for withdrawals

## Permissions summary

| Action | Hub Manager | Balance Sheet Manager | Relayer |
|--------|------------|----------------------|---------|
| Add/remove managers | ✅ | ❌ | ❌ |
| Update NAV | ✅ | ❌ | ❌ |
| Approve orders | ✅ | ❌ | ❌ |
| Issue/revoke shares | ✅ | ✅ (directly) | ❌ |
| Deposit to holdings | ❌ | ✅ | ❌ |
| Withdraw to wallet | ❌ | ✅ | ❌ |
| Withdraw to receivers | ❌ | ❌ | ✅ |
| Add investors | ✅ | ❌ | ❌ |
| Configure vaults | ✅ | ❌ | ❌ |

## Managing Balance Sheet Managers

### Adding a Balance Sheet Manager

1. Click **Add balance sheet manager**
2. Select the network(s) where they should have access
3. Enter the wallet address
4. Confirm the transaction

<img src="/assets/images/add_balancesheet_manager.png" alt="Add BalanceSheet Manager" style={{maxWidth: '500px'}} />

You can add the same address to multiple networks or different addresses per network.

### Removing a Balance Sheet Manager

1. Find the manager under the relevant network
2. Click the delete icon
3. Confirm the removal

## Configuring On/Off-Ramp Managers

<img src="/assets/images/on_off_manager_overview.png" alt="On-off ramp manager" style={{maxWidth: '500px'}} />

### Deploying an On/Off-Ramp Manager

1. Click **Add on/off ramp manager**
2. Select the network
3. Confirm the deployment transaction
4. Wait for the contract to be created

### Configuring deposit assets

After deployment, specify which assets the manager can receive:

1. Expand the manager accordion for your network
2. Click **Add deposit asset**
3. Select the asset from the dropdown
4. Confirm the transaction

<img src="/assets/images/add_deposit_asset.png" alt="deposit asset" style={{maxWidth: '500px'}} />

### Configuring relayers

Relayers are addresses authorized to execute withdrawal transactions:

1. In the manager accordion, click **Add relayer**
2. Enter the relayer's wallet address
3. Confirm the transaction

<img src="/assets/images/add_relayer.png" alt="add relayer address" style={{maxWidth: '500px'}} />

**About Relayers:**
- Can initiate withdrawals to approved receiver addresses
- Cannot withdraw to arbitrary addresses
- Useful for automated systems or operational staff

### Configuring receivers (withdraw addresses)

Receivers are pre-approved destination addresses for withdrawals:

1. Click **Add withdraw address**
2. Select the asset this receiver can receive
3. Enter the receiver's address
4. Optionally add a public label
5. Confirm the transaction

<img src="/assets/images/add_receiver.png" alt="add receiver address" style={{maxWidth: '500px'}} />

**Public Labels:** Labels are stored in pool metadata and visible to anyone viewing the pool. Use for identifying bank accounts, exchanges, etc.

### On/Off-Ramp workflow

```
Funds arrive at Manager → Manager Balance Increases
                                    ↓
        Relayer triggers withdrawal to Receiver
                                    ↓
                    Funds sent to approved address
```

## Cross-chain considerations

### Network-specific permissions

Permissions are enforced per-network:
- A Balance Sheet Manager on Base cannot move funds on Arbitrum
- Each network needs separate manager configuration
- Hub Managers can configure managers on any network

### Deploying across networks

When expanding to new networks:
1. Ensure the network is active for your pool
2. Add Balance Sheet Managers for the new network
3. Deploy On/Off-Ramp Manager if needed
4. Deploy Merkle Proof Manager if needed

## Best practices

### Operations

- **Clear Responsibilities**: Assign specific networks to specific team members
- **Regular Review**: Periodically audit manager lists
- **Remove Promptly**: Remove departed team members immediately
- **Label Clearly**: Use public labels to identify receiver addresses

### On/Off-Ramp configuration

- **Pre-Approve Receivers**: Set up receiver addresses before you need them
- **Limit Relayers**: Only add relayers who need withdrawal access
- **Match Assets**: Ensure deposit assets match your investor needs

## Common issues

**Can someone be both a Hub Manager and Balance Sheet Manager?**
Yes. Hub Manager grants higher permissions, so Balance Sheet Manager status would be redundant but not harmful.

**What happens if I remove all Hub Managers?**
You would lose all administrative access to the pool. Always ensure at least one Hub Manager remains.

**Can I have different receivers per asset?**
Yes. Receivers are configured per asset. You can have different approved addresses for USDC vs USDT withdrawals.

**Do I need an On/Off-Ramp Manager?**
Not necessarily. For simpler operations, Balance Sheet Manager withdrawals may be sufficient.

## Related

- [Pool settings](pool-settings.md) - Manage Hub Managers
- [Managing holdings](managing-holdings.md) - Managers control fund movements
- [Processing investments](processing-investments.md) - Hub Managers process orders
