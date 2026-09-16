"use client";

import { useState, useEffect } from "react";
import { translations } from "@/lib/translations";

function formatCurrency(n: number, lang: string) {
  const locale = lang === "fr" ? "fr-CA" : lang === "es" ? "es-MX" : "en-CA";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

export default function SavingsCalculator() {
  const [lang, setLang] = useState<"en" | "fr" | "es">("en");
  const [monthlySales, setMonthlySales] = useState(50000);
  const [rate, setRate] = useState(2.5);
  const [result, setResult] = useState({
    current: 0,
    withFeeSlayer: 0,
    savings: 0,
    annual: 0,
    fiveYear: 0,
  });

  useEffect(() => {
    const stored = localStorage.getItem("fs_lang") as "en" | "fr" | "es" | null;
    setLang(stored === "fr" || stored === "es" ? stored : "en");

    const handleStorage = () => {
      const s = localStorage.getItem("fs_lang") as "en" | "fr" | "es" | null;
      setLang(s === "fr" || s === "es" ? s : "en");
    };
    window.addEventListener("storage", handleStorage);
    const interval = setInterval(handleStorage, 500);
    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const current = monthlySales * (rate / 100);
    const networkFee = monthlySales * 0.01;
    const savings = current - networkFee;
    setResult({
      current,
      withFeeSlayer: networkFee,
      savings: Math.max(0, savings),
      annual: Math.max(0, savings) * 12,
      fiveYear: Math.max(0, savings) * 60,
    });
  }, [monthlySales, rate]);

  const t = translations[lang as 'en' | 'fr' | 'es'].canadaPage;
  const maxSales = 500000;
  const minSales = 5000;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-navy-soft border border-white/10 rounded-2xl overflow-hidden">

        {/* Input panel */}
        <div className="p-8 space-y-8">

          {/* Monthly sales slider */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-semibold text-cream/80 uppercase tracking-wide">
                {t.calcLabelSales}
              </label>
              <span className="text-2xl font-bold text-gold">{formatCurrency(monthlySales, lang)}</span>
            </div>
            <input
              type="range"
              min={minSales}
              max={maxSales}
              step={5000}
              value={monthlySales}
              onChange={(e) => setMonthlySales(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #C8922A 0%, #C8922A ${((monthlySales - minSales) / (maxSales - minSales)) * 100}%, #1A2E42 ${((monthlySales - minSales) / (maxSales - minSales)) * 100}%, #1A2E42 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-cream/40 mt-1.5">
              <span>{formatCurrency(minSales, lang)}</span>
              <span>{formatCurrency(maxSales, lang)}</span>
            </div>
          </div>

          {/* Processing rate slider */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-semibold text-cream/80 uppercase tracking-wide">
                {t.calcLabelRate}
              </label>
              <span className="text-2xl font-bold text-cream">{rate.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min={1.4}
              max={3.5}
              step={0.1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #C8922A 0%, #C8922A ${((rate - 1.4) / (3.5 - 1.4)) * 100}%, #1A2E42 ${((rate - 1.4) / (3.5 - 1.4)) * 100}%, #1A2E42 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-cream/40 mt-1.5">
              <span>1.4%</span>
              <span>3.5%</span>
            </div>
          </div>

        </div>

        {/* Output panel */}
        <div className="bg-navy-deep p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

            {/* You currently pay */}
            <div className="bg-navy-soft rounded-xl p-5 text-center border border-white/5">
              <div className="text-xs font-bold uppercase tracking-widest text-cream/40 mb-2">
                {t.calcResultCurrent}
              </div>
              <div className="text-3xl font-extrabold text-red-400">
                {formatCurrency(result.current, lang)}
                <span className="text-base font-normal text-cream/50">/mo</span>
              </div>
            </div>

            {/* With FeeSlayer */}
            <div className="bg-navy-soft rounded-xl p-5 text-center border border-white/5">
              <div className="text-xs font-bold uppercase tracking-widest text-cream/40 mb-2">
                {t.calcResultWithFeeSlayer}
              </div>
              <div className="text-3xl font-extrabold text-emerald-400">
                {formatCurrency(result.withFeeSlayer, lang)}
                <span className="text-base font-normal text-cream/50">/mo</span>
              </div>
            </div>

            {/* Monthly savings */}
            <div className="bg-gold/15 rounded-xl p-5 text-center border border-gold/30">
              <div className="text-xs font-bold uppercase tracking-widest text-gold mb-2">
                {t.calcResultSavings}
              </div>
              <div className="text-3xl font-extrabold text-gold">
                {formatCurrency(result.savings, lang)}
                <span className="text-base font-normal text-cream/50">/mo</span>
              </div>
            </div>

          </div>

          {/* Multi-year savings */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-navy-soft rounded-xl p-4 text-center border border-white/5">
              <div className="text-xs font-bold uppercase tracking-widest text-cream/40 mb-1">
                {t.calcResultAnnual}
              </div>
              <div className="text-2xl font-extrabold text-gold">
                {formatCurrency(result.annual, lang)}
              </div>
            </div>
            <div className="bg-navy-soft rounded-xl p-4 text-center border border-white/5">
              <div className="text-xs font-bold uppercase tracking-widest text-cream/40 mb-1">
                {t.calcResultFiveYear}
              </div>
              <div className="text-2xl font-extrabold text-gold">
                {formatCurrency(result.fiveYear, lang)}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="#contact" className="btn-gold inline-flex">
              {t.calcCta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Compliance note */}
          <p className="text-center text-xs text-cream/30 mt-5 leading-relaxed">
            {t.calcDisclaimer}
          </p>

        </div>
      </div>

      {/* Slider styling via global CSS injection */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #C8922A;
          cursor: pointer;
          border: 3px solid #F5F0E8;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        input[type="range"]::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #C8922A;
          cursor: pointer;
          border: 3px solid #F5F0E8;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
}
