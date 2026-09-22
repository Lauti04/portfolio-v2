import { locales, type Locale } from '@/features/i18n/config'

const SOURCE_FILES: Partial<Record<Locale, string>> = {
  es: '/cv/lautaro-johnston-cv-es.pdf',
  en: '/cv/lautaro-johnston-cv-en.pdf',
}

/** CV file per locale — falls back to the English CV for locales without their own translated one. */
export const CV_FILES: Record<Locale, string> = Object.fromEntries(
  locales.map((code) => [code, SOURCE_FILES[code] ?? SOURCE_FILES.en]),
) as Record<Locale, string>
