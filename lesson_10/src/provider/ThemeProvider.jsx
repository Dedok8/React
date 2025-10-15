import { ThemeContext } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
