"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageMenu } from "@/components/language-menu";
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
        {locale === "ru" ? <RuLanguageAccess path={path} /> : null}
        <div className="header-utilities">
          {locale !== "ru" ? <LanguageMenu locale={locale} path={path} label={copy.language} /> : null}
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
    </header>
  );
}


const ruDirectLanguages: Locale[] = ["ru", "en", "az"];
const ruAdditionalLanguages = [
  { code: "AR", name: "Arabic" },
  { code: "ZH", name: "Chinese (Simplified)" },
  { code: "TR", name: "Turkish" },
  { code: "TK", name: "Turkmen" },
  { code: "UZ", name: "Uzbek" },
  { code: "KY", name: "Kyrgyz" },
  { code: "KK", name: "Kazakh" },
  { code: "DE", name: "German" },
  { code: "IT", name: "Italian" },
  { code: "FR", name: "French" },
] as const;

function RuLanguageAccess({ path }: { path: string }) {
  return (
    <div className="ru-language-access">
      <nav className="ru-primary-locales" aria-label="Основные языки">
        {ruDirectLanguages.map((item) => {
          const meta = localeMeta[item];
          return (
            <Link
              key={item}
              href={swapLocale(path, item)}
              hrefLang={meta.hreflang}
              lang={meta.htmlLang}
              aria-current={item === "ru" ? "true" : undefined}
            >
              {item.toUpperCase()}
            </Link>
          );
        })}
      </nav>
      <details className="ru-language-more">
        <summary>Языки</summary>
        <div className="ru-language-panel" aria-label="Дополнительные языки">
          {ruAdditionalLanguages.map((item) => (
            <div className="ru-language-pending" key={item.code}>
              <span>{item.code}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}
