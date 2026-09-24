"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { LanguageMenu } from "@/components/language-menu";
import type { SiteCopy } from "@/lib/content/copy";
import { localePath, type Locale } from "@/lib/i18n";
import { platformEntryUrl } from "@/lib/platform";

type Item = { href: string; label: string };

export function Header({ locale, copy }: { locale: Locale; copy: SiteCopy; path?: string }) {
  const path = usePathname() || `/${locale}`;
  const [open, setOpen] = useState(false);
  const entry = platformEntryUrl();
  const enterHref = entry ?? localePath(locale, "/enter");
  const groups: { key: string; label: string; items: Item[] }[] = [
    {
      key: "platform",
      label: copy.nav.platform,
      items: [
        { href: "/platform", label: copy.nav.platform },
        { href: "/technology", label: copy.nav.technology },
        { href: "/white-box", label: copy.nav.whitebox },
      ],
    },
    {
      key: "products",
      label: copy.nav.products,
      items: [
        { href: "/products", label: copy.nav.products },
        { href: "/products/azevsm-index", label: "Azevsm Index" },
        { href: "/products/azevsm-institutional-index", label: "Azevsm Institutional Index" },
        { href: "/products/azevsm-plus", label: "Azevsm Plus" },
      ],
    },
  ];
  const company: Item[] = [
    { href: "/company", label: copy.nav.company },
    { href: "/insights", label: copy.insightsLink },
  ];

  return (
    <header className="site-header">
      <div className={`wrap header-inner${open ? " is-open" : ""}`}>
        <Link className="wordmark" href={localePath(locale)} onClick={() => setOpen(false)}>
          <strong>AzevsmAI</strong>
          <span>Systems</span>
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen((value) => !value)}>
          {open ? copy.close : copy.menu}
        </button>
        <nav id="site-nav" className="nav-main" aria-label={copy.footerNav}>
          {groups.map((group) => (
            <NavMenu key={group.key} label={group.label} items={group.items} locale={locale} path={path} onNavigate={() => setOpen(false)} />
          ))}
          <Link href={localePath(locale, "/trust")} aria-current={path.startsWith(`/${locale}/trust`) ? "page" : undefined} onClick={() => setOpen(false)}>
            {copy.nav.trust}
          </Link>
          <NavMenu label={copy.nav.company} items={company} locale={locale} path={path} onNavigate={() => setOpen(false)} />
        </nav>
        <div className="header-utilities">
          <LanguageMenu locale={locale} path={path} label={copy.language} />
          <Link className="btn btn-ghost btn-compact" href={localePath(locale, "/contact")}>
            {copy.contactCta}
          </Link>
          <a className="btn btn-primary btn-compact" href={enterHref} {...(entry ? { rel: "noreferrer" } : {})}>
            {copy.enter}
            <svg className="icon icon-dir" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </div>
    </header>
  );
}

function NavMenu({ label, items, locale, path, onNavigate }: { label: string; items: Item[]; locale: Locale; path: string; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const active = items.some((item) => path === `/${locale}${item.href}` || path.startsWith(`/${locale}${item.href}/`));

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

  function onTriggerClick() {
    const hover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (hover) return;
    setOpen((value) => !value);
  }

  return (
    <div className={`menu nav-menu${open ? " is-open" : ""}`} ref={root} onMouseLeave={() => setOpen(false)}>
      <button className="nav-trigger" type="button" aria-expanded={open} aria-controls={menuId} aria-current={active ? "page" : undefined} onClick={onTriggerClick}>
        {label}
        <svg className="icon icon-dir chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
      </button>
      <div className="menu-panel" id={menuId} role="menu">
        {items.map((item) => (
          <Link key={item.href} role="menuitem" href={localePath(locale, item.href)} aria-current={path === `/${locale}${item.href}` ? "page" : undefined} onClick={() => { setOpen(false); onNavigate(); }}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
