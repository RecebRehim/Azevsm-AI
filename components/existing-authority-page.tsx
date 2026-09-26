import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { getExistingAuthorityPage, type ExistingAuthorityPageKey } from "@/lib/content/existing-authority-pages-v31";
import { localePath, type Locale } from "@/lib/i18n";

function splitCell(value: string) {
  const [title, ...rest] = value.split("\n");
  return { title, body: rest.join("\n") };
}

export function ExistingAuthorityPage({ locale, pageKey }: { locale: Locale; pageKey: ExistingAuthorityPageKey }) {
  const page = getExistingAuthorityPage(locale, pageKey);
  if (!page) notFound();

  return (
    <>
      <PageIntro title={page.title} lead={page.lead} />
      <section className="section-tight">
        <div className="wrap prose">
          {page.blocks.map((block, index) => {
            if (block.type === "heading") return <h2 key={index}>{block.text}</h2>;
            if (block.type === "p") return <p key={index}>{block.text}</p>;
            if (block.type === "list") return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
            if (block.type === "note") return <article className="card" key={index}><h3>{block.title}</h3><p>{block.body}</p></article>;
            if (block.type === "table") return (
              <div key={index} style={{ overflowX: "auto" }}>
                <table className="data"><tbody>
                  {block.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => {
                    const value = splitCell(cell);
                    return <td key={cellIndex}>{value.body ? <><strong>{value.title}</strong><br />{value.body}</> : cell}</td>;
                  })}</tr>)}
                </tbody></table>
              </div>
            );
            return null;
          })}
          <div className="next-actions">
            {page.actions.map((action, index) => (
              <Link className={index === 0 ? "btn btn-primary" : "btn btn-ghost"} href={localePath(locale, action.href)} key={action.label}>{action.label}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
