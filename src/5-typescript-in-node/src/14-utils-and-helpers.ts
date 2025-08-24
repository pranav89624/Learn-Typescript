// Utility 1: Generate a random ID
// ---------------------------------
export function generateId(prefix: string = "id"): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}

// Utility 2: Sleep (simulate async delay)
// ---------------------------------
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Utility 3: Capitalize a string
// ---------------------------------
export function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Utility 4: Clamp a number between min & max
// ---------------------------------
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// Utility 5: Safe JSON Parse
// ---------------------------------
export function safeJsonParse<T>(input: string): T | null {
  try {
    return JSON.parse(input) as T;
  } catch {
    return null; // If parsing fails, return null instead of crashing
  }
}

// Demo Usage
async function demoUtils() {
  console.log("🔹 Generated ID:", generateId("user"));
  console.log("🔹 Capitalize:", capitalize("typescript"));
  console.log("🔹 Clamp(15, 0, 10):", clamp(15, 0, 10));
  console.log("🔹 Safe JSON Parse:", safeJsonParse<{ name: string }>('{"name":"Pranav"}'));
  console.log("🔹 Safe JSON Parse (bad input):", safeJsonParse("not-json"));

  console.log("⏳ Sleeping for 1 second...");
  await sleep(1000);
  console.log("✅ Woke up after 1s");
}

demoUtils();