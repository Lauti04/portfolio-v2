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
  profile: {
    heading: string
    about: string
    roleLabel: string
    roleValue: string
    educationLabel: string
    educationValue: string
    languagesLabel: string
    languagesValue: string
    stackLabel: string
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
}
