import { useEffect, useId, useRef, useState, type MouseEvent } from 'react'
import { Container } from '@/components/ui/Container'
import { useI18n } from '@/features/i18n/i18n-context'
import { useLenis } from '@/features/smooth-scroll/smooth-scroll-context'
import { cn } from '@/lib/cn'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'

const NAV_LINK_CLASSES =
  'link-underline text-sm text-muted-foreground transition-colors hover:text-foreground'

const MOBILE_NAV_LINK_CLASSES =
  'rounded-lg px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-muted'

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

/** Hamburger button whose three bars morph into an X when the menu is open. */
function MenuToggle({
  isOpen,
  onClick,
  menuId,
  openLabel,
  closeLabel,
}: {
  isOpen: boolean
  onClick: () => void
  menuId: string
  openLabel: string
  closeLabel: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={menuId}
      aria-label={isOpen ? closeLabel : openLabel}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted md:hidden"
    >
      <span className="relative block h-4 w-5">
        <span
          aria-hidden="true"
          className={cn(
            'absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-[translate,rotate] duration-300 ease-out',
            isOpen ? 'translate-y-[7px] rotate-45' : 'translate-y-0 rotate-0',
          )}
        />
        <span
          aria-hidden="true"
          className={cn(
            'absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ease-out',
            isOpen ? 'opacity-0' : 'opacity-100',
          )}
        />
        <span
          aria-hidden="true"
          className={cn(
            'absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition-[translate,rotate] duration-300 ease-out',
            isOpen ? '-translate-y-[7px] -rotate-45' : 'translate-y-0 rotate-0',
          )}
        />
      </span>
    </button>
  )
}

export function Header() {
  const { visible, scrolled, prefersReducedMotion } = useScrollHeader()
  const { t } = useI18n()
  const lenis = useLenis()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()

  const navItems = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ]

  const handleScrollTo = (event: MouseEvent<HTMLAnchorElement>, target: string | number) => {
    if (!lenis) return
    event.preventDefault()
    lenis.scrollTo(target)
  }

  const handleMobileNavClick = (event: MouseEvent<HTMLAnchorElement>, target: string) => {
    handleScrollTo(event, target)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <header
      className={cn(
        'fixed top-0 z-40 w-full',
        visible ? 'translate-y-0' : '-translate-y-full',
        scrolled || isMenuOpen
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
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleScrollTo(event, item.href)}
                className={NAV_LINK_CLASSES}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <nav aria-label="Site controls" className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </nav>
            <MenuToggle
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              menuId={menuId}
              openLabel={t.nav.openMenu}
              closeLabel={t.nav.closeMenu}
            />
          </div>
        </div>
      </Container>

      <div
        id={menuId}
        inert={!isMenuOpen}
        className={cn(
          'grid md:hidden',
          !prefersReducedMotion && 'transition-[grid-template-rows] duration-300 ease-out',
          isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <Container>
            <nav aria-label={t.nav.label} className="flex flex-col gap-1 pb-4 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleMobileNavClick(event, item.href)}
                  className={MOBILE_NAV_LINK_CLASSES}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </Container>
        </div>
      </div>
    </header>
  )
}
