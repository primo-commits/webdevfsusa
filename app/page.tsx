import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar theme="light" />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <main className="flex-1">
        <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12 bg-cream-light relative overflow-hidden">
          {/* Decorative gradient blobs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-navy/5 blur-3xl pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-navy text-cream text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <span className="text-gold">⚡</span>
              Two countries. One business.
            </div>

            {/* Wordmark */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-none">
              <span className="wordmark-fee">Fee</span>
              <span className="wordmark-slayers">Slayers</span>
            </h1>

            <p className="text-xl sm:text-2xl text-navy/70 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Built by humans. Sharpened by AI.<br />
              Service businesses keep more of what they earn.
            </p>

            {/* Country selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">

              {/* Canada card */}
              <Link
                href="/canada"
                className="group relative bg-white rounded-2xl p-8 text-left border border-cream-dark hover:border-gold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-8xl opacity-5 font-extrabold select-none pointer-events-none">
                  🇨🇦
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-gold mb-3">
                  Canada · feeslayers.com/canada
                </div>
                <h2 className="text-2xl font-bold text-navy mb-2">
                  We develop.<br />We build.<br />You sell.
                </h2>
                <p className="text-sm text-navy/60 mb-6">
                  Facebook advertising, Google presence, consumer financing, and payment solutions for Canadian service businesses.
                </p>
                <div className="inline-flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
                  Explore Canada
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>

              {/* US card */}
              <Link
                href="/us"
                className="group relative bg-navy rounded-2xl p-8 text-left border border-navy-soft hover:border-gold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-8xl opacity-5 font-extrabold select-none pointer-events-none">
                  🇺🇸
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-gold mb-3">
                  United States · feeslayers.com
                </div>
                <h2 className="text-2xl font-bold text-cream mb-2">
                  More customers.<br />More capital.<br />More growth.
                </h2>
                <p className="text-sm text-cream/60 mb-6">
                  The full growth bundle at <span className="text-gold font-bold">$99/mo</span>: GBP, ads, financing, processing, capital &amp; Clover hardware.
                </p>
                <div className="inline-flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
                  Explore United States
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* ── TRUST BAR ────────────────────────────────────────── */}
        <section className="bg-white border-y border-cream-dark/50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
              {[
                "No long-term contracts",
                "Free setup",
                "Live in about 1 week",
                "Humans approve every decision",
                "Built for service businesses",
              ].map((item) => (
                <div key={item} className="trust-badge">
                  <svg className="w-3.5 h-3.5 text-sage flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES PREVIEW ─────────────────────────────────── */}
        <section className="section-cream py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                What we do for you
              </h2>
              <p className="text-navy/60 text-lg max-w-xl mx-auto">
                Two entities, one mission: help service businesses keep more of what they earn.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {[
                {
                  region: "🇨🇦 Canada",
                  title: "Growth for Service Businesses",
                  desc: "Facebook advertising, Google presence, consumer financing, and payment solutions. Everything a Canadian service business needs to grow.",
                  href: "/canada",
                  color: "bg-white",
                  textColor: "text-navy",
                  accent: "text-gold",
                },
                {
                  region: "🌎 United States",
                  title: "The Growth Bundle",
                  desc: "$99/mo gets you Google presence, consumer financing, payment processing, capital, and Clover hardware. Advertising is quoted separately based on your goals.",
                  href: "/us",
                  color: "bg-navy",
                  textColor: "text-cream",
                  accent: "text-gold",
                  dark: true,
                },
                {
                  region: "Both",
                  title: "Business Financing",
                  desc: "Consumer and business capital loans. Real lenders. Real decisions. We make the introductions.",
                  href: "/canada#financing",
                  color: "bg-white",
                  textColor: "text-navy",
                  accent: "text-gold",
                },
              ].map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className={`${service.color} ${service.dark ? "dark:border border-navy-soft/50" : "border border-cream-dark"} rounded-2xl p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4`}
                >
                  <div className={`text-xs font-bold uppercase tracking-widest ${service.dark ? "text-gold" : service.accent}`}>
                    {service.region}
                  </div>
                  <h3 className={`text-xl font-bold ${service.textColor}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm ${service.dark ? "text-cream/60" : "text-navy/60"} leading-relaxed`}>
                    {service.desc}
                  </p>
                  <div className={`inline-flex items-center gap-1.5 font-semibold text-sm mt-auto ${service.accent}`}>
                    Learn more
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
