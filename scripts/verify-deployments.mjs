#!/usr/bin/env node
// Verify the addresses on the Deployments page against the Centrifuge API.
//
// The page at docs/developer/protocol/deployments/index.mdx lists protocol
// contract addresses, token addresses, and vault addresses. This script cross
// checks each address (both the text shown and the address inside its explorer
// link) against the public Centrifuge API (https://api.centrifuge.io):
//
//   contracts  -> Deployment entity (per-network protocol contract addresses)
//   tokens     -> TokenInstance entity (per-network share-class token addresses)
//   vaults     -> Vault entity (per-network vault contract addresses)
//
// Usage:
//   node scripts/verify-deployments.mjs --scope=contracts
//   node scripts/verify-deployments.mjs --scope=tokens,vaults
//   node scripts/verify-deployments.mjs                 # all scopes
//
// Exit code is non-zero when any error is found. Warnings never fail the run.

import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const API_URL = process.env.CENTRIFUGE_API_URL || 'https://api.centrifuge.io';
const HERE = dirname(fileURLToPath(import.meta.url));
const DEFAULT_PAGE = resolve(HERE, '../docs/developer/protocol/deployments/index.mdx');

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------
let scopeArg = 'contracts,tokens,vaults';
let pagePath = DEFAULT_PAGE;
for (const arg of process.argv.slice(2)) {
  if (arg.startsWith('--scope=')) scopeArg = arg.slice('--scope='.length);
  else if (arg.startsWith('--page=')) pagePath = resolve(process.cwd(), arg.slice('--page='.length));
  else if (!arg.startsWith('--')) pagePath = resolve(process.cwd(), arg);
}
const scopes = new Set(scopeArg.split(',').map((s) => s.trim()).filter(Boolean));

// ---------------------------------------------------------------------------
// Static maps
// ---------------------------------------------------------------------------

// Network name / icon alt text (lowercased, matched as a substring) -> centrifugeId.
const NETWORK_IDS = {
  ethereum: '1',
  base: '2',
  arbitrum: '3',
  plume: '4',
  avalanche: '5',
  binance: '6',
  bnb: '6',
  bsc: '6',
  solana: '7',
  stellar: '8',
  hyperevm: '9',
  optimism: '10',
  monad: '11',
  pharos: '12',
};
// Non-EVM networks are not covered by the API address lookups below; skip them.
const NON_EVM_IDS = new Set(['7', '8']);

function networkToId(name) {
  const n = name.trim().toLowerCase();
  for (const [key, id] of Object.entries(NETWORK_IDS)) {
    if (n.includes(key)) return id;
  }
  return null;
}

// Deployments page contract label -> Deployment entity field.
const CONTRACT_FIELDS = {
  Hub: 'hub',
  'Hub Registry': 'hubRegistry',
  Accounting: 'accounting',
  Holdings: 'holdings',
  'Share Class Manager': 'shareClassManager',
  'Hub Handler': 'hubHandler',
  Spoke: 'spoke',
  'Balance Sheet': 'balanceSheet',
  'Token Factory': 'tokenFactory',
  'Vault Registry': 'vaultRegistry',
  'Pool Escrow Factory': 'poolEscrowFactory',
  Gateway: 'gateway',
  'Multi Adapter': 'multiAdapter',
  'Message Processor': 'messageProcessor',
  'Message Dispatcher': 'messageDispatcher',
  'Gas Service': 'gasService',
  'Contract Updater': 'contractUpdater',
  'LayerZero Adapter': 'layerZeroAdapter',
  'Chainlink Adapter': 'chainlinkAdapter',
  'Axelar Adapter': 'axelarAdapter',
  'Wormhole Adapter': 'wormholeAdapter',
  Root: 'root',
  'Protocol Guardian': 'protocolGuardian',
  'Ops Guardian': 'opsGuardian',
  'Token Recoverer': 'tokenRecoverer',
  'Freeze Only Hook': 'freezeOnlyHook',
  'Full Restrictions Hook': 'fullRestrictionsHook',
  'Freely Transferable Hook': 'freelyTransferableHook',
  'Redemption Restrictions Hook': 'redemptionRestrictionsHook',
  'NAV Manager': 'navManager',
  'Simple Price Manager': 'simplePriceManager',
  'On/Offramp Manager Factory': 'onOfframpManagerFactory',
  'Merkle Proof Manager Factory': 'merkleProofManagerFactory',
  'Queue Manager': 'queueManager',
  'Vault Decoder': 'vaultDecoder',
  'Circle Decoder': 'circleDecoder',
  'Identity Valuation': 'identityValuation',
  'Oracle Valuation': 'oracleValuation',
  'Async Vault Factory': 'asyncVaultFactory',
  'Sync Deposit Vault Factory': 'syncDepositVaultFactory',
  'Vault Router': 'vaultRouter',
  'Async Request Manager': 'asyncRequestManager',
  'Sync Manager': 'syncManager',
  'Batch Request Manager': 'batchRequestManager',
  'Refund Escrow Factory': 'refundEscrowFactory',
  'Subsidy Manager': 'subsidyManager',
};

const ADDR = /0x[0-9a-fA-F]{40}/;

// ---------------------------------------------------------------------------
// Findings
// ---------------------------------------------------------------------------
const errors = [];
const warnings = [];
let checked = 0;
const err = (line, msg) => errors.push({ line, msg });
const warn = (line, msg) => warnings.push({ line, msg });

// ---------------------------------------------------------------------------
// API access
// ---------------------------------------------------------------------------
async function gql(query) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) throw new Error(`API request failed: HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(`API returned errors: ${JSON.stringify(json.errors)}`);
  return json.data;
}

async function fetchDeployments() {
  const fields = [...new Set(Object.values(CONTRACT_FIELDS))].join(' ');
  const data = await gql(`{ deployments(limit: 200) { items { centrifugeId ${fields} } } }`);
  const byId = {};
  for (const item of data.deployments.items) {
    const { centrifugeId, ...rest } = item;
    byId[centrifugeId] = rest;
  }
  return byId;
}

// Returns Map<addressLower, Set<centrifugeId>>.
async function fetchAddressIndex(entity, idField) {
  const data = await gql(`{ ${entity}(limit: 1000) { items { ${idField} centrifugeId } pageInfo { hasNextPage } } }`);
  if (data[entity].pageInfo?.hasNextPage) {
    warn(0, `API returned a full page for ${entity}; results may be truncated (pagination not implemented).`);
  }
  const map = new Map();
  for (const item of data[entity].items) {
    const addr = String(item[idField]).toLowerCase();
    if (!map.has(addr)) map.set(addr, new Set());
    map.get(addr).add(String(item.centrifugeId));
  }
  return map;
}

// ---------------------------------------------------------------------------
// Parsing helpers
// ---------------------------------------------------------------------------
function tableCells(line) {
  const trimmed = line.trim();
  if (!trimmed.startsWith('|')) return null;
  return trimmed.slice(1, trimmed.endsWith('|') ? -1 : undefined).split('|').map((c) => c.trim());
}

// Extracts the displayed address (in `backticks` or [brackets]) and the address
// inside the explorer link from a "| ... [`0x..`](https://.../0x..) |" cell.
function extractAddressLink(text) {
  const linkMatch = text.match(/\[([^\]]*)\]\((https?:\/\/[^)]+)\)/);
  if (!linkMatch) return null;
  const display = (linkMatch[1].match(ADDR) || [])[0] || null;
  const link = (linkMatch[2].match(ADDR) || [])[0] || null;
  return { display, link };
}

// ---------------------------------------------------------------------------
// Scope: contracts
// ---------------------------------------------------------------------------
function parseContracts(lines) {
  const rows = [];
  let inSection = false;
  lines.forEach((raw, i) => {
    if (raw.startsWith('## Smart contracts')) inSection = true;
    else if (inSection && raw.startsWith('## ')) inSection = false;
    if (!inSection) return;

    const cells = tableCells(raw);
    if (!cells || cells.length < 3) return;
    const label = cells[0];
    const addrCell = cells[1];
    // A contract row has an address (or "-") in the second column.
    if (!/^`?(0x[0-9a-fA-F]{40}|-)`?$/.test(addrCell)) return;

    const display = (addrCell.match(ADDR) || [])[0] || null;
    const links = [];
    const linkRe = /alt="([^"]+)"[^\]]*?\]\((https?:\/\/[^)]+)\)/g;
    let m;
    while ((m = linkRe.exec(cells[2])) !== null) {
      const addr = (m[2].match(ADDR) || [])[0];
      if (addr) links.push({ network: m[1], id: networkToId(m[1]), addr });
    }
    rows.push({ label, display, links, line: i + 1 });
  });
  return rows;
}

function checkContracts(rows, deployments) {
  for (const row of rows) {
    const field = CONTRACT_FIELDS[row.label];
    if (!field) {
      warn(row.line, `Unknown contract "${row.label}" — no Deployment field mapped, skipping API check.`);
    }
    for (const link of row.links) {
      checked++;
      // Displayed address must match the address it links to.
      if (row.display && row.display.toLowerCase() !== link.addr.toLowerCase()) {
        err(row.line, `${row.label}: displayed ${row.display} but ${link.network} link points to ${link.addr}.`);
      }
      if (!link.id) {
        warn(row.line, `${row.label}: unrecognized network "${link.network}".`);
        continue;
      }
      if (!field) continue;
      const apiAddr = deployments[link.id]?.[field];
      if (apiAddr == null) {
        err(row.line, `${row.label}: page lists it on ${link.network} (cid ${link.id}) but the API has no deployment there.`);
        continue;
      }
      if (apiAddr.toLowerCase() !== link.addr.toLowerCase()) {
        err(row.line, `${row.label} on ${link.network}: page ${link.addr} != API ${apiAddr}.`);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Scope: tokens / vaults
// ---------------------------------------------------------------------------
function parseAssetSection(lines, startHeading, endHeading) {
  const entries = [];
  let inSection = false;
  let symbol = null;
  lines.forEach((raw, i) => {
    if (raw.trim() === startHeading) { inSection = true; return; }
    if (inSection && raw.trim() === endHeading) { inSection = false; return; }
    if (!inSection) return;

    const h = raw.match(/^#{3,4}\s+(.+)$/);
    if (h) { symbol = h[1].trim(); return; }

    const cells = tableCells(raw);
    if (!cells) return;
    const network = cells[0];
    if (!network || /^-+$/.test(network) || /^network$/i.test(network)) return; // separator / header

    const link = extractAddressLink(raw);
    if (!link || !link.display) return; // non-EVM (e.g. Solana/Stellar) or no link
    entries.push({ symbol, network, id: networkToId(network), ...link, line: i + 1 });
  });
  return entries;
}

function checkAssets(entries, index, kind) {
  for (const e of entries) {
    checked++;
    // Displayed address must match the address it links to.
    if (e.display && e.link && e.display.toLowerCase() !== e.link.toLowerCase()) {
      err(e.line, `${kind} ${e.symbol} on ${e.network}: displayed ${e.display} but link points to ${e.link}.`);
    }
    if (e.id && NON_EVM_IDS.has(e.id)) continue; // non-EVM not indexed by these lookups
    const candidates = [...new Set([e.display, e.link].filter(Boolean).map((a) => a.toLowerCase()))];
    for (const addr of candidates) {
      const ids = index.get(addr);
      if (!ids) {
        err(e.line, `${kind} ${e.symbol} on ${e.network}: ${addr} not found in API ${kind} list.`);
      } else if (e.id && !ids.has(e.id)) {
        warn(e.line, `${kind} ${e.symbol}: ${addr} is on cid [${[...ids].join(', ')}], not ${e.network} (cid ${e.id}).`);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  const source = await readFile(pagePath, 'utf8');
  const lines = source.split('\n');

  if (scopes.has('contracts')) {
    const rows = parseContracts(lines);
    if (rows.length === 0) warn(0, 'No contract rows parsed — page structure may have changed.');
    checkContracts(rows, await fetchDeployments());
  }
  if (scopes.has('tokens')) {
    const entries = parseAssetSection(lines, '## Tokens', '## Vaults');
    if (entries.length === 0) warn(0, 'No token rows parsed — page structure may have changed.');
    checkAssets(entries, await fetchAddressIndex('tokenInstances', 'address'), 'token');
  }
  if (scopes.has('vaults')) {
    const entries = parseAssetSection(lines, '## Vaults', ' ');
    if (entries.length === 0) warn(0, 'No vault rows parsed — page structure may have changed.');
    checkAssets(entries, await fetchAddressIndex('vaults', 'id'), 'vault');
  }

  const at = (line) => (line ? `  L${line}` : '  ');
  if (warnings.length) {
    console.log(`\n⚠  ${warnings.length} warning(s):`);
    for (const w of warnings) console.log(`${at(w.line)}  ${w.msg}`);
  }
  if (errors.length) {
    console.error(`\n✖  ${errors.length} error(s) in ${pagePath}:`);
    for (const e of errors) console.error(`${at(e.line)}  ${e.msg}`);
    console.error(`\nChecked ${checked} address entr(ies) for scope: ${[...scopes].join(', ')}.`);
    process.exit(1);
  }
  console.log(`\n✔  ${checked} address entr(ies) verified for scope: ${[...scopes].join(', ')}.`);
}

main().catch((e) => {
  console.error(`verify-deployments: ${e.message}`);
  process.exit(2);
});
