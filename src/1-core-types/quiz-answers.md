# ✅ Answers to Core Types Self-Test

---

### 1. What’s the difference between `unknown` and `any`?

- `any`: disables type checking — anything goes.
- `unknown`: forces you to do **type checks** before using the value.
- Prefer `unknown` when you’re not sure of the type but still want type safety.

```ts
let a: any = 5;
a.toFixed(); // okay

let b: unknown = 5;
b.toFixed(); // ❌ Error — must narrow to number first
```

### 2. When should you use a tuple instead of an array?
- Use a tuple when:
  - You know the exact number of elements
  - Each element has a different type
- Example: `[string, number]` for a coordinate or result/error pair.

### 3. Write a union type that only allows "light" or "dark" values.

```ts
type Theme = "light" | "dark";
```
- This is a literal union type, great for enforcing strict values.

### 4. What does the never type mean, and when is it used?

- It means: “This code will never finish or return anything.”

- Common uses:
  - Functions that throw errors
  - Infinite loops
  - Exhaustive checks in switch-case

```ts
function crash(): never {
  throw new Error("Oops");
}
```

### 5. How would you assert that a DOM element is an `HTMLInputElement`?

```ts
const input = document.querySelector("input") as HTMLInputElement;
input.value = "hello";
```
- Use as `HTMLInputElement` to safely access `.value`.

### 6. What’s the inferred type of: const age = 30?

- TypeScript infers `age` as `30` (**a literal type**), not `number`

- Use `let` if you want the broader `number` type.

```ts
const age = 30; // type: 30
let score = 30; // type: number
```

### 7. Write a function that only accepts one of the keys of a given object.
```ts
const user = { name: "P", age: 22 };

function getProp<K extends keyof typeof user>(key: K) {
  return user[key];
}
```
- `keyof typeof user` restricts inputs to actual keys: `"name"` | `"age"`

### 8. How can you prevent accidentally missing a case in a `switch` statement?
- Add a `default` case that assigns to a `never` type.

```ts
function handleStatus(s: "loading" | "success") {
  switch (s) {
    case "loading":
      break;
    case "success":
      break;
    default:
      const _exhaustive: never = s;
  }
}
```
- TypeScript will error if you add a new case but forget to handle it.

### 9. Why should function parameters be explicitly typed even with inference on?

- It avoids silent bugs when:
  - Types change later
  - Parameters are reused or passed around
- In public APIs or reusable functions, it's best practice to type everything explicitly.

### 10. What’s the output type of `keyof typeof roles` if `roles = { admin: 'ADMIN' }`?

```ts
const roles = { admin: "ADMIN" };
type RoleKeys = keyof typeof roles; // "admin"
```
- It extracts a **literal union** of the keys from the object, not the values.

## 🔁 Review Tip

Test yourself again after a day or two. The best way to retain TypeScript is to:

- Use it in mini projects
- Build with strict mode on
- Read your own type errors and try to debug without searching right away