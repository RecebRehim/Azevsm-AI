import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { getCopy } from "@/lib/content/copy";
import { isLocale, localePath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getCopy(locale);
  return pageMetadata(locale, "/platform", copy.platformTitle, copy.platformLead);
}

export default async function PlatformPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);
  return (
    <>
      <PageIntro title={copy.platformTitle} lead={copy.platformLead} />
      <section className="section-tight">
        <div className="wrap prose">
          <div>
            <h2>{copy.journeyTitle}</h2>
            <div className="grid-3">
              {copy.journey.map(([title, body]) => <article className="card" key={title}><h3>{title}</h3><p>{body}</p></article>)}
            </div>
          </div>
          <div>
            <h2>{copy.capabilitiesTitle}</h2>
            <div className="grid-2">
              {copy.capabilities.map(([title, body]) => <article className="card" key={title}><h3>{title}</h3><p>{body}</p></article>)}
            </div>
          </div>
          <div className="next-actions">
            <Link className="btn btn-primary" href={localePath(locale, "/products")}>{copy.nav.products}</Link>
            <Link className="btn btn-ghost" href={localePath(locale, "/enter")}>{copy.enterPlatform}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
