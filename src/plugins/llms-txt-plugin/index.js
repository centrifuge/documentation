const fs = require("fs");
const path = require("path");

function assertWithinBase(resolvedPath, baseDir) {
  const normalizedBase = path.resolve(baseDir) + path.sep;
  const normalizedPath = path.resolve(resolvedPath);
  if (
    !normalizedPath.startsWith(normalizedBase) &&
    normalizedPath !== path.resolve(baseDir)
  ) {
    throw new Error(
      `Path traversal detected: ${resolvedPath} is outside ${baseDir}`
    );
  }
}

function findMarkdownFiles(dir, fileList = [], baseDir = dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    assertWithinBase(filePath, baseDir);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findMarkdownFiles(filePath, fileList, baseDir);
    } else if (file.endsWith(".md") || file.endsWith(".mdx")) {
      fileList.push(path.relative(baseDir, filePath));
    }
  });
  return fileList;
}

function extractTitle(content) {
  // Try frontmatter title first
  const fmMatch = content.match(/^---\r?\n[\s\S]*?\r?\n---/);
  if (fmMatch) {
    const titleMatch = fmMatch[0].match(/^title:\s*["']?(.+?)["']?\s*$/m);
    if (titleMatch) return titleMatch[1];
  }
  // Fall back to first heading
  const headingMatch = content.match(/^#\s+(.+)$/m);
  if (headingMatch) return headingMatch[1];
  return null;
}

function cleanMarkdown(content) {
  // Strip YAML front matter
  content = content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
  // Remove import statements
  content = content.replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, "");
  // Remove <Head> components
  content = content.replace(/<Head>[\s\S]*?<\/Head>/g, "");
  // Remove custom React/MDX components (self-closing and paired)
  content = content.replace(
    /<[A-Z][a-zA-Z]*[\s\S]*?(?:\/>|<\/[A-Z][a-zA-Z]*>)/g,
    ""
  );
  // Remove HTML tags
  content = content.replace(/<[^>]+>/g, "");
  // Collapse multiple blank lines
  content = content.replace(/\n{3,}/g, "\n\n");
  // Remove leading blank lines
  content = content.replace(/^\s*\n/, "");
  return content;
}

function fileToUrlPath(filePath) {
  return filePath
    .replace(/\/index\.(md|mdx)$/, "")
    .replace(/\.(md|mdx)$/, "");
}

module.exports = function llmsTxtPlugin(context) {
  const siteUrl = context.siteConfig.url;

  return {
    name: "llms-txt-plugin",

    async postBuild({ outDir }) {
      const docsDir = path.join(context.siteDir, "docs");
      const mdFiles = findMarkdownFiles(docsDir);

      // Build page index and full content
      const pages = [];
      const fullParts = [];

      for (const mdFile of mdFiles) {
        const sourcePath = path.join(docsDir, mdFile);
        assertWithinBase(sourcePath, docsDir);
        const content = fs.readFileSync(sourcePath, "utf8");
        const title = extractTitle(content);
        const urlPath = fileToUrlPath(mdFile);
        const url = `${siteUrl}/${urlPath}`;
        const cleaned = cleanMarkdown(content);

        if (title) {
          pages.push({ title, url, urlPath });
        }

        fullParts.push(`# ${title || urlPath}\n\nSource: ${url}\n\n${cleaned}`);
      }

      // Sort pages by URL path for consistent ordering
      pages.sort((a, b) => a.urlPath.localeCompare(b.urlPath));

      // Group pages by top-level section
      const sections = {
        "getting-started": { label: "Getting Started", pages: [] },
        user: { label: "User Documentation", pages: [] },
        developer: { label: "Developer Documentation", pages: [] },
      };
      for (const p of pages) {
        const section = p.urlPath.split("/")[0];
        if (sections[section]) {
          sections[section].pages.push(p);
        }
      }

      // Generate llms.txt with overview
      const overview = `# Centrifuge Documentation

> Centrifuge is institutional-grade infrastructure for onchain asset management. It enables asset managers,
> fintechs, and DeFi protocols to tokenize, manage, and distribute real-world assets on-chain.

## Overview

Centrifuge is one of the first and largest tokenization platforms, with more than $2B in real-world assets
tokenized. It powers onchain strategies for institutions including Apollo, Janus Henderson, and S&P Dow Jones
Indices, with tokenized assets integrating into DeFi through Sky, Aave, and Morpho.

## Architecture

Hub-and-spoke design. Each pool selects a single hub chain as its source of truth, then issues tokens and
vaults across any number of spoke chains.

- **Hub:** Central orchestration layer handling pool management, double-entry accounting, holdings tracking,
  share class management, and cross-chain message coordination.
- **Spoke:** Local registry on each chain managing token instances, vaults, escrows, and balance sheets.
  Factory-based deployment of tokens, vaults, and escrows.
- **Cross-chain messaging:** Multi-adapter aggregation (LayerZero, Wormhole, Chainlink, Axelar) with
  automatic batching, gas subsidies, and built-in retries.

## Vault Standards

- **Asynchronous vaults (ERC-7540):** Request-based deposits and redemptions processed through the Hub.
- **Synchronous deposit vaults (ERC-4626 + ERC-7540):** Instant deposits via ERC-4626, async redemptions.
- **Pooled vaults (ERC-7575):** Multiple investment assets per share token, single aggregated balance sheet.

## Developer Tools

### Centrifuge SDK
TypeScript/JavaScript client (\`@centrifuge/sdk\`) for investments, redemptions, reports, and pool management.
Runs client-side and server-side. Supports full investment lifecycle: quote, deposit, claim, and reporting.

### Centrifuge API
Public read-only GraphQL endpoint at \`https://api.centrifuge.io\`. Indexed data from the multi-chain protocol
deployment. No authentication required. Entities include pools, tokens, vaults, holdings, investor transactions,
snapshots, and cross-chain messages.

## Deployments

Protocol v3.1.0 deployed on 9 chains: Ethereum, Base, Arbitrum, Avalanche, Plume, Binance Smart Chain,
Optimism, HyperEVM, and Monad. Core contracts deployed at identical addresses across all chains. 21+ audits
and 4 independent security reviews.

## User Roles

- **Issuer:** Tokenize real-world assets using configurable onchain vaults.
- **Curator:** Structure and manage pools, set investment logic, configure vault permissions.
- **Investor:** Invest in tokenized assets across networks with access controls and redemption flows.

## Resources

- **Documentation:** https://docs.centrifuge.io
- **SDK:** https://www.npmjs.com/package/@centrifuge/sdk
- **API:** https://api.centrifuge.io
- **Protocol source:** https://github.com/centrifuge/protocol`;

      const sectionLines = [];
      for (const [, sec] of Object.entries(sections)) {
        if (sec.pages.length === 0) continue;
        sectionLines.push("", `## ${sec.label}`, "");
        for (const p of sec.pages) {
          sectionLines.push(`- [${p.title}](${p.url})`);
        }
      }

      const llmsTxt = [overview, ...sectionLines, ""].join("\n");

      // Generate llms-full.txt
      const llmsFullTxt = [
        overview,
        "",
        "---",
        "",
        ...fullParts.join("\n\n---\n\n").split("\n"),
        "",
      ].join("\n");

      fs.writeFileSync(path.join(outDir, "llms.txt"), llmsTxt, "utf8");
      fs.writeFileSync(path.join(outDir, "llms-full.txt"), llmsFullTxt, "utf8");

      console.log(
        `[llms-txt] Generated llms.txt (${pages.length} pages) and llms-full.txt`
      );
    },
  };
};
