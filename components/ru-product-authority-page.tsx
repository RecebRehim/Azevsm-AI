import Link from "next/link";
import { notFound } from "next/navigation";
import { RuPilotActions, RuPilotBlocks } from "@/components/ru-pilot-blocks";
import { RuPilotHero, type RuPilotHeroKind } from "@/components/ru-pilot-hero";
import { getCopy } from "@/lib/content/copy";
import { getProductAuthorityPage, type ProductAuthorityKey } from "@/lib/content/product-authority-pages-v31";
import { publicServices } from "@/lib/content/services";
import { localePath } from "@/lib/i18n";

const heroKind: Record<ProductAuthorityKey, RuPilotHeroKind> = {
  platform: "platform", products: "products", index: "index", institutional: "institutional", plus: "plus",
};

const scenarioRoutes: Record<string, string> = {
  "Стартап / основатель": "/products/azevsm-index",
  "Инвестор / фонд": "/products/azevsm-index",
  "Компания / корпорация": "/products",
  "Банк / институт": "/products/azevsm-institutional-index",
  "Государственная / программная структура": "/products/azevsm-institutional-index",
};

function splitCell(value: string) {
  const [title, ...rest] = value.split("\n");
  return { title, body: rest.join("\n") };
}

function PlusGlyph({ index }: { index: number }) {
  const paths = [
    "M8 42h48M14 38V24h8v14M28 38V14h8v24M42 38V30h8v8",
    "M10 46l12-14 10 7 18-21M44 18h8v8",
    "M12 18h40v28H12zM18 38l8-9 8 6 10-12",
    "M32 8l20 9v14c0 13-8 22-20 27-12-5-20-14-20-27V17zM22 32h20",
    "M16 14h32v36H16zM23 22h18M23 30h18M23 38h11",
    "M14 18h24l12 12v20H14zM38 18v12h12M22 38h20",
    "M12 44c8-18 20-26 40-25M18 48c10-11 20-16 34-16M34 10v44",
  ];
  return <svg viewBox="0 0 64 64" aria-hidden="true"><path d={paths[index] ?? paths[0]} /></svg>;
}

export function RuProductAuthorityPage({ pageKey }: { pageKey: ProductAuthorityKey }) {
  const page = getProductAuthorityPage("ru", pageKey);
  if (!page) notFound();

  if (pageKey === "platform") {
    const heading = page.blocks.find((block) => block.type === "heading" && block.text === "Я представляю");
    const intro = page.blocks.find((block) => block.type === "p" && block.text.startsWith("Выберите свой сценарий"));
    const table = page.blocks.find((block) => block.type === "table");
    const cells = table?.type === "table" ? table.rows.flat().filter(Boolean) : [];
    const copy = getCopy("ru");
    return (
      <>
        <RuPilotHero kind="platform" title={page.title} lead={page.lead} />
        <section className="section-tight">
          <div className="wrap ru-pilot-prose">
            <section className="ru-scenario-section">
              <h2>{heading?.type === "heading" ? heading.text : "Я представляю"}</h2>
              {intro?.type === "p" ? <p>{intro.text}</p> : null}
              <div className="ru-scenario-grid">
                {cells.map((value) => {
                  const item = splitCell(value);
                  const href = scenarioRoutes[item.title];
                  return href ? (
                    <Link className="ru-scenario-card" href={localePath("ru", href)} key={item.title}>
                      <strong>{item.title}</strong><span>{item.body}</span><i aria-hidden="true">→</i>
                    </Link>
                  ) : null;
                })}
              </div>
            </section>
            <section className="ru-platform-repro">
              <p className="kicker">{copy.standardKicker}</p><h2>{copy.standardTitle}</h2>
              <div className="ru-repro-grid">
                {copy.standardPoints.map(([title, body], index) => (
                  <article key={title}>
                    <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{title}</h3><p>{body}</p>
                  </article>
                ))}
              </div>
            </section>
            <RuPilotActions actions={page.actions} />
          </div>
        </section>
      </>
    );
  }

  if (pageKey === "plus") {
    const intro = page.blocks.find((block) => block.type === "p");
    const services = publicServices("ru");
    const items = page.blocks.flatMap((block, index) => {
      if (block.type !== "heading" || !/^[1-7]\./.test(block.text)) return [];
      const body = page.blocks[index + 1];
      return body?.type === "p" ? [{ heading: block.text, body: body.text }] : [];
    });
    const clientHeadingIndex = page.blocks.findIndex((block) => block.type === "heading" && block.text === "Что получает клиент");
    const clientBlocks = clientHeadingIndex >= 0 ? page.blocks.slice(clientHeadingIndex) : [];
    return (
      <>
        <RuPilotHero kind="plus" title={page.title} lead={page.lead} />
        <section className="section-tight">
          <div className="wrap ru-pilot-prose">
            {intro?.type === "p" ? <p className="ru-plus-intro">{intro.text}</p> : null}
            <div className="ru-plus-grid">
              {items.map((item, index) => {
                const service = services[index];
                return (
                  <article className="ru-plus-card" key={item.heading}>
                    <div className="ru-plus-card-head">
                      <span className="ru-plus-icon"><PlusGlyph index={index} /></span>
                      <h2>{item.heading}</h2>
                    </div>
                    <p style={{ whiteSpace: "pre-line" }}>{item.body}</p>
                    {service ? <span className="ru-plus-product-name">{service.labels.ru}</span> : null}
                  </article>
                );
              })}
            </div>
            <RuPilotBlocks blocks={clientBlocks} />
            <RuPilotActions actions={page.actions} />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <RuPilotHero kind={heroKind[pageKey]} title={page.title} lead={page.lead} />
      <section className="section-tight">
        <div className="wrap ru-pilot-prose">
          <RuPilotBlocks blocks={page.blocks} />
          <RuPilotActions actions={page.actions} />
        </div>
      </section>
    </>
  );
}
