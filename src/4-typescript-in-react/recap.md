# 🧠 TypeScript in React – Recap
This recap distills the key patterns and syntax you need to confidently use **TypeScript with React** in real world apps. Refer to it anytime you need a refresher or quick mental model.

## 📦 1. Typing Component Props & State

### ✅ Props
```tsx
type Props = { title: string; optionalText?: string };
const Header: React.FC<Props> = ({ title, optionalText }) => ...
```

### ✅ Children prop
```tsx
type Props = { children: React.ReactNode };
```

### ✅ useState
```tsx
const [count, setCount] = useState<number>(0);
```

## 🔁 2. Event Handling & Form Types

### ✅ onClick, onChange, onSubmit
```tsx
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => { ... };
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { ... };
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); ... };
```

### ✅ event.target typing
```tsx
const value = (e.target as HTMLInputElement).value;
```

## 🧠 3. useRef, useEffect, useReducer

### ✅ useRef
```tsx
const inputRef = useRef<HTMLInputElement>(null);
```

### ✅ useEffect with dependencies
```tsx
useEffect(() => { ... }, [someVar]);
```

### ✅ useReducer with discriminated unions
```tsx
type Action = { type: 'increment' } | { type: 'decrement' };
type State = { count: number };
```

## 🗂️ 4. Context API

### ✅ Typed Context
```tsx
type Theme = 'light' | 'dark';
const ThemeContext = React.createContext<Theme | undefined>(undefined);
```

### ✅ useContext safely
```tsx
const theme = useContext(ThemeContext);
if (!theme) throw new Error("Must be used within provider");
```

## 🧰 5. Custom Hooks with Generics

### ✅ useFetch<T>
```tsx
function useFetch<T>(url: string): { data: T | null, loading: boolean, error: string | null } { ... }
```

## 🔄 6. Component Composition

### ✅ Passing components as props
```tsx
type Props = { render: () => JSX.Element };
```

### ✅ Conditional children types
```tsx
type Props = { children: React.ReactNode | (() => JSX.Element) };
```

## 🔎 7. Typing External Data

### ✅ Axios response
```tsx
const res = await axios.get<User[]>('/api/users');
```

### ✅ Safe access
```tsx
if (data?.user?.name) { ... }
```

## 🧪 8. Practical Utility Types

| Utility        | Use Case Example        |
| -------------- | ----------------------- |
| `Partial<T>`   | Allow optional updates  |
| `Pick<T, K>`   | Extract specific fields |
| `Omit<T, K>`   | Remove fields from type |
| `Record<K, T>` | Map values to a key set |

```tsx
type ThemeMap = Record<'light' | 'dark', ThemeDetails>;
```

## ✅ Final Advice
- Avoid `any` like the plague, use `unknown`, union types, or `never` for tight safety.
- Name your types clearly (`UserProps`, `ThemeType`) — clarity > cleverness.
- Use `as const` and type inference where needed — don't over-engineer.

## 🔍 Self-Check Questions
Test yourself on what you've learned. No peeking!

1. What’s the difference between `React.FC<Props>` and using a plain function component with typed props?

2. How do you type a `useRef` that holds a DOM element?

3. What’s the correct type for a `handleChange` function in an input?

4. What’s the advantage of using discriminated unions in `useReducer`?

5. How do you ensure a custom hook like `useFetch<T>` remains generic and flexible?

6. Why is it safer to wrap `useContext` return values with a check?

7. How would you type a prop that takes a React component as an argument?

8. What’s the use of `Partial<T>` in updating state or props?

9. Why might `Record<string, string>` be better than just `{ [key: string]: string }`?

10. How do you handle missing or optional fields when working with API data?

Find answers of the questions in the [`quiz-answers.md`](./quiz-answers.md). If you struggled with any, revisit those topics!

## 📝 Conclusion
This recap provides a solid foundation for using TypeScript in React applications. Keep it handy as you build and maintain your projects, and refer back to it whenever you need a quick reminder of best practices and patterns. Happy coding! 🚀