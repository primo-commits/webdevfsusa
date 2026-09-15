"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

const t = {
  en: {
    badge: "FOR U.S. AUTO REPAIR SHOPS",
    h1: "Your Shop Deserves More Leads.",
    h2: "Not Just Listings. Real Calls from Customers Who Need What You Offer.",
    p1: "FeeSlayers builds your complete digital presence — Google Business Profile optimization, targeted ads, and a smart chatbot that books appointments while you sleep.",
    btn: "Get Your Free Strategy Call",
    or: "or call us at",
    trust: "Trusted by auto repair shops across the United States",
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
    footerRights: "\u00a9 2026 FeeSlayers. All rights reserved.",
    footerPhone: "(888) 411-0000",
  },
  es: {
    badge: "PARA TALLERES DE REPARACI\u00d3N AUTOMOTRIZ EN EE.UU.",
    h1: "Tu Taller Merece M\u00e1s Clientes.",
    h2: "No Solo Listas. Llamadas Reales de Clientes que Necesitan lo que Ofreces.",
    p1: "FeeSlayers construye tu presencia digital completa — optimizaci\u00f3n de Google Business Profile, anuncios dirigidos y un chatbot inteligente que agenda citas mientras t\u00fa duermes.",
    btn: "Obt\u00e9n Tu Llamada de Estrategia Gratis",
    or: "o ll\u00e1manos al",
    trust: "Talleres de reparaci\u00f3n automotriz en Estados Unidos conf\u00edan en nosotros",
    guarantee: "Garant\u00eda de 30 D\u00edas",
    guaranteeDesc: "Si no ves resultados medibles en tus primeros 30 d\u00edas, trabajaremos gratis hasta que los veas.",
    howTitle: "C\u00f3mo Funciona",
    step1Title: "Construimos Tu Presencia Digital",
    step1Desc: "Optimizamos tu perfil de Google Business, creamos anuncios profesionales y configuramos tu chatbot de reservas inteligentes — todo en un solo lugar.",
    step2Title: "Los Clientes Te Encuentran y Agendan",
    step2Desc: "Cuando alguien busca 'reparaci\u00f3n de autos cerca de m\u00ed,' te encuentran. Pueden reservar una cita sin tener que levantar el tel\u00e9fono.",
    step3Title: "T\u00fa Creces y Escala",
    step3Desc: "M\u00e1s reservas. Mejores rese\u00f1as. Mayors ingresos. Nosotros manejamos el marketing mientras t\u00fa te enfocas en lo que mejor haces — reparar autos.",
    whyTitle: "\u00bfPor Qu\u00e9 FeeSlayers?",
    whyP1: "La mayor\u00eda de las agencias de marketing toman tu dinero y desaparecen. Nosotros apostamos por tu \u00e9xito.",
    whyP2: "Nuestro modelo es simple: ganamos cuando t\u00fa ganas. Eso significa estrategia real, ejecuci\u00f3n real y resultados reales.",
    pricingTitle: "Precios Simples y Transparentes",
    pricingBadge: "M\u00c1S POPULAR",
    pricingPlan: "El Paquete de Crecimiento",
    pricingPrice: "$99",
    pricingPeriod: "/mes",
    pricingDesc: "Todo lo que necesitas para atraer m\u00e1s clientes y hacer crecer tu taller de reparaci\u00f3n.",
    pricingFeature1: "Optimizaci\u00f3n de Google Business Profile",
    pricingFeature2: "Anuncios Dirigidos en Facebook y Google",
    pricingFeature3: "Chatbot de Citas con Inteligencia Artificial",
    pricingFeature4: "Opciones de Financiamiento para Clientes",
    pricingFeature5: "Hardware Clover POS",
    pricingFeature6: "Gerente de Cuenta Dedicado",
    pricingNote: "Aplica tarifa de configuraci\u00f3n. Cancela en cualquier momento.",
    ctaTitle: "\u00bfListo para Llenar Tu Calendario?",
    ctaP: "Agenda una llamada de estrategia gratuita de 30 minutos. Sin presi\u00f3n. Sin obligaciones. Solo una conversaci\u00f3n real sobre c\u00f3mo hacer crecer tu taller.",
    ctaBtn: "Reserva Tu Llamada Gratis",
    ctaOr: "o llama al",
    footerRights: "\u00a9 2026 FeeSlayers. Todos los derechos reservados.",
    footerPhone: "(888) 411-0000",
  },
};

export default function USPage() {
  const [lang, setLang] = useState<"en" | "es">("en");

  useEffect(() => {
    const stored = localStorage.getItem("fs_lang") as "en" | "es" | null;
    if (stored === "en" || stored === "es") setLang(stored);
  }, []);

  const content = t[lang];

  const handleLangChange = (l: string) => {
    localStorage.setItem("fs_lang", l);
    setLang(l as "en" | "es");
  };

  return (
    <main className="min-h-screen bg-bkg">
      <Navbar languages={["en", "es"]} lang={lang} onLangChange={handleLangChange} />

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

      {/* Why FeeSlayers */}
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
          FeeSlayers is not a lender and does not make credit decisions.
        </p>
      </footer>
    </main>
  );
}
