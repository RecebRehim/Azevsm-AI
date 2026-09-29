import { notFound } from "next/navigation";
import { RuPilotActions, RuPilotBlocks } from "@/components/ru-pilot-blocks";
import { RuPilotHero, type RuPilotHeroKind } from "@/components/ru-pilot-hero";
import type { FounderIconName } from "@/components/founder-icon";
import { getExistingAuthorityPage, type ExistingAuthorityPageKey } from "@/lib/content/existing-authority-pages-v31";
import type { Locale } from "@/lib/i18n";

const kind: Record<ExistingAuthorityPageKey, RuPilotHeroKind> = {
  technology: "technology",
  whiteBox: "whitebox",
  trust: "trust",
  company: "company",
};

const headingIcons: Record<ExistingAuthorityPageKey, FounderIconName[]> = {
  technology: ["azevsm-ai", "methodology-ontology", "analytical-models", "structured-evidence", "white-box"],
  whiteBox: ["structured-evidence", "white-box", "trusted-results"],
  trust: ["trusted-results"],
  company: ["platform-structure", "methodology-ontology", "analytical-models"],
};

export function RuExistingAuthorityPage({ locale, pageKey }: { locale: Locale; pageKey: ExistingAuthorityPageKey }) {
  const page = getExistingAuthorityPage(locale, pageKey);
  if (!page) notFound();

  const actions: typeof page.actions = [];
  const topics = page.blocks.flatMap((block) => block.type === "heading" ? [block.text] : []).slice(0, 3);

  return (
    <>
      <RuPilotHero kind={kind[pageKey]} title={page.title} lead={page.lead} topics={topics} />
      <section className={`section-tight ru-authority-section ru-existing-section ru-existing-section--${pageKey}`}>
        <div className="wrap ru-pilot-prose">
          <RuPilotBlocks blocks={page.blocks} headingIcons={headingIcons[pageKey]} />
          <RuPilotActions actions={actions} locale={locale} />
        </div>
      </section>
    </>
  );
}
