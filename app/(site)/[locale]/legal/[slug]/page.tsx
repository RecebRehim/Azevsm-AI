import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { RuLegalStage1Page } from "@/components/ru-legal-stage1-page";
import { RuPilotHero } from "@/components/ru-pilot-hero";
import { getCopy, type SiteCopy } from "@/lib/content/copy";
import { getRuWebsiteLegalStage1 } from "@/lib/content/legal-ru-stage1";
import { isLocale, locales, localePath } from "@/lib/i18n";
import { platformEntryUrl } from "@/lib/platform";
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

  if (locale === "ru") {
    const stage1 = getRuWebsiteLegalStage1(slug);
    if (stage1) return pageMetadata(locale, `/legal/${slug}`, stage1.title);
  }

  const item = legal(getCopy(locale), slug);
  if (!item) return {};
  return pageMetadata(locale, `/legal/${slug}`, item[0], item[1][0]);
}

export default async function LegalPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  if (locale === "ru") {
    const stage1 = getRuWebsiteLegalStage1(slug);
    if (stage1) {
      return <RuLegalStage1Page document={stage1} kind={slug === "privacy" ? "privacy" : "terms"} />;
    }
  }

  const copy = getCopy(locale);
  const item = legal(copy, slug);
  if (!item) notFound();

  if (locale === "ru") {
    const kind =
      slug === "cookies" ? "cookies" :
      slug === "security" ? "security" :
      slug === "accessibility" ? "accessibility" :
      "legal-compliance";
    return (
      <>
        <RuPilotHero
          kind={kind}
          title={item[0]}
          lead={slug === "security" ? "Информация о безопасности и обработке публичных обращений на корпоративном сайте Azevsm Systems." : copy.legalUpdated}
        />
        <section className="section-tight ru-authority-section">
          <div className="wrap ru-pilot-prose">
            <div className="ru-pilot-blocks">
              {item[1].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {slug === "security" ? (
                <div className="cta-row">
                  <Link className="btn btn-primary" href={platformEntryUrl() ?? localePath(locale, "/enter")}>Перейти в AzevsmAI</Link>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </>
    );
  }

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
