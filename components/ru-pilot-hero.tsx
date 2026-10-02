import { FounderIcon, type FounderIconName } from "@/components/founder-icon";
import { Logo } from "@/components/logo";
import { pageLandscapeBackgrounds, type PageLandscapeKind } from "@/lib/content/page-photos";

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
  | "difference"
  | "index-field"
  | "data-security"
  | "legal-compliance"
  | "privacy"
  | "terms"
  | "cookies"
  | "security"
  | "accessibility"
  | "enter"
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
  difference: "analytical-models",
  "index-field": "azevsm-index",
  "data-security": "structured-evidence",
  "legal-compliance": "trusted-results",
  privacy: "structured-evidence",
  terms: "trusted-results",
  cookies: "structured-evidence",
  security: "trusted-results",
  accessibility: "white-box",
  enter: "platform-structure",
};

function renderProtectedTechnologyName(text: string) {
  const term = "AzeVSM AI";
  const index = text.indexOf(term);
  if (index < 0) return text;
  return (
    <>
      {text.slice(0, index)}
      <span className="ru-nowrap-term">{term}</span>
      {text.slice(index + term.length)}
    </>
  );
}

function renderHeroTitle(text: string) {
  const lines = text.split("\n");
  if (lines.length === 1) return renderProtectedTechnologyName(text);
  return lines.map((line, index) => (
    <span key={`${line}-${index}`}>
      {index > 0 ? <br /> : null}
      {renderProtectedTechnologyName(line)}
    </span>
  ));
}

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
  const landscapeSlug =
    kind in pageLandscapeBackgrounds
      ? pageLandscapeBackgrounds[kind as PageLandscapeKind]
      : undefined;

  return (
    <header
      className={`ru-pilot-hero ru-pilot-hero--${kind}${landscapeSlug ? " ru-pilot-hero--landscape" : ""}`}
    >
      {landscapeSlug ? (
        <div
          className={`ru-pilot-hero-landscape ru-pilot-hero-landscape--${landscapeSlug}`}
          aria-hidden="true"
        />
      ) : null}

      <div className="wrap ru-pilot-hero-inner">
        <div className="ru-pilot-hero-copy">
          <h1>{renderHeroTitle(title)}</h1>
          <p className="ru-pilot-lead">{lead}</p>
        </div>

        {!landscapeSlug ? (
          <div className="ru-thematic-hero-art" aria-hidden="true">
            <div className="ru-hero-art-core">
              {kind === "platform" ? (
                <FounderIcon name="platform-structure" className="ru-platform-hero-icon" />
              ) : kind === "company" || kind === "insights" ? (
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
        ) : null}
      </div>
    </header>
  );
}
