/**
 * Full-bleed dusk landscape backgrounds for authority heroes.
 * Same usage pattern as homepage `.heroLandscape`
 * (cover + center bottom + behind copy). Homepage hero stays separate.
 *
 * File slug may differ from hero kind (e.g. legal-compliance → legal).
 */
export const pageLandscapeBackgrounds = {
  platform: "platform",
  products: "products",
  technology: "technology",
  company: "company",
  institutional: "institutional",
  result: "result",
  trust: "trust",
  whitebox: "whitebox",
  "data-security": "data-security",
  "legal-compliance": "legal",
  index: "index",
  plus: "plus",
  insights: "technology",
  validation: "trust",
  terms: "legal",
  cookies: "legal",
  security: "data-security",
} as const;

export type PageLandscapeKind = keyof typeof pageLandscapeBackgrounds;

/** @deprecated Prefer pageLandscapeBackgrounds for hero treatment. */
export const pageHeroPhotos = pageLandscapeBackgrounds;
export type PageHeroPhotoKind = PageLandscapeKind;
