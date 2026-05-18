"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

const THEMES = ["light", "dark", "system"];

function resolveTheme(theme) {
  if (theme !== "system") return theme;
  // system: check OS preference
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }) {
  // Start with "light" to avoid SSR mismatch
  const [theme, setTheme] = useState("light");

  /* On mount: read saved preference */
  useEffect(() => {
    const saved = localStorage.getItem("netfee-theme") || "system";
    setTheme(saved);
  }, []);

  /* Apply resolved theme to <html> whenever theme changes */
  useEffect(() => {
    const resolved = resolveTheme(theme);
    document.documentElement.setAttribute("data-theme", resolved);
    localStorage.setItem("netfee-theme", theme);
  }, [theme]);

  /* If system theme, also listen for OS preference changes */
  useEffect(() => {
    if (theme !== "system") return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      document.documentElement.setAttribute(
        "data-theme",
        mq.matches ? "dark" : "light"
      );
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
