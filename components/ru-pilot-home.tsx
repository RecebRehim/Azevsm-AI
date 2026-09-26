import Link from "next/link";
import { Hero } from "@/components/hero";
import { FounderIcon, type FounderIconName } from "@/components/founder-icon";
import { RuPilotBlocks } from "@/components/ru-pilot-blocks";
import type { SiteCopy } from "@/lib/content/copy";
import { getProductAuthorityPage } from "@/lib/content/product-authority-pages-v31";
import { localePath } from "@/lib/i18n";
import { platformEntryUrl } from "@/lib/platform";

const productIcons: FounderIconName[] = ["azevsm-index", "azevsm-institutional-index", "azevsm-plus"];
const techIcons: Array<FounderIconName | null> = ["methodology-ontology", "azevsm-ai", "white-box", null];
const whyIcons: FounderIconName[] = ["structured-evidence", "analytical-models", "trusted-results"];

export function RuPilotHome({ copy }: { copy: SiteCopy }) {
  const platform = getProductAuthorityPage("ru", "platform");
  const moveStart = platform?.blocks.findIndex((block) => block.type === "heading" && block.text === "Проблема, которую решает AzevsmAI") ?? -1;
  const movedBlocks = platform && moveStart >= 0 ? platform.blocks.slice(moveStart) : [];
  const entry = platformEntryUrl();

  return (
    <>
      <Hero locale="ru" copy={copy} />

      <section className="ru-home-transfer">
        <div className="wrap ru-pilot-prose">
          <RuPilotBlocks blocks={movedBlocks} />
        </div>
      </section>

      <section className="band ru-home-products">
        <div className="wrap">
          <div className="band-head">
            <div>
              <p className="kicker">{copy.homeProductsKicker}</p>
              <h2>{copy.homeProductsTitle}</h2>
            </div>
            <Link className="text-link" href={localePath("ru", "/products")}>{copy.viewAll}</Link>
          </div>
          <div className="product-row">
            {copy.homeProducts.map(([title, body, href], index) => (
              <Link className="line-card" key={title} href={localePath("ru", href)}>
                <FounderIcon name={productIcons[index]} className="ru-home-product-icon" />
                <span><h3>{title}</h3><p>{body}</p></span>
                <svg className="icon line-go" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-rule ru-home-tech">
        <div className="wrap">
          <div className="band-head">
            <div>
              <p className="kicker">{copy.homeTechKicker}</p>
              <h2>{copy.homeTechTitle}</h2>
            </div>
            <Link className="text-link" href={localePath("ru", "/technology")}>{copy.learnMore}</Link>
          </div>
          <div className="foundation-row">
            {copy.homeTech.map(([title, body], index) => (
              <article key={title}>
                {techIcons[index] ? <FounderIcon name={techIcons[index]!} className="ru-home-tech-icon" /> : null}
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why-strip ru-home-why">
        <div className="wrap">
          <h2 className="kicker">{copy.homeWhyKicker}</h2>
          <div className="why-row">
            {copy.homeWhy.map(([title, body], index) => (
              <article key={title}>
                <FounderIcon name={whyIcons[index]} className="ru-home-why-icon" />
                <div><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-close ru-home-company">
        <div className="wrap home-close-inner">
          <div className="home-close-copy">
            <p className="kicker">{copy.companyKicker}</p>
            <h2>{copy.companyTitle}</h2>
            <p>{copy.companyLead}</p>
          </div>
          <div className="cta-row home-close-actions">
            <Link className="btn btn-on-dark" href={localePath("ru", "/company")}>{copy.nav.company}</Link>
          </div>
        </div>
      </section>

      <section className="ru-home-final-cta">
        <div className="wrap ru-home-final-cta-inner">
          <div>
            <p className="kicker">{copy.logoTitle}</p>
            <h2>{copy.closeTitle}</h2>
          </div>
          <div className="cta-row">
            <Link className="btn btn-primary" href={localePath("ru", "/platform")}>{copy.explore}</Link>
            <Link className="btn btn-ghost" href={localePath("ru", "/technology")}>{copy.ourTechnology}</Link>
            <a className="btn btn-ghost" href={entry ?? localePath("ru", "/enter")}>{copy.enterPlatform}</a>
          </div>
        </div>
      </section>
    </>
  );
}
