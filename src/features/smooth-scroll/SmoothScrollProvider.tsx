import Lenis from 'lenis'
import { useEffect, useState, type ReactNode } from 'react'
import { SmoothScrollContext } from './smooth-scroll-context'

/**
 * Drives smooth wheel/touch scrolling for the whole page and exposes the
 * Lenis instance via context. In-page anchor links must call
 * `lenis.scrollTo()` rather than relying on the browser's native anchor
 * jump: Lenis tracks its own target scroll position and eases toward it
 * every frame, so a native jump gets immediately overwritten back to
 * Lenis's stale target on the very next frame — the link's href changes
 * but the page never actually moves.
 * Skipped entirely under reduced-motion so scrolling stays instant and
 * predictable there (native anchor jumps work fine since Lenis isn't
 * running to fight them).
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) return

    const instance = new Lenis()
    const timeoutId = window.setTimeout(() => setLenis(instance), 0)

    let frameId: number
    const raf = (time: number) => {
      instance.raf(time)
      frameId = requestAnimationFrame(raf)
    }
    frameId = requestAnimationFrame(raf)

    return () => {
      window.clearTimeout(timeoutId)
      cancelAnimationFrame(frameId)
      instance.destroy()
      setLenis(null)
    }
  }, [])

  return (
    <SmoothScrollContext.Provider value={lenis}>
      {children}
    </SmoothScrollContext.Provider>
  )
}
