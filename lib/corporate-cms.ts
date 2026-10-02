import config from "@payload-config";
import { getPayload } from "payload";

type MediaAsset = {
  url?: string | null;
  alt?: string | null;
};

type LeadershipRecord = {
  id: string | number;
  name: string;
  role?: string | null;
  profile?: string | null;
  photo?: string | number | MediaAsset | null;
  publicProfileUrl?: string | null;
};

type PartnerRecord = {
  id: string | number;
  name: string;
  shortDescription?: string | null;
  logo?: string | number | MediaAsset | null;
  publicUrl?: string | null;
};

export type CorporateLeadershipItem = {
  id: string;
  name: string;
  role: string;
  profile: string;
  photoUrl: string | null;
  photoAlt: string;
  publicProfileUrl: string | null;
};

export type CorporatePartnerItem = {
  id: string;
  name: string;
  description: string;
  logoUrl: string | null;
  logoAlt: string;
  publicUrl: string | null;
};

function media(value: string | number | MediaAsset | null | undefined) {
  return value && typeof value === "object" ? value : null;
}

export async function getRuCorporateContent(): Promise<{
  leadership: CorporateLeadershipItem[];
  partners: CorporatePartnerItem[];
}> {
  try {
    const payload = await getPayload({ config });
    const [peopleResult, partnersResult] = await Promise.all([
      payload.find({
        collection: "people",
        locale: "ru",
        fallbackLocale: false,
        overrideAccess: false,
        depth: 1,
        limit: 50,
        sort: "order",
        where: {
          and: [
            { workflow: { equals: "published" } },
            { category: { equals: "leadership" } },
          ],
        },
      }),
      payload.find({
        collection: "partners",
        locale: "ru",
        fallbackLocale: false,
        overrideAccess: false,
        depth: 1,
        limit: 50,
        sort: "order",
        where: { workflow: { equals: "published" } },
      }),
    ]);

    const leadership = (peopleResult.docs as LeadershipRecord[]).map((item) => {
      const photo = media(item.photo);
      return {
        id: String(item.id),
        name: item.name,
        role: item.role?.trim() || "",
        profile: item.profile?.trim() || "",
        photoUrl: photo?.url || null,
        photoAlt: photo?.alt?.trim() || item.name,
        publicProfileUrl: item.publicProfileUrl?.trim() || null,
      };
    });

    const partners = (partnersResult.docs as PartnerRecord[]).map((item) => {
      const logo = media(item.logo);
      return {
        id: String(item.id),
        name: item.name,
        description: item.shortDescription?.trim() || "",
        logoUrl: logo?.url || null,
        logoAlt: logo?.alt?.trim() || item.name,
        publicUrl: item.publicUrl?.trim() || null,
      };
    });

    return { leadership, partners };
  } catch (error) {
    console.error("Corporate CMS read failed", error);
    return { leadership: [], partners: [] };
  }
}
