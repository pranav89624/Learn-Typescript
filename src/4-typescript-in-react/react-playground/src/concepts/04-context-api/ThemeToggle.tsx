import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={`p-4 w-full ${darkMode ? "bg-neutral-950 text-white" : "bg-white text-black"}`}>
      <p>The current theme is: <strong>{darkMode ? "Dark" : "Light"}</strong></p>
      <button
        onClick={toggleTheme}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;