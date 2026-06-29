import { useEffect, useRef, useState } from 'react'

/**
 * Tracks the pointer position over `containerRef` and exposes it as
 * `--x`/`--y` CSS variables (percentages) on `glowRef`, for a CSS-driven glow
 * effect. The two refs are separate because the glow element itself is
 * `pointer-events: none` (so it doesn't block clicks) and would therefore
 * never receive pointer events if it were also the listener target.
 * Disabled on touch devices and when the user prefers reduced motion, in
 * which case the caller should fall back to a static tint.
 */
export function useCursorGlow<
  C extends HTMLElement,
  G extends HTMLElement = HTMLDivElement,
>() {
  const containerRef = useRef<C>(null)
  const glowRef = useRef<G>(null)
  const [isInteractive] = useState(() => {
    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    return supportsFinePointer && !prefersReducedMotion
  })

  useEffect(() => {
    if (!isInteractive) return

    const container = containerRef.current
    const glow = glowRef.current
    if (!container || !glow) return

    let frameId: number | null = null

    const handlePointerMove = (event: PointerEvent) => {
      if (frameId !== null) return
      frameId = requestAnimationFrame(() => {
        frameId = null
        const rect = container.getBoundingClientRect()
        const x = ((event.clientX - rect.left) / rect.width) * 100
        const y = ((event.clientY - rect.top) / rect.height) * 100
        glow.style.setProperty('--x', `${x}%`)
        glow.style.setProperty('--y', `${y}%`)
      })
    }

    container.addEventListener('pointermove', handlePointerMove)

    return () => {
      container.removeEventListener('pointermove', handlePointerMove)
      if (frameId !== null) cancelAnimationFrame(frameId)
    }
  }, [isInteractive])

  return { containerRef, glowRef, isInteractive }
}
