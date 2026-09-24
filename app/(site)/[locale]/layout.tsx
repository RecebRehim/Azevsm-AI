import { notFound } from "next/navigation";
import { Assistant } from "@/components/assistant";
import { CookieBanner } from "@/components/cookie-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getCopy } from "@/lib/content/copy";
import { isLocale, localeMeta, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const copy = getCopy(locale);
  const meta = localeMeta[locale];
  return (
    <div className="shell" lang={meta.htmlLang} dir={meta.dir}>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(meta.htmlLang)};document.documentElement.dir=${JSON.stringify(meta.dir)};`,
        }}
      />
      <a className="skip-link" href="#content">{copy.nav.home}</a>
      <Header locale={locale} copy={copy} />
      <main id="content">{children}</main>
      <Footer locale={locale} copy={copy} />
      <CookieBanner locale={locale} copy={copy} />
      <Assistant locale={locale} copy={copy} />
    </div>
  );
}
