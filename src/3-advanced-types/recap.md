# 🧠 Advanced Types Recap

Welcome to the end of the **Advanced Types** section!  
Here’s a quick recap of everything you’ve learned, followed by some brain twisting questions to help you **reinforce the concepts**.

---

## ✅ Section Highlights

### 1. Type Narrowing
- Use `typeof`, `instanceof`, `in`, and custom guards to safely narrow types at runtime.
- Crucial when working with `unknown`, `union`, or external data.

### 2. Generics
- Add flexibility while preserving type safety.
- Used in functions, types, interfaces, and even constraints.
- Example: `function identity<T>(arg: T): T`

### 3. Conditional Types
- Dynamically resolve types using `T extends U ? X : Y`.
- Basis for many built-in utility types.

### 4. `infer` Keyword
- Extract inner types from structures like arrays or promises.
- Mostly used with conditional types.

### 5. Discriminated Unions
- Pattern for safe union handling using a common `kind` field.
- Used to build exhaustive switch statements.

### 6. Mapped Types
- Dynamically map keys of a type to another form.
- Core of utility types like `Partial<T>`, `Readonly<T>`.

### 7. Key Remapping
- Use `as` in mapped types to rename keys.
- Helpful in transforming API types, DTOs, etc.

### 8. Template Literal Types
- Create string types dynamically using string templates.
- Great for naming conventions or event maps.

### 9. Utility Types
- Built-in helpers like `Partial`, `Pick`, `Record`, `Omit`, `ReturnType`.
- Reduce boilerplate when transforming types.

### 10. Type-Level Functions
- Emulate logic like `First<T>`, `Push<T>`, `Flatten<T>` purely at type level.
- Used in libraries and advanced toolkits (like tRPC, Zod).

### 11. Branded Types
- Simulate nominal typing using `type ID = string & { __brand: "ID" }`.
- Prevents accidental mixing of similar-looking types.

### 12. Recursive Types
- Define types that reference themselves.
- Used for trees, JSON, deep partials, and nested data structures.

---

## 🧪 Self Check Questions

1. What does the `infer` keyword do?
2. Give one reason to use branded types over regular strings.
3. How would you extract the return type of a function using a utility type?
4. What’s the difference between mapped types and conditional types?
5. Why are recursive types useful? Give two real-world use cases.
6. What’s the purpose of discriminated unions?
7. How do template literal types differ from normal string unions?
8. What would the output of this be?
   ```ts
   type T = "dev" | "prod";
   type EnvVar = `ENV_${T}`;
   ```
9. How does TypeScript handle deeply recursive type aliases? Any limits?
10. Why might you prefer `unknown` over `any`?

You can find the answers to these questions in the [quiz answers](./quiz-answer.md).

> 🧩 Pro Tip: You don’t need to remember all syntax, just 
remember what’s possible. That’s what makes a TypeScript developer truly productive.

---

## ⏭️ What’s Next?

You're now done with the heavy hitting Advanced Types, congrats! 🎯  
You’ve unlocked some of the most powerful features TypeScript has to offer.

But theory means nothing without application.

So now it’s time to **apply all of this in the real world, with React.**

> 📂 Head over to the next section: [`4-typescript-in-react`](../4-typescript-in-react)

There, you’ll learn how to:
- Type props, state, refs, and contexts
- Build reusable, strongly typed components
- Leverage discriminated unions, generics, and inference in actual apps

---

🎯 This is where TypeScript starts paying off, in real UI dev, forms, APIs, and architecture.

So go ahead. Jump in. The type-safe UI jungle awaits. 🌿
