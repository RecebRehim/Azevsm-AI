"use client";

import { useState } from "react";
import type { SiteCopy } from "@/lib/content/copy";
import type { Locale } from "@/lib/i18n";

export function ContactForm({ locale, copy }: { locale: Locale; copy: SiteCopy }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        locale,
        name: String(data.get("name") || ""),
        organization: String(data.get("organization") || ""),
        email: String(data.get("email") || ""),
        message: String(data.get("message") || ""),
      }),
    });
    if (!response.ok) {
      setStatus("error");
      setError(response.status === 400 ? copy.errorRequired : copy.errorDelivery);
      return;
    }
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <h2>{copy.successTitle}</h2>
        <p>{copy.successBody}</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <p className="note">{copy.whyData}</p>
      <label className="field">
        <span>{copy.fields.name}</span>
        <input name="name" autoComplete="name" required />
      </label>
      <label className="field">
        <span>{copy.fields.organization}</span>
        <input name="organization" autoComplete="organization" required />
      </label>
      <label className="field">
        <span>{copy.fields.email}</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label className="field">
        <span>{copy.fields.message}</span>
        <textarea name="message" required />
      </label>
      <p className="note">{copy.noMarketing}</p>
      {error ? <p className="form-error" role="alert">{error}</p> : null}
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? copy.sending : copy.send}
      </button>
    </form>
  );
}
