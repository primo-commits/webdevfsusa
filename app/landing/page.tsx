'use client';

import { useState, useEffect, useRef } from 'react';

type Language = 'en' | 'es' | 'fr';
type Step = 1 | 2 | 3;

interface FormData {
  businessName: string;
  email: string;
  phone: string;
  services: string[];
}

interface Translation {
  heroTitle: string;
  heroSubtitle: string;
  step1Title: string;
  step1Subtitle: string;
  businessNamePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  servicesLabel: string;
  serviceOptions: { value: string; label: string }[];
  nextButton: string;
  backButton: string;
  calendarTitle: string;
  calendarSubtitle: string;
  loadingCalendar: string;
  confirmationTitle: string;
  confirmationMessage: string;
  footerDisclaimer: string;
  validationError: string;
  formLabels: {
    businessName: string;
    email: string;
    phone: string;
    services: string;
  };
}

const translations: Record<Language, Translation> = {
  en: {
    heroTitle: 'Book a Free Strategy Call',
    heroSubtitle: 'See how FeeSlayers can bring you more customers — with zero upfront cost.',
    step1Title: 'Tell us about your business',
    step1Subtitle: 'It only takes 30 seconds.',
    businessNamePlaceholder: "Your shop's name",
    emailPlaceholder: 'Your email address',
    phonePlaceholder: 'Your phone number',
    servicesLabel: 'What do you need?',
    serviceOptions: [
      { value: 'google', label: 'More Google calls & reviews' },
      { value: 'facebook', label: 'Facebook & Instagram ads' },
      { value: 'financing', label: 'Customer financing options' },
      { value: 'processing', label: 'Credit card processing' },
      { value: 'crm', label: 'CRM & follow-up automation' },
      { value: 'all', label: 'Everything — full growth bundle' },
    ],
    nextButton: 'Next Step',
    backButton: 'Back',
    calendarTitle: 'Pick a time that works for you',
    calendarSubtitle: "We'll call you at the number you provided.",
    loadingCalendar: 'Loading calendar...',
    confirmationTitle: "You're booked!",
    confirmationMessage: "Check your inbox — we've sent you a calendar invite with all the details. Talk soon.",
    footerDisclaimer: 'FeeSlayers is not a lender and does not make credit decisions.',
    validationError: 'Please fill in all fields.',
    formLabels: {
      businessName: 'Business Name',
      email: 'Email',
      phone: 'Phone',
      services: 'Services',
    },
  },
  es: {
    heroTitle: 'Reserva una Llamada de Estrategia Gratis',
    heroSubtitle: 'Descubre cómo FeeSlayers puede traerte más clientes — sin costo inicial.',
    step1Title: 'Cuéntanos sobre tu negocio',
    step1Subtitle: 'Solo toma 30 segundos.',
    businessNamePlaceholder: 'Nombre de tu negocio',
    emailPlaceholder: 'Tu correo electrónico',
    phonePlaceholder: 'Tu número de teléfono',
    servicesLabel: '¿Qué necesitas?',
    serviceOptions: [
      { value: 'google', label: 'Más llamadas y reseñas en Google' },
      { value: 'facebook', label: 'Anuncios en Facebook e Instagram' },
      { value: 'financing', label: 'Opciones de financiamiento para clientes' },
      { value: 'processing', label: 'Procesamiento de tarjetas de crédito' },
      { value: 'crm', label: 'Automatización de CRM y seguimiento' },
      { value: 'all', label: 'Todo — paquete completo de crecimiento' },
    ],
    nextButton: 'Siguiente Paso',
    backButton: 'Atrás',
    calendarTitle: 'Elige un horario que te funcione',
    calendarSubtitle: 'Te llamaremos al número que proporcionaste.',
    loadingCalendar: 'Cargando calendario...',
    confirmationTitle: '¡Estás reservado!',
    confirmationMessage: 'Revisa tu bandeja de entrada — te enviamos una invitación con todos los detalles. Hablamos pronto.',
    footerDisclaimer: 'FeeSlayers no es un prestamista y no toma decisiones de crédito.',
    validationError: 'Por favor completa todos los campos.',
    formLabels: {
      businessName: 'Nombre del Negocio',
      email: 'Correo',
      phone: 'Teléfono',
      services: 'Servicios',
    },
  },
  fr: {
    heroTitle: 'Reservez un Appel Strategique Gratuit',
    heroSubtitle: 'Decouvrez comment FeeSlayers peut vous apporter plus de clients — sans frais initiaux.',
    step1Title: 'Parlez-nous de votre entreprise',
    step1Subtitle: 'Cela ne prend que 30 secondes.',
    businessNamePlaceholder: 'Le nom de votre entreprise',
    emailPlaceholder: 'Votre adresse courriel',
    phonePlaceholder: 'Votre numero de telephone',
    servicesLabel: 'De quoi avez-vous besoin?',
    serviceOptions: [
      { value: 'google', label: 'Plus d\'appels et d\'avis Google' },
      { value: 'facebook', label: 'Publicites Facebook et Instagram' },
      { value: 'financing', label: 'Options de financement client' },
      { value: 'processing', label: 'Traitement des cartes de credit' },
      { value: 'crm', label: 'Automatisation CRM et suivi' },
      { value: 'all', label: 'Tout — forfait croissance complet' },
    ],
    nextButton: 'Etape Suivante',
    backButton: 'Retour',
    calendarTitle: 'Choisissez un moment qui vous convient',
    calendarSubtitle: 'Nous vous appellerons au numero que vous avez fourni.',
    loadingCalendar: 'Chargement du calendrier...',
    confirmationTitle: 'Vous etes inscrit!',
    confirmationMessage: 'Verifiez votre boite de reception — nous vous avons envoye une invitation avec tous les details. A bientot.',
    footerDisclaimer: 'FeeSlayers n\'est pas un preteur et ne prend pas de decisions de credit.',
    validationError: 'Veuillez remplir tous les champs.',
    formLabels: {
      businessName: 'Nom de l\'entreprise',
      email: 'Courriel',
      phone: 'Telephone',
      services: 'Services',
    },
  },
};

declare global {
  interface Window {
    GoHighLevel?: {
      Calendar?: {
        init: (options: { containerId: string; locationId: string }) => { open: () => void };
      };
    };
  }
}

export default function LandingPage() {
  const [lang, setLang] = useState<Language>('en');
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    email: '',
    phone: '',
    services: [],
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const calendarContainerRef = useRef<HTMLDivElement>(null);
  const calendarInitializedRef = useRef(false);
  const t = translations[lang];

  useEffect(() => {
    const saved = localStorage.getItem('fs_lang') as Language | null;
    if (saved === 'en' || saved === 'es' || saved === 'fr') setLang(saved);
  }, []);

  const toggleLang = (l: Language) => {
    setLang(l);
    localStorage.setItem('fs_lang', l);
  };

  const toggleService = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(value)
        ? prev.services.filter((s) => s !== value)
        : [...prev.services, value],
    }));
  };

  const validateStep1 = () => {
    const newErrors: Partial<Record<keyof FormData, boolean>> = {};
    if (!formData.businessName.trim()) newErrors.businessName = true;
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = true;
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) newErrors.phone = true;
    if (formData.services.length === 0) newErrors.services = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    if (!validateStep1()) return;
    setIsSubmitting(true);
    setStep(2);

    // Inject contact fields into GHL calendar URL
    const phoneParam = encodeURIComponent(formData.phone);
    const emailParam = encodeURIComponent(formData.email);
    const nameParam = encodeURIComponent(formData.businessName);
    const serviceParam = formData.services.join(',');
    const calendarUrl = `https://api.leadconnectorhq.com/widget/booking/6Y4RUBqnucK62JXW4J8A?phone=${phoneParam}&email=${emailParam}&first_name=${nameParam}&customQuestion=${serviceParam}`;

    await new Promise((r) => setTimeout(r, 500));

    const checkGHL = setInterval(() => {
      if (calendarInitializedRef.current) return;
      const container = document.getElementById('ghl-calendar-container');
      if (!container || container.querySelector('iframe, .ghl-widget')) return;

      const iframe = document.createElement('iframe');
      iframe.src = calendarUrl;
      iframe.style.width = '100%';
      iframe.style.minHeight = '600px';
      iframe.style.border = 'none';
      iframe.style.borderRadius = '12px';
      iframe.allow = 'camera; microphone';
      container.appendChild(iframe);
      calendarInitializedRef.current = true;
      setIsSubmitting(false);
      clearInterval(checkGHL);
    }, 300);

    setTimeout(() => {
      clearInterval(checkGHL);
      if (!calendarInitializedRef.current) {
        const container = document.getElementById('ghl-calendar-container');
        if (container && !container.querySelector('iframe')) {
          const iframe = document.createElement('iframe');
          iframe.src = calendarUrl;
          iframe.style.width = '100%';
          iframe.style.minHeight = '600px';
          iframe.style.border = 'none';
          iframe.style.borderRadius = '12px';
          iframe.allow = 'camera; microphone';
          container.appendChild(iframe);
        }
        setIsSubmitting(false);
        calendarInitializedRef.current = true;
      }
    }, 4000);
  };

  const handleConfirmation = () => setStep(3);

  return (
    <div style={{ background: '#F9F6F1', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 20px' }}>
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
            <button onClick={() => toggleLang('en')} style={{ background: lang === 'en' ? '#1B3A5C' : 'transparent', color: lang === 'en' ? '#fff' : '#1B3A5C', border: '1.5px solid #1B3A5C', borderRadius: 6, padding: '5px 10px', fontSize: 13, cursor: 'pointer', fontWeight: 600 }}>EN</button>
            <button onClick={() => toggleLang('fr')} style={{ background: lang === 'fr' ? '#1B3A5C' : 'transparent', color: lang === 'fr' ? '#fff' : '#1B3A5C', border: '1.5px solid #1B3A5C', borderRadius: 6, padding: '5px 10px', fontSize: 13, cursor: 'pointer', fontWeight: 600 }}>FR</button>
            <button onClick={() => toggleLang('es')} style={{ background: lang === 'es' ? '#1B3A5C' : 'transparent', color: lang === 'es' ? '#fff' : '#1B3A5C', border: '1.5px solid #1B3A5C', borderRadius: 6, padding: '5px 10px', fontSize: 13, cursor: 'pointer', fontWeight: 600 }}>ES</button>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{ display: 'flex', gap: 8, marginTop: 16, marginBottom: 28 }}>
          {[1, 2, 3].map((s) => (
            <div key={s} style={{ flex: 1, height: 4, borderRadius: 99, background: step >= s ? '#1B3A5C' : '#d1ccc5' }} />
          ))}
        </div>

        {/* Step 1: Form */}
        {step === 1 && (
          <div style={{ background: '#fff', borderRadius: 20, padding: '36px 32px', boxShadow: '0 2px 16px rgba(27,58,92,0.08)', border: '1px solid #ede9e2' }}>
            <h1 style={{ fontSize: 24, fontWeight: 800, color: '#1B3A5C', marginBottom: 4, lineHeight: 1.2 }}>{t.step1Title}</h1>
            <p style={{ color: '#6b6560', fontSize: 15, marginBottom: 28 }}>{t.step1Subtitle}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1B3A5C', marginBottom: 6 }}>{t.formLabels.businessName}</label>
                <input type="text" placeholder={t.businessNamePlaceholder} value={formData.businessName} onChange={(e) => setFormData((p) => ({ ...p, businessName: e.target.value }))} style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: errors.businessName ? '2px solid #e53e3e' : '1.5px solid #d4cfc7', fontSize: 15, boxSizing: 'border-box', outline: 'none', transition: 'border-color 0.15s', color: '#1B3A5C', background: '#fafaf8' }} onFocus={(e) => e.target.style.borderColor = '#C9A84C'} onBlur={(e) => e.target.style.borderColor = errors.businessName ? '#e53e3e' : '#d4cfc7'} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1B3A5C', marginBottom: 6 }}>{t.formLabels.email}</label>
                <input type="email" placeholder={t.emailPlaceholder} value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: errors.email ? '2px solid #e53e3e' : '1.5px solid #d4cfc7', fontSize: 15, boxSizing: 'border-box', outline: 'none', transition: 'border-color 0.15s', color: '#1B3A5C', background: '#fafaf8' }} onFocus={(e) => e.target.style.borderColor = '#C9A84C'} onBlur={(e) => e.target.style.borderColor = errors.email ? '#e53e3e' : '#d4cfc7'} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1B3A5C', marginBottom: 6 }}>{t.formLabels.phone}</label>
                <input type="tel" placeholder={t.phonePlaceholder} value={formData.phone} onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))} style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: errors.phone ? '2px solid #e53e3e' : '1.5px solid #d4cfc7', fontSize: 15, boxSizing: 'border-box', outline: 'none', transition: 'border-color 0.15s', color: '#1B3A5C', background: '#fafaf8' }} onFocus={(e) => e.target.style.borderColor = '#C9A84C'} onBlur={(e) => e.target.style.borderColor = errors.phone ? '#e53e3e' : '#d4cfc7'} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1B3A5C', marginBottom: 8 }}>{t.servicesLabel}</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {t.serviceOptions.map((opt) => {
                    const checked = formData.services.includes(opt.value);
                    return (
                      <button key={opt.value} type="button" onClick={() => toggleService(opt.value)} style={{ padding: '11px 14px', borderRadius: 10, border: checked ? '2px solid #1B3A5C' : '1.5px solid #d4cfc7', background: checked ? '#1B3A5C' : '#fafaf8', color: checked ? '#fff' : '#6b6560', fontSize: 14, cursor: 'pointer', textAlign: 'left', fontWeight: 500, transition: 'all 0.15s', display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 18, height: 18, borderRadius: 4, border: checked ? 'none' : '1.5px solid #d4cfc7', background: checked ? '#C9A84C' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          {checked && <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>}
                        </div>
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {Object.keys(errors).length > 0 && (
              <p style={{ color: '#e53e3e', fontSize: 13, marginTop: 12 }}>{t.validationError}</p>
            )}

            <button onClick={handleNext} style={{ width: '100%', marginTop: 24, padding: '15px', background: '#1B3A5C', color: '#fff', border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: 'pointer', letterSpacing: '0.3px' }}>{t.nextButton} →</button>
          </div>
        )}

        {/* Step 2: Calendar */}
        {step === 2 && (
          <div>
            <button onClick={() => setStep(1)} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: '#6b6560', fontSize: 14, cursor: 'pointer', marginBottom: 16, padding: 0 }}>← {t.backButton}</button>
            <div style={{ background: '#fff', borderRadius: 20, padding: '32px 28px', boxShadow: '0 2px 16px rgba(27,58,92,0.08)', border: '1px solid #ede9e2' }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#1B3A5C', marginBottom: 4 }}>{t.calendarTitle}</h2>
              <p style={{ color: '#6b6560', fontSize: 15, marginBottom: 24 }}>{t.calendarSubtitle}</p>
              <div ref={calendarContainerRef} id="ghl-calendar-container" style={{ minHeight: 600, borderRadius: 12 }}>
                {isSubmitting && (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 400, gap: 12 }}>
                    <div style={{ width: 40, height: 40, border: '3px solid #ede9e2', borderTopColor: '#C9A84C', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                    <p style={{ color: '#6b6560', fontSize: 14 }}>{t.loadingCalendar}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div style={{ background: '#fff', borderRadius: 20, padding: '48px 36px', boxShadow: '0 2px 16px rgba(27,58,92,0.08)', border: '1px solid #ede9e2', textAlign: 'center' }}>
            <div style={{ width: 72, height: 72, background: '#1B3A5C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M8 16l6 6L24 10" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: '#1B3A5C', marginBottom: 12 }}>{t.confirmationTitle}</h2>
            <p style={{ color: '#6b6560', fontSize: 16, lineHeight: 1.6, maxWidth: 420, margin: '0 auto 28px' }}>{t.confirmationMessage}</p>
            <button onClick={() => window.location.href = '/us'} style={{ padding: '13px 28px', background: '#1B3A5C', color: '#fff', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>← Back to feeslayers.com</button>
          </div>
        )}

        {/* Footer */}
        {step !== 3 && (
          <p style={{ textAlign: 'center', fontSize: 12, color: '#a09990', marginTop: 24, marginBottom: 8, lineHeight: 1.5 }}>{t.footerDisclaimer}</p>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; }
        body { margin: 0; }
        input::placeholder { color: #a09990; }
      `}</style>
    </div>
  );
}
