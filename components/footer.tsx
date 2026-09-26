"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageMenu } from "@/components/language-menu";
import { Logo } from "@/components/logo";
import { localePath, type Locale } from "@/lib/i18n";
import type { SiteCopy } from "@/lib/content/copy";

export function Footer({ locale, copy }: { locale: Locale; copy: SiteCopy; path?: string }) {
  const path = usePathname() || `/${locale}`;
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <Logo variant="mark" title={copy.logoTitle} size={36} />
              <span className="wordmark-text">
                <strong>Azevsm</strong>
                <span>Systems</span>
              </span>
            </div>
            <p>{copy.footerAbout}</p>
          </div>
          <div>
            <h2>{copy.footerNav}</h2>
            <ul>
              <li><Link href={localePath(locale, "/platform")}>{copy.nav.platform}</Link></li>
              <li><Link href={localePath(locale, "/technology")}>{copy.nav.technology}</Link></li>
              <li><Link href={localePath(locale, "/white-box")}>{copy.nav.whitebox}</Link></li>
              <li><Link href={localePath(locale, "/trust")}>{copy.nav.trust}</Link></li>
            </ul>
          </div>
          <div>
            <h2>{copy.footerProducts}</h2>
            <ul>
              <li><Link href={localePath(locale, "/products/azevsm-index")}>Azevsm Index</Link></li>
              <li><Link href={localePath(locale, "/products/azevsm-institutional-index")}>Azevsm Institutional Index</Link></li>
              <li><Link href={localePath(locale, "/products/azevsm-plus")}>Azevsm Plus</Link></li>
            </ul>
          </div>
          <div>
            <h2>{copy.footerCompany}</h2>
            <ul>
              <li><Link href={localePath(locale, "/company")}>{copy.nav.company}</Link></li>
              <li><Link href={localePath(locale, "/insights")}>{copy.insightsLink}</Link></li>
              <li><Link href={localePath(locale, "/contact")}>{copy.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h2>{copy.footerTrust}</h2>
            <ul>
              <li><Link href={localePath(locale, "/legal/privacy")}>{copy.privacy}</Link></li>
              <li><Link href={localePath(locale, "/legal/terms")}>{copy.terms}</Link></li>
              <li><Link href={localePath(locale, "/legal/cookies")}>{copy.cookies}</Link></li>
              <li><Link href={localePath(locale, "/legal/security")}>{copy.security}</Link></li>
              <li><Link href={localePath(locale, "/legal/accessibility")}>{copy.accessibility}</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} {copy.footerRights}</span>
          <LanguageMenu locale={locale} path={path} label={copy.language} />
        </div>
      </div>
    </footer>
  );
}
