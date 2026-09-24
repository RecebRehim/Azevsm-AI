import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Noto_Sans_Arabic, Noto_Sans_SC } from "next/font/google";
import { headers } from "next/headers";
import { isLocale, localeMeta } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import "../globals.css";

const latin = Manrope({ subsets: ["latin", "latin-ext", "cyrillic"], variable: "--font-latin", display: "swap" });
const arabic = Noto_Sans_Arabic({ subsets: ["arabic"], variable: "--font-arabic", display: "swap", weight: ["400", "500", "600", "700"] });
const chinese = Noto_Sans_SC({ subsets: ["latin"], variable: "--font-chinese", display: "swap", weight: ["400", "500", "700"] });
const mono = IBM_Plex_Mono({ subsets: ["latin", "cyrillic"], variable: "--font-mono", display: "swap", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: "AzevsmAI Systems",
  description: "AzevsmAI Systems develops and operates AzevsmAI, a structured evaluation platform for companies and startups.",
};

export default async function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const headerList = await headers();
  const requested = headerList.get("x-locale") || "en";
  const locale = isLocale(requested) ? requested : "en";
  const meta = localeMeta[locale];
  return (
    <html lang={meta.htmlLang} dir={meta.dir} className={`${latin.variable} ${arabic.variable} ${chinese.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
