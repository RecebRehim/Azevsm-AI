"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageMenu } from "@/components/language-menu";
import { localePath, type Locale } from "@/lib/i18n";
import type { SiteCopy } from "@/lib/content/copy";
import { publicServices } from "@/lib/content/services";
import { authorityRouteLabels, isAuthorityLocale } from "@/lib/content/authority-pages-v31";

export function Footer({ locale, copy }: { locale: Locale; copy: SiteCopy; path?: string }) {
  const path = usePathname() || `/${locale}`;
  const services = publicServices(locale);
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h2>Azevsm Systems</h2>
            <p>{copy.footerAbout}</p>
          </div>
          <div>
            <h2>{copy.footerNav}</h2>
            <ul>
              <li><Link href={localePath(locale, "/platform")}>{copy.nav.platform}</Link></li>
              <li><Link href={localePath(locale, "/technology")}>{copy.nav.technology}</Link></li>
              <li><Link href={localePath(locale, "/white-box")}>{copy.nav.whitebox}</Link></li>
              <li><Link href={localePath(locale, "/trust")}>{copy.nav.trust}</Link></li>
              {isAuthorityLocale(locale) ? (
                <>
                  <li><Link href={localePath(locale, "/result-system")}>{authorityRouteLabels[locale].resultSystem}</Link></li>
                  <li><Link href={localePath(locale, "/how-azevsmai-is-different")}>{authorityRouteLabels[locale].difference}</Link></li>
                  <li><Link href={localePath(locale, "/index-field-investor-ecosystem")}>{authorityRouteLabels[locale].indexField}</Link></li>
                </>
              ) : null}
            </ul>
          </div>
          <div>
            <h2>{copy.footerProducts}</h2>
            <ul>
              <li><Link href={localePath(locale, "/products/azevsm-index")}>Azevsm Index</Link></li>
              <li><Link href={localePath(locale, "/products/azevsm-institutional-index")}>Azevsm Institutional Index</Link></li>
              <li><Link href={localePath(locale, "/products/azevsm-plus")}>Azevsm Plus</Link></li>
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={localePath(locale, `/products/azevsm-plus/${service.slug}`)}>{service.labels[locale]}</Link>
                </li>
              ))}
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
              {isAuthorityLocale(locale) ? (
                <>
                  <li><Link href={localePath(locale, "/validation-reproducibility")}>{authorityRouteLabels[locale].validation}</Link></li>
                  <li><Link href={localePath(locale, "/data-security")}>{authorityRouteLabels[locale].dataSecurity}</Link></li>
                  <li><Link href={localePath(locale, "/legal-compliance")}>{authorityRouteLabels[locale].legalCompliance}</Link></li>
                </>
              ) : null}
              <li><Link href={localePath(locale, "/legal/accessibility")}>{copy.accessibility}</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>{copy.footerRights}</span>
          <LanguageMenu locale={locale} path={path} label={copy.language} />
        </div>
      </div>
    </footer>
  );
}
