import { createContext, useEffect } from "react";
import React from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const ThemeContext = createContext({});
const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useLocalStorage("samahPortfolioMode", "light");
  
  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    theme === "dark"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  });
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export { ThemeContextProvider, ThemeContext };
