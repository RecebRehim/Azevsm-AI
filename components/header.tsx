"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageMenu } from "@/components/language-menu";
import { Logo } from "@/components/logo";
import type { SiteCopy } from "@/lib/content/copy";
import { isContentLocale, isPilotLocale, localeMeta, localePath, siteLocales, swapLocale, type Locale } from "@/lib/i18n";
import { platformEntryUrl } from "@/lib/platform";


function CorporateHomeNavIcon({ href }: { href: string }) {
  return (
    <svg className="ru-home-nav-icon" viewBox="0 0 56 56" aria-hidden="true">
      {href === "/platform" ? (
        <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
          <path d="M8 16 28 6l20 10-20 10Z" />
          <path d="M8 25l20-10 20 10-20 10Z" opacity=".82" />
          <path d="M8 34l20-10 20 10-20 10Z" opacity=".62" />
        </g>
      ) : null}
      {href === "/products" ? (
        <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <path d="M8 45V33h7v12ZM19 45V26h7v19ZM30 45V18h7v27ZM41 45V10h7v35Z" />
          <path d="M6 47h44" opacity=".65" />
        </g>
      ) : null}
      {href === "/technology" ? (
        <g fill="none" stroke="currentColor" strokeWidth="1.55">
          <circle cx="28" cy="28" r="19" />
          <ellipse cx="28" cy="28" rx="9" ry="19" transform="rotate(23 28 28)" />
          <ellipse cx="28" cy="28" rx="19" ry="7.5" transform="rotate(-18 28 28)" />
        </g>
      ) : null}
      {href === "/trust" ? (
        <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M28 6 45 13v14c0 11-6 19-17 24-11-5-17-13-17-24V13Z" />
          <path d="m20 28 6 6 11-14" />
        </g>
      ) : null}
      {href === "/data-security" ? (
        <g fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="28" cy="13" rx="15" ry="6" />
          <path d="M13 13v28c0 4 7 7 15 7s15-3 15-7V13M13 24c0 4 7 7 15 7s15-3 15-7M13 35c0 4 7 7 15 7s15-3 15-7" />
        </g>
      ) : null}
      {href === "/legal-compliance" ? (
        <g fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
          <path d="M28 7v39M16 14h24M28 7l-7 7M28 7l7 7M14 16 7 29h14Zm28 0-7 13h14ZM15 47h26" />
        </g>
      ) : null}
      {href === "/company" ? (
        <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <circle cx="28" cy="18" r="7" />
          <circle cx="14" cy="24" r="5" />
          <circle cx="42" cy="24" r="5" />
          <path d="M16 46c0-9 5-15 12-15s12 6 12 15M3 45c0-7 4-12 11-12 4 0 7 1 9 4M53 45c0-7-4-12-11-12-4 0-7 1-9 4" />
        </g>
      ) : null}
    </svg>
  );
}

export function Header({ locale, copy }: { locale: Locale; copy: SiteCopy; path?: string }) {
  const path = usePathname() || `/${locale}`;
  const pilotLocale = isPilotLocale(locale);
  const corporateNav = locale === "ru";
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
  const visibleLinks = corporateNav
    ? links.filter((item) => ["/platform", "/products", "/technology", "/trust", "/data-security", "/legal-compliance", "/company"].includes(item.href))
    : links;

  return (
    <header className={`site-header${pilotLocale ? " ru-pilot-site-header" : ""}${corporateNav ? " ru-corporate-home-header" : ""}`}>
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
          {corporateNav ? (
            <>
              <span className="sr-only">{open ? copy.close : copy.menu}</span>
              <svg className="ru-home-menu-icon" viewBox="0 0 28 28" aria-hidden="true">
                {open ? <path d="M6 6l16 16M22 6 6 22" /> : <path d="M4 7h20M4 14h20M4 21h20" />}
              </svg>
            </>
          ) : locale === "az" ? copy.menu : open ? copy.close : copy.menu}
        </button>
        <nav id="site-nav" className="nav-main" aria-label={copy.footerNav}>
          {!corporateNav ? (
            <Link href={localePath(locale)} aria-current={path === `/${locale}` ? "page" : undefined} onClick={close}>
              {copy.nav.home}
            </Link>
          ) : null}
          {visibleLinks.map((item) => (
            <Link
              className={corporateNav ? "ru-home-nav-link" : undefined}
              key={item.href}
              href={localePath(locale, item.href)}
              aria-current={path === `/${locale}${item.href}` || path.startsWith(`/${locale}${item.href}/`) ? "page" : undefined}
              onClick={close}
            >
              {corporateNav ? <CorporateHomeNavIcon href={item.href} /> : null}
              <span className={corporateNav ? "ru-home-nav-label" : undefined}>{item.label}</span>
              {corporateNav ? <span className="ru-home-nav-chevron" aria-hidden="true">›</span> : null}
            </Link>
          ))}
          {corporateNav ? (
            <>
              <a className="ru-home-mobile-enter" href={enterHref} onClick={close} {...(entry ? { rel: "noreferrer" } : {})}>
                <span>{copy.enter}</span><span aria-hidden="true">→</span>
              </a>
              <div className="ru-home-mobile-locales" aria-label={copy.language}>
                {(["ru", "en", "az"] as const).map((item) => {
                  const meta = localeMeta[item];
                  return (
                    <Link
                      key={item}
                      href={swapLocale(path, item)}
                      hrefLang={meta.hreflang}
                      lang={meta.htmlLang}
                      aria-current={item === locale ? "true" : undefined}
                      onClick={close}
                    >
                      {item.toUpperCase()}
                    </Link>
                  );
                })}
              </div>
            </>
          ) : null}
        </nav>
        {pilotLocale ? <RuLanguageAccess path={path} locale={locale} label={copy.language} compact={corporateNav} /> : null}
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
