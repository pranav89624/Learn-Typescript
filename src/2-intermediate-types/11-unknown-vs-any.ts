export {};

// ⚔️ unknown vs any in TypeScript

// 'any' disables all type checking — dangerous but flexible
let valAny: any = 5;
valAny = "hello";
// valAny.foo.bar(); // No compile error, but runtime error likely!

// 'unknown' accepts any value but restricts usage until type is checked
let valUnknown: unknown = 5;
valUnknown = "world";

// valUnknown.foo.bar(); // ❌ Error: Object is of type 'unknown'.

// Narrowing required to safely use 'unknown'
if (typeof valUnknown === "string") {
  console.log(valUnknown.toUpperCase()); // Safe
} else {
  console.log("valUnknown is not a string");
}

// --------------------------------------------------
// 🧪 Mini Challenges 
// --------------------------------------------------

// 1: printLength function
function printLength(value: unknown): void {
  if (typeof value === "string" || Array.isArray(value)) {
    console.log("Length is:", value.length);
  } else {
    console.log("No length property");
  }
}

printLength("Hello"); // Length is: 5
printLength([1, 2, 3]); // Length is: 3
printLength(123); // No length property

// 2: any vs unknown method calls
let someAny: any = 42;
let someUnknown: unknown = 42;

console.log(someAny.toFixed(2)); // Allowed at compile time (risky)
  
// console.log(someUnknown.toFixed(2)); // ❌ Compile error

// Narrowing required:
if (typeof someUnknown === "number") {
  console.log(someUnknown.toFixed(2)); // Safe usage
}

// --------------------------------------------------
// 📝 Summary:

// Use 'unknown' when you want to accept any value but enforce type safety before usage.
// Avoid 'any' except for gradual typing or third-party integration where you have no control.
