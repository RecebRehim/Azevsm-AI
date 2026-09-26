import { FounderIcon, type FounderIconName } from "@/components/founder-icon";
import { Logo } from "@/components/logo";

export type RuPilotHeroKind =
  | "platform"
  | "products"
  | "index"
  | "institutional"
  | "plus"
  | "technology"
  | "whitebox"
  | "trust"
  | "company"
  | "result"
  | "validation"
  | "insights";

const singleIcon: Partial<Record<RuPilotHeroKind, FounderIconName>> = {
  index: "azevsm-index",
  institutional: "azevsm-institutional-index",
  plus: "azevsm-plus",
  technology: "azevsm-ai",
  whitebox: "white-box",
  trust: "structured-evidence",
  validation: "trusted-results",
  result: "analytical-models",
};

export function RuPilotHero({
  kind,
  title,
  lead,
  topics = [],
}: {
  kind: RuPilotHeroKind;
  title: string;
  lead: string;
  topics?: string[];
}) {
  const icon = singleIcon[kind];

  return (
    <header className={`ru-pilot-hero ru-pilot-hero--${kind}`}>
      <div className="wrap ru-pilot-hero-inner">
        <div className="ru-pilot-hero-copy">
          <h1>{title}</h1>
          <p className="ru-pilot-lead">{lead}</p>
        </div>

        <div className="ru-thematic-hero-art" aria-hidden="true">
          <div className="ru-hero-art-core">
            {kind === "company" || kind === "insights" ? (
              <div className={kind === "company" ? "ru-company-mark" : "ru-research-mark"}>
                <Logo variant="mark" title="" size={128} />
              </div>
            ) : kind === "products" ? (
              <div className="ru-products-hero-icons">
                <FounderIcon name="azevsm-index" />
                <FounderIcon name="azevsm-institutional-index" />
                <FounderIcon name="azevsm-plus" />
              </div>
            ) : icon ? (
              <FounderIcon name={icon} className="ru-hero-founder-icon" />
            ) : (
              <div className="ru-platform-field" />
            )}
          </div>
          {topics.length ? (
            <div className="ru-hero-topic-grid">
              {topics.slice(0, 3).map((topic, index) => (
                <span className="ru-hero-topic" key={topic}>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                  <span>{topic}</span>
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
