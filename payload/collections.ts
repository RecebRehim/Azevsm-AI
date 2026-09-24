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

export const People: CollectionConfig = {
  slug: "people",
  admin: { useAsTitle: "name" },
  access: { read: publishedOrUser, create: usersOnly, update: usersOnly, delete: adminsOnly },
  fields: [{ name: "name", type: "text", required: true }, localizedArea("role"), workflow],
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
