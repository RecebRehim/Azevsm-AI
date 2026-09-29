import { localePath, type Locale } from "@/lib/i18n";

export type SiteSearchDocument = {
  href: string;
  title: string;
  description: string;
  text: string;
};

export type SiteSearchResult = SiteSearchDocument & {
  snippet: string;
  score: number;
};

type SearchSeed = {
  path: string;
  title: Partial<Record<Locale, string>>;
  description: Partial<Record<Locale, string>>;
  keywords?: string;
};

const seeds: SearchSeed[] = [
  {
    path: "",
    title: { ru: "Главная", en: "Home", az: "Ana səhifə" },
    description: {
      ru: "Azevsm Systems, платформа AzevsmAI, продукты, технология и система результатов.",
      en: "Azevsm Systems, AzevsmAI platform, products, technology and result system.",
      az: "Azevsm Systems, AzevsmAI platforması, məhsullar, texnologiya və nəticə sistemi.",
    },
    keywords: "Azevsm Systems AzevsmAI доказательства анализ доверие",
  },
  {
    path: "/platform",
    title: { ru: "Платформа AzevsmAI", en: "AzevsmAI Platform", az: "AzevsmAI Platforması" },
    description: {
      ru: "Структурированная аналитическая платформа, доказательная база, методология и продуктовая математика.",
      en: "Structured analytical platform, evidence, methodology and product mathematics.",
      az: "Strukturlaşdırılmış analitik platforma, sübutlar, metodologiya və məhsul riyaziyyatı.",
    },
  },
  {
    path: "/products",
    title: { ru: "Продукты", en: "Products", az: "Məhsullar" },
    description: {
      ru: "Azevsm Index, Azevsm Institutional Index и Azevsm Plus.",
      en: "Azevsm Index, Azevsm Institutional Index and Azevsm Plus.",
      az: "Azevsm Index, Azevsm Institutional Index və Azevsm Plus.",
    },
  },
  {
    path: "/products/azevsm-index",
    title: { ru: "Azevsm Index", en: "Azevsm Index", az: "Azevsm Index" },
    description: {
      ru: "Структурированная оценка стартапов и компаний.",
      en: "Structured evaluation of startups and companies.",
      az: "Startap və şirkətlərin strukturlaşdırılmış qiymətləndirilməsi.",
    },
  },
  {
    path: "/products/azevsm-institutional-index",
    title: { ru: "Azevsm Institutional Index", en: "Azevsm Institutional Index", az: "Azevsm Institutional Index" },
    description: {
      ru: "Институциональная оценка для банков, фондов, программ и других институциональных участников.",
      en: "Institutional evaluation for banks, funds, programmes and other institutional participants.",
      az: "Banklar, fondlar, proqramlar və digər institusional iştirakçılar üçün qiymətləndirmə.",
    },
    keywords: "IIT 4D institutional secure банк фонд государственная программа",
  },
  {
    path: "/products/azevsm-plus",
    title: { ru: "Azevsm Plus", en: "Azevsm Plus", az: "Azevsm Plus" },
    description: {
      ru: "Специализированные аналитические продукты AzevsmAI.",
      en: "Specialised analytical products of AzevsmAI.",
      az: "AzevsmAI-nin ixtisaslaşdırılmış analitik məhsulları.",
    },
  },
  {
    path: "/technology",
    title: { ru: "Технология", en: "Technology", az: "Texnologiya" },
    description: {
      ru: "AzeVSM AI, класс VSM, научно-техническая методология, семантическая онтология и аналитическая интерпретация.",
      en: "AzeVSM AI, VSM class, scientific-technical methodology, semantic ontology and analytical interpretation.",
      az: "AzeVSM AI, VSM sinfi, elmi-texniki metodologiya, semantik ontologiya və analitik interpretasiya.",
    },
    keywords: "сложные адаптивные системы системный анализ графовые представления языковые модели LLM",
  },
  {
    path: "/white-box",
    title: { ru: "White Box", en: "White Box", az: "White Box" },
    description: {
      ru: "Контролируемое объяснение результата и границы раскрытия.",
      en: "Controlled explanation of the result and disclosure boundaries.",
      az: "Nəticənin idarə olunan izahı və açıqlama sərhədləri.",
    },
  },
  {
    path: "/trust",
    title: { ru: "Доверие", en: "Trust", az: "Etibar" },
    description: {
      ru: "Прослеживаемость, воспроизводимость, доказательства и границы результата.",
      en: "Traceability, reproducibility, evidence and result boundaries.",
      az: "İzlənəbilərlik, təkrarlana bilmə, sübutlar və nəticə sərhədləri.",
    },
  },
  {
    path: "/result-system",
    title: { ru: "Система результата", en: "Result system", az: "Nəticə sistemi" },
    description: {
      ru: "Зафиксированный результат, доказательства, объяснение, доступ и клиентские материалы.",
      en: "Fixed result, evidence, explanation, access and client materials.",
      az: "Sabit nəticə, sübutlar, izah, giriş və müştəri materialları.",
    },
  },
  {
    path: "/how-azevsmai-is-different",
    title: { ru: "Чем отличается AzevsmAI", en: "How AzevsmAI is different", az: "AzevsmAI nə ilə fərqlənir" },
    description: {
      ru: "Различие между AzevsmAI, генеративными системами, базами данных, рейтингами и консалтингом.",
      en: "Difference between AzevsmAI, generative systems, databases, ratings and consulting.",
      az: "AzevsmAI, generativ sistemlər, verilənlər bazaları, reytinqlər və konsaltinq arasındakı fərq.",
    },
  },
  {
    path: "/validation-reproducibility",
    title: { ru: "Воспроизводимость результата", en: "Result reproducibility", az: "Nəticənin təkrarlana bilməsi" },
    description: {
      ru: "Одинаковые введённые данные и одинаковые правила выбранного продукта дают одинаковый результат.",
      en: "The same input data and the same product rules produce the same result.",
      az: "Eyni giriş məlumatları və eyni məhsul qaydaları eyni nəticəni verir.",
    },
  },
  {
    path: "/index-field-investor-ecosystem",
    title: { ru: "Индексное поле", en: "Index Field", az: "Index Field" },
    description: {
      ru: "Контролируемая поверхность видимости оценённых объектов и инвесторский контур.",
      en: "Controlled visibility surface for evaluated objects and the investor contour.",
      az: "Qiymətləndirilmiş obyektlər üçün idarə olunan görünürlük səthi və investor konturu.",
    },
    keywords: "инвесторы бизнес ангелы фонды VC Private Equity семейные офисы контакт",
  },
  {
    path: "/data-security",
    title: { ru: "Безопасность данных", en: "Data security", az: "Məlumat təhlükəsizliyi" },
    description: {
      ru: "Контролируемая обработка, хранение и передача, AZEVSM SECURE и платежные данные.",
      en: "Controlled processing, storage and transfer, AZEVSM SECURE and payment data.",
      az: "İdarə olunan emal, saxlama və ötürmə, AZEVSM SECURE və ödəniş məlumatları.",
    },
  },
  {
    path: "/legal-compliance",
    title: { ru: "Право и комплаенс", en: "Legal and compliance", az: "Hüquq və uyğunluq" },
    description: {
      ru: "Правовые и полномочные условия использования сервисов и институциональных маршрутов.",
      en: "Legal and authority conditions for services and institutional routes.",
      az: "Xidmətlər və institusional marşrutlar üçün hüquqi və səlahiyyət şərtləri.",
    },
  },
  {
    path: "/company",
    title: { ru: "Компания", en: "Company", az: "Şirkət" },
    description: {
      ru: "Azevsm Systems — оператор AzevsmAI. Исследовательская и технологическая основа компании.",
      en: "Azevsm Systems — operator of AzevsmAI.",
      az: "Azevsm Systems — AzevsmAI operatorudur.",
    },
  },
  {
    path: "/insights",
    title: { ru: "Исследования и материалы", en: "Research and insights", az: "Tədqiqat və materiallar" },
    description: {
      ru: "Исследовательские материалы, продуктовые изменения и подтверждённые профессиональные события.",
      en: "Research materials, product changes and verified professional events.",
      az: "Tədqiqat materialları, məhsul dəyişiklikləri və təsdiqlənmiş peşəkar tədbirlər.",
    },
  },
  {
    path: "/contact",
    title: { ru: "Контакт", en: "Contact", az: "Əlaqə" },
    description: {
      ru: "Обсуждение задачи, продукта, институционального сценария или партнёрства.",
      en: "Discuss a task, product, institutional scenario or partnership.",
      az: "Tapşırıq, məhsul, institusional ssenari və ya tərəfdaşlığı müzakirə etmək.",
    },
  },
  {
    path: "/legal/privacy",
    title: { ru: "Политика конфиденциальности сайта", en: "Privacy policy", az: "Məxfilik siyasəti" },
    description: {
      ru: "Обработка данных посетителей публичного корпоративного сайта Azevsm Systems.",
      en: "Processing of visitor data on the public Azevsm Systems corporate site.",
      az: "Azevsm Systems-in ictimai korporativ saytında ziyarətçi məlumatlarının emalı.",
    },
  },
  {
    path: "/legal/terms",
    title: { ru: "Условия использования сайта", en: "Terms of use", az: "İstifadə şərtləri" },
    description: {
      ru: "Правила использования публичного корпоративного сайта Azevsm Systems.",
      en: "Rules for using the public Azevsm Systems corporate site.",
      az: "Azevsm Systems-in ictimai korporativ saytından istifadə qaydaları.",
    },
  },
];

function local(value: Partial<Record<Locale, string>>, locale: Locale) {
  return value[locale] ?? value.en ?? value.ru ?? "";
}

function normalize(value: string) {
  return value
    .toLocaleLowerCase()
    .replace(/ё/g, "е")
    .replace(/[\u2010-\u2015]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

export function buildSiteSearchIndex(locale: Locale): SiteSearchDocument[] {
  return seeds.map((item) => {
    const title = local(item.title, locale);
    const description = local(item.description, locale);
    return {
      href: localePath(locale, item.path),
      title,
      description,
      text: [title, description, item.keywords ?? ""].join(" "),
    };
  });
}

export function searchSite(locale: Locale, rawQuery: string, limit = 20): SiteSearchResult[] {
  const query = normalize(rawQuery);
  if (query.length < 2) return [];

  const words = query.split(" ").filter((word) => word.length > 1);
  return buildSiteSearchIndex(locale)
    .map((doc) => {
      const title = normalize(doc.title);
      const description = normalize(doc.description);
      const text = normalize(doc.text);
      let score = 0;

      if (title === query) score += 100;
      if (title.includes(query)) score += 50;
      if (description.includes(query)) score += 24;
      if (text.includes(query)) score += 12;

      for (const word of words) {
        if (title.includes(word)) score += 12;
        if (description.includes(word)) score += 6;
        if (text.includes(word)) score += 2;
      }

      return {
        ...doc,
        score,
        snippet: doc.description,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
}
