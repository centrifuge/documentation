---
id: index
title: Integrator Guide
sidebar_position: 1
---

# Integrator Guide

Welcome to the Centrifuge Integrator Guide. This section is designed for developers, DeFi protocols, and wallets looking to build on top of Centrifuge.

## What can you build?

- **Yield Aggregators**: Route idle stablecoin capital into RWA vaults for sustainable yield.
- **Portfolio Dashboards**: Display RWA positions alongside crypto assets.
- **Secondary Markets**: Enable trading of Centrifuge share tokens (where regulatory compliant).
- **Structured Products**: Create tranches or derivatives on top of RWA pools.

## Key Concepts

- **Hub-and-Spoke**: Understand that state may live on the Centrifuge Chain (Hub) while tokens live on Ethereum/L2s (Spokes).
- **Async Flows**: Many RWA processes are asynchronous. Your UI/Contract must handle "pending" states.
- **Identity**: Some pools require investors to valid DIDs/KYC.

## Getting Started

Check out the [Quickstart for Integrators](/user-v2/get-started/integrators) to make your first transaction.

## Advanced Topics

- [Distribution Architecture](/user-v2/platform/distribution)
- [Index Integrations](/user-v2/platform/index-integrations)
