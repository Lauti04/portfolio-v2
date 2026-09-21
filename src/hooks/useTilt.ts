import { useEffect, useRef, useState } from 'react'

interface UseTiltOptions {
  /** Maximum rotation, in degrees, at the element's edge. */
  maxTilt?: number
}

/**
 * Tilts an element toward the pointer by exposing `--tilt-x`/`--tilt-y`
 * degree variables, consumed by a `rotateX(var(--tilt-x)) rotateY(var(--tilt-y))`
 * transform in the caller's CSS. Resets to flat on pointer leave. Mirrors
 * useCursorGlow: direct DOM mutation (no re-renders), disabled on touch
 * devices and under reduced motion.
 */
export function useTilt<T extends HTMLElement>({ maxTilt = 8 }: UseTiltOptions = {}) {
  const ref = useRef<T>(null)
  const [isInteractive] = useState(() => {
    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    return supportsFinePointer && !prefersReducedMotion
  })

  useEffect(() => {
    if (!isInteractive) return

    const node = ref.current
    if (!node) return

    let frameId: number | null = null

    const handlePointerMove = (event: PointerEvent) => {
      if (frameId !== null) return
      frameId = requestAnimationFrame(() => {
        frameId = null
        const rect = node.getBoundingClientRect()
        const px = (event.clientX - rect.left) / rect.width - 0.5
        const py = (event.clientY - rect.top) / rect.height - 0.5
        node.style.setProperty('--tilt-x', `${(-py * maxTilt * 2).toFixed(2)}deg`)
        node.style.setProperty('--tilt-y', `${(px * maxTilt * 2).toFixed(2)}deg`)
      })
    }

    const handlePointerLeave = () => {
      node.style.setProperty('--tilt-x', '0deg')
      node.style.setProperty('--tilt-y', '0deg')
    }

    node.addEventListener('pointermove', handlePointerMove)
    node.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      node.removeEventListener('pointermove', handlePointerMove)
      node.removeEventListener('pointerleave', handlePointerLeave)
      if (frameId !== null) cancelAnimationFrame(frameId)
    }
  }, [isInteractive, maxTilt])

  return { ref, isInteractive }
}
