/**
 * Chatbot endpoint. Stub for phase 2 (the AI setter widget).
 * Keeps the API key server-side. Wire the widget to POST here.
 */
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Chat is not configured yet." }, { status: 503 });
  }

  const { messages } = await request.json();
  if (!Array.isArray(messages)) {
    return NextResponse.json({ error: "messages must be an array." }, { status: 400 });
  }

  return NextResponse.json(
    { error: "Not implemented. Build this in the chatbot session." },
    { status: 501 }
  );
}
