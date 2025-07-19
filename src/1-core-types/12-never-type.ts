// ✅ 1. Function that throws → returns never
function throwErrorNeverType(message: string): never {
  throw new Error(message);
}

// throwError("Something went wrong!");


// ✅ 2. Function with infinite loop → returns never
function infiniteLoop(): never {
  while (true) {
    // doing something forever
  }
}

// infiniteLoop(); // ⚠️ Warning: infinite execution


// ✅ 3. Exhaustiveness Check with Union Type
type NeverStatus = "loading" | "success" | "error";

function handleStatus(status: NeverStatus) {
  switch (status) {
    case "loading":
      console.log("🔄 Loading...");
      break;
    case "success":
      console.log("✅ Success!");
      break;
    case "error":
      console.log("❌ Error!");
      break;
    default:
      const _exhaustive: never = status; // 💡 Type-safe exhaustive check
      return _exhaustive;
  }
}

// Try changing to: handleStatus("cancelled"); // ❌ Error: not assignable

handleStatus("loading");
handleStatus("error");


// ⚠️ 4. Incorrect use of `never`
// let value: never = 123; // ❌ Error: 123 is not assignable to type 'never'


// ---------------------------------------------
// 🧪 Mini Challenges
// ---------------------------------------------

// 1. Throwing function
function panic(): never {
  throw new Error("💥 Panic mode activated");
}

// panic();

// 2. Switch exhaustiveness
type NeverDirection = "up" | "down" | "left" | "right";

function Nevermove(dir: NeverDirection) {
  switch (dir) {
    case "up":
      console.log("⬆️ Moving up");
      break;
    case "down":
      console.log("⬇️ Moving down");
      break;
    case "left":
      console.log("⬅️ Moving left");
      break;
    case "right":
      console.log("➡️ Moving right");
      break;
    default:
      const _check: never = dir;
      return _check;
  }
}

Nevermove("left");

// 3. Unexpected `never` example
function process(val: string | number) {
  if (typeof val === "string") {
    console.log("String:", val.toUpperCase());
  } else if (typeof val === "number") {
    console.log("Number:", val.toFixed(2));
  } else {
    const unreachable: never = val;
    return unreachable;
  }
}

process("TS");
process(3.1415);
