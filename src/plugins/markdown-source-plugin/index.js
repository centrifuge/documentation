const fs = require("fs");
const path = require("path");

function findMarkdownFiles(dir, fileList = [], baseDir = dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findMarkdownFiles(filePath, fileList, baseDir);
    } else if (file.endsWith(".md") || file.endsWith(".mdx")) {
      fileList.push(path.relative(baseDir, filePath));
    }
  });
  return fileList;
}

function mkdirp(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function cleanMarkdownForDisplay(content, filepath) {
  const fileDir = filepath.replace(/[^/]*$/, "");

  // Strip YAML front matter
  content = content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");

  // Remove import statements
  content = content.replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, "");

  // Convert HTML images to markdown
  content = content.replace(
    /<p align="center">\s*\n?\s*<img src=\{require\(['"]([^'"]+)['"]\)\.default\} alt="([^"]*)"(?:\s+width="[^"]*")?\s*\/>\s*\n?\s*<\/p>/g,
    (match, imagePath, alt) => {
      const cleanPath = imagePath.replace("@site/static/", "/");
      return `![${alt}](${cleanPath})`;
    }
  );

  // Convert YouTube iframes to text links
  content = content.replace(
    /<iframe[^>]*src="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]+)[^"]*"[^>]*title="([^"]*)"[^>]*>[\s\S]*?<\/iframe>/g,
    "Watch the video: [$2](https://www.youtube.com/watch?v=$1)"
  );

  // Remove <Head> components
  content = content.replace(/<Head>[\s\S]*?<\/Head>/g, "");

  // Remove custom React/MDX components (self-closing and paired)
  content = content.replace(
    /<[A-Z][a-zA-Z]*[\s\S]*?(?:\/>|<\/[A-Z][a-zA-Z]*>)/g,
    ""
  );

  // Convert relative image paths
  content = content.replace(
    /!\[([^\]]*)\]\((\.\/)?img\/([^)]+)\)/g,
    (match, alt, relPrefix, filename) => {
      return `![${alt}](/docs/${fileDir}img/${filename})`;
    }
  );

  // Remove leading blank lines
  content = content.replace(/^\s*\n/, "");

  return content;
}

function copyDirRecursive(src, dest) {
  mkdirp(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyImageDirectories(docsDir, buildDir) {
  const imageDirs = [];

  function findImgDirs(dir, baseDir = dir) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        if (file === "img") {
          imageDirs.push({
            source: filePath,
            relativePath: path.relative(baseDir, dir),
          });
        } else {
          findImgDirs(filePath, baseDir);
        }
      }
    });
  }

  findImgDirs(docsDir);

  let copiedCount = 0;
  for (const { source, relativePath } of imageDirs) {
    const destination = path.join(buildDir, relativePath, "img");
    try {
      copyDirRecursive(source, destination);
      copiedCount++;
    } catch (error) {
      console.error(`  Failed to copy ${relativePath}/img/:`, error.message);
    }
  }
  return copiedCount;
}

module.exports = function markdownSourcePlugin(context) {
  return {
    name: "markdown-source-plugin",

    async postBuild({ outDir }) {
      const docsDir = path.join(context.siteDir, "docs");

      console.log("[markdown-source] Copying markdown source files...");
      const mdFiles = findMarkdownFiles(docsDir);

      let copiedCount = 0;
      for (const mdFile of mdFiles) {
        const sourcePath = path.join(docsDir, mdFile);
        // Always output as .md regardless of source extension
        let destFile = mdFile.replace(/\.mdx$/, ".md");
        // Convert dir/index.md to dir.md for cleaner URLs
        destFile = destFile.replace(/\/index\.md$/, ".md");
        const destPath = path.join(outDir, destFile);

        try {
          mkdirp(path.dirname(destPath));
          const content = fs.readFileSync(sourcePath, "utf8");
          const cleaned = cleanMarkdownForDisplay(content, mdFile);
          fs.writeFileSync(destPath, cleaned, "utf8");
          copiedCount++;
        } catch (error) {
          console.error(`  Failed to process ${mdFile}:`, error.message);
        }
      }

      console.log(
        `[markdown-source] Processed ${copiedCount} markdown files`
      );

      console.log("[markdown-source] Copying image directories...");
      const imgCount = copyImageDirectories(docsDir, outDir);
      console.log(`[markdown-source] Copied ${imgCount} image directories`);
    },
  };
};
