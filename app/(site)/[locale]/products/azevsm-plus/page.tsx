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
  return pageMetadata(locale, "/products/azevsm-plus", copy.plusTitle, copy.plusLead);
}

export default async function PlusPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);
  const services = publicServices(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Azevsm Plus",
    applicationCategory: "BusinessApplication",
    provider: { "@type": "Organization", name: "AzevsmAI Systems" },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro title={copy.plusTitle} lead={copy.plusLead} />
      <section className="section-tight">
        <div className="wrap prose">
          <p className="note">{copy.plusNote}</p>
          <div className="grid-2">
            {services.map((service) => (
              <article className="card" key={service.id} data-service-id={service.id}>
                <h3>{service.labels[locale]}</h3>
                <p>{service.summary[locale]}</p>
                <p style={{ marginTop: 12 }}><Link href={localePath(locale, `/products/azevsm-plus/${service.slug}`)}>{copy.readMore}</Link></p>
              </article>
            ))}
          </div>
          <div className="next-actions">
            <Link className="btn btn-primary" href={localePath(locale, "/contact")}>{copy.contact}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
