import Link from "next/link";
import { FounderIcon, type FounderIconName } from "@/components/founder-icon";
import { RuPilotTableScroll } from "@/components/ru-pilot-table-scroll";
import type { AuthorityPage } from "@/lib/content/authority-pages-v31";
import { localePath, type Locale } from "@/lib/i18n";

function splitCell(value: string) {
  const [title, ...rest] = value.split("\n");
  return { title, body: rest.join("\n") };
}

export function RuPilotBlocks({
  blocks,
  headingIcons = [],
  noteIcons = [],
}: {
  blocks: AuthorityPage["blocks"];
  headingIcons?: FounderIconName[];
  noteIcons?: FounderIconName[];
}) {
  let headingIndex = 0;
  let noteIndex = 0;
  return (
    <div className="ru-pilot-blocks">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const icon = headingIcons[headingIndex++];
          return (
            <h2 className={icon ? "ru-pilot-heading-icon" : undefined} id={block.id} key={index}>
              {icon ? <FounderIcon name={icon} className="ru-section-heading-icon" /> : null}
              <span>{block.text}</span>
            </h2>
          );
        }
        if (block.type === "p") return <p key={index} style={{ whiteSpace: "pre-line" }}>{block.text}</p>;
        if (block.type === "list") return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
        if (block.type === "note") {
          const icon = noteIcons[noteIndex++];
          return (
            <article className={`card ru-pilot-note${icon ? " ru-pilot-note--icon" : ""}`} key={index}>
              {icon ? <FounderIcon name={icon} className="ru-note-icon" /> : null}
              <div>
                <h3>{block.title}</h3>
                <p>{block.body}</p>
              </div>
            </article>
          );
        }
        if (block.type === "table") {
          const header = block.header ? block.rows[0] : null;
          const rows = block.header ? block.rows.slice(1) : block.rows;
          const showScrollHint =
            header?.[0] === "Подход" &&
            header?.[1] === "Сильная сторона категории";
          return (
            <div className={`ru-pilot-table-shell${showScrollHint ? " ru-pilot-table-shell--scroll-hint" : ""}`} key={index}>
              {showScrollHint ? (
                <div className="ru-pilot-table-scroll-hint" aria-hidden="true">
                  Таблица продолжается вправо <span>→</span>
                </div>
              ) : null}
              <RuPilotTableScroll>
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
              </RuPilotTableScroll>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export function RuPilotActions({ actions, locale = "ru", includeContact = false }: { actions: AuthorityPage["actions"]; locale?: Locale; includeContact?: boolean }) {
  const visible = includeContact ? actions : actions.filter((action) => action.href !== "/contact");
  if (!visible.length) return null;
  return (
    <div className="next-actions ru-pilot-actions">
      {visible.map((action, index) => (
        <Link
          className={index === 0 ? "btn btn-primary" : "btn btn-ghost"}
          href={action.href.startsWith("#") ? action.href : localePath(locale, action.href)}
          key={action.label}
        >
          {action.label}
        </Link>
      ))}
    </div>
  );
}
