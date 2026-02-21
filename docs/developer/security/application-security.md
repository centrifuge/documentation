---
id: application-security
title: Application security
sidebar_position: 4
---

# Application security

Centrifuge applications are built to meet institutional requirements for access control, infrastructure isolation, and real-time monitoring.

## Access controls

* All administrative access requires hardware-based two-factor authentication. Hardware security keys are phishing-resistant and cannot be stolen remotely — unlike SMS codes, TOTP authenticator apps, or cloud-based passkeys, which remain vulnerable to interception, SIM-swapping, or remote theft.
* Sensitive operations such as deployments and configuration changes require multi-signature authorization, preventing any single point of failure.
* Application deployments are authenticated with strict role-based access controls. Infrastructure platform access is limited under least-privilege principles.

## Infrastructure

* Centrifuge web applications run on a fully serverless architecture, minimizing the attack surface by eliminating persistent servers.
* Containerized services undergo security scans before publication, with regular base image and dependency updates.
* Static code analysis runs across the development pipeline, catching vulnerabilities before they reach production.

## Network and application protection

All web traffic is proxied through an enterprise CDN and security platform, providing layered protection from network edge to application layer:

* Full strict SSL/TLS with TLS 1.3, automatic HTTPS redirection, and HSTS enforcement to prevent downgrade attacks.
* DNSSEC enabled on all managed zones, preventing DNS spoofing and cache poisoning.
* Web application firewall with managed rulesets, DDoS mitigation, and rate limiting.
* Strict Content Security Policy, Permissions-Policy, and other security headers enforced across all applications.
* Client-side script monitoring to detect tampering.
* Fail-closed architecture — if edge services hit their limits, requests are rejected rather than bypassing security controls.
* Hardware-based two-factor authentication enforced for all platform account users.

## Continuous security monitoring

Security monitoring spans multiple layers — cloud infrastructure, CDN, application code, and onchain activity — using a combination of managed security platforms, automated scanners, and custom-built monitoring bots. Coverage includes:

* Static application security testing (SAST) and source code scanning for exposed secrets.
* Vulnerability detection and license compliance checks across all open-source dependencies.
* Known vulnerability scanning for all published container images.
* Cloud infrastructure configuration audits and posture management.
* Surface monitoring for public-facing domains.
* Infrastructure-as-code misconfiguration detection before deployment.
* Malware scanning across all monitored assets.

## Onchain monitoring

* Dedicated monitoring bots track sensitive onchain operations: liquidity pool activity, cross-chain message relaying, and code deployment verification against published releases.
* Real-time alerting flags anomalous transactions and state changes.
* All deployments generate security audit logs, which are reviewed regularly for suspicious activity.
