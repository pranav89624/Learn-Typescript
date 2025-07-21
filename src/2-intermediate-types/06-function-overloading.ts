export {};

// 🔁 Function Overloading in TypeScript

// ✅ Basic Example
function greet(name: string): void;
function greet(age: number): void;
function greet(input: string | number): void {
  if (typeof input === "string") {
    console.log(`Hello, ${input}`);
  } else {
    console.log(`You are ${input} years old`);
  }
}

greet("Pranav");
greet(20);


// --------------------------------------------------
// 🧪 Mini Challenges 
// --------------------------------------------------

// 1: mergeValues()
function mergeValues(a: number, b: number): number;
function mergeValues(a: string, b: string): string;
function mergeValues(a: any, b: any): any {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("Both values must be of the same type (either number or string)");
  }
}

console.log(mergeValues(5, 10));          // 15
console.log(mergeValues("Syn", "CodeX"));  // SynCodeX
// console.log(mergeValues(10, "20"));    // ❌ Error



// describeUser()
type UserObject = { name: string; age: number };

function describeUser(name: string): string;
function describeUser(user: UserObject): string;
function describeUser(input: string | UserObject): string {
  if (typeof input === "string") {
    return `User: ${input}`;
  } else {
    return `User: ${input.name}, Age: ${input.age}`;
  }
}

console.log(describeUser("Pranav")); // User: Pranav
console.log(describeUser({ name: "Verma", age: 20 })); // User: Verma, Age: 20
