"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

const THEME_EVENT = "doctime-theme-change";

const getStoredTheme = () => {
  if (typeof window === "undefined") return "light";

  return (
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );
};

const subscribeToTheme = (callback) => {
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_EVENT, callback);
  };
};

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const theme = useSyncExternalStore(subscribeToTheme, getStoredTheme, () => "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = getStoredTheme() === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
