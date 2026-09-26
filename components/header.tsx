"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageMenu } from "@/components/language-menu";
import { Flag } from "@/components/flag";
import { Logo } from "@/components/logo";
import type { SiteCopy } from "@/lib/content/copy";
import { localeMeta, localePath, swapLocale, type Locale } from "@/lib/i18n";
import { platformEntryUrl } from "@/lib/platform";

export function Header({ locale, copy }: { locale: Locale; copy: SiteCopy; path?: string }) {
  const path = usePathname() || `/${locale}`;
  const [open, setOpen] = useState(false);
  const entry = platformEntryUrl();
  const enterHref = entry ?? localePath(locale, "/enter");
  const close = () => setOpen(false);
  const links = [
    { href: "/platform", label: copy.nav.platform },
    { href: "/products", label: copy.nav.products },
    { href: "/technology", label: copy.nav.technology },
    { href: "/white-box", label: copy.nav.whitebox },
    { href: "/trust", label: copy.nav.trust },
    { href: "/company", label: copy.nav.company },
  ];

  return (
    <header className={`site-header${locale === "ru" ? " ru-pilot-site-header" : ""}`}>
      <div className={`wrap header-inner${open ? " is-open" : ""}`}>
        <Link className="wordmark" href={localePath(locale)} onClick={close}>
          <Logo variant="mark" title={copy.logoTitle} />
          <span className="wordmark-text">
            <strong>Azevsm</strong>
            <span>Systems</span>
          </span>
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen((value) => !value)}>
          {open ? copy.close : copy.menu}
        </button>
        <nav id="site-nav" className="nav-main" aria-label={copy.footerNav}>
          <Link href={localePath(locale)} aria-current={path === `/${locale}` ? "page" : undefined} onClick={close}>
            {copy.nav.home}
          </Link>
          {links.map((item) => (
            <Link
              key={item.href}
              href={localePath(locale, item.href)}
              aria-current={path === `/${locale}${item.href}` || path.startsWith(`/${locale}${item.href}/`) ? "page" : undefined}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-utilities">
          <LanguageMenu locale={locale} path={path} label={copy.language} />
          {locale !== "ru" ? (
            <Link className="btn btn-ghost btn-compact" href={localePath(locale, "/contact")}>
              {copy.contactCta}
            </Link>
          ) : null}
          <a className="btn btn-primary btn-compact" href={enterHref} {...(entry ? { rel: "noreferrer" } : {})}>
            {copy.enter}
            <svg className="icon icon-dir" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </div>
      {locale === "ru" ? <RuMobileLanguages path={path} /> : null}
    </header>
  );
}


const ruLanguageOrder: Locale[] = ["ru", "en", "az", "ar", "zh"];

function RuMobileLanguages({ path }: { path: string }) {
  return (
    <nav className="ru-mobile-languages wrap" aria-label="Языки">
      {ruLanguageOrder.map((item) => {
        const meta = localeMeta[item];
        return (
          <Link
            key={item}
            href={swapLocale(path, item)}
            hrefLang={meta.hreflang}
            lang={meta.htmlLang}
            className="ru-mobile-language-link"
          >
            <Flag locale={item} />
            <span>{item.toUpperCase()}</span>
          </Link>
        );
      })}
    </nav>
  );
}
