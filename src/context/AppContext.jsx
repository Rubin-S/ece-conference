import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

/**
 * AppProvider wraps your app and provides:
 *  - theme: "light" | "dark"
 *  - toggleTheme(): flips between light & dark
 */
export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // Sync <html> class & localStorage whenever theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "light" ? "dark" : "light");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

/** Custom hook for consuming context */
export const useAppContext = () => useContext(AppContext);
