import { useEffect, useRef, useState } from 'react'

interface UseTypewriterOptions {
  /** Milliseconds between characters. */
  speed?: number
  /** Extra pause after finishing a line, in milliseconds. */
  linePause?: number
  /** Typing only starts once this becomes true, and only once. */
  active: boolean
}

/**
 * Reveals `lines` (plain strings) one character at a time once `active`
 * becomes true. Returns, per line, how many of its characters are currently
 * revealed — the caller slices its own colored tokens against that count so
 * mid-token reveals still render correctly. Skips straight to fully revealed
 * under reduced motion. `lines` must be a stable reference (module-level or
 * memoized), since it drives the effect.
 */
export function useTypewriter(
  lines: string[],
  { speed = 28, linePause = 220, active }: UseTypewriterOptions,
) {
  const [revealed, setRevealed] = useState<number[]>(() => lines.map(() => 0))
  const startedRef = useRef(false)

  useEffect(() => {
    if (!active || startedRef.current) return
    startedRef.current = true

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) {
      const timeoutId = window.setTimeout(() => {
        setRevealed(lines.map((line) => line.length))
      }, 0)
      return () => window.clearTimeout(timeoutId)
    }

    let lineIndex = 0
    let charIndex = 0
    let timeoutId: number

    const tick = () => {
      if (lineIndex >= lines.length) return
      const line = lines[lineIndex]
      if (charIndex < line.length) {
        charIndex += 1
        const revealedCharIndex = lineIndex
        const revealedCount = charIndex
        setRevealed((previous) => {
          const next = [...previous]
          next[revealedCharIndex] = revealedCount
          return next
        })
        timeoutId = window.setTimeout(tick, speed)
      } else {
        lineIndex += 1
        charIndex = 0
        timeoutId = window.setTimeout(tick, linePause)
      }
    }

    timeoutId = window.setTimeout(tick, speed)

    return () => window.clearTimeout(timeoutId)
  }, [active, lines, linePause, speed])

  return revealed
}
