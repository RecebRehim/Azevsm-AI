import Link from "next/link";
import { notFound } from "next/navigation";
import { FounderIcon, type FounderIconName } from "@/components/founder-icon";
import { RuPlusServiceIcon, type RuPlusServiceIconName } from "@/components/ru-line-icons";
import { RuPilotActions, RuPilotBlocks } from "@/components/ru-pilot-blocks";
import { RuPilotHero, type RuPilotHeroKind } from "@/components/ru-pilot-hero";
import { getCopy } from "@/lib/content/copy";
import { getProductAuthorityPage, type ProductAuthorityKey } from "@/lib/content/product-authority-pages-v31";
import { publicServices } from "@/lib/content/services";
import { localePath, type Locale } from "@/lib/i18n";

const heroKind: Record<ProductAuthorityKey, RuPilotHeroKind> = {
  platform: "platform",
  products: "products",
  index: "index",
  institutional: "institutional",
  plus: "plus",
};

const scenarioRoutes = [
  "/products/azevsm-index",
  "/products/azevsm-index",
  "/products",
  "/products/azevsm-institutional-index",
  "/products/azevsm-institutional-index",
] as const;

const productIcons: FounderIconName[] = ["azevsm-index", "azevsm-institutional-index", "azevsm-plus"];
const scenarioIcons: FounderIconName[] = [
  "azevsm-index",
  "plus-investment",
  "azevsm-plus",
  "azevsm-institutional-index",
  "platform-structure",
];
const reproIcons: FounderIconName[] = [
  "trusted-results",
  "structured-evidence",
  "white-box",
  "platform-structure",
  "methodology-ontology",
];
const plusIcons: RuPlusServiceIconName[] = [
  "budget",
  "investment",
  "financial-resilience",
  "institutional-risk",
  "governance",
  "product-rights",
  "sustainability",
];

function splitCell(value: string) {
  const [title, ...rest] = value.split("\n");
  return { title, body: rest.join("\n") };
}

export function RuProductAuthorityPage({ locale, pageKey }: { locale: Locale; pageKey: ProductAuthorityKey }) {
  const page = getProductAuthorityPage(locale, pageKey);
  if (!page) notFound();

  const heroTopics = page.blocks
    .flatMap((block) => block.type === "heading" && !/^\d+\./.test(block.text) ? [block.text] : [])
    .slice(0, 3);

  if (pageKey === "platform") {
    const heading = page.blocks.find((block) => block.type === "heading");
    const intro = page.blocks.find((block) => block.type === "p");
    const table = page.blocks.find((block) => block.type === "table");
    const scenarios =
      table?.type === "table"
        ? table.header
          ? table.rows.slice(1).map((row) => ({ title: row[0] ?? "", body: row[1] ?? "" }))
          : table.rows.flat().filter(Boolean).map(splitCell)
        : [];
    const copy = getCopy(locale);
    return (
      <>
        <RuPilotHero kind="platform" title={page.title} lead={page.lead} topics={heroTopics} />
        <section className="section-tight ru-authority-section ru-product-authority-section ru-product-authority-section--platform">
          <div className="wrap ru-pilot-prose">
            <section className="ru-scenario-section">
              <h2>{heading?.type === "heading" ? heading.text : "Я представляю"}</h2>
              {intro?.type === "p" ? <p>{intro.text}</p> : null}
              <div className="ru-scenario-grid">
                {scenarios.map((item, index) => {
                  const href = scenarioRoutes[index];
                  return href ? (
                    <Link className="ru-scenario-card" href={localePath(locale, href)} key={item.title}>
                      <FounderIcon name={scenarioIcons[index]} className="ru-scenario-icon" />
                      <div className="ru-scenario-card-copy">
                        <strong>{item.title}</strong>
                        <span>{item.body}</span>
                      </div>
                      <i aria-hidden="true">→</i>
                    </Link>
                  ) : null;
                })}
              </div>
            </section>
            <section className="ru-platform-repro">
              <p className="kicker">{copy.standardKicker}</p>
              <h2>{copy.standardTitle}</h2>
              <div className="ru-repro-grid">
                {copy.standardPoints.map(([title, body], index) => (
                  <article key={title}>
                    <FounderIcon name={reproIcons[index]} className="ru-repro-icon" />
                    <span className="ru-repro-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </article>
                ))}
              </div>
            </section>
            <RuPilotActions actions={page.actions} locale={locale} />
          </div>
        </section>
      </>
    );
  }

  if (pageKey === "products") {
    const table = page.blocks.find((block) => block.type === "table");
    const rows =
      table?.type === "table"
        ? table.header
          ? table.rows.slice(1).map((row) => ({ title: row[0] ?? "", body: row[1] ?? "" }))
          : table.rows.flat().filter(Boolean).map(splitCell)
        : [];
    return (
      <>
        <RuPilotHero kind="products" title={page.title} lead={page.lead} topics={heroTopics} />
        <section className="section-tight ru-authority-section ru-product-authority-section ru-product-authority-section--products">
          <div className="wrap ru-pilot-prose">
            <div className="ru-products-grid">
              {rows.slice(0, 3).map((item, index) => {
                const action = page.actions[index];
                return (
                  <Link className="ru-product-card" href={localePath(locale, action.href)} key={item.title}>
                    <FounderIcon name={productIcons[index]} className="ru-product-card-icon" />
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.body}</p>
                    </div>
                    <span aria-hidden="true">→</span>
                  </Link>
                );
              })}
            </div>
            <RuPilotBlocks blocks={page.blocks.filter((block) => block !== table)} />
          </div>
        </section>
      </>
    );
  }

  if (pageKey === "plus") {
    const intro = page.blocks.find((block) => block.type === "p");
    const services = publicServices(locale);
    const items = page.blocks.flatMap((block, index) => {
      if (block.type !== "heading" || !/^[1-7]\./.test(block.text)) return [];
      const body = page.blocks[index + 1];
      return body?.type === "p" ? [{ heading: block.text, body: body.text }] : [];
    });
    let clientHeadingIndex = -1;
    page.blocks.forEach((block, index) => {
      if (block.type === "heading" && !/^[1-7]\./.test(block.text)) clientHeadingIndex = index;
    });
    const clientBlocks = clientHeadingIndex >= 0 ? page.blocks.slice(clientHeadingIndex) : [];
    return (
      <>
        <RuPilotHero kind="plus" title={page.title} lead={page.lead} topics={heroTopics} />
        <section className="section-tight ru-authority-section ru-product-authority-section ru-product-authority-section--plus">
          <div className="wrap ru-pilot-prose">
            {intro?.type === "p" ? <p className="ru-plus-intro">{intro.text}</p> : null}
            <div className="ru-plus-grid">
              {items.map((item, index) => {
                const service = services[index];
                return (
                  <article className="ru-plus-card" key={item.heading}>
                    <div className="ru-plus-card-head">
                      <span className="ru-plus-icon"><RuPlusServiceIcon name={plusIcons[index]} /></span>
                      <h2>{item.heading}</h2>
                    </div>
                    <p style={{ whiteSpace: "pre-line" }}>{item.body}</p>
                    {service ? <span className="ru-plus-product-name">{service.labels[locale]}</span> : null}
                  </article>
                );
              })}
            </div>
            <RuPilotBlocks blocks={clientBlocks} />
            <RuPilotActions actions={page.actions} locale={locale} />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <RuPilotHero kind={heroKind[pageKey]} title={page.title} lead={page.lead} topics={heroTopics} />
      <section className={`section-tight ru-authority-section ru-product-authority-section ru-product-authority-section--${pageKey}`}>
        <div className="wrap ru-pilot-prose">
          <RuPilotBlocks blocks={page.blocks} />
          <RuPilotActions actions={page.actions} locale={locale} />
        </div>
      </section>
    </>
  );
}
