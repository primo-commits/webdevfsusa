"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { translations } from "@/lib/translations";

export default function DisclaimerPage() {
  const [lang, setLang] = useState<"en" | "fr" | "es">("en");

  useEffect(() => {
    const stored = localStorage.getItem("fs_lang") as "en" | "fr" | "es" | null;
    if (stored === "fr" || stored === "es") {
      setLang(stored);
    }
  }, []);

  const t = translations[lang].disclaimer;

  return (
    <div className="min-h-screen bg-navy text-cream">
      <Navbar theme="dark" />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
              {lang === "en" ? "Legal" : lang === "fr" ? "Légal" : "Legal"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6">
              {t.pageTitle}
            </h1>
            <p className="text-cream/60 text-lg max-w-2xl mx-auto">
              {lang === "en"
                ? "Last updated: September 2026"
                : lang === "fr"
                ? "Dernière mise à jour : septembre 2026"
                : "Última actualización: septiembre 2026"}
            </p>
          </div>

          {/* Intro */}
          <p className="text-cream/70 leading-relaxed mb-12 max-w-3xl mx-auto">
            {t.pageIntro}
          </p>

          {/* Sections */}
          <div className="space-y-12">
            {t.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-2xl font-bold text-gold mb-4">
                  {section.title}
                </h2>
                <p className="text-cream/80 leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
