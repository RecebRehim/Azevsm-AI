import type { MetadataRoute } from "next";
import { locales, localePath } from "@/lib/i18n";
import { publicServices } from "@/lib/content/services";
import { siteUrl } from "@/lib/site";

const paths = ["", "/platform", "/products", "/products/azevsm-index", "/products/azevsm-institutional-index", "/products/azevsm-plus", "/technology", "/white-box", "/trust", "/company", "/insights", "/insights/traceability", "/insights/boundaries", "/contact", "/enter", "/legal/privacy", "/legal/terms", "/legal/cookies", "/legal/security", "/legal/accessibility"];

export default function sitemap(): MetadataRoute.Sitemap {
  const site = siteUrl();
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const path of paths) {
      entries.push({
        url: new URL(localePath(locale, path), site).toString(),
        alternates: { languages: Object.fromEntries(locales.map((item) => [item, new URL(localePath(item, path), site).toString()])) },
      });
    }
    for (const service of publicServices(locale)) {
      const path = `/products/azevsm-plus/${service.slug}`;
      entries.push({ url: new URL(localePath(locale, path), site).toString() });
    }
  }
  return entries;
}
