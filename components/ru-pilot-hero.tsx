import { Logo } from "@/components/logo";

export type RuPilotHeroKind =
  | "platform" | "products" | "index" | "institutional" | "plus"
  | "technology" | "whitebox" | "trust" | "company" | "result" | "validation";

export function RuPilotHero({
  kind, title, lead, eyebrow,
}: {
  kind: RuPilotHeroKind;
  title: string;
  lead: string;
  eyebrow?: string;
}) {
  const nodeCount = kind === "plus" ? 7 : kind === "institutional" ? 6 : 5;
  return (
    <header className={`ru-pilot-hero ru-pilot-hero--${kind} wrap`}>
      <div className="ru-pilot-hero-copy">
        {eyebrow ? <p className="ru-pilot-eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p className="ru-pilot-lead">{lead}</p>
      </div>
      <div className="ru-pilot-hero-visual" aria-hidden="true">
        {kind === "company" ? (
          <div className="ru-company-mark">
            <Logo variant="mark" title="" size={132} />
            <span className="ru-company-ring ru-company-ring-a" />
            <span className="ru-company-ring ru-company-ring-b" />
          </div>
        ) : (
          <div className="ru-pilot-visual-frame">
            <span className="ru-pilot-axis ru-pilot-axis-a" />
            <span className="ru-pilot-axis ru-pilot-axis-b" />
            {Array.from({ length: nodeCount }, (_, index) => (
              <span className={`ru-pilot-node ru-pilot-node-${index + 1}`} key={index} />
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
