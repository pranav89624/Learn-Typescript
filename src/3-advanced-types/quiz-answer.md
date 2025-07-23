# ✅ Answers to Self-Check Quiz — Advanced Types

---

### 1. What does the `infer` keyword do?
> It lets you extract a type from another within a conditional type.  
> Example: `T extends Promise<infer R> ? R : never` extracts the resolved type from a Promise.

---

### 2. Give one reason to use branded types over regular strings.
> To prevent assigning one type of string (e.g., Email) to another logically distinct one (e.g., UserID), even though they’re both technically `string`.

---

### 3. How would you extract the return type of a function using a utility type?
> `ReturnType<typeof yourFunction>`

---

### 4. What’s the difference between mapped types and conditional types?
> - **Mapped types** iterate over keys and transform each key's value  
> - **Conditional types** decide the final type based on logic using `T extends X ? A : B`

---

### 5. Why are recursive types useful? Give two real-world use cases.
> They model:
> - Trees (e.g., UI components, file systems)
> - Deeply nested JSON (e.g., API configs, CMS structures)

---

### 6. What’s the purpose of discriminated unions?
> To allow safe, exhaustive handling of multiple object variants using a shared literal property (like `type` or `kind`).

---

### 7. How do template literal types differ from normal string unions?
> Template literals build string types dynamically (e.g., `` `env:${string}` ``), whereas unions are static sets (e.g., `"dev" | "prod"`).

---

### 8. What would the output of this be?
```ts
type T = "dev" | "prod";
type EnvVar = `ENV_${T}`;
```
`"ENV_dev" | "ENV_prod"`

---

### 9. How does TypeScript handle deeply recursive type aliases? Any limits?
> TypeScript has a **depth limit** (around 1000 nested layers). Too deep = compile error:<br>
`Type instantiation is excessively deep and possibly infinite.`

---

### 10. Why might you prefer unknown over any?
> `unknown` forces type checking before use, maintaining type safety.<br>
> `any` disables all safety and can lead to runtime bugs.