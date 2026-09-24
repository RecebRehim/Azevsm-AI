import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { getCopy } from "@/lib/content/copy";
import { isLocale, localePath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getCopy(locale);
  return pageMetadata(locale, "/insights", copy.insightsTitle, copy.insightsLead);
}

export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);
  return (
    <>
      <PageIntro title={copy.insightsTitle} lead={copy.insightsLead} />
      <section className="section-tight">
        <div className="wrap grid-2">
          {copy.insightItems.map(([slug, title, body]) => (
            <article className="card" key={slug}>
              <h2>{title}</h2>
              <p>{body}</p>
              <p style={{ marginTop: 12 }}><Link href={localePath(locale, `/insights/${slug}`)}>{copy.readMore}</Link></p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
