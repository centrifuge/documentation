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
    to: "/developer/protocol/guides/invest-into-a-vault/",
  },
  {
    from: "/cent-node/further-reading/disclaimer/",
    to: "/developer/protocol/guides/invest-into-a-vault/",
  },
  {
    from: "/cent-node/further-reading/protocol-limitations/",
    to: "/developer/protocol/guides/invest-into-a-vault/",
  },
  {
    from: "/cent-node/getting-started/configuration/",
    to: "/developer/protocol/guides/invest-into-a-vault/",
  },
  {
    from: "/cent-node/getting-started/geth-account/",
    to: "/developer/protocol/guides/invest-into-a-vault/",
  },
  {
    from: "/cent-node/getting-started/install-cent-node/",
    to: "/developer/protocol/guides/invest-into-a-vault/",
  },
  {
    from: "/cent-node/getting-started/ping/",
    to: "/developer/protocol/guides/invest-into-a-vault/",
  },
  {
    from: "/cent-node/getting-started/tools/",
    to: "/developer/protocol/guides/invest-into-a-vault/",
  },
  {
    from: "/cent-node/overview/introduction/",
    to: "/developer/protocol/guides/invest-into-a-vault/",
  },
  {
    from: "/cent-node/overview/protocol-architecture/",
    to: "/developer/protocol/guides/invest-into-a-vault/",
  },
  {
    from: "/cent-node/usage/rest-api-examples/",
    to: "/developer/protocol/guides/invest-into-a-vault/",
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
    to: "/developer/protocol/guides/invest-into-a-vault/",
  },
  {
    from: "/chain/get-started/validate/",
    to: "/developer/legacy/centrifuge-chain/overview/",
  },
  {
    from: "/chain/governance/about-governance/",
    to: "/getting-started/dao-summary/governance-process/",
  },
  {
    from: "/chain/overview/testnets/",
    to: "/developer/legacy/centrifuge-chain/networks/",
  },
  {
    from: "/chain/overview/introduction/",
    to: "/developer/protocol/guides/invest-into-a-vault/",
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
    to: "/",
  },
  {
    from: "/getting-started/securitization/",
    to: "/",
  },
  {
    from: "/getting-started/cent-chain/",
    to: "/",
  },
  {
    from: "/getting-started/integrated-with-defi/",
    to: "/",
  },
  {
    from: "/getting-started/off-chain/",
    to: "/",
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
    to: "/user/",
  },
  {
    from: "/learn/pool-valuation/",
    to: "/user/",
  },
  {
    from: "/learn/interest-rate-methodology/",
    to: "/user/",
  },
  {
    from: "/learn/legal-offering/",
    to: "/user/",
  },
  {
    from: "/learn/token-summary/",
    to: "/",
  },

  // Base redirects for main sections
  {
    from: "/use/setup-wallet",
    to: "/user/",
  },
  {
    from: "/use/onboarding",
    to: "/user/",
  },
  {
    from: "/use/Invest",
    to: "/user/",
  },
  {
    from: "/use/claim-cfg-rewards/",
    to: "/",
  },
  {
    from: "/use/governance-process/",
    to: "/user/",
  },
  {
    from: "/use/pop/",
    to: "/user/",
  },
  {
    from: "/use/offchain-voting/",
    to: "/getting-started/dao-summary/offchain-voting/",
  },
  {
    from: "/use/onchain-voting/",
    to: "/getting-started/dao-summary/onchain-voting/",
  },
  {
    from: "/use/governance-proxy-and-delegation/",
    to: "/getting-started/dao-summary/governance-proxy-and-delegation/",
  },
  {
    from: "/use/council/",
    to: "/getting-started/dao-summary/council/",
  },
  {
    from: "/use/contribute-network/",
    to: "/developer/legacy/centrifuge-chain/contributing/",
  },
  {
    from: "/use/cfg-bridge/",
    to: "/",
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
    to: "/developer/protocol/guides/invest-into-a-vault/",
  },
  {
    from: "/developer/protocol/guides/investing-into-a-liquidity-pool/",
    to: "/developer/protocol/guides/invest-into-a-vault/",
  },
  {
    from: "/developer/guides/querying-data/",
    to: "/developer/legacy/querying-v2-data/",
  },
  {
    from: "/developer/liquidity-pools/overview/",
    to: "/developer/protocol/overview/",
  },
  {
    from: "/developer/liquidity-pools/api/",
    to: "/developer/protocol/overview/",
  },
  {
    from: "/developer/centrifuge-chain/overview/",
    to: "/developer/legacy/centrifuge-chain/overview/",
  },
  {
    from: "/developer/centrifuge-chain/codebase/",
    to: "/developer/legacy/centrifuge-chain/codebase/",
  },
  {
    from: "/developer/centrifuge-chain/networks/",
    to: "/developer/legacy/centrifuge-chain/networks/",
  },
  {
    from: "/developer/centrifuge-chain/evm/",
    to: "/developer/legacy/centrifuge-chain/evm/",
  },
  {
    from: "/developer/centrifuge-chain/contributing/",
    to: "/developer/legacy/centrifuge-chain/contributing/",
  },
  {
    from: "/developer/pod/",
    to: "/developer/legacy/pod/",
  },
  {
    from: "/build/p2p-node/",
    to: "/developer/legacy/pod/",
  },
  {
    from: "/developer/security/",
    to: "/developer/protocol/security/",
  },
  {
    from: "/build/nfts/",
    to: "/developer/protocol/guides/invest-into-a-vault/",
  },
  {
    from: "/build/bridge/",
    to: "/",
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
    to: "/user/overview/",
  },
  {
    from: "/build",
    to: "/developer/protocol/guides/invest-into-a-vault/",
  },
];

export { redirects };
module.exports = { redirects };
