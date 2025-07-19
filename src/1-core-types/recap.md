# 🧠 TypeScript Core Types Recap

This recap summarizes the most essential concepts in the Core Types section — short reminders, real-world context, and a mini self-check quiz at the end.

---

## ✅ Primitives

- Basic types: `string`, `number`, `boolean`, `null`, `undefined`
- TypeScript gives **strict type safety** — no implicit type changes
- Useful to prevent bugs like `"5" + 1 === 51` 🚫

---

## ✅ Arrays & Tuples

- `number[]` vs `[string, number]`
- Tuples are fixed-length + typed-position arrays
- Used a lot in form validation, destructuring, or tight configs

---

## ✅ Enums

- Represent a group of named constants
- `enum Role { Admin, User, Guest }`
- Use enums to improve readability and reduce "magic strings"

---

## ✅ Objects

- Define the **shape** of a value
- TS checks all required keys + value types
- Use interfaces or types to describe object structures

---

## ✅ Functions

- Every parameter and return should be typed
- Optional params: `fn(name?: string)`
- Default values still need type checking
- Function overloading? Save that for advanced.

---

## ✅ Union Types

- A variable can be one of several types: `string | number`
- Great for APIs, conditional logic, or state modeling

---

## ✅ Type Guards

- Narrow down types at runtime using `typeof`, `in`, `instanceof`
- Crucial for handling union types safely

---

## ✅ Intersection Types

- Combine multiple types into one: `A & B`
- Useful for mixing required behaviors (e.g. UI + DB object)

---

## ✅ Literal Types

- Type is limited to specific values: `'GET' | 'POST'`
- Used in API design, command sets, state machines

---

## ✅ Type Inference

- TS often infers your types from context
- Avoid redundant typing, but don’t rely on inference in public APIs or shared code

---

## ✅ Type Assertion

- Tell TS what the type really is (when you know better): `value as string`
- Avoid overusing it — it skips type safety

---

## ✅ never Type

- Represents unreachable code
- Used in functions that `throw`, loop forever, or exhaustive checks

---

## ✅ typeof & keyof

- `typeof` turns a value into a type
- `keyof` gives you a union of an object’s keys
- Use together: `keyof typeof obj` → `"key1" | "key2" | ...`

---

# 🧪 Self-Test Questions

> ✍️ Test your core TypeScript brain — no cheating 😄

### 1. What’s the difference between `unknown` and `any`?
### 2. When should you use a tuple instead of an array?
### 3. Write a union type that only allows `"light"` or `"dark"` values.
### 4. What does the `never` type mean, and when is it used?
### 5. How would you assert that a DOM element is an `HTMLInputElement`?
### 6. What’s the inferred type of: `const age = 30`?
### 7. Write a function that only accepts one of the keys of a given object.
### 8. How can you prevent accidentally missing a case in a `switch` statement?
### 9. Why should function parameters be explicitly typed even with inference on?
### 10. What’s the output type of `keyof typeof roles` if `roles = { admin: 'ADMIN' }`?

To check your answers, see the [quiz-answers.md](../1-core-types/quiz-answers.md) file.
---

# ✅ You’ve leveled up.

You now understand the core building blocks of TypeScript — what most developers skip, but **what top teams depend on**.

🚀 Ready for the real magic?

### ➡️ Next up: [2-advanced-types/](../2-advanced-types/)  
Where TypeScript gets more powerful, generic, conditional, and reusable.

