function productionRuntime() {
  return process.env.NODE_ENV === "production" && process.env.NEXT_PHASE !== "phase-production-build";
}

export function siteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (value && !/localhost|127\.0\.0\.1/.test(value)) return value.replace(/\/$/, "");
  if (productionRuntime()) {
    throw new Error("NEXT_PUBLIC_SITE_URL is required in production and must not be localhost");
  }
  return (value || "http://localhost:3000").replace(/\/$/, "");
}

export function payloadSecret() {
  const value = process.env.PAYLOAD_SECRET?.trim();
  if (value && value !== "replace-with-a-long-random-secret" && value !== "dev-only-secret-change-before-production") {
    return value;
  }
  if (productionRuntime()) {
    throw new Error("PAYLOAD_SECRET is required in production");
  }
  return "dev-only-secret-change-before-production";
}
