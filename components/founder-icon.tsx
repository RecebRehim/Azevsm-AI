export type FounderIconName =
  | "azevsm-index"
  | "azevsm-institutional-index"
  | "azevsm-plus"
  | "methodology-ontology"
  | "azevsm-ai"
  | "white-box"
  | "structured-evidence"
  | "analytical-models"
  | "trusted-results"
  | "plus-budget"
  | "plus-investment"
  | "plus-financial-resilience"
  | "plus-institutional-risk"
  | "plus-governance"
  | "plus-product-rights"
  | "plus-sustainability";

export function FounderIcon({
  name,
  className = "",
}: {
  name: FounderIconName;
  className?: string;
}) {
  return <span className={`founder-icon founder-icon--${name} ${className}`.trim()} aria-hidden="true" />;
}
