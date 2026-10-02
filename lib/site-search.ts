import { localePath, type Locale } from "@/lib/i18n";
import { getAuthorityPage, type AuthorityPage } from "@/lib/content/authority-pages-v31";
import { getExistingAuthorityPage } from "@/lib/content/existing-authority-pages-v31";
import { getProductAuthorityPage } from "@/lib/content/product-authority-pages-v31";
import { getContactAuthority, getNewsAuthority } from "@/lib/content/news-contact-authority-v31";

export type SiteSearchDocument = {
  href: string;
  title: string;
  description: string;
  text: string;
  content: string;
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

function flattenAuthorityPage(page: AuthorityPage | null) {
  if (!page) return "";

  const blockText = page.blocks.flatMap((block) => {
    if (block.type === "heading" || block.type === "p") return [block.text];
    if (block.type === "list") return block.items;
    if (block.type === "note") return [block.title, block.body];
    if (block.type === "table") return block.rows.flat();
    return [];
  });

  return [
    page.title,
    page.lead,
    ...blockText,
    ...page.actions.map((action) => action.label),
  ].join(". ");
}

function publicPageText(locale: Locale, path: string) {
  switch (path) {
    case "/platform":
      return flattenAuthorityPage(getProductAuthorityPage(locale, "platform"));
    case "/products":
      return flattenAuthorityPage(getProductAuthorityPage(locale, "products"));
    case "/products/azevsm-index":
      return flattenAuthorityPage(getProductAuthorityPage(locale, "index"));
    case "/products/azevsm-institutional-index":
      return flattenAuthorityPage(getProductAuthorityPage(locale, "institutional"));
    case "/products/azevsm-plus":
      return flattenAuthorityPage(getProductAuthorityPage(locale, "plus"));
    case "/technology":
      return flattenAuthorityPage(getExistingAuthorityPage(locale, "technology"));
    case "/white-box":
      return flattenAuthorityPage(getExistingAuthorityPage(locale, "whiteBox"));
    case "/trust":
      return flattenAuthorityPage(getExistingAuthorityPage(locale, "trust"));
    case "/company":
      return flattenAuthorityPage(getExistingAuthorityPage(locale, "company"));
    case "/result-system":
      return flattenAuthorityPage(getAuthorityPage(locale, "resultSystem"));
    case "/how-azevsmai-is-different":
      return flattenAuthorityPage(getAuthorityPage(locale, "difference"));
    case "/validation-reproducibility":
      return flattenAuthorityPage(getAuthorityPage(locale, "validation"));
    case "/index-field-investor-ecosystem":
      return flattenAuthorityPage(getAuthorityPage(locale, "indexField"));
    case "/data-security":
      return flattenAuthorityPage(getAuthorityPage(locale, "dataSecurity"));
    case "/legal-compliance":
      return flattenAuthorityPage(getAuthorityPage(locale, "legalCompliance"));
    case "/insights": {
      const page = getNewsAuthority(locale);
      return page
        ? [page.title, page.lead, page.intro, ...page.items, page.noteTitle, page.note].join(". ")
        : "";
    }
    case "/contact": {
      const page = getContactAuthority(locale);
      return page
        ? [page.title, page.lead, page.intro, ...page.items, page.formTitle, page.formText, page.warning].join(". ")
        : "";
    }
    default:
      return "";
  }
}

function normalize(value: string) {
  return value
    .normalize("NFKC")
    .toLocaleLowerCase()
    .replace(/ё/g, "е")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const stopWords = new Set([
  "the", "and", "for", "with", "from",
  "для", "или", "как", "это", "что", "при",
  "və", "ilə", "üçün", "bu",
]);

function tokenize(value: string) {
  return [...new Set(
    normalize(value)
      .split(" ")
      .filter((word) => word.length > 1 && !stopWords.has(word))
  )];
}

function commonPrefixLength(a: string, b: string) {
  const length = Math.min(a.length, b.length);
  let index = 0;
  while (index < length && a[index] === b[index]) index += 1;
  return index;
}

function withinOneEdit(a: string, b: string) {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > 1) return false;

  let left = 0;
  let right = 0;
  let edits = 0;

  while (left < a.length && right < b.length) {
    if (a[left] === b[right]) {
      left += 1;
      right += 1;
      continue;
    }

    edits += 1;
    if (edits > 1) return false;

    if (a.length > b.length) left += 1;
    else if (b.length > a.length) right += 1;
    else {
      left += 1;
      right += 1;
    }
  }

  if (left < a.length || right < b.length) edits += 1;
  return edits <= 1;
}

function tokenMatchStrength(queryToken: string, candidate: string) {
  if (queryToken === candidate) return 4;

  if (
    queryToken.length >= 3 &&
    candidate.length >= 3 &&
    (candidate.startsWith(queryToken) || queryToken.startsWith(candidate))
  ) {
    return 3;
  }

  if (queryToken.length >= 6 && candidate.length >= 6) {
    const prefix = commonPrefixLength(queryToken, candidate);
    if (prefix >= 6 && prefix / Math.min(queryToken.length, candidate.length) >= 0.72) return 2;
  }

  if (queryToken.length >= 5 && candidate.length >= 5 && withinOneEdit(queryToken, candidate)) {
    return 1;
  }

  return 0;
}

function bestTokenMatch(queryToken: string, candidates: string[]) {
  let best = 0;
  for (const candidate of candidates) {
    best = Math.max(best, tokenMatchStrength(queryToken, candidate));
    if (best === 4) break;
  }
  return best;
}

function snippetScore(value: string, query: string, queryTokens: string[]) {
  const normalized = normalize(value);
  if (!normalized) return 0;

  let score = normalized.includes(query) ? 24 : 0;
  const tokens = tokenize(normalized);
  for (const token of queryTokens) {
    score += bestTokenMatch(token, tokens) * 3;
  }
  return score;
}

function compactSnippet(value: string, maxLength = 260) {
  const compact = value.replace(/\s+/g, " ").trim();
  if (compact.length <= maxLength) return compact;
  return `${compact.slice(0, maxLength - 1).trimEnd()}…`;
}

function buildSnippet(doc: SiteSearchDocument, query: string, queryTokens: string[]) {
  const candidates = (doc.content || doc.description)
    .split(/(?:[.!?;]\s+|\n+)/)
    .map((part) => part.trim())
    .filter((part) => part.length >= 24);

  let best = doc.description;
  let bestScore = snippetScore(best, query, queryTokens);

  for (const candidate of candidates) {
    const score = snippetScore(candidate, query, queryTokens);
    if (score > bestScore) {
      best = candidate;
      bestScore = score;
    }
  }

  return compactSnippet(best || doc.description);
}

export function buildSiteSearchIndex(locale: Locale): SiteSearchDocument[] {
  return seeds.map((item) => {
    const title = local(item.title, locale);
    const description = local(item.description, locale);
    const content = publicPageText(locale, item.path);

    return {
      href: localePath(locale, item.path),
      title,
      description,
      content,
      text: [title, description, content, item.keywords ?? ""].filter(Boolean).join(" "),
    };
  });
}

export function searchSite(locale: Locale, rawQuery: string, limit = 20): SiteSearchResult[] {
  const query = normalize(rawQuery);
  if (query.length < 2) return [];

  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) return [];

  return buildSiteSearchIndex(locale)
    .map((doc) => {
      const title = normalize(doc.title);
      const description = normalize(doc.description);
      const text = normalize(doc.text);
      const titleTokens = tokenize(title);
      const descriptionTokens = tokenize(description);
      const textTokens = tokenize(text);
      let score = 0;

      if (title === query) score += 180;
      else if (title.includes(query)) score += 110;

      if (description.includes(query)) score += 54;
      if (text.includes(query)) score += 32;

      let matchedTerms = 0;
      for (const token of queryTokens) {
        const titleMatch = bestTokenMatch(token, titleTokens);
        const descriptionMatch = bestTokenMatch(token, descriptionTokens);
        const textMatch = bestTokenMatch(token, textTokens);

        if (textMatch > 0) matchedTerms += 1;
        score += titleMatch * 18;
        score += descriptionMatch * 9;
        score += textMatch * 3;
      }

      const coverage = matchedTerms / queryTokens.length;
      if (coverage === 1) score += queryTokens.length > 1 ? 48 : 16;
      else score += Math.round(coverage * 14);

      if (queryTokens.length > 1 && coverage < 0.5 && !text.includes(query)) score = 0;

      return {
        ...doc,
        score,
        snippet: buildSnippet(doc, query, queryTokens),
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, locale))
    .slice(0, limit);
}
