import { RuPilotHero } from "@/components/ru-pilot-hero";
import type { RuWebsiteLegalDocument } from "@/lib/content/legal-ru-stage1";

export function RuLegalStage1Page({
  document,
  kind,
}: {
  document: RuWebsiteLegalDocument;
  kind: "privacy" | "terms";
}) {
  const topics = document.sections.slice(0, 3).map((section) => section.heading.replace(/^\d+\.\s*/, ""));

  return (
    <>
      <RuPilotHero kind={kind} title={document.title} lead="Принятый источник содержания для русской пилотной реализации." topics={topics} />
      <section className="section-tight ru-authority-section ru-legal-stage1">
        <div className="wrap ru-legal-stage1-inner">
          <div className="ru-legal-stage1-status" role="note">
            <strong>STAGE 1 = ACCEPTED / CLOSED</strong>
            <span>PUBLICATION READY = NO</span>
          </div>

          {document.sections.map((section) => (
            <section className="ru-legal-section" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.list ? <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul> : null}
              {section.note ? (
                <aside className="ru-legal-note">
                  <strong>{section.note.title}</strong>
                  <p>{section.note.body}</p>
                </aside>
              ) : null}
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
