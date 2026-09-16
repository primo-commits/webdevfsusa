"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SavingsCalculator from "@/components/SavingsCalculator";
import { industries } from "@/lib/industries";
import { industriesFr } from "@/lib/industries-fr";
import { industriesEs } from "@/lib/industries-es";
import { translations } from "@/lib/translations";

/* ── Industry priority tiers (based on Facebook Ads prospect quality) ────── */
const PRIORITY = {
  green: [
    "auto-repair",
    "hvac",
    "plumbing",
    "electrical",
    "roofing",
    "home-renovation",
    "veterinary",
    "fitness",
  ],
  yellow: [
    "professional-services",
    "dentistry",
  ],
  red: [],
};

function tierSort(a: { id: string }, b: { id: string }) {
  if (PRIORITY.green.includes(a.id) && !PRIORITY.green.includes(b.id)) return -1;
  if (!PRIORITY.green.includes(a.id) && PRIORITY.green.includes(b.id)) return 1;
  if (PRIORITY.yellow.includes(a.id) && !PRIORITY.yellow.includes(b.id)) return -1;
  if (!PRIORITY.yellow.includes(a.id) && PRIORITY.yellow.includes(b.id)) return 1;
  return 0;
}

export default function CanadaPage() {
  const [lang, setLang] = useState<"en" | "fr" | "es">("en");

  useEffect(() => {
    const stored = localStorage.getItem("fs_lang") as "en" | "fr" | "es" | null;
    if (stored === "fr" || stored === "es") {
      setLang(stored);
    } else {
      setLang("en");
    }

    const handleStorage = () => {
      const s = localStorage.getItem("fs_lang") as "en" | "fr" | "es" | null;
      setLang(s === "fr" || s === "es" ? s : "en");
    };

    window.addEventListener("storage", handleStorage);
    // Poll for same-tab changes (localStorage doesn't fire events in the same tab)
    const interval = setInterval(handleStorage, 500);
    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
    };
  }, []);

  const t = translations[lang as 'en' | 'fr' | 'es'].canadaPage;
  const langIndustries = lang === "fr" ? industriesFr : lang === "es" ? industriesEs : industries;
  const sorted = Object.values(langIndustries).sort(tierSort) as typeof industries;

  return (
    <>
      <Navbar theme="light" languages={["en", "fr"]} />
      <main className="flex-1 pt-16 lg:pt-20">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="bg-navy relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy-soft/50 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-4xl mx-auto text-center">

              {/* Free trial badge */}
              <div className="inline-flex items-center gap-2 bg-gold text-navy text-xs font-extrabold uppercase tracking-widest px-5 py-2 rounded-full mb-8">
                <span>{t.heroBadge}</span>
                <span className="opacity-60">|</span>
                <span className="font-normal opacity-80">{t.heroBadgeSub}</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-cream leading-tight tracking-tight mb-6">
                {t.heroLine1}<br />
                <span className="wordmark-slayers">{t.heroLine2}</span><br />
                {t.heroLine3}
              </h1>

              <p className="text-xl text-cream/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                {t.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/landing" className="btn-gold">
                  {t.heroCta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <p className="mt-8 text-cream/40 text-sm">
                {t.heroTrust}
              </p>

            </div>
          </div>
        </section>

        {/* ── WHAT WE OFFER ───────────────────────────────────── */}
        <section id="services" className="section-cream py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                {t.servicesTitle}
              </h2>
              <p className="text-navy/60 text-lg max-w-xl mx-auto">
                {t.servicesSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

              {/* Facebook & Meta Advertising — primary hook (full width on large) */}
              <div className="bg-navy rounded-2xl p-8 flex flex-col gap-4 lg:col-span-2">
                <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cream mb-1">{t.advertisingTitle}</h3>
                  <span className="inline-block text-xs font-bold text-gold uppercase tracking-widest mt-1">
                    {t.heroBadge}
                  </span>
                </div>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {t.advertisingDesc}
                </p>
                <p className="text-cream/40 text-xs leading-relaxed">
                  {t.advertisingWorksFor}
                </p>
                <Link href="#industries" className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all mt-2">
                  {t.advertisingCta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Google Presence */}
              <div className="bg-white border border-cream-dark rounded-2xl p-7 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-navy">{t.googleTitle}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{t.googleDesc}</p>
                <span className="text-xs font-bold text-gold uppercase tracking-widest mt-auto">{t.included}</span>
              </div>

              {/* Payment Processing / Surcharge */}
              <div className="bg-white border border-cream-dark rounded-2xl p-7 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-navy">{t.paymentTitle}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{t.paymentDesc}</p>
                <span className="text-xs font-bold text-gold uppercase tracking-widest mt-auto">{t.available}</span>
              </div>

              {/* Business Capital */}
              <div className="bg-white border border-cream-dark rounded-2xl p-7 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-navy">{t.capitalTitle}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{t.capitalDesc}</p>
                <span className="text-xs font-bold text-gold uppercase tracking-widest mt-auto">{t.available}</span>
              </div>

            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ──────────────────────────────────────── */}
        <section id="industries" className="section-navy py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">
                {t.industriesTitle}
              </h2>
              <p className="text-cream/60 text-lg max-w-xl mx-auto">
                {t.industriesSubtitle}
              </p>
            </div>

            {/* Industries grid — PRIORITY tier sort preserved, no visible tier labels */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sorted.map((ind) => (
                <Link
                  key={ind.id}
                  href={`/canada/${ind.id}`}
                  className="bg-navy-soft border border-white/5 rounded-xl p-5 text-center hover:border-gold/40 hover:bg-navy/80 transition-all group"
                >
                  <p className="text-cream font-semibold text-sm group-hover:text-gold transition-colors">{ind.name}</p>
                  <p className="text-cream/40 text-xs mt-1 leading-snug">{ind.tagline}</p>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-cream/40 text-sm mb-5 max-w-lg mx-auto">
                {t.industriesNotSure}
              </p>
              <Link href="/landing" className="btn-gold">
                {t.industriesCta}
              </Link>
            </div>
          </div>
        </section>

        {/* ── CALCULATOR ───────────────────────────────────────── */}
        <section id="calculator" className="bg-cream-light py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                {t.calculatorTitle}
              </h2>
              <p className="text-navy/60 text-lg max-w-xl mx-auto">
                {t.calculatorSubtitle}
              </p>
            </div>
            <SavingsCalculator />
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────── */}
        <section id="how-it-works" className="section-cream py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                {t.howItWorksTitle}
              </h2>
              <p className="text-navy/60 text-lg max-w-xl mx-auto">
                {t.howItWorksSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

              {[
                { step: "1", title: t.step1Title, desc: t.step1Desc },
                { step: "2", title: t.step2Title, desc: t.step2Desc },
                { step: "3", title: t.step3Title, desc: t.step3Desc },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gold text-navy font-extrabold text-2xl flex items-center justify-center mx-auto mb-5">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ── CONTACT ─────────────────────────────────────────── */}
        <section id="contact" className="section-navy py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">
                {t.contactTitle}
              </h2>
              <p className="text-cream/60 text-lg mb-8">
                {t.contactSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/landing" className="btn-gold">
                  {t.contactCta}
                </Link>
              </div>
              <p className="text-xs text-cream/30">
                {t.contactDisclaimer}
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
