import { notFound } from "next/navigation";
import { RuPilotActions, RuPilotBlocks } from "@/components/ru-pilot-blocks";
import { RuPilotHero, type RuPilotHeroKind } from "@/components/ru-pilot-hero";
import type { FounderIconName } from "@/components/founder-icon";
import { V4ResultSystem } from "@/components/v4-clarity";
import { getAuthorityPage, type AuthorityPageKey } from "@/lib/content/authority-pages-v31";
import type { Locale } from "@/lib/i18n";

const heroKind: Record<AuthorityPageKey, RuPilotHeroKind> = {
  resultSystem: "result",
  difference: "difference",
  indexField: "index-field",
  validation: "validation",
  dataSecurity: "data-security",
  legalCompliance: "legal-compliance",
};

const headingIcons: Partial<Record<AuthorityPageKey, FounderIconName[]>> = {
  indexField: ["azevsm-index", "structured-evidence", "analytical-models", "trusted-results", "platform-structure"],
};

export function RuAuthorityDocumentPage({ locale, pageKey }: { locale: Locale; pageKey: AuthorityPageKey }) {
  const page = getAuthorityPage(locale, pageKey);
  if (!page) notFound();

  const kind = heroKind[pageKey];
  const topics = page.blocks.flatMap((block) => block.type === "heading" ? [block.text] : []).slice(0, 3);
  const actions =
    pageKey === "resultSystem"
      ? page.actions.filter((action) => action.href === "/products")
      : [];

  if (pageKey === "resultSystem") {
    return (
      <>
        <RuPilotHero kind={kind} title={page.title} lead={page.lead} topics={topics} />
        <V4ResultSystem locale={locale} page={page} />
      </>
    );
  }

  return (
    <>
      <RuPilotHero kind={kind} title={page.title} lead={page.lead} topics={topics} />
      <section className={`section-tight ru-authority-section ru-authority-section--${pageKey}`}>
        <div className="wrap ru-pilot-prose">
          <RuPilotBlocks blocks={page.blocks} headingIcons={headingIcons[pageKey] ?? []} />
          <RuPilotActions actions={actions} locale={locale} />
        </div>
      </section>
    </>
  );
}
