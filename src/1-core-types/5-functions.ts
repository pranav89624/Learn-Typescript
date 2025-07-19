// 1. Typing Function Parameters & Return Values
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(5, 10);
console.log("Sum:", sum);


// 2. Void Function (No Return Value)
function logMessage(msg: string): void {
  console.log("LOG:", msg);
}

logMessage("TypeScript is awesome!");


// 3. Optional & Default Parameters
function greetUser(name?: string): string {
  return `Hi, ${name ?? "Anonymous"}`;
}

console.log(greetUser());
console.log(greetUser("Pranav"));

function greet(name: string = "Guest"): string {
  return `Hello, ${name}`;
}

console.log(greet());
console.log(greet("Aman"));


// 4. Function Type Alias
type MathOperation = (x: number, y: number) => number;

const multiply: MathOperation = (a, b) => a * b;
const subtract: MathOperation = (a, b) => a - b;

console.log("Multiply:", multiply(4, 5));
console.log("Subtract:", subtract(10, 3));


// 5. Function Expressions vs Declarations
// Declaration
function divide(a: number, b: number): number {
  return a / b;
}

console.log("Divide:", divide(20, 4));

// Expression (already shown above with `subtract`)


// 6. never, undefined (Return Types)
function crash(): never {
  throw new Error("Critical failure");
}

// crash(); // ❌ Uncommenting will crash runtime intentionally

function returnUndef(): undefined {
  return undefined;
}

console.log("Undefined return:", returnUndef());


// 7. Functions as Parameters (Callbacks)
function handleSuccess(callback: () => void) {
  console.log("Before callback");
  callback();
  console.log("After callback");
}

handleSuccess(() => {
  console.log("✅ Operation successful!");
});

function operate(
  x: number,
  y: number,
  cb: (a: number, b: number) => number
): number {
  return cb(x, y);
}

console.log("Operate (add):", operate(4, 6, (a, b) => a + b));


// ---------------------------------------------
// ✅ Mini Challenges
// ---------------------------------------------

// 1. Full name function
function getFullName(first: string, last: string): string {
  return `${first} ${last}`;
}
console.log("Full Name:", getFullName("Pranav", "Verma"));

// 2. Warning logger (void)
function warn(msg: string): void {
  console.warn("⚠️ Warning:", msg);
}
warn("Low disk space");

// 3. Type alias for math op already shown above with multiply

// 4. Function accepting a callback
function doAfter(cb: () => void): void {
  cb();
  console.log("✅ Done");
}
doAfter(() => console.log("Running callback..."));
