import Link from "next/link";
import type { AuthorityPage } from "@/lib/content/authority-pages-v31";
import { localePath } from "@/lib/i18n";

function splitCell(value: string) {
  const [title, ...rest] = value.split("\n");
  return { title, body: rest.join("\n") };
}

export function RuPilotBlocks({ blocks }: { blocks: AuthorityPage["blocks"] }) {
  return (
    <div className="ru-pilot-blocks">
      {blocks.map((block, index) => {
        if (block.type === "heading") return <h2 id={block.id} key={index}>{block.text}</h2>;
        if (block.type === "p") return <p key={index} style={{ whiteSpace: "pre-line" }}>{block.text}</p>;
        if (block.type === "list") return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
        if (block.type === "note") return <article className="card ru-pilot-note" key={index}><h3>{block.title}</h3><p>{block.body}</p></article>;
        if (block.type === "table") {
          const header = block.header ? block.rows[0] : null;
          const rows = block.header ? block.rows.slice(1) : block.rows;
          return (
            <div className="ru-pilot-table-wrap" key={index}>
              <table className="data">
                {header ? <thead><tr>{header.map((value, cellIndex) => <th key={cellIndex}>{value}</th>)}</tr></thead> : null}
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((value, cellIndex) => {
                        const item = splitCell(value);
                        return <td key={cellIndex}>{item.body ? <><strong>{item.title}</strong><br />{item.body}</> : value}</td>;
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
    </div>
  );
}

export function RuPilotActions({ actions }: { actions: AuthorityPage["actions"] }) {
  const visible = actions.filter((action) => action.href !== "/contact");
  if (!visible.length) return null;
  return (
    <div className="next-actions ru-pilot-actions">
      {visible.map((action, index) => (
        <Link
          className={index === 0 ? "btn btn-primary" : "btn btn-ghost"}
          href={action.href.startsWith("#") ? action.href : localePath("ru", action.href)}
          key={action.label}
        >
          {action.label}
        </Link>
      ))}
    </div>
  );
}
