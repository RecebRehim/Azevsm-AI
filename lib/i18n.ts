export const locales = ["az", "en", "ar", "zh", "ru"] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<
  Locale,
  { label: string; flag: string; name: string; htmlLang: string; dir: "ltr" | "rtl"; hreflang: string; og: string }
> = {
  az: { label: "AZ", flag: "🇦🇿", name: "Azərbaycan", htmlLang: "az", dir: "ltr", hreflang: "az", og: "az_AZ" },
  en: { label: "EN", flag: "🇬🇧", name: "English", htmlLang: "en", dir: "ltr", hreflang: "en", og: "en_US" },
  ar: { label: "AR", flag: "🇸🇦", name: "العربية", htmlLang: "ar", dir: "rtl", hreflang: "ar", og: "ar_AR" },
  zh: { label: "ZH", flag: "🇨🇳", name: "中文", htmlLang: "zh-Hans", dir: "ltr", hreflang: "zh-Hans", og: "zh_CN" },
  ru: { label: "RU", flag: "🇷🇺", name: "Русский", htmlLang: "ru", dir: "ltr", hreflang: "ru", og: "ru_RU" },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale, path = "") {
  const suffix = path.startsWith("/") ? path : path ? `/${path}` : "";
  return `/${locale}${suffix}`;
}

export function swapLocale(pathname: string, next: Locale) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0 || !isLocale(parts[0])) return `/${next}`;
  parts[0] = next;
  return `/${parts.join("/")}`;
}
