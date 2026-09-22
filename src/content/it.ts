import type { Dictionary } from './types'

export const it: Dictionary = {
  a11y: {
    skipToContent: 'Vai al contenuto',
  },
  theme: {
    switchToLight: 'Passa al tema chiaro',
    switchToDark: 'Passa al tema scuro',
  },
  language: {
    label: 'Cambia lingua',
  },
  nav: {
    label: 'Navigazione della pagina',
    about: 'Chi sono',
    experience: 'Esperienza',
    projects: 'Progetti',
    contact: 'Contatti',
  },
  hero: {
    eyebrow: 'Sviluppatore Full-Stack · React · TypeScript',
    headline: 'Creo prodotti web puliti e veloci.',
    status: 'Aperto a nuove opportunità',
    subline:
      'Sviluppo con React, TypeScript e Node.js — con attenzione a performance, accessibilità e dettaglio.',
    viewWork: 'Vedi i progetti',
    viewCv: 'Vedi CV',
    cvLabel: 'CV',
    cvPreview: 'Anteprima',
    cvDownload: 'Scarica',
  },
  techMarquee: {
    caption: 'Strumenti e tecnologie con cui lavoro',
  },
  profile: {
    heading: 'Panoramica del profilo',
    about:
      "Sviluppatore Full-Stack Junior con un Diploma Tecnico Superiore in Sviluppo di Applicazioni Web, attualmente impegnato nello sviluppo di funzionalità in produzione presso VyA Projects. A mio agio in tutto lo stack — dalle interfacce React a PHP, SQL e Strapi — con l'abitudine a un codice pulito, alla code review e a consegne strutturate tramite Jira.",
    roleLabel: 'Ruolo',
    roleValue: 'Sviluppatore Full-Stack Junior — VyA Projects',
    educationLabel: 'Formazione',
    educationValue: 'Diploma Tecnico Superiore — Sviluppo di Applicazioni Web (DAW), DigitechFP',
    certificationValue: 'AI Fundamentals — Google (Coursera)',
    languagesLabel: 'Lingue',
    languagesValue: 'Spagnolo (madrelingua) · Inglese (B2, certificato Cambridge)',
    connectLabel: 'Contatti',
    contactModal: {
      heading: 'Invia un messaggio',
      explain:
        'Questo apre il tuo client di posta con il messaggio già compilato — da questa pagina non viene inviato nulla.',
      nameLabel: 'Nome',
      namePlaceholder: 'Il tuo nome',
      emailLabel: 'La tua email',
      emailPlaceholder: 'tu@esempio.com',
      messageLabel: 'Messaggio',
      messagePlaceholder: 'Cosa vorresti dire?',
      send: 'Apri client di posta',
      close: 'Chiudi',
      whatsappCta: 'Oppure scrivimi su WhatsApp',
      subjectTemplate: 'Contatto dal portfolio di {name}',
    },
  },
  experience: {
    heading: 'Esperienza',
    subheading: 'Dove ho messo alla prova questo stack.',
    items: [
      {
        id: 'vya',
        role: 'Sviluppatore Full-Stack Junior',
        company: 'VyA Projects',
        location: 'Da remoto, Spagna',
        dateRange: 'Dic 2025 – Giu 2026',
        description:
          'Sviluppo e manutenzione di funzionalità su diverse applicazioni web in produzione — interfacce, modalità scura, componenti riutilizzabili, moduli — tramite workflow di revisione basati su Jira e Git.',
      },
      {
        id: 'universalTelecom',
        role: 'Tirocinante Sviluppo Web',
        company: 'Universal Telecom',
        location: 'Malaga, Spagna',
        dateRange: 'Mar 2025 – Giu 2025',
        description:
          "Rifacimento dell'interfaccia e del componente calendario di un sito aziendale, con aggiunta di funzionalità AJAX/Fetch e reportistica PHP automatizzata.",
      },
    ],
  },
  projects: {
    heading: 'Progetti Selezionati',
    subheading: 'Una selezione di progetti full-stack, interfacce ed esperienze web.',
    viewCode: 'Vedi il codice',
    items: [
      {
        id: 'eventflow',
        title: 'EventFlow',
        description:
          'Applicazione full-stack per gestire eventi, attività e promemoria, con autenticazione, calendario interattivo e diverse viste di pianificazione.',
      },
      {
        id: 'dulceEncanto',
        title: 'Dulce Encanto',
        description:
          'Sito web full-stack per una pasticceria, con catalogo prodotti e strumenti di amministrazione, sviluppato con PHP, MySQL, Bootstrap e JavaScript.',
      },
      {
        id: 'happyPaws',
        title: 'Happy Paws',
        description:
          'Landing page frontend per servizi per animali, basata su un template e adattata con HTML, CSS e JavaScript. Include slider, galleria, servizi, offerte e contenuti sull\'adozione.',
      },
      {
        id: 'malagaSupercars',
        title: 'Malaga Supercars',
        description:
          'Catalogo veicoli full-stack accademico con filtri di ricerca e persistenza MySQL, sviluppato con HTML, CSS e PHP.',
      },
    ],
  },
  strengths: {
    heading: 'Cosa porto',
    subheading: 'Alcune cose che non si vedono in un elenco di tecnologie.',
    reviewedLabel: 'Verificato',
    items: [
      {
        title: 'Apprendimento rapido',
        description:
          "Da un corso intensivo al rilascio di funzionalità in produzione in pochi mesi — a mio agio nell'imparare rapidamente nuovi stack, strumenti e codebase.",
      },
      {
        title: 'Esperienza reale in produzione',
        description:
          'Interfacce, modalità scura, componenti riutilizzabili e moduli rilasciati in due aziende — con veri ticket Jira e code review basate su Git, non progetti personali isolati.',
      },
      {
        title: "Sviluppo assistito dall'IA, con giudizio critico",
        description:
          "A mio agio con strumenti come Cursor, ChatGPT, Claude e Gemini per essere più veloce — ma sempre con il giudizio critico per decidere cosa mantenere, mettere in discussione o riscrivere.",
      },
    ],
  },
  contact: {
    heading: 'Lavoriamo insieme',
    subheading: 'Aperto a ruoli full-time e progetti freelance.',
    whatsapp: 'WhatsApp',
    copyEmail: 'Copia email',
    copyPhone: 'Copia telefono',
    copied: 'Copiato!',
  },
  footer: {
    github: 'Profilo GitHub',
    linkedin: 'Profilo LinkedIn',
    whatsapp: 'WhatsApp',
  },
}
