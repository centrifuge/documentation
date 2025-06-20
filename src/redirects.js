const redirects = [
  // Domain-level redirect (Note: This needs to be handled at the server level, not in Docusaurus)
  // https://developer.centrifuge.io/* -> https://docs.centrifuge.io/:splat

  // Cent-node redirects
  {
    from: "/cent-node/further-reading/testnets/",
    to: "/developer/legacy/centrifuge-chain/networks/",
  },
  {
    from: "/cent-node/getting-started/chain-account/",
    to: "/developer/guides/investing-into-a-vault/",
  },
  {
    from: "/cent-node/further-reading/disclaimer/",
    to: "/developer/guides/investing-into-a-vault/",
  },
  {
    from: "/cent-node/further-reading/protocol-limitations/",
    to: "/developer/guides/investing-into-a-vault/",
  },
  {
    from: "/cent-node/getting-started/configuration/",
    to: "/developer/guides/investing-into-a-vault/",
  },
  {
    from: "/cent-node/getting-started/geth-account/",
    to: "/developer/guides/investing-into-a-vault/",
  },
  {
    from: "/cent-node/getting-started/install-cent-node/",
    to: "/developer/guides/investing-into-a-vault/",
  },
  {
    from: "/cent-node/getting-started/ping/",
    to: "/developer/guides/investing-into-a-vault/",
  },
  {
    from: "/cent-node/getting-started/tools/",
    to: "/developer/guides/investing-into-a-vault/",
  },
  {
    from: "/cent-node/overview/introduction/",
    to: "/developer/guides/investing-into-a-vault/",
  },
  {
    from: "/cent-node/overview/protocol-architecture/",
    to: "/developer/guides/investing-into-a-vault/",
  },
  {
    from: "/cent-node/usage/rest-api-examples/",
    to: "/developer/guides/investing-into-a-vault/",
  },

  // Chain redirects
  {
    from: "/chain/ethereum-bridge/about/",
    to: "/developer/legacy/centrifuge-chain/overview/",
  },
  {
    from: "/chain/ethereum-bridge/bridge-operations/",
    to: "/developer/legacy/centrifuge-chain/overview/",
  },
  {
    from: "/chain/further-resources/resources/",
    to: "/developer/legacy/centrifuge-chain/overview/",
  },
  {
    from: "/chain/get-started/account/",
    to: "/developer/legacy/centrifuge-chain/overview/",
  },
  {
    from: "/chain/get-started/run-node/",
    to: "/developer/guides/investing-into-a-vault/",
  },
  {
    from: "/chain/get-started/validate/",
    to: "/developer/legacy/centrifuge-chain/overview/",
  },
  {
    from: "/chain/governance/about-governance/",
    to: "/user/governance/governance-process/",
  },
  {
    from: "/chain/overview/testnets/",
    to: "/developer/legacy/centrifuge-chain/networks/",
  },
  {
    from: "/chain/overview/introduction/",
    to: "/developer/guides/investing-into-a-vault/",
  },

  // Tinlake redirects
  {
    from: "/tinlake/contracts/contracts/",
    to: "/developer/legacy/tinlake/",
  },
  {
    from: "/tinlake/further-information/offering-structure/",
    to: "/developer/legacy/tinlake/",
  },
  {
    from: "/tinlake/overview/introduction/",
    to: "/developer/legacy/tinlake/",
  },
  {
    from: "/tinlake/overview/pricing_rwa/",
    to: "/developer/legacy/tinlake/",
  },
  {
    from: "/tinlake/overview/tranches/",
    to: "/developer/legacy/tinlake/",
  },
  {
    from: "/tinlake/userguide/securitize/",
    to: "/developer/legacy/tinlake/",
  },
  {
    from: "/tinlake/userguide/investing/",
    to: "/developer/legacy/tinlake/",
  },

  // NFTs redirects
  {
    from: "/nfts/overview/anatomy/",
    to: "/developer/legacy/centrifuge-chain/overview/",
  },
  {
    from: "/nfts/overview/introduction/",
    to: "/developer/legacy/centrifuge-chain/overview/",
  },
  {
    from: "/nfts/overview/verification/",
    to: "/developer/legacy/centrifuge-chain/overview/",
  },

  // 2024 Layout Update redirects
  {
    from: "/learn/",
    to: "/",
  },
  {
    from: "/faq/",
    to: "/",
  },
  {
    from: "/getting-started/centrifuge-at-a-glance/",
    to: "/",
  },
  {
    from: "/getting-started/privacy-first-tokenization/",
    to: "/getting-started/core-concepts/privacy-first-tokenization/",
  },
  {
    from: "/getting-started/securitization/",
    to: "/getting-started/core-concepts/securitization/",
  },
  {
    from: "/getting-started/cent-chain/",
    to: "/getting-started/core-concepts/cent-chain/",
  },
  {
    from: "/getting-started/integrated-with-defi/",
    to: "/getting-started/core-concepts/integrated-with-defi/",
  },
  {
    from: "/getting-started/off-chain/",
    to: "/getting-started/core-concepts/legal-structure/",
  },

  // Learn section redirects
  {
    from: "/learn/terms/",
    to: "/user/",
  },
  {
    from: "/learn/multi-tranche-system/",
    to: "/user/",
  },
  {
    from: "/learn/epoch/",
    to: "/user/centrifuge-pools/epoch/",
  },
  {
    from: "/learn/pool-valuation/",
    to: "/user/centrifuge-pools/pool-valuation/",
  },
  {
    from: "/learn/interest-rate-methodology/",
    to: "/user/centrifuge-pools/interest-rate-methodology/",
  },
  {
    from: "/learn/legal-offering/",
    to: "/user/centrifuge-pools/legal-offering/",
  },
  {
    from: "/learn/token-summary/",
    to: "/",
  },

  // Base redirects for main sections
  {
    from: "/use/setup-wallet",
    to: "/user/using-centrifuge/setup-wallet/",
  },
  {
    from: "/use/onboarding",
    to: "/user/using-centrifuge/onboarding/",
  },
  {
    from: "/use/Invest",
    to: "/user/using-centrifuge/invest/",
  },
  {
    from: "/use/claim-cfg-rewards/",
    to: "/",
  },
  {
    from: "/use/governance-process/",
    to: "/user/governance/governance-process/",
  },
  {
    from: "/use/pop/",
    to: "/user/",
  },
  {
    from: "/use/offchain-voting/",
    to: "/user/governance/offchain-voting/",
  },
  {
    from: "/use/onchain-voting/",
    to: "/user/governance/onchain-voting/",
  },
  {
    from: "/use/governance-proxy-and-delegation/",
    to: "/user/governance/governance-proxy-and-delegation/",
  },
  {
    from: "/use/council/",
    to: "/user/governance/council/",
  },
  {
    from: "/use/contribute-network/",
    to: "/developer/legacy/centrifuge-chain/contributing/",
  },
  {
    from: "/use/cfg-bridge/",
    to: "/user/cfg-bridge/",
  },

  // Build section redirects
  {
    from: "/build/cent-chain/",
    to: "/developer/legacy/centrifuge-chain/overview/",
  },
  {
    from: "/build/tinlake/",
    to: "/developer/legacy/tinlake/",
  },
  {
    from: "/build/guides/",
    to: "/developer/guides/investing-into-a-vault/",
  },
  {
    from: "/developer/guides/investing-into-a-liquidity-pool/",
    to: "/developer/guides/investing-into-a-vault/",
  },
  {
    from: "/build/p2p-node/",
    to: "/developer/legacy/pod/",
  },
  {
    from: "/build/nfts/",
    to: "/developer/guides/investing-into-a-vault/",
  },
  {
    from: "/build/bridge/",
    to: "/user/cfg-bridge/",
  },

  // Temporary redirects
  {
    from: "/tinlake/contracts/deployments/",
    to: "/developer/legacy/tinlake/",
  },
  {
    from: "/tinlake/contracts/patterns/",
    to: "/developer/legacy/tinlake/",
  },
  {
    from: "/tinlake/contracts/proxyactions/",
    to: "/developer/legacy/tinlake/",
  },
  {
    from: "/tinlake/further-information/interest/",
    to: "/developer/legacy/tinlake/",
  },
  {
    from: "/tinlake/further-information/nft/",
    to: "/developer/legacy/tinlake/",
  },
  {
    from: "/tinlake/further-information/liquidation/",
    to: "/developer/legacy/tinlake/",
  },
  {
    from: "/tinlake/tinlake-js/events/",
    to: "/developer/legacy/tinlake/",
  },
  {
    from: "/tinlake/tinlake-js/overview/",
    to: "/developer/legacy/tinlake/",
  },

  // Handle trailing slashes consistently
  {
    from: "/getting-started",
    to: "/",
  },
  {
    from: "/use",
    to: "/user/",
  },
  {
    from: "/build",
    to: "/developer/guides/investing-into-a-vault/",
  },
];

export { redirects };
module.exports = { redirects };
