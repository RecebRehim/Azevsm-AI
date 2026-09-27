export function RuHomeProductIcon({ index }: { index: number }) {
  const icons = [
    <svg key="bars" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 48V28h10v20z" fill="#1e4a8a" />
      <path d="M27 48V16h10v32z" fill="#c5a059" />
      <path d="M42 48V34h10v14z" fill="#1e4a8a" />
      <path d="M8 50h48" fill="none" stroke="#1e4a8a" strokeWidth="2.5" strokeLinecap="round" />
    </svg>,
    <svg key="bank" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M10 24l22-12 22 12z" fill="#c5a059" />
      <path d="M14 26h8v18h-8zM28 26h8v18h-8zM42 26h8v18h-8z" fill="#1e4a8a" />
      <path d="M10 46h44v6H10z" fill="#1e4a8a" />
      <path d="M8 24h48" fill="none" stroke="#1e4a8a" strokeWidth="2" />
    </svg>,
    <svg key="layers" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 8l22 12-22 12L10 20z" fill="#c5a059" />
      <path d="M10 28l22 12 22-12" fill="none" stroke="#1e4a8a" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M10 40l22 12 22-12" fill="none" stroke="#1e4a8a" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>,
  ];
  return icons[index] ?? null;
}

export function RuHomeFoundationIcon({ index }: { index: number }) {
  const icons = [
    <svg key="network" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="6.5" fill="none" stroke="#c5a059" strokeWidth="2.7" />
      <circle cx="32" cy="9" r="4.5" fill="none" stroke="#c5a059" strokeWidth="2.6" />
      <circle cx="32" cy="55" r="4.5" fill="none" stroke="#c5a059" strokeWidth="2.6" />
      <path d="M32 13.5V25.5M32 38.5V50.5" fill="none" stroke="#c5a059" strokeWidth="2.5" />
      <circle cx="12" cy="21" r="4.5" fill="none" stroke="#1e4a8a" strokeWidth="2.6" />
      <circle cx="52" cy="21" r="4.5" fill="none" stroke="#1e4a8a" strokeWidth="2.6" />
      <circle cx="12" cy="43" r="4.5" fill="none" stroke="#1e4a8a" strokeWidth="2.6" />
      <circle cx="52" cy="43" r="4.5" fill="none" stroke="#1e4a8a" strokeWidth="2.6" />
      <path d="M16 24L26.5 28.5M48 24L37.5 28.5M16 40L26.5 35.5M48 40L37.5 35.5" fill="none" stroke="#1e4a8a" strokeWidth="2.5" />
    </svg>,
    <svg key="ai" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M31 7.5c-2.2-2.6-6.8-3.5-11-1.2C16.5 8.5 14.2 11.2 13.2 14.5c-1.5.2-3.5 1.2-5 2.8C6 19.5 4.8 23 5.2 26.5c.3 2.8 1.8 5 3.8 6.2.6 2.5 2.5 5 5.8 6 2.5.8 6.2.5 9.7.8H31" fill="none" stroke="#1e4a8a" strokeWidth="2.35" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31 7.5v32.8" fill="none" stroke="#1e4a8a" strokeWidth="2.35" strokeLinecap="round" />
      <path d="M14.5 18.5c2.8 1.5 5.5-.5 7.5-3M13.8 26c3 .8 5.8-1.2 7.8-4M15.2 33.5c2.5.6 5-1.5 6.8-3.5" fill="none" stroke="#1e4a8a" strokeWidth="2" strokeLinecap="round" />
      <path d="M33.5 12v31" fill="none" stroke="#c5a059" strokeWidth="2.25" strokeLinecap="round" />
      <path d="M33.5 17H41V10.5M33.5 22H47V16.5M33.5 28.5H53.5M33.5 35H47V40.5M33.5 40H41V46.5" fill="none" stroke="#c5a059" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="41" cy="10.5" r="2.45" fill="#c5a059" />
      <circle cx="47" cy="16.5" r="2.45" fill="#c5a059" />
      <circle cx="53.5" cy="28.5" r="2.45" fill="#c5a059" />
      <circle cx="47" cy="40.5" r="2.45" fill="#c5a059" />
      <circle cx="41" cy="46.5" r="2.45" fill="#c5a059" />
    </svg>,
    <svg key="whitebox" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 10h20l10 10v34H18z" fill="none" stroke="#1e4a8a" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M38 10v10h10" fill="none" stroke="#1e4a8a" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M24 28h16M24 34h12" fill="none" stroke="#1e4a8a" strokeWidth="2" />
      <circle cx="42" cy="44" r="9" fill="none" stroke="#c5a059" strokeWidth="2.5" />
      <path d="M48 50l6 6" fill="none" stroke="#c5a059" strokeWidth="2.5" strokeLinecap="round" />
    </svg>,
  ];
  return icons[index] ?? null;
}

export function RuHomeWhyIcon({ index }: { index: number }) {
  const icons = [
    <svg key="shield" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 8l20 8v16c0 14-8 24-20 28C20 56 12 46 12 32V16z" fill="none" stroke="#1e4a8a" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M22 32l7 7 14-16" fill="none" stroke="#c5a059" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="chart" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 48V30h8v18z" fill="#1e4a8a" />
      <path d="M24 48V22h8v26z" fill="#c5a059" />
      <path d="M36 48V16h8v32z" fill="#1e4a8a" />
      <path d="M48 48V26h8v22z" fill="#c5a059" />
      <path d="M8 50h52" fill="none" stroke="#1e4a8a" strokeWidth="2.5" strokeLinecap="round" />
    </svg>,
    <svg key="hands" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 19h14l7 7 4-4c4-4 10-4 14 0l4 4" fill="none" stroke="#1e4a8a" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 18l-3 25h9l14 13c3 3 7-1 4-4l-3-3" fill="none" stroke="#1e4a8a" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M55 18l3 25h-8L37 54" fill="none" stroke="#1e4a8a" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 26l-5 5c-3 3 1 7 4 4l6-6" fill="none" stroke="#c5a059" strokeWidth="2.7" strokeLinecap="round" />
    </svg>,
  ];
  return icons[index] ?? null;
}

export type RuPlusServiceIconName =
  | "budget"
  | "investment"
  | "financial-resilience"
  | "institutional-risk"
  | "governance"
  | "product-rights"
  | "sustainability";

export function RuPlusServiceIcon({ name }: { name: RuPlusServiceIconName }) {
  const common = { fill: "none", stroke: "#1e4a8a", strokeWidth: 2.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (name === "budget") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M17 9h30v46H17z" {...common} />
        <path d="M23 19h18M23 25h13" {...common} />
        <path d="M23 45V35h6v10zM33 45V30h6v15z" fill="#1e4a8a" stroke="none" />
        <path d="M43 45V25h6v20z" fill="#c5a059" stroke="none" />
      </svg>
    );
  }

  if (name === "investment") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M10 51h44" {...common} />
        <path d="M14 43l11-10 9 5 15-18" {...common} />
        <path d="M43 20h6v6" {...common} />
        <circle cx="20" cy="18" r="7" fill="none" stroke="#c5a059" strokeWidth="2.5" />
        <path d="M20 14v8M17 17h6" fill="none" stroke="#c5a059" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "financial-resilience") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 7l20 8v16c0 13-8 22-20 27C20 53 12 44 12 31V15z" {...common} />
        <path d="M20 37l6-7 6 5 11-14" fill="none" stroke="#c5a059" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 44h24" {...common} />
      </svg>
    );
  }

  if (name === "institutional-risk") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M13 25l19-11 19 11H13zM17 29h6v16h-6zM29 29h6v16h-6zM41 29h6v16h-6zM12 49h40" {...common} />
        <circle cx="50" cy="15" r="7" fill="#c5a059" stroke="none" />
        <path d="M50 11v5M50 19h.01" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "governance") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="13" r="6" fill="none" stroke="#c5a059" strokeWidth="2.5" />
        <circle cx="15" cy="45" r="6" {...common} />
        <circle cx="32" cy="45" r="6" {...common} />
        <circle cx="49" cy="45" r="6" {...common} />
        <path d="M32 19v10M15 39V31h34v8M32 29v10" {...common} />
      </svg>
    );
  }

  if (name === "product-rights") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M16 8h25l9 9v39H16zM41 8v10h9" {...common} />
        <path d="M23 27h19M23 34h13" {...common} />
        <circle cx="41" cy="44" r="8" fill="none" stroke="#c5a059" strokeWidth="2.5" />
        <path d="M45 49l5 5" fill="none" stroke="#c5a059" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M37 44l3 3 5-6" fill="none" stroke="#c5a059" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="31" cy="32" r="21" {...common} />
      <path d="M10 32h42M31 11c7 7 10 14 10 21S38 46 31 53M31 11c-7 7-10 14-10 21s3 14 10 21" {...common} />
      <path d="M38 24c8-7 14-5 15-4-1 8-5 13-13 13-3 0-5-1-7-2 1-3 2-5 5-7z" fill="none" stroke="#c5a059" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
