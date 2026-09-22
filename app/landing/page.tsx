'use client';

import { useEffect, useState, type FormEvent } from 'react';
import './landing.css';

// ─── GHL INBOUND WEBHOOK ──────────────────────────────────────────────────────
const GHL_WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/p05l3tBveztzKCJ14Z6C/webhook-trigger/5V1Bsd31tHBTytuV3b9i';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type Language = 'en' | 'fr' | 'es';
type Country = 'us' | 'ca';

interface Translation {
  topBar: string;
  navHowItWorks: string;
  navApply: string;
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroTitle3: string;
  heroDesc: string;
  heroScarcity: string;
  ctaButton: string;
  statYouOwn: string;
  statNoCc: string;
  statDays: string;
  dashboardLabel: string;
  dashboardBusiness: string;
  dashboardLocation: string;
  caseStudyLabel: string;
  appointmentsLabel: string;
  cplLabel: string;
  spendLabel: string;
  howItWorksLabel: string;
  howItWorksTitle: string;
  howItWorksSub: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  formTitle: string;
  formSub: string;
  countryLabel: string;
  countryUs: string;
  countryCa: string;
  businessNameLabel: string;
  businessNamePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  callDateLabel: string;
  callDateNote: string;
  ctaSubtext: string;
  disclaimer: string;
  footerDisclaimer: string;
  trustNoCc: string;
  trustLeads: string;
  trustOwn: string;
  confirmedTitle: string;
  confirmedSubtitle: string;
  validationError: string;
  validationPhone: string;
  validationCallDate: string;
  sendingButton: string;
}

const translations: Record<Language, Translation> = {
  en: {
    topBar: "Limited free trials available each month -- we selectively onboard businesses that are the right fit",
    navHowItWorks: "How It Works",
    navApply: "Apply Free",
    heroBadge: "Auto Repair, HVAC, Home Services",
    heroTitle1: "2 Weeks of Facebook Ads.",
    heroTitle2: "Free.",
    heroTitle3: "No Strings.",
    heroDesc: "See if FeeSlayers is the right fit for your business. We'll run your Facebook ads for 2 weeks at no cost. If you don't see results, you walk away.",
    heroScarcity: "Only a handful of free trials available this month",
    ctaButton: "Apply for Your Free Trial",
    statYouOwn: "You own your accounts",
    statNoCc: "No credit card required",
    statDays: "Days free trial",
    dashboardLabel: "Your Business",
    dashboardBusiness: "NP Detailing",
    dashboardLocation: "Moncton, NB",
    caseStudyLabel: "Real result from a FeeSlayers client",
    appointmentsLabel: "Appointments Last Month",
    cplLabel: "Cost Per Lead",
    spendLabel: "Facebook Ads Spend",
    howItWorksLabel: "How It Works",
    howItWorksTitle: "3 Steps to Your Free Trial",
    howItWorksSub: "A simple path from application to seeing real results from your Facebook ads.",
    step1Title: "Book Your Call",
    step1Desc: "Tell us about your business and marketing goals. We'll review your current situation and identify the best opportunity.",
    step2Title: "We Build Your Ads",
    step2Desc: "Once approved, we build and launch your Facebook ad campaign using real data and a strategy built for your industry.",
    step3Title: "See Real Results",
    step3Desc: "After 2 weeks, you'll see exactly what kind of leads and calls are possible. No pressure, no obligation.",
    formTitle: "Apply for Your Free Trial",
    formSub: "Takes 60 seconds. No credit card required.",
    countryLabel: "WHERE IS YOUR BUSINESS LOCATED?",
    countryUs: "US -- United States",
    countryCa: "CA -- Canada",
    businessNameLabel: "Business Name",
    businessNamePlaceholder: "Your shop or business name",
    phoneLabel: "Phone Number",
    phonePlaceholder: "(555) 000-0000",
    callDateLabel: "Best day to call you",
    callDateNote: "We'll call between 8:00 AM -- 5:00 PM",
    ctaSubtext: "No commitment. No sales pressure. Just a real conversation about your business.",
    disclaimer: "By applying, you agree to be contacted by FeeSlayers regarding your free trial. No payment information required. No obligation.",
    footerDisclaimer: "FeeSlayers is not a lender and does not make credit decisions. Facebook ad management is separate from your ad spend budget, which you pay directly to Meta. Results may vary. This free trial offer is subject to eligibility and availability.",
    trustNoCc: "No credit card required",
    trustLeads: "Real leads, real calls",
    trustOwn: "You own your ad accounts",
    confirmedTitle: "You're in.",
    confirmedSubtitle: "We'll call between 8:00 AM -- 5:00 PM on",
    validationError: "Please fill in all required fields.",
    validationPhone: "Please enter a valid phone number.",
    validationCallDate: "Please select a date.",
    sendingButton: "Sending…",
  },
  fr: {
    topBar: "Essais gratuits limites chaque mois -- nous selectionnons les entreprises qui correspondent a notre approche",
    navHowItWorks: "Comment ca marche",
    navApply: "Appliquer",
    heroBadge: "Reparation Auto, CVC, Services a Domicile",
    heroTitle1: "2 semaines de publicite Facebook.",
    heroTitle2: "Gratuit.",
    heroTitle3: "Sans engagement.",
    heroDesc: "Decouvrez si FeeSlayers vous convient. Nous gérons vos publicites Facebook pendant 2 semaines gratuitement. Si vous ne voyez pas de resultats, vous partez.",
    heroScarcity: "Seulement quelques essais gratuits disponibles ce mois-ci",
    ctaButton: "Postuler pour un Essai Gratuit",
    statYouOwn: "Vous gardez vos comptes",
    statNoCc: "Aucune carte requise",
    statDays: "Jours d'essai gratuit",
    dashboardLabel: "Votre Entreprise",
    dashboardBusiness: "NP Detailing",
    dashboardLocation: "Moncton, NB",
    caseStudyLabel: "Resultat reel d'un client FeeSlayers",
    appointmentsLabel: "Rendez-vous le mois dernier",
    cplLabel: "Cout par Lead",
    spendLabel: "Budget Facebook Ads",
    howItWorksLabel: "Comment ca marche",
    howItWorksTitle: "3 etapes vers votre essai gratuit",
    howItWorksSub: "Un processus simple de la candidature a l'obtention de resultats concrets sur Facebook.",
    step1Title: "Reservez Votre Appel",
    step1Desc: "Parlez-nous de votre entreprise et de vos objectifs marketing. Nous analysons votre situation et identifions la meilleure opportunite.",
    step2Title: "Nous Creons Vos Annonces",
    step2Desc: "Une fois approuve, nous concevons et lancons votre campagne Facebook avec des donnees reelles et une strategie adaptee a votre secteur.",
    step3Title: "Voyez les Resultats",
    step3Desc: "Apres 2 semaines, vous verrez exactement quel type de leads et d'appels est possible. Pas de pression, pas d'obligation.",
    formTitle: "Postuler pour un Essai Gratuit",
    formSub: "Cela prend 60 secondes. Aucune carte de credit requise.",
    countryLabel: "OU EST SITUEE VOTRE ENTREPRISE?",
    countryUs: "US --Etats-Unis",
    countryCa: "CA -- Canada",
    businessNameLabel: "Nom de l'entreprise",
    businessNamePlaceholder: "Le nom de votre entreprise",
    phoneLabel: "Numero de telephone",
    phonePlaceholder: "(555) 000-0000",
    callDateLabel: "Meilleur jour pour vous appeler",
    callDateNote: "Nous appellerons entre 8h00 et 17h00",
    ctaSubtext: "Aucun engagement. Aucune pression commerciale. Juste une vraie conversation sur votre entreprise.",
    disclaimer: "En postulant, vous acceptez d'etre contacté par FeeSlayers concernant votre essai gratuit. Aucune information de paiement requise. Aucune obligation.",
    footerDisclaimer: "FeeSlayers n'est pas un preteur et ne prend pas de decisions de credit. La gestion des publicites Facebook est separate de votre budget publicitaire, que vous payez directement a Meta. Les resultats peuvent varier. Cette offre d'essai gratuit est soumise a l'eligibilite et a la disponibilite.",
    trustNoCc: "Aucune carte requise",
    trustLeads: "De vrais leads, de vrais appels",
    trustOwn: "Vous gardez vos comptes",
    confirmedTitle: "C'est en route.",
    confirmedSubtitle: "Nous appellerons entre 8h00 et 17h00 le",
    validationError: "Veuillez remplir tous les champs requis.",
    validationPhone: "Veuillez entrer un numero de telephone valide.",
    validationCallDate: "Veuillez selectionner une date.",
    sendingButton: "Envoi…",
  },
  es: {
    topBar: "Pruebas gratuitas limitadas cada mes -- aceptamos empresas que sean adecuadas para nosotros",
    navHowItWorks: "Como Funciona",
    navApply: "Aplicar",
    heroBadge: "Reparacion de Autos, HVAC, Servicios a Domicilio",
    heroTitle1: "2 semanas de Facebook Ads.",
    heroTitle2: "Gratis.",
    heroTitle3: "Sin compromisos.",
    heroDesc: "Descubre si FeeSlayers es adecuado para tu negocio. Nosotros gestionamos tus anuncios de Facebook durante 2 semanas sin costo. Si no ves resultados, te vas.",
    heroScarcity: "Solo un punado de pruebas gratuitas disponibles este mes",
    ctaButton: "Aplica para tu Prueba Gratuita",
    statYouOwn: "Tus cuentas te pertenecen",
    statNoCc: "Sin tarjeta requerida",
    statDays: "Dias de prueba gratis",
    dashboardLabel: "Tu Negocio",
    dashboardBusiness: "NP Detailing",
    dashboardLocation: "Moncton, NB",
    caseStudyLabel: "Resultado real de un cliente FeeSlayers",
    appointmentsLabel: "Citas el Mes Pasado",
    cplLabel: "Costo por Lead",
    spendLabel: "Presupuesto Facebook Ads",
    howItWorksLabel: "Como Funciona",
    howItWorksTitle: "3 Pasos hacia tu Prueba Gratuita",
    howItWorksSub: "Un camino simple desde la solicitud hasta ver resultados reales en Facebook.",
    step1Title: "Reserva tu Llamada",
    step1Desc: "Cuentanos sobre tu negocio y tus objetivos de marketing. Revisaremos tu situacion actual e identificaremos la mejor oportunidad.",
    step2Title: "Creamos tus Anuncios",
    step2Desc: "Una vez aprobado, construimos y lanzamos tu campana de Facebook con datos reales y una estrategia para tu industria.",
    step3Title: "Ve Resultados Reales",
    step3Desc: "Despues de 2 semanas, veras exactamente que tipo de leads y llamadas son posibles. Sin presion, sin obligacion.",
    formTitle: "Aplica para tu Prueba Gratuita",
    formSub: "Toma 60 segundos. No se requiere tarjeta de credito.",
    countryLabel: "DONDE ESTA UBICADO TU NEGOCIO?",
    countryUs: "US -- Estados Unidos",
    countryCa: "CA -- Canada",
    businessNameLabel: "Nombre del negocio",
    businessNamePlaceholder: "El nombre de tu negocio",
    phoneLabel: "Numero de telefono",
    phonePlaceholder: "(555) 000-0000",
    callDateLabel: "Mejor dia para llamarte",
    callDateNote: "Llamaremos entre 8:00 AM y 5:00 PM",
    ctaSubtext: "Sin compromiso. Sin presion de venta. Solo una conversacion real sobre tu negocio.",
    disclaimer: "Al aplicar, aceptas ser contactado por FeeSlayers sobre tu prueba gratuita. No se requiere informacion de pago. Ninguna obligacion.",
    footerDisclaimer: "FeeSlayers no es un prestamista y no toma decisiones de credito. La gestion de anuncios de Facebook es independiente de tu presupuesto publicitario, que pagas directamente a Meta. Los resultados pueden variar. Esta oferta de prueba gratuita esta sujeta a elegibilidad y disponibilidad.",
    trustNoCc: "Sin tarjeta requerida",
    trustLeads: "Leads reales, llamadas reales",
    trustOwn: "Tus cuentas te pertenecen",
    confirmedTitle: "Listo.",
    confirmedSubtitle: "Llamaremos entre 8:00 AM y 5:00 PM el",
    validationError: "Por favor completa todos los campos requeridos.",
    validationPhone: "Por favor ingresa un numero de telefono valido.",
    validationCallDate: "Por favor selecciona una fecha.",
    sendingButton: "Enviando…",
  },
};

function formatDate(dateStr: string, lang: Language): string {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-').map(Number);
  const d = new Date(year, month - 1, day);
  if (lang === 'fr') return d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  if (lang === 'es') return d.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

export default function LandingPage() {
  const [lang, setLang] = useState<Language>('en');
  const [country, setCountry] = useState<Country>('us');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [callDate, setCallDate] = useState('');
  const [errors, setErrors] = useState<{ businessName?: string; phone?: string; callDate?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [minDate, setMinDate] = useState('');

  // Set after mount so the prerendered HTML doesn't bake in the build date.
  useEffect(() => {
    setMinDate(new Date().toISOString().split('T')[0]);
  }, []);

  const t = translations[lang];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors: typeof errors = {};
    if (!businessName.trim()) nextErrors.businessName = t.validationError;
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) nextErrors.phone = t.validationPhone;
    if (!callDate) nextErrors.callDate = t.validationCallDate;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    const firstName = businessName.trim().split(' ')[0];

    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          phone: phone.trim(),
          businessName: businessName.trim(),
          country,
          callDate,
        }),
      });
    } catch {
      // non-blocking: still show confirmation
    }

    // Meta Pixel conversion. Guarded: fbq is absent when an ad blocker or a
    // privacy browser stops the base snippet, and an unguarded call would
    // throw and leave the visitor stuck on a spinning submit button.
    // The snippet queues calls internally, so this is safe before it loads.
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
    }

    setSubmitting(false);
    setConfirmed(true);
  }

  return (
    <div className="landing-root">
      {/* CONFIRMATION VIEW */}
      <div className={confirmed ? 'confirmed-wrapper show' : 'confirmed-wrapper'}>
        <div className="confirmed-card">
          <div className="confirmed-logo">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <rect width="52" height="52" rx="10" fill="#1B3A5C" />
              <path d="M44 0 H52 V8 Q52 0 44 0 Z" fill="#C9A84C" />
              <text x="8" y="37" fontFamily="Inter, Helvetica, Arial, sans-serif" fontWeight="700" fontSize="26" fill="#F5F0E8" letterSpacing="-1">F</text>
              <text x="28" y="37" fontFamily="Inter, Helvetica, Arial, sans-serif" fontWeight="700" fontSize="26" fill="#C9A84C" letterSpacing="-1">S</text>
            </svg>
          </div>
          <div className="confirmed-check">
            <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
              <path d="M6 15l6.5 7L24 9" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="confirmed-title">{t.confirmedTitle}</h2>
          <p className="confirmed-sub">{t.confirmedSubtitle}</p>
          <p className="confirmed-date">{formatDate(callDate, lang)}</p>
        </div>
      </div>

      {/* MAIN VIEW */}
      <div className={confirmed ? 'main-wrapper hide' : 'main-wrapper'}>
        {/* Top Bar */}
        <div className="top-bar">{t.topBar}</div>

        {/* Header */}
        <header>
          <div className="header-inner">
            <a href="#" className="logo">
              FEE<span>SLAYERS</span>
            </a>
            <nav className="nav-links">
              <a href="#how-it-works">{t.navHowItWorks}</a>
              <a href="#apply">{t.navApply}</a>
            </nav>
            <div className="lang-switcher">
              {(['en', 'fr', 'es'] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  className={lang === code ? 'lang-btn active' : 'lang-btn'}
                  onClick={() => setLang(code)}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-text">
              <div className="hero-badge">{t.heroBadge}</div>
              <h1 className="hero-title">
                <span>{t.heroTitle1}</span>
                <br />
                <span className="highlight">{t.heroTitle2}</span>
                <br />
                <span>{t.heroTitle3}</span>
              </h1>
              <p className="hero-description">{t.heroDesc}</p>
              <div className="hero-scarcity">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path stroke="currentColor" strokeWidth="2" d="M12 7v5l3 3" />
                </svg>
                <span>{t.heroScarcity}</span>
              </div>
              <a href="#apply" className="cta-btn">
                {t.ctaButton}
              </a>
              <div className="hero-stats">
                <div>
                  <div className="hero-stat-value">100%</div>
                  <div className="hero-stat-label">{t.statYouOwn}</div>
                </div>
                <div>
                  <div className="hero-stat-value">0</div>
                  <div className="hero-stat-label">{t.statNoCc}</div>
                </div>
                <div>
                  <div className="hero-stat-value">14</div>
                  <div className="hero-stat-label">{t.statDays}</div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card-stack">
                <div className="case-study-tag">{t.caseStudyLabel}</div>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--gold)', marginBottom: '0.5rem' }}>
                    {t.dashboardLabel}
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>{t.dashboardBusiness}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{t.dashboardLocation}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '12px', padding: '1rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--gold)' }}>150</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>
                      {t.appointmentsLabel}
                    </div>
                  </div>
                  <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: '12px', padding: '1rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#10b981' }}>
                      $9.00 <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>CAD</span>
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>
                      {t.cplLabel}
                    </div>
                  </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.spendLabel}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginTop: '0.25rem' }}>$1,350 CAD / month</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="steps-section" id="how-it-works">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">{t.howItWorksLabel}</span>
              <h2 className="section-title">{t.howItWorksTitle}</h2>
              <p className="section-sub">{t.howItWorksSub}</p>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-icon">&#128197;</div>
                <h3>{t.step1Title}</h3>
                <p>{t.step1Desc}</p>
              </div>
              <div className="step-card">
                <div className="step-icon">&#128200;</div>
                <h3>{t.step2Title}</h3>
                <p>{t.step2Desc}</p>
              </div>
              <div className="step-card">
                <div className="step-icon">&#10003;</div>
                <h3>{t.step3Title}</h3>
                <p>{t.step3Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="form-section" id="apply">
          <div className="form-inner">
            <div className="form-card">
              <h2>{t.formTitle}</h2>
              <p className="form-sub">{t.formSub}</p>

              <form onSubmit={handleSubmit} noValidate>
                {/* Country */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--gold-light)', marginBottom: '8px' }}>
                    {t.countryLabel}
                  </p>
                  <div className="country-toggle">
                    <button type="button" className={country === 'us' ? 'country-btn active' : 'country-btn'} onClick={() => setCountry('us')}>
                      {t.countryUs}
                    </button>
                    <button type="button" className={country === 'ca' ? 'country-btn active' : 'country-btn'} onClick={() => setCountry('ca')}>
                      {t.countryCa}
                    </button>
                  </div>
                </div>

                {/* Business name */}
                <div className="form-group">
                  <label htmlFor="businessName">{t.businessNameLabel}</label>
                  <input
                    type="text"
                    id="businessName"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder={t.businessNamePlaceholder}
                  />
                  {errors.businessName && <span className="error-msg">{errors.businessName}</span>}
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone">{t.phoneLabel}</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.phonePlaceholder}
                  />
                  {errors.phone && <span className="error-msg">{errors.phone}</span>}
                </div>

                {/* Date */}
                <div className="form-group">
                  <label htmlFor="callDate">{t.callDateLabel}</label>
                  <input type="date" id="callDate" value={callDate} min={minDate} onChange={(e) => setCallDate(e.target.value)} />
                  {errors.callDate && <span className="error-msg">{errors.callDate}</span>}
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px' }}>{t.callDateNote}</p>
                </div>

                <button type="submit" className="cta-btn-full" disabled={submitting}>
                  {submitting ? (
                    <>
                      <span
                        className="spin"
                        style={{
                          display: 'inline-block',
                          width: '16px',
                          height: '16px',
                          border: '2.5px solid rgba(27,58,92,0.4)',
                          borderTopColor: '#0f2338',
                          borderRadius: '50%',
                        }}
                      />{' '}
                      {t.sendingButton}
                    </>
                  ) : (
                    t.ctaButton
                  )}
                </button>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '12px' }}>{t.ctaSubtext}</p>
              </form>

              <p className="form-disclaimer">{t.disclaimer}</p>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="trust-section">
          <div className="trust-inner">
            <div className="trust-item">
              <div className="trust-icon">&#10003;</div>
              <span>{t.trustNoCc}</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon">&#128200;</div>
              <span>{t.trustLeads}</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon">&#128273;</div>
              <span>{t.trustOwn}</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <strong>FeeSlayers</strong> <span>{t.footerDisclaimer}</span>
        </footer>
      </div>
    </div>
  );
}
