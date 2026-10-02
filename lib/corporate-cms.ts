import config from "@payload-config";
import { getPayload } from "payload";

type MediaAsset = {
  url?: string | null;
  alt?: string | null;
};

type LocaleVisibility = {
  ru?: boolean | null;
  en?: boolean | null;
  az?: boolean | null;
  ar?: boolean | null;
  zh?: boolean | null;
};

type SectionControl = {
  enabled?: boolean | null;
  publicVisibility?: LocaleVisibility | null;
};

type CompanySectionsSettings = {
  leadership?: SectionControl | null;
  partners?: SectionControl | null;
};

type LeadershipRecord = {
  id: string | number;
  name: string;
  enabled?: boolean | null;
  publicVisibility?: LocaleVisibility | null;
  role?: string | null;
  profile?: string | null;
  photo?: string | number | MediaAsset | null;
  publicProfileUrl?: string | null;
};

type PartnerRecord = {
  id: string | number;
  name: string;
  enabled?: boolean | null;
  publicVisibility?: LocaleVisibility | null;
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
  leadershipEnabled: boolean;
  partnersEnabled: boolean;
  leadership: CorporateLeadershipItem[];
  partners: CorporatePartnerItem[];
}> {
  try {
    const payload = await getPayload({ config });
    const [sectionSettings, peopleResult, partnersResult] = await Promise.all([
      payload.findGlobal({
        slug: "company-sections",
        overrideAccess: false,
        depth: 0,
      }),
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

    const leadership = (peopleResult.docs as LeadershipRecord[])
      .filter((item) => item.enabled === true && item.publicVisibility?.ru === true)
      .map((item) => {
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

    const partners = (partnersResult.docs as PartnerRecord[])
      .filter((item) => item.enabled === true && item.publicVisibility?.ru === true)
      .map((item) => {
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

    const settings = sectionSettings as CompanySectionsSettings;
    const leadershipEnabled =
      settings.leadership?.enabled === true &&
      settings.leadership.publicVisibility?.ru === true;
    const partnersEnabled =
      settings.partners?.enabled === true &&
      settings.partners.publicVisibility?.ru === true;

    return { leadershipEnabled, partnersEnabled, leadership, partners };
  } catch (error) {
    console.error("Corporate CMS read failed", error);
    return {
      leadershipEnabled: false,
      partnersEnabled: false,
      leadership: [],
      partners: [],
    };
  }
}
