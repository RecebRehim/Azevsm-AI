import { getAuthorityPage, type AuthorityPage, type AuthorityPageKey } from "@/lib/content/authority-pages-v31";
import { getCopy } from "@/lib/content/copy";
import { getExistingAuthorityPage, type ExistingAuthorityPageKey } from "@/lib/content/existing-authority-pages-v31";
import { getRuWebsiteLegalStage1 } from "@/lib/content/legal-ru-stage1";
import { getNewsAuthority, getContactAuthority } from "@/lib/content/news-contact-authority-v31";
import { getProductAuthorityPage, type ProductAuthorityKey } from "@/lib/content/product-authority-pages-v31";
import { publicServices } from "@/lib/content/services";
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

const authorityRoutes: Array<[AuthorityPageKey, string]> = [
  ["resultSystem", "/result-system"],
  ["difference", "/how-azevsmai-is-different"],
  ["indexField", "/index-field-investor-ecosystem"],
  ["validation", "/validation-reproducibility"],
  ["dataSecurity", "/data-security"],
  ["legalCompliance", "/legal-compliance"],
];

const existingRoutes: Array<[ExistingAuthorityPageKey, string]> = [
  ["technology", "/technology"],
  ["whiteBox", "/white-box"],
  ["trust", "/trust"],
  ["company", "/company"],
];

const productRoutes: Array<[ProductAuthorityKey, string]> = [
  ["platform", "/platform"],
  ["products", "/products"],
  ["index", "/products/azevsm-index"],
  ["institutional", "/products/azevsm-institutional-index"],
  ["plus", "/products/azevsm-plus"],
];

function authorityText(page: AuthorityPage) {
  const parts: string[] = [page.title, page.lead];
  for (const block of page.blocks) {
    if (block.type === "heading" || block.type === "p") parts.push(block.text);
    if (block.type === "list") parts.push(...block.items);
    if (block.type === "note") parts.push(block.title, block.body);
    if (block.type === "table") parts.push(...block.rows.flat());
  }
  return parts.join(" ");
}

function normalize(value: string) {
  return value
    .toLocaleLowerCase("ru")
    .replace(/ё/g, "е")
    .replace(/[\u2010-\u2015]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function makeSnippet(text: string, query: string, fallback: string) {
  const source = text.replace(/\s+/g, " ").trim();
  if (!source) return fallback;
  const normalized = normalize(source);
  const needle = normalize(query);
  const index = normalized.indexOf(needle);
  if (index < 0) return fallback || source.slice(0, 220);

  const start = Math.max(0, index - 90);
  const end = Math.min(source.length, index + needle.length + 150);
  return `${start > 0 ? "…" : ""}${source.slice(start, end).trim()}${end < source.length ? "…" : ""}`;
}

function addAuthorityDocument(
  docs: SiteSearchDocument[],
  locale: Locale,
  path: string,
  page: AuthorityPage | null,
) {
  if (!page) return;
  docs.push({
    href: localePath(locale, path),
    title: page.title,
    description: page.lead,
    text: authorityText(page),
  });
}

export function buildSiteSearchIndex(locale: Locale): SiteSearchDocument[] {
  const docs: SiteSearchDocument[] = [];
  const copy = getCopy(locale);

  docs.push({
    href: localePath(locale),
    title: locale === "ru" ? "Главная" : copy.logoTitle,
    description: copy.heroTitle,
    text: [
      copy.heroTitle,
      copy.heroLead,
      copy.problemTitle,
      copy.problemLead,
      copy.homeProductsTitle,
      ...copy.homeProducts.flat(),
      copy.homeTechTitle,
      ...copy.homeTech.flat(),
      copy.homeWhyKicker,
      ...copy.homeWhy.flat(),
    ].join(" "),
  });

  for (const [key, path] of authorityRoutes) {
    addAuthorityDocument(docs, locale, path, getAuthorityPage(locale, key));
  }
  for (const [key, path] of existingRoutes) {
    addAuthorityDocument(docs, locale, path, getExistingAuthorityPage(locale, key));
  }
  for (const [key, path] of productRoutes) {
    addAuthorityDocument(docs, locale, path, getProductAuthorityPage(locale, key));
  }

  const news = getNewsAuthority(locale);
  if (news) {
    docs.push({
      href: localePath(locale, "/insights"),
      title: news.title,
      description: news.lead,
      text: [news.title, news.lead, news.intro, ...news.items, news.noteTitle, news.note].join(" "),
    });
  }

  for (const [slug, title, body] of copy.insightItems) {
    docs.push({
      href: localePath(locale, `/insights/${slug}`),
      title,
      description: body,
      text: [title, body, copy.whiteLead, copy.aiFormula].join(" "),
    });
  }

  const contact = getContactAuthority(locale);
  if (contact) {
    docs.push({
      href: localePath(locale, "/contact"),
      title: contact.title,
      description: contact.lead,
      text: [contact.title, contact.lead, contact.intro, ...contact.items, contact.formText, contact.warning].join(" "),
    });
  }

  for (const service of publicServices(locale)) {
    docs.push({
      href: localePath(locale, `/products/azevsm-plus/${service.slug}`),
      title: service.labels[locale],
      description: service.summary[locale],
      text: [
        service.labels[locale],
        service.summary[locale],
        service.focus[locale].forWhom,
        service.focus[locale].problem,
        service.focus[locale].evidence,
      ].join(" "),
    });
  }

  const simpleLegal: Array<[string, string, string[]]> = [
    ["/legal/cookies", copy.cookiesTitle, copy.cookiesBody],
    ["/legal/security", copy.securityTitle, copy.securityBody],
    ["/legal/accessibility", copy.a11yTitle, copy.a11yBody],
  ];
  for (const [path, title, body] of simpleLegal) {
    docs.push({
      href: localePath(locale, path),
      title,
      description: body[0] ?? "",
      text: [title, ...body].join(" "),
    });
  }

  if (locale === "ru") {
    for (const slug of ["privacy", "terms"] as const) {
      const legal = getRuWebsiteLegalStage1(slug);
      if (!legal) continue;
      docs.push({
        href: localePath(locale, `/legal/${slug}`),
        title: legal.title,
        description: legal.sections[0]?.paragraphs?.[0] ?? "",
        text: [
          legal.title,
          ...legal.sections.flatMap((section) => [
            section.heading,
            ...(section.paragraphs ?? []),
            ...(section.list ?? []),
            ...(section.note ? [section.note.title, section.note.body] : []),
          ]),
        ].join(" "),
      });
    }
  }

  return docs;
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
        snippet: makeSnippet(doc.text, rawQuery, doc.description),
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, locale))
    .slice(0, limit);
}
