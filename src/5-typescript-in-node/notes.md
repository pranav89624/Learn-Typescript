# 🚀 Welcome to TypeScript in Node.js: The Backend Era Begins

You’ve mastered TypeScript on the frontend now it’s time to bring that type-safe precision to your server side logic. In this section, we’re diving deep into how TypeScript supercharges Node.js development by eliminating bugs before they happen, providing rich tooling, and enforcing scalable design patterns.

This isn’t about building production APIs (yet). This is about understanding how to think in types while working with the Node.js runtime, its core modules, and common backend patterns like Express, environment variables, JWT, and more.

## 📘 Section 1 - Basic Types Recap in Node ([01-basic-types.ts](./src/01-basic-types.ts))

### 🧩 Purpose
Even though the core TypeScript types are the same across environments, this section ensures you’re comfortable applying them in a **Node.js (non-browser)** context.

### 🔤 string, number, boolean
Basic primitives are fully supported and strictly typed.

```ts
const name: string = "Pranav";
const port: number = 3000;
const isProd: boolean = false;
```

### 📦 Arrays
Type-safe arrays let you define exactly what data can go inside.
```ts
const skills: string[] = ["TypeScript", "Node"];
```

### 🧱 Object Types
Define custom shapes using type or interface.
```ts
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};
```
> You get IntelliSense for all keys, making development safer and faster.

### 🚦 Union Types
Let a value be one of many specific options.
```ts
type Role = "admin" | "editor" | "viewer";
```

### 🧮 Functions
You can explicitly type parameters and return values.
```ts
function greet(user: string): string {
  return `Hello, ${user}`;
}
```

### 🎯 Tuples
Fixed-length arrays with fixed types at each position
```ts
const position: [number, number] = [0, 1];
```

### 💡 Key Takeaway:
TypeScript’s static typing isn’t just for safety, it increases clarity and expressiveness.
Mastering these fundamentals gives you confidence when scaling backend logic.