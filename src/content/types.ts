/** Closed set of project ids — keeps dictionary items and PROJECT_META in sync. */
export type ProjectId =
  | 'eventflow'
  | 'dulceEncanto'
  | 'happyPaws'
  | 'malagaSupercars'

/**
 * Shape of a translation dictionary. Every locale must implement this, so a
 * missing key is a compile-time error. Portfolio content namespaces (hero,
 * about, projects, ...) are added in Phase 3; for now it only covers the
 * application chrome rendered by the layout shell.
 */
export interface Dictionary {
  a11y: {
    skipToContent: string
  }
  theme: {
    switchToLight: string
    switchToDark: string
  }
  language: {
    label: string
  }
  nav: {
    label: string
    about: string
    experience: string
    projects: string
    contact: string
    openMenu: string
    closeMenu: string
  }
  hero: {
    eyebrow: string
    headline: string
    status: string
    subline: string
    viewWork: string
    viewCv: string
    cvLabel: string
    cvPreview: string
    cvDownload: string
  }
  techMarquee: {
    caption: string
  }
  profile: {
    heading: string
    about: string
    roleLabel: string
    roleValue: string
    educationLabel: string
    educationValue: string
    certificationValue: string
    languagesLabel: string
    languagesValue: string
    connectLabel: string
    contactModal: {
      heading: string
      explain: string
      nameLabel: string
      namePlaceholder: string
      emailLabel: string
      emailPlaceholder: string
      messageLabel: string
      messagePlaceholder: string
      send: string
      close: string
      whatsappCta: string
      subjectTemplate: string
    }
  }
  experience: {
    heading: string
    subheading: string
    items: {
      id: string
      role: string
      company: string
      location: string
      dateRange: string
      description: string
    }[]
  }
  projects: {
    heading: string
    subheading: string
    viewCode: string
    items: {
      id: ProjectId
      title: string
      description: string
    }[]
  }
  strengths: {
    heading: string
    subheading: string
    reviewedLabel: string
    items: {
      title: string
      description: string
    }[]
  }
  contact: {
    heading: string
    subheading: string
    whatsapp: string
    copyEmail: string
    copyPhone: string
    copied: string
  }
  footer: {
    github: string
    linkedin: string
    whatsapp: string
  }
}
