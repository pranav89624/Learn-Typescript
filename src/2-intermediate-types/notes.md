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