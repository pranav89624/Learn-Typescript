import { useState } from "react";

type Theme = "light" | "dark" | "system";

type ThemeConfig = Record<Theme, string>;

const themes: ThemeConfig = {
  light: "Light 🌞",
  dark: "Dark 🌙",
  system: "System 🖥️",
};

const ThemeSwitcher = () => {
  const [current, setCurrent] = useState<Theme>("system");

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">🎨 Theme Switcher (Record)</h2>
      <div className="flex flex-col gap-2">
        {Object.entries(themes).map(([key, label]) => (
          <button
            key={key}
            className={`px-3 py-1 rounded text-left ${current === key ? "bg-indigo-500 text-white" : "bg-gray-200 text-black"}`}
            onClick={() => setCurrent(key as Theme)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
