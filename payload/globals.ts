import type { Field, GlobalConfig } from "payload";
import { usersOnly } from "./access";

function localeVisibilityFields(): Field[] {
  return [
    { name: "ru", label: "RU", type: "checkbox", defaultValue: false },
    { name: "en", label: "EN", type: "checkbox", defaultValue: false },
    { name: "az", label: "AZ", type: "checkbox", defaultValue: false },
    { name: "ar", label: "AR", type: "checkbox", defaultValue: false },
    { name: "zh", label: "ZH", type: "checkbox", defaultValue: false },
  ];
}

function sectionControl(name: string, label: string): Field {
  return {
    name,
    label,
    type: "group",
    fields: [
      {
        name: "enabled",
        label: "Блок включён",
        type: "checkbox",
        defaultValue: false,
        admin: { description: "Master switch. OFF hides the whole block in all public language versions." },
      },
      {
        name: "publicVisibility",
        label: "Публичная видимость по языкам",
        type: "group",
        fields: localeVisibilityFields(),
      },
    ],
  };
}

export const CompanySections: GlobalConfig = {
  slug: "company-sections",
  label: "Company — руководство и партнёры",
  access: {
    read: () => true,
    update: usersOnly,
  },
  fields: [
    sectionControl("leadership", "Руководство компании"),
    sectionControl("partners", "Наши партнёры"),
  ],
};
