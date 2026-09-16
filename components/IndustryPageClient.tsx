'use client';

import Link from 'next/link';
import { industries, type Industry, type PainPoint, type Solution } from '@/lib/industries';
import { industriesFr } from '@/lib/industries-fr';
import { industriesEs } from '@/lib/industries-es';
import { translations } from '@/lib/translations';

type IndustryKey = typeof industries[number]['id'];

interface IndustryPageClientProps {
  industry: IndustryKey;
}

export default function IndustryPageClient({ industry }: IndustryPageClientProps) {
  const lang = (typeof window !== 'undefined' && localStorage.getItem('fs_lang')) || 'en';
  const k = industry as keyof typeof industriesFr;

  // FR/ES: plain strings; EN: PainPoint/Solution objects
  const industryData:
    | Industry
    | { name: string; tagline: string; description: string; painPoints: readonly string[]; solutions: readonly string[]; ctaText?: string }
    | undefined =
    lang === 'fr' ? (industriesFr[k] as unknown as Industry) :
    lang === 'es' ? (industriesEs[k] as unknown as Industry) :
    industries.find((i) => i.id === industry);

  // Resolve painPoint/solution text — handles both string (FR/ES) and object (EN)
  const painPointText = (p: PainPoint | string) =>
    typeof p === 'string' ? p : p.description;
  const solutionText = (s: Solution | string) =>
    typeof s === 'string' ? s : s.description;

  const t = translations[lang as 'en' | 'fr' | 'es'];

  if (!industryData) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-800 transition-colors">{t.nav.home}</Link>
            <span>/</span>
            <Link href="/canada" className="hover:text-slate-800 transition-colors">{t.nav.canada}</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">{industryData.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-1.5 text-sm text-amber-300 mb-6">
            {industryData.name}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {industryData.name}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            {industryData.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              {t.industry.cta}
            </Link>
            <Link
              href="/canada"
              className="border border-white/30 hover:border-white/60 px-8 py-3 rounded-lg transition-colors"
            >
              {t.industry.allIndustries}
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t.industry.painPoints.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryData!.painPoints.map((point, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-slate-700">{painPointText(point)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">{t.industry.solutions.title}</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">{t.industry.solutions.subtitle}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryData.solutions.map((solution, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-slate-700">{solutionText(solution)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Note */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">{t.industry.financing.title}</h2>
          <p className="text-slate-600 mb-6">{t.industry.financing.body}</p>
          <Link
            href="/#contact"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {t.industry.financing.cta}
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t.industry.ctaTitle}</h2>
          <p className="text-slate-300 mb-8">{t.industry.ctaSubtitle}</p>
          <Link
            href="/#contact"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            {t.industry.cta}
          </Link>
        </div>
      </section>
    </div>
  );
}
