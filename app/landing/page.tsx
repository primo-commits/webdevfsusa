'use client';

import { useState, useEffect } from 'react';

type Language = 'en' | 'fr' | 'es';
type Country = 'us' | 'ca';

// ─── MAKE.COM WEBHOOK ─────────────────────────────────────────────────────
const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/da5qk1gavr3omjp4498gimo6onok271m';

// ─── SERVICE OPTIONS ──────────────────────────────────────────────────────────
// value = passed to GHL; label is per-language via translations below
const SERVICES = [
  'google_business_profile',
  'facebook_meta_advertising',
  'consumer_financing',
  'payment_processing',
  'business_capital',
  'website_development',
] as const;
type ServiceValue = typeof SERVICES[number];

// ─── GHL CALENDAR IDs ─────────────────────────────────────────────────────────
const GHL_CALENDAR_IDS = {
  us: '6Y4RUBqnucK62JXW4J8A',
  ca: 'DAMM5jUOXgVRPv0Hs8P6',
};

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
interface Translation {
  introTitle: string;
  introSubtitle: string;
  countryLabel: string;
  countryUs: string;
  countryCa: string;
  businessNameLabel: string;
  businessNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  servicesLabel: string;
  services: { value: ServiceValue; label: string }[];
  ctaButton: string;
  ctaSubtext: string;
  disclaimer: string;
  validationError: string;
  validationEmail: string;
  validationPhone: string;
  validationServices: string;
  langEn: string;
  langFr: string;
  langEs: string;
  calendarStepLabel: string;
  calendarStepLabelFr: string;
  calendarStepLabelEs: string;
}

const t: Record<Language, Translation> = {
  en: {
    introTitle: 'Tell us about your business and what you\'re looking to improve.',
    introSubtitle: 'We\'ll put together a custom plan and show you exactly what\'s available for your situation.',
    countryLabel: 'WHERE IS YOUR BUSINESS LOCATED?',
    countryUs: 'US — United States',
    countryCa: 'CA — Canada',
    businessNameLabel: 'Business Name',
    businessNamePlaceholder: 'e.g. Apex Auto Repair',
    emailLabel: 'Email Address',
    emailPlaceholder: 'you@yourbusiness.com',
    phoneLabel: 'Phone Number',
    phonePlaceholder: '(555) 867-5309',
    servicesLabel: 'Which services are you interested in? (select all that apply)',
    services: [
      { value: 'google_business_profile', label: 'Google Business Profile' },
      { value: 'facebook_meta_advertising', label: 'Facebook & Meta Advertising' },
      { value: 'consumer_financing', label: 'Consumer Financing' },
      { value: 'website_development', label: 'Website Development' },
      { value: 'payment_processing', label: 'Payment Processing' },
      { value: 'business_capital', label: 'Business Capital' },
    ],
    ctaButton: 'Book Your Free Strategy Call',
    ctaSubtext: 'No commitment. No sales pressure. Just a real conversation about your business.',
    disclaimer: 'FeeSlayers is not a lender and does not make credit decisions. Financing provided through third-party lenders.',
    validationError: 'Please fill in all required fields.',
    validationEmail: 'Please enter a valid email address.',
    validationPhone: 'Please enter a valid phone number.',
    validationServices: 'Please select at least one service.',
    langEn: 'EN',
    langFr: 'FR',
    langEs: 'ES',
    calendarStepLabel: 'SELECT A TIME FOR YOUR STRATEGY CALL',
    calendarStepLabelFr: 'SÉLECTIONNEZ UNE HEURE POUR VOTRE APPEL STRATÉGIQUE',
    calendarStepLabelEs: 'SELECCIONE UNA HORA PARA SU LLAMADA ESTRATÉGICA',
  },
  fr: {
    introTitle: 'Parlez-nous de votre entreprise et de ce que vous souhaitez améliorer.',
    introSubtitle: "Nous élaborerons un plan personnalisé et vous montrerons exactement ce qui est disponible pour votre situation.",
    countryLabel: 'OÙ EST SITUÉE VOTRE ENTREPRISE?',
    countryUs: 'US — États-Unis',
    countryCa: 'CA — Canada',
    businessNameLabel: 'Nom de l\'entreprise',
    businessNamePlaceholder: 'p. ex. Atelier Apex Réparation',
    emailLabel: 'Adresse courriel',
    emailPlaceholder: 'vous@votreentreprise.com',
    phoneLabel: 'Numéro de téléphone',
    phonePlaceholder: '(555) 867-5309',
    servicesLabel: 'Quels services vous intéressent? (sélectionnez tous ceux qui s\'appliquent)',
    services: [
      { value: 'google_business_profile', label: 'Google Business Profile' },
      { value: 'facebook_meta_advertising', label: 'Publicité Facebook et Meta' },
      { value: 'consumer_financing', label: 'Financement aux consommateurs' },
      { value: 'website_development', label: 'Développement de sites web' },
      { value: 'payment_processing', label: 'Traitement des paiements' },
      { value: 'business_capital', label: 'Capital d\'affaires' },
    ],
    ctaButton: 'Réservez Votre Appel Stratégique Gratuit',
    ctaSubtext: 'Aucun engagement. Aucune pression commerciale. Juste une vraie conversation sur votre entreprise.',
    disclaimer: 'FeeSlayers n\'est pas un prêteur et ne prend pas de décisions de crédit. Financement fourni par des prêteurs tiers.',
    validationError: 'Veuillez remplir tous les champs requis.',
    validationEmail: 'Veuillez entrer une adresse courriel valide.',
    validationPhone: 'Veuillez entrer un numéro de téléphone valide.',
    validationServices: 'Veuillez sélectionner au moins un service.',
    langEn: 'EN',
    langFr: 'FR',
    langEs: 'ES',
    calendarStepLabel: 'SELECT A TIME FOR YOUR STRATEGY CALL',
    calendarStepLabelFr: 'SÉLECTIONNEZ UNE HEURE POUR VOTRE APPEL STRATÉGIQUE',
    calendarStepLabelEs: 'SELECCIONE UNA HORA PARA SU LLAMADA ESTRATÉGICA',
  },
  es: {
    introTitle: 'Cuéntanos sobre tu negocio y lo que te gustaría mejorar.',
    introSubtitle: 'Elaboraremos un plan personalizado y te mostraremos exactamente lo que está disponible para tu situación.',
    countryLabel: '¿DÓNDE ESTÁ UBICADO TU NEGOCIO?',
    countryUs: 'US — Estados Unidos',
    countryCa: 'CA — Canadá',
    businessNameLabel: 'Nombre del negocio',
    businessNamePlaceholder: 'p. ej. Taller Apex Reparación',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'tu@tunegocio.com',
    phoneLabel: 'Número de teléfono',
    phonePlaceholder: '(555) 867-5309',
    servicesLabel: '¿Qué servicios te interesan? (selecciona todos los que apliquen)',
    services: [
      { value: 'google_business_profile', label: 'Google Business Profile' },
      { value: 'facebook_meta_advertising', label: 'Publicidad Facebook y Meta' },
      { value: 'consumer_financing', label: 'Financiamiento al consumidor' },
      { value: 'website_development', label: 'Desarrollo web' },
      { value: 'payment_processing', label: 'Procesamiento de pagos' },
      { value: 'business_capital', label: 'Capital de negocio' },
    ],
    ctaButton: 'Reserva Tu Llamada Estratégica Gratis',
    ctaSubtext: 'Sin compromiso. Sin presión de venta. Solo una conversación real sobre tu negocio.',
    disclaimer: 'FeeSlayers no es un prestamista y no toma decisiones de crédito. Financiamiento proporcionado por prestamistas terceros.',
    validationError: 'Por favor completa todos los campos requeridos.',
    validationEmail: 'Por favor ingresa un correo electrónico válido.',
    validationPhone: 'Por favor ingresa un número de teléfono válido.',
    validationServices: 'Por favor selecciona al menos un servicio.',
    langEn: 'EN',
    langFr: 'FR',
    langEs: 'ES',
    calendarStepLabel: 'SELECT A TIME FOR YOUR STRATEGY CALL',
    calendarStepLabelFr: 'SÉLECTIONNEZ UNE HEURE POUR VOTRE APPEL STRATÉGIQUE',
    calendarStepLabelEs: 'SELECCIONE UNA HORA PARA SU LLAMADA ESTRATÉGICA',
  },
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────
type Step = 'form' | 'calendar';

export default function LandingPage() {
  const [lang, setLang] = useState<Language>('en');
  const [step, setStep] = useState<Step>('form');
  const [country, setCountry] = useState<Country>('us');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedServices, setSelectedServices] = useState<ServiceValue[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const txt = t[lang];

  // Persist language preference
  useEffect(() => {
    const saved = localStorage.getItem('fs_lang') as Language | null;
    if (saved === 'en' || saved === 'fr' || saved === 'es') setLang(saved);
  }, []);

  const toggleLang = (l: Language) => {
    setLang(l);
    localStorage.setItem('fs_lang', l);
  };

  const toggleService = (value: ServiceValue) => {
    setSelectedServices((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
    setErrors((prev) => {
      const next = { ...prev };
      delete next.services;
      return next;
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!businessName.trim()) errs.businessName = txt.validationError;
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = txt.validationEmail;
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) errs.phone = txt.validationPhone;
    if (selectedServices.length === 0) errs.services = txt.validationServices;
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);

    const firstName = businessName.trim().split(' ')[0];

    // POST to Make.com webhook so it can create the GHL contact
    try {
      await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          email,
          phone,
          businessName,
          country,
          selectedServices,
        }),
      });
    } catch {
      // Fail silently — user should still get to booking
    }

    // Pre-fill GHL widget with contact data via URL params
    const calendarId = GHL_CALENDAR_IDS[country];
    const ghlUrl =
      `https://api.leadconnectorhq.com/widget/booking/${calendarId}` +
      `?phone=${encodeURIComponent(phone)}` +
      `&email=${encodeURIComponent(email)}` +
      `&first_name=${encodeURIComponent(firstName)}` +
      `&customQuestion=${encodeURIComponent(selectedServices.join(','))}`;

    // Render the GHL booking page inline via iframe — no redirect
    setStep('calendar');

    // Inject iframe + form-enhancement script after step state flips so the DOM element exists
    setTimeout(() => {
      const container = document.getElementById('ghl-calendar-container');
      if (!container) return;
      container.innerHTML = '';

      const iframe = document.createElement('iframe');
      iframe.src = ghlUrl;
      iframe.style.border = 'none';
      iframe.style.width = '100%';
      iframe.style.height = '600px';
      iframe.style.display = 'block';
      container.appendChild(iframe);

      // Load GHL's form-enhancement script (handles widget sizing + communication)
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.type = 'text/javascript';
      container.appendChild(script);
    }, 50);
  };

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    width: '100%',
    padding: '13px 15px',
    borderRadius: 10,
    border: hasError ? '2px solid #e53e3e' : '1.5px solid #d4cfc7',
    fontSize: 15,
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.15s',
    background: '#fafaf8',
    color: '#1B3A5C',
    fontFamily: 'inherit',
  });

  return (
    <div style={{ background: '#F9F6F1', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', padding: '0 20px 60px' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ paddingTop: 24, paddingBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#1B3A5C" />
              <path d="M9 22L13 10L16 18L19 14L23 22" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontWeight: 700, fontSize: 18, color: '#1B3A5C' }}>FeeSlayers</span>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {(['en', 'fr', 'es'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => toggleLang(l)}
                style={{
                  background: lang === l ? '#1B3A5C' : 'transparent',
                  color: lang === l ? '#fff' : '#1B3A5C',
                  border: '1.5px solid #1B3A5C',
                  borderRadius: 6,
                  padding: '5px 10px',
                  fontSize: 13,
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                {l === 'en' ? txt.langEn : l === 'fr' ? txt.langFr : txt.langEs}
              </button>
            ))}
          </div>
        </div>

        {/* Intro */}
        <div style={{ marginBottom: 28 }}>
          <p style={{ fontSize: 17, fontWeight: 700, color: '#1B3A5C', lineHeight: 1.4, margin: '28px 0 8px' }}>
            {txt.introTitle}
          </p>
          <p style={{ fontSize: 15, color: '#6b6560', margin: 0 }}>
            {txt.introSubtitle}
          </p>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ background: '#fff', borderRadius: 20, padding: '36px 32px', boxShadow: '0 2px 16px rgba(27,58,92,0.08)', border: '1px solid #ede9e2' }}>

            {/* Country Toggle */}
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#9a9088', letterSpacing: '0.08em', marginBottom: 10, margin: '0 0 10px' }}>
                {txt.countryLabel}
              </p>
              <div style={{ display: 'flex', gap: 8 }}>
                {(['us', 'ca'] as Country[]).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCountry(c)}
                    style={{
                      flex: 1,
                      padding: '11px 14px',
                      borderRadius: 10,
                      border: `2px solid ${country === c ? '#C9A84C' : '#d4cfc7'}`,
                      background: country === c ? '#FFF9EC' : '#fafaf8',
                      color: country === c ? '#1B3A5C' : '#6b6560',
                      fontSize: 14,
                      fontWeight: country === c ? 700 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                      textAlign: 'center',
                    }}
                  >
                    {c === 'us' ? txt.countryUs : txt.countryCa}
                  </button>
                ))}
              </div>
            </div>

            {/* Business Name */}
            <div style={{ marginBottom: 18 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1B3A5C', marginBottom: 6 }}>
                {txt.businessNameLabel} <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <input
                type="text"
                placeholder={txt.businessNamePlaceholder}
                value={businessName}
                onChange={(e) => { setBusinessName(e.target.value); setErrors((p) => { const n = { ...p }; delete n.businessName; return n; }); }}
                onFocus={(e) => { if (!errors.businessName) e.target.style.borderColor = '#C9A84C'; }}
                onBlur={(e) => { e.target.style.borderColor = errors.businessName ? '#e53e3e' : '#d4cfc7'; }}
                style={inputStyle(!!errors.businessName)}
              />
              {errors.businessName && (
                <p style={{ color: '#e53e3e', fontSize: 12, marginTop: 5 }}>{errors.businessName}</p>
              )}
            </div>

            {/* Email */}
            <div style={{ marginBottom: 18 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1B3A5C', marginBottom: 6 }}>
                {txt.emailLabel} <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <input
                type="email"
                placeholder={txt.emailPlaceholder}
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrors((p) => { const n = { ...p }; delete n.email; return n; }); }}
                onFocus={(e) => { if (!errors.email) e.target.style.borderColor = '#C9A84C'; }}
                onBlur={(e) => { e.target.style.borderColor = errors.email ? '#e53e3e' : '#d4cfc7'; }}
                style={inputStyle(!!errors.email)}
              />
              {errors.email && (
                <p style={{ color: '#e53e3e', fontSize: 12, marginTop: 5 }}>{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1B3A5C', marginBottom: 6 }}>
                {txt.phoneLabel} <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <input
                type="tel"
                placeholder={txt.phonePlaceholder}
                value={phone}
                onChange={(e) => { setPhone(e.target.value); setErrors((p) => { const n = { ...p }; delete n.phone; return n; }); }}
                onFocus={(e) => { if (!errors.phone) e.target.style.borderColor = '#C9A84C'; }}
                onBlur={(e) => { e.target.style.borderColor = errors.phone ? '#e53e3e' : '#d4cfc7'; }}
                style={inputStyle(!!errors.phone)}
              />
              {errors.phone && (
                <p style={{ color: '#e53e3e', fontSize: 12, marginTop: 5 }}>{errors.phone}</p>
              )}
            </div>

            {/* Service Selection */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1B3A5C', marginBottom: 10 }}>
                {txt.servicesLabel}
              </label>
              {errors.services && (
                <p style={{ color: '#e53e3e', fontSize: 12, marginBottom: 8 }}>{errors.services}</p>
              )}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {txt.services.map((svc) => {
                  const checked = selectedServices.includes(svc.value);
                  return (
                    <button
                      key={svc.value}
                      type="button"
                      onClick={() => toggleService(svc.value)}
                      style={{
                        padding: '11px 14px',
                        borderRadius: 10,
                        border: checked ? '2px solid #1B3A5C' : '1.5px solid #d4cfc7',
                        background: checked ? '#1B3A5C' : '#fafaf8',
                        color: checked ? '#fff' : '#6b6560',
                        fontSize: 13,
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontWeight: 500,
                        transition: 'all 0.15s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                      }}
                    >
                      <div style={{
                        width: 18, height: 18, borderRadius: 4,
                        border: checked ? 'none' : '1.5px solid #d4cfc7',
                        background: checked ? '#C9A84C' : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        {checked && (
                          <svg width="10" height="10" viewBox="0 0 10 10">
                            <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          </svg>
                        )}
                      </div>
                      {svc.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '15px',
                background: isSubmitting ? '#2d5075' : '#1B3A5C',
                color: '#fff',
                border: 'none',
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 700,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                letterSpacing: '0.3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                transition: 'background 0.15s',
              }}
            >
              {isSubmitting ? (
                <>
                  <div style={{ width: 18, height: 18, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                  Loading your calendar...
                </>
              ) : (
                <> {txt.ctaButton} →</>
              )}
            </button>

            {/* Subtext */}
            <p style={{ textAlign: 'center', color: '#9a9088', fontSize: 13, marginTop: 14, marginBottom: 0, lineHeight: 1.5 }}>
              {txt.ctaSubtext}
            </p>
          </div>
        </form>

        {/* Step 2 — Inline GHL Booking Widget */}
        {step === 'calendar' && (
          <div style={{ marginTop: 28 }}>
            {/* Calendar label */}
            <div style={{ marginBottom: 14 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#1B3A5C', letterSpacing: '0.06em', margin: 0 }}>
                {lang === 'en' ? txt.calendarStepLabel : lang === 'fr' ? txt.calendarStepLabelFr : txt.calendarStepLabelEs}
              </p>
            </div>
            {/* GHL widget renders here — no redirect, stays on this page */}
            <div
              id="ghl-calendar-container"
              style={{
                background: '#fff',
                borderRadius: 20,
                overflow: 'hidden',
                border: '1px solid #ede9e2',
                boxShadow: '0 2px 16px rgba(27,58,92,0.08)',
                minHeight: 520,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </div>
        )}

        {/* Disclaimer */}
        <p style={{ textAlign: 'center', fontSize: 12, color: '#b0a89e', marginTop: 20, lineHeight: 1.6 }}>
          {txt.disclaimer}
        </p>

      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; }
        body { margin: 0; }
        input::placeholder { color: #b0a89e; }
        input:focus { border-color: #C9A84C !important; }
      `}</style>
    </div>
  );
}
