import type { CollectionConfig, Field } from "payload";
import { adminsOnly, publishedOrUser, usersOnly } from "./access";

const workflow = {
  name: "workflow",
  type: "select" as const,
  required: true,
  defaultValue: "draft",
  options: ["draft", "review", "approved", "published"],
};

const governance = [
  { name: "sourceOwner", type: "text" as const },
  { name: "reviewDate", type: "date" as const },
];

function rejectIncompletePublish(data: Record<string, unknown> | undefined) {
  if (!data || data.workflow !== "published") return data;
  const label = data.label;
  if (label && typeof label === "object") {
    const missing = ["az", "en", "ar", "zh", "ru"].filter((locale) => {
      const value = (label as Record<string, string>)[locale];
      return !value || !String(value).trim() || value === data.serviceCode;
    });
    if (missing.length) {
      throw new Error(`Publication blocked. Missing or invalid locale labels: ${missing.join(", ")}`);
    }
  }
  return data;
}

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: { useAsTitle: "email" },
  access: {
    create: async ({ req }) => {
      const existing = await req.payload.count({ collection: "users" });
      if (existing.totalDocs === 0) return true;
      return req.user?.role === "admin";
    },
    delete: adminsOnly,
    update: usersOnly,
  },
  fields: [
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "editor",
      options: ["admin", "editor"],
      saveToJWT: true,
    },
  ],
};

function localizedText(name: string): Field {
  return { name, type: "text", localized: true, required: true };
}

function localizedArea(name: string): Field {
  return { name, type: "textarea", localized: true };
}

function localeVisibilityFields(): Field[] {
  return [
    { name: "ru", label: "RU", type: "checkbox", defaultValue: false },
    { name: "en", label: "EN", type: "checkbox", defaultValue: false },
    { name: "az", label: "AZ", type: "checkbox", defaultValue: false },
    { name: "ar", label: "AR", type: "checkbox", defaultValue: false },
    { name: "zh", label: "ZH", type: "checkbox", defaultValue: false },
  ];
}

function cardVisibilityFields(): Field[] {
  return [
    {
      name: "enabled",
      label: "Карточка включена",
      type: "checkbox",
      defaultValue: false,
      admin: { description: "Master switch. OFF hides this card in all public language versions." },
    },
    {
      name: "publicVisibility",
      label: "Публичная видимость по языкам",
      type: "group",
      fields: localeVisibilityFields(),
    },
  ];
}

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: { useAsTitle: "title" },
  access: { read: publishedOrUser, create: usersOnly, update: usersOnly, delete: adminsOnly },
  fields: [localizedText("title"), localizedArea("summary"), workflow, ...governance],
};

export const Products: CollectionConfig = {
  slug: "products",
  admin: { useAsTitle: "title" },
  access: { read: publishedOrUser, create: usersOnly, update: usersOnly, delete: adminsOnly },
  fields: [
    { name: "key", type: "text", required: true, unique: true },
    localizedText("title"),
    localizedArea("summary"),
    workflow,
    ...governance,
  ],
};

export const Services: CollectionConfig = {
  slug: "services",
  admin: { useAsTitle: "label" },
  access: { read: publishedOrUser, create: usersOnly, update: usersOnly, delete: adminsOnly },
  hooks: { beforeChange: [({ data }) => rejectIncompletePublish(data)] },
  fields: [
    { name: "serviceCode", type: "text", required: true, admin: { description: "Data-layer identifier. Never the public label." } },
    { name: "slug", type: "text", required: true, unique: true },
    localizedText("label"),
    localizedArea("summary"),
    workflow,
    ...governance,
  ],
};

export const TechnologyClaims: CollectionConfig = {
  slug: "technology-claims",
  access: { read: publishedOrUser, create: usersOnly, update: usersOnly, delete: adminsOnly },
  fields: [localizedArea("statement"), { name: "public", type: "checkbox", defaultValue: true }, workflow, ...governance],
};

export const TrustClaims: CollectionConfig = {
  slug: "trust-claims",
  access: { read: publishedOrUser, create: usersOnly, update: usersOnly, delete: adminsOnly },
  fields: [localizedArea("statement"), { name: "public", type: "checkbox", defaultValue: true }, workflow, ...governance],
};

export const Insights: CollectionConfig = {
  slug: "insights",
  admin: { useAsTitle: "title" },
  access: { read: publishedOrUser, create: usersOnly, update: usersOnly, delete: adminsOnly },
  fields: [{ name: "slug", type: "text", required: true, unique: true }, localizedText("title"), localizedArea("body"), workflow, ...governance],
};

export const News: CollectionConfig = {
  slug: "news",
  admin: { useAsTitle: "title" },
  access: { read: publishedOrUser, create: usersOnly, update: usersOnly, delete: adminsOnly },
  fields: [localizedText("title"), localizedArea("body"), workflow, ...governance],
};

export const Media: CollectionConfig = {
  slug: "media",
  admin: { useAsTitle: "alt" },
  access: { read: () => true, create: usersOnly, update: usersOnly, delete: adminsOnly },
  upload: { mimeTypes: ["image/*"] },
  fields: [
    { name: "alt", type: "text", localized: true },
  ],
};

export const People: CollectionConfig = {
  slug: "people",
  admin: { useAsTitle: "name" },
  access: { read: publishedOrUser, create: usersOnly, update: usersOnly, delete: adminsOnly },
  fields: [
    { name: "name", type: "text", required: true },
    localizedArea("role"),
    localizedArea("profile"),
    { name: "photo", type: "upload", relationTo: "media" },
    { name: "publicProfileUrl", type: "text" },
    {
      name: "category",
      type: "select",
      defaultValue: "leadership",
      options: [{ label: "Leadership", value: "leadership" }],
    },
    { name: "order", type: "number", defaultValue: 100 },
    ...cardVisibilityFields(),
    workflow,
  ],
};

export const Partners: CollectionConfig = {
  slug: "partners",
  admin: { useAsTitle: "name" },
  access: { read: publishedOrUser, create: usersOnly, update: usersOnly, delete: adminsOnly },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "logo", type: "upload", relationTo: "media" },
    localizedArea("shortDescription"),
    { name: "publicUrl", type: "text" },
    { name: "order", type: "number", defaultValue: 100 },
    ...cardVisibilityFields(),
    workflow,
    ...governance,
  ],
};

export const CompanyInfo: CollectionConfig = {
  slug: "company-info",
  access: { read: () => true, update: usersOnly },
  fields: [
    { name: "legalName", type: "text" },
    { name: "address", type: "textarea" },
    { name: "jurisdiction", type: "text", admin: { description: "Publish only a confirmed jurisdiction." } },
  ],
};

export const LegalPages: CollectionConfig = {
  slug: "legal-pages",
  admin: { useAsTitle: "title" },
  access: { read: publishedOrUser, create: usersOnly, update: usersOnly, delete: adminsOnly },
  fields: [{ name: "slug", type: "text", required: true, unique: true }, localizedText("title"), localizedArea("body"), workflow],
};

export const CallsToAction: CollectionConfig = {
  slug: "calls-to-action",
  admin: { useAsTitle: "key" },
  access: { read: () => true, create: usersOnly, update: usersOnly, delete: adminsOnly },
  fields: [{ name: "key", type: "text", required: true, unique: true }, localizedText("label"), { name: "href", type: "text", required: true }],
};
