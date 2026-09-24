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
  return pageMetadata(locale, "/company", copy.companyPageTitle, copy.companyPageLead);
}

export default async function CompanyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);
  return (
    <>
      <PageIntro title={copy.companyPageTitle} lead={copy.companyPageLead} />
      <section className="section-tight">
        <div className="wrap prose">
          <article><h2>{copy.missionTitle}</h2><p>{copy.mission}</p></article>
          <article><h2>{copy.researchTitle}</h2><p>{copy.research}</p></article>
          <article><h2>{copy.peopleTitle}</h2><p>{copy.people}</p></article>
          <article><h2>{copy.newsTitle}</h2><p>{copy.newsEmpty}</p></article>
          <div className="next-actions">
            <Link className="btn btn-primary" href={localePath(locale, "/insights")}>{copy.insightsLink}</Link>
            <Link className="btn btn-ghost" href={localePath(locale, "/contact")}>{copy.contact}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
