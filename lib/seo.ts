import type { Metadata } from "next";
import { localeMeta, locales, localePath, type Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/content/copy";
import { siteUrl } from "@/lib/site";

export function pageMetadata(locale: Locale, path: string, title?: string, description?: string): Metadata {
  const copy = getCopy(locale);
  const meta = localeMeta[locale];
  const site = siteUrl();
  const url = new URL(localePath(locale, path), site).toString();
  const languages = Object.fromEntries(locales.map((item) => [localeMeta[item].hreflang, new URL(localePath(item, path), site).toString()]));
  return {
    title: title ? `${title} · ${copy.metaTitle}` : copy.metaTitle,
    description: description || copy.metaDescription,
    alternates: { canonical: url, languages },
    openGraph: { title: title || copy.metaTitle, description: description || copy.metaDescription, url, locale: meta.og, type: "website" },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AzevsmAI Systems",
    url: siteUrl(),
  };
}
