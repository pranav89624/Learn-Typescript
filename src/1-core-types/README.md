# 📦 TypeScript Core Types – Section 1

Welcome to the **Core Types** section of this TypeScript learning repository.

This part focuses on **mastering TypeScript fundamentals**,  the types that power everything from small utilities to full-stack apps.

---

## 🧭 What's Included?

| #   | Topic                         | Code File                          |
|-----|-------------------------------|------------------------------------|
| 01  | Primitive Types               | `01-primitives.ts`                 |
| 02  | Arrays & Tuples               | `02-arrays-tuples.ts`              |
| 03  | Enums                         | `03-enums.ts`                      |
| 04  | Objects                       | `04-objects.ts`                    |
| 05  | Functions                     | `05-functions.ts`                  |
| 06  | Union Types                   | `06-union-types.ts`                |
| 07  | Type Guards                   | `07-type-guards.ts`                |
| 08  | Intersection Types            | `08-intersection-types.ts`         |
| 09  | Literal Types                 | `09-literal-types.ts`              |
| 10  | Type Inference                | `10-type-inference.ts`             |
| 11  | Type Assertion                | `11-type-assertion.ts`             |
| 12  | `never` Type                  | `12-never-type.ts`                 |
| 13  | `typeof` & `keyof` Operators | `13-typeof-keyof.ts`               |

📝 Detailed explanations, examples, and reasoning for all sections are available in [`notes.md`](./notes.md)

---

## 📚 How to Use This Folder

1. **Start from the top**: Begin with `01-primitives.ts` and follow the order. Each concept builds on the previous.
2. **Read the notes**: Explanations, examples, and edge-case warnings are all in [`notes.md`](./notes.md).
3. **Run the code**: Every `.ts` file is runnable and documented.

---

## ⚙️ How to Run These Files

Make sure you have a proper TypeScript environment:

### 1. Compile All Files:
```bash
tsc
```
This will output the compiled .js files in your dist/1-core-types/ folder.

### 2. Run a Specific File:
```bash
node dist/1-core-types/01-primitives.js
```

## 🚀 How to Learn From This Section
1. Start from `01-primitives.ts` and go in order.

2. Use `notes.md` alongside each file to understand the why, not just the syntax.

3. Don’t rush, try tweaking the code, breaking it, and fixing it.

4. Before moving to the next section, test yourself with the recap and quiz.

## 📚 Additional Resources
- 🧾 Core Concepts Summary: [`recap.md`](./recap.md)
    > Contains quick, real-world usage tips, and 10 key self-assessment questions.

- 🧪 Quiz Answers: [`quiz-answers.md`](./quiz-answers.md)
    > Detailed explanations for all recap questions — review before interviews or advancing.

## ✅ Prerequisites

This section assumes you already know JavaScript well:

- Functions, objects, arrays, `typeof`, `==` vs `===`

- No time is wasted reteaching basic syntax

If not, pause and refresh your JS foundation it’ll 10x your TS learning curve.

## 💡 Developer Tips
- Use strict mode always (`"strict": true` in `tsconfig.json`)

- Prefer explicit types in functions and shared objects

- TypeScript is a **design tool** as much as a safety net — model your intent

## 🏁 After Core Types
You're now ready to move into:

### [**`➡️ 2-intermediate-types/`**](../2-intermediate-types/)