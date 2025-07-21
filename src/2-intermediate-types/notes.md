# 🧩 Intermediate Types – Section Overview

In this part of the repo, you’ll level up from core types to **real-world structures** used in production codebases.

By the end of this section, you'll be able to:

✅ Structure complex types cleanly and reuse them across your app  
✅ Model real-world entities and app state using TypeScript’s type system  
✅ Build classes and organize logic with OOP principles  
✅ Use function/method overloading, modules, and advanced composition  
✅ Understand how to design scalable and secure TS systems

---

## 📌 Section 1 - Type Aliases ([01-type-aliases.ts](./01-type-aliases.ts))

Type Aliases let you create **named custom types** :  primitives, objects, functions, unions, etc.

Think of them as **dev friendly labels** for reusable type structures.

---

### ✅ Basic Syntax

```ts
type Username = string;
type Age = number;
type User = {
  name: string;
  age: number;
};
```
- `type` works with any valid type expression.

- Aliases help DRY up your code and make types easier to reason about.

### ⚡ Why Use Type Aliases?
1. Cleaner & Reusable — especially for complex object shapes.
2. Helpful with Unions & Intersections — not just objects.
3. Custom utility types — great when working with generics.

### 🔗 Example with Union Types

```ts
type Status = "loading" | "success" | "error";
```
This enforces strict string values no room for typos or `"succeess"` bugs.

### 🧠 Type Aliases vs Direct Typing
Type Aliases are **more readable** and **easier to maintain** than inline types, especially for complex structures.

```ts
// Direct typing — fine for small stuff
function greet(user: { name: string; age: number }) {}

// Better with alias — reusable & clean
type User = { name: string; age: number };
function greet(user: User) {}
```

### 🧃 Can Aliases Be Extended?
No, type doesn’t support declaration merging, but you can use intersections:
```ts
type Base = { id: string };
type Extended = Base & { role: string };
```

### 🚫 When NOT to Use It?
- If you're defining just an object structure that may evolve via extension, consider `interface` instead (more on that next).

- Type aliases **can’t be reopened** like interfaces.

### 💡 Recap

| Feature             | Supported in `type` |
| ------------------- | ------------------- |
| Primitives          | ✅ Yes               |
| Unions              | ✅ Yes               |
| Intersections       | ✅ Yes               |
| Objects             | ✅ Yes               |
| Functions           | ✅ Yes               |
| Declaration Merging | ❌ No                |
| Extension (via `&`) | ✅ Yes               |

### 🧪 Mini Challenges
Try solving these before moving to interfaces.

1. Define a type alias for a product

    ```ts
    // Define a Product type with:
    // - id (number)
    // - title (string)
    // - price (number)
    // - isAvailable (boolean)
    ```

2. Create a union type using aliases
    ```ts
    // Define a type Status = "pending" | "shipped" | "delivered"
    // Then create a variable with that type and try assigning it incorrect value.
    ```

3. Build a nested object type
    ```ts
    // Define a type for a BlogPost:
    // - title (string)
    // - content (string)
    // - author (object with name and email)
    ```

4. Extend a type using intersection
    ```ts
    // Given:
    type BaseUser = { id: number };
    // Create an AdminUser type by extending BaseUser and adding role: 'admin'
    ```

---

## 📌 Section 2 - Interfaces ([02-interfaces.ts](./02-interfaces.ts))

An **interface** in TypeScript describes the shape of an object, its properties and their types.

Interfaces are primarily used to:

- Define **contracts** for objects  
- Support **extension and merging**  
- Provide better tooling and readability for complex structures

---

### ✅ Basic Syntax

```ts
interface User {
  name: string;
  age: number;
}
```
You can use it like:
```ts
const user: User = {
  name: "Alice",
  age: 30,
};
```

### ⚡ Interface Extension
Interfaces are **extensible** via `extends`, letting you build complex hierarchies:
```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}
```

### 🔄 Declaration Merging
Unlike `type`, interfaces can be **reopened and merged** automatically:

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// Resulting User interface has both name and age
const user: User = { name: "Bob", age: 25 };
```
This makes interfaces perfect for working with third-party libraries or expanding types incrementally.

### 🔍 Differences Between `interface` and `type`

| Feature                  | `interface`   | `type`                |
| ------------------------ | ------------- | --------------------- |
| Object shapes            | ✅             | ✅                     |
| Union/intersection types | ❌ (no unions) | ✅                     |
| Declaration merging      | ✅             | ❌                     |
| Extends / Implements     | ✅             | ✅ (via intersections) |
| Aliases primitives       | ❌             | ✅                     |

### 🚫 When NOT to Use Interfaces?
- If you need union or tuple types, use `type`.

- If you want to create **complex mapped** or **conditional types**, use `type`.

### 💡 Practical Usage Tips
- Use `interfaces` for public API shapes more readable and extendable.

- Use `type` aliases for complex unions and utilities.

### 🧪 Mini Challenges
Try these before moving on:

1. Define an interface for a Car
- `make` (string)
- `model` (string)
- `year` (number)

2. Extend the Car interface to ElectricCar
- Add `batteryCapacity` (number)

3. Use declaration merging to add a method `getAge(): number` to Car

4. Create a variable with your merged Car interface and implement the method

---

## ⚔️ Section 3 - Type Aliases vs Interfaces ([03-aliases-vs-interfaces.ts](./03-aliases-vs-interfaces.ts))

### 🧠 What You'll Get From This

After this section, you’ll know:

✅ When to use `type` vs `interface` in actual dev work  
✅ How both behave with objects, unions, extensions  
✅ Which one scales better in team projects  
✅ Why both are fine—but context matters

---

### 🧩 Reminder of Basics

```ts
// Type alias
type UserType = {
  name: string;
  age: number;
};

// Interface
interface UserInterface {
  name: string;
  age: number;
}
```
Functionally, both define object shapes and work the same **in most common cases**.

### 💥 Where `type` Wins
1. Union and Intersection Types
    ```ts
    type Status = "loading" | "error" | "success";
    type ApiResponse = { data: string } | { error: string };
    ```

2. Complex Conditional or Utility Types
    ```ts
    type Maybe<T> = T | null | undefined;
    ```
You can't do that with interfaces.

### 🧠 Where `interface` Wins
1. Extensibility via `extends`
    ```ts
    interface Animal {
    name: string;
    }

    interface Dog extends Animal {
    breed: string;
    }
    ```
    You can also implement interfaces in classes.

2. Declaration Merging
    ```ts
    interface Theme {
    darkMode: boolean;
    }

    interface Theme {
    fontSize: number;
    }

    // Now Theme has both darkMode and fontSize
    ```
    You **can’t merge types** like that, `type` throws an error on duplicate names.

### 🧩 Quick Summary Table

| Feature                   | `type`      | `interface`      |
| ------------------------- | ----------- | ---------------- |
| Objects                   | ✅           | ✅                |
| Unions & Intersections    | ✅           | ❌ (not directly) |
| Declaration Merging       | ❌           | ✅                |
| Extending other types     | ✅ (via `&`) | ✅ (`extends`)    |
| Implemented by classes    | ✅           | ✅                |
| Used with React Props     | ✅           | ✅                |
| Utility/Conditional Types | ✅           | ❌                |

### 🚨 Practical Dev Advice

> - Use `interface` by default for objects you plan to extend or share.
> - Use `type` when you need unions, intersections, or generics-heavy structures.
> - Don’t overthink it both compile to nothing and don’t impact runtime.

### 🧪 Mini Challenges
Try answering or writing these:

1. Create a `User` using both `type` and `interface`.<br>
   Then extend both with a new `role: string` field.

2. Try to declare the same `interface` twice. What happens?<br>
   Then do the same with `type`. What happens?

3. Create a union using `type` and try the same using `interface`.<br>
   Does it work?

4. Declare a `Maybe<T>` type alias that allows `null | undefined`.

---

## 🚀 Section 4 - Mastering OOP in TypeScript ([04-oop/](./04-oop/))

Before we dive into things like function overloading and modules, it's time to **level up your TypeScript mindset** with something critical: **Object-Oriented Programming (OOP)**.

---

### 🧠 Why a Separate OOP Folder?

I’ll split the OOP content into a dedicated folder (`2-intermediate-types/04-oop/`) for a few important reasons:

- 🧩 It’s a **big topic** : trying to cram it in here would be messy and rushed.  
- 🛠️ It’s **essential** : you’ll use OOP patterns in real production code, security systems, and scalable architecture.  
- 🗂️ It's **modularized into sub parts** for better understanding: Classes, Objects, `this`, inheritance, modifiers, abstract classes, and more.


### 🔥 What You’ll Learn There

In the OOP section, you'll go from:

✅ Creating basic classes & objects  
✅ Understanding how constructors work  
✅ Understanding how `this` works in TS  
✅ Applying **Access Modifiers** like `private`, `protected`, `readonly`  
✅ Implementing **Inheritance**  
✅ Using **Getters & Setters**, **Static members**, and **Abstract Classes**  
✅ Learning patterns that improve **security**, **reusability**, and **testability**


> ⚠️ This is **not just OOP for theory**, it's OOP that translates directly into writing professional, scalable apps.


### 📍 Follow the Path, In Order

This section is **broken down into small files**, so follow them step by step.  
👉 Start from: [`04-oop/01-classes-objects.ts`](./04-oop/01-classes-objects.ts) and work your way through.  
Each subpart will include real examples, code snippets, and mini challenges to solidify your understanding.

---

Ready to move like a real dev? Let’s get into the **heart of how TypeScript powers real-world architecture** jump into [`04-oop/`](./04-oop/) now. 💥

---

## 📌 Section 5 - Method Overloading in TypeScript ([05-method-overloading.ts](./05-method-overloading.ts))

### 🧠 What Is Method Overloading?

In TypeScript, **method overloading** allows you to define **multiple signatures** for a single method in a class.

The actual method implementation comes after the overload signatures and it should handle all cases.

---

### 🧱 Syntax

```ts
class Printer {
  print(message: string): void;
  print(value: number): void;
  print(arg: any): void {
    console.log("Printing:", arg);
  }
}
```
> 🧨 Important: The implementation must be one method that handles all overloads using **type guards** or `any`.

### ⚡ Why Use Method Overloading?
1. **Cleaner APIs**: Define multiple ways to call a method without cluttering the interface
2. **Type Safety**: Each overload can have its own type signature, ensuring correct usage
3. **Flexibility**: Allows methods to handle different types of inputs gracefully
4. You want one method to support multiple input types
5. You’re designing flexible class **APIs**
6. Avoid confusing method names like `printStr()`, `printNum()`

### ✅ Real-world Use Case

```ts
class Logger {
  log(msg: string): void;
  log(error: Error): void;
  log(data: string | Error): void {
    if (typeof data === "string") {
      console.log("Message:", data);
    } else {
      console.error("Error:", data.message);
    }
  }
}
```

### 🧠 Key Rules Recap
1. **Single Implementation**: Always have a single implementation that handles all overloads.
2. **Type Guards**: Use type guards to differentiate between overloads in the implementation.
3. **Clarity**: Ensure that the purpose of each overload is clear and distinct.
4. **Avoid Complexity**: Don’t overload methods unnecessarily; keep the API simple.
5. **Consistent Naming**: Use consistent naming conventions for overloaded methods.
6. All overload signatures must be **defined above** the implementation.
7. Implementation must **handle all** cases gracefully.

### 🧪 Mini Challenges

**Challenge 1:**

Create a class `Calculator` with an overloaded method `add()` that:

- Adds two numbers: `add(10, 20)`
- Concatenates two strings: `add("10", "20")`

**Challenge 2:**

Make a `ResponseHandler` class:

- Overload method `handle` for `string`, `object`, and `null`
- Log different messages based on input type

--- 

## 🔁 Section 6 - Function Overloading in TypeScript ([06-function-overloading.ts](./06-function-overloading.ts))

### 🧠 What Is Function Overloading?

Function overloading allows you to **define multiple call signatures** for a single function — enabling the same function to work with multiple types of arguments.

Unlike method overloading (inside classes), function overloading is used with **standalone functions**.

### 🧱 Syntax

```ts
function greet(name: string): void;
function greet(age: number): void;
function greet(input: any): void {
  if (typeof input === "string") {
    console.log(`Hello, ${input}`);
  } else if (typeof input === "number") {
    console.log(`You are ${input} years old`);
  }
}
```
> 🧨 The actual implementation must come after all signatures and must cover all possible types.

### ⚡ Why Use Function Overloading?
1. **Cleaner APIs**: Define multiple ways to call a function without cluttering the interface
2. **Type Safety**: Each overload can have its own type signature, ensuring correct usage
3. **Flexibility**: Allows functions to handle different types of inputs gracefully
4. You want one function to support multiple input types
5. Avoid confusing function names like `greetStr()`, `greetNum()`
6. You’re designing flexible function **APIs**

### ✅ Real-world Use Case
- Utility functions (`parse()`, `format()`, `merge()`)
- API clients (`fetch(url: string)` vs `fetch(options: object)`)
- Logging, analytics, validation utilities

### 🧠 Key Rules Recap
1. **Single Implementation**: Always have a single implementation that handles all overloads.
2. **Type Guards**: Use type guards to differentiate between overloads in the implementation.
3. **Clarity**: Ensure that the purpose of each overload is clear and distinct.
4. **Avoid Complexity**: Don’t overload functions unnecessarily; keep the API simple.
6. All overload signatures must be **defined above** the implementation.

### 🔗 Function Overloading vs Method Overloading

| Feature       | Method Overloading                         | Function Overloading    |
| ------------- | ------------------------------------------ | ----------------------- |
| Scope         | Inside classes                             | Standalone functions    |
| Use case      | Object behavior logic                      | Utility & helper logic  |
| Usage pattern | `this` keyword access                      | Global functional logic |
| Syntax rules  | Same: signatures above, one implementation |                         |

### 🧪 Mini Challenges

**Challenge 1:**

Create a function `mergeValues()` that:
- If passed two strings → returns concatenated string
- If passed two numbers → returns their sum
- If mixed types → throw an error

**Challenge 2:**
Create a function `describeUser()` that:

- Takes a string (name) and returns `"User: {name}"`
- Takes an object `{ name, age }` and returns `"User: {name}, Age: {age}"`
- Uses overloads, not conditional types

---

## 📦 Section 7 - Namespaces in TypeScript ([07-namespaces.ts](./07-namespaces.ts))

### 🧠 What Is a Namespace?

A **namespace** is a way to group related variables, functions, interfaces, or classes under a single **global scope-safe wrapper**.

It helps **prevent naming collisions** in large codebases.

---

### 🧱 Basic Syntax

```ts
namespace Utilities {
  export function log(msg: string) {
    console.log("Log:", msg);
  }
}

Utilities.log("Hello");
```
✅ Everything inside a namespace is not accessible unless it’s exported.

### ⚡ Why Use Namespaces?
1. **Organize Code**: Group related functionality together
2. **Avoid Global Pollution**: Prevent naming conflicts in the global scope
3. **Encapsulation**: Hide implementation details and expose only what’s necessary
4. **Modularity**: Break code into smaller, manageable pieces

### 🚫 Are Namespaces Still Used?

Namespaces were more common in pre ES6 JavaScript.  

With modern ES modules, they are less frequently used but still useful for organizing large codebases or legacy projects.

Namespaces are older than ES Modules and mostly used in:

- Legacy projects
- Simple scripts without bundlers
- Environments without module loaders (e.g. `<script>` in browser)

In modern codebases, modules (import/export) are preferred.

### 📌 Key Differences

| Feature          | Namespaces                     | Modules (covered next)       |
| ---------------- | ------------------------------ | ---------------------------- |
| Scope            | Global via `namespace` keyword | File-based + `import/export` |
| Usage            | Requires no module system      | Requires a module system     |
| Maintainability  | Less scalable                  | Highly scalable              |
| Compiler Support | ✅ Built-in in TS               | ✅ Built-in in TS             |


### ⚠️ Important Notes

- Namespaces must be in the same file unless using `/// <reference path="">`
- You can nest namespaces but it’s rarely necessary
- Avoid in modern projects unless required

### 🧪 Mini Challenges

**Challenge 1:**

Create a namespace `MathUtils` with:
- A constant `PI`
- A function `areaOfCircle(radius: number)`

**Challenge 2:**

Create a namespace `Auth` with:
- Interface `User { name: string; password: string }`
- Function `login(user: User): boolean`
- Return `true` if name and password aren't empty

---

## 📦 Section 8 - ES Modules in TypeScript ([08-modules.ts](./08-modules.ts))

### 🧠 What Are Modules?

In TypeScript (and JavaScript), every `.ts` file is a **module** when it contains at least one `import` or `export`.

Modules help you:

- Avoid global scope pollution  
- Reuse and organize logic  
- Build scalable apps with clear file boundaries

---

### 🧱 Why Use Modules?

✅ Organize code into reusable files  
✅ Avoid naming collisions  
✅ Build scalable codebases  
✅ Encouraged in all modern apps, frontend & backend

### ✍️ Syntax

#### Named Exports (can export multiple things):

```ts
// file: utils.ts
export const PI = 3.14;
export function square(n: number): number {
  return n * n;
}
```

```ts
// file: main.ts
import { PI, square } from './utils';

console.log(PI);          // 3.14
console.log(square(5));   // 25
```

#### Default Exports (only one per file):

```ts
// file: greet.ts
export default function greet(name: string) {
  console.log(`Hello, ${name}`);
}
```

```ts
// file: main.ts
import greet from './greet';

greet("Pranav");
```

#### Re-exporting
You can re-export from another module:

```ts
// file: index.ts
export { PI, square } from './utils';
```

```ts
// file: main.ts
import { PI, square } from './index';

console.log(PI);          // 3.14
console.log(square(5));   // 25
```

### Rules to Remember
1. **File as Module**: Each `.ts` file is a module if it has `import` or `export`.
2. **Named Exports**: Use `export` to expose multiple items.
3. **Default Export**: Use `export default` for a single main item.
4. **Importing**: Use `import { item } from 'module'` for named exports, or `import item from 'module'` for default exports.
5. **File Paths**: Use relative paths (`./`, `../`) to import from
6. File extension is **not required** in imports

### ⚠️ Important Notes
- Modules are **not hoisted** like variables, so imports must be at the top.
- Circular dependencies can cause issues, so avoid them.
- Use `tsconfig.json` to set module resolution strategy (e.g., `commonjs`, `esnext`).

### 🧪 Mini Challenges

**Challenge 1:**

Create a file `math.ts` that exports:
- A constant `PI`
- A function `add(a, b)`
- A function `multiply(a, b)`

Then, import and use them in `main.ts`.

**Challenge 2:**

Create a file `user.ts` with:
- An interface `User` with `name` and `age`
- A function `describeUser(user: User): string`

Then, import and use in `main.ts`.

---

## 🔑 Section 9 - Index Signatures in TypeScript ([09-index-signatures.ts](./09-index-signatures.ts))

### 🧠 What Are Index Signatures?

Index signatures allow you to define the **structure of an object** where the key names are not known in advance — but you **know the type of keys and values**.

---
### 🧱 Syntax

```ts
interface ErrorBag {
  [key: string]: string;
}
```
> This means any number of properties, as long as the key is a string and the value is a string.

### ✅ Use Case: Error Bag
```ts
const errorBag: ErrorBag = {
  email: "Invalid email address",
  username: "Must start with a letter",
  123: "Even number keys become strings!",
};
```

### ⚡ Why Use Index Signatures?
1. **Dynamic Object Structures**: Useful when you don’t know all property names ahead of time
2. **Flexible APIs**: Great for libraries or APIs that accept arbitrary key-value pairs
3. **Type Safety**: Ensures that all values conform to a specific type

### 🧭 When to Use
- When dealing with unknown or dynamic keys
- When keys come from user input or external sources (like APIs)
- When you want to enforce uniform value types for all keys

### 📌 Important Constraints
- The key must be of type string, number, or symbol
- All properties must match the index signature unless marked optional
- You cannot mix index types (e.g. string and number) freely unless unioned carefully

### 🔥 Bonus: Key Type Tricks

```ts
interface Scores {
  [key: string]: number;
  // fixed properties must also match value type of index
  // name: string; ❌ Error - must be number
}
```
To mix types, either use:
- Record<string, any>
- Or separate out fixed properties

### 🧪 Mini Challenges

**Challenge 1:**

Create an interface `Config` with `[key: string]: boolean`, then create a config object with 3 keys: `darkMode`, `showSidebar`, `enableLogging`.

**Challenge 2:**

Define an interface `GradeBook` where keys are student names and values are `number` scores. Write a function that takes a `GradeBook` and returns the class average.

---

##  🧩 Section 10 - Optional & Readonly Properties in TypeScript ([10-optional-readonly-properties.ts](./10-optional-readonly.ts))


### ❓ Optional Properties (`?`)

Adding a `?` after a key name makes it **not required** when creating an object of that type.

```ts
interface User {
  name: string;
  age?: number; // optional
}
```

### 🔍 Behavior
- You can omit optional properties
- If omitted, they are considered undefined
- Still fully type-safe and autocomplete-aware

### 🔐 Readonly Properties
Use readonly to prevent mutation of a property after the object is created.

```ts
interface User {
  readonly id: number;
  name: string;
}
```

### 🔍 Behavior
- You must initialize readonly properties during creation
- Any attempt to reassign them will throw a compile-time error
- Great for enforcing immutable IDs, tokens, constants, etc.

### 🔁 Combine Them
You can use both on the same property:

```ts
interface Config {
  readonly key?: string;
}
```
> 🔸 A property like this is both optional and cannot be reassigned if provided.

### ⚙️ Real-World Use Cases

| Use Case                                 | Optional | Readonly |
| ---------------------------------------- | -------- | -------- |
| Optional settings or flags               | ✅        | ❌        |
| API response fields (e.g., `avatarUrl?`) | ✅        | ❌        |
| Constants, IDs, tokens                   | ❌        | ✅        |
| Frontend state objects (`isLoading?`)    | ✅        | ❌        |

### 🧪 Mini Challenges

**Challenge 1:**

Create an interface `Product` with:
- `id` (readonly number)
- `name` (string)
- `description?` (optional string)

Create an object using this and try mutating `id`.

**Challenge 2:**

Create a `Settings` interface:
- `theme?` (optional string)
- `readonly version` (number)

Create a settings object and try reassigning `version`.

---

## ⚔️ Section 11 - `unknown` vs `any` in TypeScript ([11-unknown-vs-any.ts](./11-unknown-vs-any.ts))


### 🧠 What Is `any`?

- The **escape hatch** for TypeScript’s type system  
- Disables all type checking on that variable  
- You can do *anything* with it without compiler errors  
- **Dangerous**: can hide bugs, defeat purpose of TS

```ts
let value: any;
value = 5;
value.foo.bar(); // No error at compile time but runtime error likely
```
### 🧠 What Is `unknown`?

- A type-safe counterpart to `any`
- You can assign *anything* to `unknown`
- But you cannot use it directly without type checking or assertion
- Forces you to validate or narrow the type before usage

```ts
let value: unknown;
value = 5;
value.foo.bar(); // Error! You must narrow first
```

### ⚔️ Key Differences

| Feature                | `any`                 | `unknown`                                 |
| ---------------------- | --------------------- | ----------------------------------------- |
| Assign anything to it  | ✅                     | ✅                                         |
| Use properties/methods | ✅ (unsafe, no checks) | ❌ (requires narrowing)                    |
| Assign to other types  | ✅                     | ❌ (only assignable to `any` or `unknown`) |
| Type safety            | None                  | Enforced                                  |

### 🔍 Working Safely with `unknown`

Before using an `unknown` value, narrow its type using:
- `typeof` checks
- `instanceof` checks
- User defined type guards
- Type assertions (if you are sure)

Example:
```ts
function process(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log("Not a string");
  }
}
```

### 🧪 Mini Challenges

**Challenge 1:**

Write a function `printLength` that accepts an `unknown` argument and prints its length if it's a string or an array, otherwise logs "No length property".

**Challenge 2:**
Create a variable of type `any` and one of type `unknown`.<br>
Try to call `.toFixed(2)` on both.<br >
Explain why TypeScript behaves differently.

---

