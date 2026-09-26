import { getCopy } from "@/lib/content/copy";
import type { Locale } from "@/lib/i18n";
import type { AuthorityPage } from "@/lib/content/authority-pages-v31";
import type { ProductAuthorityKey } from "@/lib/content/product-authority-pages-v31";
import type { ExistingAuthorityPageKey } from "@/lib/content/existing-authority-pages-v31";

export function legacyProductPage(locale: Locale, key: ProductAuthorityKey): AuthorityPage {
  const c = getCopy(locale);
  if (key === "platform") return {
    title: c.platformTitle,
    lead: c.platformLead,
    blocks: [
      { type: "heading", text: c.journeyTitle },
      { type: "table", rows: c.journey.map(([title, body]) => [`${title}\n${body}`]) },
      { type: "heading", text: c.capabilitiesTitle },
      { type: "table", rows: c.capabilities.map(([title, body]) => [`${title}\n${body}`]) },
    ],
    actions: [{ label: c.nav.products, href: "/products" }, { label: c.enterPlatform, href: "/enter" }],
  };
  if (key === "products") return {
    title: c.productsTitle,
    lead: c.productsLead,
    blocks: [
      { type: "table", rows: c.productCards.map(([title, body]) => [`${title}\n${body}`]) },
      { type: "heading", text: c.plusTitle },
      { type: "p", text: c.plusNote },
    ],
    actions: [{ label: "Azevsm Index", href: "/products/azevsm-index" }, { label: "Azevsm Institutional Index", href: "/products/azevsm-institutional-index" }, { label: "Azevsm Plus", href: "/products/azevsm-plus" }],
  };
  if (key === "index" || key === "institutional") {
    const title = key === "index" ? c.indexTitle : c.instTitle;
    const lead = key === "index" ? c.indexLead : c.instLead;
    return {
      title, lead,
      blocks: [
        { type: "heading", text: c.forWhom }, { type: "p", text: c.audienceLead },
        { type: "heading", text: c.problem }, { type: "p", text: c.problemLead },
        { type: "heading", text: c.receives }, { type: "p", text: lead },
        { type: "heading", text: c.evidence }, { type: "p", text: c.serviceTemplate.evidence },
        { type: "heading", text: c.resultMeans }, { type: "p", text: c.serviceTemplate.result },
        { type: "heading", text: c.traceability }, { type: "p", text: c.serviceTemplate.trust },
      ],
      actions: [{ label: c.contact, href: "/contact" }, { label: c.nav.trust, href: "/trust" }],
    };
  }
  return {
    title: c.plusTitle,
    lead: c.plusLead,
    blocks: [{ type: "p", text: c.plusNote }],
    actions: [{ label: c.contact, href: "/contact" }],
  };
}

export function legacyExistingPage(locale: Locale, key: ExistingAuthorityPageKey): AuthorityPage {
  const c = getCopy(locale);
  if (key === "technology") return {
    title: c.techTitle,
    lead: c.techLead,
    blocks: [
      { type: "heading", text: c.boundariesTitle },
      { type: "table", rows: c.boundaries.map(([title, body]) => [`${title}\n${body}`]) },
      { type: "list", items: [...c.techClaims] },
    ],
    actions: [{ label: c.nav.whitebox, href: "/white-box" }],
  };
  if (key === "whiteBox") return {
    title: c.wbTitle,
    lead: c.wbLead,
    blocks: [
      { type: "table", rows: c.wbDetails.map(([title, body]) => [`${title}\n${body}`]) },
      { type: "table", rows: c.standardPoints.map(([title, body]) => [`${title}\n${body}`]) },
    ],
    actions: [{ label: c.nav.trust, href: "/trust" }],
  };
  if (key === "trust") return {
    title: c.trustPageTitle,
    lead: c.trustPageLead,
    blocks: [
      { type: "list", items: [...c.micro] },
      { type: "heading", text: c.showTitle },
      { type: "table", rows: c.show.map(([title, body]) => [`${title}\n${body}`]) },
      { type: "heading", text: c.hideTitle },
      { type: "list", items: [...c.hide] },
    ],
    actions: [{ label: c.security, href: "/legal/security" }, { label: c.privacy, href: "/legal/privacy" }],
  };
  return {
    title: c.companyPageTitle,
    lead: c.companyPageLead,
    blocks: [
      { type: "heading", text: c.missionTitle }, { type: "p", text: c.mission },
      { type: "heading", text: c.researchTitle }, { type: "p", text: c.research },
      { type: "heading", text: c.peopleTitle }, { type: "p", text: c.people },
      { type: "heading", text: c.newsTitle }, { type: "p", text: c.newsEmpty },
    ],
    actions: [{ label: c.insightsLink, href: "/insights" }, { label: c.contact, href: "/contact" }],
  };
}
