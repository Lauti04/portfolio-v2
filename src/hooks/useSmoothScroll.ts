import Lenis from 'lenis'
import { useEffect } from 'react'

/**
 * Drives smooth wheel/touch scrolling for the whole page. Skipped entirely
 * under reduced-motion so scrolling stays instant and predictable there.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) return

    const lenis = new Lenis()

    let frameId: number
    const raf = (time: number) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }
    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])
}
