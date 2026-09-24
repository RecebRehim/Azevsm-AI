import Link from "next/link";
import { headers } from "next/headers";
import { getCopy } from "@/lib/content/copy";
import { isLocale, localePath } from "@/lib/i18n";

export default async function NotFound() {
  const headerList = await headers();
  const requested = headerList.get("x-locale") || "en";
  const locale = isLocale(requested) ? requested : "en";
  const copy = getCopy(locale);
  return (
    <section className="section">
      <div className="wrap">
        <h1>{copy.notFoundTitle}</h1>
        <p className="lede">{copy.notFoundBody}</p>
        <Link className="btn btn-primary" href={localePath(locale)}>{copy.backHome}</Link>
      </div>
    </section>
  );
}
