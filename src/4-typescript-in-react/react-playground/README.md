# 🌠 React TypeScript Playground

This folder serves as a **minimal React + TypeScript + Tailwind CSS sandbox** to experiment with and visualize different TypeScript concepts in the context of a real React environment.

---

## 🎯 Purpose

This is not a full app, it's a **learning utility** to test TypeScript features in React like:

- Props and State typing
- Events and forms
- Context API and hooks
- Type inference, guards, discriminated unions, etc.
- Component typing, generic props, and more

Each concept is separated into its own file or folder inside the `/src/concepts/` folder.

---

## 🚀 Getting Started

> 📦 You must have `Node.js` installed.

```bash
cd react-playground
npm install
npm run dev
```
The app will run on: http://localhost:5173


## 📂 Folder Structure

``` plaintext
react-playground/
├── index.html
├── package.json                 ← Project metadata and dependencies
├── tsconfig.json                ← TypeScript configuration
├── tsconfig.node.json
├── tsconfig.app.json
├── vite.config.ts               ← Vite configuration  
├── README.md                    ← This file
├── src/
│   ├── App.tsx                  ← Switch between concepts here
│   ├── main.tsx
│   ├── index.css                ← Tailwind base styles
│   ├── vite-env.d.ts            ← Adds Vite aware types globally
│   └── concepts/
│       ├── 01-props-and-state.tsx
│       ├── 02-events-and-forms.tsx
│       └── ...
```

## 🎨 Tailwind CSS Usage

> Tailwind is used only for basic **styling** and **layout**, to make the components visually easier to read.<br>
> This is **not a Tailwind tutorial**, no Tailwind utility class explanations are provided.

If you want to learn Tailwind, check out the [Tailwind CSS documentation](https://tailwindcss.com/docs/installation).

## 📌 How to Use
1. Browse the `src/concepts/` folder.
2. Import any concept component in `App.tsx` like:
    ```tsx
    import PropsExample from './concepts/01-props-and-state';
    function App() {
      return <PropsExample />;
    }
    ```
3. Swap out the imported file as you move through different topics.

## ✅ Prerequisites
This assumes you already have:
- A solid understanding of React basics
- Basic familiarity with TypeScript
- Node.js and npm installed

## 📚 Resources
- [React Documentation](https://react.dev/learn)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)
