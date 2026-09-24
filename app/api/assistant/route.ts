import { NextResponse } from "next/server";
import { answerQuestion } from "@/lib/assistant/answer";
import { isLocale } from "@/lib/i18n";
import { clientKey, rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  if (!rateLimit(clientKey(request, "assistant"), 30, 60_000).ok) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }
  const body = await request.json().catch(() => null);
  if (!body || !isLocale(body.locale)) return NextResponse.json({ ok: false }, { status: 400 });
  const question = String(body.question || "").slice(0, 1000);
  const result = answerQuestion(body.locale, question);
  return NextResponse.json({ ok: true, ...result });
}
