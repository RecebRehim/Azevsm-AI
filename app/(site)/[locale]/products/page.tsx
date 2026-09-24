import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { getCopy } from "@/lib/content/copy";
import { publicServices } from "@/lib/content/services";
import { isLocale, localePath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getCopy(locale);
  return pageMetadata(locale, "/products", copy.productsTitle, copy.productsLead);
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);
  const services = publicServices(locale);
  return (
    <>
      <PageIntro kicker={copy.productsKicker} title={copy.productsTitle} lead={copy.productsLead} />
      <section className="section-tight">
        <div className="wrap prose">
          <div className="grid-3">
            {copy.productCards.map(([title, body, href]) => (
              <article className="card" key={title}><h3>{title}</h3><p>{body}</p><p style={{ marginTop: 12 }}><Link href={localePath(locale, href)}>{copy.readMore}</Link></p></article>
            ))}
          </div>
          <div>
            <h2>{copy.plusTitle}</h2>
            <p className="lede">{copy.plusNote}</p>
            <ul>
              {services.map((service) => (
                <li key={service.id}><Link href={localePath(locale, `/products/azevsm-plus/${service.slug}`)}>{service.labels[locale]}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
