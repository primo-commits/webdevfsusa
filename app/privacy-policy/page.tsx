"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { translations } from "@/lib/translations";

export default function PrivacyPolicyPage() {
  const [lang, setLang] = useState<"en" | "fr" | "es">("en");

  useEffect(() => {
    const stored = localStorage.getItem("fs_lang") as "en" | "fr" | "es" | null;
    if (stored === "fr" || stored === "es") {
      setLang(stored);
    }
  }, []);

  const t = translations[lang].privacy;

  return (
    <>
      <Navbar theme="dark" />
      <main className="flex-1 pt-16 lg:pt-20">
        <section className="section-navy py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-cream mb-3">
              {t.pageTitle}
            </h1>
            <p className="text-cream/40 text-sm mb-12">
              {lang === "en"
                ? "Last updated: April 2026"
                : lang === "fr"
                ? "Dernière mise à jour : avril 2026"
                : "Última actualización: abril 2026"}
            </p>

            <div className="space-y-8 text-cream/70 text-base leading-relaxed">
              {t.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-xl font-bold text-gold mb-3">
                    {section.title}
                  </h2>
                  <p>{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
