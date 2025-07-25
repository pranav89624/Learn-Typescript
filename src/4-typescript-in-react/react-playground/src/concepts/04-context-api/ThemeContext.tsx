import React, { createContext, useContext, useState } from "react";

// 1. Define the shape of your context
type ThemeContextType = {
  darkMode: boolean;
  toggleTheme: () => void;
};

// 2. Create the actual context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Create a provider component
type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 4. Create a custom hook to consume the context
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};