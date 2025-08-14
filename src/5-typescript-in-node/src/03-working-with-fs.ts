import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Recreate __dirname and __filename in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const dataDir = path.join(__dirname, "data");
const filePath = path.join(dataDir, "hello.txt");

async function runFileSystemDemo() {
  try {
    // 1. Create directory
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
      console.log("📂 Created folder:", dataDir);
    }

    // 2. Write file (async promises API)
    await fs.promises.writeFile(filePath, "Hello, TypeScript + Node FS!\n", {
      encoding: "utf-8",
    });
    console.log("📝 File written:", filePath);

    // 3. Append to file
    await fs.promises.appendFile(filePath, "This is an appended line.\n", {
      encoding: "utf-8",
    });
    console.log("➕ Appended to file.");

    // 4. Read file
    const content = await fs.promises.readFile(filePath, { encoding: "utf-8" });
    console.log("📖 File content:\n" + content);

    // 5. Delete file
    await fs.promises.unlink(filePath);
    console.log("🗑️ File deleted.");

    // 6. Remove directory
    await fs.promises.rm(dataDir, { recursive: true, force: true });
    console.log("🗑️ Folder deleted.");
  } catch (err) {
    console.error("❌ FS operation failed:", err);
  }
}

runFileSystemDemo();
