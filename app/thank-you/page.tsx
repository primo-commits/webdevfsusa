'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Language = 'en' | 'fr' | 'es';

const t: Record<Language, {
  eyebrow: string;
  title: string;
  subtitle: string;
  dateNote: string;
  painTitle: string;
  painSubtitle: string;
  servicesTitle: string;
  servicesSubtitle: string;
  ctaLabel: string;
  ctaNote: string;
  footer: string;
  industries: { label: string; pain: string }[];
}> = {
  en: {
    eyebrow: 'Your request is confirmed.',
    title: "We'll be in touch soon.",
    subtitle: "Thanks for reaching out. A FeeSlayers advisor will call between 8:00 AM – 5:00 PM on your selected date to walk through your situation.",
    dateNote: "Check your inbox, we've sent a confirmation email.",
    painTitle: "Sound familiar?",
    painSubtitle: "These are the exact problems keeping service businesses stuck.",
    servicesTitle: "What we help with",
    servicesSubtitle: "We've seen these patterns across auto repair shops, HVAC companies, home service businesses, and more.",
    ctaLabel: "Explore FeeSlayers.com",
    ctaNote: "No commitment required.",
    footer: "FeeSlayers is not a lender and does not make credit decisions. Financing provided through third-party lenders.",
    industries: [
      { label: 'Auto Repair', pain: 'You built a website in 2010. It still shows your old address — and customers can\'t find you.' },
      { label: 'Home Services', pain: 'You tried Facebook Ads. Spent $300. Got 3 likes from your cousin and your mom.' },
      { label: 'HVAC & Plumbing', pain: 'Your Google listing looks exactly like every other contractor in your zip code.' },
      { label: 'Any Service Business', pain: "You're too busy running the business to figure out online marketing — and agencies have burned you before." },
    ],
  },
  fr: {
    eyebrow: 'Votre demande est confirmée.',
    title: 'Nous vous contacterons bientôt.',
    subtitle: "Merci de nous avoir contactés. Un conseiller FeeSlayers vous appellera entre 8h et 17h à la date sélectionnée pour discuter de votre situation.",
    dateNote: "Consultez votre boîte de réception — nous avons envoyé un courriel de confirmation.",
    painTitle: "Ça vous dit quelque chose?",
    painSubtitle: "Ce sont les problèmes exacts qui bloquent les entreprises de services.",
    servicesTitle: "Ce qu'on aide à résoudre",
    servicesSubtitle: "On a vu ces patrons dans les ateliers de réparation auto, les entreprises de CVC, les services à domicile, et plus encore.",
    ctaLabel: 'Explorer FeeSlayers.com',
    ctaNote: 'Aucun engagement requis.',
    footer: "FeeSlayers n'est pas un prêteur et ne prend pas de décisions de crédit. Financement fourni par des prêteurs tiers.",
    industries: [
      { label: 'Réparation auto', pain: "T'as fait ton site web en 2010. Il montre encore ton ancienne adresse — et les clients te trouvent pas." },
      { label: 'Services à domicile', pain: "T'as essayé les Facebook Ads. Dépensé 300 $. Obtenu 3 mentions j'aime de ta cousine et ta mère." },
      { label: 'CVC & Plomberie', pain: "Ton annonce Google ressemble exactement à tous les autres entrepreneurs dans ton code postal." },
      { label: "Toute entreprise de services", pain: "T'es trop occupé à gérer l'entreprise pour comprendre le marketing en ligne — et les agences t'ont déjà brûlé." },
    ],
  },
  es: {
    eyebrow: 'Tu solicitud está confirmada.',
    title: 'Nos pondremos en contacto pronto.',
    subtitle: 'Gracias por comunicarte. Un asesor de FeeSlayers te llamará entre 8:00 AM y 5:00 PM en la fecha seleccionada para hablar sobre tu situación.',
    dateNote: 'Revisa tu bandeja de entrada — te hemos enviado un correo de confirmación.',
    painTitle: '¿Te suena familiar?',
    painSubtitle: 'Estos son los problemas exactos que mantienen estancados a los negocios de servicios.',
    servicesTitle: 'En qué ayudamos',
    servicesSubtitle: 'Hemos visto estos patrones en talleres de reparación, empresas de HVAC, negocios de servicios para el hogar, y más.',
    ctaLabel: 'Explorar FeeSlayers.com',
    ctaNote: 'Sin compromiso requerido.',
    footer: 'FeeSlayers no es un prestamista y no toma decisiones de crédito. Financiamiento proporcionado por prestamistas terceros.',
    industries: [
      { label: 'Reparación de autos', pain: 'Hiciste tu sitio web en el 2010. Todavía muestra tu vieja dirección — y los clientes no te encuentran.' },
      { label: 'Servicios para el hogar', pain: 'Intentaste Facebook Ads. Gastaste $300. Obtuviste 3 likes de tu prima y tu mamá.' },
      { label: 'HVAC y Plomería', pain: 'Tu perfil de Google se ve exactamente igual que todos los demás contratistas en tu código postal.' },
      { label: 'Cualquier negocio de servicios', pain: 'Estás muy ocupado corriendo el negocio para entender el marketing en línea — y las agencias ya te han quemado antes.' },
    ],
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

export default function ThankYouPage() {
  const [lang, setLang] = useState<Language>('en');
  const [confirmedDate, setConfirmedDate] = useState('');

  useEffect(() => {
    // Read language
    const savedLang = localStorage.getItem('fs_lang') as Language | null;
    if (savedLang && (savedLang === 'en' || savedLang === 'fr' || savedLang === 'es')) {
      setLang(savedLang);
    }

    // Read confirmed date from URL params
    const params = new URLSearchParams(window.location.search);
    const date = params.get('date') || '';
    setConfirmedDate(date);
  }, []);

  const txt = t[lang];
  const formattedDate = formatDate(confirmedDate, lang);

  return (
    <div style={{ minHeight: '100vh', background: '#1B3A5C', fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>

      {/* Nav */}
      <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 900, margin: '0 auto' }}>
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="38" rx="8" fill="#F5F0E8" fillOpacity="0.1" />
          <path d="M32 0 H38 V6 Q38 0 32 0 Z" fill="#C9A84C" />
          <text x="6" y="27" fontFamily="Inter, Helvetica, Arial, sans-serif" fontWeight="700" fontSize="19" fill="#F5F0E8" letterSpacing="-0.5">F</text>
          <text x="20" y="27" fontFamily="Inter, Helvetica, Arial, sans-serif" fontWeight="700" fontSize="19" fill="#C9A84C" letterSpacing="-0.5">S</text>
        </svg>
        <div style={{ display: 'flex', gap: 6 }}>
          {(['en', 'fr', 'es'] as Language[]).map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); localStorage.setItem('fs_lang', l); }}
              style={{
                background: lang === l ? '#C9A84C' : 'transparent',
                color: lang === l ? '#1B3A5C' : 'rgba(245,240,232,0.5)',
                border: lang === l ? 'none' : '1.5px solid rgba(245,240,232,0.2)',
                borderRadius: 6,
                padding: '5px 10px',
                fontSize: 12,
                cursor: 'pointer',
                fontWeight: 700,
                transition: 'all 0.15s',
              }}
            >
              {l === 'en' ? 'EN' : l === 'fr' ? 'FR' : 'ES'}
            </button>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '48px 24px 40px', textAlign: 'center' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: '2px solid #C9A84C', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M5 14l6 6.5L23 8" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: '#C9A84C', margin: '0 0 12px', textTransform: 'uppercase' }}>
          {txt.eyebrow}
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: '#F5F0E8', margin: '0 0 16px', lineHeight: 1.2 }}>
          {formattedDate ? `${txt.title}` : txt.title}
        </h1>
        {formattedDate && (
          <p style={{ fontSize: 17, color: '#F5F0E8', margin: '0 0 8px', fontWeight: 600 }}>
            {lang === 'fr' ? 'On vous appelle le' : lang === 'es' ? 'Te llamamos el' : 'We\'ll call on'}{' '}
            <span style={{ color: '#C9A84C' }}>{formattedDate}</span>
          </p>
        )}
        <p style={{ fontSize: 16, color: 'rgba(245,240,232,0.65)', margin: '0 0 20px', lineHeight: 1.6, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
          {txt.subtitle}
        </p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 8, padding: '10px 16px' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 5l5 4 7-6" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: 13, color: 'rgba(245,240,232,0.7)' }}>{txt.dateNote}</span>
        </div>
      </div>

      {/* Pain Points */}
      <div style={{ background: '#F9F6F1', padding: '60px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#C9A84C', margin: '0 0 8px', textTransform: 'uppercase' }}>
              {lang === 'fr' ? 'Problèmes courants' : lang === 'es' ? 'Problemas comunes' : 'Common Problems'}
            </p>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#1B3A5C', margin: 0 }}>{txt.painTitle}</h2>
            <p style={{ fontSize: 15, color: '#6b6560', margin: '8px 0 0' }}>{txt.painSubtitle}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {txt.industries.map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 14, padding: '24px', border: '1px solid rgba(27,58,92,0.08)', boxShadow: '0 2px 8px rgba(27,58,92,0.05)' }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: '#C9A84C', margin: '0 0 8px', textTransform: 'uppercase' }}>{item.label}</p>
                <p style={{ fontSize: 14, color: '#0D1B2A', margin: 0, lineHeight: 1.6, fontWeight: 400 }}>{item.pain}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What we help with */}
      <div style={{ background: '#1B3A5C', padding: '60px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#C9A84C', margin: '0 0 8px', textTransform: 'uppercase' }}>
            {lang === 'fr' ? 'Notre expertise' : lang === 'es' ? 'Nuestra experiencia' : 'Our Expertise'}
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#F5F0E8', margin: '0 0 8px' }}>{txt.servicesTitle}</h2>
          <p style={{ fontSize: 15, color: 'rgba(245,240,232,0.6)', margin: '0 0 36px' }}>{txt.servicesSubtitle}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
            {[
              { icon: '🔍', label: lang === 'fr' ? 'Profil Google' : lang === 'es' ? 'Perfil de Google' : 'Google Profile' },
              { icon: '📱', label: lang === 'fr' ? 'Publicités Meta' : lang === 'es' ? 'Anuncios Meta' : 'Meta Ads' },
              { icon: '💳', label: lang === 'fr' ? 'Financement' : lang === 'es' ? 'Financiamiento' : 'Financing' },
              { icon: '💳', label: lang === 'fr' ? 'Traitement' : lang === 'es' ? 'Procesamiento' : 'Processing' },
              { icon: '💰', label: lang === 'fr' ? "Capital d'affaires" : lang === 'es' ? 'Capital' : 'Capital' },
              { icon: '🌐', label: lang === 'fr' ? 'Site web' : lang === 'es' ? 'Sitio web' : 'Website' },
            ].map((s, i) => (
              <div key={i} style={{ background: 'rgba(245,240,232,0.06)', border: '1px solid rgba(245,240,232,0.1)', borderRadius: 12, padding: '18px 12px', textAlign: 'center' }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#F5F0E8', margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA strip */}
      <div style={{ background: '#C9A84C', padding: '40px 24px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: '#1B3A5C', margin: '0 0 8px' }}>
            {lang === 'fr' ? 'Passez en revue vos options maintenant.' : lang === 'es' ? 'Revisa tus opciones ahora.' : 'Review your options now.'}
          </h3>
          <p style={{ fontSize: 14, color: '#1B3A5C', opacity: 0.7, margin: '0 0 24px' }}>{txt.ctaNote}</p>
          <Link
            href="/us"
            style={{
              display: 'inline-block',
              background: '#1B3A5C',
              color: '#F5F0E8',
              padding: '14px 32px',
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
            }}
          >
            {txt.ctaLabel} →
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: '#0D1B2A', padding: '20px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, color: 'rgba(245,240,232,0.35)', margin: 0, lineHeight: 1.6 }}>{txt.footer}</p>
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; }
      `}</style>
    </div>
  );
}
