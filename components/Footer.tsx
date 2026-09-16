"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import FeeSlayerLogo from "./FeeSlayerLogo";
import { translations, type Language } from "@/lib/translations";

export default function Footer() {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    setLang((localStorage.getItem("fs_lang") as Language) || "en");
  }, []);

  const t = translations[lang].footer;

  return (
    <footer className="bg-navy-deep text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <FeeSlayerLogo variant="light" className="mb-4" />
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
              {t.tagline}
            </p>
          </div>

          {/* Canada */}
          <div>
            <h4 className="font-semibold text-cream mb-4">FeeSlayer | {lang === "fr" ? "Canada" : lang === "es" ? "Canadá" : "Canada"}</h4>
            <ul className="space-y-2.5 text-sm text-cream/70">
              <li><Link href="/canada" className="hover:text-gold transition-colors">{lang === "fr" ? "Frais de transaction" : lang === "es" ? "Cargos por pago" : "Payment Surcharging"}</Link></li>
              <li><Link href="/canada#calculator" className="hover:text-gold transition-colors">{lang === "fr" ? "Calculateur d'épargne" : lang === "es" ? "Calculadora de ahorro" : "Savings Calculator"}</Link></li>
              <li><Link href="/canada#industries" className="hover:text-gold transition-colors">{lang === "fr" ? "Industries" : lang === "es" ? "Industrias" : "Industries"}</Link></li>
              <li><Link href="/canada#financing" className="hover:text-gold transition-colors">{lang === "fr" ? "Financement d'entreprise" : lang === "es" ? "Financiamiento empresarial" : "Business Financing"}</Link></li>
            </ul>
          </div>

          {/* US */}
          <div>
            <h4 className="font-semibold text-cream mb-4">FeeSlayers | {lang === "fr" ? "États-Unis" : lang === "es" ? "Estados Unidos" : "United States"}</h4>
            <ul className="space-y-2.5 text-sm text-cream/70">
              <li><Link href="/us" className="hover:text-gold transition-colors">{lang === "fr" ? "Le bundle de croissance" : lang === "es" ? "El paquete de crecimiento" : "The Growth Bundle"}</Link></li>
              <li><Link href="/us#services" className="hover:text-gold transition-colors">{lang === "fr" ? "Tous les services" : lang === "es" ? "Todos los servicios" : "All Services"}</Link></li>
              <li><Link href="/us#financing" className="hover:text-gold transition-colors">{lang === "fr" ? "Options de financement" : lang === "es" ? "Opciones de financiamiento" : "Financing Options"}</Link></li>
              <li><Link href="/us#capital" className="hover:text-gold transition-colors">{lang === "fr" ? "Capital d'entreprise" : lang === "es" ? "Capital empresarial" : "Business Capital"}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-cream mb-4">{t.contact}</h4>
            <ul className="space-y-2.5 text-sm text-cream/70">
              <li>
                <a href="tel:+13025205447" className="hover:text-gold transition-colors">
                  (302) 520-5447
                </a>
              </li>
              <li>
                <a href="mailto:info@feeslayers.com" className="hover:text-gold transition-colors">
                  info@feeslayers.com
                </a>
              </li>
              <li className="pt-2">
                <span className="text-xs text-cream/50">{lang === "fr" ? "Adresse postale US:" : lang === "es" ? "Dirección postal en EE.UU.:" : "US Mailing:"}</span><br />
                74 E Glenwood Avenue, Unit 5817<br />
                Smyrna, DE 19977
              </li>
            </ul>
          </div>
        </div>

        {/* US Disclaimer */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <p className="text-xs text-cream/50 leading-relaxed">
            <strong className="text-cream/70">{t.notLender}</strong> {lang === "fr" ? "Financement fourni par des prêteurs tiers. Sous réserve d'approbation de crédit. Les conditions varient selon le prêteur." : lang === "es" ? "Financiamiento proporcionado por prestamistas terceros. Sujeto a aprobación de crédito. Los términos varían según el prestamista." : "Financing provided by third-party lenders. Subject to credit approval. Terms vary by lender."}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} FeeSlayer / FeeSlayers. {t.rights}
          </p>
          <div className="flex gap-6 text-xs text-cream/50">
            <Link href="/privacy-policy" className="hover:text-cream/80 transition-colors">{t.privacy}</Link>
            <Link href="/terms" className="hover:text-cream/80 transition-colors">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
