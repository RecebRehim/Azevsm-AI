function hostFrom(value: string | undefined) {
  const trimmed = value?.trim();
  if (!trimmed) return "";
  return trimmed.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function siteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured && !/localhost|127\.0\.0\.1/.test(configured)) return configured.replace(/\/$/, "");
  const productionHost = hostFrom(process.env.VERCEL_PROJECT_PRODUCTION_URL);
  if (productionHost) return `https://${productionHost}`;
  const deploymentHost = hostFrom(process.env.VERCEL_URL);
  if (deploymentHost) return `https://${deploymentHost}`;
  return (configured || "http://localhost:3000").replace(/\/$/, "");
}

export function payloadSecret() {
  const value = process.env.PAYLOAD_SECRET?.trim();
  if (value && value !== "replace-with-a-long-random-secret" && value !== "dev-only-secret-change-before-production") {
    return value;
  }
  return "dev-only-secret-change-before-production";
}
