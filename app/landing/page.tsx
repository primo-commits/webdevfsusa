"use client";

import { useState } from "react";

const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/p05l3tBveztzKCJ14Z6C/webhook-trigger/5V1Bsd31tHBTytuV3b9i";

const translations = {
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
    dashboardBusiness: "Mobile Detailing",
    dashboardLocation: "Phoenix, AZ",
    caseStudyLabel: "Real result from a FeeSlayers client",
    appointmentsLabel: "Appointments Last Month",
    cplLabel: "Cost Per Lead",
    spendLabel: "Facebook Ads Spend",
    howItWorksLabel: "How It Works",
    howItWorksTitle: "3 Steps to Your Free Trial",
    howItWorksSub: "A simple path from application to seeing real results from your Facebook ads.",
    step1Icon: "📅",
    step1Title: "Book Your Call",
    step1Desc: "Tell us about your business and marketing goals. We'll review your current situation and identify the best opportunity.",
    step2Icon: "📊",
    step2Title: "We Build Your Ads",
    step2Desc: "Once approved, we build and launch your Facebook ad campaign using real data and a strategy built for your industry.",
    step3Icon: "✅",
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
    ctaButtonForm: "Apply for Your Free Trial",
    ctaSubtext: "No commitment. No sales pressure. Just a real conversation about your business.",
    disclaimer: "By applying, you agree to be contacted by FeeSlayers regarding your free trial. No payment information required. No obligation.",
    footerDisclaimer: "FeeSlayers is not a lender and does not make credit decisions. Facebook ad management is separate from your ad spend budget, which you pay directly to Meta. Results may vary. This free trial offer is subject to eligibility and availability.",
    trustNoCc: "No credit card required",
    trustLeads: "Real leads, real calls",
    trustOwn: "You own your ad accounts",
    langLabel: "Language",
    langEn: "EN",
    langFr: "FR",
    langEs: "ES",
    confirmedTitle: "You're in.",
    confirmedSubtitle: "We'll call between 8:00 AM -- 5:00 PM on",
    sendingButton: "Sending…",
    checkInbox: "Check your inbox, we will send a confirmation email shortly.",
    validationError: "Please fill in all required fields.",
    validationPhone: "Please enter a valid phone number.",
    validationCallDate: "Please select a date.",
  },
  fr: {
    topBar: "Essais gratuits limits chaque mois -- nous selectionnons les entreprises qui correspondent a notre approche",
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
    dashboardBusiness: "Detailing Mobile",
    dashboardLocation: "Phoenix, AZ",
    caseStudyLabel: "Resultat reel d'un client FeeSlayers",
    appointmentsLabel: "Rendez-vous le mois dernier",
    cplLabel: "Cout par Lead",
    spendLabel: "Budget Facebook Ads",
    howItWorksLabel: "Comment ca marche",
    howItWorksTitle: "3 etapes vers votre essai gratuit",
    howItWorksSub: "Un processus simple de la candidature a l'obtention de resultats concrets sur Facebook.",
    step1Icon: "📅",
    step1Title: "Reservez Votre Appel",
    step1Desc: "Parlez-nous de votre entreprise et de vos objectifs marketing. Nous analysons votre situation et identifions la meilleure opportunite.",
    step2Icon: "📊",
    step2Title: "Nous Creons Vos Annonces",
    step2Desc: "Une fois approuve, nous concevons et lancons votre campagne Facebook avec des donnees reelles et une strategie adaptee a votre secteur.",
    step3Icon: "✅",
    step3Title: "Voyez les Resultats",
    step3Desc: "Apres 2 semaines, vous verrez exactement quel type de leads et d'appels est possible. Pas de pression, pas d'obligation.",
    formTitle: "Postuler pour un Essai Gratuit",
    formSub: "Cela prend 60 secondes. Aucune carte de credit requise.",
    countryLabel: "OU EST SITUEE VOTRE ENTREPRISE?",
    countryUs: "US -- Etats-Unis",
    countryCa: "CA -- Canada",
    businessNameLabel: "Nom de l'entreprise",
    businessNamePlaceholder: "Le nom de votre entreprise",
    phoneLabel: "Numero de telephone",
    phonePlaceholder: "(555) 000-0000",
    callDateLabel: "Meilleur jour pour vous appeler",
    callDateNote: "Nous appellerons entre 8h00 et 17h00",
    ctaButtonForm: "Postuler pour un Essai Gratuit",
    ctaSubtext: "Aucun engagement. Aucune pression commerciale. Juste une vraie conversation sur votre entreprise.",
    disclaimer: "En postulant, vous acceptez d'etre contacté par FeeSlayers concernant votre essai gratuit. Aucune information de paiement requise. Aucune obligation.",
    footerDisclaimer: "FeeSlayers n'est pas un preteur et ne prend pas de decisions de credit. La gestion des publicites Facebook est separate de votre budget publicitaire, que vous payez directement a Meta. Les resultats peuvent varier. Cette offre d'essai gratuit est soumise a l'eligibilite et a la disponibilite.",
    trustNoCc: "Aucune carte requise",
    trustLeads: "De vrais leads, de vrais appels",
    trustOwn: "Vous gardez vos comptes",
    langLabel: "Langue",
    langEn: "EN",
    langFr: "FR",
    langEs: "ES",
    confirmedTitle: "C'est en route.",
    confirmedSubtitle: "Nous appellerons entre 8h00 et 17h00 le",
    sendingButton: "Envoi…",
    checkInbox: "Surveillez votre boite de reception, nous vous enverrons un courriel de confirmation sous peu.",
    validationError: "Veuillez remplir tous les champs requis.",
    validationPhone: "Veuillez entrer un numero de telephone valide.",
    validationCallDate: "Veuillez selectionner une date.",
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
    heroScarcity: "Solo un puñado de pruebas gratuitas disponibles este mes",
    ctaButton: "Aplica para tu Prueba Gratuita",
    statYouOwn: "Tus cuentas te pertenecen",
    statNoCc: "Sin tarjeta requerida",
    statDays: "Dias de prueba gratis",
    dashboardLabel: "Tu Negocio",
    dashboardBusiness: "Detallado Movil",
    dashboardLocation: "Phoenix, AZ",
    caseStudyLabel: "Resultado real de un cliente FeeSlayers",
    appointmentsLabel: "Citas el Mes Pasado",
    cplLabel: "Costo por Lead",
    spendLabel: "Presupuesto Facebook Ads",
    howItWorksLabel: "Como Funciona",
    howItWorksTitle: "3 Pasos hacia tu Prueba Gratuita",
    howItWorksSub: "Un camino simple desde la solicitud hasta ver resultados reales en Facebook.",
    step1Icon: "📅",
    step1Title: "Reserva tu Llamada",
    step1Desc: "Cuentanos sobre tu negocio y tus objetivos de marketing. Revisaremos tu situacion actual e identificaremos la mejor oportunidad.",
    step2Icon: "📊",
    step2Title: "Creamos tus Anuncios",
    step2Desc: "Una vez aprobado, construimos y lanzamos tu campaña de Facebook con datos reales y una estrategia para tu industria.",
    step3Icon: "✅",
    step3Title: "Ve Resultados Reales",
    step3Desc: "Despues de 2 semanas, verás exactamente qué tipo de leads y llamadas son posibles. Sin presión, sin obligación.",
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
    ctaButtonForm: "Aplica para tu Prueba Gratuita",
    ctaSubtext: "Sin compromiso. Sin presion de venta. Solo una conversacion real sobre tu negocio.",
    disclaimer: "Al aplicar, aceptas ser contactado por FeeSlayers sobre tu prueba gratuita. No se requiere informacion de pago. Ninguna obligacion.",
    footerDisclaimer: "FeeSlayers no es un prestamista y no toma decisiones de credito. La gestion de anuncios de Facebook es independiente de tu presupuesto publicitaire, que pagas directamente a Meta. Los resultados pueden variar. Esta oferta de prueba gratuita esta sujeta a elegibilidad y disponibilidad.",
    trustNoCc: "Sin tarjeta requerida",
    trustLeads: "Leads reales, llamadas reales",
    trustOwn: "Tus cuentas te pertenecen",
    langLabel: "Idioma",
    langEn: "EN",
    langFr: "FR",
    langEs: "ES",
    confirmedTitle: "Listo.",
    confirmedSubtitle: "Llamaremos entre 8:00 AM y 5:00 PM el",
    sendingButton: "Enviando…",
    checkInbox: "Revisa tu bandeja de entrada, te enviaremos un correo de confirmacion en breve.",
    validationError: "Por favor completa todos los campos requeridos.",
    validationPhone: "Por favor ingresa un numero de telefono valido.",
    validationCallDate: "Por favor selecciona una fecha.",
  },
};

function formatDate(dateStr: string, lang: string): string {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  if (lang === "fr") return d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
  if (lang === "es") return d.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" });
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

const css = `
  :root {
    --navy: #1B3A5C;
    --navy-dark: #0f2338;
    --navy-light: #254b7a;
    --gold: #C9A84C;
    --gold-light: #d4b876;
    --gold-dark: #a88a3a;
    --cream: #F9F6F1;
    --bg-dark: #0b1520;
    --bg-card: #112035;
    --bg-elevated: #1a2e4a;
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    --text-muted: #64748b;
    --border: rgba(255,255,255,0.06);
    --success: #10b981;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Inter', sans-serif; background: var(--bg-dark); color: var(--text-primary); line-height: 1.7; -webkit-font-smoothing: antialiased; }

  .top-bar {
    background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
    border-bottom: 1px solid rgba(201,168,76,0.2);
    color: var(--gold);
    text-align: center;
    padding: 10px 20px;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.3px;
  }

  header {
    background: rgba(11,21,32,0.9);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    padding: 0 24px;
    height: 68px;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .header-inner {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo { font-size: 1.4rem; font-weight: 800; color: white; text-decoration: none; letter-spacing: -0.5px; }
  .logo span { color: var(--gold); }

  .nav-links { display: flex; gap: 2rem; align-items: center; font-size: 0.875rem; font-weight: 500; }
  .nav-links a { color: var(--text-secondary); text-decoration: none; transition: color 0.2s; }
  .nav-links a:hover { color: var(--gold); }

  .lang-switcher { display: flex; gap: 4px; }
  .lang-btn {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 4px 8px;
    font-size: 0.75rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.5px;
  }
  .lang-btn:hover { color: var(--gold); border-color: rgba(201,168,76,0.3); }
  .lang-btn.active { background: rgba(201,168,76,0.1); color: var(--gold); border-color: rgba(201,168,76,0.3); }

  .hero {
    min-height: 85vh;
    display: flex;
    align-items: center;
    padding: 5rem 24px;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: -30%;
    left: -10%;
    width: 60%;
    height: 80%;
    background: radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 60%);
    filter: blur(60px);
    pointer-events: none;
  }

  .hero::after {
    content: '';
    position: absolute;
    bottom: -20%;
    right: -5%;
    width: 50%;
    height: 70%;
    background: radial-gradient(ellipse, rgba(27,58,92,0.4) 0%, transparent 60%);
    filter: blur(80px);
    pointer-events: none;
  }

  .hero-inner {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
  }

  .hero-text { max-width: 560px; }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(201,168,76,0.08);
    border: 1px solid rgba(201,168,76,0.2);
    color: var(--gold-light);
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 6px 14px;
    border-radius: 50px;
    margin-bottom: 1.5rem;
  }

  .hero-title {
    font-size: clamp(2.2rem, 5vw, 3.4rem);
    font-weight: 800;
    color: white;
    line-height: 1.1;
    margin-bottom: 1.25rem;
    letter-spacing: -0.5px;
  }

  .highlight {
    background: linear-gradient(135deg, var(--gold), var(--gold-light));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .hero-description {
    font-size: 1.15rem;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
    line-height: 1.7;
  }

  .hero-scarcity {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(201,168,76,0.06);
    border: 1px solid rgba(201,168,76,0.2);
    color: var(--gold-light);
    font-size: 0.875rem;
    font-weight: 600;
    padding: 8px 18px;
    border-radius: 50px;
    margin-bottom: 2rem;
  }

  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, var(--gold), var(--gold-dark));
    color: var(--navy-dark);
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 16px 32px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.25s ease;
    box-shadow: 0 4px 30px rgba(201,168,76,0.3);
    font-family: 'Inter', sans-serif;
  }

  .cta-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 50px rgba(201,168,76,0.45);
  }

  .hero-stats {
    display: flex;
    gap: 2.5rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
    margin-top: 1rem;
  }

  .hero-stat-value { font-size: 1.75rem; font-weight: 800; color: var(--gold); line-height: 1.2; }
  .hero-stat-label { font-size: 0.8rem; color: var(--text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; }

  .hero-visual { display: flex; justify-content: center; align-items: center; position: relative; }

  .hero-card-stack {
    width: 100%;
    max-width: 440px;
    background: var(--bg-card);
    border: 1px solid rgba(201,168,76,0.15);
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: 0 0 60px rgba(201,168,76,0.1), 0 20px 60px rgba(0,0,0,0.4);
    position: relative;
  }

  .hero-card-stack::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(201,168,76,0.2), transparent 50%);
    z-index: -1;
  }

  .case-study-tag {
    display: inline-block;
    background: rgba(16,185,129,0.08);
    border: 1px solid rgba(16,185,129,0.2);
    color: #10b981;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 4px 10px;
    border-radius: 50px;
    margin-bottom: 1.25rem;
  }

  .steps-section { background: var(--bg-dark); padding: 5rem 24px; }
  .section-inner { max-width: 1200px; margin: 0 auto; }
  .section-header { text-align: center; max-width: 640px; margin: 0 auto 3rem; }
  .section-label { display: block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2.5px; color: var(--gold); margin-bottom: 0.75rem; }
  .section-title { font-size: clamp(1.8rem, 4vw, 2.5rem); font-weight: 800; color: white; margin-bottom: 0.75rem; line-height: 1.2; }
  .section-sub { color: var(--text-secondary); font-size: 1rem; }

  .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
  .step-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 1.75rem;
    transition: all 0.3s ease;
  }
  .step-card:hover { border-color: rgba(201,168,76,0.25); transform: translateY(-4px); }
  .step-icon { width: 48px; height: 48px; background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.15); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 1rem; }
  .step-card h3 { font-size: 1rem; color: white; margin-bottom: 0.5rem; }
  .step-card p { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; }

  .form-section { background: var(--bg-card); padding: 5rem 24px; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .form-inner { max-width: 520px; margin: 0 auto; }
  .form-card { background: var(--bg-elevated); border: 1px solid rgba(201,168,76,0.2); border-radius: 20px; padding: 2.5rem; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
  .form-card h2 { font-size: 1.5rem; font-weight: 800; color: white; margin-bottom: 0.4rem; text-align: center; font-family: 'Inter', sans-serif; }
  .form-sub { text-align: center; color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 2rem; }
  .form-group { margin-bottom: 1.25rem; }
  .form-group label { display: block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--gold-light); margin-bottom: 6px; font-family: 'Inter', sans-serif; }
  .form-group input {
    width: 100%;
    padding: 12px 16px;
    border: 1.5px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    color: white;
    background: rgba(255,255,255,0.04);
    transition: border-color 0.2s, box-shadow 0.2s;
    outline: none;
    box-sizing: border-box;
  }
  .form-group input:focus { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(201,168,76,0.12); background: rgba(201,168,76,0.04); }
  .form-group input::placeholder { color: var(--text-muted); }
  input[type="date"] { color-scheme: dark; }

  .country-toggle { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 1.5rem; }
  .country-btn {
    padding: 10px 14px;
    border-radius: 10px;
    border: 1.5px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.04);
    color: var(--text-secondary);
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    font-family: 'Inter', sans-serif;
    text-align: center;
  }
  .country-btn.active { border-color: var(--gold); background: rgba(201,168,76,0.08); color: var(--gold); }

  .cta-btn-full {
    display: block;
    width: 100%;
    background: linear-gradient(135deg, var(--gold), var(--gold-dark));
    color: var(--navy-dark);
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 16px 24px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: 0 4px 25px rgba(201,168,76,0.3);
    font-family: 'Inter', sans-serif;
  }
  .cta-btn-full:hover { transform: translateY(-2px); box-shadow: 0 8px 40px rgba(201,168,76,0.45); }
  .cta-btn-full:disabled { transform: none; cursor: not-allowed; opacity: 0.7; }

  .form-disclaimer { text-align: center; font-size: 0.78rem; color: var(--text-muted); margin-top: 1rem; line-height: 1.5; font-family: 'Inter', sans-serif; }

  .trust-section { background: var(--bg-dark); padding: 3rem 24px; }
  .trust-inner { max-width: 700px; margin: 0 auto; display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap; }
  .trust-item { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: var(--text-secondary); font-weight: 500; }
  .trust-icon { width: 36px; height: 36px; background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; color: var(--gold); }

  footer { background: #060d15; color: rgba(255,255,255,0.35); padding: 2rem 24px; text-align: center; font-size: 0.8rem; line-height: 1.6; font-family: 'Inter', sans-serif; }
  footer strong { color: var(--gold); }

  .error-msg { color: #f87171; font-size: 0.8rem; margin-top: 4px; display: block; }

  .confirmed-wrapper { min-height: 100vh; background: var(--bg-dark); display: flex; align-items: center; justify-content: center; padding: 24px; }
  .confirmed-card { background: var(--bg-card); border: 1px solid rgba(201,168,76,0.2); border-radius: 24px; padding: 48px 40px; max-width: 520px; width: 100%; text-align: center; box-shadow: 0 0 60px rgba(201,168,76,0.1), 0 20px 60px rgba(0,0,0,0.4); }
  .confirmed-logo { display: flex; justify-content: center; margin-bottom: 28px; }
  .confirmed-check { width: 64px; height: 64px; border-radius: 50%; background: rgba(16,185,129,0.1); border: 2px solid rgba(16,185,129,0.3); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
  .confirmed-title { font-size: 2rem; font-weight: 800; color: white; margin-bottom: 0.5rem; font-family: 'Inter', sans-serif; }
  .confirmed-sub { font-size: 1rem; color: var(--text-secondary); margin-bottom: 4px; font-family: 'Inter', sans-serif; }
  .confirmed-date { font-size: 1.25rem; font-weight: 700; color: var(--gold); margin-bottom: 24px; font-family: 'Inter', sans-serif; text-transform: capitalize; }
  .confirmed-inbox { background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 12px; padding: 16px 20px; text-align: left; }
  .confirmed-inbox p { font-size: 0.875rem; color: var(--text-secondary); margin: 0; font-family: 'Inter', sans-serif; line-height: 1.6; }

  .spin { animation: spin 0.7s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }

  @media (max-width: 768px) {
    .hero-inner { grid-template-columns: 1fr; }
    .hero-visual { display: none; }
    .steps-grid { grid-template-columns: 1fr; }
    .hero-stats { gap: 1.5rem; }
    .trust-inner { gap: 1.5rem; }
    .form-card { padding: 1.75rem 1.25rem; }
    .nav-links { display: none; }
    .confirmed-card { padding: 32px 24px; }
  }
`;

export default function LandingPage() {
  const [lang, setLang] = useState<"en" | "fr" | "es">("en");
  const [view, setView] = useState<"form" | "confirmed">("form");
  const [country, setCountry] = useState<"us" | "ca">("us");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [callDate, setCallDate] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [confirmedDate, setConfirmedDate] = useState("");

  const t = translations[lang];

  function validate() {
    const errs: Record<string, string> = {};
    if (!businessName.trim()) errs.businessName = t.validationError;
    if (!phone.trim() || phone.replace(/\D/g, "").length < 10) errs.phone = t.validationPhone;
    if (!callDate) errs.callDate = t.validationCallDate;
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSending(true);
    setConfirmedDate(callDate);

    const firstName = businessName.trim().split(" ")[0];

    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, phone, businessName, country, callDate }),
      });
    } catch (_) {
      // non-blocking
    }

    setView("confirmed");
    setSending(false);
  }

  if (view === "confirmed") {
    return (
      <div className="confirmed-wrapper">
        <style>{css}</style>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
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
          <p className="confirmed-date">{formatDate(confirmedDate, lang)}</p>
          <div className="confirmed-inbox">
            <p>{t.checkInbox}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <style>{css}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Top Bar */}
      <div className="top-bar">{t.topBar}</div>

      {/* Header */}
      <header>
        <div className="header-inner">
          <a href="#" className="logo">FEE<span>SLAYERS</span></a>
          <nav className="nav-links">
            <a href="#how-it-works">{t.navHowItWorks}</a>
            <a href="#apply">{t.navApply}</a>
          </nav>
          <div className="lang-switcher">
            {(["en", "fr", "es"] as const).map((l) => (
              <button key={l} className={`lang-btn ${lang === l ? "active" : ""}`} onClick={() => setLang(l)}>
                {l === "en" ? t.langEn : l === "fr" ? t.langFr : t.langEs}
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
              {t.heroTitle1} <span className="highlight">{t.heroTitle2}</span> {t.heroTitle3}
            </h1>
            <p className="hero-description">{t.heroDesc}</p>
            <div className="hero-scarcity">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path stroke="currentColor" strokeWidth="2" d="M12 7v5l3 3"/>
              </svg>
              {t.heroScarcity}
            </div>
            <a href="#apply" className="cta-btn">{t.ctaButton}</a>
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
              <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "2px", color: "var(--gold)", marginBottom: "0.5rem" }}>{t.dashboardLabel}</div>
                <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "white" }}>{t.dashboardBusiness}</div>
                <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>{t.dashboardLocation}</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "12px", padding: "1rem", textAlign: "center" }}>
                  <div style={{ fontSize: "1.75rem", fontWeight: "800", color: "var(--gold)" }}>150</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", marginTop: "4px" }}>{t.appointmentsLabel}</div>
                </div>
                <div style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: "12px", padding: "1rem", textAlign: "center" }}>
                  <div style={{ fontSize: "1.75rem", fontWeight: "800", color: "#10b981" }}>$9.00</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", marginTop: "4px" }}>{t.cplLabel}</div>
                </div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "1rem", textAlign: "center" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{t.spendLabel}</div>
                <div style={{ fontSize: "1.1rem", fontWeight: "700", color: "white", marginTop: "0.25rem" }}>$1,350 / month</div>
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
              <div className="step-icon">{t.step1Icon}</div>
              <h3>{t.step1Title}</h3>
              <p>{t.step1Desc}</p>
            </div>
            <div className="step-card">
              <div className="step-icon">{t.step2Icon}</div>
              <h3>{t.step2Title}</h3>
              <p>{t.step2Desc}</p>
            </div>
            <div className="step-card">
              <div className="step-icon">{t.step3Icon}</div>
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
              <div style={{ marginBottom: "1.5rem" }}>
                <p style={{ fontSize: "0.7rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--gold-light)", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>{t.countryLabel}</p>
                <div className="country-toggle">
                  {(["us", "ca"] as const).map((c) => (
                    <button key={c} type="button" className={`country-btn ${country === c ? "active" : ""}`} onClick={() => setCountry(c)}>
                      {c === "us" ? t.countryUs : t.countryCa}
                    </button>
                  ))}
                </div>
              </div>

              {/* Business name */}
              <div className="form-group">
                <label>{t.businessNameLabel}</label>
                <input
                  type="text"
                  placeholder={t.businessNamePlaceholder}
                  value={businessName}
                  onChange={(e) => { setBusinessName(e.target.value); setErrors((p) => { const u = { ...p }; delete u.businessName; return u; }); }}
                />
                {errors.businessName && <span className="error-msg">{errors.businessName}</span>}
              </div>

              {/* Phone */}
              <div className="form-group">
                <label>{t.phoneLabel}</label>
                <input
                  type="tel"
                  placeholder={t.phonePlaceholder}
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); setErrors((p) => { const u = { ...p }; delete u.phone; return u; }); }}
                />
                {errors.phone && <span className="error-msg">{errors.phone}</span>}
              </div>

              {/* Date */}
              <div className="form-group">
                <label>{t.callDateLabel}</label>
                <input
                  type="date"
                  value={callDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => { setCallDate(e.target.value); setErrors((p) => { const u = { ...p }; delete u.callDate; return u; }); }}
                />
                {errors.callDate && <span className="error-msg">{errors.callDate}</span>}
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "6px" }}>{t.callDateNote}</p>
              </div>

              <button type="submit" className="cta-btn-full" disabled={sending}>
                {sending ? (
                  <>
                    <span style={{ display: "inline-block", width: 16, height: 16, border: "2.5px solid rgba(27,58,92,0.4)", borderTopColor: "#0f2338", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
                    {t.sendingButton}
                  </>
                ) : t.ctaButtonForm}
              </button>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textAlign: "center", marginTop: "12px", fontFamily: "'Inter', sans-serif" }}>{t.ctaSubtext}</p>
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
        <strong>FeeSlayers</strong> {t.footerDisclaimer}
      </footer>
    </div>
  );
}
