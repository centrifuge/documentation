---
id: faq
order: 1
title: FAQ
---

## The Basics

### What is Centrifuge?

Centrifuge bridges assets like invoices, real estate, and royalties to DeFi. Borrowers can finance their real-world assets without banks or other intermediaries. Learn more in [our video](https://www.youtube.com/watch?v=23nQWgO4AfA) and in [our documentation](https://docs.centrifuge.io/).

### What is Tinlake?

Tinlake is Centrifuge’s platform that enables Asset Originators to use tokenized real-world assets as collateral to obtain liquidity from the DeFi ecosystem. [Individual investors can invest in Tinlake pools](http://tinlake.centrifuge.io/) to provide liquidity to Asset Originators, earning interest on their cryptocurrency. Investors can also earn CFG rewards from investing in a Tinlake pool.

### What is an Asset Originator?

An Asset Originator is a company that advances financing to multiple businesses or individuals. Tinlake allows Asset Originators to finance their assets and Investors to invest in them.

### What is Centrifuge Chain and CFG?

Centrifuge Chain is a Proof of Stake blockchain built on Parity Substrate with a bridge to Ethereum. CFG is the native token of Centrifuge Chain.

### I have a problem or question. Who can I contact?

Feel free to ask questions in our [Discord](https://centrifuge.io/discord), [Telegram](https://t.me/centrifuge_chat), or [Governance Forum](https://gov.centrifuge.io/). If you are having an issue with investing in a Tinlake pool, contact us at [support@centrifuge.io](mailto:support@centrifuge.io).

## Tinlake

### How do I invest in a Tinlake pool?

Go to [Tinlake](https://tinlake.centrifuge.io/), select a pool, and start the onboarding process. If this is your first time entering a pool, you will need to complete KYC. Then, for the pool you have selected, you will fill out a subscription agreement form with the issuer. The subscription agreement outlines the general structure, risks, terms and conditions of your investment. Our Tinlake [onboarding guide](https://docs.centrifuge.io/use/invest/#onboarding-guide) provides more details on this process. Once this document is countersigned by the issuer, you can invest and redeem through the UI. Our [Tinlake investment guide](https://docs.centrifuge.io/tinlake/userguide/investing/) describes the process step by step.

There are several factors to consider when deciding on a pool to invest in. [This guide on sizing up Tinlake pools for investment](https://gov.centrifuge.io/t/how-to-size-up-a-tinlake-pools-for-investment/1909) will help you make an informed decision.

### What is the minimum investment amount? Will this amount be lowered?

The minimum investment to participate in a Tinlake pool is currently 5,000 USD equivalent. Centrifuge is working hard to decrease this.. This minimum is in place due to the operational efforts required to onboard an investor to a pool.

### What are the requirements for KYC?

KYC verification via Securitize is mandatory to invest in Tinlake pools. You only need to complete KYC once, even if participating in multiple pools.

### I have locked my cryptocurrency in a Tinlake pool. Now what?

Investments from Tinlake pools are executed in epochs, usually daily. At the end of an epoch, any locked cryptocurrency (such as DAI) is invested into the pool if possible. You can then collect your DROP or TIN tokens. If the pool is oversubscribed, your investment will not execute and your cryptocurrency will remain locked until you unlock it. You can learn more about this process via our [Tinlake investment guide](https://docs.centrifuge.io/tinlake/userguide/investing/).

### What are TIN and DROP tokens?

TIN and DROP tokens are issued by the Tinlake pool to represent your investment. TIN tokens represent the junior tranche, where yields are higher, but losses (e.g. in the case of a default) are taken first. DROP tokens represent the senior tranche, where yields are lower and more stable, and losses are taken last. Read[ this article](https://medium.com/centrifuge/a-tale-of-two-tokens-introducing-tin-drop-our-two-investment-tokens-d4c7342c799a) for more detailed information.

### How does my DROP accrue interest?

DROP tokens steadily increase in value over time, reflecting the accrued interest. For example, when you invest in a pool and receive DROP, you will later receive more DAI in return when you redeem your DROP, as the DROP value will have increased.

### What does it mean if a pool is oversubscribed? Can I still invest in these pools?

If a pool is oversubscribed, this means the pool’s current reserve (liquidity that is available for financings by the Asset Originator or redemptions by investors) is higher than the maximum reserve. The pool will remain oversubscribed until the asset originator borrows more funds. Any DAI locked for investment into an oversubscribed pool will not be executed for investment until the pool is no longer oversubscribed.

### How does earning CFG from investing in Tinlake pools work?

You can earn CFG rewards by investing in Tinlake pools. As of time of writing, the rewards rate is 0.0042 CFG per DAI invested per day. You earn CFG rewards from day one of your investment but can only start claiming it after a minimum holding period of 30 days. These rewards can be claimed through the Tinlake but are held on the Centrifuge Chain. Please find more information about CFG (previously RAD) and how to claim them [here](https://www.youtube.com/watch?v=5-s8AUdEHVk&t=1058s). Reward rates, reward totals, and the minimum locked period are subject to change [via governance](https://gov.centrifuge.io/c/chain/5).

### How secure are Tinlake pools?

Several audits have been performed on our entire stack. [These audits can be read here](https://github.com/centrifuge/security/tree/master/audits).

### Is TIN available for investors?

Our Asset Originators have only opened TIN to a small number of investors who have been instrumental in developing their product. We anticipate that in the future some Asset Originators will choose to make TIN more widely available to investors.

## CFG Token

### How do I earn CFG tokens?

You can currently earn CFG by investing in a pool on Tinlake or running a validator node. Learn more on our [Centrifuge Token](https://centrifuge.io/cfg) page.

### Where can I find details about CFG tokenomics including circulating/total supply?

Details regarding the CFG token can be found in our[ token summary](https://centrifuge.io/cfg_token_summary.pdf).

## Centrifuge Chain

### What does Centrifuge Chain run on?

Centrifuge Chain is a Proof-of-Stake blockchain built on Parity Substrate with a bridge to Ethereum. [Learn more about Centrifuge Chain here](https://centrifuge.io/products/chain/).

### How do I create a Centrifuge chain address?

A Centrifuge Chain address can be created through the[ Centrifuge Portal](https://portal.chain.centrifuge.io/#/accounts), the[ Polkadot browser extension](https://polkadot.js.org/extension/), or through[ Parity Signer](https://www.parity.io/signer/). [This community post on obtaining a Centrifuge Chain address](https://gov.centrifuge.io/t/how-to-obtain-a-centrifuge-address/545) provides helpful steps for using these tools.

### Can I stake my CFG? How?

You can stake your CFG by nominating a validator through the[ Centrifuge Portal](https://portal.chain.centrifuge.io/#/staking). [This guide for Polkadot validator nomination](https://wiki.polkadot.network/docs/en/maintain-guides-how-to-nominate-polkadot) demonstrates a process similar to that of Centrifuge Chain.

### How do I run my own validator?

Refer to our [developer documentation](https://developer.centrifuge.io/chain/get-started/validate/) to get started with running a validator node. To become a validator, your node will require enough nominations to replace a validator in the next era.
