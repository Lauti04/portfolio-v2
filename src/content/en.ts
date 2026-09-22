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
  nav: {
    label: 'Page navigation',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
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
  techMarquee: {
    caption: 'Tools and technologies I work with',
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
    certificationValue: 'AI Fundamentals — Google (Coursera)',
    languagesLabel: 'Languages',
    languagesValue: 'Spanish (native) · English (B2)',
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
  projects: {
    heading: 'Selected Projects',
    subheading: 'A selection of full-stack projects, interfaces and web experiences.',
    viewCode: 'View code',
    items: [
      {
        id: 'eventflow',
        title: 'EventFlow',
        description:
          'Full-stack application for managing events, tasks and reminders, featuring authentication, an interactive calendar and multiple planning views.',
      },
      {
        id: 'dulceEncanto',
        title: 'Dulce Encanto',
        description:
          'Full-stack bakery website featuring a product catalogue and administration tools, built with PHP, MySQL, Bootstrap and JavaScript.',
      },
      {
        id: 'happyPaws',
        title: 'Happy Paws',
        description:
          'Frontend landing page for pet services, based on a template and adapted with HTML, CSS and JavaScript. It includes a slider, gallery, services, offers and adoption content.',
      },
      {
        id: 'malagaSupercars',
        title: 'Malaga Supercars',
        description:
          'Full-stack academic vehicle catalogue featuring search filters and MySQL persistence, built with HTML, CSS and PHP.',
      },
    ],
  },
  strengths: {
    heading: 'What I Bring',
    subheading: "A few things that don't show up in a tech-stack list.",
    reviewedLabel: 'Reviewed',
    items: [
      {
        title: 'Fast learner',
        description:
          'Went from a bootcamp to shipping production features in months — comfortable picking up new stacks, tools and codebases quickly.',
      },
      {
        title: 'Real production experience',
        description:
          'Shipped interfaces, dark mode, reusable components and forms across two companies — through real Jira tickets and Git-based code review, not solo side projects.',
      },
      {
        title: 'Judgment-driven AI-assisted development',
        description:
          'Comfortable using tools like Cursor and ChatGPT to move faster — but always with the judgment to decide what to keep, question, or rewrite.',
      },
    ],
  },
  contact: {
    heading: "Let's work together",
    subheading: 'Open to full-time roles and freelance projects.',
    whatsapp: 'WhatsApp',
    copyEmail: 'Copy email',
    copyPhone: 'Copy phone',
    copied: 'Copied!',
  },
  footer: {
    github: 'GitHub profile',
    linkedin: 'LinkedIn profile',
    whatsapp: 'WhatsApp',
  },
}
