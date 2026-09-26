import { notFound } from "next/navigation";
import { ProductAuthorityPage } from "@/components/product-authority-page";
import { getProductAuthorityPage, type ProductAuthorityKey } from "@/lib/content/product-authority-pages-v31";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const map: Record<string, ProductAuthorityKey> = {
  "azevsm-index": "index",
  "azevsm-institutional-index": "institutional",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !map[slug]) return {};
  const page = getProductAuthorityPage(locale, map[slug]);
  return page ? pageMetadata(locale, `/products/${slug}`, page.title, page.lead) : {};
}
export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !map[slug] || !getProductAuthorityPage(locale, map[slug])) notFound();
  return <ProductAuthorityPage locale={locale} pageKey={map[slug]} />;
}
