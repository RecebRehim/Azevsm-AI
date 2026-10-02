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
      <svg className="presentation-theme-icon presentation-theme-icon--moon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 15.2A8.5 8.5 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z" />
      </svg>
      <svg className="presentation-theme-icon presentation-theme-icon--sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
      </svg>
    </button>
  );
}
