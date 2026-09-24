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
  return pageMetadata(locale, "/white-box", copy.wbTitle, copy.wbLead);
}

export default async function WhiteBoxPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);
  return (
    <>
      <PageIntro title={copy.wbTitle} lead={copy.wbLead} />
      <section className="section-tight">
        <div className="wrap prose">
          <div className="trace">
            {copy.wbChain.map((step, index) => (
              <span key={step} className="trace"><span className="pill">{step}</span>{index < copy.wbChain.length - 1 ? <i aria-hidden="true">→</i> : null}</span>
            ))}
          </div>
          <div className="details">
            {copy.wbDetails.map(([title, body]) => (
              <details key={title}><summary>{title}</summary><p>{body}</p></details>
            ))}
          </div>
          <div className="grid-3">
            {copy.standardPoints.map(([title, body]) => <article className="card" key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
          <div className="next-actions">
            <Link className="btn btn-ghost" href={localePath(locale, "/trust")}>{copy.nav.trust}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
