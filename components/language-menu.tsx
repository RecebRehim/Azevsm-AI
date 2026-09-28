"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Flag } from "@/components/flag";
import { isContentLocale, localeMeta, siteLocales, swapLocale, type Locale } from "@/lib/i18n";

export function LanguageMenu({ locale, path, label }: { locale: Locale; path: string; label: string }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const current = localeMeta[locale];

  useEffect(() => {
    if (!open) return;
    function onPointer(event: MouseEvent) {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="menu" ref={root}>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={label}
        onClick={() => setOpen((value) => !value)}
      >
        <Flag locale={locale} />
        <span>{current.name}</span>
        <Chevron />
      </button>
      {open ? (
        <div className="menu-panel" id={menuId} role="menu" aria-label={label}>
          {siteLocales.map((item) => {
            const meta = localeMeta[item];
            if (!isContentLocale(item)) {
              return (
                <div className="menu-language-pending" key={item} role="menuitem" aria-disabled="true">
                  <span className="menu-language-code">{meta.label}</span>
                  <span>{meta.name}</span>
                </div>
              );
            }
            return (
              <Link
                key={item}
                role="menuitem"
                href={swapLocale(path, item)}
                hrefLang={meta.hreflang}
                lang={meta.htmlLang}
                aria-current={item === locale ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                <Flag locale={item} />
                <span>{meta.name}</span>
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function Chevron() {
  return (
    <svg className="icon icon-dir chevron" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
