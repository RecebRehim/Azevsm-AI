import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { getContactAuthority } from "@/lib/content/news-contact-authority-v31";
import { getCopy } from "@/lib/content/copy";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const page = getContactAuthority(locale);
  return page ? pageMetadata(locale, "/contact", page.title, page.lead) : {};
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const authority = getContactAuthority(locale);
  if (!authority) notFound();
  const copy = getCopy(locale);
  return (
    <>
      <PageIntro title={authority.title} lead={authority.lead} />
      <section className="section-tight">
        <div className="wrap prose">
          <p>{authority.intro}</p>
          <ul>{authority.items.map((item) => <li key={item}>{item}</li>)}</ul>
          <article>
            <h2>{authority.formTitle}</h2>
            <p>{authority.formText}</p>
            <p className="note" style={{ marginTop: 12 }}>{authority.warning}</p>
          </article>
          <ContactForm locale={locale} copy={copy} />
        </div>
      </section>
    </>
  );
}
