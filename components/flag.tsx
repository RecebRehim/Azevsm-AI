import type { Locale } from "@/lib/i18n";

export function Flag({ locale }: { locale: Locale }) {
  return (
    <svg className="flag" viewBox="0 0 24 16" aria-hidden="true">
      {locale === "en" ? <UnitedKingdom /> : null}
      {locale === "az" ? <Azerbaijan /> : null}
      {locale === "ru" ? <Russia /> : null}
      {locale === "ar" ? <SaudiArabia /> : null}
      {locale === "zh" ? <China /> : null}
    </svg>
  );
}

function UnitedKingdom() {
  return (
    <>
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0 L24 16 M24 0 L0 16" stroke="#fff" strokeWidth="3" />
      <path d="M0 0 L24 16 M24 0 L0 16" stroke="#C8102E" strokeWidth="1.2" />
      <path d="M12 0 V16 M0 8 H24" stroke="#fff" strokeWidth="5" />
      <path d="M12 0 V16 M0 8 H24" stroke="#C8102E" strokeWidth="2.4" />
    </>
  );
}

function Azerbaijan() {
  return (
    <>
      <rect width="24" height="5.34" fill="#00B5E2" />
      <rect y="5.33" width="24" height="5.34" fill="#EF3340" />
      <rect y="10.66" width="24" height="5.34" fill="#509E2F" />
      <circle cx="11.2" cy="8" r="2.1" fill="#fff" />
      <circle cx="11.9" cy="8" r="1.7" fill="#EF3340" />
      <path d="M14.2 8 L15.1 7.4 L14.6 8.3 L15.3 8.9 L14.2 8.6 L13.4 9.2 L13.7 8.2 L12.9 7.6 L13.9 7.7 Z" fill="#fff" />
    </>
  );
}

function Russia() {
  return (
    <>
      <rect width="24" height="5.34" fill="#fff" />
      <rect y="5.33" width="24" height="5.34" fill="#0039A6" />
      <rect y="10.66" width="24" height="5.34" fill="#D52B1E" />
    </>
  );
}

function SaudiArabia() {
  return (
    <>
      <rect width="24" height="16" fill="#006C35" />
      <path d="M5 11.2 H16.5" stroke="#fff" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M16.2 10.4 L18.4 11.2 L16.2 12" fill="#fff" />
    </>
  );
}

function China() {
  return (
    <>
      <rect width="24" height="16" fill="#DE2910" />
      <path d="M5 3.2 L5.7 5.2 L7.8 5.2 L6.1 6.4 L6.8 8.4 L5 7.2 L3.2 8.4 L3.9 6.4 L2.2 5.2 L4.3 5.2 Z" fill="#FFDE00" />
    </>
  );
}
