// 1. Basic Literal Type Example
let direction: "left" | "right" | "center";

direction = "left";   // ✅
direction = "center"; // ✅
// direction = "top"; // ❌ Error: not assignable

console.log("Direction:", direction);


// 2. Literal Types via Type Alias
type ButtonSize = "sm" | "md" | "lg";

function createButton(size: ButtonSize): void {
  console.log(`Rendering a ${size.toUpperCase()} button`);
}

createButton("sm");
createButton("lg");
// createButton("xl"); // ❌ Invalid value


// 3. Narrowing Literal Types
type Status = "success" | "error" | "loading";

function literalShowStatus(state: Status): void {
  if (state === "success") {
    console.log("✅ Operation successful");
  } else if (state === "error") {
    console.log("❌ Operation failed");
  } else {
    console.log("⏳ Operation pending...");
  }
}

literalShowStatus("loading");


// 4. Literal Types with Numbers and Booleans
type ZeroOrOne = 0 | 1;
type Flag = true | false;

let toggle: Flag = true;
let binaryLiteral: ZeroOrOne = 1;

// toggle = "true";  // ❌ Invalid
// binaryLiteral = 2;       // ❌ Invalid

console.log("Flag:", toggle, "| Binary:", binaryLiteral);


// 5. Literal Type Inference Gotchas
const role = "admin"; // inferred as "admin" (const ✅)
let role2 = "admin";  // inferred as string (non-const ❌ for literals)

const fixedRole = "admin" as const;

let declaredRole: "admin" = "admin"; // ✅ Forced literal

console.log("Fixed Role:", fixedRole, "| Declared Role:", declaredRole);


// ---------------------------------------------
// ✅ Mini Challenges
// ---------------------------------------------

// 1. Theme Type
type ThemeLiteral = "light" | "dark" | "system";

function setTheme(theme: ThemeLiteral): void {
  console.log(`Applying ${theme} theme`);
}

setTheme("dark");

// 2. Mode Setter
function setMode(mode: "auto" | "manual"): void {
  console.log(`System is now in ${mode.toUpperCase()} mode`);
}

setMode("auto");

// 3. Direction Validator
type DirectionLiteral = "up" | "down" | "left" | "right";

function moveLiteral(direction: DirectionLiteral): void {
  console.log(`Moving ${direction}`);
}

moveLiteral("up");
moveLiteral("right");
// move("forward"); // ❌ Not allowed

// 4. HTTP Method Restrictor
type HttpMethod = "GET" | "POST";

function handleRequest(method: HttpMethod): void {
  if (method === "GET") {
    console.log("📥 Fetching data...");
  } else {
    console.log("📤 Sending data...");
  }
}

handleRequest("POST");
