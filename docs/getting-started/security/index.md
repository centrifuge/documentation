---
id: security
title: Security Overview
---

# Security Overview

Centrifuge treats security as an operational requirement across the entire stack — protocol, application, and infrastructure. Since launching on mainnet in 2019, the platform has maintained a zero-exploit track record backed by 24+ independent security reviews from firms including Spearbit, Blackthorn, and SRLabs.

This page covers application and operational security practices. The protocol codebase is fully immutable, with emergency functions locked behind a 48-hour timelock.

:::info
For protocol-level security including smart contract audits, the bug bounty program, and guardian details, see [Protocol Security](/developer/protocol/security).
:::

## Application Security

Centrifuge applications are built to meet institutional requirements for access control, infrastructure isolation, and real-time monitoring.

### Access Controls

* All administrative access requires hardware-based two-factor authentication using YubiKeys. Hardware security keys are phishing-resistant and cannot be stolen remotely — unlike SMS codes, TOTP authenticator apps, or cloud-based passkeys, which remain vulnerable to interception, SIM-swapping, or remote theft.
* Sensitive operations such as deployments and configuration changes require multi-signature authorization, preventing any single point of failure.
* Application deployments are authenticated through GitHub with strict role-based access controls. Infrastructure platform access is limited to senior engineers under least-privilege principles.

### Infrastructure

* Centrifuge Dapps run on a fully serverless architecture, minimizing the attack surface by eliminating persistent servers.
* Containerized services undergo security scans before publication, with regular base image and dependency updates.
* All web traffic is proxied through Cloudflare, providing DDoS protection, a web application firewall, and enforced security headers.
* Static code analysis runs across the development pipeline — cargo-vet for Rust dependencies and CodeQL for JavaScript — catching vulnerabilities before they reach production.

### Monitoring

* Dedicated blockchain monitoring bots track sensitive on-chain operations: liquidity pool activity, cross-chain message relaying, and code deployment verification against GitHub releases.
* Real-time alerting flags anomalous transactions and state changes, notifying the security team immediately.
* Block production is continuously monitored for disruptions or anomalies.
* All deployments generate security audit logs, which are reviewed regularly for suspicious activity.

## Internal Security Practices

The Centrifuge team maintains production-grade security standards across development and operational workflows.

### Team Standards

* Every team member is issued two YubiKeys (primary and backup) and must register both on every account that supports two-factor authentication. No SMS codes or cloud-based passkeys are permitted for critical accounts.
* All team members run endpoint firewalls — Little Snitch or LuLu — configured to company baselines, blocking unauthorized outbound network connections.
* Credentials are managed through 1Password. Passwords are never shared or reused across services.
* Full-disk encryption (FileVault) and automatic screen lock are enforced on all devices.
* The team completes regular security training, including phishing awareness exercises.

### Operational Security

* Administrative accounts are separated from day-to-day accounts. No single person holds all keys to any critical system.
* All system access follows the principle of least privilege, with regular access reviews and credential rotation.
* The core team has completed a third-party operational security review with [OPSEK](https://www.opsek.io/).
* All code changes require peer review before merge. The development pipeline includes unit, integration, fuzz, and invariant testing.

## Reporting Security Issues

* **Responsible disclosure**: Report security vulnerabilities to [security@centrifuge.io](mailto:security@centrifuge.io). Allow reasonable time for assessment and remediation before public disclosure.
* **Bug bounty**: Centrifuge runs an active bug bounty program with a $250,000 maximum reward on [Cantina](https://cantina.xyz/bounties/6cc9d51a-ac1e-4385-a88a-a3924e40c00e).
* **Public disclosures**: Audit reports and security disclosures are published at [github.com/centrifuge/security](https://github.com/centrifuge/security).
* For the full audit history and guardian details, see [Protocol Security](/developer/protocol/security).
