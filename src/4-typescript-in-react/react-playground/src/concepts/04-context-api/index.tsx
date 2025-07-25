import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

// Entry point for this concept
const ContextApiExample = () => {
  return (
    <ThemeProvider>
      <h1 className="text-2xl font-bold">Context API Example</h1>
      <div className="flex items-center justify-center bg-gray-100">
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default ContextApiExample;