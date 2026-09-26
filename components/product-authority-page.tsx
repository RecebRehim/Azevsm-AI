import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { getProductAuthorityPage, type ProductAuthorityKey } from "@/lib/content/product-authority-pages-v31";
import { localePath, type Locale } from "@/lib/i18n";

function cell(value: string) {
  const [title, ...rest] = value.split("\n");
  return { title, body: rest.join("\n") };
}

export function ProductAuthorityPage({ locale, pageKey }: { locale: Locale; pageKey: ProductAuthorityKey }) {
  const page = getProductAuthorityPage(locale, pageKey);
  if (!page) notFound();
  return (
    <>
      <PageIntro title={page.title} lead={page.lead} />
      <section className="section-tight">
        <div className="wrap prose">
          {page.blocks.map((block, index) => {
            if (block.type === "heading") return <h2 key={index}>{block.text}</h2>;
            if (block.type === "p") return <p key={index} style={{ whiteSpace: "pre-line" }}>{block.text}</p>;
            if (block.type === "list") return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
            if (block.type === "note") return <article className="card" key={index}><h3>{block.title}</h3><p>{block.body}</p></article>;
            if (block.type === "table") {
              const header = block.header ? block.rows[0] : null;
              const rows = block.header ? block.rows.slice(1) : block.rows;
              return <div key={index} style={{ overflowX: "auto" }}><table className="data">
                {header ? <thead><tr>{header.map((v,i)=><th key={i}>{v}</th>)}</tr></thead> : null}
                <tbody>{rows.map((row,ri)=><tr key={ri}>{row.map((v,ci)=>{
                  const x=cell(v); return <td key={ci}>{x.body ? <><strong>{x.title}</strong><br />{x.body}</> : v}</td>;
                })}</tr>)}</tbody>
              </table></div>;
            }
            return null;
          })}
          <div className="next-actions">
            {page.actions.map((action,index)=><Link key={action.label} className={index===0?"btn btn-primary":"btn btn-ghost"} href={localePath(locale,action.href)}>{action.label}</Link>)}
          </div>
        </div>
      </section>
    </>
  );
}
