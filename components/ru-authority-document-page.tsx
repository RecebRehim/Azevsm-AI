import { notFound } from "next/navigation";
import { RuPilotActions, RuPilotBlocks } from "@/components/ru-pilot-blocks";
import { RuPilotHero } from "@/components/ru-pilot-hero";
import { getAuthorityPage, type AuthorityPageKey } from "@/lib/content/authority-pages-v31";
import type { Locale } from "@/lib/i18n";

export function RuAuthorityDocumentPage({ locale, pageKey }: { locale: Locale; pageKey: AuthorityPageKey }) {
  const page = getAuthorityPage(locale, pageKey);
  if (!page) notFound();

  const kind = pageKey === "validation" ? "validation" : "result";
  const topics = page.blocks.flatMap((block) => block.type === "heading" ? [block.text] : []).slice(0, 3);
  const actions =
    pageKey === "resultSystem"
      ? page.actions.filter((action) => action.href === "/products")
      : [];

  return (
    <>
      <RuPilotHero kind={kind} title={page.title} lead={page.lead} topics={topics} />
      <section className="section-tight ru-authority-section">
        <div className="wrap ru-pilot-prose">
          <RuPilotBlocks blocks={page.blocks} />
          <RuPilotActions actions={actions} locale={locale} />
        </div>
      </section>
    </>
  );
}
