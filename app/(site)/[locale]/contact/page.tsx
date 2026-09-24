import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { getCopy } from "@/lib/content/copy";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getCopy(locale);
  return pageMetadata(locale, "/contact", copy.contactTitle, copy.contactLead);
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);
  return (
    <>
      <PageIntro title={copy.contactTitle} lead={copy.contactLead} />
      <section className="section-tight">
        <div className="wrap">
          <ContactForm locale={locale} copy={copy} />
        </div>
      </section>
    </>
  );
}
