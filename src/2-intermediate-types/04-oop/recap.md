# 🧠 Recap – Intermediate Types (OOP in TypeScript)

---

## ✅ What You’ve Learned

You’ve now covered key object-oriented programming (OOP) concepts in TypeScript, including:

- Type Aliases & Interfaces (and the key differences between them)
- Classes, Objects, and Constructors
- The `this` keyword
- Access Modifiers (`public`, `private`, `protected`)
- Inheritance using `extends` and `super()`
- Getters and Setters for encapsulated access
- Static Members to share logic between instances
- Abstract Classes for forced structure and design consistency
- Design Patterns used in real-world TypeScript (Singleton, Factory, Observer)

> This knowledge sets the foundation for building structured, maintainable, and scalable applications, both frontend and backend.

---

## 🧪 Self-Check Questions

> Try answering before peeking. Foldable answers below!

---

### 1. What’s the difference between `interface` and `type` in TypeScript?

<details>
<summary>Click to view answer</summary>

- `interface` is meant for object shapes, better with class-based OOP  
- `type` can represent unions, primitives, functions, etc.  
- Both can be extended, but interfaces can be merged (declaration merging)
</details>

---

### 2. What does `private`, `protected`, and `public` mean in a class?

<details>
<summary>Click to view answer</summary>

- `private`: Only accessible inside the class  
- `protected`: Accessible inside the class and subclasses  
- `public`: Accessible anywhere (default)
</details>

---

### 3. Why is the `super()` call required in subclass constructors?

<details>
<summary>Click to view answer</summary>

Because it initializes the parent class. You must call `super(...)` before using `this` in a subclass constructor.
</details>

---

### 4. When would you use a `getter` vs a `method`?

<details>
<summary>Click to view answer</summary>

Use a `getter` when:
- You want to expose a calculated or validated value  
- You want to use dot-notation like a property: `obj.value`  
Use a method when more parameters or logic are involved.
</details>

---

### 5. What is a static member, and how do you use it?

<details>
<summary>Click to view answer</summary>

A static member belongs to the class itself, not an instance.  
You call it like: `ClassName.member`, not via `new ClassName()`.
</details>

---

### 6. What is the role of an abstract class?

<details>
<summary>Click to view answer</summary>

Abstract classes define **blueprints**.  
They can have:
- `abstract` methods (must be implemented)
- concrete methods (shared functionality)  
They cannot be instantiated directly.
</details>

---

### 7. When would you use a design pattern like Singleton or Factory?

<details>
<summary>Click to view answer</summary>

- **Singleton**: When only one instance is needed across the app (e.g., config, logger)  
- **Factory**: When object creation logic needs to be abstracted or dynamic (e.g., user roles, shape factory)  
- **Observer**: When you want multiple things to respond to a state change (e.g., events, data watchers)
</details>

---

## 🎯 What's Next?

You’re now ready to move into the final portion of `2-intermediate-types`:  
➡ **Advanced OOP** topics like:
- Method Overloading  
- Namespaces & Modules  
- And then wrap it all up before moving to Advanced TypeScript

Continue here 👉 [`05-method-overloading.ts`](../05-method-overloading.ts)

---

⏳ You’ve crossed the halfway mark of the intermediate journey.  
🔁 Revisit this file whenever you want to refresh core OOP fundamentals.
