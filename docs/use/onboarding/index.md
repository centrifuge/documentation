---
id: onboarding
order: 2
title: Onboarding Guide
contributors: <Dennis Wellmann:dennis@centrifuge.io>
---

## Introduction

Tinlake pools are backed by real-world assets such as invoices, residential real-estate loans or trade receivables. Financing those assets on Tinlake requires a legal structure that give the investors a legal claim on the assets. To ensure this recourse, each Asset Originator sets up a legal structure commonly used in the traditional financial system - a “special purpose vehicle” ("SPV"). The collateral for the individual assets are assigned to this legal entity to ensure investors have a legal claim to the underlying assets and the assets are held independently ("banktruptcy remote") from the Asset Originator.

## Why onboarding and KYC

With such an underlying legal structure, investments in Tinlake Pool's usually are private placements from a regulatory perspective. This comes with certain regulatory requirements For example, behind many Tinlake pools are SPVs incorporated in Delaware. Private placements from these SPVs are conducted under `Reg D` or `Reg S` of the [`US Securities Act of 1933`](https://www.govinfo.gov/content/pkg/COMPS-1884/pdf/COMPS-1884.pdf) which means US investors must be accredited and all investors must clear standard KYC ("Know Your Customer") checks. All investors must also sign a subscription agreement ("SubDoc") with the pools "Issuer", so the legal entity/SPV behind the pool.

This legal set-up leads to certain restrictions. For example, there usually is a minimum investment amount per pool, US investors have to be `Accredited Investors` and, unfortunately, investors from certain countries may be excluded due to sanctions or missing tax treaties.

This obviously contradicts the idea of decentralized and open finance and the Centrifuge team is working hard to allow more people to invest within the legal framework given by regulators.

## Onboarding quick guide

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

## FAQ

#### What is the minimum investment amount?

The minimum investment amount is determined by the pools issuer. It currently is \$5.000 for all Tinlake pools.

#### What documents/information do I need to provide for KYC?

To complete KYC, Securitize will ask you to provide

- A government issued photo ID or passport
- [Optionally] A selfie with this government issued photo ID
- Proof of address, e.g. utility bill, phone bill or council tax bill, usually not older than 3 months

#### How long does KYC take?

Securitize's automated KYC process is usally conducted within 1-2h. If a manual review is required it may take 24h-48h.

#### What is an "Accredited Investor"?

An accredited investor is an individual or a business entity that is allowed to trade securities that may not be registered with financial authorities such as the SEC. They are entitled to this privileged access by satisfying certain requirements regarding their income, net worth, asset size, governance status or professional experience. In the U.S, the definition of an accredited investor is put forth by [SEC in Rule 501 of Regulation D](https://www.ecfr.gov/cgi-bin/retrieveECFR?gp=&SID=8edfd12967d69c024485029d968ee737&r=SECTION&n=17y3.0.1.1.12.0.46.176).

The regulations for accredited investors vary from between jurisdictions but usually require that a person:

- must have a certain annual income [currently $200,000 ($300,000 for joint income) in the US] or
- must have a certain net worth [currently $1 million in the US] or
- be a general partner, executive officer, or director for the company that is issuing the unregistered securities or
- be a registered brokers and investment advisor

Please find more information [here](https://www.investopedia.com/terms/a/accreditedinvestor.asp) and [here](https://support.investready.com/help/verification-requirements-on-investready).

#### What information do I need to provide as accredited investor?

If you are an US investor you further need to provide documentation to prove you are an `Accredited Investor`. These documents can be, e.g.:

- IRS documents such as 1040s, W2s, 1099s, or K1s as proof of income
- Documents proving a net worth of at least \$1MM USD excluding the primary residence value not older than 90 days
- Third party letters signed by a licensed CPA, attorney, broker-dealer or registered investment advisor

Please find more details of required and accepted documents within Securitize.

#### What happens with my data

All investors must consent to share their personal data, such as name, address and country of residents with Securitize, Centrifuge and the pool's issuer. This data will be disclosed to Securitize during the onboarding process. Securitize may also share this data with the pool's issuer and Centrifuge.

For more information see the Data Sharing Policy below.

## Resources

### List of currently excluded countries

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

### Data sharing policy

The investor onboarding and due diligence process, also known as KYC (Know Your Customer) will be performed by Securitize. Investors will disclose their personal data to Securitize. Your Securitize I.D. enables you (the investor) to direct Securitize to disclose your personal data to issuers you are choosing. Investors located in the European Economic Area (“EEA”) or the United Kingdom should be aware that these disclosures may involve transfers to countries that do not provide the same level of protection for personal data as their home countries. Please note that this Data Transfer Consent Form should be read in conjunction with Securitize's GLBA Privacy Notice and (for EEA and UK residents) our GDPR Privacy Notice. Any defined terms not defined herein take their meaning from those notices or the Securitize Platform Terms of Service.

Securitize will access and transfer your personal data to the issuer you identify. That issuer may be located in the United States or in other jurisdictions outside the EEA or the United Kingdom. What type of data will be disclosed? Securitize will disclose your personal data stored in your “Securitize I.D.” for the purpose set forth above. That information includes each category of personal data identified in the GLBA Notice or GDPR Notice, as applicable.

Securitize only facilitates the initial disclosure to the issuers that you have affirmatively selected. Should you no longer want to communicate with a particular issuer after consenting to the disclosure discussed herein, or if you wish that issuer to delete the personal data it has been provided pursuant to this consent, please contact that issuer directly.

By consenting to this disclosure via Securitize I.D., your information will be transferred to the country in which the particular issuers you have selected is located. According to EEA regulations, the United States does not provide an “adequate” level of protection for purposes of data protection, and no alternative safeguards are in place for this particular transfer. Further, the issuer you have selected may be located in the United States or in another country that does not provide such adequate levels of protection or safeguards. As such, your information may be at risk of unauthorized or unwanted access. Please note, however, that Securitize takes the security of your information seriously and implements organizational and technical measures to ensure a level of security for your personal data appropriate to these risks. Content of Issuer Website. Securitize is not responsible for the content of the issuer’s website and makes no representations, assurances or endorsements regarding the content of such website, the issuer, the issuer’s operations and business activities, or any offering of securities which the issuer may make. All content on such issuer’s website is created at its sole discretion.

You acknowledge you have read and consent to the transfer of your personal data as set forth herein. You may decline to consent to this transfer, in which case Securitize will not be able to carry out your direction to disclose your personal information to your selected issuer.

### Terms and Conditions

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

