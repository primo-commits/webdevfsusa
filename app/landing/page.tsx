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
  callDateLabel: string;
  callDateNote: string;
  servicesLabel: string;
  services: { value: ServiceValue; label: string }[];
  ctaButton: string;
  ctaSubtext: string;
  disclaimer: string;
  validationError: string;
  validationEmail: string;
  validationPhone: string;
  validationServices: string;
  validationCallDate: string;
  langEn: string;
  langFr: string;
  langEs: string;
  confirmedTitle: string;
  confirmedSubtitle: string;
  confirmedDateLabel: string;
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
    callDateLabel: 'Best day to call you',
    callDateNote: 'We\'ll call between 8:00 AM – 5:00 PM',
    servicesLabel: 'Which services are you interested in? (select all that apply)',
    services: [
      { value: 'google_business_profile', label: 'Google Business Profile' },
      { value: 'facebook_meta_advertising', label: 'Facebook & Meta Advertising' },
      { value: 'consumer_financing', label: 'Consumer Financing' },
      { value: 'website_development', label: 'Website Development' },
      { value: 'payment_processing', label: 'Payment Processing' },
      { value: 'business_capital', label: 'Business Capital' },
    ],
    ctaButton: 'Request Your Free Strategy Call',
    ctaSubtext: 'No commitment. No sales pressure. Just a real conversation about your business.',
    disclaimer: 'FeeSlayers is not a lender and does not make credit decisions. Financing provided through third-party lenders.',
    validationError: 'Please fill in all required fields.',
    validationEmail: 'Please enter a valid email address.',
    validationPhone: 'Please enter a valid phone number.',
    validationServices: 'Please select at least one service.',
    validationCallDate: 'Please select a date.',
    langEn: 'EN',
    langFr: 'FR',
    langEs: 'ES',
    confirmedTitle: 'You\'re in.',
    confirmedSubtitle: 'We\'ll call between 8:00 AM – 5:00 PM on',
    confirmedDateLabel: '',
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
    callDateLabel: ' Meilleur jour pour vous appeler',
    callDateNote: 'Nous appelerons entre 8h et 17h',
    servicesLabel: 'Quels services vous intéressent? (sélectionnez tous ceux qui s\'appliquent)',
    services: [
      { value: 'google_business_profile', label: 'Google Business Profile' },
      { value: 'facebook_meta_advertising', label: 'Publicité Facebook et Meta' },
      { value: 'consumer_financing', label: 'Financement aux consommateurs' },
      { value: 'website_development', label: 'Développement de sites web' },
      { value: 'payment_processing', label: 'Traitement des paiements' },
      { value: 'business_capital', label: 'Capital d\'affaires' },
    ],
    ctaButton: 'Demander Votre Appel Stratégique Gratuit',
    ctaSubtext: 'Aucun engagement. Aucune pression commerciale. Juste une vraie conversation sur votre entreprise.',
    disclaimer: 'FeeSlayers n\'est pas un prêteur et ne prend pas de décisions de crédit. Financement fourni par des prêteurs tiers.',
    validationError: 'Veuillez remplir tous les champs requis.',
    validationEmail: 'Veuillez entrer une adresse courriel valide.',
    validationPhone: 'Veuillez entrer un numéro de téléphone valide.',
    validationServices: 'Veuillez sélectionner au moins un service.',
    validationCallDate: 'Veuillez sélectionner une date.',
    langEn: 'EN',
    langFr: 'FR',
    langEs: 'ES',
    confirmedTitle: 'C\'est en route.',
    confirmedSubtitle: 'Nous vous appellerons entre 8h et 17h le',
    confirmedDateLabel: '',
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
    callDateLabel: 'Mejor día para llamarte',
    callDateNote: 'Llamaremos entre 8:00 AM y 5:00 PM',
    servicesLabel: '¿Qué servicios te interesan? (selecciona todos los que apliquen)',
    services: [
      { value: 'google_business_profile', label: 'Google Business Profile' },
      { value: 'facebook_meta_advertising', label: 'Publicidad Facebook y Meta' },
      { value: 'consumer_financing', label: 'Financiamiento al consumidor' },
      { value: 'website_development', label: 'Desarrollo web' },
      { value: 'payment_processing', label: 'Procesamiento de pagos' },
      { value: 'business_capital', label: 'Capital de negocio' },
    ],
    ctaButton: 'Solicita Tu Llamada Estratégica Gratis',
    ctaSubtext: 'Sin compromiso. Sin presión de venta. Solo una conversación real sobre tu negocio.',
    disclaimer: 'FeeSlayers no es un prestamista y no toma decisiones de crédito. Financiamiento proporcionado por prestamistas terceros.',
    validationError: 'Por favor completa todos los campos requeridos.',
    validationEmail: 'Por favor ingresa un correo electrónico válido.',
    validationPhone: 'Por favor ingresa un número de teléfono válido.',
    validationServices: 'Por favor selecciona al menos un servicio.',
    validationCallDate: 'Por favor selecciona una fecha.',
    langEn: 'EN',
    langFr: 'FR',
    langEs: 'ES',
    confirmedTitle: 'Listo.',
    confirmedSubtitle: 'Llamaremos entre 8:00 AM y 5:00 PM el',
    confirmedDateLabel: '',
  },
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────
type Step = 'form' | 'confirmed';

export default function LandingPage() {
  const [lang, setLang] = useState<Language>('en');
  const [step, setStep] = useState<Step>('form');
  const [country, setCountry] = useState<Country>('us');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [callDate, setCallDate] = useState('');
  const [selectedServices, setSelectedServices] = useState<ServiceValue[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedDate, setConfirmedDate] = useState('');

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
    if (!callDate) errs.callDate = txt.validationCallDate;
    if (selectedServices.length === 0) errs.services = txt.validationServices;
    return errs;
  };

  const formatDate = (dateStr: string): string => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-').map(Number);
    const d = new Date(year, month - 1, day);
    if (lang === 'fr') {
      return d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
    }
    if (lang === 'es') {
      return d.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
    }
    return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    setConfirmedDate(callDate);

    const firstName = businessName.trim().split(' ')[0];

    // POST to Make.com webhook → creates GHL contact
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
          callDate,
        }),
      });
    } catch {
      // Fail silently — user still sees confirmation
    }

    setStep('confirmed');
    setIsSubmitting(false);
  };

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    width: '100%',
    padding: '12px 14px',
    borderRadius: 10,
    border: `1.5px solid ${hasError ? '#e53e3e' : '#d4cfc7'}`,
    fontSize: 15,
    fontFamily: 'inherit',
    color: '#0D1B2A',
    background: '#fafaf8',
    outline: 'none',
    transition: 'border-color 0.15s',
    boxSizing: 'border-box',
  });

  // Confirmed screen
  if (step === 'confirmed') {
    const formattedDate = formatDate(confirmedDate);
    return (
      <div style={{ minHeight: '100vh', background: '#F9F6F1', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ background: '#fff', borderRadius: 20, padding: '40px 32px', maxWidth: 520, width: '100%', textAlign: 'center', boxShadow: '0 4px 24px rgba(27,58,92,0.08)' }}>

          {/* Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="52" height="52" rx="10" fill="#1B3A5C" />
              <path d="M44 0 H52 V8 Q52 0 44 0 Z" fill="#C9A84C" />
              <text x="8" y="37" fontFamily="Inter, Helvetica, Arial, sans-serif" fontWeight="700" fontSize="26" fill="#F5F0E8" letterSpacing="-1">F</text>
              <text x="28" y="37" fontFamily="Inter, Helvetica, Arial, sans-serif" fontWeight="700" fontSize="26" fill="#C9A84C" letterSpacing="-1">S</text>
            </svg>
          </div>

          {/* Checkmark */}
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#1B3A5C', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M6 15l6.5 7L24 9" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 800, color: '#1B3A5C', margin: '0 0 10px', fontFamily: 'inherit' }}>
            {txt.confirmedTitle}
          </h2>
          <p style={{ fontSize: 16, color: '#6b6560', margin: '0 0 6px', fontFamily: 'inherit' }}>
            {txt.confirmedSubtitle}
          </p>
          <p style={{ fontSize: 18, fontWeight: 700, color: '#1B3A5C', margin: '0 0 24px', fontFamily: 'inherit', textTransform: 'capitalize' }}>
            {formattedDate}
          </p>

          <div style={{ background: '#F9F6F1', borderRadius: 12, padding: '16px 20px', marginBottom: 24, textAlign: 'left' }}>
            <p style={{ fontSize: 13, color: '#6b6560', margin: 0, fontFamily: 'inherit', lineHeight: 1.6 }}>
              {lang === 'fr' ? 'Surveillez votre boîte de réception — nous vous enverrons un courriel de confirmation sous peu.' :
               lang === 'es' ? 'Revisa tu bandeja de entrada — te enviaremos un correo de confirmación en breve.' :
               'Check your inbox — we\'ll send a confirmation email shortly.'}
            </p>
          </div>

          <button
            onClick={() => { setStep('form'); setBusinessName(''); setEmail(''); setPhone(''); setCallDate(''); setSelectedServices([]); setErrors({}); }}
            style={{ background: 'none', border: 'none', color: '#C9A84C', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'underline' }}
          >
            {lang === 'fr' ? 'Soumettre une autre demande' :
             lang === 'es' ? 'Enviar otra solicitud' :
             'Submit another request'}
          </button>
        </div>

        <style>{`
          * { box-sizing: border-box; }
          body { margin: 0; }
        `}</style>
      </div>
    );
  }

  // ── Form step ─────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: '100vh', background: '#F9F6F1', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '24px 16px 60px' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ paddingTop: 24, paddingBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="38" height="38" rx="8" fill="#1B3A5C" />
              <path d="M32 0 H38 V6 Q38 0 32 0 Z" fill="#C9A84C" />
              <text x="6" y="27" fontFamily="Inter, Helvetica, Arial, sans-serif" fontWeight="700" fontSize="19" fill="#F5F0E8" letterSpacing="-0.5">F</text>
              <text x="20" y="27" fontFamily="Inter, Helvetica, Arial, sans-serif" fontWeight="700" fontSize="19" fill="#C9A84C" letterSpacing="-0.5">S</text>
            </svg>
            <span style={{ fontWeight: 700, fontSize: 18 }}><span style={{ color: '#1B3A5C' }}>Fee</span><span style={{ color: '#C9A84C' }}>Slayers</span></span>
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

        {/* Card */}
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ background: '#fff', borderRadius: 20, padding: '28px 28px 32px', boxShadow: '0 2px 16px rgba(27,58,92,0.07)' }}>

            {/* Country Toggle */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#1B3A5C', letterSpacing: '0.08em', margin: '0 0 10px' }}>
                {txt.countryLabel}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {(['us', 'ca'] as Country[]).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCountry(c)}
                    style={{
                      padding: '10px 14px',
                      borderRadius: 10,
                      border: country === c ? '2px solid #1B3A5C' : '1.5px solid #d4cfc7',
                      background: country === c ? '#1B3A5C' : '#fafaf8',
                      color: country === c ? '#fff' : '#6b6560',
                      fontSize: 13,
                      cursor: 'pointer',
                      fontWeight: 600,
                      textAlign: 'center',
                      transition: 'all 0.15s',
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
            <div style={{ marginBottom: 18 }}>
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

            {/* Call Date */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1B3A5C', marginBottom: 6 }}>
                {txt.callDateLabel} <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <input
                type="date"
                value={callDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => { setCallDate(e.target.value); setErrors((p) => { const n = { ...p }; delete n.callDate; return n; }); }}
                onFocus={(e) => { if (!errors.callDate) e.target.style.borderColor = '#C9A84C'; }}
                onBlur={(e) => { e.target.style.borderColor = errors.callDate ? '#e53e3e' : '#d4cfc7'; }}
                style={{ ...inputStyle(!!errors.callDate), colorScheme: 'light' }}
              />
              {errors.callDate && (
                <p style={{ color: '#e53e3e', fontSize: 12, marginTop: 5 }}>{errors.callDate}</p>
              )}
              <p style={{ fontSize: 12, color: '#6b6560', marginTop: 6 }}>{txt.callDateNote}</p>
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
                gap: 10,
                transition: 'background 0.2s',
              }}
            >
              {isSubmitting ? (
                <>
                  <div style={{ width: 18, height: 18, border: '2.5px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                  {lang === 'fr' ? 'Envoi…' : lang === 'es' ? 'Enviando…' : 'Sending…'}
                </>
              ) : txt.ctaButton}
            </button>
            <p style={{ fontSize: 12, color: '#b0a89e', textAlign: 'center', marginTop: 10 }}>{txt.ctaSubtext}</p>
          </div>

          <p style={{ textAlign: 'center', fontSize: 12, color: '#b0a89e', marginTop: 20, lineHeight: 1.6 }}>
            {txt.disclaimer}
          </p>
        </form>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; }
        body { margin: 0; }
        input::placeholder { color: #b0a89e; }
        input:focus { border-color: #C9A84C !important; }
        input[type="date"]::-webkit-calendar-picker-indicator { cursor: pointer; opacity: 0.6; }
        input[type="date"]::-webkit-calendar-picker-indicator:hover { opacity: 1; }
      `}</style>
    </div>
  );
}
