import { notFound } from "next/navigation";
import { RuPilotActions, RuPilotBlocks } from "@/components/ru-pilot-blocks";
import { RuPilotHero } from "@/components/ru-pilot-hero";
import { getAuthorityPage, type AuthorityPageKey } from "@/lib/content/authority-pages-v31";

export function RuAuthorityDocumentPage({ pageKey }: { pageKey: AuthorityPageKey }) {
  const page = getAuthorityPage("ru", pageKey);
  if (!page) notFound();
  const kind = pageKey === "validation" ? "validation" : "result";
  return (
    <>
      <RuPilotHero kind={kind} title={page.title} lead={page.lead} />
      <section className="section-tight">
        <div className="wrap ru-pilot-prose">
          <RuPilotBlocks blocks={page.blocks} />
          <RuPilotActions actions={page.actions} />
        </div>
      </section>
    </>
  );
}
