import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function UsPage() {
  return (
    <>
      <Navbar theme="dark" languages={["en", "es"]} />
      <main className="flex-1 pt-16 lg:pt-20">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="section-navy relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy-soft/50 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-4xl mx-auto text-center">

              {/* Free trial badge — the main hook */}
              <div className="inline-flex items-center gap-2 bg-gold text-navy text-xs font-extrabold uppercase tracking-widest px-5 py-2 rounded-full mb-8">
                <span>2 Weeks Free</span>
                <span className="opacity-60">|</span>
                <span className="font-normal opacity-80">Facebook marketing trial — you pay only the ad budget</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-cream leading-tight tracking-tight mb-6">
                More leads.<br />
                <span className="wordmark-slayers">More jobs.</span><br />
                More growth.
              </h1>

              <p className="text-xl text-cream/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                The full growth bundle at <span className="text-gold font-bold">$99/month</span>: Google presence, payment processing, consumer financing, business capital, and Clover hardware. Plus Facebook and Meta advertising — 2 weeks free. You pay only the ad budget. We handle everything else.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#services" className="btn-gold">
                  See the full bundle
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/landing" className="btn-outline-gold">
                  Book a call
                </Link>
              </div>

              {/* Price anchor */}
              <div className="mt-10 inline-flex flex-col items-center gap-1">
                <div className="text-5xl font-extrabold text-gold">$99</div>
                <div className="text-cream/40 text-sm">per month · cancel anytime</div>
              </div>

            </div>
          </div>
        </section>

        {/* ── THE ULTIMATE PAYMENT STACK ──────────────────────── */}
        <section id="services" className="bg-cream-light py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                The Ultimate Payment Stack
              </h2>
              <p className="text-navy/60 text-lg max-w-xl mx-auto">
                Everything in one $99/mo bundle. Pick and choose or take it all.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

              {[
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  ),
                  title: "Google Presence",
                  desc: "Google Business Profile optimization, local SEO, and search visibility. So you show up when people search for your service.",
                  highlight: "Included",
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  ),
                  title: "Facebook & Meta Advertising",
                  desc: "We run your campaigns end-to-end. You pay only the ad budget. We handle creative, targeting, optimization, and lead delivery.",
                  highlight: "2 Weeks Free",
                  featured: true,
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  ),
                  title: "Consumer Financing",
                  desc: "We connect your customers to 35+ lenders, from $1K to $100K. Decisions in seconds. Funding as fast as next business day.",
                  highlight: "Coming soon",
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Payment Processing",
                  desc: "Cash discount program through MiCamp Solutions. Zero cost to you on card transactions.",
                  highlight: "Via MiCamp",
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  ),
                  title: "Business Capital",
                  desc: "CashBuoy MCAs underwritten off your business statements, not your credit score. Grow without the credit gate.",
                  highlight: "Via CashBuoy",
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Clover Hardware",
                  desc: "Clover Flex terminal. No lease, no hidden fees. Your customers can pay however they want.",
                  highlight: "No lease",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className={
                    service.featured
                      ? "bg-navy rounded-2xl p-7 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4 border border-gold/20"
                      : "bg-white border border-cream-dark rounded-2xl p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4"
                  }
                >
                  <div className={
                    service.featured
                      ? "w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center flex-shrink-0"
                      : "w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center flex-shrink-0"
                  }>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className={"text-lg font-bold mb-1 " + (service.featured ? "text-cream" : "text-navy")}>
                      {service.title}
                    </h3>
                    <span className={"text-xs font-bold uppercase tracking-widest " + (service.featured ? "text-gold" : "text-gold")}>
                      {service.highlight}
                    </span>
                  </div>
                  <p className={"text-sm leading-relaxed " + (service.featured ? "text-cream/60" : "text-navy/60")}>
                    {service.desc}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────── */}
        <section id="how-it-works" className="section-navy py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">
                Getting started is easy
              </h2>
              <p className="text-cream/60 text-lg max-w-xl mx-auto">
                We do the heavy lifting. You just run your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

              {[
                {
                  step: "1",
                  title: "Book a call",
                  desc: "Tell us about your business and what&apos;s slowing you down. 20 minutes, no pressure.",
                },
                {
                  step: "2",
                  title: "We build it out",
                  desc: "GBP optimization, ad setup, financing integrations, Clover hardware. We handle the full stack.",
                },
                {
                  step: "3",
                  title: "You grow",
                  desc: "More calls, more closed jobs, more capital to reinvest. The bundle pays for itself.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gold text-navy font-extrabold text-2xl flex items-center justify-center mx-auto mb-5">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-cream mb-3" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p className="text-cream/60 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ── FINANCING SECTION ───────────────────────────────── */}
        <section id="financing" className="bg-cream-light py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">

              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gold mb-4">
                  Consumer &amp; Business Financing
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                  Approved repairs.<br />Closed deals.
                </h2>
                <p className="text-navy/60 text-lg mb-6 leading-relaxed">
                  When customers can finance, they say yes more often. We connect them to 35+ lenders. Decisions in seconds. Funding as fast as next business day.
                </p>
                <p className="text-navy/60 text-lg mb-8 leading-relaxed">
                  Need business capital yourself? CashBuoy MCAs are underwritten off your business statements, not your credit score.
                </p>
                <Link href="/landing" className="btn-gold">
                  Learn about financing options
                </Link>
              </div>

              <div className="bg-navy rounded-2xl p-8 space-y-4">
                {[
                  { label: "Consumer loans", value: "$1K – $100K" },
                  { label: "Decision time", value: "Seconds" },
                  { label: "Funding speed", value: "As fast as next business day" },
                  { label: "Lenders in network", value: "35+" },
                  { label: "Credit check", value: "By lender, not us" },
                  { label: "MCA underwriting", value: "Business statements" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-cream/60 text-sm">{row.label}</span>
                    <span className="text-cream font-semibold text-sm">{row.value}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── WHO THIS IS FOR ─────────────────────────────────── */}
        <section className="section-navy py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">
                Is this for me?
              </h2>
              <p className="text-cream/60 text-lg">
                FeeSlayers is built for service-based businesses that want to grow, and have been looking for a single team to make it happen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "You're spending money on card processing every month",
                "You want more calls and bookings, not just a pretty website",
                "You've tried agencies before and they overpromise",
                "You want one team handling your growth stack",
                "You need capital to take on bigger jobs",
                "You're tired of managing a dozen different vendors",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-navy-soft rounded-xl p-5 border border-white/5">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-cream/80 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ─────────────────────────────────────────── */}
        <section id="contact" className="bg-cream-light py-20">
          <div className="max-w-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Let&apos;s talk growth
            </h2>
            <p className="text-navy/60 text-lg mb-8">
              20-minute call. We&apos;ll figure out what&apos;s holding you back and whether FeeSlayers is the right fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:+13025205447" className="btn-gold">
                Call (302) 520-5447
              </a>
              <a href="mailto:info@feeslayers.com" className="btn-outline-gold !border-navy !text-navy">
                Email us
              </a>
            </div>
            <p className="text-xs text-navy/40">
              FeeSlayers is not a lender and does not make credit decisions. Financing provided by third-party lenders.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
