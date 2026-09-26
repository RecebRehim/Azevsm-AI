import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { getNewsAuthority } from "@/lib/content/news-contact-authority-v31";
import { getCopy } from "@/lib/content/copy";
import { isLocale, localePath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const page = getNewsAuthority(locale);
  return page ? pageMetadata(locale, "/insights", page.title, page.lead) : {};
}

export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const authority = getNewsAuthority(locale);
  if (!authority) notFound();
  const copy = getCopy(locale);
  return (
    <>
      <PageIntro title={authority.title} lead={authority.lead} />
      <section className="section-tight">
        <div className="wrap prose">
          <p>{authority.intro}</p>
          <ul>{authority.items.map((item) => <li key={item}>{item}</li>)}</ul>
          <article className="card"><h2>{authority.noteTitle}</h2><p>{authority.note}</p></article>
          <div className="grid-2">
            {copy.insightItems.map(([slug, title, body]) => (
              <article className="card" key={slug}>
                <h2>{title}</h2>
                <p>{body}</p>
                <p style={{ marginTop: 12 }}><Link href={localePath(locale, `/insights/${slug}`)}>{copy.readMore}</Link></p>
              </article>
            ))}
          </div>
          <div className="next-actions"><Link className="btn btn-primary" href={localePath(locale, "/contact")}>{copy.contact}</Link></div>
        </div>
      </section>
    </>
  );
}
