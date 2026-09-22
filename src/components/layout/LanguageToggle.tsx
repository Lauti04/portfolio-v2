import { IconCheck, IconChevronDown } from '@tabler/icons-react'
import ES from 'country-flag-icons/react/3x2/ES'
import GB from 'country-flag-icons/react/3x2/GB'
import { useEffect, useRef, useState, type ComponentType } from 'react'
import { locales, type Locale } from '@/features/i18n/config'
import { useI18n } from '@/features/i18n/i18n-context'
import { cn } from '@/lib/cn'

/** Common shape both flag components accept — sidesteps their internal HTMLSVGElement type. */
type FlagComponent = ComponentType<{
  className?: string
  'aria-hidden'?: boolean | 'true' | 'false'
}>

const FLAGS: Record<Locale, FlagComponent> = {
  es: ES,
  en: GB,
}

const NAMES: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
}

const flagClasses = 'h-3.5 w-5 shrink-0 rounded-[3px] object-cover shadow-sm'

/** Flag-and-chevron trigger opening an animated listbox of both languages. */
export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleSelect = (code: Locale) => {
    setLocale(code)
    setIsOpen(false)
  }

  const CurrentFlag = FLAGS[locale]

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t.language.label}
        className="inline-flex h-10 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
      >
        <CurrentFlag aria-hidden="true" className={flagClasses} />
        <IconChevronDown
          size={14}
          className={cn(
            'text-muted-foreground transition-transform duration-200',
            isOpen && 'rotate-180',
          )}
        />
      </button>

      <div
        role="listbox"
        aria-label={t.language.label}
        className={cn(
          'absolute right-0 top-full z-50 mt-2 w-40 origin-top-right rounded-xl border border-border bg-card p-1.5 shadow-xl transition-[opacity,scale] duration-150 ease-out',
          isOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0',
        )}
      >
        {locales.map((code) => {
          const active = code === locale
          const Flag = FLAGS[code]
          return (
            <button
              key={code}
              type="button"
              role="option"
              aria-selected={active}
              onClick={() => handleSelect(code)}
              className={cn(
                'flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors',
                active
                  ? 'bg-muted text-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              <Flag aria-hidden="true" className={flagClasses} />
              {NAMES[code]}
              {active && <IconCheck size={14} className="ml-auto text-accent" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
