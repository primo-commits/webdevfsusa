import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SavingsCalculator from "@/components/SavingsCalculator";
import { industries } from "@/lib/industries";

/* ── Industry priority tiers (based on Facebook Ads prospect quality) ────── */
/* Only industries that exist in lib/industries.ts are listed here. */
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

const sorted = [...industries].sort(tierSort);

export default function CanadaPage() {
  return (
    <>
      <Navbar theme="light" />
      <main className="flex-1 pt-16 lg:pt-20">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="bg-navy relative overflow-hidden">
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
                FeeSlayer gives Canadian service businesses the full growth toolkit: Facebook advertising, Google presence, payment solutions, and capital. Try it free for 2 weeks. You pay only the ad budget. We handle everything else.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#services" className="btn-gold">
                  Start my free trial
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/landing" className="btn-outline-gold">
                  Book a call
                </Link>
              </div>

              {/* Trust line */}
              <p className="mt-8 text-cream/40 text-sm">
                No contracts. Cancel anytime. Setup at no cost.
              </p>

            </div>
          </div>
        </section>

        {/* ── WHAT WE OFFER ───────────────────────────────────── */}
        <section id="services" className="section-cream py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                Everything your business needs to grow
              </h2>
              <p className="text-navy/60 text-lg max-w-xl mx-auto">
                We are not just a payment company. We are your growth team — handling the marketing, the lead flow, and the financial tools to close more business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

              {/* Advertising — primary hook */}
              <div className="bg-navy rounded-2xl p-8 flex flex-col gap-4 lg:col-span-2">
                <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cream mb-1">Facebook &amp; Meta Advertising</h3>
                  <span className="inline-block text-xs font-bold text-gold uppercase tracking-widest mt-1">
                    2 Weeks Free
                  </span>
                </div>
                <p className="text-cream/60 text-sm leading-relaxed">
                  We run your Facebook and Meta campaigns end-to-end. You pay only the ad budget. We handle creative, targeting, optimization, and lead delivery. 2 weeks free — no upfront cost for our management.
                </p>
                <p className="text-cream/40 text-xs leading-relaxed">
                  Works for: auto repair, roofing, HVAC, plumbing, home renovation, landscaping, med spas, gyms, and any service business with a clear offer and a service area.
                </p>
                <Link href="#industries" className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all mt-2">
                  See which industries we target
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
                <h3 className="text-base font-bold text-navy">Google Presence</h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  GBP optimization, local SEO, and search visibility so you show up when people search for your service in your city.
                </p>
                <span className="text-xs font-bold text-gold uppercase tracking-widest mt-auto">Included</span>
              </div>

              {/* Payment Processing / Surcharge */}
              <div className="bg-white border border-cream-dark rounded-2xl p-7 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-navy">Payment Processing</h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  Compliant surcharge program. Your customers pay the card fee — not you. Zero cost on card transactions. Government-authorized.
                </p>
                <span className="text-xs font-bold text-gold uppercase tracking-widest mt-auto">Available</span>
              </div>

              {/* Consumer Financing */}
              <div className="bg-white border border-cream-dark rounded-2xl p-7 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-navy">Consumer Financing</h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  Help your customers say yes to big-ticket jobs. We connect them to financing so high-ticket estimates close faster.
                </p>
                <span className="text-xs font-bold text-navy/50 uppercase tracking-widest mt-auto italic">Under development</span>
              </div>

              {/* Business Capital */}
              <div className="bg-white border border-cream-dark rounded-2xl p-7 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-navy">Business Capital</h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  MCAs and business loans underwritten off your business revenue — not your credit score. Capital to bridge cash flow gaps and take on bigger jobs.
                </p>
                <span className="text-xs font-bold text-gold uppercase tracking-widest mt-auto">Available</span>
              </div>

            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ──────────────────────────────────────── */}
        <section id="industries" className="section-navy py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">
                Built for service businesses like yours
              </h2>
              <p className="text-cream/60 text-lg max-w-xl mx-auto">
                Our Facebook advertising works best for service businesses with a clear offer, a defined service area, and tickets of $500 or more. Here is where we focus.
              </p>
            </div>

            {/* Industries grid — no priority tiers visible to public */}
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
                Not sure if your industry is a fit? Book a call and we will tell you straight.
              </p>
              <Link href="/landing" className="btn-gold">
                Book a free consultation
              </Link>
            </div>
          </div>
        </section>

        {/* ── CALCULATOR ───────────────────────────────────────── */}
        <section id="calculator" className="bg-cream-light py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                What are card fees costing you?
              </h2>
              <p className="text-navy/60 text-lg max-w-xl mx-auto">
                Most Canadian businesses do not realize how much they are paying. Run the numbers.
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
                Getting started is easy
              </h2>
              <p className="text-navy/60 text-lg max-w-xl mx-auto">
                We do the heavy lifting. You just run your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

              {[
                {
                  step: "1",
                  title: "Book a call",
                  desc: "Tell us about your business and what you are trying to grow. 20 minutes, no pressure.",
                },
                {
                  step: "2",
                  title: "We build it out",
                  desc: "Ad campaigns, GBP optimization, financing integrations, payment setup. We handle the full stack.",
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
                Ready to grow?
              </h2>
              <p className="text-cream/60 text-lg mb-8">
                20-minute call. We figure out what is holding you back and whether FeeSlayers is the right fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:+13025205447" className="btn-gold">
                  Book a call
                </a>
                <a href="mailto:info@feeslayers.com" className="btn-outline-gold">
                  Email us
                </a>
              </div>
              <p className="text-xs text-cream/30">
                FeeSlayer Canada operates across all provinces except Quebec. Services vary by province. Financing subject to lender approval.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
