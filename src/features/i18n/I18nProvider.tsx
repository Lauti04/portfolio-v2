import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { defaultLocale, isLocale, type Locale } from './config'
import { dictionaries } from './dictionaries'
import { I18nContext } from './i18n-context'

const STORAGE_KEY = 'locale'

function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && isLocale(stored)) return stored

    const fromNavigator = navigator.language.slice(0, 2)
    if (isLocale(fromNavigator)) return fromNavigator
  } catch {
    // Ignore storage/navigator access errors and fall back to the default.
  }
  return defaultLocale
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const setLocale = useCallback((next: Locale) => setLocaleState(next), [])

  const value = useMemo(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
