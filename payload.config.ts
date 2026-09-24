import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { payloadSecret } from "./lib/site";
import {
  CallsToAction,
  CompanyInfo,
  Insights,
  LegalPages,
  News,
  Pages,
  People,
  Products,
  Services,
  TechnologyClaims,
  TrustClaims,
  Users,
} from "./payload/collections";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
  },
  localization: {
    locales: ["az", "en", "ar", "zh", "ru"],
    defaultLocale: "en",
    fallback: false,
  },
  collections: [Users, Pages, Products, Services, TechnologyClaims, TrustClaims, Insights, News, People, CompanyInfo, LegalPages, CallsToAction],
  editor: lexicalEditor(),
  secret: payloadSecret(),
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
  db: sqliteAdapter({
    client: { url: process.env.DATABASE_URL || "file:./data/payload.db" },
    push: true,
  }),
  sharp,
});
