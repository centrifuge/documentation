const fs = require("fs/promises");
const path = require("path");

/**
 * Recursively gets all files from a directory
 */
async function getFilesRecursively(dir) {
  const items = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    items.map(async (item) => {
      const filePath = path.join(dir, item.name);
      return item.isDirectory() ? getFilesRecursively(filePath) : filePath;
    })
  );
  return files.flat();
}

/**
 * Ensures a directory exists, creating it if necessary
 */
async function ensureDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

/**
 * Cleans generated documentation folders: classes and type-aliases
 */
async function cleanGeneratedDocs(targetDir) {
  const foldersToClean = ["classes", "type-aliases"];
  for (const folder of foldersToClean) {
    const folderPath = path.join(targetDir, folder);
    try {
      await fs.rm(folderPath, { recursive: true, force: true });
      console.log(`✨ Cleared existing ${folder} folder`);
    } catch (error) {
      if (error.code !== "ENOENT") {
        console.error(`❌ Error clearing ${folder} folder:`, error);
      }
    }
  }
}

/**
 * Copies documentation files while maintaining structure
 */
async function copyDocs(sourceDir, targetDir) {
  try {
    await ensureDir(targetDir);
    await cleanGeneratedDocs(targetDir);

    const docFiles = await getFilesRecursively(sourceDir);
    for (const file of docFiles) {
      const relativePath = path.relative(sourceDir, file);
      const fileName = path.basename(file);

      // Skip specific files
      if (
        fileName === "README.md" ||
        fileName === "_globals.md" ||
        fileName === "_README.md"
      )
        continue;

      // Sanitize path for type-aliases and classes folders
      const sanitizedPath = relativePath.replace(/\/_/g, "/").replace(/^_/, "");

      const targetPath = path.join(targetDir, sanitizedPath);
      await ensureDir(path.dirname(targetPath));
      await fs.copyFile(file, targetPath);
      console.log(`📄 Copied: ${sanitizedPath}`);
    }
  } catch (error) {
    console.error("❌ Error copying docs:", error);
    throw error;
  }
}

/**
 * Creates _category_.yml files in each directory with proper formatting
 */
async function createCategoryFiles(targetDir) {
  try {
    const directories = await fs.readdir(targetDir, { withFileTypes: true });

    for (const dirent of directories) {
      if (dirent.isDirectory()) {
        const dirPath = path.join(targetDir, dirent.name);

        // Format the directory name
        const label = dirent.name
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        const categoryContent = `label: ${label}\n`;
        await fs.writeFile(
          path.join(dirPath, "_category_.yml"),
          categoryContent
        );

        // Recursively process subdirectories
        await createCategoryFiles(dirPath);
      }
    }
  } catch (error) {
    console.error("❌ Error creating category files:", error);
    throw error;
  }
}

async function main() {
  try {
    // Copy and process the generated docs
    await copyDocs("./sdk-docs", "./docs/developer/centrifuge-sdk/reference");
    await createCategoryFiles("./docs/developer/centrifuge-sdk/reference");
    console.log("✅ Successfully processed documentation");
  } catch (error) {
    console.error("❌ Failed to process docs:", error);
    process.exit(1);
  }
}

main();
