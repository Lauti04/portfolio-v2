import { useEffect, useRef, useState } from 'react'

/**
 * Tracks 0-1 scroll progress through `ref`'s element: 0 when its top edge
 * reaches the top of the viewport, 1 when its bottom edge reaches the bottom
 * of the viewport. Meant for a tall wrapper around a `position: sticky`
 * child, driving a scroll-scrubbed effect over that wrapper's extra height.
 * Same hand-rolled scroll-listener-plus-rAF idiom as useScrollHeader and
 * useCursorGlow — state updates are skipped for sub-0.5% changes so scroll
 * doesn't force a re-render on every single frame.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [progress, setProgress] = useState(0)
  const lastProgress = useRef(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    let frameId: number | null = null

    const update = () => {
      frameId = null
      const rect = node.getBoundingClientRect()
      const range = rect.height - window.innerHeight
      const next = range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 0

      if (Math.abs(next - lastProgress.current) > 0.005) {
        lastProgress.current = next
        setProgress(next)
      }
    }

    const handleScroll = () => {
      if (frameId !== null) return
      frameId = requestAnimationFrame(update)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (frameId !== null) cancelAnimationFrame(frameId)
    }
  }, [])

  return { ref, progress }
}
