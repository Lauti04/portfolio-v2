import { IconMoon, IconSun } from '@tabler/icons-react'
import { useI18n } from '@/features/i18n/i18n-context'
import { useTheme } from '@/features/theme/theme-context'

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
      {isDark ? <IconMoon size={20} /> : <IconSun size={20} />}
    </button>
  )
}
