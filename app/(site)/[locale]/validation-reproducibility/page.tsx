import { notFound } from "next/navigation";
import { AuthorityDocumentPage } from "@/components/authority-document-page";
import { getAuthorityPage } from "@/lib/content/authority-pages-v31";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const page = getAuthorityPage(locale, "validation");
  if (!page) return {};
  return pageMetadata(locale, "/validation-reproducibility", page.title, page.lead);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || !getAuthorityPage(locale, "validation")) notFound();
  return <AuthorityDocumentPage locale={locale} pageKey="validation" />;
}
