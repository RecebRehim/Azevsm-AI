import { notFound } from "next/navigation";
import { RuPilotActions, RuPilotBlocks } from "@/components/ru-pilot-blocks";
import { RuPilotHero } from "@/components/ru-pilot-hero";
import { getAuthorityPage, type AuthorityPageKey } from "@/lib/content/authority-pages-v31";

export function RuAuthorityDocumentPage({ pageKey }: { pageKey: AuthorityPageKey }) {
  const page = getAuthorityPage("ru", pageKey);
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
          <RuPilotActions actions={actions} />
        </div>
      </section>
    </>
  );
}
