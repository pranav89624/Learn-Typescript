// Named exports
export const PI: number = 3.14159;

export function add(a: number, b: number): number {
  return a + b;
}

export function square(n: number): number {
  return n * n;
}

// Default export
export default function greet(name: string): string {
  return `Hello, ${name}!`;
}

// --------------------------------------------------------
// Importing Node.js core modules in ESM
// --------------------------------------------------------
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Re-creating __dirname and __filename in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Writing and reading a small text file (demo)
const filePath = path.join(__dirname, "esm-demo.txt");

// Write a file
fs.writeFileSync(filePath, "This file was created using ESM in Node.js + TS!", "utf-8");

// Read and log the file
const fileContents = fs.readFileSync(filePath, "utf-8");
console.log("📄 File Contents:", fileContents);

// --------------------------------------------------------
// Using the exports in the same file (for demo purposes only)
// In real projects, these would be in separate files.
// --------------------------------------------------------
console.log("PI value:", PI);
console.log("Square of 5:", square(5));
console.log("Addition (10 + 20):", add(10, 20));
console.log(greet("TypeScript Developer"));
