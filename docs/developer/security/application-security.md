---
id: application-security
title: Application security
sidebar_position: 4
---

# Application security

Centrifuge applications are built to meet institutional requirements for access control, infrastructure isolation, and real-time monitoring.

## Access controls

* All administrative access requires hardware-based two-factor authentication using YubiKeys. Hardware security keys are phishing-resistant and cannot be stolen remotely — unlike SMS codes, TOTP authenticator apps, or cloud-based passkeys, which remain vulnerable to interception, SIM-swapping, or remote theft.
* Sensitive operations such as deployments and configuration changes require multi-signature authorization, preventing any single point of failure.
* Application deployments are authenticated through GitHub with strict role-based access controls. Infrastructure platform access is limited to senior engineers under least-privilege principles.

## Infrastructure

* Centrifuge Dapps run on a fully serverless architecture, minimizing the attack surface by eliminating persistent servers.
* Containerized services undergo security scans before publication, with regular base image and dependency updates.
* Static code analysis runs across the development pipeline — cargo-vet for Rust dependencies and CodeQL for JavaScript — catching vulnerabilities before they reach production.

## Cloudflare

All Centrifuge web traffic is proxied through Cloudflare, providing layered protection from network edge to application layer.

* **Encryption**: Full (strict) SSL/TLS on the primary domain with TLS 1.3 enabled. HTTP traffic is automatically redirected to HTTPS, and HSTS is enforced with `includeSubdomains` to prevent downgrade attacks.
* **DNS security**: DNSSEC is enabled on all managed zones, preventing DNS spoofing and cache poisoning.
* **Web application firewall**: Cloudflare's managed WAF is active, including the OWASP Core Ruleset, exposed credentials checks, and DDoS L7 mitigation. Rate limiting is configured to throttle abusive traffic patterns.
* **Security headers**: Strict Content Security Policy (CSP), Permissions-Policy, Referrer-Policy, and `X-Content-Type-Options: nosniff` are enforced across all applications. Page Shield monitors client-side scripts for tampering.
* **Workers**: Production traffic served by Cloudflare Workers operates in fail-closed mode — if a Worker hits its limits, the request is rejected rather than bypassing security controls.
* **Account access**: hardware mandatory Two-factor authentication is enforced for all Cloudflare account users

## Continuous security monitoring

Centrifuge uses [Aikido Security](https://www.aikido.dev/) for automated, real-time monitoring across code and infrastructure. 
Scans cover:

* **Code repositories**: Static application security testing (SAST) and source code scanning for exposed secrets.
* **Open-source dependencies**: Vulnerability detection and license compliance checks across all packages.
* **Container images**: Known vulnerability scanning for all published containers.
* **Cloud environments**: Configuration audits and posture management for Google Cloud infrastructure.
* **Public-facing domains**: Surface monitoring for vulnerabilities and misconfigurations.
* **Infrastructure-as-code**: Misconfiguration detection before deployment.

Aikido's malware scanner runs across all monitored assets. Findings are triaged and tracked through an integrated issue workflow.

## Onchain monitoring

* Dedicated blockchain monitoring bots track sensitive onchain operations: liquidity pool activity, cross-chain message relaying, and code deployment verification against GitHub releases.
* Real-time alerting flags anomalous transactions and state changes, notifying the security team immediately.
* Block production is continuously monitored for disruptions or anomalies.
* All deployments generate security audit logs, which are reviewed regularly for suspicious activity.
