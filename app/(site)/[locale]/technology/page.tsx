import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { getCopy } from "@/lib/content/copy";
import { claims } from "@/lib/cms/gate";
import { isLocale, localePath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getCopy(locale);
  return pageMetadata(locale, "/technology", copy.techTitle, copy.techLead);
}

export default async function TechnologyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);
  const published = claims.filter((claim) => claim.kind === "technology" && claim.status === "published" && claim.public);
  return (
    <>
      <PageIntro title={copy.techTitle} lead={copy.techLead} />
      <section className="section-tight">
        <div className="wrap prose">
          <h2>{copy.boundariesTitle}</h2>
          <div className="boundary">
            {copy.boundaries.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
          <ul>{copy.techClaims.map((claim) => <li key={claim}>{claim}</li>)}</ul>
          <ul>{published.map((claim) => <li key={claim.id}>{claim.statement[locale]}</li>)}</ul>
          <div className="next-actions">
            <Link className="btn btn-primary" href={localePath(locale, "/white-box")}>{copy.nav.whitebox}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
