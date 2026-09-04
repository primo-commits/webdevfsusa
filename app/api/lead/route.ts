/**
 * Contact form endpoint. Forwards the submission to the GoHighLevel inbound
 * webhook in LEAD_WEBHOOK_URL. Keeps the webhook URL server-side.
 */
import { NextResponse } from "next/server";

const MAX = { name: 120, email: 200, phone: 40, shop: 160, message: 2000 };

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ error: "Contact form is not configured yet." }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }

  // Honeypot: real users never fill this field.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, MAX.name);
  const phone = clean(body.phone, MAX.phone);
  const email = clean(body.email, MAX.email);
  const shop = clean(body.shop, MAX.shop);
  const message = clean(body.message, MAX.message);

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const [first_name, ...rest] = name.split(/\s+/);
  const last_name = rest.join(" ");

  const upstream = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name,
      last_name,
      full_name: name,
      phone,
      email,
      company_name: shop,
      message,
      source: "feeslayers.com contact form",
    }),
  }).catch(() => null);

  if (!upstream || !upstream.ok) {
    return NextResponse.json(
      { error: "Could not send right now. Please call us instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
