import { locales } from '@/features/i18n/config'
import { useI18n } from '@/features/i18n/i18n-context'
import { cn } from '@/lib/cn'

export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n()

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className="inline-flex items-center rounded-lg bg-muted p-0.5 text-sm"
    >
      {locales.map((code) => {
        const active = code === locale
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={cn(
              'rounded-md px-2.5 py-1 font-medium uppercase transition-colors',
              active
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {code}
          </button>
        )
      })}
    </div>
  )
}
