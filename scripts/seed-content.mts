import { getPayload } from "payload";
import config from "../payload.config.ts";
import { services } from "../lib/content/services.ts";
import { locales, type Locale } from "../lib/i18n.ts";

async function main() {
  const payload = await getPayload({ config });
  for (const service of services) {
    const existing = await payload.find({
      collection: "services",
      where: { slug: { equals: service.slug } },
      limit: 1,
    });
    const id = existing.docs[0]?.id
      ?? (
        await payload.create({
          collection: "services",
          locale: "en",
          data: {
            serviceCode: service.serviceCode,
            slug: service.slug,
            label: service.labels.en,
            summary: service.summary.en,
            workflow: "published",
            sourceOwner: service.sourceOwner,
            reviewDate: service.reviewDate,
          },
        })
      ).id;
    for (const locale of locales) {
      await payload.update({
        collection: "services",
        id,
        locale: locale as Locale,
        data: {
          label: service.labels[locale],
          summary: service.summary[locale],
          workflow: "published",
        },
      });
    }
  }
  const company = await payload.find({ collection: "company-info", limit: 1 });
  if (!company.docs.length) {
    await payload.create({
      collection: "company-info",
      data: { legalName: "AzevsmAI Systems" },
    });
  }
  payload.logger.info("Seeded published service labels into Payload.");
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
