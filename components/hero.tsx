import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/logo";
import type { SiteCopy } from "@/lib/content/copy";
import { localePath, type Locale } from "@/lib/i18n";
import { platformEntryUrl } from "@/lib/platform";

function renderRuThesis(text: string) {
  const term = "AzeVSM AI";
  const index = text.indexOf(term);
  if (index < 0) return text;
  return <>{text.slice(0, index)}<span className="ru-nowrap-term">{term}</span>{text.slice(index + term.length)}</>;
}

export function Hero({ locale, copy }: { locale: Locale; copy: SiteCopy }) {
  const entry = platformEntryUrl();
  return (
    <section className="hero">
      <Image className="hero-photo" src="/hero-bg.jpg" alt="" fill priority sizes="100vw" />
      <div className="hero-scrim" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>{copy.heroTitle}</h1>
          <p className="hero-lead">{copy.heroLead}</p>
          {locale !== "ru" ? (
            <div className="cta-row">
              <Link className="btn btn-primary" href={localePath(locale, "/platform")}>
                {copy.explore}
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
              <Link className="btn btn-ghost" href={localePath(locale, "/technology")}>{copy.ourTechnology}</Link>
              <a className="btn btn-ghost" href={entry ?? localePath(locale, "/enter")}>{copy.enterPlatform}</a>
            </div>
          ) : null}
        </div>
        <aside className="hero-panel" aria-label={copy.logoTitle}>
          <Logo variant="mark" title={copy.logoTitle} size={100} />
          <p className="hero-brand"><strong>Azevsm</strong><span>Systems</span></p>
          <hr className="hero-rule" />
          <p className="hero-words">{locale === "ru" ? "ДОКАЗАТЕЛЬСТВА\nАНАЛИЗ\nДОВЕРИЕ" : copy.heroWords}</p>
          <p className="hero-tomorrow">{locale === "ru" ? renderRuThesis(copy.thesisSub) : copy.heroTomorrow}</p>
        </aside>
      </div>
    </section>
  );
}
