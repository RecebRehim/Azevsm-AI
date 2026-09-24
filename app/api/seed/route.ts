import config from "@payload-config";
import { getPayload } from "payload";
import { NextResponse } from "next/server";
import { locales } from "@/lib/i18n";
import { services } from "@/lib/content/services";

export async function POST() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ ok: false }, { status: 404 });
  }
  const payload = await getPayload({ config });
  const ids: string[] = [];
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
        locale,
        data: {
          label: service.labels[locale],
          summary: service.summary[locale],
          workflow: "published",
        },
      });
    }
    ids.push(String(id));
  }
  const company = await payload.find({ collection: "company-info", limit: 1 });
  if (!company.docs.length) {
    await payload.create({ collection: "company-info", data: { legalName: "AzevsmAI Systems" } });
  }
  return NextResponse.json({ ok: true, services: ids.length });
}
