"use client";

import { useState } from "react";
import Link from "next/link";
import FeeSlayerLogo from "./FeeSlayerLogo";
import { translations, type Language } from "@/lib/translations";

interface NavbarProps {
  theme?: "light" | "dark";
  languages?: ("en" | "fr" | "es")[];
  lang?: string;
  onLangChange?: (l: string) => void;
}

export default function Navbar({
  theme = "light",
  languages = ["en"],
  lang = "en",
  onLangChange,
}: NavbarProps) {
  const isDark = theme === "dark";
  const [mobileOpen, setMobileOpen] = useState(false);

  const switchLang = (l: string) => {
    localStorage.setItem("fs_lang", l);
    if (onLangChange) {
      onLangChange(l);
    } else {
      window.location.reload();
    }
  };

  const textColor = isDark ? "text-cream" : "text-navy";
  const borderColor = isDark ? "border-navy-soft/30" : "border-cream-dark";
  const bgColor = isDark ? "bg-navy" : "bg-cream-light";

  const langBtn = (l: "en" | "fr" | "es", label: string) => {
    const active = lang === l;
    return (
      <button
        onClick={() => switchLang(l)}
        style={{
          background: active ? (isDark ? "#C9A84C" : "#1B3A5C") : "transparent",
          color: active
            ? isDark ? "#1B3A5C" : "#fff"
            : isDark ? "#F9F6F1" : "#1B3A5C",
          border: `1.5px solid ${active ? "transparent" : (isDark ? "rgba(249,246,241,0.35)" : "#1B3A5C")}`,
          borderRadius: 6,
          padding: "4px 10px",
          fontSize: 12,
          fontWeight: 700,
          cursor: "pointer",
          letterSpacing: "0.5px",
          transition: "all 0.15s",
        }}
      >
        {label}
      </button>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${bgColor} ${isDark ? "border-b border-white/10" : "border-b border-cream-dark/50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <FeeSlayerLogo variant={isDark ? "light" : "dark"} />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/canada" className={`text-sm font-medium ${textColor} hover:text-gold transition-colors`}>
              {lang === "fr" ? translations.fr.nav.canada : lang === "es" ? translations.es.nav.canada : translations.en.nav.canada}
            </Link>
            <Link href="/us" className={`text-sm font-medium ${textColor} hover:text-gold transition-colors`}>
              {lang === "fr" ? "États-Unis" : lang === "es" ? "Estados Unidos" : "United States"}
            </Link>
            <Link href="/us#services" className={`text-sm font-medium ${textColor} hover:text-gold transition-colors`}>
              {lang === "fr" ? translations.fr.nav.services : lang === "es" ? translations.es.nav.services : translations.en.nav.services}
            </Link>
            <Link href="/us#how-it-works" className={`text-sm font-medium ${textColor} hover:text-gold transition-colors`}>
              {lang === "fr" ? "Comment ça marche" : lang === "es" ? "Cómo funciona" : "How It Works"}
            </Link>

            {/* Language toggle */}
            {languages.length > 1 && (
              <div style={{ display: "flex", gap: 4 }}>
                {languages.includes("en") && langBtn("en", "EN")}
                {languages.includes("fr") && langBtn("fr", "FR")}
                {languages.includes("es") && langBtn("es", "ES")}
              </div>
            )}

            <Link href="/landing" className="btn-gold text-sm">
              {lang === "fr" ? translations.fr.nav.bookCall : lang === "es" ? translations.es.nav.bookCall : translations.en.nav.bookCall}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-md ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`md:hidden ${bgColor} border-t ${borderColor} px-4 py-4 space-y-3`}>
          <Link href="/canada" className={`block text-base font-medium ${textColor}`} onClick={() => setMobileOpen(false)}>
            {lang === "fr" ? translations.fr.nav.canada : lang === "es" ? translations.es.nav.canada : translations.en.nav.canada}
          </Link>
          <Link href="/us" className={`block text-base font-medium ${textColor}`} onClick={() => setMobileOpen(false)}>
            {lang === "fr" ? "États-Unis" : lang === "es" ? "Estados Unidos" : "United States"}
          </Link>
          <Link href="/us#services" className={`block text-base font-medium ${textColor}`} onClick={() => setMobileOpen(false)}>
            {lang === "fr" ? translations.fr.nav.services : lang === "es" ? translations.es.nav.services : translations.en.nav.services}
          </Link>
          <Link href="/us#how-it-works" className={`block text-base font-medium ${textColor}`} onClick={() => setMobileOpen(false)}>
            {lang === "fr" ? "Comment ça marche" : lang === "es" ? "Cómo funciona" : "How It Works"}
          </Link>

          {/* Language toggle — mobile */}
          {languages.length > 1 && (
            <div style={{ display: "flex", gap: 8, paddingTop: 4 }}>
              {languages.includes("en") && (
                <button
                  onClick={() => { switchLang("en"); setMobileOpen(false); }}
                  style={{
                    background: lang === "en" ? (isDark ? "#C9A84C" : "#1B3A5C") : "transparent",
                    color: lang === "en" ? (isDark ? "#1B3A5C" : "#fff") : (isDark ? "#F9F6F1" : "#1B3A5C"),
                    border: `1.5px solid ${lang === "en" ? "transparent" : (isDark ? "rgba(249,246,241,0.35)" : "#1B3A5C")}`,
                    borderRadius: 6, padding: "6px 14px", fontSize: 13, fontWeight: 700, cursor: "pointer",
                  }}
                >
                  English
                </button>
              )}
              {languages.includes("fr") && (
                <button
                  onClick={() => { switchLang("fr"); setMobileOpen(false); }}
                  style={{
                    background: lang === "fr" ? (isDark ? "#C9A84C" : "#1B3A5C") : "transparent",
                    color: lang === "fr" ? (isDark ? "#1B3A5C" : "#fff") : (isDark ? "#F9F6F1" : "#1B3A5C"),
                    border: `1.5px solid ${lang === "fr" ? "transparent" : (isDark ? "rgba(249,246,241,0.35)" : "#1B3A5C")}`,
                    borderRadius: 6, padding: "6px 14px", fontSize: 13, fontWeight: 700, cursor: "pointer",
                  }}
                >
                  Français
                </button>
              )}
              {languages.includes("es") && (
                <button
                  onClick={() => { switchLang("es"); setMobileOpen(false); }}
                  style={{
                    background: lang === "es" ? (isDark ? "#C9A84C" : "#1B3A5C") : "transparent",
                    color: lang === "es" ? (isDark ? "#1B3A5C" : "#fff") : (isDark ? "#F9F6F1" : "#1B3A5C"),
                    border: `1.5px solid ${lang === "es" ? "transparent" : (isDark ? "rgba(249,246,241,0.35)" : "#1B3A5C")}`,
                    borderRadius: 6, padding: "6px 14px", fontSize: 13, fontWeight: 700, cursor: "pointer",
                  }}
                >
                  Español
                </button>
              )}
            </div>
          )}

          <Link href="/landing" className="btn-gold w-full justify-center mt-2" onClick={() => setMobileOpen(false)}>
            {lang === "fr" ? translations.fr.nav.bookCall : lang === "es" ? translations.es.nav.bookCall : translations.en.nav.bookCall}
          </Link>
        </div>
      )}
    </nav>
  );
}
