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