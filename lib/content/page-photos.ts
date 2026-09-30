/**
 * Free Pexels candidates from AzevsmAI_sayt_ucun_pulsuz_foto_namizedleri_AZ.docx.
 * Homepage hero is intentionally excluded per the document.
 */
export const pageHeroPhotos = {
  platform: "/stock/team-documents.jpg",
  products: "/stock/products-meeting.jpg",
  technology: "/stock/technology-charts.jpg",
  whitebox: "/stock/whitebox-analysis.jpg",
  trust: "/stock/trust-meeting.jpg",
  "data-security": "/stock/data-security-hero.jpg",
  "legal-compliance": "/stock/legal-meeting.jpg",
  company: "/stock/company-office.jpg",
  index: "/stock/products-meeting.jpg",
  institutional: "/stock/institutional-meeting.jpg",
  plus: "/stock/team-documents.jpg",
} as const;

export type PageHeroPhotoKind = keyof typeof pageHeroPhotos;

export const pageInternalPhotos = {
  dataSecurityServers: "/stock/data-security-servers.jpg",
  technologyAlt: "/stock/technology-alt.jpg",
  resultSystem: "/stock/result-system-work.jpg",
} as const;

export const pagePhotoSources = {
  platform: "https://www.pexels.com/photo/team-meeting-over-business-documents-in-modern-office-36733412/",
  products: "https://www.pexels.com/photo/business-meeting-in-modern-office-setting-36733299/",
  technology: "https://www.pexels.com/photo/business-professional-analyzing-charts-at-desk-30535623/",
  technologyAlt: "https://www.pexels.com/photo/professional-man-analyzing-data-on-computer-37828833/",
  whitebox: "https://www.pexels.com/photo/professional-analyzing-data-on-computer-screen-30535628/",
  trust: "https://www.pexels.com/photo/business-meeting-in-modern-conference-room-31739411/",
  dataSecurity: "https://www.pexels.com/photo/it-technician-working-in-data-center-server-room-37605911/",
  dataSecurityServers: "https://www.pexels.com/photo/data-center-server-racks-with-active-equipment-37730212/",
  legal: "https://www.pexels.com/photo/a-man-talking-to-a-lawyer-8152743/",
  company: "https://www.pexels.com/photo/modern-office-interior-with-city-view-and-conference-setup-35856472/",
  institutional: "https://www.pexels.com/photo/corporate-team-meeting-in-modern-conference-room-31739406/",
  resultSystem: "https://www.pexels.com/photo/businessman-working-with-documents-in-the-office-10376257/",
} as const;
