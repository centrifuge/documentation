---
id: operational-security
title: Operational security
sidebar_position: 6
---

# Operational security

The Centrifuge team maintains production-grade security standards across development and operational workflows.

## Team standards

* Every team member is issued two YubiKeys (primary and backup) and must register both on every account that supports two-factor authentication. No SMS codes or cloud-based passkeys are permitted for critical accounts.
* All team members run endpoint firewalls (Little Snitch or LuLu) configured to company baselines, blocking unauthorized outbound network connections.
* Credentials are managed through 1Password. Passwords are never shared or reused across services.
* Full-disk encryption (FileVault) and automatic screen lock are enforced on all devices.
* The team completes regular security trainings, including phishing awareness exercises.
* The Centrifuge security team performs regular controlled attacks against core contributors (phising, smithing, social engineering, etc.) and launches monthly easy-to-digest trainings for all employees.
* The core team completed a third-party operational security review with [OPSEK](https://www.opsek.io/) in 2025.

## Operational security

* Administrative accounts are separated from day-to-day accounts and have stricter security policies. No single person holds all keys to any critical system.
* All system access follows the principle of least privilege, with quarterly access reviews and credential rotation.
* All code changes require peer review before merge. The development pipeline includes unit, integration, fuzz, and invariant testing.
