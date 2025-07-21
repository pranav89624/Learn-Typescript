export {};

// ✅ The `satisfies` operator in TypeScript

// Basic usage with Record<string, string>
const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
} satisfies Record<string, string>;

// colors.red = 123; // ❌ Error: Type 'number' is not assignable to type 'string'
// But colors.red type remains "#ff0000" (literal) instead of just string
console.log(colors.red); // "#ff0000"

// --------------------------------------------------
// Mini Challenges 
// --------------------------------------------------

// 1: statusCodes with number values
const statusCodes = {
  OK: 200,
  NotFound: 404,
  InternalError: 500,
} satisfies Record<string, number>;

// statusCodes.OK = "200"; // ❌ Error: Type 'string' is not assignable to type 'number'
console.log(statusCodes.InternalError); // 500

// 2: Typed config object satisfying an interface
interface AppConfig {
  env: "dev" | "prod" | "test";
  debug: boolean;
  version: string;
}

const config = {
  env: "dev",
  debug: true,
  version: "1.0.0",
} satisfies AppConfig;

// config.env = "staging"; // ❌ Error: Type '"staging"' is not assignable to '"dev" | "prod" | "test"'
console.log(config.version);

// --------------------------------------------------
// Why use `satisfies` over `:` or `as`?

// 1. Keeps literal types, enabling better autocomplete and safety
// 2. Validates the object fully against the type, catching errors early
// 3. Unlike ':' annotation, it doesn't widen types unnecessarily

// --------------------------------------------------

