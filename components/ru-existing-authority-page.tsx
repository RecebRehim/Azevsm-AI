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
  return (
    <>
      <RuPilotHero
        kind={kind[pageKey]}
        title={page.title}
        lead={page.lead}
        eyebrow={pageKey === "whiteBox" ? "Explain the Result. Protect the Method." : undefined}
      />
      <section className="section-tight">
        <div className="wrap ru-pilot-prose">
          <RuPilotBlocks blocks={page.blocks} />
          <RuPilotActions actions={page.actions} />
        </div>
      </section>
    </>
  );
}
