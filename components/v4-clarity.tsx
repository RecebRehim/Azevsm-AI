import Link from "next/link";
import { PagePhotoBand } from "@/components/page-photo-band";
import { RuPilotActions, RuPilotBlocks } from "@/components/ru-pilot-blocks";
import type { AuthorityPage } from "@/lib/content/authority-pages-v31";
import { pageInternalPhotos } from "@/lib/content/page-photos";
import { localePath, type Locale } from "@/lib/i18n";

type PilotUi = {
  clarityKicker: string;
  clarityTitle: string;
  claritySteps: [string, string][];
  clarityAction: string;
  productAction: string;
  systemKicker: string;
  systemTitle: string;
  systemBody: string;
  previewKicker: string;
  previewTitle: string;
  previewLead: string;
  previewPending: string;
  cabinetTitle: string;
  cabinetBody: string;
};

function ui(locale: Locale): PilotUi {
  if (locale === "ru") {
    return {
      clarityKicker: "Путь результата",
      clarityTitle: "От материалов к понятному результату",
      claritySteps: [
        ["Материалы и доказательства", "Работа начинается с документов, данных и подтверждаемой основы."],
        ["Структурированная оценка", "AzevsmAI проводит материал через управляемый технологический аналитический контур."],
        ["Система результатов", "Один зафиксированный результат получает несколько связанных клиентских представлений."],
      ],
      clarityAction: "Посмотреть систему результатов",
      productAction: "Изучить продукт",
      systemKicker: "Технологическая система",
      systemTitle: "Не набор отдельных консультационных материалов",
      systemBody: "Отчет, досье, краткий обзор, цифровая модель и другие представления остаются связаны с одним зафиксированным результатом и формируются внутри технологического контура AzevsmAI.",
      previewKicker: "Физическая форма результата",
      previewTitle: "Как это будет выглядеть",
      previewLead: "Здесь будут показаны только реальные утвержденные формы и экраны. До их готовности место сохраняется без выдуманных макетов.",
      previewPending: "Реальный утвержденный визуал будет добавлен после готовности соответствующей формы.",
      cabinetTitle: "Клиентский кабинет",
      cabinetBody: "Среда, в которой результат и предусмотренные клиентские представления могут продолжать работу в зависимости от продукта.",
    };
  }
  if (locale === "az") {
    return {
      clarityKicker: "Nəticənin yolu",
      clarityTitle: "Materiallardan aydın nəticəyə",
      claritySteps: [
        ["Materiallar və sübutlar", "İş sənədlərdən, məlumatlardan və təsdiqlənə bilən əsasdan başlayır."],
        ["Strukturlaşdırılmış qiymətləndirmə", "AzevsmAI materialı idarə olunan texnoloji analitik konturdan keçirir."],
        ["Nəticələr sistemi", "Bir sabitləşdirilmiş nəticə bir neçə əlaqəli müştəri təqdimatına çevrilir."],
      ],
      clarityAction: "Nəticələr sisteminə baxmaq",
      productAction: "Məhsulu öyrənmək",
      systemKicker: "Texnoloji sistem",
      systemTitle: "Ayrı-ayrı konsaltinq materialları toplusu deyil",
      systemBody: "Hesabat, dosye, qısa icmal, rəqəmsal model və digər təqdimatlar eyni sabitləşdirilmiş nəticəyə bağlı qalır və AzevsmAI-nin texnoloji konturu daxilində formalaşır.",
      previewKicker: "Nəticənin fiziki forması",
      previewTitle: "Bu necə görünəcək",
      previewLead: "Burada yalnız real və təsdiqlənmiş formalar və ekranlar göstəriləcək. Onlar hazır olana qədər uydurma maketlərdən istifadə edilmir.",
      previewPending: "Real təsdiqlənmiş vizual müvafiq forma hazır olduqdan sonra əlavə ediləcək.",
      cabinetTitle: "Müştəri kabineti",
      cabinetBody: "Məhsuldan asılı olaraq nəticənin və nəzərdə tutulan müştəri təqdimatlarının işləməyə davam edə bildiyi mühit.",
    };
  }
  return {
    clarityKicker: "Result path",
    clarityTitle: "From materials to a result people can understand",
    claritySteps: [
      ["Materials and evidence", "The work starts from documents, data, and a substantiated evidence base."],
      ["Structured assessment", "AzevsmAI moves the material through a governed technological analytical cycle."],
      ["Result system", "One fixed result supports several connected client-facing representations."],
    ],
    clarityAction: "View the result system",
    productAction: "Explore the product",
    systemKicker: "Technological system",
    systemTitle: "Not a collection of separate consulting deliverables",
    systemBody: "The report, dossier, executive brief, digital model, and other representations remain linked to one fixed result and are formed within the AzevsmAI technological environment.",
    previewKicker: "Physical form of the result",
    previewTitle: "What it will look like",
    previewLead: "Only real, approved forms and screens will be shown here. Until they are ready, the space remains reserved without invented interface mockups.",
    previewPending: "The real approved visual will be added when the corresponding form is ready.",
    cabinetTitle: "Client cabinet",
    cabinetBody: "The environment in which the result and supported client-facing representations may continue to work, depending on the product.",
  };
}

function FlowIcon({ index }: { index: number }) {
  const paths = [
    <g key="evidence"><path d="M15 12h26l8 8v32H15zM41 12v9h8M22 30h20M22 37h16M22 44h12" /><circle className="v4-icon-gold" cx="18" cy="16" r="4" /></g>,
    <g key="system"><circle className="v4-icon-gold" cx="32" cy="32" r="8" /><circle cx="12" cy="20" r="4" /><circle cx="52" cy="20" r="4" /><circle cx="12" cy="44" r="4" /><circle cx="52" cy="44" r="4" /><path d="M19 24l7 5M45 24l-7 5M19 40l7-5M45 40l-7-5" /></g>,
    <g key="result"><path d="M10 48h44M14 43V29h8v14M28 43V19h8v24M42 43V25h8v18" /><path className="v4-icon-gold" d="M15 15l8 5 9-9 8 5 10-8" /></g>,
  ];
  return <svg viewBox="0 0 64 64" aria-hidden="true">{paths[index]}</svg>;
}

function ResultIcon({ index }: { index: number }) {
  const icons = [
    <g key="fixed"><path d="M16 12h30v40H16zM22 22h18M22 30h18M22 38h12" /><path className="v4-icon-gold" d="M37 43l4 4 8-10" /></g>,
    <g key="report"><path d="M16 10h24l8 8v36H16zM40 10v9h8M22 29h20M22 36h16M22 43h12" /></g>,
    <g key="brief"><path d="M12 18h40v30H12zM18 25h28M18 32h18M18 39h22" /></g>,
    <g key="dossier"><path d="M10 18h18l5 6h21v28H10z" /><circle className="v4-icon-gold" cx="40" cy="36" r="7" /><path className="v4-icon-gold" d="M45 41l6 6" /></g>,
    <g key="passport"><path d="M17 10h30v44H17zM24 22h16M24 29h16M24 36h10" /><circle className="v4-icon-gold" cx="38" cy="44" r="5" /></g>,
    <g key="navigator"><path d="M10 18h44v28H10zM18 26h12v12H18zM35 26h11M35 33h11M18 42h28" /></g>,
    <g key="model"><path d="M32 8l15 8v16l-15 8-15-8V16zM32 24l15-8M32 24v16M32 24l-15-8" /><path d="M18 43h28" /></g>,
    <g key="whitebox"><path d="M14 14h36v36H14zM14 26h36M26 14v36" /><path className="v4-icon-gold" d="M32 37l4 4 8-9" /></g>,
  ];
  return <svg viewBox="0 0 64 64" aria-hidden="true">{icons[index] ?? icons[0]}</svg>;
}

function splitCell(value: string) {
  const [title, ...rest] = value.split("\n");
  return { title: title.trim(), body: rest.join("\n").trim() };
}

export function V4HomeClarity({ locale }: { locale: Locale }) {
  const copy = ui(locale);
  return (
    <section className="v4-home-clarity" aria-labelledby="v4-home-clarity-title">
      <div className="wrap">
        <div className="v4-section-head">
          <p className="kicker">{copy.clarityKicker}</p>
          <h2 id="v4-home-clarity-title">{copy.clarityTitle}</h2>
        </div>
        <div className="v4-flow-grid">
          {copy.claritySteps.map(([title, body], index) => (
            <article className="v4-flow-card" key={title}>
              <span className="v4-flow-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span className="v4-flow-icon"><FlowIcon index={index} /></span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="v4-flow-action">
          <Link className="btn btn-primary" href={localePath(locale, "/result-system")}>{copy.clarityAction}</Link>
        </div>
      </div>
    </section>
  );
}

export function V4ProductAction({ locale }: { locale: Locale }) {
  return <span className="v4-card-action">{ui(locale).productAction}<span aria-hidden="true">→</span></span>;
}

export function V4ResultSystem({ locale, page }: { locale: Locale; page: AuthorityPage }) {
  const copy = ui(locale);
  const tableIndex = page.blocks.findIndex((block) => block.type === "table");
  const table = tableIndex >= 0 ? page.blocks[tableIndex] : null;
  const before = tableIndex >= 0 ? page.blocks.slice(0, tableIndex) : page.blocks;
  const after = tableIndex >= 0 ? page.blocks.slice(tableIndex + 1) : [];
  const sectionHeading = before.find((block) => block.type === "heading");
  const intro = before.find((block) => block.type === "p");
  const rows = table?.type === "table" ? (table.header ? table.rows.slice(1) : table.rows) : [];
  const resultItems =
    table?.type === "table" && table.header
      ? rows.flatMap((row) => {
          const items: { title: string; body: string }[] = [];
          for (let index = 0; index < row.length; index += 2) {
            const title = row[index]?.trim();
            const body = row[index + 1]?.trim() ?? "";
            if (title) items.push({ title, body });
          }
          return items;
        })
      : rows.flatMap((row) => row.map(splitCell)).filter((item) => item.title);

  const visualIndices = [1, 6, 3, 2];
  const previews = visualIndices
    .map((index) => resultItems[index])
    .filter((item): item is { title: string; body: string } => Boolean(item));
  previews.push({ title: copy.cabinetTitle, body: copy.cabinetBody });

  const actions = page.actions.filter((action) => action.href === "/products");

  return (
    <>
      <section className="v4-result-intro">
        <div className="wrap">
          {intro?.type === "p" ? <p className="v4-result-intro-copy">{intro.text}</p> : null}
          <PagePhotoBand src={pageInternalPhotos.resultSystem} className="page-photo-band--result" />
          <div className="v4-section-head">
            <p className="kicker">{sectionHeading?.type === "heading" ? sectionHeading.text : copy.previewKicker}</p>
          </div>
          <div className="v4-result-grid" id={sectionHeading?.type === "heading" ? sectionHeading.id : undefined}>
            {resultItems.map((item, index) => (
              <article className="v4-result-card" key={item.title}>
                <span className="v4-result-icon"><ResultIcon index={index} /></span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v4-system-band">
        <div className="wrap v4-system-band-inner">
          <div>
            <p className="kicker">{copy.systemKicker}</p>
            <h2>{copy.systemTitle}</h2>
          </div>
          <p>{copy.systemBody}</p>
        </div>
      </section>

      <section className="v4-result-previews" aria-labelledby="v4-result-previews-title">
        <div className="wrap">
          <div className="v4-section-head">
            <p className="kicker">{copy.previewKicker}</p>
            <h2 id="v4-result-previews-title">{copy.previewTitle}</h2>
            <p>{copy.previewLead}</p>
          </div>
          <div className="v4-preview-grid">
            {previews.map((item, index) => (
              <article className="v4-preview-card" key={item.title}>
                <div className="v4-preview-frame" aria-hidden="true">
                  <div className="v4-preview-bar" />
                  <div className="v4-preview-body">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="v4-preview-seal">{String(index + 1).padStart(2, "0")}</div>
                </div>
                <div className="v4-preview-copy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <small>{copy.previewPending}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {after.length ? (
        <section className="section-tight v4-result-why">
          <div className="wrap ru-pilot-prose">
            <RuPilotBlocks blocks={after} />
            <RuPilotActions actions={actions} locale={locale} />
          </div>
        </section>
      ) : null}
    </>
  );
}
