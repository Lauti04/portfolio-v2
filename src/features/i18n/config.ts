export const locales = ['es', 'en', 'fr', 'de', 'pt', 'it', 'nl', 'ca'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'es'

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}
