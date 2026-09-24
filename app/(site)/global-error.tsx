"use client";

import Link from "next/link";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#f7f8f6", color: "#202833", fontFamily: "Segoe UI, sans-serif" }}>
        <main style={{ maxWidth: 720, margin: "0 auto", padding: "96px 24px" }}>
          <p style={{ letterSpacing: "0.12em", textTransform: "uppercase", color: "#66717d", fontSize: 13 }}>AzevsmAI Systems</p>
          <h1 style={{ color: "#0b1320", fontSize: 44, lineHeight: 1.1 }}>Something went wrong.</h1>
          <p style={{ fontSize: 18, lineHeight: 1.5 }}>The site could not be displayed. You can try again or return home.</p>
          <p style={{ display: "flex", gap: 12 }}>
            <button type="button" onClick={() => reset()} style={{ background: "#255a78", color: "white", border: 0, borderRadius: 12, minHeight: 44, padding: "0 16px" }}>Try again</button>
            <Link href="/en" style={{ color: "#255a78" }}>Home</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
