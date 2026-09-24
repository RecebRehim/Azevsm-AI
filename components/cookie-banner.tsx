"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { SiteCopy } from "@/lib/content/copy";
import { localePath, type Locale } from "@/lib/i18n";

export function CookieBanner({ locale, copy }: { locale: Locale; copy: SiteCopy }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem("azevsm-cookie")) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="cookie" role="dialog" aria-label={copy.cookiesTitle}>
      <p>
        {copy.cookieText}{" "}
        <Link href={localePath(locale, "/legal/cookies")}>{copy.cookiePolicy}</Link>
      </p>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          window.localStorage.setItem("azevsm-cookie", "acknowledged");
          setVisible(false);
        }}
      >
        {copy.cookieAccept}
      </button>
    </div>
  );
}
