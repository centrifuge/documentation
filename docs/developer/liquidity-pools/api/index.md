---
id: api
title: API
category: subpage
---

# Liquidity Pool API

[Git Source](https://github.com/centrifuge/liquidity-pools/blob/d3ac058a6ddd3342f78bf09fd1d37058007c6644/src/LiquidityPool.sol)

Liquidity Pool implementation for Centrifuge pools
following the ERC-7540 Asynchronous Tokenized Vault standard

_Each Liquidity Pool is a tokenized vault issuing shares of Centrifuge tranches as restricted ERC-20 tokens against currency deposits based on the current share price. ERC-7540 is an extension of the ERC-4626 standard by 'requestDeposit' & 'requestRedeem' methods, where deposit and redeem orders are submitted to the pools to be included in the execution of the following epoch. After execution users can use the deposit, mint, redeem and withdraw functions to get their shares and/or assets from the pools._

## State Variables

### poolId

Identifier of the Centrifuge pool

```solidity
uint64 public immutable poolId;
```

### trancheId

Identifier of the tranche of the Centrifuge pool

```solidity
bytes16 public immutable trancheId;
```

### asset

The investment currency (asset) for this Liquidity Pool.
Each tranche of a Centrifuge pool can have multiple Liquidity Pools.
One Liquidity Pool for each supported investment currency.
Thus tranche shares can be linked to multiple Liquidity Pools with different currencies.

```solidity
address public immutable asset;
```

### share

The restricted ERC-20 Liquidity Pool share (tranche token).
Has a ratio (token price) of underlying assets exchanged on deposit/mint/withdraw/redeem.

```solidity
address public immutable share;
```

### escrow

Escrow contract for tokens

```solidity
address public immutable escrow;
```

### manager

Liquidity Pool implementation contract

```solidity
ManagerLike public manager;
```

### REQUEST_ID

_Requests for Centrifuge pool are non-transferable and all have ID = 0_

```solidity
uint256 constant REQUEST_ID = 0;
```

## Functions

### constructor

```solidity
constructor(uint64 poolId_, bytes16 trancheId_, address asset_, address share_, address escrow_, address manager_);
```

### file

```solidity
function file(bytes32 what, address data) external auth;
```

### requestDeposit

_Transfers assets from sender into the Vault and submits a Request for asynchronous deposit._

- MUST support ERC-20 approve / transferFrom on asset as a deposit Request flow.
- MUST revert if all of assets cannot be requested for deposit.
- owner MUST be msg.sender unless some unspecified explicit approval is given by the caller, approval of ERC-20 tokens from owner to sender is NOT enough.

```solidity
function requestDeposit(uint256 assets, address receiver, address owner, bytes memory data) public returns (uint256);
```

**Parameters**

| Name       | Type      | Description                                                                                                                                                                                                                                                                                                       |
| ---------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assets`   | `uint256` | the amount of deposit assets to transfer from owner                                                                                                                                                                                                                                                               |
| `receiver` | `address` | the receiver of the request who will be able to operate the request                                                                                                                                                                                                                                               |
| `owner`    | `address` | the source of the deposit assets                                                                                                                                                                                                                                                                                  |
| `data`     | `bytes`   | additional bytes which may be used to approve or call the receiver contract NOTE: most implementations will require pre-approval of the Vault with the Vault's underlying asset token. If data is nonzero, attempt to call the receiver onERC7540DepositReceived, otherwise just send the request to the receiver |

### requestDepositWithPermit

Uses EIP-2612 permit to set approval of asset, then transfers assets from msg.sender
into the Vault and submits a Request for asynchronous deposit/mint.

```solidity
function requestDepositWithPermit(
    uint256 assets,
    address receiver,
    bytes memory data,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
) external;
```

### pendingDepositRequest

_Returns the amount of requested assets in Pending state._

- MUST NOT include any assets in Claimable state for deposit or mint.
- MUST NOT show any variations depending on the caller.
- MUST NOT revert unless due to integer overflow caused by an unreasonably large input.

```solidity
function pendingDepositRequest(uint256, address owner) public view returns (uint256 pendingAssets);
```

### claimableDepositRequest

_Returns the amount of requested assets in Claimable state for the owner to deposit or mint._

- MUST NOT include any assets in Pending state.
- MUST NOT show any variations depending on the caller.
- MUST NOT revert unless due to integer overflow caused by an unreasonably large input.

```solidity
function claimableDepositRequest(uint256, address owner) external view returns (uint256 claimableAssets);
```

### requestRedeem

_Assumes control of shares from sender into the Vault and submits a Request for asynchronous redeem._

- MUST support a redeem Request flow where the control of shares is taken from sender directly where msg.sender has ERC-20 approval over the shares of owner.
- MUST revert if all of shares cannot be requested for redeem.

```solidity
function requestRedeem(uint256 shares, address receiver, address owner, bytes memory data) public returns (uint256);
```

**Parameters**

| Name       | Type      | Description                                                                                                                                                                                                                                                                                           |
| ---------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `shares`   | `uint256` | the amount of shares to be redeemed to transfer from owner                                                                                                                                                                                                                                            |
| `receiver` | `address` | the receiver of the request who will be able to operate the request                                                                                                                                                                                                                                   |
| `owner`    | `address` | the source of the shares to be redeemed                                                                                                                                                                                                                                                               |
| `data`     | `bytes`   | additional bytes which may be used to approve or call the receiver contract NOTE: most implementations will require pre-approval of the Vault with the Vault's share token. If data is nonzero, attempt to call the receiver onERC7540RedeemReceived, otherwise just send the request to the receiver |

### pendingRedeemRequest

_Returns the amount of requested shares in Pending state._

- MUST NOT include any shares in Claimable state for redeem or withdraw.
- MUST NOT show any variations depending on the caller.
- MUST NOT revert unless due to integer overflow caused by an unreasonably large input.

```solidity
function pendingRedeemRequest(uint256, address owner) public view returns (uint256 pendingShares);
```

### claimableRedeemRequest

_Returns the amount of requested shares in Claimable state for the owner to redeem or withdraw._

- MUST NOT include any shares in Pending state for redeem or withdraw.
- MUST NOT show any variations depending on the caller.
- MUST NOT revert unless due to integer overflow caused by an unreasonably large input.

```solidity
function claimableRedeemRequest(uint256, address owner) external view returns (uint256 claimableShares);
```

### cancelDepositRequest

Request cancelling the outstanding deposit orders.

```solidity
function cancelDepositRequest() external;
```

### pendingCancelDepositRequest

Check whether the deposit request is pending cancellation.

```solidity
function pendingCancelDepositRequest(uint256, address owner) public view returns (bool isPending);
```

### cancelRedeemRequest

Request cancelling the outstanding redemption orders.

```solidity
function cancelRedeemRequest() external;
```

### pendingCancelRedeemRequest

```solidity
function pendingCancelRedeemRequest(uint256, address owner) public view returns (bool isPending);
```

### supportsInterface

_Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas._

```solidity
function supportsInterface(bytes4 interfaceId) external pure override returns (bool);
```

### totalAssets

_Returns the total amount of the underlying asset that is “managed” by Vault._

- SHOULD include any compounding that occurs from yield.
- MUST be inclusive of any fees that are charged against assets in the Vault.
- MUST NOT revert.

```solidity
function totalAssets() external view returns (uint256);
```

### convertToShares

The calculation is based on the token price from the most recent epoch retrieved from Centrifuge.
The actual conversion MAY change between order submission and execution.

_Returns the amount of shares that the Vault would exchange for the amount of assets provided, in an ideal scenario where all the conditions are met._

- MUST NOT be inclusive of any fees that are charged against assets in the Vault.
- MUST NOT show any variations depending on the caller.
- MUST NOT reflect slippage or other on-chain conditions, when performing the actual exchange.
- MUST NOT revert.
  NOTE: This calculation MAY NOT reflect the “per-user” price-per-share, and instead should reflect the
  “average-user’s” price-per-share, meaning what the average user should expect to see when exchanging to and
  from.

```solidity
function convertToShares(uint256 assets) public view returns (uint256 shares);
```

### convertToAssets

The calculation is based on the token price from the most recent epoch retrieved from Centrifuge.
The actual conversion MAY change between order submission and execution.

_Returns the amount of assets that the Vault would exchange for the amount of shares provided, in an ideal scenario where all the conditions are met._

- MUST NOT be inclusive of any fees that are charged against assets in the Vault.
- MUST NOT show any variations depending on the caller.
- MUST NOT reflect slippage or other on-chain conditions, when performing the actual exchange.
- MUST NOT revert.
  NOTE: This calculation MAY NOT reflect the “per-user” price-per-share, and instead should reflect the
  “average-user’s” price-per-share, meaning what the average user should expect to see when exchanging to and
  from.

```solidity
function convertToAssets(uint256 shares) public view returns (uint256 assets);
```

### maxDeposit

_Returns the maximum amount of the underlying asset that can be deposited into the Vault for the receiver, through a deposit call._

- MUST return a limited value if receiver is subject to some deposit limit.
- MUST return 2 \*\* 256 - 1 if there is no limit on the maximum amount of assets that may be deposited.
- MUST NOT revert.

```solidity
function maxDeposit(address owner) public view returns (uint256 maxAssets);
```

### deposit

_Mints shares Vault shares to receiver by depositing exactly amount of underlying tokens._

- MUST emit the Deposit event.
- MAY support an additional flow in which the underlying tokens are owned by the Vault contract before the deposit execution, and are accounted for during deposit.
- MUST revert if all of assets cannot be deposited (due to deposit limit being reached, slippage, the user not approving enough underlying tokens to the Vault contract, etc).
  NOTE: most implementations will require pre-approval of the Vault with the Vault’s underlying asset token.

```solidity
function deposit(uint256 assets, address receiver) external returns (uint256 shares);
```

### maxMint

_Returns the maximum amount of the Vault shares that can be minted for the receiver, through a mint call._

- MUST return a limited value if receiver is subject to some mint limit.
- MUST return 2 \*\* 256 - 1 if there is no limit on the maximum amount of shares that may be minted.
- MUST NOT revert.

```solidity
function maxMint(address owner) public view returns (uint256 maxShares);
```

### mint

_Mints exactly shares Vault shares to receiver by depositing amount of underlying tokens._

- MUST emit the Deposit event.
- MAY support an additional flow in which the underlying tokens are owned by the Vault contract before the mint execution, and are accounted for during mint.
- MUST revert if all of shares cannot be minted (due to deposit limit being reached, slippage, the user not approving enough underlying tokens to the Vault contract, etc). NOTE: most implementations will require pre-approval of the Vault with the Vault’s underlying asset token.

```solidity
function mint(uint256 shares, address receiver) public returns (uint256 assets);
```

### maxWithdraw

_Returns the maximum amount of the underlying asset that can be withdrawn from the owner balance in the Vault, through a withdraw call._

- MUST return a limited value if owner is subject to some withdrawal limit or timelock.
- MUST NOT revert.

```solidity
function maxWithdraw(address owner) public view returns (uint256 maxAssets);
```

### withdraw

DOES NOT support owner != msg.sender since shares are already transferred on requestRedeem

_Burns shares from owner and sends exactly assets of underlying tokens to receiver._

- MUST emit the Withdraw event.
- MAY support an additional flow in which the underlying tokens are owned by the Vault contract before the withdraw execution, and are accounted for during withdraw.
- MUST revert if all of assets cannot be withdrawn (due to withdrawal limit being reached, slippage, the owner not having enough shares, etc).

Note that some implementations will require pre-requesting to the Vault before a withdrawal may be performed. Those methods should be performed separately.

```solidity
function withdraw(uint256 assets, address receiver, address owner) public returns (uint256 shares);
```

### maxRedeem

_Returns the maximum amount of Vault shares that can be redeemed from the owner balance in the Vault, through a redeem call._

- MUST return a limited value if owner is subject to some withdrawal limit or timelock.
- MUST return balanceOf(owner) if owner is not subject to any withdrawal limit or timelock.
- MUST NOT revert.

```solidity
function maxRedeem(address owner) public view returns (uint256 maxShares);
```

### redeem

DOES NOT support owner != msg.sender since shares are already transferred on requestRedeem

_Burns exactly shares from owner and sends assets of underlying tokens to receiver._

- MUST emit the Withdraw event.
- MAY support an additional flow in which the underlying tokens are owned by the Vault contract before the redeem execution, and are accounted for during redeem.
- MUST revert if all of shares cannot be redeemed (due to withdrawal limit being reached, slippage, the owner not having enough shares, etc).

NOTE: some implementations will require pre-requesting to the Vault before a withdrawal may be performed. Those methods should be performed separately.

```solidity
function redeem(uint256 shares, address receiver, address owner) external returns (uint256 assets);
```

### previewDeposit

_Preview functions for ERC-7540 vaults revert_

```solidity
function previewDeposit(uint256) external pure returns (uint256);
```

### previewMint

_Preview functions for ERC-7540 vaults revert_

```solidity
function previewMint(uint256) external pure returns (uint256);
```

### previewWithdraw

_Preview functions for ERC-7540 vaults revert_

```solidity
function previewWithdraw(uint256) external pure returns (uint256);
```

### previewRedeem

_Preview functions for ERC-7540 vaults revert_

```solidity
function previewRedeem(uint256) external pure returns (uint256);
```

### exchangeRateLastUpdated

```solidity
function exchangeRateLastUpdated() external view returns (uint64);
```

### \_transferFrom

```solidity
function _transferFrom(address from, address to, uint256 value) internal returns (bool);
```

### emitDepositClaimable

```solidity
function emitDepositClaimable(address owner, uint256 assets, uint256 shares) public auth;
```

### emitRedeemClaimable

```solidity
function emitRedeemClaimable(address owner, uint256 assets, uint256 shares) public auth;
```

### \_successCheck

```solidity
function _successCheck(bool success) internal pure;
```

## Events

### File

```solidity
event File(bytes32 indexed what, address data);
```

### CancelDepositRequest

```solidity
event CancelDepositRequest(address indexed sender);
```

### CancelRedeemRequest

```solidity
event CancelRedeemRequest(address indexed sender);
```
