# ✅ Intermediate Types – Quiz Answers

---

## 1. When should you use an `interface` vs a `type alias`?

**Use `interface`** when you're modeling the shape of an object, especially when you want to allow declaration merging or extension by other interfaces.

**Use `type alias`** when:
- You want to define unions/intersections.
- You need advanced type compositions (e.g., conditional or mapped types).
- You're working with primitives or tuples.

`interface` for structure, `type` for flexibility.

---

## 2. How does TypeScript enforce type safety with `unknown`?

Unlike `any`, values of type `unknown` **cannot be used directly**. TypeScript **forces you to narrow the type** using `typeof`, `instanceof`, or custom guards before accessing any properties or methods. This prevents unsafe assumptions and runtime crashes.

---

## 3. What’s the advantage of `satisfies` over simple type annotations?

- `satisfies` ensures that a value **conforms to a type** without **widening its literal types**.
- It **validates** the shape like a type annotation but retains precision for better autocomplete and inference.
- Prevents silent errors where you may accidentally match a shape but lose literal information.

---

## 4. How does declaration merging help extend third-party types?

Declaration merging allows you to **augment existing interfaces or namespaces** (like adding custom properties to `Window`, `Request`, or a library type) without modifying the original declaration. Useful in:
- Extending global objects
- Enhancing library-provided interfaces (e.g., Express’s `Request`)

---

## 5. Why is method overloading useful in API design?

Method overloading allows you to **define multiple type-safe input combinations** for the same function or method name. It makes your API:
- More flexible for users
- Easier to use with strong typing
- Cleaner than manually handling union logic with conditionals

---

## 6. How do `optional` and `readonly` modifiers affect object properties?

- `optional (?)`: The property may or may not exist — consumers of the type must check before using.
- `readonly`: Once a value is set, it cannot be reassigned. This enforces immutability for that property, which is especially useful in configuration objects or constants.

---

## 7. What is the difference between namespaces and modules in organizing code?

- **Namespaces**: Used to group related code in a single file or globally — old-school, works well in non-module environments.
- **Modules (ESM/CommonJS)**: Based on file boundaries and `import/export` syntax. Preferred in modern TypeScript/JavaScript projects. Scales better with bundlers and tooling.

> Modules = modern best practice ✅  
> Namespaces = legacy usage or global declarations ⚠️

---

## 8. Explain how getters and setters control property access in classes.

- **Getters** allow computed or formatted access to internal/private values.  
- **Setters** allow controlled mutation or validation logic before setting a property.

They let you **encapsulate logic** while keeping the syntax clean (e.g., `obj.prop` vs `obj.getProp()`), improving abstraction and maintainability.

---
