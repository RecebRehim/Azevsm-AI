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

function LineIcon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

const productIconPaths = [
  "M4 19V10M10 19V5M16 19v-7M22 19H2",
  "M3 20h18M5 20V10M19 20V10M12 3l9 7H3l9-7zM9 20v-4h6v4",
  "M12 3l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 16l9 5 9-5",
];

const foundationIconPaths = [
  "M12 3v4M12 17v4M4.9 7.5l3.5 2M15.6 14.5l3.5 2M4.9 16.5l3.5-2M15.6 9.5l3.5-2M8 12h8",
  "M9 4a3 3 0 0 1 6 0c0 2-3 2.5-3 5M12 16h.01M8 20h8",
  "M7 3h7l5 5v13H7zM14 3v5h5M9 13h6M9 17h4",
  "M8 8h4v4H8zM12 8h4v4h-4zM8 12h4v4H8zM12 12h4v4h-4z",
];

const whyIconPaths = [
  "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z",
  "M4 19V5M4 19h16M8 15v-4M12 15V8M16 15v-6",
  "M8 13l2 2 4-4M4 12a5 5 0 0 0 5 5h1l2 3 2-3h1a5 5 0 0 0 0-10H9a5 5 0 0 0-5 5z",
];

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
                <span className="line-icon"><LineIcon d={productIconPaths[index]} /></span>
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
                <span className="line-icon"><LineIcon d={foundationIconPaths[index]} /></span>
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
                <span className="line-icon"><LineIcon d={whyIconPaths[index]} /></span>
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
