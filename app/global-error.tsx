"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#f7f8f6", color: "#202833", fontFamily: "Manrope, Segoe UI, sans-serif" }}>
        <main style={{ maxWidth: 760, margin: "0 auto", padding: "88px 24px" }}>
          <p style={{ margin: "0 0 12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#66717d", fontSize: 13, fontWeight: 650 }}>
            AzevsmAI Systems
          </p>
          <h1 style={{ margin: "0 0 16px", color: "#0b1320", fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 650 }}>
            Something went wrong.
          </h1>
          <p style={{ margin: "0 0 28px", maxWidth: 560, fontSize: 18, lineHeight: 1.55 }}>
            This page could not be displayed. You can try again, return home, or contact the company.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
            <button
              type="button"
              onClick={() => reset()}
              style={{ background: "#255a78", color: "#fff", border: 0, borderRadius: 12, minHeight: 44, padding: "0 16px", font: "inherit", fontWeight: 650, cursor: "pointer" }}
            >
              Try again
            </button>
            <button
              type="button"
              onClick={() => {
                window.location.href = "/en";
              }}
              style={{ color: "#0b1320", background: "transparent", border: "1px solid #c5d0da", borderRadius: 12, minHeight: 44, padding: "10px 16px", font: "inherit", cursor: "pointer" }}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => {
                window.location.href = "/en/contact";
              }}
              style={{ color: "#255a78", background: "transparent", border: 0, minHeight: 44, padding: "10px 16px", font: "inherit", cursor: "pointer" }}
            >
              Contact
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
