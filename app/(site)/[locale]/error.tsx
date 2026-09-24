"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function LocaleError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const params = useParams<{ locale?: string }>();
  const locale = params.locale || "en";
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">AzevsmAI Systems</p>
        <h1>Something went wrong.</h1>
        <p className="lede">This page could not be displayed. You can try again, return home, or contact the company.</p>
        <div className="cta-row">
          <button className="btn btn-primary" type="button" onClick={() => reset()}>Try again</button>
          <Link className="btn btn-ghost" href={`/${locale}`}>Home</Link>
          <Link className="btn btn-ghost" href={`/${locale}/contact`}>Contact</Link>
        </div>
      </div>
    </section>
  );
}
