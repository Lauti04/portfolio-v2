import type { RefObject } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import type { Locale } from '@/features/i18n/config'
import { useI18n } from '@/features/i18n/i18n-context'
import { useTheme } from '@/features/theme/theme-context'
import { useCursorGlow } from './useCursorGlow'

const CV_FILES: Record<Locale, string> = {
  es: '/cv/lautaro-johnston-cv-es.pdf',
  en: '/cv/lautaro-johnston-cv-en.pdf',
}

/** Accent pill announcing current availability, with a reduced-motion-aware pulse. */
function StatusChip({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1.5 text-sm text-foreground">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      {label}
    </div>
  )
}

/**
 * Radial accent glow behind the headline. Follows the pointer via `--x`/`--y`
 * CSS variables when interactive; otherwise renders a static low-opacity tint.
 * Bounded to a fixed-size circle (rather than a full-bleed wash) so it reads
 * as a glow rather than a tinted background, and its intensity is tuned per
 * theme since the same alpha is far more visible against a dark background.
 */
function HeroGlow({
  glowRef,
  isInteractive,
  isDark,
}: {
  glowRef: RefObject<HTMLDivElement | null>
  isInteractive: boolean
  isDark: boolean
}) {
  const position = isInteractive ? 'var(--x, 50%) var(--y, 35%)' : '30% 20%'
  const opacity = isInteractive
    ? isDark
      ? 0.28
      : 0.16
    : isDark
      ? 0.18
      : 0.07

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(640px circle at ${position}, var(--color-accent) 0%, transparent 70%)`,
        opacity,
      }}
    />
  )
}

export function Hero() {
  const { t, locale } = useI18n()
  const { theme } = useTheme()
  const { containerRef, glowRef, isInteractive } = useCursorGlow<HTMLElement>()

  return (
    <Section
      ref={containerRef}
      ariaLabelledby="hero-heading"
      className="relative flex min-h-dvh items-center overflow-hidden"
    >
      <HeroGlow
        glowRef={glowRef}
        isInteractive={isInteractive}
        isDark={theme === 'dark'}
      />
      <Container className="relative pt-24">
        <div className="flex max-w-3xl flex-col items-start gap-6">
          <p className="font-mono text-sm text-muted-foreground">
            {t.hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="text-balance text-[clamp(2.5rem,5vw+1rem,5.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground"
          >
            {t.hero.headline}
          </h1>
          <StatusChip label={t.hero.status} />
          <p className="max-w-[60ch] text-lg text-muted-foreground">
            {t.hero.subline}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button href="#projects" size="md" variant="primary">
              {t.hero.viewWork}
            </Button>
            <Button
              href={CV_FILES[locale]}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              variant="outline"
            >
              {t.hero.viewCv}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
