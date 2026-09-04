"use client";

import { useState } from "react";
import { company } from "@/lib/site-config";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-1 block w-full rounded border border-navy/25 bg-white px-3 py-2 text-navy focus-visible:border-navy";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Could not send.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not send.");
    }
  }

  if (status === "sent") {
    return (
      <p className="max-w-prose rounded border border-navy/25 p-4" role="status">
        Got it. We will call you back. If it is urgent, call {company.phone}.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-md space-y-4" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Your name
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={field} />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email <span className="font-normal text-navy-soft">(optional)</span>
        </label>
        <input id="email" name="email" type="email" autoComplete="email" className={field} />
      </div>

      <div>
        <label htmlFor="shop" className="text-sm font-medium">
          Shop name <span className="font-normal text-navy-soft">(optional)</span>
        </label>
        <input id="shop" name="shop" type="text" autoComplete="organization" className={field} />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          What do you need help with?{" "}
          <span className="font-normal text-navy-soft">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4} className={field} />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded bg-gold px-6 py-3 font-medium text-navy-deep hover:bg-gold-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending" : "Send"}
      </button>

      <p className="min-h-[1.5rem] text-sm text-navy-soft" role="alert">
        {status === "error" ? error : ""}
      </p>
    </form>
  );
}
