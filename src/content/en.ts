import type { Dictionary } from './types'

export const en: Dictionary = {
  a11y: {
    skipToContent: 'Skip to content',
  },
  theme: {
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
  },
  language: {
    label: 'Change language',
  },
  hero: {
    eyebrow: 'Full-Stack Developer · React · TypeScript',
    headline: 'I build clean, fast web products.',
    status: 'Open to opportunities',
    subline:
      'Building with React, TypeScript and Node.js — with care for performance, accessibility and detail.',
    viewWork: 'View work',
    viewCv: 'View CV',
    cvLabel: 'CV',
    cvPreview: 'Preview',
    cvDownload: 'Download',
  },
  profile: {
    heading: 'Profile Snapshot',
    about:
      'Junior Full-Stack Developer with a Higher Technician Degree in Web Application Development, currently building production features at VyA Projects. Comfortable across the stack — from React interfaces to PHP, SQL and Strapi — with a habit of clean code, code review and structured, Jira-based delivery.',
    roleLabel: 'Role',
    roleValue: 'Junior Full-Stack Developer — VyA Projects',
    educationLabel: 'Education',
    educationValue:
      'Higher Technician Degree — Web Application Development (DAW)',
    languagesLabel: 'Languages',
    languagesValue: 'Spanish (native) · English (B2)',
    stackLabel: 'Stack',
    connectLabel: 'Connect',
    contactModal: {
      heading: 'Send a message',
      explain:
        'This opens your email client with your message pre-filled — nothing is sent from this page.',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Your email',
      emailPlaceholder: 'you@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'What would you like to say?',
      send: 'Open email client',
      close: 'Close',
      whatsappCta: 'Or message me on WhatsApp',
      subjectTemplate: 'Portfolio contact from {name}',
    },
  },
  experience: {
    heading: 'Experience',
    subheading: "Where I've put this stack to work.",
    items: [
      {
        id: 'vya',
        role: 'Junior Full-Stack Developer',
        company: 'VyA Projects',
        location: 'Remote, Spain',
        dateRange: 'Dec 2025 – Jun 2026',
        description:
          'Shipped and maintained features across several production web apps — interfaces, dark mode, reusable components, forms — through Jira and Git-based review workflows.',
      },
      {
        id: 'universalTelecom',
        role: 'Web Development Intern',
        company: 'Universal Telecom',
        location: 'Málaga, Spain',
        dateRange: 'Mar 2025 – Jun 2025',
        description:
          "Rebuilt a corporate site's interface and calendar component, adding AJAX/Fetch-driven features and automated PHP reporting.",
      },
    ],
  },
}
