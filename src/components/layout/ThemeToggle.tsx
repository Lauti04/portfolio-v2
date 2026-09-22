import { IconMoon, IconSun } from '@tabler/icons-react'
import { useI18n } from '@/features/i18n/i18n-context'
import { useTheme } from '@/features/theme/theme-context'
import { cn } from '@/lib/cn'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useI18n()
  const isDark = theme === 'dark'
  const label = isDark ? t.theme.switchToLight : t.theme.switchToDark

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted"
    >
      <span className="relative block h-5 w-5">
        <IconSun
          size={20}
          className={cn(
            'absolute inset-0 transition-[opacity,rotate,scale] duration-500 ease-out',
            isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100',
          )}
        />
        <IconMoon
          size={20}
          className={cn(
            'absolute inset-0 transition-[opacity,rotate,scale] duration-500 ease-out',
            isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0',
          )}
        />
      </span>
    </button>
  )
}
