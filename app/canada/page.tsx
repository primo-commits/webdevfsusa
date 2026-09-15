"use client";

import { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";

const t = {
  en: {
    badge: "FOR CANADIAN AUTO REPAIR SHOPS",
    h1: "Your Shop Deserves More Leads.",
    h2: "Not Just Listings. Real Calls from Customers Who Need What You Offer.",
    p1: "FeeSlayers builds your complete digital presence — Google Business Profile optimization, targeted ads, and a smart chatbot that books appointments while you sleep.",
    btn: "Get Your Free Strategy Call",
    or: "or call us at",
    trust: "Trusted by auto repair shops across Canada",
    guarantee: "30-Day Guarantee",
    guaranteeDesc: "If you don't see measurable results in your first 30 days, we'll work for free until you do.",
    howTitle: "How It Works",
    step1Title: "We Build Your Digital Presence",
    step1Desc: "We optimize your Google Business Profile, create professional ads, and set up your smart booking chatbot — all in one place.",
    step2Title: "Customers Find & Book You",
    step2Desc: "When someone searches 'auto repair near me,' they find you. They can book a service appointment without ever picking up the phone.",
    step3Title: "You Grow & Scale",
    step3Desc: "More bookings. Better reviews. Higher revenue. We handle the marketing while you focus on what you do best — fixing cars.",
    whyTitle: "Why FeeSlayers?",
    whyP1: "Most marketing agencies take your money and disappear. We take a stake in your success.",
    whyP2: "Our model is simple: we win when you win. That means real strategy, real execution, and real results.",
    pricingTitle: "Simple, Transparent Pricing",
    pricingBadge: "MOST POPULAR",
    pricingPlan: "The Growth Bundle",
    pricingPrice: "$99",
    pricingPeriod: "/month",
    pricingDesc: "Everything you need to attract more customers and grow your auto repair shop.",
    pricingFeature1: "Google Business Profile Optimization",
    pricingFeature2: "Targeted Facebook & Google Ads",
    pricingFeature3: "AI-Powered Appointment Chatbot",
    pricingFeature4: "Client Financing Options",
    pricingFeature5: "Clover POS Hardware",
    pricingFeature6: "Dedicated Account Manager",
    pricingNote: "Setup fee applies. Cancel anytime.",
    ctaTitle: "Ready to Fill Your Calendar?",
    ctaP: "Book a free 30-minute strategy call. No pressure. No obligations. Just a real conversation about how to grow your shop.",
    ctaBtn: "Book Your Free Call",
    ctaOr: "or call",
    footerRights: "\u00a9 2026 FeeSlayer. All rights reserved.",
    footerPhone: "(888) 411-0000",
  },
  fr: {
    badge: "POUR LES ATELIERS DE R\u00c9PARATION AUTOMOBILE AU CANADA",
    h1: "Votre Atelier M\u00e9rite Plus de Clients.",
    h2: "Pas Juste des R\u00e9f\u00e9rences. De V\u00e9ritables Appels de Clients qui Ont Besoin de Vos Services.",
    p1: "FeeSlayer b\u00e2tit votre pr\u00e9sence num\u00e9rique compl\u00e8te — optimisation de votre fiche Google Business Profile, publicit\u00e9s cibl\u00e9es et chatbot intelligent qui prend des rendez-vous pendant que vous dormez.",
    btn: "Obtenez Votre Appel Strat\u00e9gique Gratuit",
    or: "ou appelez-nous au",
    trust: "Des ateliers de r\u00e9paration automobile \u00e0 travers le Canada nous font confiance",
    guarantee: "Garantie de 30 Jours",
    guaranteeDesc: "Si vous ne voyez pas de r\u00e9sultats mesurables dans vos 30 premiers jours, nous travaillerons gratuitement jusqu'\u00e0 ce que vous le fassiez.",
    howTitle: "Comment \u00e7a Marche",
    step1Title: "Nous B\u00e2tissons Votre Pr\u00e9sence Num\u00e9rique",
    step1Desc: "Nous optimisons votre fiche Google Business, cr\u00e9ons des publicit\u00e9s professionnelles et configurons votre chatbot de r\u00e9servation intelligent — tout au m\u00eame endroit.",
    step2Title: "Les Clients Vous Trouvent et Prennent Rendez-Vous",
    step2Desc: "Quand quelqu'un cherche 'r\u00e9paration auto pr\u00e8s de chez moi', il vous trouve. Il peut r\u00e9server sans jamais d\u00e9crocher le t\u00e9l\u00e9phone.",
    step3Title: "Vous Grandissez et Vous Vous D\u00e9veloppez",
    step3Desc: "Plus de r\u00e9servations. Meilleures critiques. Revenus plus \u00e9lev\u00e9s. Nous g\u00e9rons le marketing pendant que vous vous concentrez sur ce que vous faites de mieux — r\u00e9parer des voitures.",
    whyTitle: "Pourquoi FeeSlayer?",
    whyP1: "La plupart des agences de marketing prennent votre argent et disparaissent. Nous misons sur votre succ\u00e8s.",
    whyP2: "Notre mod\u00e8le est simple: nous gagnons quand vous gagnez. Cela signifie une strat\u00e9gie r\u00e9elle, une ex\u00e9cution r\u00e9elle et des r\u00e9sultats r\u00e9els.",
    pricingTitle: "Tarification Simple et Transparente",
    pricingBadge: "LE PLUS POPULAIRE",
    pricingPlan: "L'Ensemble de Croissance",
    pricingPrice: "99 $",
    pricingPeriod: "/mois",
    pricingDesc: "Tout ce dont vous avez besoin pour attirer plus de clients et d\u00e9velopper votre atelier de r\u00e9paration automobile.",
    pricingFeature1: "Optimisation Google Business Profile",
    pricingFeature2: "Publicit\u00e9s Cibl\u00e9es Facebook et Google",
    pricingFeature3: "Chatbot de Rendez-Vous avec Intelligence Artificielle",
    pricingFeature4: "Options de Financement pour Clients",
    pricingFeature5: "Mat\u00e9riel Clover POS",
    pricingFeature6: "Gestionnaire de Compte D\u00e9di\u00e9",
    pricingNote: "Des frais de configuration s'appliquent. Annulez \u00e0 tout moment.",
    ctaTitle: "Pr\u00eat \u00e0 Remplir Votre Calendrier?",
    ctaP: "R\u00e9servez un appel strat\u00e9gique gratuit de 30 minutes. Pas de pression. Pas d'obligations. Juste une vraie conversation sur la fa\u00e7on de d\u00e9velopper votre atelier.",
    ctaBtn: "R\u00e9servez Votre Appel Gratuit",
    ctaOr: "ou appelez le",
    footerRights: "\u00a9 2026 FeeSlayer. Tous droits r\u00e9serv\u00e9s.",
    footerPhone: "(888) 411-0000",
  },
};

export default function CanadaPage() {
  const [lang, setLang] = useState<"en" | "fr">("en");

  useEffect(() => {
    const stored = localStorage.getItem("fs_lang") as "en" | "fr" | null;
    if (stored === "en" || stored === "fr") setLang(stored);
  }, []);

  const content = t[lang];

  return (
    <main className="min-h-screen bg-bkg">
      <Navbar languages={["en", "fr"]} />

      {/* Hero */}
      <section className="bg-nav px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-ylo uppercase mb-6 block">
            {content.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-ylo mb-4 leading-tight">
            {content.h1}
          </h1>
          <h2 className="text-xl md:text-2xl text-wht font-medium mb-8 leading-relaxed">
            {content.h2}
          </h2>
          <p className="text-wht/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {content.p1}
          </p>
          <a
            href="#contact"
            className="inline-block bg-ylo text-nav font-bold text-lg px-10 py-4 rounded hover:bg-ylo/90 transition"
          >
            {content.btn}
          </a>
          <p className="text-wht/60 text-sm mt-4">
            {content.or}{" "}
            <a href="tel:+18884110000" className="underline hover:text-ylo">
              {content.footerPhone}
            </a>
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-ylo/10 border-y border-ylo/20 py-6 text-center">
        <p className="text-wht/60 text-sm tracking-widest uppercase font-medium">
          {content.trust}
        </p>
      </section>

      {/* Guarantee */}
      <section className="bg-bkg py-12 px-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 bg-card border border-ylo/20 rounded-xl p-8">
          <div className="text-4xl">&#x1F6E1;</div>
          <div>
            <h3 className="text-ylo font-bold text-xl mb-2">{content.guarantee}</h3>
            <p className="text-wht/70 leading-relaxed">{content.guaranteeDesc}</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-bkg py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-ylo text-center mb-16">
            {content.howTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                n: "01",
                t: content.step1Title,
                d: content.step1Desc,
              },
              {
                n: "02",
                t: content.step2Title,
                d: content.step2Desc,
              },
              {
                n: "03",
                t: content.step3Title,
                d: content.step3Desc,
              },
            ].map((step) => (
              <div key={step.n} className="bg-card border border-ylo/20 rounded-xl p-8">
                <span className="text-ylo text-5xl font-black opacity-40">{step.n}</span>
                <h3 className="text-ylo font-bold text-xl mt-4 mb-3">{step.t}</h3>
                <p className="text-wht/70 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FeeSlayer */}
      <section className="bg-card py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ylo mb-8">
            {content.whyTitle}
          </h2>
          <p className="text-wht/80 text-lg leading-relaxed mb-6">
            {content.whyP1}
          </p>
          <p className="text-wht/80 text-lg leading-relaxed">
            {content.whyP2}
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-bkg py-20 px-6" id="pricing">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-ylo text-center mb-4">
            {content.pricingTitle}
          </h2>
          <div className="max-w-md mx-auto mt-12">
            <div className="bg-card border-2 border-ylo rounded-2xl overflow-hidden">
              <div className="bg-ylo/10 border-b border-ylo/20 px-6 py-3">
                <span className="text-ylo text-xs font-bold tracking-widest uppercase">
                  {content.pricingBadge}
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-ylo font-bold text-2xl mb-2">
                  {content.pricingPlan}
                </h3>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-5xl font-black text-wht">
                    {content.pricingPrice}
                  </span>
                  <span className="text-wht/60 text-xl mb-1">
                    {content.pricingPeriod}
                  </span>
                </div>
                <p className="text-wht/60 text-sm mb-8">
                  {content.pricingDesc}
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    content.pricingFeature1,
                    content.pricingFeature2,
                    content.pricingFeature3,
                    content.pricingFeature4,
                    content.pricingFeature5,
                    content.pricingFeature6,
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-wht/80">
                      <span className="text-ylo font-bold">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block text-center bg-ylo text-nav font-bold py-4 rounded hover:bg-ylo/90 transition"
                >
                  {content.btn}
                </a>
                <p className="text-center text-wht/40 text-xs mt-3">
                  {content.pricingNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ylo py-20 px-6 text-center" id="contact">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-nav text-3xl md:text-4xl font-black mb-6">
            {content.ctaTitle}
          </h2>
          <p className="text-nav/80 text-lg mb-10 leading-relaxed">
            {content.ctaP}
          </p>
          <a
            href="https://app.clicksure.com/book/PrimoBlatnik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-nav text-ylo font-bold text-lg px-10 py-4 rounded hover:bg-nav/90 transition"
          >
            {content.ctaBtn}
          </a>
          <p className="text-nav/60 text-sm mt-4">
            {content.ctaOr}{" "}
            <a href="tel:+18884110000" className="underline">
              {content.footerPhone}
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nav py-8 px-6 text-center">
        <p className="text-wht/40 text-sm">
          {content.footerRights}
        </p>
        <p className="text-wht/30 text-xs mt-2">
          FeeSlayer is not a lender and does not make credit decisions.
        </p>
      </footer>
    </main>
  );
}
