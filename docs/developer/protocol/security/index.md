---
id: security
title: Security
---

# Security

Centrifuge has best-in-class security process, with highlights including
* 16 security reviews to date for the Centrifuge protocol.
* Launched on mainnet in 2019, 0 exploits.
* Extensive invariant test suite.

The protocol codebase is fully immutable, and any emergency functions are locked behind a 72-hour timelock.

## Security reviews

### Protocol

| Auditor                                              | Scope            | Date            | Engagement                 | Report                                                                                                                                                                      |
| ---------------------------------------------------- | --------------- | --------------- | :------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Macro](https://0xmacro.com/)                      | Merkle Proof Manager        | June 2025        | Security review            | [`Report`](https://0xmacro.com/library/audits/centrifuge-1.html)                                                                             |
| [Electisec](https://electisec.com/)                      | Spoke/Vaults        | June 2025        | Security review            | Public soon                                                                             |
| [Spearbit](https://spearbit.com/)                      | V3.0        | May 2025        | Security review            | [`Report`](https://github.com/centrifuge/protocol-v3/blob/main/docs/audits/2025-05-Cantina.pdf)                                                                             |
| [burraSec](https://www.burrasec.com/)                      | Gateway        | May 2025        | Security review            | [`Report`](https://github.com/centrifuge/protocol-v3/blob/main/docs/audits/2025-05-burraSec.pdf)                                                                             |
| [xmxanuel](https://x.com/xmxanuel)                   | V3.0        | May 2025       | Security review            |  [`Report`](https://github.com/centrifuge/protocol-v3/blob/main/docs/audits/2025-05-xmxanuel.pdf)                                                                                                                                                                    |
| [Alex the Entreprenerd](https://x.com/gallodasballo)                     | V3.0        | Apr 2025        | Review + invariant testing            | [`Report`](https://github.com/Recon-Fuzz/audits/blob/main/Centrifuge_Protocol_V3.MD)                                                                             |
| [burraSec](https://www.burrasec.com/)                      | Gateway        | Apr 2025        | Security review            | [`Part 1`](https://github.com/centrifuge/protocol-v3/blob/main/docs/audits/2025-04-burraSec-1.pdf) [`Part 2`](https://github.com/centrifuge/protocol-v3/blob/main/docs/audits/2025-04-burraSec-2.pdf)                                                                             |
| [xmxanuel](https://x.com/xmxanuel)                   | V3.0        | Mar 2025       | Security review            |  [`Report`](https://github.com/centrifuge/protocol-v3/blob/main/docs/audits/2025-03-xmxanuel.pdf)                                                                                                                                                                    |
| [Spearbit](https://spearbit.com/)                      | V2.1        | Feb 2025        | Security review            | [`Report`](https://github.com/centrifuge/protocol-v3/blob/main/docs/audits/2025-02-Cantina.pdf)                                                                             |
| [Recon](https://getrecon.xyz/) | V2.0        | Jan 2025  | Invariant testing | [`Report`](https://getrecon.substack.com/p/never-stop-improving-your-invariant) |
| [Spearbit](https://spearbit.com/)                    | V2.0        | July 2024       | Security review            | [`Report`](https://github.com/centrifuge/protocol-v3/blob/main/docs/audits/2024-08-Spearbit.pdf)                                                                            |
| [Spearbit](https://spearbit.com/)                    | Morpho integration        | June 2024       | Security review            | [`Report`](https://github.com/centrifuge/morpho-market/blob/main/audits/2023-06-cantina.pdf)                                                                            |
| [Alex the Entreprenerd](https://x.com/gallodasballo) | V2.0        | Mar - Apr 2024  | Review + invariant testing | [`Part 1`](https://getrecon.substack.com/p/lessons-learned-from-fuzzing-centrifuge) [`Part 2`](https://getrecon.substack.com/p/lessons-learned-from-fuzzing-centrifuge-059) |
| [Spearbit](https://spearbit.com/)                      | V1.0        | Oct 2023        | Security review            | [`Report`](https://github.com/centrifuge/protocol-v3/blob/main/docs/audits/2023-10-Cantina.pdf)                                                                             |
| [SRLabs](https://www.srlabs.de/)                     | V1.0        | Sep 2023        | Security review            | [`Report`](https://github.com/centrifuge/protocol-v3/blob/main/docs/audits/2023-09-SRLabs.pdf)                                                                              |
| [Code4rena](https://code4rena.com/)                   | V1.0        | Sep 2023        | Competitive audit          | [`Report`](https://code4rena.com/reports/2023-09-centrifuge)                                                                                                                |

### Operational securitiy

The core team contributing to Centrifuge has completed an operational security review with [OPSEK](https://www.opsek.io/).

## Bug bounty

Centrifuge runs an active bug bounty program, available on https://centrifuge.io/security.