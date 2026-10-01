"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { AuthorityPage } from "@/lib/content/authority-pages-v31";
import type { SiteCopy } from "@/lib/content/copy";
import { getProductAuthorityPage } from "@/lib/content/product-authority-pages-v31";
import { localePath, type Locale } from "@/lib/i18n";
import { platformEntryUrl } from "@/lib/platform";
import styles from "./ru-v5-home.module.css";

type IconName = "platform" | "products" | "technology" | "trust" | "security" | "legal" | "company";
type AuthorityBlock = AuthorityPage["blocks"][number];

function V5Icon({ name }: { name: IconName }) {
  const blue = `v5-blue-${name}`;
  const gold = `v5-gold-${name}`;
  const glow = `v5-glow-${name}`;
  return (
    <svg className={styles.iconSvg} viewBox="0 0 96 96" aria-hidden="true">
      <defs>
        <linearGradient id={blue} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a9d9ff" stopOpacity=".98" />
          <stop offset=".42" stopColor="#4f95e8" stopOpacity=".98" />
          <stop offset="1" stopColor="#0b3f91" stopOpacity=".9" />
        </linearGradient>
        <linearGradient id={gold} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff1bb" />
          <stop offset=".45" stopColor="#edbe63" />
          <stop offset="1" stopColor="#9d6d20" />
        </linearGradient>
        <filter id={glow} x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {name === "platform" ? (
        <g fill="none" strokeLinejoin="round" filter={`url(#${glow})`}>
          <path d="M14 29 48 11 82 29 48 47Z" stroke={`url(#${blue})`} strokeWidth="2.1" fill="rgba(74,142,224,.08)" />
          <path d="M14 45 48 27 82 45 48 63Z" stroke={`url(#${blue})`} strokeWidth="2.1" fill="rgba(74,142,224,.06)" />
          <path d="M14 61 48 43 82 61 48 79Z" stroke={`url(#${gold})`} strokeWidth="2.25" fill="rgba(232,185,93,.09)" />
          <path d="M48 47v16M48 63v16" stroke={`url(#${gold})`} strokeWidth="1.7" opacity=".8" />
        </g>
      ) : null}
      {name === "products" ? (
        <g fill="none" strokeLinejoin="round" filter={`url(#${glow})`}>
          {[0,1,2,3,4].map((i) => {
            const x=17+i*13, h=20+i*10, y=74-h;
            return <path key={i} d={`M${x} 74V${y}h9v${74-y}z`} stroke={i===4?`url(#${gold})`:`url(#${blue})`} strokeWidth="2" fill="rgba(61,127,211,.08)" />;
          })}
          <path d="M12 78h72" stroke={`url(#${gold})`} strokeWidth="1.5" />
        </g>
      ) : null}
      {name === "technology" ? (
        <g fill="none" filter={`url(#${glow})`}>
          <circle cx="48" cy="48" r="31" stroke={`url(#${gold})`} strokeWidth="2.1" />
          <ellipse cx="48" cy="48" rx="15" ry="31" stroke={`url(#${blue})`} strokeWidth="1.6" />
          <ellipse cx="48" cy="48" rx="31" ry="13" stroke={`url(#${blue})`} strokeWidth="1.6" transform="rotate(18 48 48)" />
          <ellipse cx="48" cy="48" rx="31" ry="13" stroke={`url(#${gold})`} strokeWidth="1.55" transform="rotate(-34 48 48)" />
          <path d="M19 60c19-17 39-24 58-21" stroke={`url(#${blue})`} strokeWidth="1.5" />
        </g>
      ) : null}
      {name === "trust" ? (
        <g fill="none" filter={`url(#${glow})`}>
          <path d="M48 13 74 24v21c0 18-10 31-26 39-16-8-26-21-26-39V24Z" stroke={`url(#${gold})`} strokeWidth="2.6" />
          <path d="m35 48 9 9 19-23" stroke={`url(#${gold})`} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ) : null}
      {name === "security" ? (
        <g fill="none" filter={`url(#${glow})`}>
          <ellipse cx="48" cy="24" rx="23" ry="9" stroke={`url(#${gold})`} strokeWidth="2.5" />
          <path d="M25 24v44c0 5 10 9 23 9s23-4 23-9V24" stroke={`url(#${gold})`} strokeWidth="2.5" />
          <path d="M25 39c0 5 10 9 23 9s23-4 23-9M25 54c0 5 10 9 23 9s23-4 23-9" stroke={`url(#${gold})`} strokeWidth="2" opacity=".92" />
        </g>
      ) : null}
      {name === "legal" ? (
        <g fill="none" filter={`url(#${glow})`} strokeLinecap="round" strokeLinejoin="round">
          <path d="M48 17v58M30 27h36M48 18 37 27M48 18l11 9M26 29 13 51h26Zm44 0L57 51h26Z" stroke={`url(#${gold})`} strokeWidth="2.2" />
          <path d="M29 76h38" stroke={`url(#${gold})`} strokeWidth="2.4" />
        </g>
      ) : null}
      {name === "company" ? (
        <g fill="none" filter={`url(#${glow})`}>
          <circle cx="48" cy="30" r="10" stroke={`url(#${gold})`} strokeWidth="2.3" />
          <circle cx="26" cy="39" r="7" stroke={`url(#${gold})`} strokeWidth="2" />
          <circle cx="70" cy="39" r="7" stroke={`url(#${gold})`} strokeWidth="2" />
          <path d="M30 73c0-13 7-22 18-22s18 9 18 22M9 71c0-10 6-17 16-17 5 0 10 2 13 6M87 71c0-10-6-17-16-17-5 0-10 2-13 6" stroke={`url(#${gold})`} strokeWidth="2.2" strokeLinecap="round" />
        </g>
      ) : null}
    </svg>
  );
}

function headingIndex(blocks: AuthorityBlock[], text: string) {
  return blocks.findIndex((block) => block.type === "heading" && block.text === text);
}

function sectionData(blocks: AuthorityBlock[]) {
  const heading = blocks.find((block) => block.type === "heading");
  const paragraphs = blocks.filter((block): block is Extract<AuthorityBlock,{type:"p"}> => block.type === "p");
  const table = blocks.find((block): block is Extract<AuthorityBlock,{type:"table"}> => block.type === "table");
  return { heading: heading?.type === "heading" ? heading.text : "", paragraphs, table };
}

function splitCell(value: string) {
  const [title, ...rest] = value.split("\n");
  return { title: title.trim(), body: rest.join("\n").trim() };
}

function TableCards({ table, compact = false }: { table?: Extract<AuthorityBlock,{type:"table"}>; compact?: boolean }) {
  if (!table) return null;
  const rows = table.header ? table.rows.slice(1) : table.rows;
  const cells = rows.flatMap((row) => row).filter(Boolean).map(splitCell);
  return (
    <div className={compact ? styles.compactGrid : styles.authorityGrid}>
      {cells.map((cell, index) => (
        <article className={compact ? styles.compactCard : styles.authorityCard} key={index}>
          <h3>{cell.title}</h3>
          {cell.body ? <p>{cell.body}</p> : null}
        </article>
      ))}
    </div>
  );
}

const resultPath = [
  ["Материалы и доказательства", "Работа начинается с документов, данных и подтверждаемой основы."],
  ["Структурированная оценка", "AzevsmAI проводит материал через управляемый технологический аналитический контур."],
  ["Система результатов", "Один зафиксированный результат получает несколько связанных клиентских представлений."],
] as const;

export function RuV5Home({ locale, copy }: { locale: Locale; copy: SiteCopy }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const platform = getProductAuthorityPage(locale, "platform");
  const moveStart = platform?.blocks.findIndex((block, index) => index > 0 && block.type === "heading") ?? -1;
  const blocks = platform && moveStart >= 0 ? platform.blocks.slice(moveStart) : [];
  const entry = platformEntryUrl();

  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!items.length) return;

    const reveal = (el: HTMLElement) => el.classList.add(styles.revealVisible);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      items.forEach(reveal);
      return;
    }

    // First shells visible immediately so mid-page never reads as an empty void.
    items.slice(0, 2).forEach(reveal);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "35% 0px 25% 0px", threshold: 0.02 },
    );

    for (const el of items) {
      if (el.classList.contains(styles.revealVisible)) continue;
      io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  const problemI = headingIndex(blocks, "Проблема, которую решает AzevsmAI");
  const whatI = headingIndex(blocks, "Что делает AzevsmAI");
  const depthI = headingIndex(blocks, "Глубина анализа, сопоставимость и масштаб");
  const audience = problemI > 0 ? blocks.slice(0, problemI) : [];
  const problem = problemI >= 0 && whatI > problemI ? blocks.slice(problemI, whatI) : [];
  const what = whatI >= 0 && depthI > whatI ? blocks.slice(whatI, depthI) : [];
  const depth = depthI >= 0 ? blocks.slice(depthI) : [];
  const audienceData = sectionData(audience);
  const problemData = sectionData(problem);
  const whatData = sectionData(what);
  const depthData = sectionData(depth);

  const primary = [
    ["/platform", copy.nav.platform, copy.thesis, "platform"],
    ["/products", copy.nav.products, copy.homeProductsTitle, "products"],
    ["/technology", copy.nav.technology, copy.homeTech[0]?.[1] ?? copy.homeTechTitle, "technology"],
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
        <div className={styles.heroLandscape} aria-hidden="true">
          <span className={styles.horizonLine} />
          <span className={styles.cityGlow} />
        </div>
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
                <span className={styles.secondaryArrow} aria-hidden="true">→</span>
              </Link>
            ))}
          </nav>

          <div className={styles.heroFoot}>
            <p className={styles.proof}>{copy.heroWords.split("\n").map((word) => <span key={word}>{word}</span>)}</p>
            <div className={styles.heroActions}>
              <a className={styles.enter} href={entry ?? localePath(locale, "/enter")}>{copy.enter}<span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </section>

      <div id="ru-v5-content" ref={contentRef} className={`${styles.content} ${styles.contentOpen}`}>
        {audience.length ? (
          <section className={`${styles.section} ${styles.reveal}`} data-reveal>
            <div className={styles.shell}>
              <div className={styles.sectionHead}>
                <h2>{audienceData.heading}</h2>
                {audienceData.paragraphs.map((p,index)=><p key={index}>{p.text}</p>)}
              </div>
              <TableCards table={audienceData.table} compact />
            </div>
          </section>
        ) : null}

        <section className={`${styles.section} ${styles.reveal}`} data-reveal>
          <div className={`${styles.shell} ${styles.shellNarrative}`}>
            <div className={styles.featureBlock}>
              <div className={styles.featureHead}>
                <span className={styles.featureIndex} aria-hidden="true">01</span>
                <p className={styles.kicker}>AzevsmAI</p>
              </div>
              <h2>{problemData.heading}</h2>
              {problemData.paragraphs.map((p, index) => <p key={index}>{p.text}</p>)}
            </div>

            <hr className={styles.featureRule} />

            <div className={styles.featureBlock}>
              <div className={styles.featureHead}>
                <span className={styles.featureIndex} aria-hidden="true">02</span>
                <p className={styles.kicker}>AzevsmAI</p>
              </div>
              <h2>{whatData.heading}</h2>
              {whatData.paragraphs.map((p, index) => <p key={index}>{p.text}</p>)}
            </div>
            <TableCards table={whatData.table} />

            <hr className={styles.featureRule} />

            <div className={styles.featureBlock}>
              <div className={styles.featureHead}>
                <span className={styles.featureIndex} aria-hidden="true">03</span>
                <p className={styles.kicker}>AzevsmAI</p>
              </div>
              <h2>{depthData.heading}</h2>
              {depthData.paragraphs.map((p, index) => <p key={index}>{p.text}</p>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.reveal}`} data-reveal>
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>Путь результата</p>
              <h2>От материалов к понятному результату</h2>
            </div>
            <div className={styles.resultGrid}>
              {resultPath.map(([title, body], index) => (
                <article className={styles.resultCard} key={title}>
                  <span className={styles.resultLine} aria-hidden="true" />
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

        <section className={`${styles.section} ${styles.reveal}`} data-reveal>
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>{copy.homeProductsKicker}</p>
              <h2>{copy.homeProductsTitle}</h2>
            </div>
            <div className={styles.productGrid}>
              {copy.homeProducts.map(([title, body, href], index) => (
                <Link className={styles.productCard} href={localePath(locale, href)} key={title}>
                  <span className={styles.productVisual}><V5Icon name={index === 0 ? "platform" : index === 1 ? "products" : "technology"} /></span>
                  <span className={styles.productNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <span className={styles.productAction}>Изучить продукт <span aria-hidden="true">→</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.reveal}`} data-reveal>
          <div className={styles.shell}>
            <article className={styles.secureCard}>
              <div className={styles.secureCopy}>
                <span className={styles.secureIcon}><V5Icon name="security" /></span>
                <p className={styles.kicker}>AZEVSM SECURE</p>
                <h2>Конфиденциальная обработка без постоянного хранения исходных материалов</h2>
                <p>AzevsmAI включает режим AZEVSM SECURE для работы с чувствительными и конфиденциальными материалами. Исходные материалы и рабочее содержимое обрабатываются во временном защищённом контуре без постоянного хранения в AzevsmAI.</p>
                <p>AZEVSM SECURE сохраняет применимую логику выбранного продукта и систему результатов AzevsmAI.</p>
                <Link className={styles.inlineLink} href={localePath(locale, "/data-security#azevsm-secure")}>Подробнее об AZEVSM SECURE</Link>
              </div>
            </article>
          </div>
        </section>

        <section className={`${styles.section} ${styles.reveal}`} data-reveal>
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

        <section className={`${styles.section} ${styles.reveal}`} data-reveal>
          <div className={styles.shell}>
            <div className={styles.routePanel}>
              <Link href={localePath(locale, "/platform")}>{copy.explore}</Link>
              <Link href={localePath(locale, "/technology")}>{copy.ourTechnology}</Link>
              <a href={entry ?? localePath(locale, "/enter")}>{copy.enterPlatform}</a>
            </div>
          </div>
        </section>

        <section className={`${styles.companySection} ${styles.reveal}`} data-reveal>
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
