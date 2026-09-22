import type { Dictionary } from './types'

export const de: Dictionary = {
  a11y: {
    skipToContent: 'Zum Inhalt springen',
  },
  theme: {
    switchToLight: 'Zum hellen Design wechseln',
    switchToDark: 'Zum dunklen Design wechseln',
  },
  language: {
    label: 'Sprache ändern',
  },
  nav: {
    label: 'Seitennavigation',
    about: 'Über mich',
    experience: 'Erfahrung',
    projects: 'Projekte',
    contact: 'Kontakt',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
  },
  hero: {
    eyebrow: 'Full-Stack-Entwickler · React · TypeScript',
    headline: 'Ich entwickle saubere, schnelle Webprodukte.',
    status: 'Offen für neue Möglichkeiten',
    subline:
      'Entwicklung mit React, TypeScript und Node.js — mit Blick auf Performance, Barrierefreiheit und Detail.',
    viewWork: 'Projekte ansehen',
    viewCv: 'Lebenslauf ansehen',
    cvLabel: 'Lebenslauf',
    cvPreview: 'Vorschau',
    cvDownload: 'Herunterladen',
  },
  techMarquee: {
    caption: 'Tools und Technologien, mit denen ich arbeite',
  },
  profile: {
    heading: 'Profilübersicht',
    about:
      'Junior Full-Stack-Entwickler mit einer Höheren Fachausbildung in Webanwendungsentwicklung, derzeit tätig an Produktionsfunktionen bei VyA Projects. Sicher im gesamten Stack — von React-Oberflächen bis zu PHP, SQL und Strapi — mit einem Gespür für sauberen Code, Code-Reviews und strukturierte, Jira-basierte Auslieferung.',
    roleLabel: 'Rolle',
    roleValue: 'Junior Full-Stack-Entwickler — VyA Projects',
    educationLabel: 'Ausbildung',
    educationValue: 'Höhere Fachausbildung — Webanwendungsentwicklung (DAW), DigitechFP',
    certificationValue: 'AI Fundamentals — Google (Coursera)',
    languagesLabel: 'Sprachen',
    languagesValue: 'Spanisch (Muttersprache) · Englisch (B2, Cambridge-zertifiziert)',
    connectLabel: 'Kontakt',
    contactModal: {
      heading: 'Nachricht senden',
      explain:
        'Dies öffnet dein E-Mail-Programm mit vorausgefüllter Nachricht — von dieser Seite wird nichts gesendet.',
      nameLabel: 'Name',
      namePlaceholder: 'Dein Name',
      emailLabel: 'Deine E-Mail',
      emailPlaceholder: 'du@beispiel.com',
      messageLabel: 'Nachricht',
      messagePlaceholder: 'Was möchtest du sagen?',
      send: 'E-Mail-Programm öffnen',
      close: 'Schließen',
      whatsappCta: 'Oder schreib mir auf WhatsApp',
      subjectTemplate: 'Portfolio-Kontakt von {name}',
    },
  },
  experience: {
    heading: 'Erfahrung',
    subheading: 'Wo ich diesen Stack eingesetzt habe.',
    items: [
      {
        id: 'vya',
        role: 'Junior Full-Stack-Entwickler',
        company: 'VyA Projects',
        location: 'Remote, Spanien',
        dateRange: 'Dez 2025 – Jun 2026',
        description:
          'Entwicklung und Wartung von Funktionen für mehrere Produktions-Webanwendungen — Oberflächen, Dark Mode, wiederverwendbare Komponenten, Formulare — über Jira- und Git-basierte Review-Workflows.',
      },
      {
        id: 'universalTelecom',
        role: 'Praktikant Webentwicklung',
        company: 'Universal Telecom',
        location: 'Málaga, Spanien',
        dateRange: 'Mär 2025 – Jun 2025',
        description:
          'Überarbeitung der Oberfläche und der Kalenderkomponente einer Unternehmenswebsite, Ergänzung um AJAX/Fetch-Funktionen und automatisierte PHP-Berichte.',
      },
    ],
  },
  projects: {
    heading: 'Ausgewählte Projekte',
    subheading: 'Eine Auswahl an Full-Stack-Projekten, Oberflächen und Web-Erlebnissen.',
    viewCode: 'Code ansehen',
    items: [
      {
        id: 'eventflow',
        title: 'EventFlow',
        description:
          'Full-Stack-Anwendung zur Verwaltung von Terminen, Aufgaben und Erinnerungen mit Authentifizierung, interaktivem Kalender und mehreren Planungsansichten.',
      },
      {
        id: 'dulceEncanto',
        title: 'Dulce Encanto',
        description:
          'Full-Stack-Website für eine Bäckerei mit Produktkatalog und Verwaltungstools, entwickelt mit PHP, MySQL, Bootstrap und JavaScript.',
      },
      {
        id: 'happyPaws',
        title: 'Happy Paws',
        description:
          'Frontend-Landingpage für Tierdienstleistungen, basierend auf einer Vorlage und angepasst mit HTML, CSS und JavaScript. Enthält Slider, Galerie, Leistungen, Angebote und Inhalte zur Vermittlung.',
      },
      {
        id: 'malagaSupercars',
        title: 'Malaga Supercars',
        description:
          'Akademischer Full-Stack-Fahrzeugkatalog mit Suchfiltern und MySQL-Persistenz, entwickelt mit HTML, CSS und PHP.',
      },
    ],
  },
  strengths: {
    heading: 'Was ich mitbringe',
    subheading: 'Ein paar Dinge, die in keiner Tech-Stack-Liste stehen.',
    reviewedLabel: 'Geprüft',
    items: [
      {
        title: 'Schnell lernfähig',
        description:
          'Vom Bootcamp zu produktiven Features in Monaten — ich arbeite mich schnell in neue Stacks, Tools und Codebasen ein.',
      },
      {
        title: 'Echte Praxiserfahrung',
        description:
          'Oberflächen, Dark Mode, wiederverwendbare Komponenten und Formulare in zwei Unternehmen ausgeliefert — über echte Jira-Tickets und Git-basierte Code-Reviews, nicht bloß eigene Nebenprojekte.',
      },
      {
        title: 'KI-gestützte Entwicklung mit Urteilsvermögen',
        description:
          'Sicher im Umgang mit Tools wie Cursor, ChatGPT, Claude und Gemini, um schneller voranzukommen — aber immer mit dem Urteilsvermögen zu entscheiden, was beibehalten, hinterfragt oder neu geschrieben wird.',
      },
    ],
  },
  contact: {
    heading: 'Lass uns zusammenarbeiten',
    subheading: 'Offen für Festanstellungen und Freelance-Projekte.',
    whatsapp: 'WhatsApp',
    copyEmail: 'E-Mail kopieren',
    copyPhone: 'Telefonnummer kopieren',
    copied: 'Kopiert!',
  },
  footer: {
    github: 'GitHub-Profil',
    linkedin: 'LinkedIn-Profil',
    whatsapp: 'WhatsApp',
  },
}
