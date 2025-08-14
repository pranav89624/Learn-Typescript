import path from "path";
import { fileURLToPath } from "url";
import os from "os";
import crypto from "crypto";
import { EventEmitter } from "events";

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- path module ---
console.log("📍 Path Examples:");
console.log("Joined path:", path.join(__dirname, "folder", "file.txt"));
console.log("Resolved path:", path.resolve("folder", "file.txt"));
console.log("Base name:", path.basename(__filename));
console.log("Extension:", path.extname(__filename));
console.log("");

// --- os module ---
console.log("💻 OS Info:");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("Free Memory (MB):", Math.round(os.freemem() / 1024 / 1024));
console.log("Total Memory (MB):", Math.round(os.totalmem() / 1024 / 1024));
console.log("");

// --- crypto module ---
console.log("🔐 Crypto Example:");
const randomId = crypto.randomUUID();
console.log("Random UUID:", randomId);

const hash = crypto.createHash("sha256").update("Hello World").digest("hex");
console.log("SHA-256 Hash:", hash);
console.log("");

// --- events module ---
console.log("📢 Events Example:");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on("greet", (name: string) => {
  console.log(`Hello, ${name}!`);
});

myEmitter.emit("greet", "TypeScript Dev");
