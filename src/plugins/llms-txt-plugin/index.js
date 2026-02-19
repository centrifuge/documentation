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

      // Generate llms.txt
      const llmsTxt = [
        "# Centrifuge Documentation",
        "",
        "> Documentation for the Centrifuge protocol, a platform for tokenizing and financing real-world assets on-chain.",
        "",
        ...pages.map((p) => `- [${p.title}](${p.url})`),
        "",
      ].join("\n");

      // Generate llms-full.txt
      const llmsFullTxt = [
        "# Centrifuge Documentation",
        "",
        "> Documentation for the Centrifuge protocol, a platform for tokenizing and financing real-world assets on-chain.",
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
