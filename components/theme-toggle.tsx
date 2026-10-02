"use client";

import { useEffect, useState } from "react";

type PresentationTheme = "dark" | "light";
const STORAGE_KEY = "azevsm-theme";

function applyTheme(theme: PresentationTheme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<PresentationTheme>("dark");

  useEffect(() => {
    const initial: PresentationTheme =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const next: PresentationTheme = theme === "dark" ? "light" : "dark";

  const toggle = () => {
    applyTheme(next);
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Presentation preference remains active for the current page even when storage is unavailable.
    }
  };

  return (
    <button
      className="presentation-theme-toggle"
      type="button"
      aria-label={`Presentation mode: ${theme}. Switch to ${next}.`}
      aria-pressed={theme === "light"}
      onClick={toggle}
    >
      <span className="presentation-theme-option presentation-theme-option--dark">DARK</span>
      <span className="presentation-theme-separator" aria-hidden="true">/</span>
      <span className="presentation-theme-option presentation-theme-option--light">LIGHT</span>
    </button>
  );
}
