import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { claims } from "@/lib/cms/gate";
import { getCopy } from "@/lib/content/copy";
import { isLocale, localePath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getCopy(locale);
  return pageMetadata(locale, "/trust", copy.trustPageTitle, copy.trustPageLead);
}

export default async function TrustPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);
  const published = claims.filter((claim) => claim.kind === "trust" && claim.status === "published" && claim.public);
  return (
    <>
      <PageIntro title={copy.trustPageTitle} lead={copy.trustPageLead} />
      <section className="section-tight">
        <div className="wrap prose">
          <div className="grid-2">
            {copy.micro.map((line) => <article className="card" key={line}><p>{line}</p></article>)}
          </div>
          <h2>{copy.showTitle}</h2>
          <div className="grid-2">
            {copy.show.map(([title, body]) => <article className="card" key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
          {published.map((claim) => <p key={claim.id}>{claim.statement[locale]}</p>)}
          <h2>{copy.hideTitle}</h2>
          <ul>{copy.hide.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="next-actions">
            <Link className="btn btn-primary" href={localePath(locale, "/legal/security")}>{copy.security}</Link>
            <Link className="btn btn-ghost" href={localePath(locale, "/legal/privacy")}>{copy.privacy}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
