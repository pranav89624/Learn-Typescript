# ⚛️ TypeScript in React

Welcome to the **TypeScript in React** section, where types and components come together to create powerful, safe, and scalable UIs.

If TypeScript is the engine of type safety, then React is 
the canvas for dynamic interfaces. But combining them isn’t just about slapping types on components, it’s about **designing interactive apps with clarity, predictability, and fewer runtime errors**.

This section will walk you through the most critical integration points between TypeScript and React, from props and state, to refs, context, hooks, and advanced patterns used in real world codebases.

---

## 🚀 What You’ll Learn

By the end of this section, you’ll be able to:

- Build React components with fully typed **props**, **state**, and **event handlers**
- Use `useRef`, `useEffect`, `useContext`, and custom hooks with strong type safety
- Apply generics in components and hooks for reusability
- Safely interact with DOM elements using typed refs
- Understand type narrowing, default props, and conditional rendering patterns
- Write type-safe React logic that scales with team and product complexity

---

All examples live under `react-playground/src/concepts/` in self-contained folders, and you can run each one by toggling them inside `App.tsx`.

Let’s level up your React development with the type system that never blinks. 🧠⚡

---

## 📦 Section 1 - Typing Component Props & State ([`01-props-and-state`](./react-playground/src/concepts/01-props-and-state/))


### 📘 Overview
In JavaScript, props and state are flexible but not type-safe.
In TypeScript, we aim for type inference, exhaustive type checking, and zero any usage in the component interface.

This section covers:

- Typing props for function components
- Typing useState correctly
- Default & optional props
- Using ReactNode for children
- Destructuring props with type
- Props with union & discriminated unions

### 🧩 1. Typing Basic Props
File: `Greeting.tsx`

```tsx
type GreetingProps = {
  name: string;
  isLoggedIn: boolean;
};

// See the full code in `Greeting.tsx`
export const Greeting = ({ name, isLoggedIn }: GreetingProps) => {
    ...
}
```
> ✅ Pro Tip: You don't need to annotate return type; TS infers from JSX.

### 🧩 2. Typing useState
File: `Counter.tsx`

```tsx
export const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0); // Type annotation

  return (
    <div className="p-4">
      <p className="mb-2">You clicked {count} times</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-1 bg-blue-500 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
};
```
> ⚠️ `useState<number>(0)` ensures `count` is always a number. No more weird coercion bugs.

### 🧩 3. Optional Props & Default Values
File: `Card.tsx`

```tsx
type CardProps = {
  title: string;
  subtitle?: string; // Optional prop
};

export const Card: React.FC<CardProps> = ({ title, subtitle = 'No subtitle' /* Default Prop */ }) => {
  return (
    <div className="p-4 border border-blue-200 rounded">
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};
```
> 🔄 `subtitle?: string` makes it optional. The default value `"No subtitle"` handles fallback inline.

### 🧩 4. ReactNode and children Prop
File: `Wrapper.tsx`

```tsx
type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="p-4 bg-gray-50 text-black rounded shadow-sm">
      {children}
    </div>
  );
};
```
> 🎯 `children` is always `ReactNode`, not `TSX.Element`.

### 🧩 5. Destructuring Props with Type
Already covered in `Greeting.tsx` and `Card.tsx`.

```tsx
type GreetingProps = {
  name: string;
  isLoggedIn: boolean;
};

export const Greeting = ({ name, isLoggedIn }: GreetingProps) => {
  return (
    <div className="p-4 border rounded">
      {isLoggedIn ? (
        <h2 className="text-green-600">Welcome back, {name}!</h2> //Destructuring Props
      ) : (
        <h2 className="text-gray-600">Please log in</h2>
      )}
    </div>
  );
};
```

### 🧩 6. Union / Discriminated Union Props
File: `Alert.tsx`

```tsx
type AlertProps =
  | { type: 'success'; message: string }
  | { type: 'error'; message: string };

export const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const className =
    type === 'success' ? 'text-green-600' : 'text-red-600';

  return <p className={`p-2 font-semibold ${className}`}>{message}</p>;
};
```
> 🛡️ Union types allow for flexible props while maintaining type safety. TypeScript narrows down the type based on the `type` field.

### 🧩 7. Combining Everything
File: `PropsAndStateDemo.tsx`

```tsx
// Combining everything
import React from "react";
import { Greeting } from "./Greeting";
import { Counter } from "./Counter";
import { Card } from "./Card";
import { Wrapper } from "./Wrapper";
import { Alert } from "./Alert";

export const PropsAndStateDemo: React.FC = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Props and State Demo</h1>

      <Greeting name="Pranav" isLoggedIn={true} />

      <Card title="My Project" />
      <Card title="Important Note" subtitle="Don't forget deadlines!" />

      <Alert type="success" message="All systems operational" />
      <Alert type="error" message="Something went wrong" />

      <Counter />

      <Wrapper>
        <p>This is wrapped content using the children prop.</p>
      </Wrapper>
    </div>
  );
};
```
> 🧩 This demo combines all the concepts: typed props, state management, optional/default props, children, and union types. It’s a great way to see how everything fits together in a real-world scenario.

### Learning Outcomes
- You can now type props and state in React components, ensuring type safety and reducing runtime errors.
- You understand how to use optional and default props effectively.
- You can leverage the children prop to create flexible and reusable components.
- You are familiar with union types and how they can be used to model different states or variations of props.

---

## 🔁 Section 2 - Event Handling & Form Types in TypeScript + React ([`02-events-and-forms`](./react-playground/src/concepts/02-events-and-forms/))

Handling events in React is straightforward, but when you add **TypeScript**, you unlock **precise safety, better autocomplete, and more maintainable code**.

This section focuses on **typing event handlers and form elements**, ensuring you never again second guess what `event.target.value` is supposed to be.

---

### 🎯 Key Concepts You’ll Learn

- How to **type common event handlers** like `onClick`, `onChange`, and `onSubmit`
- Difference between **React's SyntheticEvent** vs **native DOM events**
- How to **type-safe form inputs** using `event.target.value`
- Using `useRef` with proper DOM element types

### 🧠 SyntheticEvent vs Native Event

In React, all events are wrapped in a `SyntheticEvent`, which normalizes behavior across browsers. You almost never need to use the native DOM event directly.

```ts
(e: React.MouseEvent<HTMLButtonElement>) => { ... } // ✅ Best practice
```
Want the native DOM event? Access it via `e.nativeEvent`.

### 📌 Common Event Types & Their Signatures

| Event Type | DOM Target Type                         | Signature Example                     |
| ---------- | --------------------------------------- | ------------------------------------- |
| `onClick`  | `HTMLButtonElement`, etc.               | `React.MouseEvent<HTMLButtonElement>` |
| `onChange` | `HTMLInputElement`, `HTMLSelectElement` | `React.ChangeEvent<HTMLInputElement>` |
| `onSubmit` | `HTMLFormElement`                       | `React.FormEvent<HTMLFormElement>`    |
| `onFocus`  | `HTMLInputElement`, etc.                | `React.FocusEvent<HTMLInputElement>`  |

### 🧪 Input Value Typing
```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const val = e.target.value; // value is typed as string automatically ✅
}
```
This ensures `e.target` has all the properties expected of an `<input>`, like `.value`, `.checked`, etc.

### 🛠 Typing Refs to DOM Elements
When using `useRef` to interact with DOM elements (e.g., focusing an input), always pass the correct HTML element type:

```tsx
const inputRef = useRef<HTMLInputElement>(null);
```
Using this typing lets you safely call methods like i`nputRef.current?.focus()` without `any` type errors.

### 🧩 Real-World Scenarios Covered in This Section

#### ✅ 1. Button Click (onClick)
Use `MouseEvent` when handling click events on buttons or other elements.

```tsx
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e.currentTarget); // Button Element
};
```

#### ✅ 2. Input Change (onChange)
Input fields emit `ChangeEvent`. Proper typing ensures `.value` is available without casting.

```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};
```

#### ✅ 3. Form Submission (onSubmit)
Use `FormEvent` on forms, and don't forget to call `e.preventDefault()`.

```tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};
```

#### ✅ 4. Input with useRef
Use `useRef<HTMLInputElement>` to access DOM methods like `.focus()`.

```tsx
const inputRef = useRef<HTMLInputElement>(null);

const handleFocus = () => {
  inputRef.current?.focus();
};
```

### 🎯 Learning Outcome
After completing this section, you should be confident in:
- Typing all major form and UI interactions
- Eliminating any `any` and casting from your event handlers
- Writing cleaner, more robust, and bug-resistant input forms

---

## 🧩 Section 3 - Hooks and Refs ([`03-hooks-and-refs`](./react-playground/src/concepts/03-hooks-and-refs/))

React hooks like `useRef`, `useEffect`, and `useReducer` are the backbone of clean, reactive, and performant components.

This section isn’t just about “how” to use these hooks—it’s about how to use them **with full type safety**, confidence, and no weird `any` or casting hacks.

### 🎯 What You'll Learn

- Properly typing `useRef()` for **DOM elements** and **mutable values**
- How to write **type-safe dependencies** inside `useEffect`
- Typing complex `useReducer` logic with **discriminated union patterns**

### 📌 Typing `useRef`

There are 2 main use cases for `useRef`:

#### 1. Referencing a DOM Element

```tsx
const inputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  inputRef.current?.focus();
}, []);
```
💡 **Why type it?** So you get safe `.focus()`, `.value`, `.blur()`, etc., without casting.

#### 2. Storing Mutable Values (like instance variables)
```tsx
const countRef = useRef<number>(0); // Mutable, but doesn't trigger rerenders

useEffect(() => {
  countRef.current += 1;
}, []);
```
This is useful for tracking state **outside the render cycle**.

### 📌 Typing `useEffect`

`useEffect` doesn't need special typing, but the **dependencies** must be accurately referenced to avoid stale closures, re-renders and bugs.

```tsx
useEffect(() => {
  const handle = (value: number) => {
    console.log(value);
  };

  handle(countRef.current);
}, []);
```
💡 Don’t ignore lint warnings about dependencies, they’re almost always right.

### 📌 Typing `useReducer`
`useReducer` is ideal for managing complex state transitions, especially when:
- You have multiple related state fields
- State updates depend on current state
- You want explicit control flow via actions

```tsx
type State = {
  count: number;
  loading: boolean;
};

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'setLoading'; payload: boolean };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'setLoading':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
```
```tsx
const [state, dispatch] = useReducer(reducer, {
  count: 0,
  loading: false,
});
```
💡 Each action is strictly typed and TypeScript narrows the type inside `switch` no `if (action.type === ...) && action.payload && typeof payload === ...` needed!

### 🧪 Real-World Hook Examples

#### ✅ useRef with `video`, `form`, `canvas`
```tsx
const canvasRef = useRef<HTMLCanvasElement>(null);
```

#### ✅ useEffect fetching logic
```tsx
useEffect(() => {
  let isMounted = true;
  fetchData().then((data) => {
    if (isMounted) setData(data);
  });
  return () => {
    isMounted = false;
  };
}, []);
```

#### ✅ useReducer for form state
```tsx
type FormState = { name: string; email: string };
type FormAction = { type: 'update'; field: keyof FormState; value: string };

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'update':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};
```

### Summary
| Hook         | Type Strategy                      | When to Use                            |
| ------------ | ---------------------------------- | -------------------------------------- |
| `useRef`     | `<HTMLInputElement>` or `<number>` | Access DOM or store mutable values     |
| `useEffect`  | Use correct dependencies           | Side effects and cleanup logic         |
| `useReducer` | Discriminated unions for actions   | Complex state management & transitions |

### Learning Outcomes
By now, you should:
- Know when to use `useRef`, `useEffect`, and `useReducer`
- Be able to fully type them, DOM refs, dependencies, state transitions
- Feel confident handling hooks like a **senior developer**

---

## 🧩 Section 4 - Context API ([`04-context-api`](./react-playground/src/concepts/04-context-api/))

In this section, we're going beyond prop drilling. With the **Context API**, we can share state across the component tree,
and when paired with TypeScript, it becomes a robust, type-safe pattern for building scalable applications.

No more guessing what a context provides. TypeScript ensures you always get the right value, the right shape, at the right time.

---

### 🚀 What You’ll Learn
By the end of this section, you'll be able to:
- Create a **typed context object** (no more `undefined as any`)
- Define and enforce the structure of context values
- Provide and consume context with full **IntelliSense**
- Avoid pitfalls like undefined context values and misuse of the provider

### 🧱 Core Concepts Covered

#### 1. Creating a Typed Context Object
Using `React.createContext`, we define the structure of our context using interfaces or type aliases, ensuring that consumers of the context know *exactly* what they're getting.

```tsx
type ThemeContextType = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);
```
> 🔍 We set `undefined` as default to force usage inside a `<Provider>`.

#### 2. Typing the Provider Props
Context Providers wrap children and inject values. TypeScript ensures the correct types flow through the tree.

```tsx
type ThemeProviderProps = {
  children: React.ReactNode;
};
```

#### 3. Consuming the Context
When using `useContext`, we check for `undefined` (in case someone forgets the provider) and provide typed access.

```tsx
const useTheme = (): ThemeContextType => {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
```
> ✅ Pro tip: Always wrap context in a custom hook to encapsulate the error check and avoid duplication.

### ⚠️ Gotchas & Best Practices
- ❌ Don't skip the `undefined` check in consumers
- ✅ Use union types when your context has multiple possible states
- ✅ Always provide a default value in the context creation
- ✅ Use custom hooks to encapsulate context logic and avoid repetitive code

---