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

function ProductIcon({ index }: { index: number }) {
  const icons = [
    <svg key="bars" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 48V28h10v20z" fill="#1e4a8a" />
      <path d="M27 48V16h10v32z" fill="#c5a059" />
      <path d="M42 48V34h10v14z" fill="#1e4a8a" />
      <path d="M8 50h48" fill="none" stroke="#1e4a8a" strokeWidth="2.5" strokeLinecap="round" />
    </svg>,
    <svg key="bank" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M10 24l22-12 22 12z" fill="#c5a059" />
      <path d="M14 26h8v18h-8zM28 26h8v18h-8zM42 26h8v18h-8z" fill="#1e4a8a" />
      <path d="M10 46h44v6H10z" fill="#1e4a8a" />
      <path d="M8 24h48" fill="none" stroke="#1e4a8a" strokeWidth="2" />
    </svg>,
    <svg key="layers" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 8l22 12-22 12L10 20z" fill="#c5a059" />
      <path d="M10 28l22 12 22-12" fill="none" stroke="#1e4a8a" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M10 40l22 12 22-12" fill="none" stroke="#1e4a8a" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>,
  ];
  return icons[index] ?? null;
}

function FoundationIcon({ index }: { index: number }) {
  const icons = [
    <svg key="net" viewBox="0 0 64 64" aria-hidden="true">
      {/* Center hub — hollow gold */}
      <circle cx="32" cy="32" r="6.5" fill="none" stroke="#c5a059" strokeWidth="2.7" />
      {/* Top & bottom gold nodes + spokes */}
      <circle cx="32" cy="9" r="4.5" fill="none" stroke="#c5a059" strokeWidth="2.6" />
      <circle cx="32" cy="55" r="4.5" fill="none" stroke="#c5a059" strokeWidth="2.6" />
      <path d="M32 13.5V25.5M32 38.5V50.5" fill="none" stroke="#c5a059" strokeWidth="2.5" strokeLinecap="butt" />
      {/* Four navy diagonal nodes — shallower angle */}
      <circle cx="12" cy="21" r="4.5" fill="none" stroke="#1e4a8a" strokeWidth="2.6" />
      <circle cx="52" cy="21" r="4.5" fill="none" stroke="#1e4a8a" strokeWidth="2.6" />
      <circle cx="12" cy="43" r="4.5" fill="none" stroke="#1e4a8a" strokeWidth="2.6" />
      <circle cx="52" cy="43" r="4.5" fill="none" stroke="#1e4a8a" strokeWidth="2.6" />
      {/* Navy diagonal spokes */}
      <path
        d="M16 24L26.5 28.5M48 24L37.5 28.5M16 40L26.5 35.5M48 40L37.5 35.5"
        fill="none"
        stroke="#1e4a8a"
        strokeWidth="2.5"
        strokeLinecap="butt"
      />
    </svg>,
    <svg key="ai" viewBox="0 0 64 64" aria-hidden="true">
      {/* Bumpy tall left hemisphere */}
      <path
        d="M31 7.5c-2.2-2.6-6.8-3.5-11-1.2C16.5 8.5 14.2 11.2 13.2 14.5c-1.5.2-3.5 1.2-5 2.8C6 19.5 4.8 23 5.2 26.5c.3 2.8 1.8 5 3.8 6.2.6 2.5 2.5 5 5.8 6 2.5.8 6.2.5 9.7.8H31"
        fill="none"
        stroke="#1e4a8a"
        strokeWidth="2.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M31 7.5v32.8" fill="none" stroke="#1e4a8a" strokeWidth="2.35" strokeLinecap="round" />
      <path
        d="M14.5 18.5c2.8 1.5 5.5-.5 7.5-3M13.8 26c3 .8 5.8-1.2 7.8-4M15.2 33.5c2.5.6 5-1.5 6.8-3.5"
        fill="none"
        stroke="#1e4a8a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Orthogonal gold circuit — two node columns */}
      <path d="M33.5 12v31" fill="none" stroke="#c5a059" strokeWidth="2.25" strokeLinecap="round" />
      <path d="M33.5 17H41V10.5" fill="none" stroke="#c5a059" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="41" cy="10.5" r="2.45" fill="#c5a059" />
      <path d="M33.5 22H47V16.5" fill="none" stroke="#c5a059" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="47" cy="16.5" r="2.45" fill="#c5a059" />
      <path d="M33.5 28.5H53.5" fill="none" stroke="#c5a059" strokeWidth="2.25" strokeLinecap="round" />
      <circle cx="53.5" cy="28.5" r="2.45" fill="#c5a059" />
      <path d="M33.5 35H47V40.5" fill="none" stroke="#c5a059" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="47" cy="40.5" r="2.45" fill="#c5a059" />
      <path d="M33.5 40H41V46.5" fill="none" stroke="#c5a059" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="41" cy="46.5" r="2.45" fill="#c5a059" />
    </svg>,
    <svg key="doc" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 10h20l10 10v34H18z" fill="none" stroke="#1e4a8a" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M38 10v10h10" fill="none" stroke="#1e4a8a" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M24 28h16M24 34h12" fill="none" stroke="#1e4a8a" strokeWidth="2" />
      <circle cx="42" cy="44" r="9" fill="none" stroke="#c5a059" strokeWidth="2.5" />
      <path d="M48 50l6 6" fill="none" stroke="#c5a059" strokeWidth="2.5" strokeLinecap="round" />
    </svg>,
    <svg key="cube" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 8l14 8v16l-14 8-14-8V16z" fill="none" stroke="#1e4a8a" strokeWidth="2.2" />
      <path d="M32 24l14-8M32 24v16M32 24L18 16" fill="none" stroke="#1e4a8a" strokeWidth="2" />
      <path d="M22 28l14 8v16l-14 8-14-8V36z" fill="none" stroke="#c5a059" strokeWidth="2.2" />
      <path d="M42 28l14 8v16l-14 8-14-8V36z" fill="none" stroke="#1e4a8a" strokeWidth="2.2" />
    </svg>,
  ];
  return icons[index] ?? null;
}

function WhyIcon({ index }: { index: number }) {
  const icons = [
    <svg key="shield" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 8l20 8v16c0 14-8 24-20 28C20 56 12 46 12 32V16z" fill="none" stroke="#1e4a8a" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M22 32l7 7 14-16" fill="none" stroke="#c5a059" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="chart" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 48V30h8v18z" fill="#1e4a8a" />
      <path d="M24 48V22h8v26z" fill="#c5a059" />
      <path d="M36 48V16h8v32z" fill="#1e4a8a" />
      <path d="M48 48V26h8v22z" fill="#c5a059" />
      <path d="M8 50h52" fill="none" stroke="#1e4a8a" strokeWidth="2.5" strokeLinecap="round" />
    </svg>,
    <svg key="hands" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m11 17 2 2a1 1 0 1 0 3-3" stroke="#1e4a8a" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" stroke="#1e4a8a" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m21 3 1 11h-2" stroke="#1e4a8a" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" stroke="#1e4a8a" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 4h8" stroke="#c5a059" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
  ];
  return icons[index] ?? null;
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
      <section className="band">
        <div className="wrap">
          <div className="band-head">
            <div>
              <p className="kicker">{copy.homeProductsKicker}</p>
              <h2>{copy.homeProductsTitle}</h2>
            </div>
            <Link className="text-link" href={localePath(locale, "/products")}>
              {copy.viewAll}
              <svg className="icon icon-dir" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
          <div className="product-row">
            {copy.homeProducts.map(([title, body, href], index) => (
              <Link className="line-card" key={title} href={localePath(locale, href)}>
                <span className="product-icon"><ProductIcon index={index} /></span>
                <span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </span>
                <svg className="icon icon-dir line-go" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="band band-rule">
        <div className="wrap">
          <div className="band-head">
            <div>
              <p className="kicker">{copy.homeTechKicker}</p>
              <h2>{copy.homeTechTitle}</h2>
            </div>
            <Link className="text-link" href={localePath(locale, "/technology")}>
              {copy.learnMore}
              <svg className="icon icon-dir" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
          <div className="foundation-row">
            {copy.homeTech.map(([title, body], index) => (
              <article key={title}>
                <span className="foundation-icon"><FoundationIcon index={index} /></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="why-strip" aria-labelledby="why-strip">
        <div className="wrap">
          <h2 id="why-strip" className="kicker">{copy.homeWhyKicker}</h2>
          <div className="why-row">
            {copy.homeWhy.map(([title, body], index) => (
              <article key={title}>
                <span className="why-icon"><WhyIcon index={index} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
