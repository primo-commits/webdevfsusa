import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { industries } from "@/lib/industries";

export async function generateStaticParams() {
  return industries.map((ind) => ({ industry: ind.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const ind = industries.find((i) => i.id === industry);
  if (!ind) return {};
  return { title: `${ind.name} | FeeSlayer Canada` };
}

export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const ind = industries.find((i) => i.id === industry);
  if (!ind) notFound();

  return (
    <>
      <Navbar theme="light" />
      <main className="flex-1 pt-16 lg:pt-20">

        {/* ── BREADCRUMB ─────────────────────────────────── */}
        <div className="bg-cream-light border-b border-cream-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-2 text-sm text-navy/50">
              <Link href="/canada" className="hover:text-gold transition-colors">Canada</Link>
              <span>/</span>
              <Link href="/canada#industries" className="hover:text-gold transition-colors">Industries</Link>
              <span>/</span>
              <span className="text-navy font-medium">{ind.name}</span>
            </div>
          </div>
        </div>

        {/* ── HERO ────────────────────────────────────────── */}
        <section className="bg-cream-light relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-navy/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-navy text-cream text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
                <span className="text-gold">🇨🇦</span>
                FeeSlayer for {ind.name}
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-navy leading-tight tracking-tight mb-6">
                {ind.tagline}
              </h1>
              <p className="text-xl text-navy/60 leading-relaxed mb-8">
                {ind.description}
              </p>
              <Link href="#contact" className="btn-gold">
                Book a free consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── PAIN POINTS ─────────────────────────────────── */}
        <section className="section-navy py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-gold mb-4">
                The problems we hear most
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-cream">
                Challenges {ind.name} businesses face every day
              </h2>
            </div>

            <div className="space-y-6 max-w-3xl mx-auto">
              {ind.painPoints.map((point, i) => (
                <div
                  key={point.title}
                  className="bg-navy-soft rounded-2xl p-8 border border-white/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mt-0.5">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-cream mb-3">{point.title}</h3>
                      <p className="text-cream/60 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOLUTIONS ───────────────────────────────────── */}
        <section className="section-cream py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-gold mb-4">
                How we help
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy">
                What FeeSlayer does for your {ind.name.toLowerCase()} business
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {ind.solutions.map((solution) => (
                <div
                  key={solution.title}
                  className="bg-white rounded-2xl p-8 border border-cream-dark shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mt-0.5">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy mb-3">{solution.title}</h3>
                      <p className="text-navy/60 leading-relaxed text-sm">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINANCING NOTE ──────────────────────────────── */}
        <section className="section-navy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-navy-soft rounded-2xl p-8 border border-white/5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-cream">Consumer Financing</h3>
                      <span className="text-xs font-bold uppercase tracking-widest bg-gold/10 border border-gold/20 text-gold px-3 py-1 rounded-full">
                        Under Development
                      </span>
                    </div>
                    <p className="text-cream/60 leading-relaxed text-sm">
                      Consumer financing is currently in development for Canadian businesses. We are finalizing our lender network and expect to have this available soon. In the meantime, our surcharge program, Google presence, and business capital solutions are fully available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section id="contact" className="section-cream py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Talk to a human about your {ind.name.toLowerCase()} business
              </h2>
              <p className="text-navy/60 text-lg mb-10 leading-relaxed">
                No pressure. No obligations. We will look at your current setup and tell you exactly what you are paying in card fees, and what a compliant surcharge program would put back in your account each month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13025205447" className="btn-gold">
                  Call (302) 520-5447
                </a>
                <Link href="/canada" className="btn-outline-gold !border-navy !text-navy">
                  View all industries
                </Link>
              </div>
              <p className="text-xs text-navy/40 mt-8">
                FeeSlayer Canada operates across all provinces except Quebec. Surcharge program subject to approval. Fees and savings vary by processor.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
