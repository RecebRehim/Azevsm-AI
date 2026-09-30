import Link from "next/link";
import type { AuthorityPage } from "@/lib/content/authority-pages-v31";
import type { SiteCopy } from "@/lib/content/copy";
import { getProductAuthorityPage } from "@/lib/content/product-authority-pages-v31";
import { localePath, type Locale } from "@/lib/i18n";
import { platformEntryUrl } from "@/lib/platform";
import styles from "./ru-v5-home.module.css";

type IconName =
  | "platform"
  | "products"
  | "technology"
  | "trust"
  | "security"
  | "legal"
  | "company";

function V5Icon({ name }: { name: IconName }) {
  const blue = `v5-blue-${name}`;
  const gold = `v5-gold-${name}`;
  const glow = `v5-glow-${name}`;
  return (
    <svg className={styles.iconSvg} viewBox="0 0 96 96" aria-hidden="true">
      <defs>
        <linearGradient id={blue} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#89c5ff" stopOpacity=".96" />
          <stop offset=".46" stopColor="#2d78d2" stopOpacity=".94" />
          <stop offset="1" stopColor="#0b3f91" stopOpacity=".88" />
        </linearGradient>
        <linearGradient id={gold} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff0b6" />
          <stop offset=".46" stopColor="#e8b95d" />
          <stop offset="1" stopColor="#9f6f1f" />
        </linearGradient>
        <filter id={glow} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {name === "platform" ? (
        <g fill="none" strokeLinejoin="round" filter={`url(#${glow})`}>
          <path d="M18 31 48 15 78 31 48 47Z" stroke={`url(#${blue})`} strokeWidth="2.1" fill="rgba(74,142,224,.08)" />
          <path d="M18 45 48 29 78 45 48 61Z" stroke={`url(#${blue})`} strokeWidth="2.1" fill="rgba(74,142,224,.06)" />
          <path d="M18 59 48 43 78 59 48 75Z" stroke={`url(#${gold})`} strokeWidth="2.2" fill="rgba(232,185,93,.08)" />
          <path d="M48 47v14M48 61v14" stroke={`url(#${gold})`} strokeWidth="1.6" opacity=".8" />
        </g>
      ) : null}
      {name === "products" ? (
        <g fill="none" strokeLinejoin="round" filter={`url(#${glow})`}>
          {[0,1,2,3,4].map((i) => {
            const x=19+i*12, h=20+i*9, y=73-h;
            return <path key={i} d={`M${x} 73V${y}h8v${73-y}z`} stroke={i===4?`url(#${gold})`:`url(#${blue})`} strokeWidth="2" fill="rgba(61,127,211,.08)" />;
          })}
          <path d="M14 76h68" stroke={`url(#${gold})`} strokeWidth="1.5" />
        </g>
      ) : null}
      {name === "technology" ? (
        <g fill="none" filter={`url(#${glow})`}>
          <circle cx="48" cy="48" r="29" stroke={`url(#${gold})`} strokeWidth="2.1" />
          <ellipse cx="48" cy="48" rx="14" ry="29" stroke={`url(#${blue})`} strokeWidth="1.6" />
          <ellipse cx="48" cy="48" rx="29" ry="12" stroke={`url(#${blue})`} strokeWidth="1.6" transform="rotate(18 48 48)" />
          <ellipse cx="48" cy="48" rx="29" ry="12" stroke={`url(#${gold})`} strokeWidth="1.5" transform="rotate(-34 48 48)" />
          <path d="M22 58c18-16 36-23 53-20" stroke={`url(#${blue})`} strokeWidth="1.5" />
        </g>
      ) : null}
      {name === "trust" ? (
        <g fill="none" filter={`url(#${glow})`}>
          <path d="M48 14 73 24v20c0 18-10 31-25 38-15-7-25-20-25-38V24Z" stroke={`url(#${gold})`} strokeWidth="2.6" />
          <path d="m35 47 9 9 18-22" stroke={`url(#${gold})`} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ) : null}
      {name === "security" ? (
        <g fill="none" filter={`url(#${glow})`}>
          <ellipse cx="48" cy="24" rx="22" ry="9" stroke={`url(#${gold})`} strokeWidth="2.5" />
          <path d="M26 24v43c0 5 10 9 22 9s22-4 22-9V24" stroke={`url(#${gold})`} strokeWidth="2.5" />
          <path d="M26 39c0 5 10 9 22 9s22-4 22-9M26 54c0 5 10 9 22 9s22-4 22-9" stroke={`url(#${gold})`} strokeWidth="2" opacity=".9" />
        </g>
      ) : null}
      {name === "legal" ? (
        <g fill="none" filter={`url(#${glow})`} strokeLinecap="round" strokeLinejoin="round">
          <path d="M48 18v56M31 27h34M48 19 37 27M48 19l11 8M26 28 14 50h24Zm44 0L58 50h24Z" stroke={`url(#${gold})`} strokeWidth="2.2" />
          <path d="M30 75h36" stroke={`url(#${gold})`} strokeWidth="2.4" />
        </g>
      ) : null}
      {name === "company" ? (
        <g fill="none" filter={`url(#${glow})`}>
          <circle cx="48" cy="31" r="10" stroke={`url(#${gold})`} strokeWidth="2.3" />
          <circle cx="27" cy="39" r="7" stroke={`url(#${gold})`} strokeWidth="2" />
          <circle cx="69" cy="39" r="7" stroke={`url(#${gold})`} strokeWidth="2" />
          <path d="M31 72c0-12 7-21 17-21s17 9 17 21M10 70c0-9 6-16 15-16 5 0 9 2 12 6M86 70c0-9-6-16-15-16-5 0-9 2-12 6" stroke={`url(#${gold})`} strokeWidth="2.2" strokeLinecap="round" />
        </g>
      ) : null}
    </svg>
  );
}

function splitCell(value: string) {
  const [title, ...rest] = value.split("\n");
  return { title: title.trim(), body: rest.join("\n").trim() };
}

function V5AuthorityBlocks({ blocks }: { blocks: AuthorityPage["blocks"] }) {
  return (
    <div className={styles.authorityBlocks}>
      {blocks.map((block, index) => {
        if (block.type === "heading") return <h2 id={block.id} key={index}>{block.text}</h2>;
        if (block.type === "p") return <p key={index}>{block.text}</p>;
        if (block.type === "list") return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
        if (block.type === "note") return <article className={styles.note} key={index}><h3>{block.title}</h3><p>{block.body}</p></article>;
        if (block.type === "table") {
          const rows = block.header ? block.rows.slice(1) : block.rows;
          const cells = rows.flatMap((row) => row).filter(Boolean).map(splitCell);
          return (
            <div className={styles.authorityGrid} key={index}>
              {cells.map((cell, cellIndex) => (
                <article className={styles.authorityCard} key={cellIndex}>
                  <h3>{cell.title}</h3>
                  {cell.body ? <p>{cell.body}</p> : null}
                </article>
              ))}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

const resultPath = [
  ["Материалы и доказательства", "Работа начинается с документов, данных и подтверждаемой основы."],
  ["Структурированная оценка", "AzevsmAI проводит материал через управляемый технологический аналитический контур."],
  ["Система результатов", "Один зафиксированный результат получает несколько связанных клиентских представлений."],
] as const;

export function RuV5Home({ locale, copy }: { locale: Locale; copy: SiteCopy }) {
  const platform = getProductAuthorityPage(locale, "platform");
  const moveStart = platform?.blocks.findIndex((block, index) => index > 0 && block.type === "heading") ?? -1;
  const movedBlocks = platform && moveStart >= 0 ? platform.blocks.slice(moveStart) : [];
  const entry = platformEntryUrl();

  const primary = [
    ["/platform", copy.nav.platform, copy.thesis, "platform"],
    ["/products", copy.nav.products, copy.homeProductsTitle, "products"],
    ["/technology", copy.nav.technology, copy.homeTechTitle, "technology"],
  ] as const;

  const secondary = [
    ["/trust", copy.nav.trust, copy.trustTitle, "trust"],
    ["/data-security", "Безопасность данных", "AZEVSM SECURE", "security"],
    ["/legal-compliance", "Право и комплаенс", "", "legal"],
    ["/company", copy.nav.company, copy.companyTitle, "company"],
  ] as const;

  return (
    <div className={styles.root}>
      <section className={styles.hero} aria-labelledby="ru-v5-home-title">
        <div className={styles.shell}>
          <div className={styles.heroCopy}>
            <p className={styles.brand}>Azevsm Systems</p>
            <h1 id="ru-v5-home-title">{copy.heroTitle}</h1>
            <p className={styles.heroLead}>{copy.heroLead}</p>
          </div>

          <nav className={styles.primaryGrid} aria-label="Основные разделы">
            {primary.map(([href, title, body, icon]) => (
              <Link className={styles.primaryCard} href={localePath(locale, href)} key={href}>
                <span className={styles.primaryIcon}><V5Icon name={icon} /></span>
                <span className={styles.primaryText}><strong>{title}</strong><span>{body}</span></span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
            ))}
          </nav>

          <nav className={styles.secondaryGrid} aria-label="Дополнительные разделы">
            {secondary.map(([href, title, body, icon]) => (
              <Link className={styles.secondaryCard} href={localePath(locale, href)} key={href}>
                <span className={styles.secondaryIcon}><V5Icon name={icon} /></span>
                <span><strong>{title}</strong>{body ? <small>{body}</small> : null}</span>
              </Link>
            ))}
          </nav>

          <div className={styles.heroFoot}>
            <p className={styles.proof}>{copy.heroWords.split("\n").map((word) => <span key={word}>{word}</span>)}</p>
            <div className={styles.heroActions}>
              <a className={styles.enter} href={entry ?? localePath(locale, "/enter")}>{copy.enter}<span aria-hidden="true">→</span></a>
              <a className={styles.more} href="#ru-v5-content">{copy.learnMore}<span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </div>
      </section>

      <div id="ru-v5-content" className={styles.content}>
        <section className={styles.section}>
          <div className={styles.shell}>
            <V5AuthorityBlocks blocks={movedBlocks} />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>Путь результата</p>
              <h2>От материалов к понятному результату</h2>
            </div>
            <div className={styles.resultGrid}>
              {resultPath.map(([title, body], index) => (
                <article className={styles.resultCard} key={title}>
                  <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <div className={styles.centerAction}>
              <Link className={styles.outlineButton} href={localePath(locale, "/result-system")}>Посмотреть систему результатов</Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>{copy.homeProductsKicker}</p>
              <h2>{copy.homeProductsTitle}</h2>
            </div>
            <div className={styles.productGrid}>
              {copy.homeProducts.map(([title, body, href], index) => (
                <Link className={styles.productCard} href={localePath(locale, href)} key={title}>
                  <span className={styles.productNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <span className={styles.productAction}>Изучить продукт <span aria-hidden="true">→</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>{copy.homeTechKicker}</p>
              <h2>{copy.homeTechTitle}</h2>
            </div>
            <div className={styles.techGrid}>
              {copy.homeTech.slice(0,3).map(([title, body], index) => (
                <article className={styles.techCard} key={title}>
                  <span className={styles.techMark}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <div className={styles.centerAction}>
              <Link className={styles.outlineButton} href={localePath(locale, "/technology")}>{copy.learnMore}</Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.shell}>
            <article className={styles.secureCard}>
              <div className={styles.secureIcon}><V5Icon name="security" /></div>
              <div>
                <p className={styles.kicker}>AZEVSM SECURE</p>
                <h2>Конфиденциальная обработка без постоянного хранения исходных материалов</h2>
                <p>AzevsmAI включает режим AZEVSM SECURE для работы с чувствительными и конфиденциальными материалами. Исходные материалы и рабочее содержимое обрабатываются во временном защищённом контуре без постоянного хранения в AzevsmAI.</p>
                <p>AZEVSM SECURE сохраняет применимую логику выбранного продукта и систему результатов AzevsmAI.</p>
                <Link className={styles.inlineLink} href={localePath(locale, "/data-security#azevsm-secure")}>Подробнее об AZEVSM SECURE</Link>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>{copy.homeWhyKicker}</p>
            </div>
            <div className={styles.whyGrid}>
              {copy.homeWhy.map(([title, body], index) => (
                <article className={styles.whyCard} key={title}>
                  <span className={styles.whyIcon}><V5Icon name={index === 0 ? "trust" : index === 1 ? "technology" : "products"} /></span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.shell}>
            <div className={styles.routePanel}>
              <Link href={localePath(locale, "/platform")}>{copy.explore}</Link>
              <Link href={localePath(locale, "/technology")}>{copy.ourTechnology}</Link>
              <a href={entry ?? localePath(locale, "/enter")}>{copy.enterPlatform}</a>
            </div>
          </div>
        </section>

        <section className={styles.companySection}>
          <div className={styles.shell}>
            <div className={styles.companyGrid}>
              <div>
                <p className={styles.kicker}>{copy.companyKicker}</p>
                <h2>{copy.companyTitle}</h2>
                <p>{copy.companyLead}</p>
              </div>
              <Link className={styles.enter} href={localePath(locale, "/company")}>{copy.nav.company}<span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
