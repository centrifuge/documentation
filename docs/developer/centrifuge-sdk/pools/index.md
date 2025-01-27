# Pools

Pools are collections of assets that can be financed.

```ts
const pool = await centrifuge.pool("<pool-id>");
```

Pools can be queried by their pool ID.

## Tranches

Pools have a one or more tranches that can be invested into.

## Vaults

Tranches can source investments from various EVM chains in various currencies, by deploying smart contracts to those EVM chains (like Ethereum and its L2 networks). The smart contracts that allows an investor to invest into a tranche with a specific currency are called Vaults. Investments done in a Vault are bridged to the chain where the pool lives and, if necessary, currency is swapped into the currency of the pool.

### Networks

```ts
const poolNetworks = await pool.activeNetworks();
```

Vaults can only be deployed on networks where the pool itself is active. Active networks can be retrieved with the [activeNetworks](#activenetworks) method on a [Pool](#class-pool).

```ts
const poolNetwork = await pool.network(<chain-id>);
const isActive = await poolNetwork.isActive();
```

It's also possible to specifically query a network and see if the pool is active there.

### Deployed Vaults

```ts
const poolNetwork = await pool.network(<chain-id>);
const vaults = await poolNetwork.vaults("<tranche-id>");
```

Which vaults exist for a tranche on a network can be queried from a [PoolNetwork](#class-poolnetwork).

```ts
const poolNetwork = await pool.network(<chain-id>);
try {
  const vault = await poolNetwork.vault("<tranche-id>", "<currency-address>");
} catch {
  console.error("Vault not found");
}
```

Or query a specific vault for a tranche and investment currency address

### Vault investments and redemptions

The [Vaults](#class-vault) can be queried for the investment details of an investor and can be interacted with to place invest/redeem orders, collect tokens.

Use [investment](#investment) to get the investment state for an investor.

```ts
const investment = await vault.investment("<invesor-address>");
```

Orders can be placed with [increaseInvestOrder](#increaseinvestorder) and [increaseRedeemOrder](#increaseredeemorder).

```ts
const status = await vault.increaseInvestOrder(<invest amount>);
```

When an order has been fulfilled, tokens can be collected with [claim](#claim).

```ts
const status = await vault.claim();
```
