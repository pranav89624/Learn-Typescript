// 1. string
let fullName: string = "Pranav Verma";
// fullName = 42; // ❌ Error: Type 'number' is not assignable to type 'string'

// Template literals
let greeting: string = `Hello, ${fullName}`;
console.log(greeting);


// 2. number
let age: number = 21;
let score: number = 98.6;
let hex: number = 0xff;
let binary: number = 0b1010;

console.log(age, score, hex, binary);


// 3. boolean
let isLoggedIned: boolean = true;
let isAdmin: boolean = false;

// Conditional logic
if (isLoggedIned && !isAdmin) {
  console.log("Welcome user!");
}


// 4. null and undefined
let city: null = null;
let email: undefined = undefined;

console.log("City:", city, "| Email:", email);


// 5. any
let randomValue: any = "Hello";
randomValue = 100;
randomValue = false;
randomValue = { id: 1 };

console.log("Random:", randomValue); // 👎 Avoid in production


// 6. unknown
let userInput: unknown = "TypeScript is great!";

if (typeof userInput === "string") {
  console.log(userInput.toUpperCase()); // ✅ Safe to use after type check
}

// userInput.toUpperCase(); // ❌ Error: Object is of type 'unknown'


// 7. void
function logMessageTS(message: string): void {
  console.log("Log:", message);
}

logMessageTS("Hello from TS!");

// let result: void = logMessage("test"); // ✅ Allowed, but not useful


// 8. never
function throwError(message: string): never {
  throw new Error(message);
}

// throwError("This function never returns!");

// Example of exhaustive checking (more useful with unions)
function fail(message: string): never {
  throw new Error(message);
}


// ---------------------------------------------
// ✅ Mini Challenges
// ---------------------------------------------

// 1. Variable with string or number
let id: string | number = 101;
id = "user_2025";

// 2. Never function
function fatalError(): never {
  throw new Error("Unrecoverable system failure");
}

// 3. Void function
function showAlert(): void {
  alert("Action required");
}
