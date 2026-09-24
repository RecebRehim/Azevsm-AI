import { mkdir, appendFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { isLocale } from "@/lib/i18n";
import { clientKey, rateLimit } from "@/lib/rate-limit";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!rateLimit(clientKey(request, "contact"), 8, 60_000).ok) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }
  const body = await request.json().catch(() => null);
  if (!body || !isLocale(body.locale)) return NextResponse.json({ ok: false }, { status: 400 });
  const name = String(body.name || "").trim();
  const organization = String(body.organization || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();
  if (!name || !organization || !emailPattern.test(email) || message.length < 2 || message.length > 4000) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const record = { at: new Date().toISOString(), locale: body.locale, name, organization, email, message };
  const dir = path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  await appendFile(path.join(dir, "inquiries.jsonl"), `${JSON.stringify(record)}\n`, "utf8");
  return NextResponse.json({ ok: true, next: "review-and-reply" });
}
