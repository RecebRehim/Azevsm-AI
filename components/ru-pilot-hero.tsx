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
  | "validation";

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
  eyebrow,
}: {
  kind: RuPilotHeroKind;
  title: string;
  lead: string;
  eyebrow?: string;
}) {
  const icon = singleIcon[kind];
  return (
    <header className={`ru-pilot-hero ru-pilot-hero--${kind}`}>
      <div className="wrap ru-pilot-hero-inner">
        <div className="ru-pilot-hero-copy">
          {eyebrow ? <p className="ru-pilot-eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          <p className="ru-pilot-lead">{lead}</p>
        </div>
        <div className="ru-thematic-hero-art" aria-hidden="true">
          {kind === "company" ? (
            <div className="ru-company-mark"><Logo variant="mark" title="" size={128} /></div>
          ) : kind === "products" ? (
            <div className="ru-products-hero-icons">
              <FounderIcon name="azevsm-index" />
              <FounderIcon name="azevsm-institutional-index" />
              <FounderIcon name="azevsm-plus" />
            </div>
          ) : icon ? (
            <FounderIcon name={icon} className="ru-hero-founder-icon" />
          ) : null}
        </div>
      </div>
    </header>
  );
}
