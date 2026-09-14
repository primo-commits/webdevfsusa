"use client";

import { useState } from "react";
import Link from "next/link";

const GHL_BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/6Y4RUBqnucK62JXW4J8A";

const US_INDUSTRIES = [
  "Auto Repair",
  "Home Services / Contracting",
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Home Renovation",
  "Healthcare / Dental",
  "Other",
];

const CA_INDUSTRIES = [
  "Auto Repair",
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Home Renovation",
  "Other",
];

const US_SERVICES = [
  { id: "google_presence", label: "Google Business Profile", description: "Show up when local customers search for you" },
  { id: "consumer_financing", label: "Consumer Financing", description: "Help customers say yes to big jobs with installment plans" },
  { id: "payment_processing", label: "Payment Processing", description: "Stop paying to collect your own money" },
  { id: "business_capital", label: "Business Capital", description: "Access growth capital without jumping through bank hoops" },
  { id: "clover_hardware", label: "Clover Hardware", description: "Modern point-of-sale hardware that just works" },
  { id: "facebook_advertising", label: "Facebook / Meta Advertising", description: "Targeted ads that bring real leads, not vanity metrics" },
];

const CA_SERVICES = [
  { id: "payment_surcharging", label: "Payment Surcharging", description: "Collect every dollar you're owed, compliant by province" },
  { id: "consumer_financing", label: "Consumer Financing", description: "Help customers approve the work they need", badge: "Coming Soon" },
  { id: "google_presence", label: "Google Business Profile", description: "Show up in local searches with a polished profile" },
];

function ServiceToggle({
  service,
  checked,
  onChange,
  disabled,
}: {
  service: { id: string; label: string; description: string; badge?: string };
  checked: boolean;
  onChange: (id: string, checked: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <label
      className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-150 ${
        disabled
          ? "border-[#E8DFD0] bg-[#F9F6F1] opacity-60 cursor-not-allowed"
          : checked
          ? "border-[#1B3A5C] bg-[#F9F6F1]"
          : "border-[#E8DFD0] bg-white hover:border-[#1B3A5C]/40"
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(service.id, e.target.checked)}
        className="mt-1 w-5 h-5 rounded border-[#C4B49A] text-[#1B3A5C] focus:ring-[#1B3A5C] accent-[#1B3A5C] flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`font-semibold text-sm ${disabled ? "text-[#8B7B6B]" : "text-[#1B3A5C]"}`}>
            {service.label}
          </span>
          {service.badge && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#1B3A5C] text-[#F9F6F1]">
              {service.badge}
            </span>
          )}
        </div>
        <p className="text-xs text-[#6B5B4B] mt-0.5 leading-relaxed">{service.description}</p>
      </div>
    </label>
  );
}

export default function LandingPage() {
  const [country, setCountry] = useState<"US" | "CA">("US");
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");
  const [selectedServices, setSelectedServices] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const industries = country === "US" ? US_INDUSTRIES : CA_INDUSTRIES;
  const services = country === "US" ? US_SERVICES : CA_SERVICES;

  // Reset dependent fields when country changes
  function handleCountryChange(c: "US" | "CA") {
    setCountry(c);
    setIndustry("");
    setSelectedServices({});
    setErrors({});
  }

  function handleServiceChange(id: string, checked: boolean) {
    setSelectedServices((prev) => ({ ...prev, [id]: checked }));
  }

  function validate() {
    const errs: Record<string, string> = {};
    if (!businessName.trim()) errs.businessName = "Business name is required";
    if (!industry) errs.industry = "Please select your industry";
    if (Object.values(selectedServices).filter(Boolean).length === 0)
      errs.services = "Select at least one service you're interested in";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Scroll to first error
      const firstError = document.querySelector("[data-error='true']");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setErrors({});

    const selected = Object.entries(selectedServices)
      .filter(([, v]) => v)
      .map(([k]) => k)
      .join(",");

    const params = new URLSearchParams({
      country,
      business: businessName.trim(),
      industry,
      services: selected,
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
              <text y="72" x="10" fontSize="62" fontFamily="serif" fill="#1B3A5C]" fontWeight="700">F</text>
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
            See exactly how FeeSlayers can grow your business
          </h1>
          <p className="text-[#C4B49A] text-base md:text-lg leading-relaxed">
            Tell us about your business and what you're looking to improve. We'll put together a custom plan and show you exactly what's available for your situation.
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
                    {c === "US" ? "🇺🇸 United States" : "🇨🇦 Canada"}
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

              {/* Industry */}
              <div>
                <label htmlFor="industry" className="block text-sm font-semibold text-[#1B3A5C] mb-1.5">
                  Industry <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="industry"
                    value={industry}
                    onChange={(e) => { setIndustry(e.target.value); setErrors((p) => ({ ...p, industry: "" })); }}
                    data-error={!!errors.industry}
                    className={`w-full appearance-none px-4 py-3 pr-10 rounded-xl border-2 text-[#1B3A5C] bg-[#F9F6F1] focus:outline-none focus:border-[#1B3A5C] transition-colors text-sm ${
                      errors.industry ? "border-red-400" : "border-[#E8DFD0]"
                    }`}
                  >
                    <option value="" disabled>Select your industry</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6B5B4B]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
                {errors.industry && (
                  <p className="mt-1 text-xs text-red-500 font-medium">{errors.industry}</p>
                )}
              </div>

              {/* Services */}
              <div>
                <p className="block text-sm font-semibold text-[#1B3A5C] mb-1">
                  Which services interest you? <span className="text-red-500">*</span>
                </p>
                <p className="text-xs text-[#6B5B4B] mb-3">Select all that apply</p>
                <div className="space-y-2.5">
                  {services.map((service) => (
                    <ServiceToggle
                      key={service.id}
                      service={service}
                      checked={!!selectedServices[service.id]}
                      onChange={handleServiceChange}
                      disabled={"badge" in service && !!service.badge}
                    />
                  ))}
                </div>
                {errors.services && (
                  <p className="mt-2 text-xs text-red-500 font-medium">{errors.services}</p>
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
              { icon: "🕐", label: "30-minute call" },
              { icon: "💡", label: "Custom plan" },
              { icon: "🔒", label: "No obligation" },
            ].map(({ icon, label }) => (
              <div key={label} className="bg-white rounded-xl border border-[#E8DFD0] py-3 px-2">
                <div className="text-lg mb-0.5">{icon}</div>
                <p className="text-xs text-[#6B5B4B] font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
