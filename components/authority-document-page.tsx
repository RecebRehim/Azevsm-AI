import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { RuAuthorityDocumentPage } from "@/components/ru-authority-document-page";
import { getAuthorityPage, type AuthorityPageKey } from "@/lib/content/authority-pages-v31";
import { localePath, type Locale } from "@/lib/i18n";

function splitCell(value: string) {
  const [title, ...rest] = value.split("\n");
  return { title, body: rest.join("\n") };
}

export function AuthorityDocumentPage({ locale, pageKey }: { locale: Locale; pageKey: AuthorityPageKey }) {
  const page = getAuthorityPage(locale, pageKey);
  if (!page) notFound();
  if (locale === "ru" && (pageKey === "resultSystem" || pageKey === "validation")) return <RuAuthorityDocumentPage pageKey={pageKey} />;
  const actions = locale === "ru" ? page.actions.filter((action) => action.href !== "/contact") : page.actions;

  return (
    <>
      <PageIntro title={page.title} lead={page.lead} />
      <section className="section-tight">
        <div className="wrap prose">
          {page.blocks.map((block, index) => {
            if (block.type === "heading") return <h2 id={block.id} key={index}>{block.text}</h2>;
            if (block.type === "p") return <p key={index}>{block.text}</p>;
            if (block.type === "list") return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
            if (block.type === "note") return <article className="card" key={index}><h3>{block.title}</h3><p>{block.body}</p></article>;
            if (block.type === "table") {
              const bodyRows = block.header ? block.rows.slice(1) : block.rows;
              const header = block.header ? block.rows[0] : null;
              return (
                <div key={index} style={{ overflowX: "auto" }}>
                  <table className="data">
                    {header ? <thead><tr>{header.map((cell, i) => <th key={i}>{cell}</th>)}</tr></thead> : null}
                    <tbody>
                      {bodyRows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => {
                            const value = splitCell(cell);
                            return <td key={cellIndex}>{value.body ? <><strong>{value.title}</strong><br />{value.body}</> : cell}</td>;
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            return null;
          })}
          <div className="next-actions">
            {actions.map((action, index) => (
              <Link className={index === 0 ? "btn btn-primary" : "btn btn-ghost"} href={action.href.startsWith("#") ? action.href : localePath(locale, action.href)} key={action.label}>
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
