import Link from "next/link";
import { Hero } from "@/components/hero";
import { RuPilotBlocks } from "@/components/ru-pilot-blocks";
import type { SiteCopy } from "@/lib/content/copy";
import { getProductAuthorityPage } from "@/lib/content/product-authority-pages-v31";
import { localePath } from "@/lib/i18n";

export function RuPilotHome({ copy }: { copy: SiteCopy }) {
  const platform = getProductAuthorityPage("ru", "platform");
  const moveStart = platform?.blocks.findIndex((block) => block.type === "heading" && block.text === "Проблема, которую решает AzevsmAI") ?? -1;
  const movedBlocks = platform && moveStart >= 0 ? platform.blocks.slice(moveStart) : [];

  return (
    <>
      <Hero locale="ru" copy={copy} />
      <section className="ru-home-transfer">
        <div className="wrap ru-pilot-prose"><RuPilotBlocks blocks={movedBlocks} /></div>
      </section>
      <section className="band ru-home-products">
        <div className="wrap">
          <div className="band-head">
            <div><p className="kicker">{copy.homeProductsKicker}</p><h2>{copy.homeProductsTitle}</h2></div>
            <Link className="text-link" href={localePath("ru", "/products")}>{copy.viewAll}</Link>
          </div>
          <div className="product-row">
            {copy.homeProducts.map(([title, body, href], index) => (
              <Link className="line-card" key={title} href={localePath("ru", href)}>
                <span className="ru-home-card-sign" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
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
            <div><p className="kicker">{copy.homeTechKicker}</p><h2>{copy.homeTechTitle}</h2></div>
            <Link className="text-link" href={localePath("ru", "/technology")}>{copy.learnMore}</Link>
          </div>
          <div className="foundation-row">
            {copy.homeTech.map(([title, body], index) => (
              <article key={title}>
                <span className="ru-home-tech-sign" aria-hidden="true"><i /><i /><i className={`ru-tech-sign-${index + 1}`} /></span>
                <h3>{title}</h3><p>{body}</p>
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
                <span className="ru-home-why-sign" aria-hidden="true">{index + 1}</span>
                <div><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="home-close ru-home-company">
        <div className="wrap home-close-inner">
          <div className="home-close-copy">
            <p className="kicker">{copy.companyKicker}</p><h2>{copy.companyTitle}</h2><p>{copy.companyLead}</p>
          </div>
          <div className="cta-row home-close-actions">
            <Link className="btn btn-on-dark" href={localePath("ru", "/company")}>{copy.nav.company}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
