import type { Dictionary } from './types'

export const ca: Dictionary = {
  a11y: {
    skipToContent: 'Vés al contingut',
  },
  theme: {
    switchToLight: 'Canvia al tema clar',
    switchToDark: 'Canvia al tema fosc',
  },
  language: {
    label: "Canvia d'idioma",
  },
  nav: {
    label: 'Navegació de la pàgina',
    about: 'Sobre mi',
    experience: 'Experiència',
    projects: 'Projectes',
    contact: 'Contacte',
  },
  hero: {
    eyebrow: 'Desenvolupador Full-Stack · React · TypeScript',
    headline: 'Construeixo productes web nets i ràpids.',
    status: 'Obert a noves oportunitats',
    subline:
      "Desenvolupament amb React, TypeScript i Node.js — amb cura pel rendiment, l'accessibilitat i el detall.",
    viewWork: 'Veure projectes',
    viewCv: 'Veure CV',
    cvLabel: 'CV',
    cvPreview: 'Vista prèvia',
    cvDownload: 'Descarregar',
  },
  techMarquee: {
    caption: 'Eines i tecnologies amb què treballo',
  },
  profile: {
    heading: 'Resum del perfil',
    about:
      "Desenvolupador Full-Stack Júnior amb un Cicle Formatiu de Grau Superior en Desenvolupament d'Aplicacions Web, actualment construint funcionalitats en producció a VyA Projects. Còmode en tot l'stack — d'interfícies en React a PHP, SQL i Strapi — amb l'hàbit de codi net, revisió de codi i lliuraments estructurats mitjançant Jira.",
    roleLabel: 'Rol',
    roleValue: 'Desenvolupador Full-Stack Júnior — VyA Projects',
    educationLabel: 'Educació',
    educationValue:
      "Cicle Formatiu de Grau Superior — Desenvolupament d'Aplicacions Web (DAW), DigitechFP",
    certificationValue: 'AI Fundamentals — Google (Coursera)',
    languagesLabel: 'Idiomes',
    languagesValue: 'Espanyol (natiu) · Anglès (B2, certificat Cambridge)',
    connectLabel: 'Contacte',
    contactModal: {
      heading: 'Enviar un missatge',
      explain:
        "Això obre el teu client de correu amb el missatge ja emplenat — no s'envia res des d'aquesta pàgina.",
      nameLabel: 'Nom',
      namePlaceholder: 'El teu nom',
      emailLabel: 'El teu correu',
      emailPlaceholder: 'tu@exemple.com',
      messageLabel: 'Missatge',
      messagePlaceholder: "Què t'agradaria dir?",
      send: 'Obrir client de correu',
      close: 'Tancar',
      whatsappCta: 'O escriu-me per WhatsApp',
      subjectTemplate: 'Contacte des del portfolio de {name}',
    },
  },
  experience: {
    heading: 'Experiència',
    subheading: 'On he posat aquest stack a treballar.',
    items: [
      {
        id: 'vya',
        role: 'Desenvolupador Full-Stack Júnior',
        company: 'VyA Projects',
        location: 'En remot, Espanya',
        dateRange: 'Des 2025 – Jun 2026',
        description:
          'Desenvolupament i manteniment de funcionalitats en diverses aplicacions web en producció — interfícies, mode fosc, components reutilitzables, formularis — mitjançant fluxos de revisió basats en Jira i Git.',
      },
      {
        id: 'universalTelecom',
        role: 'Becari de Desenvolupament Web',
        company: 'Universal Telecom',
        location: 'Màlaga, Espanya',
        dateRange: 'Mar 2025 – Jun 2025',
        description:
          'Redisseny de la interfície i del component de calendari d\'un lloc corporatiu, afegint funcionalitats AJAX/Fetch i informes automatitzats en PHP.',
      },
    ],
  },
  projects: {
    heading: 'Projectes Seleccionats',
    subheading: 'Una selecció de projectes full-stack, interfícies i experiències web.',
    viewCode: 'Veure el codi',
    items: [
      {
        id: 'eventflow',
        title: 'EventFlow',
        description:
          'Aplicació full-stack per gestionar esdeveniments, tasques i recordatoris, amb autenticació, un calendari interactiu i diverses vistes de planificació.',
      },
      {
        id: 'dulceEncanto',
        title: 'Dulce Encanto',
        description:
          'Lloc web full-stack per a una pastisseria, amb catàleg de productes i eines d\'administració, desenvolupat amb PHP, MySQL, Bootstrap i JavaScript.',
      },
      {
        id: 'happyPaws',
        title: 'Happy Paws',
        description:
          "Landing page frontend per a serveis d'animals, basada en una plantilla i adaptada amb HTML, CSS i JavaScript. Inclou eslàider, galeria, serveis, ofertes i contingut d'adopció.",
      },
      {
        id: 'malagaSupercars',
        title: 'Malaga Supercars',
        description:
          'Catàleg de vehicles full-stack acadèmic amb filtres de cerca i persistència en MySQL, desenvolupat amb HTML, CSS i PHP.',
      },
    ],
  },
  strengths: {
    heading: 'Què aporto',
    subheading: 'Algunes coses que no es veuen en una llista de tecnologies.',
    reviewedLabel: 'Revisat',
    items: [
      {
        title: 'Aprenentatge ràpid',
        description:
          "Vaig passar d'una formació professional a llançar funcionalitats en producció en mesos — còmode adaptant-me ràpidament a nous stacks, eines i bases de codi.",
      },
      {
        title: 'Experiència real en producció',
        description:
          'Interfícies, mode fosc, components reutilitzables i formularis lliurats en dues empreses — amb tiquets reals de Jira i revisió de codi basada en Git, no projectes personals solts.',
      },
      {
        title: 'Desenvolupament assistit per IA amb criteri',
        description:
          'Còmode fent servir eines com Cursor, ChatGPT, Claude i Gemini per anar més ràpid — però sempre amb el criteri per decidir què mantenir, qüestionar o reescriure.',
      },
    ],
  },
  contact: {
    heading: 'Treballem junts?',
    subheading: 'Obert a llocs a temps complet i projectes freelance.',
    whatsapp: 'WhatsApp',
    copyEmail: 'Copiar correu',
    copyPhone: 'Copiar telèfon',
    copied: 'Copiat!',
  },
  footer: {
    github: 'Perfil de GitHub',
    linkedin: 'Perfil de LinkedIn',
    whatsapp: 'WhatsApp',
  },
}
