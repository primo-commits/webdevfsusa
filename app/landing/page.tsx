"use client";

import { useState } from "react";
import Link from "next/link";

const GHL_BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/6Y4RUBqnucK62JXW4J8A";

export default function LandingPage() {
  const [country, setCountry] = useState<"US" | "CA">("US");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleCountryChange(c: "US" | "CA") {
    setCountry(c);
    setBusinessName("");
    setEmail("");
    setPhone("");
    setErrors({});
  }

  function validate() {
    const errs: Record<string, string> = {};
    if (!businessName.trim()) errs.businessName = "Business name is required";
    if (!email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-().]{7,}$/.test(phone.trim())) {
      errs.phone = "Please enter a valid phone number";
    }
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstError = document.querySelector("[data-error='true']");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setErrors({});

    const params = new URLSearchParams({
      country,
      business: businessName.trim(),
      email: email.trim(),
      phone: phone.trim(),
    });

    window.location.href = `${GHL_BOOKING_URL}?${params.toString()}`;
  }

  return (
    <div className="min-h-screen bg-[#F9F6F1]">
      {/* Minimal Header */}
      <header className="bg-[#1B3A5C] px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="16" fill="#F9F6F1" />
              <text y="72" x="10" fontSize="62" fontFamily="serif" fill="#1B3A5C" fontWeight="700">F</text>
              <path d="M60 20 L80 50 L60 80" stroke="#C9A84C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <line x1="60" y1="20" x2="60" y2="80" stroke="#C9A84C" strokeWidth="7" strokeLinecap="round" />
            </svg>
            <span className="text-[#F9F6F1] font-bold text-lg tracking-tight">FeeSlayers</span>
          </Link>
          <span className="text-[#C9A84C] text-sm font-medium">Book a Free Strategy Call</span>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#1B3A5C] px-6 pt-12 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-semibold tracking-wide uppercase">
            Free 30-Minute Strategy Call
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#F9F6F1] leading-tight mb-4">
            More leads. More jobs. More growth.
          </h1>
          <p className="text-[#C4B49A] text-base md:text-lg leading-relaxed">
            Tell us about your business and what you&apos;re looking to improve. We&apos;ll put together a custom plan and show you exactly what&apos;s available for your situation.
          </p>
        </div>
      </section>

      {/* Form Card */}
      <section className="px-6 -mt-6 pb-20">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-[#E8DFD0] overflow-hidden">

            {/* Country Selector */}
            <div className="bg-[#1B3A5C] px-6 py-5">
              <p className="text-[#C4B49A] text-xs font-semibold uppercase tracking-wider mb-3">Where is your business located?</p>
              <div className="flex gap-3">
                {(["US", "CA"] as const).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => handleCountryChange(c)}
                    className={`flex-1 py-3 px-4 rounded-xl border-2 font-semibold text-sm transition-all duration-150 ${
                      country === c
                        ? "border-[#C9A84C] bg-[#C9A84C] text-[#1B3A5C]"
                        : "border-[#4A6B8A] text-[#A8C0D8] hover:border-[#C9A84C]/60"
                    }`}
                  >
                    {c === "US" ? "US \u2014 United States" : "CA \u2014 Canada"}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">

              {/* Business Name */}
              <div>
                <label htmlFor="businessName" className="block text-sm font-semibold text-[#1B3A5C] mb-1.5">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="businessName"
                  type="text"
                  value={businessName}
                  onChange={(e) => { setBusinessName(e.target.value); setErrors((p) => ({ ...p, businessName: "" })); }}
                  placeholder="e.g. Apex Auto Repair"
                  data-error={!!errors.businessName}
                  className={`w-full px-4 py-3 rounded-xl border-2 text-[#1B3A5C] bg-[#F9F6F1] placeholder-[#A8C0D8] focus:outline-none focus:border-[#1B3A5C] transition-colors text-sm ${
                    errors.businessName ? "border-red-400" : "border-[#E8DFD0]"
                  }`}
                />
                {errors.businessName && (
                  <p className="mt-1 text-xs text-red-500 font-medium">{errors.businessName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#1B3A5C] mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: "" })); }}
                  placeholder="you@yourbusiness.com"
                  data-error={!!errors.email}
                  className={`w-full px-4 py-3 rounded-xl border-2 text-[#1B3A5C] bg-[#F9F6F1] placeholder-[#A8C0D8] focus:outline-none focus:border-[#1B3A5C] transition-colors text-sm ${
                    errors.email ? "border-red-400" : "border-[#E8DFD0]"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#1B3A5C] mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: "" })); }}
                  placeholder="(555) 867-5309"
                  data-error={!!errors.phone}
                  className={`w-full px-4 py-3 rounded-xl border-2 text-[#1B3A5C] bg-[#F9F6F1] placeholder-[#A8C0D8] focus:outline-none focus:border-[#1B3A5C] transition-colors text-sm ${
                    errors.phone ? "border-red-400" : "border-[#E8DFD0]"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500 font-medium">{errors.phone}</p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1B3A5C] hover:bg-[#2A4F75] text-[#F9F6F1] font-bold py-4 px-6 rounded-xl transition-colors text-sm tracking-wide flex items-center justify-center gap-2"
                >
                  Book Your Free Strategy Call
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <p className="text-center text-xs text-[#8B7B6B] mt-3">
                  No commitment. No sales pressure. Just a real conversation about your business.
                </p>
              </div>
            </form>

            {/* Footer note */}
            <div className="px-6 pb-5">
              <div className="border-t border-[#E8DFD0] pt-4 text-center">
                <p className="text-xs text-[#8B7B6B]">
                  FeeSlayers is not a lender and does not make credit decisions. Financing provided through third-party lenders.
                </p>
              </div>
            </div>
          </div>

          {/* Trust signals */}
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {[
              { label: "30-minute call" },
              { label: "Custom plan" },
              { label: "No obligation" },
            ].map(({ label }) => (
              <div key={label} className="bg-white rounded-xl border border-[#E8DFD0] py-3 px-2">
                <div className="text-sm font-bold text-[#C9A84C] mb-1">[ok]</div>
                <p className="text-xs text-[#6B5B4B] font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
