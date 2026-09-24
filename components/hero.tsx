import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/logo";
import type { SiteCopy } from "@/lib/content/copy";
import { localePath, type Locale } from "@/lib/i18n";
import { platformEntryUrl } from "@/lib/platform";

export function Hero({ locale, copy }: { locale: Locale; copy: SiteCopy }) {
  const entry = platformEntryUrl();
  return (
    <section className="hero">
      <Image className="hero-photo" src="/hero-office.jpg" alt="" fill priority sizes="100vw" />
      <div className="hero-scrim" />
      <div className="wrap hero-grid">
        <div>
          <h1>{copy.heroTitle}</h1>
          <p className="hero-lead">{copy.heroLead}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href={localePath(locale, "/platform")}>
              {copy.explore}
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
            <Link className="btn btn-ghost" href={localePath(locale, "/technology")}>{copy.ourTechnology}</Link>
            <a className="btn btn-quiet" href={entry ?? localePath(locale, "/enter")}>{copy.enterPlatform}</a>
          </div>
        </div>
        <aside className="hero-panel" aria-label={copy.logoTitle}>
          <Logo title={copy.logoTitle} />
          <p className="hero-words">{copy.heroIdeas}</p>
          <hr className="hero-rule" />
          <p className="hero-tomorrow">{copy.heroTomorrow}</p>
          <div className="hero-viz" aria-hidden="true">
            <div className="viz-labels">
              {copy.vizLabels.map((label) => <span key={label}>{label}</span>)}
            </div>
            <div className="bars">
              <span style={{ height: "28%" }} />
              <span style={{ height: "46%" }} />
              <span style={{ height: "70%" }} />
              <span style={{ height: "54%" }} />
              <span style={{ height: "86%" }} />
              <span style={{ height: "40%" }} />
            </div>
            <div className="ring" />
          </div>
        </aside>
      </div>
    </section>
  );
}
