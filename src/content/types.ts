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
}
