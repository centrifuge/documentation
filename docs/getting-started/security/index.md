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
* Static code analysis runs across the development pipeline — cargo-vet for Rust dependencies and CodeQL for JavaScript — catching vulnerabilities before they reach production.

### Cloudflare

All Centrifuge web traffic is proxied through Cloudflare, providing layered protection from network edge to application layer.

* **Encryption**: Full (strict) SSL/TLS on the primary domain with TLS 1.3 enabled. HTTP traffic is automatically redirected to HTTPS, and HSTS is enforced with `includeSubdomains` to prevent downgrade attacks.
* **DNS security**: DNSSEC is enabled on all managed zones, preventing DNS spoofing and cache poisoning.
* **Web application firewall**: Cloudflare's managed WAF is active, including the OWASP Core Ruleset, exposed credentials checks, and DDoS L7 mitigation. Rate limiting is configured to throttle abusive traffic patterns.
* **Security headers**: Strict Content Security Policy (CSP), Permissions-Policy, Referrer-Policy, and `X-Content-Type-Options: nosniff` are enforced across all applications. Page Shield monitors client-side scripts for tampering.
* **Workers**: Production traffic served by Cloudflare Workers operates in fail-closed mode — if a Worker hits its limits, the request is rejected rather than bypassing security controls.
* **Account access**: Two-factor authentication is enforced for all Cloudflare account users.

### Continuous Security Monitoring

Centrifuge uses [Aikido Security](https://www.aikido.dev/) for automated, real-time monitoring across code and infrastructure. Scans run daily and cover:

* **Code repositories**: Static application security testing (SAST) and source code scanning for exposed secrets.
* **Open-source dependencies**: Vulnerability detection and license compliance checks across all packages.
* **Container images**: Known vulnerability scanning for all published containers.
* **Cloud environments**: Configuration audits and posture management for Google Cloud infrastructure.
* **Public-facing domains**: Surface monitoring for vulnerabilities and misconfigurations.
* **Infrastructure-as-code**: Misconfiguration detection before deployment.

Aikido's malware scanner runs across all monitored assets. Findings are triaged and tracked through an integrated issue workflow.

### On-Chain Monitoring

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
