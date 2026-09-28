import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { RuPilotHero } from "@/components/ru-pilot-hero";
import { getCopy } from "@/lib/content/copy";
import { isLocale } from "@/lib/i18n";
import { platformEntryUrl } from "@/lib/platform";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "/enter", getCopy(locale).enterTitle);
}

export default async function EnterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);
  const entry = platformEntryUrl();

  if (locale === "ru") {
    return (
      <>
        <RuPilotHero kind="enter" title={copy.enterTitle} lead={entry ? copy.enterReady : copy.enterMissing} />
        {entry ? (
          <section className="section-tight ru-authority-section">
            <div className="wrap ru-pilot-prose">
              <div className="next-actions ru-pilot-actions">
                <a className="btn btn-primary" href={entry} rel="noreferrer">{copy.enter}</a>
              </div>
            </div>
          </section>
        ) : null}
      </>
    );
  }

  return (
    <>
      <PageIntro title={copy.enterTitle} lead={entry ? copy.enterReady : copy.enterMissing} />
      <section className="section-tight">
        <div className="wrap">
          {entry ? <a className="btn btn-primary" href={entry} rel="noreferrer">{copy.enter}</a> : null}
        </div>
      </section>
    </>
  );
}
