import Link from "next/link";
import { Hero } from "@/components/hero";
import { getCopy } from "@/lib/content/copy";
import { isLocale, localePath, type Locale } from "@/lib/i18n";
import { pageMetadata, organizationJsonLd } from "@/lib/seo";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "");
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const copy = getCopy(locale);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
      <Hero locale={locale} copy={copy} />
      <section className="section">
        <div className="wrap">
          <p className="kicker">{copy.problemKicker}</p>
          <h2>{copy.problemTitle}</h2>
          <p className="lede">{copy.problemLead}</p>
          <div className="grid-3">
            {copy.problems.map(([title, body]) => (
              <article className="card" key={title}><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
          <p className="lede" style={{ marginTop: 28 }}>{copy.problemClose}</p>
        </div>
      </section>
      <section className="section surface-mist">
        <div className="wrap">
          <p className="kicker">{copy.systemKicker}</p>
          <h2>{copy.systemTitle}</h2>
          <p className="lede">{copy.systemLead}</p>
          <div className="flow">
            {copy.flow.map((step, index) => (
              <article className="flow-step" key={step}><b>0{index + 1}</b><span>{step}</span></article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <p className="kicker">{copy.productsKicker}</p>
          <h2>{copy.productsTitle}</h2>
          <p className="lede">{copy.productsLead}</p>
          <div className="grid-3">
            {copy.productCards.map(([title, body, href]) => (
              <article className="card product-card" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
                <p className="more"><Link href={localePath(locale, href)}>{copy.readMore}</Link></p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section surface-navy">
        <div className="wrap">
          <p className="kicker">{copy.aiKicker}</p>
          <h2>{copy.aiTitle}</h2>
          <p className="lede">{copy.aiLead}</p>
          <p className="formula">{copy.aiFormula}</p>
          <div className="grid-3" style={{ marginTop: 24 }}>
            {copy.aiPoints.map((point) => <article className="card" key={point}><p>{point}</p></article>)}
          </div>
          <div className="next-actions">
            <Link className="btn btn-primary" href={localePath(locale, "/technology")}>{copy.ourTechnology}</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <p className="kicker">{copy.whiteKicker}</p>
          <h2>{copy.whiteTitle}</h2>
          <p className="lede">{copy.whiteLead}</p>
          <div className="trace">
            {copy.whiteStates.map((state, index) => (
              <span key={state} className="trace"><span className="pill">{state}</span>{index < copy.whiteStates.length - 1 ? <i aria-hidden="true">→</i> : null}</span>
            ))}
          </div>
          <p className="note" style={{ marginTop: 16 }}>{copy.whiteNote}</p>
          <div className="next-actions">
            <Link className="btn btn-ghost" href={localePath(locale, "/white-box")}>{copy.nav.whitebox}</Link>
          </div>
        </div>
      </section>
      <section className="section surface-mist">
        <div className="wrap">
          <p className="kicker">{copy.standardKicker}</p>
          <h2>{copy.standardTitle}</h2>
          <div className="grid-3">
            {copy.standardPoints.map(([title, body]) => <article className="card" key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <p className="kicker">{copy.trustKicker}</p>
          <h2>{copy.trustTitle}</h2>
          <div className="grid-6">
            {copy.trustPoints.map((point) => <article className="card" key={point}><h3>{point}</h3></article>)}
          </div>
          <div className="next-actions">
            <Link className="btn btn-ghost" href={localePath(locale, "/trust")}>{copy.nav.trust}</Link>
          </div>
        </div>
      </section>
      <section className="section surface-mist">
        <div className="wrap">
          <p className="kicker">{copy.audienceKicker}</p>
          <h2>{copy.audienceTitle}</h2>
          <p className="lede">{copy.audienceLead}</p>
          <Link className="btn btn-primary" href={localePath(locale, "/contact")}>{copy.audienceCta}</Link>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <p className="kicker">{copy.companyKicker}</p>
          <h2>{copy.companyTitle}</h2>
          <p className="lede">{copy.companyLead}</p>
          <div className="grid-3">
            {copy.companyPoints.map((point) => <article className="card" key={point}><p>{point}</p></article>)}
          </div>
          <div className="next-actions">
            <Link className="btn btn-ghost" href={localePath(locale, "/company")}>{copy.nav.company}</Link>
          </div>
        </div>
      </section>
      <section className="section surface-navy">
        <div className="wrap">
          <h2>{copy.closeTitle}</h2>
          <p className="lede">{copy.closeLead}</p>
          <p className="formula">{copy.thesisSub}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href={localePath(locale, "/platform")}>{copy.explorePlatform}</Link>
            <Link className="btn btn-on-dark" href={localePath(locale, "/contact")}>{copy.contactCta}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
