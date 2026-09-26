import { notFound } from "next/navigation";
import { ProductAuthorityPage } from "@/components/product-authority-page";
import { getProductAuthorityPage } from "@/lib/content/product-authority-pages-v31";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const page = getProductAuthorityPage(locale, "platform");
  return page ? pageMetadata(locale, "/platform", page.title, page.lead) : {};
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || !getProductAuthorityPage(locale, "platform")) notFound();
  return <ProductAuthorityPage locale={locale} pageKey="platform" />;
}
