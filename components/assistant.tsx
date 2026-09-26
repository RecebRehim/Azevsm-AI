"use client";

import Link from "next/link";
import { useState } from "react";
import type { SiteCopy } from "@/lib/content/copy";
import { localePath, type Locale } from "@/lib/i18n";

type Turn = { role: "user" | "bot"; text: string; version?: string };

export function Assistant({ locale, copy }: { locale: Locale; copy: SiteCopy }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [pending, setPending] = useState(false);
  const intro = locale === "ru" ? "Спросите о компании, платформе, публичных продуктах или навигации. Этот помощник не оценивает компанию." : copy.assistantIntro;
  const [turns, setTurns] = useState<Turn[]>([{ role: "bot", text: intro }]);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const question = text.trim();
    if (!question || pending) return;
    setText("");
    setTurns((current) => [...current, { role: "user", text: question }]);
    setPending(true);
    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale, question }),
      });
      const data = await response.json();
      setTurns((current) => [...current, { role: "bot", text: data.answer, version: data.version }]);
    } catch {
      setTurns((current) => [...current, { role: "bot", text: copy.errorDelivery }]);
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <button className={`btn btn-primary assistant-launch${locale === "ru" ? " ru-assistant-launch" : ""}`} type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        {locale === "ru" ? (
          <>
            <svg className="ru-support-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h14v10H9l-4 4z" /></svg>
            <span className="ru-support-label">{open ? copy.close : copy.assistantOpen}</span>
          </>
        ) : (open ? copy.close : copy.assistantOpen)}
      </button>
      {open ? (
        <section className="assistant-panel" role="dialog" aria-label={copy.assistantTitle}>
          <div className="assistant-head">
            <strong>{copy.assistantTitle}</strong>
            <p className="note">{copy.assistantPending}</p>
          </div>
          <div className="assistant-log">
            {turns.map((turn, index) => (
              <div key={`${turn.role}-${index}`} className={`bubble ${turn.role === "user" ? "bubble-user" : "bubble-bot"}`}>
                <p>{turn.text}</p>
                {turn.version ? <p className="note">{copy.versionLabel} {turn.version}</p> : null}
              </div>
            ))}
          </div>
          <form className="assistant-form" onSubmit={onSubmit}>
            <label className="field" style={{ flex: 1 }}>
              <span className="note">{copy.assistantPlaceholder}</span>
              <input value={text} onChange={(event) => setText(event.target.value)} name="question" />
            </label>
            <button className="btn btn-primary" type="submit" disabled={pending}>{copy.assistantSend}</button>
          </form>
          {locale !== "ru" ? (
            <div className="assistant-head">
              <Link href={localePath(locale, "/contact")}>{copy.assistantHuman}</Link>
            </div>
          ) : null}
        </section>
      ) : null}
    </>
  );
}
