import { notFound } from "next/navigation";
import { ExistingAuthorityPage } from "@/components/existing-authority-page";
import { getExistingAuthorityPage } from "@/lib/content/existing-authority-pages-v31";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const page = getExistingAuthorityPage(locale, "technology");
  if (!page) return {};
  return pageMetadata(locale, "/technology", page.title, page.lead);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || !getExistingAuthorityPage(locale, "technology")) notFound();
  return <ExistingAuthorityPage locale={locale} pageKey="technology" />;
}
