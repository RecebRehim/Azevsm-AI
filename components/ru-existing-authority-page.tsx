import { notFound } from "next/navigation";
import { RuPilotActions, RuPilotBlocks } from "@/components/ru-pilot-blocks";
import { RuPilotHero, type RuPilotHeroKind } from "@/components/ru-pilot-hero";
import { getExistingAuthorityPage, type ExistingAuthorityPageKey } from "@/lib/content/existing-authority-pages-v31";

const kind: Record<ExistingAuthorityPageKey, RuPilotHeroKind> = {
  technology: "technology",
  whiteBox: "whitebox",
  trust: "trust",
  company: "company",
};

export function RuExistingAuthorityPage({ pageKey }: { pageKey: ExistingAuthorityPageKey }) {
  const page = getExistingAuthorityPage("ru", pageKey);
  if (!page) notFound();

  const actions: typeof page.actions = [];
  const topics = page.blocks.flatMap((block) => block.type === "heading" ? [block.text] : []).slice(0, 3);

  return (
    <>
      <RuPilotHero kind={kind[pageKey]} title={page.title} lead={page.lead} topics={topics} />
      <section className="section-tight ru-authority-section">
        <div className="wrap ru-pilot-prose">
          <RuPilotBlocks blocks={page.blocks} />
          <RuPilotActions actions={actions} />
        </div>
      </section>
    </>
  );
}
