// ✅ 1. DOM Access Example
// TypeScript can't infer the exact HTML type — it'll default to Element | null

/* 
const emailInput = document.querySelector("#email") as HTMLInputElement;

if (emailInput) {
  emailInput.value = "hello@example.com";
  console.log("✅ Input value set");
}

// commented because it requires a DOM environment to run
*/


// ✅ 2. Narrowing Unknown Type
function handleAssert(data: unknown) {
  // Let's assume this 'data' is a user
  const user = data as { name: string; age: number };
  console.log("User Name:", user.name);
  console.log("User Age:", user.age);
}

handleAssert({ name: "Pranav", age: 21 });


// ✅ 3. JSON Parsing
const raw = '{"id":101,"title":"Learn TypeScript"}';
const parsed = JSON.parse(raw) as { id: number; title: string };

console.log("Parsed Object:", parsed);


// ✅ 4. Narrowing from Union Type
function logLength(val: string | number) {
  if (typeof val === "string") {
    console.log("Length:", val.length); // OK, known string
  } else {
    const asserted = val as number;
    console.log("Doubled:", asserted * 2);
  }
}

logLength("TypeScript");
logLength(50);


// ❌ 5. DOUBLE ASSERTION (Danger Zone)
// This is technically allowed but totally unsafe
const hack = 100 as unknown as string;
console.log("Hacked Value:", hack); // Compiler says okay, runtime says 🫠

// Avoid unless you're absolutely forced to (like third-party libraries)


// ---------------------------------------------
// 🧪 Mini Challenge Solutions
// ---------------------------------------------

// 1. DOM Element Assertion 
// Uncomment to run in a browser environment
// This will only work in a browser context, not in Node.js
// const button = document.querySelector("button") as HTMLButtonElement;
// button.innerText = "Click Me!";

// 2. JSON Assertion
type Todo = { id: number; completed: boolean };
const todoJson = '{"id":1,"completed":false}';
const todo = JSON.parse(todoJson) as Todo;
console.log("Todo:", todo);

// 3. Unknown → User
function processInputAssert(input: unknown) {
  const user = input as { username: string };
  console.log("Welcome,", user.username);
}
processInputAssert({ username: "coder123" });

// 4. Union Narrowing
function printUpper(val: string | number) {
  if (typeof val === "string") {
    console.log(val.toUpperCase());
  } else {
    console.log((val as number) + 100);
  }
}

printUpper("typescript");
printUpper(200);
