#!/usr/bin/env node
// Flag links whose URL scheme is malformed — e.g. a typo like `ttps://` instead
// of `https://`. External link checkers (lychee) treat such schemes as
// "unsupported" and skip them, so they slip through unnoticed. This guard scans
// the docs for markdown link targets and HTML href/src values and fails on any
// scheme outside a small allowlist.
//
// Usage: node scripts/check-link-schemes.mjs [dir ...]   (default: docs)

import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, relative } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const roots = process.argv.slice(2).length
  ? process.argv.slice(2).map((d) => resolve(process.cwd(), d))
  : [resolve(ROOT, 'docs')];

const ALLOWED_SCHEMES = new Set(['https', 'http', 'mailto', 'tel']);
const EXTENSIONS = new Set(['.md', '.mdx']);

// Any "scheme://" prefix. A valid URI scheme is letter followed by letters,
// digits, +, -, or . (RFC 3986).
const SCHEME = /^([a-zA-Z][a-zA-Z0-9+.-]*):\/\//;
// Markdown link target: ](  target ) — allow an optional <...> wrapper.
const MD_LINK = /\]\(\s*<?([^)\s>]+)/g;
// HTML attribute: href="..." or src="..."
const HTML_ATTR = /\b(?:href|src)\s*=\s*"([^"]+)"/g;

async function* walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    const p = resolve(dir, e.name);
    if (relative(dir, p).startsWith('..')) continue; // never escape the scanned dir
    if (e.isDirectory()) yield* walk(p);
    else if (EXTENSIONS.has(p.slice(p.lastIndexOf('.')))) yield p;
  }
}

function lineOf(text, index) {
  return text.slice(0, index).split('\n').length;
}

const errors = [];
let scanned = 0;

for (const root of roots) {
  for await (const file of walk(root)) {
    scanned++;
    const text = await readFile(file, 'utf8');
    for (const re of [MD_LINK, HTML_ATTR]) {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(text)) !== null) {
        const target = m[1];
        const scheme = target.match(SCHEME)?.[1];
        if (scheme && !ALLOWED_SCHEMES.has(scheme.toLowerCase())) {
          errors.push({
            file: relative(process.cwd(), file),
            line: lineOf(text, m.index),
            target,
            scheme,
          });
        }
      }
    }
  }
}

if (errors.length) {
  console.error(`\n✖  ${errors.length} malformed link scheme(s):`);
  for (const e of errors) {
    console.error(`  ${e.file}:${e.line}  "${e.scheme}://" — ${e.target}`);
  }
  console.error(`\nAllowed schemes: ${[...ALLOWED_SCHEMES].join(', ')}. Did you mean "https"?`);
  process.exit(1);
}

console.log(`✔  no malformed link schemes in ${scanned} file(s).`);
