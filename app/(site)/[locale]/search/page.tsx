import Link from "next/link";
import { notFound } from "next/navigation";
import { RuPilotHero } from "@/components/ru-pilot-hero";
import { isLocale, localePath, type Locale } from "@/lib/i18n";
import { searchSite } from "@/lib/site-search";
import { pageMetadata } from "@/lib/seo";

const labels: Record<Locale, {
  title: string;
  lead: string;
  placeholder: string;
  button: string;
  results: string;
  empty: string;
  start: string;
  open: string;
}> = {
  ru: {
    title: "Поиск по сайту",
    lead: "Поиск по публичным страницам Azevsm Systems и материалам об AzevsmAI.",
    placeholder: "Например: White Box, Azevsm Index, безопасность",
    button: "Найти",
    results: "Результаты поиска",
    empty: "По этому запросу ничего не найдено.",
    start: "Введите не менее двух символов.",
    open: "Открыть страницу",
  },
  en: {
    title: "Search the site",
    lead: "Search public Azevsm Systems pages and AzevsmAI materials.",
    placeholder: "For example: White Box, Azevsm Index, security",
    button: "Search",
    results: "Search results",
    empty: "No results found for this query.",
    start: "Enter at least two characters.",
    open: "Open page",
  },
  az: {
    title: "Saytda axtarış",
    lead: "Azevsm Systems-in açıq səhifələri və AzevsmAI materialları üzrə axtarış.",
    placeholder: "Məsələn: White Box, Azevsm Index, təhlükəsizlik",
    button: "Axtar",
    results: "Axtarış nəticələri",
    empty: "Bu sorğu üzrə nəticə tapılmadı.",
    start: "Ən azı iki simvol daxil edin.",
    open: "Səhifəni aç",
  },
  ar: {
    title: "البحث في الموقع",
    lead: "البحث في الصفحات العامة لـ Azevsm Systems ومواد AzevsmAI.",
    placeholder: "مثال: White Box، Azevsm Index، الأمن",
    button: "بحث",
    results: "نتائج البحث",
    empty: "لم يتم العثور على نتائج لهذا البحث.",
    start: "أدخل حرفين على الأقل.",
    open: "فتح الصفحة",
  },
  zh: {
    title: "站内搜索",
    lead: "搜索 Azevsm Systems 公共页面和 AzevsmAI 资料。",
    placeholder: "例如：White Box、Azevsm Index、安全",
    button: "搜索",
    results: "搜索结果",
    empty: "未找到与此查询匹配的结果。",
    start: "请输入至少两个字符。",
    open: "打开页面",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const label = labels[locale];
  return pageMetadata(locale, "/search", label.title, label.lead);
}

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const raw = (await searchParams).q;
  const query = (Array.isArray(raw) ? raw[0] : raw ?? "").trim();
  const label = labels[locale];
  const results = query.length >= 2 ? searchSite(locale, query) : [];

  return (
    <>
      <RuPilotHero kind="platform" title={label.title} lead={label.lead} />
      <section className="section-tight site-search-section">
        <div className="wrap site-search-wrap">
          <form className="site-search-form" action={localePath(locale, "/search")} method="get" role="search">
            <label className="sr-only" htmlFor="site-search-input">{label.title}</label>
            <div className="site-search-field">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4.5 4.5" />
              </svg>
              <input
                id="site-search-input"
                type="search"
                name="q"
                defaultValue={query}
                placeholder={label.placeholder}
                autoComplete="off"
                enterKeyHint="search"
              />
              <button type="submit">{label.button}</button>
            </div>
          </form>

          <div className="site-search-results" aria-live="polite">
            {query.length < 2 ? <p className="site-search-state">{label.start}</p> : null}
            {query.length >= 2 && results.length === 0 ? <p className="site-search-state">{label.empty}</p> : null}
            {results.length > 0 ? (
              <>
                <div className="site-search-results-head">
                  <h2>{label.results}</h2>
                  <span>{results.length}</span>
                </div>
                <div className="site-search-result-list">
                  {results.map((item) => (
                    <article className="site-search-result" key={item.href}>
                      <h3><Link href={item.href}>{item.title}</Link></h3>
                      <p>{item.snippet}</p>
                      <Link className="text-link" href={item.href}>
                        {label.open}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </article>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
