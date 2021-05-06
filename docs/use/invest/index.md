---
id: invest
order: 1
title: Invest in Tinlake
contributors: <Dennis Wellmann:dennis@centrifuge.io>
redirect_from:
  - /use/
---

## Assess a pool

### Introduction

This section walks you through the process as an investor before the first investment: from the home page, to the pool page, and to the resources that will help you decide whether or not you are ready to invest in a pool. After this section, you should be able to do your own research (“DYOR”) and confidently invest in one of the upcoming Tinlake pools.

### The TL;DR Checklist

It’s a lot of information at first, so we put together this step by step list you can use to help you make a decision about which pool you feel best investing in:

- Choosing a pool: Select the pool based on pool value, asset type, and DROP APR that you are most comfortable with.
- Asset Originator: check the Discourse community intro and pool summary, and any other information you find on the web about the company/asset. Check the list of assets financed on Tinlake to see their reputation on Tinlake.
- Asset Type: Do I understand what assets I will finance and the risk of this asset type?
- Risk: Am I comfortable with the TIN buffer protecting my DROP?
- Yield: How does the Cash drag look in relation to the average asset size?

### For starters: Choosing pools

We gotta start in the most obvious place: tinlake.centrifuge.io. The top banner shows you the total value for all pools but for our purposes, we are only looking at the list of pools which currently (mid January 2021) are:

![](./images/choosing_pools.png)

Each one of these is a pool run by an Asset Originator. This dashboard currently shows you a list of seven pools. You might notice that some of them have that little yellow label ”oversubscribed;” in the screenshot above these are amongst others Harbor Trade Credit, ConsolFreight and Paperchain. That yellow label means that they are currently not open for additional investments. When these asset originators drop more assets to be financed the pool will open back up and the label will disappear.

Under the Asset Originator, you’ll find the asset type. For New Silver, it’s real estate bridge loans. That means you, as the investor, will be financing New Silver’s active real estate bridge loans. As an investor you finance the entire portfolio, so you finance all loans in the pool, not one single asset. You can actually see the bridge loans converted to NFTs on the Assets page (will go more into that later).

The Pool Value tells you the current volume of financed assets and how big the pool currently is.

The DROP APR is the fixed nominal interest rate DROP investors receive. This rate is applied to the outstanding financing amount of the pool and tells you how much profit you should expect for your invested DAI. The interest in Tinlake (as most DeFi protocols) is accrued every second, so you earn yield every moment you are invested. That means if you invest 10k DAI into a fully deployed Tinlake pool with a 10% DROP APR you will have 11.05k at the end of the year (equal to a 10.52% APY). The effective DROP yield may be slightly lower than the DROP APR due to the pool’s “cash drag” (see below). Also, when you invest, you also receive Radial Rewards on top 🤑.

### Check out Asset Originator and Asset Type

Based on the asset type, let’s say you are most interested in real estate bridge loans. You understand the asset and feel more comfortable with a 5% DROP APR, given your trust in real estate. The Pool Overview tab will be your first resource that helps you check out the Asset Originator. Let’s start below, where you’ll find a short introduction to the Asset Originator and the asset type.
In the header you'll find the most important metrics for this pool: Asset type, Asset maturity, DROP APR and Pool Value.
![](./images/pool_info.png)

The asset maturity tells you how liquid your investment may be. The maturity date of every financing lets you know when the asset originator is obliged to pay back the loan. Upon repayment investors will always be able to redeem before an Asset Originator can use the funds for new financings again. Thus you can see the average maturity as a “soft lockup” period. The reason it is “soft” is because you technically still can withdraw funds from the pool reserve, if the pool reserve has money to draw or other investors want to invest into the pool.

Under Asset Originator Details you find information about the Asset Originator and links to more resources.
![](./images/asset_originator_details.png)

### Discourse: Learn More about the Asset Originator

If you want to dig deeper into the Asset Originator you’ll find more information about the company spinning a pool in the Centrifuge Discourse. There is a link at the end of the description, clicking that link will send you to the New Silver’s community intro.

![](./images/new_silver_intro.png)

This is a human-friendly page that answers more about the company, organization, asset details, and disclosures. A list of all the community intros can be found here.
At the beginning of the community intro, you’ll find the pool summary (above it’s NS Series 2). This is a detailed description of the actual pool. On both the community intro and pool summary, you are free to ask questions/express concerns directly to the asset originator. Here’s a list of all previous and current pool summaries.
Asset Maturity Date

### Gauging Reputation

If you want to take a look at the past and current financings of the pool, change to the “Asset” tab, which will give you a list of the asset originator’s history with Tinlake as well as the graph of the development of asset value and reserve. For all assets in the list, a status of "NFT locked" (so the NFT is locked as collateral but not financed yet) “Ongoing” or “Completed” (fully repaid) will be listed.

![](./images/pool_financings.png)

Note: it’s good to also be aware that we have just recently launched Tinlake. Many of these pools are still building up their asset history. ConsolFreight, whose invoice sizes are much smaller, is a good example showing a solid reputation history.

### Maximum Pool Reserve

You may also notice the “Max: 1” under the Pool Reserve. The maximum Reserve can be set by the Asset Originator and signal its financing needs. Subtracting the Max pool reserve by the current pool reserve will let you know how much you can invest in a pool. If the current Reserve is higher than the maximum Reserve set by the Asset Originator the pool is “oversubscribed.” So for New Silver, the pool is currently "oversubscribed", thus no further funding through investments is required.

### Sizing up the Pool by the Numbers: Risk and Yield

Once you are happy with the Asset Originator, let’s look at the state of the pool at the bottom of the Overview page. Lots of numbers happening here. But if it’s your first time, here are the most important things you need to know to better understand how the pool is doing:

![](./images/pool_state.png)

### Pool Value, Asset Value, and “Cash drag”

The left side gives you a summary of the pool’s asset portfolio. It shows you how many financings currently are active as well as the current maturity and value of these assets. The card also tells you how much liquidity is in the pool’s “Reserve”. The Pool Reserve and Asset Value add up to the Pool Value. The pool reserve is idle money: that means its money not being used to finance an asset. It’s normally more healthy to see this number relatively low compared to the Average Loan Size because investors don’t earn yield on the reserve — only on outstanding investments. Thus, a persistently high pool reserve may drag down your effective yield (“cash drag”). Temporarily, a Reserve may be relatively high. So for example, New Silver’s assets are quite big. Each real estate loan is around 190k. That means they will need at least 190k in the pool Reserve to finance the next asset.

### TIN and DROP and the Minimum TIN Risk buffer

The two cards to the right show you the current value of each of the two tranches (note, that both values add up to the “Pool Value” of the asset side). The value of these two tranches define the “Current TIN risk buffer”, calculated as TIN value / Pool Value, which you find between the tranche cards. This metric lets DROP investors know how protected they are through TIN. In this pool, the minimum is 15%, meaning DROP holders are protected even if 15% of the loans default. TIN holders (the higher risk) will take that loss instead. The ratio shows currently that it’s at 28%, meaning that percentage has risen. This number can fluctuate but the pool will never allow it to go below 15%. Note: If you need a refresher on how our TIN + DROP system works, head [here](link to two tranches section).

## Onboarding Guide

### Introduction

Tinlake pools are backed by real-world assets such as invoices, residential real-estate loans or trade receivables. Financing those assets on Tinlake requires a legal structure that give the investors a legal claim on the assets. To ensure this recourse, each Asset Originator sets up a legal structure commonly used in the traditional financial system - a “special purpose vehicle” ("SPV"). The collateral for the individual assets are assigned to this legal entity to ensure investors have a legal claim to the underlying assets and the assets are held independently ("banktruptcy remote") from the Asset Originator.

### Why onboarding and KYC

With such an underlying legal structure, investments in Tinlake Pool's usually are private placements from a regulatory perspective. This comes with certain regulatory requirements For example, behind many Tinlake pools are SPVs incorporated in Delaware. Private placements from these SPVs are conducted under `Reg D` or `Reg S` of the [`US Securities Act of 1933`](https://www.govinfo.gov/content/pkg/COMPS-1884/pdf/COMPS-1884.pdf) which means US investors must be accredited and all investors must clear standard KYC ("Know Your Customer") checks. All investors must also sign a subscription agreement ("SubDoc") with the pools "Issuer", so the legal entity/SPV behind the pool.

This legal set-up leads to certain restrictions. For example, there usually is a minimum investment amount per pool, US investors have to be `Accredited Investors` and, unfortunately, investors from certain countries may be excluded due to sanctions or missing tax treaties.

This obviously contradicts the idea of decentralized and open finance and the Centrifuge team is working hard to allow more people to invest within the legal framework given by regulators.

### Onboarding quick guide

To adhere to the regulatory requirements, Tinlake has integrated Securitize.io and Docusign for an automated KYC and SubDoc signing process.

![](./images/onboarding_guide.png)

After you have connected the ETH account you want to use for the investment into a Tinlake pool, there are three main steps to complete the onboarding (see further below for a more detailed step-by-step guide):

**1) Link your Securitize account**

First you need to link a newly created or existing Securitize account to your connected Ethereum address. This is a one-time step and you will be redirected to Tinlake to continue onboarding.

**2) Complete KYC through Securitize**

In the next step you will be forwarded to Securitize again for KYC so Securitize can verify your identity and investor status if you are an US resident.
To complete KYC, Securitize will usually ask you to provide:

- A government issued photo ID or passport
- [Optional] A selfie with this government issued photo ID
- Proof of address, e.g. utility bill, phone bill or council tax bill, not older than 3 months

Securitize's automated KYC process is usally conducted within one hour. If a manual review is required it may take 24h-48h.

Note, that this is a only one time step to become an eligible investor for Tinlake. Thus, you can reuse your KYCed Securitize iD for all Tinlake pools.

**3) Sign Subscription Agreement**

The final step is to digitally sign the subscription agreement with the pool's Issuer through Docusign. Please read the subscription agreement and attached executive summary carefully and sign it fill in your data. Depending on your country of tax residency you may also be required to fill out additional tax forms.
Your completed and signed document will be automatically shared with the pools issuer. After the Issuer has counter-signed **and** your KYC has cleared your ETH address will be whitelisted for investment and you are ready to go.

Note that, that this only has to be done once for every pool. This means, that once you have signed the subdoc with the issuer you can freely invest and redeem in this pool.

### FAQ

##### What is the minimum investment amount?

The minimum investment amount is determined by the pools issuer. It currently is \$5.000 for all Tinlake pools.

##### What documents/information do I need to provide for KYC?

To complete KYC, Securitize will ask you to provide

- A government issued photo ID or passport
- [Optionally] A selfie with this government issued photo ID
- Proof of address, e.g. utility bill, phone bill or council tax bill, usually not older than 3 months

##### How long does KYC take?

Securitize's automated KYC process is usally conducted within 1-2h. If a manual review is required it may take 24h-48h.

##### What is an "Accredited Investor"?

An accredited investor is an individual or a business entity that is allowed to trade securities that may not be registered with financial authorities such as the SEC. They are entitled to this privileged access by satisfying certain requirements regarding their income, net worth, asset size, governance status or professional experience. In the U.S, the definition of an accredited investor is put forth by [SEC in Rule 501 of Regulation D](https://www.ecfr.gov/cgi-bin/retrieveECFR?gp=&SID=8edfd12967d69c024485029d968ee737&r=SECTION&n=17y3.0.1.1.12.0.46.176).

The regulations for accredited investors vary from between jurisdictions but usually require that a person:

- must have a certain annual income [currently $200,000 ($300,000 for joint income) in the US] or
- must have a certain net worth [currently $1 million in the US] or
- be a general partner, executive officer, or director for the company that is issuing the unregistered securities or
- be a registered brokers and investment advisor

Please find more information [here](https://www.investopedia.com/terms/a/accreditedinvestor.asp) and [here](https://support.investready.com/help/verification-requirements-on-investready).

##### What information do I need to provide as accredited investor?

If you are an US investor you further need to provide documentation to prove you are an `Accredited Investor`. These documents can be, e.g.:

- IRS documents such as 1040s, W2s, 1099s, or K1s as proof of income
- Documents proving a net worth of at least \$1MM USD excluding the primary residence value not older than 90 days
- Third party letters signed by a licensed CPA, attorney, broker-dealer or registered investment advisor

Please find more details of required and accepted documents within Securitize.

##### What happens with my data

All investors must consent to share their personal data, such as name, address and country of residents with Securitize, Centrifuge and the pool's issuer. This data will be disclosed to Securitize during the onboarding process. Securitize may also share this data with the pool's issuer and Centrifuge.

For more information see the Data Sharing Policy below.

### Resources

#### List of currently excluded countries

Unfortunately, due to US sanctions, investors that are located in or are a resident of the following countries are currently blocked from investing in Tinlake pools:

- Afghanistan
- Cuba
- Iran
- Iraq
- North Korea
- South Sudan
- Sudan
- Syria
- Ukraine

The SPV underlying DBF1 is a Hong Kong based entity, thus the following countries are also excluded for this pool:

- American Samoa
- Guam
- Honduras
- Northern Mariana Islands
- Puerto Rico
- United States of America
- Virgin Islands, U.S

#### Data sharing policy

The investor onboarding and due diligence process, also known as KYC (Know Your Customer) will be performed by Securitize. Investors will disclose their personal data to Securitize. Your Securitize I.D. enables you (the investor) to direct Securitize to disclose your personal data to issuers you are choosing. Investors located in the European Economic Area (“EEA”) or the United Kingdom should be aware that these disclosures may involve transfers to countries that do not provide the same level of protection for personal data as their home countries. Please note that this Data Transfer Consent Form should be read in conjunction with Securitize's GLBA Privacy Notice and (for EEA and UK residents) our GDPR Privacy Notice. Any defined terms not defined herein take their meaning from those notices or the Securitize Platform Terms of Service.

Securitize will access and transfer your personal data to the issuer you identify. That issuer may be located in the United States or in other jurisdictions outside the EEA or the United Kingdom. What type of data will be disclosed? Securitize will disclose your personal data stored in your “Securitize I.D.” for the purpose set forth above. That information includes each category of personal data identified in the GLBA Notice or GDPR Notice, as applicable.

Securitize only facilitates the initial disclosure to the issuers that you have affirmatively selected. Should you no longer want to communicate with a particular issuer after consenting to the disclosure discussed herein, or if you wish that issuer to delete the personal data it has been provided pursuant to this consent, please contact that issuer directly.

By consenting to this disclosure via Securitize I.D., your information will be transferred to the country in which the particular issuers you have selected is located. According to EEA regulations, the United States does not provide an “adequate” level of protection for purposes of data protection, and no alternative safeguards are in place for this particular transfer. Further, the issuer you have selected may be located in the United States or in another country that does not provide such adequate levels of protection or safeguards. As such, your information may be at risk of unauthorized or unwanted access. Please note, however, that Securitize takes the security of your information seriously and implements organizational and technical measures to ensure a level of security for your personal data appropriate to these risks. Content of Issuer Website. Securitize is not responsible for the content of the issuer’s website and makes no representations, assurances or endorsements regarding the content of such website, the issuer, the issuer’s operations and business activities, or any offering of securities which the issuer may make. All content on such issuer’s website is created at its sole discretion.

You acknowledge you have read and consent to the transfer of your personal data as set forth herein. You may decline to consent to this transfer, in which case Securitize will not be able to carry out your direction to disclose your personal information to your selected issuer.

#### Terms and Conditions

The information to which this website gives access is exclusively intended for persons who are not located in or resident of certain other restricted jurisdictions, and who are otherwise permitted to receive such information under applicable law.

The information to which this website gives access does not constitute an offer or an invitation to purchase securities in any other jurisdiction in which such offer or invitation is not authorized or to any person to whom it is unlawful to make such offer or invitation.
An investment in will be characterized by a high degree of risk, volatility and illiquidity. A prospective investor should thoroughly review the confidential information contained herein and the terms of the relevant agreements, and carefully consider whether such an investment is suitable to the investor’s financial situation and goals.

Certain economic and market information contained herein has been obtained from published sources prepared by other parties. While such sources are believed to be reliable, neither nor any of its affiliates assume any responsibility for the accuracy or completeness of such information. Neither delivery of this information nor any statement herein should be taken to imply that any information contained herein is correct as of any time subsequent to the date hereof.

No person has been authorized to make any statement other than as set forth in the applicable offering documents, and any such statements, if made, must not be relied upon.
Prospective investors are cautioned not to rely on any prior return information set forth herein in making a decision whether or not to invest. Any return information contained herein has not been audited or verified by any independent party and should not be considered representative of returns that may be received by an investor in . Certain factors exist that may affect comparability including, among others, the deduction of costs and service fees. Certain factual and statistical information contained herein has been obtained from published sources prepared by other parties and has not been independently verified by the issuer. Opinions and estimates may be changed without notice.

Certain statements of past performance, and certain economic and market information, contained herein includes projections and estimates made by and other parties. Any projected returns and estimates of economic and market information contained herein involve risks and uncertainties and are based on assumptions concerning circumstances and events that have not yet occurred and may be subject to being influenced by events beyond the control of the issuer. Actual results could differ significantly. No representation or warranty, express or implied, is made by the issuer. As to the reasonableness or accuracy of the projections or estimates and, as a result, such projections and estimates should be viewed solely as an orderly representation of estimated results if underlying assumptions are realized. Investors should subject the projections and estimates to review by their own professional advisers.

In considering the prior performance information contained herein, prospective investors should bear in mind that past performance is not necessarily indicative of future results, and there can be no assurance that will achieve comparable results.
Prospective investors should make their own investigations and evaluations of the issuer, including the merits and risks involved in an investment therein. Prior to any investment, investors will have the opportunity to ask questions of and receive answers and additional information from concerning the terms and conditions of this offering and other relevant matters to the extent possesses the same or can acquire it without unreasonable effort or expense. Prospective investors should inform themselves as to the legal requirements applicable to them in respect of the acquisition, holding and disposition of the investment, and as to the income and other tax consequences to them of such acquisition, holding and disposition.

This information does not constitute an offer to sell, or a solicitation of an offer to buy, an interest in any jurisdiction in which it is unlawful to make such an offer or solicitation. Neither the United States Securities and Exchange Commission nor any other federal, state or foreign regulatory authority has approved an investment. Furthermore, the foregoing authorities have not confirmed the accuracy or determined the adequacy of this information, nor is it intended that the foregoing authorities will do so. Any representation to the contrary is a criminal offense.

Certain statements herein constitute forward-looking statements. When used herein, the words “may,” “will,” “should,” “project,” “anticipate,” “believe,” “estimate,” “intend,” “expect,” “continue,” and similar expressions or the negatives thereof are generally intended to identify forward-looking statements. Such forward-looking statements, including the intended actions and performance objectives of involve known and unknown risks, uncertainties, and other important factors that could cause the actual results, performance, or achievements of to differ materially from any future results, performance, or achievements expressed or implied by such forward-looking statements. No representation or warranty is made as to future performance or such forward-looking statements. All forward-looking statements herein speak only as of the date hereof. The issuer expressly disclaims any obligation or undertaking to disseminate any updates or revisions to any forward-looking statement contained herein to reflect any change in its expectation with regard thereto or any change in events, conditions, or circumstances on which any such statement is based.

Prospective investors are not to construe this information as investment, legal, tax, regulatory, financial, accounting or other advice, and this information is not intended to provide the sole basis for any evaluation of this investment. Prior to acquiring an interest, a prospective investor should consult with its own legal, investment, tax, accounting, and other advisors to determine the potential benefits, burdens, and other consequences of such investment.
By proceeding to view the materials to which this website gives access, you agree that you will not transmit or otherwise send any information to which this website gives access to any person in any jurisdiction in which the distribution of such information is restricted, or in which the offer or invitation to purchase tokens proposed to be issued by is not authorized, or to whom such offer or invitation may be unlawful.

If you are located in, or are a resident of, a country in which the cross-border marketing of securities is restricted, you are confirming that you are requesting this information without having been being solicited or approached, directly or indirectly, by the issuer or any issuer's affiliate or issuer's partner or other person acting as agent or otherwise on behalf of the issuer.

## Investment Guide

### Investment requirements

#### Legal requirements

- Onboarding incl. KYC through [Securitize.io](https://centrifuge.invest.securitize.io/#/login) has been succesfully completed
- Legal documentation (`Subscription Agreement`) for the pool you want to invest in has been signed in Securitize.io

![](./images/onboarding_flow.png#width=600px)

#### Technical requirements

- A web browser with a web3 wallet. Tinlake supports Ledger, [Metamask](https://metamask.io) and [Portis](https://www.portis.io/) at the moment. If you have not installed a web3 wallet yet, we recommend to use Metamask. This guide will also focus on using Tinlake with Metamask as a [Browser plugin](https://metamask.io/download.html). Please apply approporiate security measures when setting up your web3 wallet(see also below).
- _**If you use a Ledger, please make sure to activate `Contract data` in the settings of the Ethereum app and to update to the latest firmware.**_
- You need use the Ethereum address you have specified in the Subscription Agreement through your web3 wallet
- The "Ethereum Address of the Subscriber" needs to hold the DAI you want to invest

#### Display DAI and TIN/DROP in Metamsk

By default, Metamask only displays your ETH balance under `Assets`. Other tokens need to be added to be displayed. To display the DAI and DROP balances in Metamask, you need to add both tokens to Metamask.
For DROP and TIN this can be done through Tinlake UI. Just click on `Add DROP/TIN to your wallet` in the respective investment component (see below) and confirm in Metamask.
If you haven't added DAI yet, in Metamask:

- Click on `Assets` tab
- Scroll down, click on `Add token`
- Look for `DAI` in the search field
- Mark `Dai Stablecoin (DAI)`
- Scroll down and click on `Next`
- Add `DAI` with a click on the `Add tokens` button

### Fund your Ethereum address

Please make sure that your Ethereum address is funded with the investment amount in DAI and sufficient ETH to pay for the transactions. There are [several centralized and decentralized exchanges](https://cointelegraph.com/ethereum-for-beginners/how-to-buy-ethereum), such as [Coinbase](https://www.coinbase.com/) or [Uniswap](https://uniswap.org/) where you can buy and/or trade ETH and DAI against USD and other tokens.

### The investment interface

The investment will be made through the Tinlake UI available at [tinlake.centrifuge.io](https://tinlake.centrifuge.io/). Select the pool you want to invest in and connect your web3 wallet.
At the top of the page you find the most important pool information, such as the current Pool and Tranche values ([more on Tranches](../../overview/tranches/) and other on Tinlake terminology.)

![](./images/pool_overview.png)

Below you find the current epoch state to your left and the TIN/DROP invest and redeem components to your right:

![](./images/epoch_details.png)

Under `Current epoch` you can see how much time and investment capacity is left in the current epoch. You can lock your investment/redemption at any time during an epoch. After the minimum epoch duration has passed, the epoch can be closed and all locked orders will be executed following a best effort approach. The table under `Total locked orders` shows you how many TIN/DROP investment and redemption order are locked for the current epoch.

### Investment flow summary

Tinlake's investment's and redemptions are executed in (usually daily ) epochs. During the epoch you can lock your investment or redemption order. You can cancel your locked order at any time throughout the epoch. At the end of the epoch all locked orders automatically executed at best effort considering investment/redemption supply and demand and the pools risk metrics. You can collect your TIN/DROP (in case of an investment) or DAI (in case of an redemption) token at any time following the start of the new epoch. If your order is only partially executed you can collect the executed order. The unfullfilled part of the order remains locked for investment/redemption but can this lock can be cancelled at any time.

![](./images/investment_flow.png#width=600px)

### Step-by-step investment guide

#### Connect to Tinlake pool

- Go to the [Tinlake URL](https://tinlake.centrifuge.io/) in your browser
- Click on the pool you want to invest in in the list of pools or visit it directly with the provided pool URL. You will see the pool details.
- Select the Ethereum address used for investing in Metamask. Make sure you also select the `Main Ethereum Network` as network.
- Click on the `Connect` button in the top right corner to connect your Ethereum address for the use with Tinlake. Confirm that you want to connect with your Metamask wallet.
- You should now see your address at the top right
  ![](https://storage.googleapis.com/centrifuge-hackmd/upload_676dff1fce8625342cb4eefa1be49b70.png)
- Click on the `Investments` tab.

#### Lock your investment

You find the TIN/DROP investment and redemption components on the investment page of the pool.

![](./images/drop_modal.png#width=400px)

When you are connected with your whitelisted address after succesfully going through KYC and signing the Subsription Agreement on Securitize, your component will give you the Option to Invest and Redeem

![](./images/drop_modal_whitelisted.png#width=400px)

Before you start investing, you may want to `Add TIN/DROP token to your wallet` by simply clicking on the link at the bottom of the component.

To lock your TIN/DROP investment:

- Click on the `Invest` button
- Input the amount in DAI you want to invest (Note, that the Tinlake Minimum Investment amount is 10,000 DAI)
- Click on `Lock DAI`

![](./images/drop_modal_invest.png#width=400px)

- This will open Metamask to confirm the transaction
  - If you are using Metamask without a hardware wallet there will one transaction to confirm
  - If you are using a hardware wallet there will be two transactions to confirm at your first transaction (First `Token Approval` then the `Invest Order`). For all your folling investments there will only be one confirmation in Metamask
- Your sucessfully locked order will be displayed in the component

![](./images/drop_modal_order.png#width=400px)

- Your investment amount in DAI will be transferred from your wallet and locked in the Tinlake contracts

**Note that locked DAI are not invested in Tinlake yet and thus do not accrue interest. Your order will be automatically executed at best effort at the close of the epoch.**

#### Cancel your locked investment

You can cancel your locked invest order at any time during the epoch. To cancel a locked order:

- Click on the `Cancel Order` button
- Confirm that you want to cancel

![](./images/drop_modal_cancel.png#width=400px)

- This will open Metamask where you need to confirm the cancel transaction

#### Epoch close and order execution

When the epoch is closed all locked orders will be executed by the smart contracts at best effort considering the pools risk metrics. E.g. if the current TIN risk buffer is already close to the Minimum TIN risk buffer no further DROP investments may be accepted until further TIN investments are provided. If the amount of locked orders exceed the epoch's `Maximum Investment Capacity` set by the Asset Originator, locked orders can only be partially executed pro rata.

#### Collect your executed investment

After all orders are executed your fullfilled TIN/DROP order will be ready for collection:

![](./images/drop_modal_collect.png#width=400px)

To collect your TIN/DROP token simply

- Click on the `Collect button`
  The TIN/DROP token will be transferred to your wallet.

![](./images/drop_modal_balance.png#width=400px)

The TIN/DROP token will continue to collect yield reflected in the token price. You can redeem these TIN/DROP at any time (see below).
Note that the token immediatelly start to accrue interest also if you do not collect them immediately. However, you will need to collect these tokens before you can redeem them or make another investment.
