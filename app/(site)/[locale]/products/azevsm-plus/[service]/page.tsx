import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { getCopy } from "@/lib/content/copy";
import { publicServices, serviceBySlug } from "@/lib/content/services";
import { isLocale, locales, localePath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) => publicServices(locale).map((service) => ({ locale, service: service.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; service: string }> }) {
  const { locale, service: slug } = await params;
  if (!isLocale(locale)) return {};
  const service = serviceBySlug(slug);
  if (!service || !publicServices(locale).some((item) => item.slug === slug)) return {};
  return pageMetadata(locale, `/products/azevsm-plus/${slug}`, service.labels[locale], service.summary[locale]);
}

export default async function ServicePage({ params }: { params: Promise<{ locale: string; service: string }> }) {
  const { locale, service: slug } = await params;
  if (!isLocale(locale)) notFound();
  const service = serviceBySlug(slug);
  if (!service || !publicServices(locale).some((item) => item.slug === slug)) notFound();
  const copy = getCopy(locale);
  const body = copy.serviceTemplate;
  return (
    <>
      <PageIntro title={service.labels[locale]} lead={service.summary[locale]} />
      <section className="section-tight">
        <div className="wrap prose">
          <article><h2>{copy.forWhom}</h2><p>{service.focus[locale].forWhom}</p></article>
          <article><h2>{copy.problem}</h2><p>{service.focus[locale].problem}</p></article>
          <article><h2>{copy.receives}</h2><p>{body.receives}</p></article>
          <article><h2>{copy.process}</h2><ol>{body.process.map((step) => <li key={step}>{step}</li>)}</ol></article>
          <article><h2>{copy.evidence}</h2><p>{service.focus[locale].evidence}</p></article>
          <article><h2>{copy.resultMeans}</h2><p>{body.result}</p></article>
          <article><h2>{copy.traceability}</h2><p>{body.trust}</p></article>
          <p className="note">{copy.tiers}</p>
          <div className="next-actions">
            {locale !== "ru" ? <Link className="btn btn-primary" href={localePath(locale, "/contact")}>{copy.contact}</Link> : null}
            <Link className={locale === "ru" ? "btn btn-primary" : "btn btn-ghost"} href={localePath(locale, "/products/azevsm-plus")}>{copy.plusTitle}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
