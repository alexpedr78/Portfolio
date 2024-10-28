import { createContext, useState, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// Define light and dark theme objects
const lightTheme = {
  background: "#f0f0f0",
  color: "#333",
};

const darkTheme = {
  background: "#1e1e1e",
  color: "#f4f4f9",
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Select theme object based on current theme
  const themeObject = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themeObject}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
