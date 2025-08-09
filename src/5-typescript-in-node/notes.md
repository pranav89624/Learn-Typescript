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

---

## 📦 Section 2 -  Modules & ES Modules in TypeScript (Node.js) ([02-modules-and-esm.ts](./src/02-modules-and-esm.ts))

In modern Node.js with TypeScript, we typically write modular code so that functionality is split across multiple files instead of crammed into one giant script.
Modules help with **maintainability**, **reusability**, and **clarity**.

### 1️⃣ What Are ES Modules?
- ESM (ECMAScript Modules) is the modern JavaScript module system.
- Uses `import` and `export` syntax.
- Supported natively in Node.js (v14+ with `"type": "module"` in `package.json`).

**Example :**

```ts
// mathUtils.ts
export function add(a: number, b: number): number {
  return a + b;
}

// app.ts
import { add } from './mathUtils.js';
console.log(add(2, 3));
```

### 2️⃣ TypeScript + ESM Setup
- In **package.json**:
  ```json
  {
    "type": "module"
  }
  ```
- In **tsconfig.json**:
  ```json
  {
    "compilerOptions": {
      "module": "ESNext"
    }
  }
  ```
- Always include `.js` extension in imports when running compiled output (Node requires it).

### 3️⃣ Named vs Default Exports
- **Named exports:** Multiple exports per file, imported with destructuring.
- **Default export:** One main export per file.

```ts
// Named
export const PI = 3.14;
export function square(n: number) { return n * n; }

// Default
export default function greet(name: string) {
  return `Hello, ${name}!`;
}
```

```ts
import greet, { PI, square } from './mathUtils.js';
```


### 4️⃣ Importing Node.js Core Modules in ESM
- For built-ins like `fs`, `path`, `url`:
  ```ts
  import fs from 'fs';
  import path from 'path';
  ``` 
- When working with paths in ESM, `__dirname` doesn’t exist by default. Use:
  ```ts
  import { fileURLToPath } from 'url';
  import { dirname } from 'path';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  ```

### 5️⃣ Why ESM Over CommonJS?
- Native to modern JS and browsers.
- Tree-shaking friendly.
- Future-proof as Node.js shifts toward ESM.

### ✅ Goal for this Section:
Be comfortable **exporting and importing functions, classes, and constants** in a Node.js + TypeScript environment using ES module syntax.

---