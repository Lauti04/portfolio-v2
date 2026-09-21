import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { Container } from '@/components/ui/Container'
import { useI18n } from '@/features/i18n/i18n-context'
import { useLenis } from '@/features/smooth-scroll/smooth-scroll-context'
import { cn } from '@/lib/cn'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'

const NAV_LINK_CLASSES =
  'link-underline text-sm text-muted-foreground transition-colors hover:text-foreground'

/** Hides the header on scroll-down, reveals it on scroll-up or near the top. */
function useScrollHeader() {
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY = useRef(0)
  const frameId = useRef<number | null>(null)
  const [prefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const handleScroll = () => {
      if (frameId.current !== null) return
      frameId.current = requestAnimationFrame(() => {
        frameId.current = null
        const currentScrollY = window.scrollY

        setVisible(currentScrollY < 10 || currentScrollY <= lastScrollY.current)
        setScrolled(currentScrollY >= 10)
        lastScrollY.current = currentScrollY
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frameId.current !== null) cancelAnimationFrame(frameId.current)
    }
  }, [])

  return { visible, scrolled, prefersReducedMotion }
}

export function Header() {
  const { visible, scrolled, prefersReducedMotion } = useScrollHeader()
  const { t } = useI18n()
  const lenis = useLenis()

  const handleScrollTo = (event: MouseEvent<HTMLAnchorElement>, target: string | number) => {
    if (!lenis) return
    event.preventDefault()
    lenis.scrollTo(target)
  }

  return (
    <header
      className={cn(
        'fixed top-0 z-40 w-full',
        visible ? 'translate-y-0' : '-translate-y-full',
        scrolled
          ? 'border-b border-border/40 bg-background/70 backdrop-blur-md'
          : 'border-b-0 bg-background/0',
        !prefersReducedMotion &&
          'transition-[translate,background-color,border-color] duration-300 ease-out',
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#"
            onClick={(event) => handleScrollTo(event, 0)}
            className="rounded-md font-semibold tracking-tight text-foreground"
          >
            Lautaro Johnston
          </a>
          <nav aria-label={t.nav.label} className="hidden items-center gap-6 md:flex">
            <a
              href="#about"
              onClick={(event) => handleScrollTo(event, '#about')}
              className={NAV_LINK_CLASSES}
            >
              {t.nav.about}
            </a>
            <a
              href="#experience"
              onClick={(event) => handleScrollTo(event, '#experience')}
              className={NAV_LINK_CLASSES}
            >
              {t.nav.experience}
            </a>
            <a
              href="#projects"
              onClick={(event) => handleScrollTo(event, '#projects')}
              className={NAV_LINK_CLASSES}
            >
              {t.nav.projects}
            </a>
            <a
              href="#contact"
              onClick={(event) => handleScrollTo(event, '#contact')}
              className={NAV_LINK_CLASSES}
            >
              {t.nav.contact}
            </a>
          </nav>
          <nav aria-label="Site controls" className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </nav>
        </div>
      </Container>
    </header>
  )
}
