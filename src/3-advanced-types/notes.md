# 🧠 Advanced Types in TypeScript


Welcome to the **Advanced Types** section, where TypeScript stops being just a "type checker" and becomes a *powerful type system* that lets you write expressive, flexible, and production grade code.

This section builds on everything you've learned so far and dives into concepts that power real-world frameworks, libraries, and enterprise scale apps.

---

## 🚀 What You’ll Learn

By the end of this section, you’ll be able to:

- Build types that **react** to input values
- Extract types using **conditional logic**
- Enforce shape level contracts without runtime code
- Create **mappable** and **filterable** types
- Use **template literal types** for dynamic string manipulation

---

## Section 1 - Type Narrowing in TypeScript ([01-type-narrowing.ts](./01-type-narrowing.ts))

### 🧠 What is Type Narrowing?

In TypeScript, **narrowing** is the process of refining a value from a *broad* type to a more *specific* one.

> Think of it like zooming in: from `string | number` → to `string` only.

The TypeScript compiler **automatically narrows** types using **control flow analysis** — and with the help of your conditions, it can infer exact types during runtime checks.

### 🧠 Why is it Important?
Type narrowing is crucial for:
- **Type Safety**: Ensures that operations on values are valid for their specific types.
- **Code Clarity**: Makes your code more readable and maintainable by explicitly defining what types are being used.
- **Error Prevention**: Catches potential runtime errors at compile time by ensuring type correctness.
- **Enhanced IntelliSense**: Provides better autocompletion and suggestions in your IDE.

### 🔍 Built-in Narrowing Techniques

#### 1. `typeof` Narrowing

Used to differentiate primitives like `string`, `number`, `boolean`, `undefined`, etc.

```ts
function logValue(val: string | number) {
  if (typeof val === "string") {
    console.log(val.toUpperCase()); // narrowed to string
  } else {
    console.log(val.toFixed(2)); // narrowed to number
  }
}
```

#### 2. `in` Operator Narrowing
Used to distinguish object types by checking if a key exists.

```ts
type Admin = { name: string; role: string };
type User = { name: string; email: string };

function printPerson(person: Admin | User) {
  if ("role" in person) {
    console.log("Admin:", person.role);
  } else {
    console.log("User:", person.email);
  }
}
```

#### 3. `instanceof` Narrowing
Used with classes and constructors.

```ts
function printDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}
```

#### 4. Equality Narrowing
TS also narrows based on comparisons.

```ts
function compare(x: string | number, y: string | boolean) {
  if (x === y) {
    // both must be string!
    console.log(x.toUpperCase());
  }
}
```

#### 5. Control Flow Analysis
TS tracks types as your logic evolves.

```ts
function doSomething(x?: string | null) {
  if (!x) return; // eliminates undefined and null
  console.log(x.toUpperCase()); // x is string
}
```

### 🛡️ Custom Type Guards
You can define your own narrowing logic using user-defined type guards.

```ts
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function isDog(animal: Dog | Cat): animal is Dog {
  return "bark" in animal;
}

function handlePet(pet: Dog | Cat) {
  if (isDog(pet)) {
    pet.bark(); // narrowed to Dog
  } else {
    pet.meow(); // narrowed to Cat
  }
}
```

### 🧪 Mini Challenges
Try solving these before moving to the solution:

1. Write a function that accepts `string | number | boolean`, and logs:
    - "STR" if it’s a string
    - 1 or 0 for true/false if boolean
    - Doubled value if it’s a number

2. Create a custom type guard `isAdmin()` to narrow a union of `User | Admin`.


--- 

## Section 2 - Generics in TypeScript ([02-generics.ts](./02-generics.ts))

### 🤔 What are Generics?

Generics allow you to write **flexible, reusable, and type-safe code** by using a *placeholder* for types.

Think of them as **function parameters**, but for types:

```ts
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42); // T is number
const str = identity("hello");    // T is inferred as string
```

### 🧠 Why Use Generics?
Generics are essential for:
- **Reusability**: Write functions and classes that work with any type.
- **Type Safety**: Ensure that operations on values are valid for their specific types.
- **Flexibility**: Create libraries and APIs that can adapt to different types without losing type safety.

### 💡 Why Not Just Use `any`?
- `any` disables type checking completely

- `Generic<T>` maintains type information while staying flexible

```ts
function wrapAny(val: any) {
  return val;
}

function wrapGeneric<T>(val: T): T {
  return val;
}

const a = wrapAny("text"); // still 'any'
const b = wrapGeneric("text"); // inferred as string ✅
```

### 🧱 Generic Functions

```ts
function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}

const result = merge({ name: "Alice" }, { age: 25 });
// result is { name: string; age: number }
```

### 📦 Generic Interfaces & Types

```ts
interface ApiResponse<T> {
  status: number;
  data: T;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  status: 200,
  data: { id: 1, name: "John" },
};
```

### 🔐 Generic Constraints
You can restrict what types can be passed using `extends`.

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello");         // ✅
getLength([1, 2, 3]);        // ✅
getLength({ length: 5 });    // ✅
// getLength(42);            // ❌ Error: number doesn't have length
```

### 🏗️ Generic Classes

```ts
class Box<T> {
  content: T;
  constructor(value: T) {
    this.content = value;
  }
}

const numberBox = new Box<number>(123);
const stringBox = new Box("Hello");
```

### 🔁 Default Type Parameters
You can assign a default type to a generic.

```ts
type Nullable<T = string> = T | null;

const value: Nullable = "hello"; // inferred as string | null
```

### 🧪 Mini Challenges
1. Create a function `firstElement<T>` that returns the first element of an array of type `T[]`.
2. Create a generic interface `ApiResult<T>` with `success: boolean` and `payload: T`.
3. Write a class `Pair<T, U>` that holds two values `first` and `second`.

---

## Section 3 - Conditional Types in TypeScript ([03-conditional-types.ts](./03-conditional-types.ts))

### 🤔 What Are Conditional Types?

Conditional types let you write **logic inside your types**, they evaluate like a ternary (`? :`) at the type level.

> `T extends U ? X : Y`

- If `T` *extends* `U`, then use type `X`
- Else, fallback to type `Y`

---

### 📦 Basic Example

```ts
type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>; // "Yes"
type B = IsString<number>; // "No"
```

### 🔁 Nesting Conditional Types
You can even chain them:

```ts
type TypeLabel<T> = 
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  "unknown";

type Test1 = TypeLabel<true>;    // "boolean"
type Test2 = TypeLabel<123>;     // "number"
type Test3 = TypeLabel<string>;  // "string"
```

### 🔐 Real-World Example: Optional vs Required

```ts
type IsRequired<T> = undefined extends T ? "Optional" : "Required";

type A = IsRequired<string>;        // Required
type B = IsRequired<string | undefined>; // Optional
```

### 🧠 With Generic Functions
Conditional types shine inside generic functions when we want to build dynamic behaviors based on input types.

```ts
type Response<T> = T extends string ? string[] : number[];

let res1: Response<"hello"> = ["h", "e", "l"];
let res2: Response<123> = [1, 2, 3];
```

### 🧩 Use Case: Strip Null from Type

```ts
type NonNullable<T> = T extends null | undefined ? never : T;

type A = NonNullable<string | null>;     // string
type B = NonNullable<number | undefined>; // number
```
This is how TypeScript’s built in `NonNullable<>` works internally!

### 🧪 Mini Challenges
1. Create a type `IsArray<T>` that checks if a type is an array.
2. Create a type `Flatten<T>` that unwraps the array element if `T` is an array, otherwise returns `T` as is.
3. Write a type `IsUnion<T>` that checks if a type is a union.