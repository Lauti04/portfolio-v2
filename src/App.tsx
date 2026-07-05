import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/Hero'
import { ProfileSnapshot } from '@/components/sections/ProfileSnapshot'
import { useI18n } from '@/features/i18n/i18n-context'
import { I18nProvider } from '@/features/i18n/I18nProvider'
import { ThemeProvider } from '@/features/theme/ThemeProvider'

function Shell() {
  const { t } = useI18n()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
      >
        {t.a11y.skipToContent}
      </a>
      <div className="flex min-h-svh flex-col">
        <Header />
        <main id="main" className="flex-1">
          <Hero />
          <ProfileSnapshot />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <Shell />
      </I18nProvider>
    </ThemeProvider>
  )
}
