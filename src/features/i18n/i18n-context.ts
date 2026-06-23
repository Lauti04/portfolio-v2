import { createContext, useContext } from 'react'
import type { Dictionary } from '@/content/types'
import type { Locale } from './config'

export interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  /** Resolved dictionary for the active locale. */
  t: Dictionary
}

export const I18nContext = createContext<I18nContextValue | null>(null)

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
