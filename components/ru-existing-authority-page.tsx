import { notFound } from "next/navigation";
import { RuPilotActions, RuPilotBlocks } from "@/components/ru-pilot-blocks";
import { RuPilotHero, type RuPilotHeroKind } from "@/components/ru-pilot-hero";
import { getExistingAuthorityPage, type ExistingAuthorityPageKey } from "@/lib/content/existing-authority-pages-v31";
import { getNewsAuthority } from "@/lib/content/news-contact-authority-v31";
import type { Locale } from "@/lib/i18n";

const kind: Record<ExistingAuthorityPageKey, RuPilotHeroKind> = {
  technology: "technology",
  whiteBox: "whitebox",
  trust: "trust",
  company: "company",
};

export function RuExistingAuthorityPage({ locale, pageKey }: { locale: Locale; pageKey: ExistingAuthorityPageKey }) {
  const page = getExistingAuthorityPage(locale, pageKey);
  if (!page) notFound();

  const actions: typeof page.actions = pageKey === "company" ? page.actions : [];
  const topics = page.blocks.flatMap((block) => block.type === "heading" ? [block.text] : []).slice(0, 3);
  const companyEvidence = locale === "ru" && pageKey === "company" ? getNewsAuthority("ru") : null;
  const blocks: typeof page.blocks = companyEvidence
    ? [
        { type: "heading", text: "Что создаёт компания" },
        ...page.blocks,
        { type: "heading", text: "Подтверждаемая деятельность Azevsm Systems" },
        {
          type: "list",
          items: [
            companyEvidence.items[1],
            companyEvidence.items[2],
            companyEvidence.items[3],
            companyEvidence.items[4],
          ],
        },
      ]
    : page.blocks;

  return (
    <>
      <RuPilotHero
        kind={kind[pageKey]}
        title={locale === "ru" && pageKey === "company" ? "Azevsm Systems\nоператор AzevsmAI" : page.title}
        lead={page.lead}
        topics={topics}
      />
      <section className={`section-tight ru-authority-section ru-existing-section ru-existing-section--${pageKey}`}>
        <div className="wrap ru-pilot-prose">
          <RuPilotBlocks blocks={blocks} />
          <RuPilotActions actions={actions} locale={locale} includeContact={pageKey === "company"} />
        </div>
      </section>
    </>
  );
}
