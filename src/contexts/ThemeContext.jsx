import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  // "light" === lightmode
  // "dark" === darkmode
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
