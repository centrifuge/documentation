---
id: deployments
title: Deployments
category: subpage
contributors: <Jeroen:jeroen@k-f.co>
---

# Deployments

## Smart contracts

### Mainnet

Every smart contract of the Centrifuge protocol is deployed at the same address on every EVM network.

The protocol is currently deployed on Ethereum, Base, Arbitrum, Avalanche and Plume.

| Contract          | Address |
|------------------|----|
| `root` | `0x7Ed48C31f2fdC40d37407cBaBf0870B2b688368f` |
| `guardian` | `0xFEE13c017693a4706391D516ACAbF6789D5c3157` |
| `gasService` | `0x295262f96186505Ce67c67B9d29e36ad1f9EAe88` |
| `gateway` | `0x51eA340B3fe9059B48f935D5A80e127d587B6f89` |
| `multiAdapter` | `0x457C91384C984b1659157160e8543adb12BC5317` |
| `messageProcessor` | `0xE994149c6D00Fe8708f843dc73973D1E7205530d` |
| `messageDispatcher` | `0x21AF0C29611CFAaFf9271C8a3F84F2bC31d59132` |
| `poolEscrowFactory` | `0xD166B3210edBeEdEa73c7b2e8aB64BDd30c980E9` |
| `hubRegistry` | `0x12044ef361Cc3446Cb7d36541C8411EE4e6f52cb` |
| `accounting` | `0xE999a426D92c30fEE4f074B3a53071A6e935419F` |
| `holdings` | `0x0261FA29b3F2784AF17874428b58d971b6652C47` |
| `shareClassManager` | `0xe88e712d60bfd23048Dbc677FEb44E2145F2cDf4` |
| `hubHelpers` | `0xA30D9E76a80675A719d835a74d09683AD2CB71EE` |
| `hub` | `0x9c8454A506263549f07c80698E276e3622077098` |
| `identityValuation` | `0x3b8FaE903a6511f9707A2f45747a0de3B747711f` |
| `tokenFactory` | `0xC8eDca090b772C48BcE5Ae14Eb7dd517cd70A32C` |
| `spoke` | `0xd30Da1d7F964E5f6C2D9fE2AAA97517F6B23FA2B` |
| `balanceSheet` | `0xBcC8D02d409e439D98453C0b1ffa398dFFb31fda` |
| `contractUpdater` | `0x8dD5a3d4e9ec54388dAd23B8a1f3B2159B2f2D85` |
| `routerEscrow` | `0xB86B6AE94E6d05AAc086665534A73fee557EE9F6` |
| `globalEscrow` | `0x43d51be0B6dE2199A2396bA604114d24383F91E9` |
| `asyncRequestManager` | `0x58d57896EBbF000c293327ADf33689D0a7Fd3d9A` |
| `syncManager` | `0x0D82d9fa76CFCd6F4cc59F053b2458665C6CE773` |
| `asyncVaultFactory` | `0xE01Ce2e604CCe985A06FA4F4bCD17f1F08417BF3` |
| `syncDepositVaultFactory` | `0x3568184784E8ACCaacF51A7F710a3DE0144E4f29` |
| `vaultRouter` | `0xdbCcee499563D4AC2D3788DeD3acb14FB92B175D` |
| `freezeOnlyHook` | `0xBb7ABFB0E62dfb36e02CeeCDA59ADFD71f50c88e` |
| `fullRestrictionsHook` | `0xa2C98F0F76Da0C97039688CA6280d082942d0b48` |
| `freelyTransferableHook` | `0xbce8C1f411484C28a64f7A6e3fA63C56b6f3dDDE` |
| `redemptionRestrictionsHook` | `0xf0C36EFD5F6465D18B9679ee1407a3FC9A2955dD` |
| `onOfframpManagerFactory` | `0xcb084F79e8AE54e1373130F4F7119214FCe972a9` |
| `merkleProofManagerFactory` | `0xaBd3cDc17C15a9E7771876cE24aB10A8E722781d` |
| `vaultDecoder` | `0x72B188c37bD8Eb002d0D9c63CCd77F2Ff71d272e` |
| `circleDecoder` | `0x6fce63E718fED6E20bAa8179e313C24cbF2EDa24` |
| `wormholeAdapter` | `0x6b98679eEC5b5DE3A803Dc801B2f12aDdDCD39Ec` |
| `axelarAdapter` | `0x52271c9A29D0f97c350BBE32b3377CdD26026d0a` |

### Testnet

The latest testnet deployments can be found here: https://github.com/centrifuge/protocol-v3/tree/main/env

## Centrifuge IDs

The protocol uses `centrifugeId` (`uint16`) as an identifier of the network. The following IDs are used:

### Mainnet

| Network          | `centrifugeId` |
|------------------|----|
| Ethereum Mainnet | 1  |
| Base             | 2  |
| Arbitrum         | 3  |
| Avalanche        | 4  |
| Plume            | 5  |

### Testnet

| Network          | `centrifugeId` |
|------------------|----|
| Ethereum Sepolia | 1  |
| Base Sepolia     | 2  |
| Arbitrum Sepolia | 3  |