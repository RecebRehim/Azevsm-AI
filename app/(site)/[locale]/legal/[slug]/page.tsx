import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { getCopy, type SiteCopy } from "@/lib/content/copy";
import { isLocale, locales } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const slugs = ["privacy", "terms", "cookies", "security", "accessibility"] as const;

function legal(copy: SiteCopy, slug: string) {
  const map = {
    privacy: [copy.privacyTitle, copy.privacyBody],
    terms: [copy.termsTitle, copy.termsBody],
    cookies: [copy.cookiesTitle, copy.cookiesBody],
    security: [copy.securityTitle, copy.securityBody],
    accessibility: [copy.a11yTitle, copy.a11yBody],
  } as const;
  return slug in map ? map[slug as keyof typeof map] : null;
}

export function generateStaticParams() {
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const item = legal(getCopy(locale), slug);
  if (!item) return {};
  return pageMetadata(locale, `/legal/${slug}`, item[0], item[1][0]);
}

export default async function LegalPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);
  const item = legal(copy, slug);
  if (!item) notFound();
  return (
    <>
      <PageIntro title={item[0]} lead={copy.legalUpdated} />
      <section className="section-tight">
        <div className="wrap prose">
          {item[1].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>
    </>
  );
}
