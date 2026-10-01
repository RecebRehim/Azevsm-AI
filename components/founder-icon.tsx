export type FounderIconName =
  | "azevsm-index"
  | "azevsm-institutional-index"
  | "azevsm-plus"
  | "platform-structure"
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

const navy = "var(--founder-stroke, #1e4a8a)";
const gold = "var(--founder-accent, #c5a059)";

function FounderGlyph({ name }: { name: FounderIconName }) {
  const common = {
    fill: "none",
    stroke: navy,
    strokeWidth: 2.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "azevsm-index") {
    return (
      <>
        <path d="M12 50V30h10v20M27 50V18h10v32M42 50V35h10v15M9 53h46" {...common} />
        <path d="M31 14l4-5 4 5" fill="none" stroke={gold} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    );
  }

  if (name === "azevsm-institutional-index") {
    return (
      <>
        <path d="M10 25l22-13 22 13H10zM15 29h7v17h-7zM29 29h7v17h-7zM43 29h7v17h-7zM10 50h44" {...common} />
        <circle cx="49" cy="16" r="5.5" fill="none" stroke={gold} strokeWidth="2.4" />
        <path d="M46.5 16l1.8 1.8 3.4-4" fill="none" stroke={gold} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    );
  }

  if (name === "azevsm-plus") {
    return (
      <>
        <rect x="12" y="12" width="40" height="40" rx="10" {...common} />
        <path d="M32 21v22M21 32h22" fill="none" stroke={gold} strokeWidth="3" strokeLinecap="round" />
        <path d="M17 17l5 5M47 17l-5 5M17 47l5-5M47 47l-5-5" {...common} />
      </>
    );
  }

  if (name === "platform-structure") {
    return (
      <>
        <path d="M9 11h20v42H9zM14 20h10M14 27h10M14 34h7M14 41h10" {...common} />
        <path d="M32 32h8M36 28l4 4-4 4" fill="none" stroke={gold} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="44" y="14" width="12" height="36" rx="2.5" {...common} />
        <path d="M48 22h4M48 29h4M48 36h4M48 43h4" fill="none" stroke={gold} strokeWidth="2.2" strokeLinecap="round" />
      </>
    );
  }

  if (name === "methodology-ontology") {
    return (
      <>
        <circle cx="32" cy="12" r="5" fill="none" stroke={gold} strokeWidth="2.4" />
        <circle cx="16" cy="43" r="5" {...common} />
        <circle cx="32" cy="50" r="5" {...common} />
        <circle cx="48" cy="43" r="5" {...common} />
        <path d="M32 17v12M16 38v-8h32v8M32 29v16" {...common} />
      </>
    );
  }

  if (name === "azevsm-ai") {
    return (
      <>
        <path d="M29 9c-6-4-14 1-14 8-6 2-8 10-4 15-1 7 5 13 12 12 2 4 6 6 10 5V11c-1-1-2-2-4-2z" {...common} />
        <path d="M35 15h8v-5M35 23h14v-6M35 32h18M35 41h14v6M35 49h8v5" fill="none" stroke={gold} strokeWidth="2.35" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="43" cy="10" r="2.3" fill={gold} />
        <circle cx="49" cy="17" r="2.3" fill={gold} />
        <circle cx="53" cy="32" r="2.3" fill={gold} />
        <circle cx="49" cy="47" r="2.3" fill={gold} />
        <circle cx="43" cy="54" r="2.3" fill={gold} />
      </>
    );
  }

  if (name === "white-box") {
    return (
      <>
        <path d="M17 9h22l9 9v37H17zM39 9v10h9M23 28h16M23 35h11" {...common} />
        <circle cx="41" cy="44" r="8" fill="none" stroke={gold} strokeWidth="2.4" />
        <path d="M46.5 49.5L53 56" fill="none" stroke={gold} strokeWidth="2.4" strokeLinecap="round" />
      </>
    );
  }

  if (name === "structured-evidence") {
    return (
      <>
        <rect x="11" y="12" width="18" height="14" rx="3" {...common} />
        <rect x="35" y="12" width="18" height="14" rx="3" {...common} />
        <rect x="23" y="39" width="18" height="14" rx="3" {...common} />
        <path d="M20 26v7h24v-7M32 33v6" {...common} />
        <path d="M27 46l3 3 6-7" fill="none" stroke={gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    );
  }

  if (name === "analytical-models") {
    return (
      <>
        <path d="M11 50h43M15 45V31h8v14M28 45V20h8v25M41 45V27h8v18" {...common} />
        <path d="M16 22l11-8 9 5 12-10" fill="none" stroke={gold} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M43 9h5v5" fill="none" stroke={gold} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    );
  }

  if (name === "trusted-results") {
    return (
      <>
        <path d="M32 7l20 8v16c0 14-8 23-20 28-12-5-20-14-20-28V15z" {...common} />
        <path d="M21 32l7 7 15-17" fill="none" stroke={gold} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </>
    );
  }

  if (name === "plus-budget") {
    return (
      <>
        <path d="M16 8h31v48H16zM22 18h18M22 25h12" {...common} />
        <path d="M22 46V36h6v10M32 46V31h6v15M42 46V26h6v20" fill="none" stroke={gold} strokeWidth="2.6" />
      </>
    );
  }

  if (name === "plus-investment") {
    return (
      <>
        <path d="M10 51h44M14 43l11-10 9 5 15-18M43 20h6v6" {...common} />
        <circle cx="20" cy="18" r="6" fill="none" stroke={gold} strokeWidth="2.4" />
        <path d="M20 14v8M17 17h6" fill="none" stroke={gold} strokeWidth="2.1" strokeLinecap="round" />
      </>
    );
  }

  if (name === "plus-financial-resilience") {
    return (
      <>
        <path d="M32 7l20 8v16c0 13-8 22-20 27-12-5-20-14-20-27V15z" {...common} />
        <path d="M20 38l7-8 6 5 11-14" fill="none" stroke={gold} strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
      </>
    );
  }

  if (name === "plus-institutional-risk") {
    return (
      <>
        <path d="M12 26l20-12 20 12H12zM16 30h7v16h-7zM29 30h7v16h-7zM42 30h7v16h-7zM11 50h42" {...common} />
        <circle cx="50" cy="15" r="6" fill={gold} />
        <path d="M50 11.5v4.5M50 19h.01" fill="none" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" />
      </>
    );
  }

  if (name === "plus-governance") {
    return (
      <>
        <circle cx="32" cy="13" r="6" fill="none" stroke={gold} strokeWidth="2.4" />
        <circle cx="15" cy="45" r="6" {...common} />
        <circle cx="32" cy="45" r="6" {...common} />
        <circle cx="49" cy="45" r="6" {...common} />
        <path d="M32 19v10M15 39v-8h34v8M32 29v10" {...common} />
      </>
    );
  }

  if (name === "plus-product-rights") {
    return (
      <>
        <path d="M16 8h25l9 9v39H16zM41 8v10h9M23 27h19M23 34h13" {...common} />
        <circle cx="41" cy="44" r="8" fill="none" stroke={gold} strokeWidth="2.4" />
        <path d="M37 44l3 3 5-6" fill="none" stroke={gold} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    );
  }

  return (
    <>
      <circle cx="31" cy="32" r="21" {...common} />
      <path d="M10 32h42M31 11c7 7 10 14 10 21s-3 14-10 21M31 11c-7 7-10 14-10 21s3 14 10 21" {...common} />
      <path d="M38 24c8-7 14-5 15-4-1 8-5 13-13 13-3 0-5-1-7-2 1-3 2-5 5-7z" fill="none" stroke={gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

export function FounderIcon({
  name,
  className = "",
}: {
  name: FounderIconName;
  className?: string;
}) {
  return (
    <span className={`founder-icon founder-icon--inline founder-icon--${name} ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 64 64" focusable="false">
        <FounderGlyph name={name} />
      </svg>
    </span>
  );
}
