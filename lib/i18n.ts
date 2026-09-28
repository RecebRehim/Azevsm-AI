/*
 * WEBSITE LOCALE ARCHITECTURE
 *
 * siteLocales = full target language contour for website-v4.
 * locales/contentLocales = languages with physically materialized website copy today.
 *
 * Adding a language to siteLocales does NOT publish translated pages.
 * A locale moves into contentLocales only after its website copy is accepted/materialized.
 */
export const siteLocales = [
  "ru",
  "en",
  "az",
  "ar",
  "zh",
  "tr",
  "tk",
  "uz",
  "ky",
  "kk",
  "de",
  "it",
  "fr",
] as const;

export type SiteLocale = (typeof siteLocales)[number];

export const contentLocales = ["az", "en", "ar", "zh", "ru"] as const;

/* Backwards-compatible alias used by existing page generation.
   It intentionally remains content-only until each locale is materialized. */
export const locales = contentLocales;
export type Locale = (typeof contentLocales)[number];

export type LocaleMeta = {
  label: string;
  flag: string;
  name: string;
  htmlLang: string;
  dir: "ltr" | "rtl";
  hreflang: string;
  og: string;
};

export const localeMeta: Record<SiteLocale, LocaleMeta> = {
  ru: { label: "RU", flag: "🇷🇺", name: "Русский", htmlLang: "ru", dir: "ltr", hreflang: "ru", og: "ru_RU" },
  en: { label: "EN", flag: "🇬🇧", name: "English", htmlLang: "en", dir: "ltr", hreflang: "en", og: "en_US" },
  az: { label: "AZ", flag: "🇦🇿", name: "Azərbaycan", htmlLang: "az", dir: "ltr", hreflang: "az", og: "az_AZ" },
  ar: { label: "AR", flag: "🇸🇦", name: "العربية", htmlLang: "ar", dir: "rtl", hreflang: "ar", og: "ar_SA" },
  zh: { label: "ZH", flag: "🇨🇳", name: "中文（简体）", htmlLang: "zh-Hans", dir: "ltr", hreflang: "zh-Hans", og: "zh_CN" },
  tr: { label: "TR", flag: "🇹🇷", name: "Türkçe", htmlLang: "tr", dir: "ltr", hreflang: "tr", og: "tr_TR" },
  tk: { label: "TK", flag: "🇹🇲", name: "Türkmençe", htmlLang: "tk", dir: "ltr", hreflang: "tk", og: "tk_TM" },
  uz: { label: "UZ", flag: "🇺🇿", name: "O‘zbekcha", htmlLang: "uz", dir: "ltr", hreflang: "uz", og: "uz_UZ" },
  ky: { label: "KY", flag: "🇰🇬", name: "Кыргызча", htmlLang: "ky", dir: "ltr", hreflang: "ky", og: "ky_KG" },
  kk: { label: "KK", flag: "🇰🇿", name: "Қазақша", htmlLang: "kk", dir: "ltr", hreflang: "kk", og: "kk_KZ" },
  de: { label: "DE", flag: "🇩🇪", name: "Deutsch", htmlLang: "de", dir: "ltr", hreflang: "de", og: "de_DE" },
  it: { label: "IT", flag: "🇮🇹", name: "Italiano", htmlLang: "it", dir: "ltr", hreflang: "it", og: "it_IT" },
  fr: { label: "FR", flag: "🇫🇷", name: "Français", htmlLang: "fr", dir: "ltr", hreflang: "fr", og: "fr_FR" },
};

export function isSiteLocale(value: string): value is SiteLocale {
  return siteLocales.includes(value as SiteLocale);
}

export function isLocale(value: string): value is Locale {
  return contentLocales.includes(value as Locale);
}

export function isPilotLocale(locale: Locale) {
  return locale === "ru" || locale === "en" || locale === "az";
}

export function localePath(locale: SiteLocale, path = "") {
  const suffix = path.startsWith("/") ? path : path ? `/${path}` : "";
  return `/${locale}${suffix}`;
}

export function swapLocale(pathname: string, next: SiteLocale) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0 || !isSiteLocale(parts[0])) return `/${next}`;
  parts[0] = next;
  return `/${parts.join("/")}`;
}
