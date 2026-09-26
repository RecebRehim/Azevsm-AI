import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { RuPilotHero } from "@/components/ru-pilot-hero";
import { getCopy } from "@/lib/content/copy";
import { isLocale, locales, localePath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) => ["traceability", "boundaries"].map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const item = getCopy(locale).insightItems.find((entry) => entry[0] === slug);
  if (!item) return {};
  return pageMetadata(locale, `/insights/${slug}`, item[1], item[2]);
}

export default async function InsightPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);
  const item = copy.insightItems.find((entry) => entry[0] === slug);
  if (!item) notFound();

  if (locale === "ru") {
    return (
      <>
        <RuPilotHero kind={slug === "traceability" ? "technology" : "trust"} title={item[1]} lead={item[2]} />
        <section className="section-tight ru-authority-section">
          <div className="wrap ru-insight-detail">
            <div className="ru-insight-detail-copy">
              <p>{copy.whiteLead}</p>
              <p>{copy.aiFormula}</p>
            </div>
            <Link className="text-link" href={localePath(locale, "/insights")}>{copy.insightsTitle}</Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageIntro title={item[1]} lead={item[2]} />
      <section className="section-tight">
        <div className="wrap prose">
          <p>{copy.whiteLead}</p>
          <p>{copy.aiFormula}</p>
          <Link href={localePath(locale, "/insights")}>{copy.insightsTitle}</Link>
        </div>
      </section>
    </>
  );
}
