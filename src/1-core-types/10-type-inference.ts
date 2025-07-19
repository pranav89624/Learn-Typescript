// ✅ Basic Inference
let inferenceMessage = "Hello, world!"; // inferred as string
let count = 42;                // inferred as number
let inferenceIsAdmin = true;            // inferred as boolean

console.log(inferenceMessage.toUpperCase());
console.log(count + 10);
console.log("Is Admin?", inferenceIsAdmin);


// 🚫 Parameters Need Explicit Typing
// function square(x) {
//   return x * x;
// } // ❌ Implicit 'any' if `noImplicitAny` is enabled

function square(x: number): number {
  return x * x;
}

console.log("Square of 5:", square(5));


// 🔄 Inferred Return Types
function inferencegreet(name: string) {
  return `Hello, ${name}`;
} // return type inferred as string

const inferenceGreeting = inferencegreet("Pranav");
console.log(inferenceGreeting);


// 🔢 Array Inference
const ids = [101, 102, 103]; // number[]
const mixed = [1, "two", true]; // (number | string | boolean)[]

console.log("IDs:", ids);
console.log("Mixed Array:", mixed);


// 📦 Object Inference
const inferenceUser = {
  name: "Pranav",
  age: 21,
  isAdmin: false,
}; // inferred object shape

console.log(`${inferenceUser.name} is ${inferenceUser.age} years old.`);


// 🧠 Contextual Typing (Callback Inference)
// this only works in a browser environment not in Node.js
// Uncomment to run in a browser context
// document.addEventListener("keydown", (event) => {
//   console.log("Key pressed:", event.key); // event is inferred as KeyboardEvent
// });


// ⚠️ Overly Broad Inference (Bad Practice)
let untypedValue = null;   // inferred as any
let emptyArr = [];         // inferred as any[]
let inferenceEmptyObj = {};         // inferred as {}

untypedValue = "now it's a string";
emptyArr.push(123);
// inferenceEmptyObj["key"] = "value";

console.log(untypedValue);
console.log(emptyArr);
console.log(inferenceEmptyObj);


// ---------------------------------------------
// 🧪 Mini Challenges
// ---------------------------------------------

// 1. Infer primitive const types
const title = "TypeScript"; // inferred as string
const num = 99;             // inferred as number
const flag = false;         // inferred as boolean

// 2. Explicit param + inferred return
function inferenceDouble(x: number): number {
  return x * 2;
}
console.log("Double:", inferenceDouble(6));

// 3. Mixed array
const values = [true, "yes", 1]; // (boolean | string | number)[]
console.log("Values:", values);

// 4. Object inference with hover
const inferenceProduct = {
  id: 101,
  name: "Laptop",
  price: 999.99,
};
console.log("Product:", inferenceProduct);
