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

---

## Section 4 - The `infer` Keyword in TypeScript ([04-infer-keyword.ts](./04-infer-keyword.ts))

### 🤔 What is `infer`?

`infer` is used **within a conditional type** to **declare a new type variable** that can be **deduced** from another type.

It lets you **"capture"** part of a type so you can work with it later — like pattern matching for types.

---

### 🔍 Basic Example

```ts
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type A = ReturnType<() => string>;  // string
type B = ReturnType<() => number>;  // number
```
We’re saying:
> “If T is a function, extract and return its return type as R. Otherwise, return never.”

### 🔄 Extract Array Element Type

```ts
type ElementType<T> = T extends (infer U)[] ? U : T;

type A = ElementType<string[]>; // string
type B = ElementType<number>;   // number (unchanged)
```

### 🧠 Extract Function Parameters

```ts
type Params<T> = T extends (...args: infer P) => any ? P : never;

type A = Params<(a: number, b: string) => void>; // [number, string]
```

### 🔧 Extract Object Property Type

```ts
type PropertyType<T> = T extends { prop: infer R } ? R : never;

type A = PropertyType<{ prop: number }>;  // number
type B = PropertyType<{}>;                // never
```

### 🧪 Mini Challenges
1. Create a type `FirstArg<T>` that extracts the type of the first argument of a function.

2. Create a type `PromiseResult<T>` that extracts the resolved type of a promise.

3. Create a type `UnpackArray<T>` that recursively unwraps nested arrays (e.g., `string[][][] → string`).

4. Create `RemoveReadonly<T>` that removes readonly modifiers from all properties of an object.

---

## Section 5 - Discriminated Unions ([05-discriminated-unions.ts](./05-discriminated-unions.ts))

### 🤔 What are Discriminated Unions?
Discriminated unions are a powerful way to model 
**heterogeneous data** in TypeScript. They allow you to 
define a type that can be one of several different shapes, 
while still providing a way to **narrow down** the type 
based on a common property.

### 🧠 Why Use Discriminated Unions?
Discriminated unions are essential for:
- **Type Safety**: Ensures that operations on values are valid for their specific types.
- **Clarity**: Makes your code more readable and maintainable by explicitly defining what types are being used.
- **Error Prevention**: Catches potential runtime errors at compile time by ensuring type correctness.

### 🚨 The Problem It Solves

When you have a union of **object types**, TypeScript can’t always tell **which kind of object** you're working with unless there’s a **shared discriminant** field.

Without it:
```ts
type Shape = { radius: number } | { side: number };

function calcArea(shape: Shape) {
  // ❌ Error — TS doesn't know what `shape` really is
}
```

### ✅ The Fix, Add a "discriminant" field

```ts
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };

type Shape = Circle | Square;
```
Now you can use `shape.kind` as a **type-safe** switch:

```ts
function calcArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
  }
}
```
✅ TypeScript automatically narrows the type in each case.

### 📦 Real-World Examples

#### 👤 Auth State

```ts
type Auth =
  | { status: "logged_in"; user: { id: string; email: string } }
  | { status: "logged_out" };

function render(auth: Auth) {
  if (auth.status === "logged_in") {
    console.log("Welcome", auth.user.email);
  }
}
```

#### 📮 Form State

```ts
type FormState =
  | { stage: "idle" }
  | { stage: "submitting" }
  | { stage: "error"; message: string }
  | { stage: "success"; id: string };
```

### 🛠 Best Practices
- Always use a shared field like `type`, `kind`, `status`, or `stage`
- Keep it a `string` literal (`"login"`, `"success"`), not `boolean` or random strings
- Never name your tag something like `value`, `data`, etc., use unique, descriptive keys
- Use `switch` statements or `if` checks to narrow down types

### 🧪 Mini Challenges

1. Create a union for 3 types of `Notification`:

   - `"email"` with `to`, `subject`
   - `"sms"` with `to`, `message`
   - `"push"` with `deviceToken`, `title`, `body`

2. Write a function `sendNotification(n: Notification)` that switches on `n.type` and logs relevant info.

3. Add a default case in the `switch` that throws an error for exhaustive checking.

---

## Section 6 - Mapped Types in TypeScript ([06-mapped-types.ts](./06-mapped-types.ts))

### 🤔 What are Mapped Types?
Mapped types in TypeScript allow you to create new types by transforming the properties of an existing type, usually by iterating over its keys using `keyof` and `in`.

They act like a `for...in` loop at the type level, enabling you to:
- Add modifiers (e.g., `readonly`, `?`)
- Replace value types
- Filter or transform keys (when combined with `as` and conditional types)
- Build reusable type utilities

--- 

```ts
type User = {
  name: string;
  age: number;
};

// Make all properties optional:
type OptionalUser = {
  [K in keyof User]?: User[K];
};
```
This is how `Partial<T>` works under the hood.

### 🔁 Syntax Breakdown

```ts
type NewType = {
  [K in keyof OldType]: TransformedValue;
}
```
- `K` is a temporary name for each key
- `keyof` gets all keys from the source type
- `OldType[K]` grabs the value for each key

### ⚒ Common Examples

```ts
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};
```
These are basically **TypeScript’s built-in** utils.    

### 📦 Real Use Cases

#### 🔒 Making all user fields readonly
```ts
type User = {
  id: number;
  email: string;
};

type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};
```
#### 🔍 API Error Tracking
```ts
type FormErrors<T> = {
  [K in keyof T]?: string;
};

type LoginForm = {
  email: string;
  password: string;
};

type LoginErrors = FormErrors<LoginForm>;
```
Now you can track per-field error messages.

### 🧠 Advanced Usage: Key Filtering (with conditional types)

```ts
type OnlyStringProps<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};
```
✅ Removes all keys whose value isn’t `string`.

### 🧪 Mini Challenges
1. Create a `DeepReadonly<T>` type that makes all properties and nested objects readonly.

2. Create a `Flags<T>` type that transforms all boolean fields to a union:<br>
`true | "pending" | false`

3. Create a `Clone<T>` type that just duplicates an object — use mapped type for practice.

---

## Section 7 - Key Remapping in Mapped Types ([07-key-remapping.ts](./07-key-remapping.ts))

### 🤔 What is Key Remapping?
Key remapping allows you to **change the key names** when you're iterating over a type using a mapped type.

It’s done using the `as` keyword *inside* the mapped type's key definition.

```ts
type Renamed<T> = {
  [K in keyof T as `new_${string & K}`]: T[K];
};
```
This remaps all keys to a new name prefixed with `"new_"`.

### 🛠 Syntax Breakdown

```ts
type NewType = {
  [K in keyof OldType as NewKey]: TransformedValue;
};
```
- `K` is each key in `OldType`
- `as NewKey` tells TypeScript what the new key should be
- `TransformedValue` is the value (can be `OldType[K]`, or something else)

### 📦 Real-World Examples
#### 🧼 Strip Private Fields (filter out keys starting with _)
```ts
type PublicProps<T> = {
  [K in keyof T as K extends `_${string}` ? never : K]: T[K];
};
```
```ts
type Person = {
  name: string;
  age: number;
  _token: string;
};

type PublicPerson = PublicProps<Person>;
// Result: { name: string; age: number }
```

#### 🆔 Rename All Keys with a Prefix

```ts
type Prefixed<T> = {
  [K in keyof T as `db_${string & K}`]: T[K];
};
```
Turns:
```ts
type Config = { host: string; port: number };
```
Into:
```ts
type DBConfig = { db_host: string; db_port: number };
```

### 📚 Use Cases

| Scenario                                 | Key Remapping?     |
| ---------------------------------------- | ------------------ |
| Filtering out sensitive/private keys     | ✅                  |
| Creating API DTOs with transformed names | ✅                  |
| Renaming props for third-party libraries | ✅                  |
| Custom `camelCase` / `snake_case` types  | ✅ (with templates) |

### ⚠ Gotchas
- Remapped keys must still be unique, or you’ll get duplicate key errors
- never as key means “don’t include this key” (used for filtering)
- Doesn’t work on runtime objects, purely type-level

### 🧪 Mini Challenges
1. Create a `Getters<T>` type that turns `{ name: string }` into `{ getName: () => string }`.

2. Create a `RemoveFunctions<T>` type that removes all keys with function values.

3. Create a `SnakeCaseProps<T>` that converts `userName` into `user_name`. (This is tricky, optional)

---

## Section 8 - Template Literal Types in TypeScript ([08-template-literal-types.ts](./08-template-literal-types.ts))

### 🤔 What are Template Literal Types?
Template literal types in TypeScript are a **type level feature** that lets you construct new string literal types 
by combining other types using **string interpolation**, much like how JavaScript template strings work, but at the **type system level**.

You can think of them as:
> 💡 "Build new string based type keys using dynamic parts, variables, string unions, or transformations."

```js
const name = "Pranav";
const msg = `Hello, ${name}`;
```
TypeScript allows **type-level string interpolation**:
```ts
type Greeting<T extends string> = `Hello, ${T}`;
```
So `Greeting<"Pranav">` becomes `"Hello, Pranav"`, as a type!

### 🔁 Syntax

```ts
type NewType = `${Prefix}_${Suffix}`;
```
- You can interpolate other string types
- Combine with `keyof`, `in`, `as`, `extends`, etc.

### 🔧 Common Use Cases

#### ✅ Key Generation

```ts
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
```
Turns:
```ts
type User = { name: string };
```
Into:
```ts
type Getters<User> = {
  getName: () => string;
}
```

### ✅ Prefixed or Suffix Keys
```ts
type Prefixed<T> = {
  [K in keyof T as `api_${string & K}`]: T[K];
};
```
You’ll often use this when transforming:
- DTOs (Data Transfer Objects)
- Form values
- API response keys
- Localization keys

### 🧠 Type Helpers You Can Use
TypeScript comes with **string utility types** to transform key names:

| Helper            | Use Case                      |
| ----------------- | ----------------------------- |
| `Uppercase<T>`    | Convert `"hello"` → `"HELLO"` |
| `Lowercase<T>`    | Convert `"HELLO"` → `"hello"` |
| `Capitalize<T>`   | `"user"` → `"User"`           |
| `Uncapitalize<T>` | `"User"` → `"user"`           |

These can be used inside template literals:
```ts
type CapitalKeys<T> = {
  [K in keyof T as Capitalize<string & K>]: T[K];
};
```

### 📦 Real Project Use Cases
| Use Case                                    | Template Literal Used? |
| ------------------------------------------- | ---------------------- |
| Dynamic form key generation                 | ✅ Yes                  |
| Localization keys like `home.title`         | ✅ Yes                  |
| Creating event listener keys like `onClick` | ✅ Yes                  |
| API schema transformation                   | ✅ Yes                  |

### ⚠ Gotchas
- Template literal types are purely at type level they don’t impact runtime
- You can't do dynamic string logic (like slicing or splitting) unless you pair it with conditional types
- Ensure string values are `extends string`, or TS will complain

### 🧪 Mini Challenges
- Create a type `EventHandler<T>` that maps `{ click: MouseEvent }` to `{ onClick: (e: MouseEvent) => void }`.
- Write a type `ApiRoutes<T>` that converts `{ user: "GET" }` into `{ "/api/user": "GET" }`.
- Create a `RemovePrefix<T>` type that strips `api_` from all keys (hint: use conditional types).

---

## Section 9 - Utility Types in TypeScript ([09-utility-types.ts](./09-utility-types.ts))

### 🧩 What Are Utility Types?

Utility types are **predefined helpers** that let you transform types in useful ways.

Examples include:

| Built-in        | Description                                     |
|-----------------|-------------------------------------------------|
| `Partial<T>`    | Makes all properties optional                   |
| `Required<T>`   | Makes all properties required                   |
| `Readonly<T>`   | Makes all properties readonly                   |
| `Pick<T, K>`    | Select a subset of keys from `T`                |
| `Omit<T, K>`    | Remove a subset of keys from `T`                |
| `Record<K, V>`  | Create object with keys `K` of type `V`         |
| `Exclude<T, U>` | Exclude types from union `T` that are assignable to `U` |
| `Extract<T, U>` | Extract types from union `T` that are assignable to `U` |

Now we’ll learn to write custom versions of these — and build our own.

```ts
type Partial<T> = {
  [K in keyof T]?: T[K];
};

type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

### 🧠 Why Learn to Write Custom Utilities?

Because in real-world projects:

- You often need **slightly tweaked behavior** (e.g. deep partials, optional-only-some fields)
- Understanding how they're built helps you **debug complex type errors**
- You’ll see advanced utilities used in open-source and type-heavy libraries (like `zod`, `tRPC`, `react-hook-form`)

### 🔧 How Utility Types Work Under the Hood

They are built using:

- **Mapped types**: `[K in keyof T]`
- **Conditional types**: `T extends U ? X : Y`
- **Template literals** (sometimes)
- **Key filtering**: using `Exclude`, `Extract`, `infer`

### ✨ Custom Examples

1. `MyPartial<T>` — all keys optional  
    ```ts
    type MyPartial<T> = {
    [K in keyof T]?: T[K];
    };
    ```
2. `MyRequired<T>` — all keys required
    ```ts
    type MyRequired<T> = {
    [K in keyof T]-?: T[K];
    };
    ```  
3. `MyReadonly<T>` — readonly keys  
    ```ts
    type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];
    };
    ```
4. `MyPick<T, K>` — select subset  
    ```ts
    type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];
    };
    ```
5. `MyOmit<T, K>` — exclude subset  
    ```ts
    type MyOmit<T, K extends keyof any> = MyPick<T, Exclude<keyof T, K>>;
    ```
6. `MyRecord<K, V>` — object with keys `K` and values `V`  
    ```ts
    type MyRecord<K extends keyof any, V> = {
    [P in K]: V;
    };
    ```
7. `Mutable<T>` — revert `readonly` fields  
    ```ts
    type Mutable<T> = {
    -readonly [K in keyof T]: T[K];
    };
    ```
8. `Nullable<T>` — make all values nullable  
    ```ts
    type Nullable<T> = {
    [K in keyof T]: T[K] | null;
    };
    ```
9. `DeepPartial<T>` — recursively optional  
    ```ts
    type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
    };
    ```
10. `SelectByType<T, U>` — keep only properties that match a type
    ```ts
    type SelectByType<T, U> = {
    [K in keyof T as T[K] extends U ? K : never]: T[K];
    };
    ```
    Example:
    ```ts
    type User = {
    name: string;
    age: number;
    isActive: boolean;
    };

    type OnlyBooleans = SelectByType<User, boolean>; 
    // { isActive: boolean }
    ```
### ⚠️ Gotchas

- Utility types are **compile-time only** — no JS output
- Type logic can get **nested and unreadable** — modularize when possible
- Always test with real-world examples — not just theory

### 🧪 Mini Challenges

1. Create `NonFunctionProps<T>`, remove all function valued keys.
2. Recreate `Exclude<T, U>` manually using conditional types.
3. Make a `DeepReadonly<T>` utility.

---

## Section 10 - Type Level Functions ([10-type-level-functions.ts](./10-type-level-functions.ts))

### 🤔 What Are Type-Level Functions?

TypeScript doesn't have functions at the type level in the traditional sense.  
Instead, **we simulate functions using types**, mostly through **conditional types**, **mapped types**, **infer**, and **recursion**.

You can think of a type-level function as:

> 💡 “A type that takes input types, performs logic, and returns another type.”

They’re declarative and evaluated **only at compile time**.

### 🧱 Core Tools for Type-Level Functions

To build your own type-level functions, you’ll often use:

| Concept             | Purpose                            |
|---------------------|-------------------------------------|
| `extends`           | Acts like an if-statement           |
| `infer`             | Used to extract types dynamically   |
| Mapped Types        | Iterate over properties             |
| Recursive Types     | Repeat logic over nested types      |
| Template Literals   | Build or transform string types     |

### 🧠 Examples of Type-Level Functions

#### 1. `First<T>` — Get first element of a tuple

```ts
type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never;
```

#### 2. `Length<T>` — Get length of a tuple

```ts
type Length<T extends any[]> = T["length"];
```

#### 3. `Reverse<T>` — Reverse a tuple (recursive)

```ts
type Reverse<T extends any[]> = 
  T extends [infer F, ...infer R] 
    ? [...Reverse<R>, F] 
    : [];
```

#### 4. `ToArray<T>` — Wrap anything in an array

```ts
type ToArray<T> = T extends any ? T[] : never;
```

### Real-World Use Cases
- Deep flattening or filtering of nested types
- Dynamic schema validation (e.g. `zod`, `yup`, `tRPC`)
- Building polymorphic component props
- Enforcing patterns in API responses or form configs

### 🚫 Gotchas
- Debugging can be tricky, TypeScript's type system has limitations
- Infinite recursion is possible, TypeScript will stop with a “type instantiation is excessively deep” error
- Types are erased at runtime, so your logic must be type-safe, not value-driven

### 🧪 Mini Challenges
- Write `Last<T>`, return the last item of a tuple
- Write `Push<T, U>`, add a new element `U` to the end of tuple `T`
- Write `Includes<T, U>`, check if tuple `T` includes element `U`
- Write `Flatten<T>`, flatten an array one level

---