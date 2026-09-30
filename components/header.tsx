"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageMenu } from "@/components/language-menu";
import { Logo } from "@/components/logo";
import type { SiteCopy } from "@/lib/content/copy";
import { isContentLocale, isPilotLocale, localeMeta, localePath, siteLocales, swapLocale, type Locale } from "@/lib/i18n";
import { platformEntryUrl } from "@/lib/platform";

export function Header({ locale, copy }: { locale: Locale; copy: SiteCopy; path?: string }) {
  const path = usePathname() || `/${locale}`;
  const pilotLocale = isPilotLocale(locale);
  const corporateHome = locale === "ru" && path === "/ru";
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
    ...(locale === "ru"
      ? [
          { href: "/data-security", label: "Безопасность данных" },
          { href: "/legal-compliance", label: "Право и комплаенс" },
        ]
      : []),
    { href: "/company", label: copy.nav.company },
    { href: "/search", label: locale === "ru" ? "Поиск" : locale === "az" ? "Axtarış" : locale === "en" ? "Search" : locale === "ar" ? "بحث" : "搜索" },
  ];
  const visibleLinks = corporateHome
    ? links.filter((item) => ["/platform", "/products", "/technology", "/trust", "/data-security", "/company"].includes(item.href))
    : links;

  return (
    <header className={`site-header${pilotLocale ? " ru-pilot-site-header" : ""}${corporateHome ? " ru-corporate-home-header" : ""}`}>
      <div className={`wrap header-inner${open ? " is-open" : ""}`}>
        <Link className="wordmark" href={localePath(locale)} onClick={close}>
          <Logo variant="mark" title={copy.logoTitle} />
          <span className="wordmark-text">
            <strong>Azevsm</strong>
            <span>Systems</span>
          </span>
        </Link>
        <Link
          className="site-search-trigger"
          href={localePath(locale, "/search")}
          aria-label={locale === "ru" ? "Поиск по сайту" : locale === "az" ? "Saytda axtarış" : locale === "en" ? "Search the site" : locale === "ar" ? "البحث في الموقع" : "站内搜索"}
          onClick={close}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen((value) => !value)}>
          {corporateHome ? (
            <>
              <span className="sr-only">{open ? copy.close : copy.menu}</span>
              <svg className="ru-home-menu-icon" viewBox="0 0 28 28" aria-hidden="true">
                {open ? <path d="M6 6l16 16M22 6 6 22" /> : <path d="M4 7h20M4 14h20M4 21h20" />}
              </svg>
            </>
          ) : locale === "az" ? copy.menu : open ? copy.close : copy.menu}
        </button>
        <nav id="site-nav" className="nav-main" aria-label={copy.footerNav}>
          <Link href={localePath(locale)} aria-current={path === `/${locale}` ? "page" : undefined} onClick={close}>
            {copy.nav.home}
          </Link>
          {visibleLinks.map((item) => (
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
        {pilotLocale ? <RuLanguageAccess path={path} locale={locale} label={copy.language} compact={corporateHome} /> : null}
        <div className="header-utilities">
          {!pilotLocale ? <LanguageMenu locale={locale} path={path} label={copy.language} /> : null}
          {!pilotLocale ? (
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


const ruDirectLanguages: readonly Locale[] = ["ru", "en", "az"];
const ruAdditionalLanguages = siteLocales.filter((item) => !ruDirectLanguages.includes(item as Locale));

function RuLanguageAccess({ path, locale, label, compact = false }: { path: string; locale: Locale; label: string; compact?: boolean }) {
  const moreLabel = compact ? locale.toUpperCase() : locale === "ru" ? "Языки" : locale === "az" ? "Dillər" : "Languages";
  return (
    <div className={`ru-language-access${compact ? " ru-language-access--compact" : ""}`}>
      <nav className="ru-primary-locales" aria-label={label}>
        {ruDirectLanguages.map((item) => {
          const meta = localeMeta[item];
          return (
            <Link
              key={item}
              href={swapLocale(path, item)}
              hrefLang={meta.hreflang}
              lang={meta.htmlLang}
              aria-current={item === locale ? "true" : undefined}
            >
              {item.toUpperCase()}
            </Link>
          );
        })}
      </nav>
      <details className="ru-language-more">
        <summary>{moreLabel}</summary>
        <div className="ru-language-panel" aria-label={moreLabel}>
          {ruAdditionalLanguages.map((item) => {
            const meta = localeMeta[item];
            if (isContentLocale(item)) {
              return (
                <Link
                  key={item}
                  href={swapLocale(path, item)}
                  hrefLang={meta.hreflang}
                  lang={meta.htmlLang}
                >
                  <span>{meta.label}</span>
                  <span>{meta.name}</span>
                </Link>
              );
            }
            return (
              <div className="ru-language-pending" key={item} aria-disabled="true">
                <span>{meta.label}</span>
                <span>{meta.name}</span>
              </div>
            );
          })}
        </div>
      </details>
    </div>
  );
}
