# ✅ TypeScript in React – Quiz Answers
These answers clarify the concepts behind each question from the recap’s self-check. Use them as a reference only *after* attempting the questions yourself.

---

### 1. What’s the difference between `React.FC<Props>` and using a plain function component with typed props?
- `React.FC<Props>` provides implicit typing for `children` and return type.
- Plain function: `const MyComponent = (props: Props) => {}` is more explicit and preferred in large codebases because:
    - Avoids unnecessary complexity (`React.FC` enforces `children` even if unused).
    - Easier to reason about return types.

### 2. How do you type a `useRef` that holds a DOM element?
```tsx
const inputRef = useRef<HTMLInputElement>(null);
```
- This ensures `inputRef.current` is correctly inferred as `HTMLInputElement | null`, allowing safe DOM operations.

### 3. What’s the correct type for a `handleChange` function in an input?
```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { ... };
```
- Use `ChangeEvent<HTMLInputElement>` for input fields.
- `e.target.value` will then have proper string typing.

### 4. What’s the advantage of using discriminated unions in `useReducer`?
- Enables strict action typing:
```tsx
type Action = { type: 'add'; payload: number } | { type: 'remove'; id: string };
```
- The reducer can switch over `action.type` and automatically narrow types for `payload`, `id`, etc.

### 5. How do you ensure a custom hook like `useFetch<T>` remains generic and flexible?

- Accept a generic parameter:
```tsx
function useFetch<T>(url: string): { data: T | null, ... }
```
- When calling:
```tsx
useFetch<User[]>('/api/users');
```
- This lets consumers define the type `T` based on their expected data.

### 6. Why is it safer to wrap `useContext` return values with a check?
- Context can return `undefined` if the component is used outside a `<Provider>`.
- Safer pattern:
```tsx
const theme = useContext(ThemeContext);
if (!theme) throw new Error("Must be used within provider");
```

### 7. How would you type a prop that takes a React component as an argument?
```tsx
type Props = {
  render: () => JSX.Element;
};
```
- Or if passing a full component:
```tsx
type Props = {
  Component: React.ComponentType<any>;
};
```

### 8. What’s the use of `Partial<T>` in updating state or props?
```tsx
Partial<User> // All props become optional
```
- Useful for patch updates:
```tsx
updateUser({ name: 'New Name' }); // doesn't need to pass full User object
```

### 9. Why might `Record<string, string>` be better than just `{ [key: string]: string }`?

- `Record<'key1' | 'key2', string>` is stricter and easier to reason about.
- Can be used with union types to constrain keys explicitly.

### 10. How do you handle missing or optional fields when working with API data?
- Use optional chaining and default values:
```tsx
const name = data?.user?.name ?? 'Guest';
```
- Prefer typing optional fields with `?` or using utility types like `Partial<T>` or conditional types.

---

If you have any further questions or need clarification on any topic, feel free to explore the [`notes.md`](./notes.md) again! Happy coding with TypeScript in React! 😊