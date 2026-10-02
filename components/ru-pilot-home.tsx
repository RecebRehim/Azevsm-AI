import Link from "next/link";
import { Hero } from "@/components/hero";
import { FounderIcon } from "@/components/founder-icon";
import { RuHomeFoundationIcon, RuHomeProductIcon, RuHomeWhyIcon } from "@/components/ru-line-icons";
import { RuPilotBlocks } from "@/components/ru-pilot-blocks";
import { V4HomeClarity, V4ProductAction } from "@/components/v4-clarity";
import type { SiteCopy } from "@/lib/content/copy";
import { getProductAuthorityPage } from "@/lib/content/product-authority-pages-v31";
import { localePath, type Locale } from "@/lib/i18n";
import { platformEntryUrl } from "@/lib/platform";


function RuCorporateGateway({
  locale,
  copy,
  entry,
}: {
  locale: Locale;
  copy: SiteCopy;
  entry: string | null;
}) {
  const primary = [
    {
      href: "/platform",
      title: copy.nav.platform,
      body: copy.thesis,
      icon: "platform-structure" as const,
    },
    {
      href: "/products",
      title: copy.nav.products,
      body: copy.homeProductsTitle,
      icon: "analytical-models" as const,
    },
    {
      href: "/technology",
      title: copy.nav.technology,
      body: copy.techLead,
      icon: "azevsm-ai" as const,
    },
  ];

  const secondary = [
    {
      href: "/trust",
      title: copy.nav.trust,
      body: copy.trustTitle,
      icon: "structured-evidence" as const,
    },
    {
      href: "/data-security",
      title: "Безопасность данных",
      body: "AZEVSM SECURE",
      icon: "trusted-results" as const,
    },
    {
      href: "/legal-compliance",
      title: "Право и комплаенс",
      body: "",
      icon: "plus-governance" as const,
    },
    {
      href: "/company",
      title: copy.nav.company,
      body: copy.companyTitle,
      icon: "methodology-ontology" as const,
    },
  ];

  return (
    <section className="ru-corporate-gateway" aria-labelledby="ru-corporate-gateway-title">
      <span className="ru-gateway-orbit ru-gateway-orbit-a" aria-hidden="true" />
      <span className="ru-gateway-orbit ru-gateway-orbit-b" aria-hidden="true" />
      <div className="wrap ru-gateway-inner">
        <div className="ru-gateway-copy">
          <p className="ru-gateway-eyebrow">Azevsm Systems</p>
          <h1 id="ru-corporate-gateway-title">{copy.heroTitle}</h1>
          <p className="ru-gateway-lead">{copy.heroLead}</p>
        </div>

        <nav className="ru-gateway-primary" aria-label="Основные разделы">
          {primary.map((item) => (
            <Link className="ru-gateway-card" href={localePath(locale, item.href)} key={item.href}>
              <span className="ru-gateway-card-icon"><FounderIcon name={item.icon} /></span>
              <span className="ru-gateway-card-copy">
                <strong>{item.title}</strong>
                <span>{item.body}</span>
              </span>
              <svg className="ru-gateway-arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          ))}
        </nav>

        <nav className="ru-gateway-secondary" aria-label="Дополнительные разделы">
          {secondary.map((item) => (
            <Link className="ru-gateway-secondary-link" href={localePath(locale, item.href)} key={item.href}>
              <span className="ru-gateway-secondary-icon"><FounderIcon name={item.icon} /></span>
              <span>
                <strong>{item.title}</strong>
                {item.body ? <small>{item.body}</small> : null}
              </span>
            </Link>
          ))}
        </nav>

        <div className="ru-gateway-bottom">
          <p className="ru-gateway-proof">
            {copy.heroWords.split("\n").map((word) => <span key={word}>{word}</span>)}
          </p>
          <div className="ru-gateway-actions">
            <a className="ru-gateway-enter" href={entry ?? localePath(locale, "/enter")}>
              {copy.enter}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a className="ru-gateway-scroll" href="#ru-home-content">
              {copy.learnMore}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v15M6 13l6 6 6-6" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RuPilotHome({ locale, copy }: { locale: Locale; copy: SiteCopy }) {
  const platform = getProductAuthorityPage(locale, "platform");
  const moveStart = platform?.blocks.findIndex((block, index) => index > 0 && block.type === "heading") ?? -1;
  const movedBlocks = platform && moveStart >= 0 ? platform.blocks.slice(moveStart) : [];
  const entry = platformEntryUrl();

  return (
    <>
      {locale === "ru" ? <RuCorporateGateway locale={locale} copy={copy} entry={entry} /> : <Hero locale={locale} copy={copy} />}

      {locale === "ru" ? (
        <section className="ru-home-bridge" aria-label="Кратко об AzevsmAI">
          <div className="wrap ru-home-bridge-inner">
            <div className="ru-home-bridge-copy">
              <p>AzevsmAI превращает документы, данные и подтверждённые факты в структурированный аналитический результат, который можно проверить и использовать при принятии решений.</p>
              <Link className="ru-home-scenario-link" href={localePath(locale, "/platform#ru-scenarios")}>Найти свой сценарий</Link>
            </div>
            <nav className="ru-home-decision-path" aria-label="Путь по AzevsmAI">
              <Link href={localePath(locale, "/platform")}>Что делает система</Link>
              <Link href={localePath(locale, "/products")}>Выбрать продукт</Link>
              <Link href={localePath(locale, "/result-system")}>Что получает клиент</Link>
              <Link href={localePath(locale, "/trust")}>Почему можно доверять</Link>
            </nav>
          </div>
        </section>
      ) : null}

      <section id="ru-home-content" className="ru-home-transfer">
        <div className="wrap ru-pilot-prose">
          <RuPilotBlocks blocks={movedBlocks} />
        </div>
      </section>

      <V4HomeClarity locale={locale} />

      <section className="band ru-home-products">
        <div className="wrap">
          <div className="band-head">
            <div>
              <p className="kicker">{copy.homeProductsKicker}</p>
              <h2>{copy.homeProductsTitle}</h2>
            </div>
            <Link className="text-link" href={localePath(locale, "/products")}>{copy.viewAll}</Link>
          </div>
          <div className="product-row">
            {copy.homeProducts.map(([title, body, href], index) => (
              <Link className="line-card" key={title} href={localePath(locale, href)}>
                <span className="product-icon ru-home-product-icon"><RuHomeProductIcon index={index} /></span>
                <span><h3>{title}</h3><p>{body}</p><V4ProductAction locale={locale} /></span>
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
            <Link className="text-link" href={localePath(locale, "/technology")}>{copy.learnMore}</Link>
          </div>
          <div className="foundation-row">
            {copy.homeTech.slice(0, 3).map(([title, body], index) => (
              <article key={title}>
                <span className="foundation-icon ru-home-tech-icon"><RuHomeFoundationIcon index={index} /></span>
                <h3 className={title === "AzeVSM AI" ? "ru-nowrap-term" : undefined}>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ru-home-secure">
        <div className="wrap">
          <div className="ru-home-secure-card">
            <FounderIcon name="trusted-results" className="ru-home-secure-icon" />
            <div className="ru-home-secure-copy">
              <p className="kicker">AZEVSM SECURE</p>
              <h2>Конфиденциальная обработка без постоянного хранения исходных материалов</h2>
              <p>AzevsmAI включает режим AZEVSM SECURE для работы с чувствительными и конфиденциальными материалами. Исходные материалы и рабочее содержимое обрабатываются во временном защищённом контуре без постоянного хранения в AzevsmAI.</p>
              <p>AZEVSM SECURE сохраняет применимую логику выбранного продукта и систему результатов AzevsmAI.</p>
              <Link className="text-link" href={localePath(locale, "/data-security#azevsm-secure")}>Подробнее об AZEVSM SECURE</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="why-strip ru-home-why">
        <div className="wrap">
          <h2 className="kicker">{copy.homeWhyKicker}</h2>
          <div className="why-row">
            {copy.homeWhy.map(([title, body], index) => (
              <article key={title}>
                <span className="why-icon ru-home-why-icon"><RuHomeWhyIcon index={index} /></span>
                <div><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ru-home-nav-strip">
        <div className="wrap">
          <div className="cta-row ru-home-nav-actions">
            <Link className="btn btn-primary" href={localePath(locale, "/platform")}>{copy.explore}</Link>
            <Link className="btn btn-ghost" href={localePath(locale, "/technology")}>{copy.ourTechnology}</Link>
            <a className="btn btn-ghost" href={entry ?? localePath(locale, "/enter")}>{copy.enterPlatform}</a>
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
            <Link className="btn btn-on-dark" href={localePath(locale, "/company")}>{copy.nav.company}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
