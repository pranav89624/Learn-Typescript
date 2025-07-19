# 📘 Core Concepts Notes

This document kicks off the TypeScript journey by addressing the **why** before the **how**. If you're coming from JavaScript, this will give you clarity on what TypeScript is, why it's worth learning, and how it strengthens serious projects.

---

## 🤔 What is TypeScript?

**TypeScript** is a **strongly typed, statically compiled superset of JavaScript**. It adds optional static typing and advanced features on top of JavaScript.

➡️ Think of it as **JavaScript + safety + better tooling**.

You still write JavaScript... but smarter.

---

## 🚨 Why Do We Need TypeScript?

JavaScript is incredibly flexible — and that’s exactly the problem at scale.

Here’s what you deal with in plain JavaScript:

- Misspelled property names crash things silently.
- You have no idea what shape an object is supposed to be.
- Auto-complete? Minimal. Refactoring? Risky.
- You ship bugs that TypeScript could’ve caught in your editor.

> **TypeScript catches 80% of common runtime bugs at compile time.**

---

## 🆚 JavaScript vs TypeScript

| Feature                     | JavaScript          | TypeScript          |
| --------------------------- | ------------------- | ------------------- |
| Static Typing               | ❌ No               | ✅ Yes              |
| Compile-Time Error Checking | ❌ No               | ✅ Yes              |
| Code Autocomplete           | ⚠️ Basic            | ✅ Context-aware    |
| IDE Support                 | ⚠️ Good             | ✅ Excellent        |
| Refactoring Support         | ⚠️ Risky            | ✅ Safe & traceable |
| Learning Curve              | ✅ Easier initially | ⚠️ Slightly steeper |
| Runtime Environment         | ✅ Required         | ✅ Compiles to JS   |

---

## 🧠 Why Choose TypeScript Over JavaScript in Big Projects?

When your project:

- Has multiple developers
- Lasts longer than a month
- Has a growing codebase
- Needs long-term maintainability
- Requires fewer production bugs

…**you need types**.

### Real Benefits:

✅ **Self-documenting code**  
✅ **Safer refactoring**  
✅ **Better collaboration**  
✅ **Smarter editor support (intellisense, autocomplete)**  
✅ **Catch bugs before they hit prod**

> TypeScript helps you write code that scales — in team size, project size, and time.

---

## 💬 Common Misconceptions

- **“It’s too complex.”**  
  It’s not. You can start with JS-like code and slowly adopt types.

- **“It slows you down.”**  
  Slightly at first. But in large codebases, TypeScript saves hours in debugging and testing.

- **“It’s just for backend.”**  
  Nope. It’s even more useful in frontend React apps where component props and states get complicated fast.

- **“I can just use JSDoc.”**  
  JSDoc helps, but it’s not as powerful as TypeScript’s type system.

- **“I’ll learn it later.”**  
  Don’t wait. Start now. TypeScript is becoming the standard for modern JavaScript development.

- **“It’s just a trend.”**  
  TypeScript is backed by Microsoft and has a massive community. It’s here to stay.

- **“TypeScript adds a lot of errors.”**  
  Nope, it just shows you the errors that are already there. It’s like a safety net.

---

## 📦 What This Section Covers

| Topic                       | Why It Matters                              |
| --------------------------- | ------------------------------------------- |
| Primitives (`string`, etc.) | Core to all data modeling                   |
| Arrays & Tuples             | Handle collections and fixed-structure data |
| Enums                       | Use constants with meaning                  |
| Functions                   | Strong typing for inputs/outputs            |
| Objects & Aliases           | Reusable structures = maintainable code     |
| Unions & Intersections      | Express flexible yet safe types             |
| Type Inference              | Let TS figure it out, smartly               |
| Type Assertions             | When you _know_ more than the compiler      |

---

## 🚀 Before You Move On

Make sure you understand:

- Why static typing is powerful in dynamic codebases
- How to define and use basic types
- When to let TypeScript infer vs when to annotate

If yes, you're ready to move to advanced topics like:

- Type narrowing
- Interfaces vs types
- Generics
- Utility types

---

## 📚 Recommended Readings

- [TS Handbook: Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [TypeScript vs JavaScript (Real Devs’ View)](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

---

> “JavaScript will let you shoot yourself in the foot.  
> TypeScript makes sure the safety is on.”  
> — Every dev after migrating a large JS project to TS

---

## 🧱 Section 1 – Primitive Types in TypeScript ( [1-primitive.ts](./1-primitives.ts))

Primitive types are the **simplest and most basic types** in TypeScript — they hold **single immutable values** and are not objects.

They include:

| Type        | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| `string`    | Textual data. Always surrounded by quotes (`'`, `"`, or \`\`) |
| `number`    | Both integers and floating-point numbers                      |
| `boolean`   | Logical `true` or `false`                                     |
| `null`      | Intentional absence of a value                                |
| `undefined` | Declared but not yet assigned                                 |
| `any`       | Opts out of type checking                                     |
| `unknown`   | Like `any`, but requires type-checking before use             |
| `void`      | Used in functions that return nothing                         |
| `never`     | Used in functions that never return (e.g., throw errors)      |

---

### 🔹 `string`

```ts
let fullName: string = "Pranav Verma";
```

Used for anything textual: names, messages, tokens, etc.

### 🔹 `number`

```ts
let age: number = 21;
let rating: number = 4.8;
```

There’s no `int`, `float`, or `double` in TS it’s all just number.

### 🔹 `boolean`

```ts
let isLoggedIn: boolean = true;
let hasAccess: boolean = false;
```

Used for flags, conditions, and binary states.

### 🔹 `null` and `undefined`

```ts
let city: null = null;
let email: undefined = undefined;
```

- `null` represents an intentional absence of value, while
- `undefined` means a variable has been declared but not assigned.
- With `strictNullChecks`, TypeScript treats them as separate types.

### 🔹 `any`

```ts
let user: any = "Pranav";
user = 123;
user = false;
```

- Disables all type checking.
- Use only when integrating third-party libraries or legacy code.
- Basically a **TypeScript OFF** switch, avoid it if possible.

### 🔹 `unknown` a Better `any` 😉

```ts
let data: unknown = "hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

- Similar to `any`, but safer.
- You must check the type before using it.
- Forces you to do type-checking before using the value.

### 🔹 `void`

```ts
function greet(name: string): void {
  console.log(`Hello, ${name}`);
}
```

- Used for functions that don’t return a value.
- Indicates that a function is not expected to return anything.
- Can’t assign a value to a `void` variable.

### 🔹 `never`

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

- Represents values that never occur.
- Used for functions that always throw an error or have infinite loops.
- Useful for exhaustive checks in switch statements.

### 🔄 Primitive vs Reference Types

| Feature          | Primitive                | Reference                           |
| ---------------- | ------------------------ | ----------------------------------- |
| Value Stored     | Actual value             | Reference (pointer to memory)       |
| Mutable?         | ❌ Immutable             | ✅ Mutable                          |
| Examples         | `string`, `number`, etc. | `object`, `array`, `function`, etc. |
| Memory Stored In | Stack                    | Heap                                |
| Compared By      | Value                    | Reference                           |

---

### 💬 Pro Tips

- **Use `unknown` over `any`**: It forces you to do type checks.
- **Avoid** `never` until you hit more advanced use cases like exhaustive unions.
- Always enable `strictNullChecks` in your `tsconfig.json`.

### 🧪 Mini Challenges

- Create a variable that can be either a `string` or `number`.
- Write a `never`-type function that always throws an error.
- Create a function with `void` return type and try returning something from it.

---

## 📘 Section 2 – Arrays & Tuples in TypeScript ( [2-arrays-tuples.ts](./2-arrays-tuples.ts))

In JavaScript, arrays are incredibly flexible—but that flexibility can also introduce subtle bugs.  
TypeScript adds type safety and structure to arrays, helping prevent runtime disasters.

---

### 🔹 What is an Array in TypeScript?

An **array** is a collection of elements of the same type.

### ✅ Syntax Options

```ts
const scores: number[] = [100, 99, 98];
const names: Array<string> = ["Pranav", "Kunal"];
const mixed: (string | number)[] = ["Alice", 30, "Bob", 25];
```

### 🔹 Array Methods

TypeScript supports all JavaScript array methods, but with type safety.

```ts
const numbers: number[] = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);
```

### 🔍 Type Safety

TypeScript ensures that you can only perform operations that are valid for the array's type.

```ts
const names: string[] = ["Alice", "Bob"];
names.push("Charlie"); // ✅ Valid
names.push(42); // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

### [ ] Multidimensional Arrays

```ts
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

### 💡 Array of Objects

```ts
type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 30 },
];
users.push({ name: "Charlie", age: 25 }); // ✅ Valid
users.push({ name: "Dave", age: "thirty" }); // ❌ Error: Type 'string' is not assignable to type 'number'.
```

You can strongly type lists of structured data using object arrays.

### 🧯 Common Gotchas

- TypeScript does not stop runtime issues like out-of-bounds access.

- `any[]` disables all checking. Avoid unless unavoidable.

- Mutating arrays (`push`, `splice`) works the same, but you're now type-guarded.

### 🧱 What is a Tuple?

A **tuple** is a fixed-length array with defined types for each position.

### ✅ Syntax

```ts
const user: [string, number] = ["Pranav", 21];
```

This ensures:

- Position 0 must be a string

- Position 1 must be a number

### 🔍 Type Safety

TypeScript enforces the types of each element in the tuple.

```ts
const user: [string, number] = ["Pranav", 21];
user[0] = "Kunal"; // ✅ Valid
user[1] = "22"; // ❌ Error: Type 'string' is not assignable to type 'number'.
```

```ts
const user: [number, string] = [1, "Alice"];
user[0] = 2; // ✅ Valid
user[1] = 3; // ❌ Error: Type 'number' is not assignable to type 'string'.
```

### 🧩 Use Cases

- Represent structured pairs: `[longitude, latitude]`, `[status, message]`

- Useful for function returns where multiple types are bundled:

```ts
function getStatus(): [number, string] {
  return [200, "OK"];
}
```

### ✍️ Destructuring Tuples

```ts
const [code, message] = getStatus();
console.log(`Code: ${code}, Message: ${message}`);
```

Works just like arrays but with more predictable types.

### 🧯 Common Gotchas

- Tuples have a fixed length. Adding or removing elements will cause an error.
- Be cautious with type assignments. TypeScript won't automatically convert types.

### Tuples vs Arrays

| Feature         | Array                    | Tuple                        |
| --------------- | ------------------------ | ---------------------------- |
| Length          | Can vary                 | Fixed and defined            |
| Type Uniformity | All elements = same type | Each element = specific type |
| Access by Index | ✅ Yes                   | ✅ Yes                       |
| Common Use Case | Lists, collections       | Structured, positional data  |

### 🧠 Best Practices

- Prefer `type[]` over `Array<type>` for readability (It's all about preference)

- Use tuples when position matters and types vary

- Avoid using tuples for long data readability suffers

### 🧪 Mini Challenges

- Create an array of numbers and try pushing a string

- Define an array of objects with name and age

- Write a function that returns a tuple of [boolean, string]

- Destructure a tuple returned from a function

---

## 📘 Section 3 – Enums in TypeScript ( [3-enums.ts](./3-enums.ts))

An `enum` (short for **enumeration**) is a way to define a set of **named constants**.  
They're especially useful when a value can only be one of a few fixed options — like a status, direction, or theme.

---

### ✅ Why Use Enums?

- Replace "magic strings" or raw numbers with meaningful names
- Improve readability, autocomplete, and type safety
- Help centralize valid values

---

### 🔢 Numeric Enums (Default)

```ts
enum StatusCode {
  OK = 200,
  NotFound = 404,
  Unauthorized = 401,
}
```

✅ Great for working with HTTP codes, numeric states, or constants.

### 🔤 String Enums (Preferred for Readability)

```ts
enum Theme {
  Light = "light",
  Dark = "dark",
}
```

Use string enums when the actual value matters, e.g., in APIs, database fields, or UI.

### 🔁 Reverse Mapping (Only for Numeric Enums)

```ts
enum Role {
  Admin = 1,
  User,
}

console.log(Role[1]); // "Admin"
```

📌 Only numeric enums support reverse lookup. String enums don’t.

### ✅ Best Practices

- Use **string enums** when values will be displayed, stored, or sent to APIs.

- Use **numeric enums** for internal logic or performance-sensitive paths.

- Avoid **mixed enums** (`number` + `string` together) — it gets _messy_ fast.

- Don’t overuse enums sometimes `union types` (`"active" | "pending"`) are better.

### 🧪 Mini Challenges

- Create a numeric enum for `OrderStatus` (Pending, Shipped, Delivered, Cancelled)

- Create a string enum for `AppMode` (Edit, Preview, ReadOnly)

- Use an enum in a `switch` statement

---

## 📘 Section 4 – Objects in TypeScript ( [4-objects.ts](./4-objects.ts))

In JavaScript, everything is an object.  
But in TypeScript, objects become powerful when you **define what shape they must follow**.

---

### ✅ Basic Object Typing

```ts
const user: { name: string; age: number } = {
  name: "Pranav",
  age: 20,
};
```

Here, you're declaring:

- The object must have name as a string
- And age as a number

If anything else is added or types don't match → 💥 Type error.

### 🔍 Optional Properties

Use `?` to define fields that may or may not exist.

```ts
const product: { name: string; price?: number } = {
  name: "Laptop",
};
```

`price` is optional you can skip it without error.

### ⛔ Extra Property Checks

TS is strict when assigning inline objects:

```ts
function printUser(user: { name: string }) {
  console.log(user.name);
}

printUser({ name: "Ravi", age: 25 }); // ❌ Error: extra property
```

But if the object is first stored in a variable, it's allowed:

```ts
const person = { name: "Ravi", age: 25 };
printUser(person); // ✅ Allowed
```

⚠️ This is known as freshness checking.

### ✅ Object as Function Parameter

You can type inline or separately:

```ts
function greet(user: { name: string; isLoggedIn: boolean }) {
  return `Hello, ${user.name}`;
}
```

Or:

```ts
type User = {
  name: string;
  isLoggedIn: boolean;
};

function greet(user: User): string {
  return `Welcome, ${user.name}`;
}
```

### 📌 Readonly Properties

```ts
const config: { readonly port: number } = {
  port: 8080,
};

config.port = 3000; // ❌ Cannot assign to 'port' because it is a read-only property.
```

Used to protect config, settings, IDs, etc.

### 🔄 Object Nesting

```ts
type Address = {
  city: string;
  zip: number;
};

type Customer = {
  name: string;
  address: Address;
};

const customer: Customer = {
  name: "Asha",
  address: {
    city: "Delhi",
    zip: 110001,
  },
};
```

✅ Nesting helps model real-world data.

### 🧠 Best Practices

- Use `type` for reusable object shapes

- Use `readonly` for immutable configs or props

- Avoid `any` let TS protect you

- Keep object models clean and flat unless necessary

### 🧪 Mini Challenges

- Create an object for a blog post with `title`, `content`, and optional `tags`

- Create a function that accepts a `User` object and logs the name

- Try passing an extra property to a function see what happens

- Create a nested object for `Order` → includes `items` array and `shippingAddress`

---

## 📘 Section 5 – Functions in TypeScript ( [5-functions.ts](./5-functions.ts) )

Functions are the heart of any JS/TS app — but TypeScript brings **clarity, type safety, and better intent**.

This section teaches you how to write clean, type-safe functions with minimal fuss.

---

### ✅ Typing Function Parameters and Return Values

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

- a and b are typed

- : number after ) is the **return type**

if you don’t return anything, use void:

```ts
function logMessage(msg: string): void {
  console.log(msg);
}
```

### 🔁 Optional and Default Parameters

Default parameters let you set a fallback value if none is provided.

```ts
function greet(name: string = "Guest"): string {
  return `Hello, ${name}`;
}
```

Optional parameters use `?` to indicate they can be skipped:

```ts
function greetUser(name?: string) {
  return `Hi, ${name ?? "Anonymous"}`;
}
```

### 📝 Function Type Alias

To reuse function signatures:

```ts
type MathOperation = (x: number, y: number) => number;

const multiply: MathOperation = (a, b) => a * b;
```

Keeps your function contracts clean and reusable.

### 🧠 Function Expressions vs Declarations

```ts
// Declaration
function divide(a: number, b: number): number {
  return a / b;
}

// Expression (arrow function)
const subtract = (a: number, b: number): number => a - b;
```

Both work, but declarations are hoisted while expressions are not. Pick based on use-case or code style.

### 🔄 Return Type: void vs undefined vs never

| Type        | Use When…                              |
| ----------- | -------------------------------------- |
| `void`      | Function returns nothing (common)      |
| `undefined` | Rare when returning actual `undefined` |
| `never`     | Function never returns (e.g. throws)   |

```ts
function crash(): never {
  throw new Error("Critical failure");
}
```

Use `never` for functions that never complete normally.

### 🧱 Functions as Params (Callbacks)

You can pass functions as parameters to other functions:

```ts
function handleSuccess(callback: () => void) {
  callback();
}
```

```ts
function operate(
  x: number,
  y: number,
  cb: (a: number, b: number) => number
): number {
  return cb(x, y);
}

operate(4, 2, (a, b) => a + b); // 6
```

### ✅ Best Practices

- Always type both parameters and return value

- Use `void` for side-effect-only functions (like logging)

- Prefer function type aliases for consistent signatures

- Avoid `any` always prefer `unknown` or define proper types

### 🧪 Mini Challenges

- Write a function that returns the full name from `firstName` and `lastName`

- Write a function that logs a warning (void)

- Define a type alias for a math operation and use it

- Create a function that accepts a callback and logs `"Done"` after callback runs

---

## 📘 Section 6 – Union Types in TypeScript ([6-union-types.ts](./6-union-types.ts))

Union types allow a variable, parameter, or return value to be **one of several types**.  
Think of them as TypeScript’s version of "either this or that" and they’re used everywhere in real world apps.

---

### 🔹 Basic Syntax

```ts
let value: string | number;

value = "hello";   // ✅ OK
value = 42;        // ✅ OK
value = true;      // ❌ Error
```

### 🧠 Real-World Examples
- Form inputs that accept string/number

- API response types (`string | null`)

- Event payloads

- Error handling (`Error | string`)

- React state (`boolean | 'loading' | 'error'`)

### 🔍 Union in Function Parameters

```ts
function printId(id: string | number) {
  console.log("ID:", id);
}
```

### ⚠️ Limitations: No Shared Methods
When using union types, you can only use common members between all types:

```ts
function double(input: number | string) {
  // return input * 2; // ❌ Error: string doesn't support '*'
}
```
### ✅ Narrowing with typeof
Use type narrowing to work safely inside unions:

```ts
function double(input: number | string) {
  if (typeof input === "number") {
    return input * 2;
  }
  return input + input;
}
```

### 📋 Union in Object Types

```ts
type Success = { status: "success"; data: string };
type Failure = { status: "error"; message: string };

type ApiResponse = Success | Failure;

function handleResponse(res: ApiResponse) {
  if (res.status === "success") {
    console.log("Data:", res.data);
  } else {
    console.error("Error:", res.message);
  }
}
```
This is called a **discriminated union** powerful pattern for handling APIs and conditions.

### 🧠 Best Practices
- Use unions to model flexible inputs or return values

- Always narrow types using `typeof`, `in`, or tagged fields (`res.status`)

- Avoid `any` unions + narrowing give better control

### 🧪 Mini Challenges

- Declare a variable that can be either a string or null

- Create a function that accepts `boolean | "loading" | "error"` and logs appropriately

- Use a union to model a response that may return data or an error

- Use `typeof` to safely process a `string | number`

---

## 📘 Section 7 – Type Guards in TypeScript ([7-type-guards.ts](./7-type-guards.ts))

Type guards are **runtime checks** that narrow down the type of a variable within a specific block of code.

Without them, TypeScript can only *guess* with them, it knows **exactly** what you're working with.

---

### ✅ Why Use Type Guards?

Union types give you flexibility.  
Type guards give you **control** over how to handle those types safely.

```ts
function printLength(val: string | string[]) {
  if (typeof val === "string") {
    console.log(val.length); // ✅ string.length
  } else {
    console.log(val.length); // ✅ array.length
  }
}
```

### 🔹 1. `typeof` Guard (for primitives)
```ts
function handle(input: string | number) {
  if (typeof input === "string") {
    console.log("Upper:", input.toUpperCase());
  } else {
    console.log("Doubled:", input * 2);
  }
}
```
✅ Works for: `string`, `number`, `boolean`, `symbol`, `bigint`, `function`, `undefined`

### 🔹 2. `in` Operator Guard (for objects with common fields)

```ts
type Admin = { name: string; privileges: string[] };
type User = { name: string; email: string };

function printInfo(person: Admin | User) {
  if ("privileges" in person) {
    console.log("Admin privileges:", person.privileges);
  } else {
    console.log("User email:", person.email);
  }
}
```
✅ Use when types share a similar structure but have different keys.

### 🔹 3. `instanceof` Guard (for class-based types)

```ts
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  loadCargo() {
    console.log("Loading cargo...");
  }
}

function operate(vehicle: Car | Truck) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  } else {
    vehicle.drive();
  }
}
```
✅ Use when working with class instances, especially in OOP heavy apps.

### 🔹 4. Custom Type Guard (with `is` keyword)

Let’s say you have types that can't be distinguished with keys:

```ts
type Dog = { bark(): void };
type Cat = { meow(): void };

function isDog(animal: Dog | Cat): animal is Dog {
  return (animal as Dog).bark !== undefined;
}

function makeSound(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.bark(); // ✅ Fully typed as Dog
  } else {
    animal.meow(); // ✅ Fully typed as Cat
  }
}
```
✅ Use for fine-grained control and custom logic.

### 🔍 Recap: When to Use What?

| Guard Type    | Use When...                        |
| ------------- | ---------------------------------- |
| `typeof`      | Checking primitive types           |
| `in`          | Discriminating between object keys |
| `instanceof`  | Class instances                    |
| Custom (`is`) | Fine control over union types      |

### 🧪 Mini Challenges

- Create a function that accepts `string | string[]` and prints each character/item

- Create a type `Square | Circle`, and use `in` to distinguish between them

- Build a simple custom type guard: `isAdmin(person): person is Admin`

- Use `instanceof` for `Date` vs `string`

---

## 📘 Section 8 – Intersection Types in TypeScript ([8-intersection-types.ts](./8-intersection-types.ts))

While union types let you accept **one of many types**,  
**intersection types** force you to combine multiple types into one requiring that **all properties** are present.

Think of it like merging objects or interfaces:  
```ts
type A = { name: string };
type B = { age: number };
type C = A & B; // Must have both name & age
```

### ✅ Syntax: type A & B

```ts
type Developer = {
  name: string;
  skills: string[];
};

type Manager = {
  department: string;
  employees: number;
};

type TechLead = Developer & Manager;

const lead: TechLead = {
  name: "Pranav",
  skills: ["TypeScript", "React"],
  department: "Engineering",
  employees: 4,
};
```
Here, `TechLead` must satisfy both `Developer` and `Manager`.

### 🧠 Real-World Use Cases

- Merging features (like role-based access: `Admin & Auditor`)

- Reusing types from multiple models

- Building enhanced or hybrid user roles (`User & Profile & Permissions`)

- Merging class types (with interface extension)

### ⚠️ Conflicts in Intersections
If both types declare the same property with different types, you’ll get a conflict:

```ts
type A = { value: string };
type B = { value: number };

type C = A & B; // ❌ Error: 'string' & 'number' is never
```
TypeScript won’t let you create impossible intersections this is by design.

### ✅ Intersection of Union Types
Yes, it's valid (and weird but powerful):
```ts
type A = { kind: "cat" } | { kind: "dog" };
type B = { legs: number };

type C = A & B; // Must be cat or dog AND have legs
```
Useful for API filters, query models, or hybrid states.

### 🔍 Intersection vs Union Summary


| **Feature**   | **Union**                    |**Intersection**                    |
| ------------- | ---------------------------------- | ---------------------------------- |
| Behavior      | Either A or B                      | Must be A and B                    |
| Flexibility   | More flexible                      | More strict / specific             |
| Use Case      | Overloads, optional inputs         | Role merging, strict modeling      |
| Pitfalls      | Needs narrowing                    | Property conflicts cause error     |

### 🧪 Mini Challenges

- Create `Author` and `Publisher` types, and an intersection type `BookContributor`

- Build a function that accepts a `User & Permissions` and logs both

- Try conflicting fields and see what happens

- Create a `HybridVehicle` type from `ElectricCar & PetrolCar` and list required properties