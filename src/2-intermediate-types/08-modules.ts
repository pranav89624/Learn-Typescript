// --------------------------------------------------
// 📦 Modules in TypeScript
// --------------------------------------------------

// 📌 NOTE:
// In real projects, these modules should be in SEPARATE FILES (e.g., math.ts, user.ts, main.ts).
// Here, they are grouped in ONE file for easier learning, demo, and revision in a single glance.
// 👉 When you practice, split them into separate files and use proper `import/export` statements.

// --------------------------------------------------
// 🧮 math.ts module (simulated)
// --------------------------------------------------

export const PI = 3.14159;

export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

// --------------------------------------------------
// 👤 user.ts module (simulated)
// --------------------------------------------------

export interface User {
  name: string;
  age: number;
}

export function describeUser(user: User): string {
  return `User: ${user.name}, Age: ${user.age}`;
}

// --------------------------------------------------
// 🚀 main.ts consumer file (simulated)
// --------------------------------------------------

// import { PI, add, multiply } from "./01-modules"; // This would normally be './math'
// import { User, describeUser } from "./01-modules"; // This would normally be './user'

console.log("PI:", PI);
console.log("Add(5, 10):", add(5, 10));
console.log("Multiply(5, 10):", multiply(5, 10));

const user1: User = {
  name: "Pranav",
  age: 21,
};

console.log(describeUser(user1));
