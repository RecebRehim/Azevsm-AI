import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { getCopy, type SiteCopy } from "@/lib/content/copy";
import { isLocale, localePath, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const slugs = ["azevsm-index", "azevsm-institutional-index"] as const;

function product(copy: SiteCopy, slug: string) {
  if (slug === "azevsm-index") return { title: copy.indexTitle, lead: copy.indexLead };
  if (slug === "azevsm-institutional-index") return { title: copy.instTitle, lead: copy.instLead };
  return null;
}

export function generateStaticParams() {
  return ["az", "en", "ar", "zh", "ru"].flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const item = product(getCopy(locale), slug);
  if (!item) return {};
  return pageMetadata(locale, `/products/${slug}`, item.title, item.lead);
}

export default async function ProductPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);
  const item = product(copy, slug);
  if (!item) notFound();
  const sections: [string, string][] = [
    [copy.forWhom, copy.audienceLead],
    [copy.problem, copy.problemLead],
    [copy.receives, item.lead],
    [copy.evidence, copy.serviceTemplate.evidence],
    [copy.resultMeans, copy.serviceTemplate.result],
    [copy.traceability, copy.serviceTemplate.trust],
  ];
  return (
    <>
      <PageIntro title={item.title} lead={item.lead} />
      <section className="section-tight">
        <div className="wrap prose">
          <p className="note">{copy.tiers}</p>
          {sections.map(([title, body]) => <article key={title}><h2>{title}</h2><p>{body}</p></article>)}
          <div>
            <h2>{copy.process}</h2>
            <ol>{copy.serviceTemplate.process.map((step) => <li key={step}>{step}</li>)}</ol>
          </div>
          <div className="next-actions">
            <Link className="btn btn-primary" href={localePath(locale, "/contact")}>{copy.contact}</Link>
            <Link className="btn btn-ghost" href={localePath(locale, "/trust")}>{copy.nav.trust}</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export type ProductLocale = Locale;
