import { useEffect, useRef } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], summary, label, [tabindex]:not([tabindex="-1"])'
const TEXT_SELECTOR = 'input, textarea, [contenteditable="true"]'

/** Self-centering inner shape, sized/colored by `data-cursor`. Its own translate(-50%,-50%) is a static class, never touched by JS, so it stays centered even as its size changes between states (ring vs. text-caret bar). */
const dotInnerClasses =
  'h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent'

const ringInnerClasses = [
  '-translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/50',
  'h-9 w-9',
  'transition-[scale,background-color,border-color,height,width,border-radius] duration-200 ease-out',
  'data-[cursor=interactive]:scale-150 data-[cursor=interactive]:border-accent data-[cursor=interactive]:bg-accent/10',
  'data-[cursor=text]:h-6 data-[cursor=text]:w-[3px] data-[cursor=text]:rounded-sm data-[cursor=text]:border-none data-[cursor=text]:bg-accent',
].join(' ')

/**
 * Replaces the native pointer with a small dot (tracks exactly) plus a
 * larger ring (eases a frame behind via rAF — direct DOM mutation, no React
 * state, matching useTilt/useCursorGlow) that morphs depending on what's
 * underneath: it grows into a soft glow over links/buttons, and narrows
 * into a thin bar over text fields so typing targets don't lose their
 * affordance now that the native I-beam is hidden.
 *
 * Each cursor is two nested elements: an outer wrapper whose `translate`
 * JS sets every frame to the raw pointer coordinates, and an inner shape
 * that self-centers via a static `-translate-x-1/2 -translate-y-1/2`. That
 * split matters once the ring resizes between states — centering via a
 * fixed pixel offset computed from one size would drift off-target the
 * moment the shape's actual box changes.
 *
 * Only mounts when the device has a fine, hover-capable pointer and the
 * user hasn't asked for reduced motion; everywhere else this renders
 * nothing and the native cursor is left alone.
 */
export function CustomCursor() {
  const isFinePointer = useMediaQuery('(hover: hover) and (pointer: fine)')
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const dotInnerRef = useRef<HTMLDivElement>(null)
  const ringInnerRef = useRef<HTMLDivElement>(null)
  const enabled = isFinePointer && !prefersReducedMotion

  useEffect(() => {
    if (!enabled) return

    const dot = dotRef.current
    const ring = ringRef.current
    const dotInner = dotInnerRef.current
    const ringInner = ringInnerRef.current
    if (!dot || !ring || !dotInner || !ringInner) return

    document.documentElement.classList.add('custom-cursor-active')

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let ringX = targetX
    let ringY = targetY
    let frameId = 0

    dot.style.translate = `${targetX}px ${targetY}px`
    ring.style.translate = `${targetX}px ${targetY}px`

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      dot.style.translate = `${targetX}px ${targetY}px`
      dot.classList.add('opacity-100')
      ring.classList.add('opacity-100')

      const target = event.target
      const state =
        target instanceof Element
          ? target.closest(TEXT_SELECTOR)
            ? 'text'
            : target.closest(INTERACTIVE_SELECTOR)
              ? 'interactive'
              : 'default'
          : 'default'
      ringInner.dataset.cursor = state
    }

    const handlePointerDown = () => ringInner.classList.add('scale-90')
    const handlePointerUp = () => ringInner.classList.remove('scale-90')
    const handleLeave = () => {
      dot.classList.remove('opacity-100')
      ring.classList.remove('opacity-100')
    }

    const tick = () => {
      ringX += (targetX - ringX) * 0.22
      ringY += (targetY - ringY) * 0.22
      ring.style.translate = `${ringX}px ${ringY}px`
      frameId = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    document.documentElement.addEventListener('mouseleave', handleLeave)
    frameId = requestAnimationFrame(tick)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
      cancelAnimationFrame(frameId)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] opacity-0 transition-opacity duration-300"
      >
        <div ref={dotInnerRef} className={dotInnerClasses} />
      </div>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] opacity-0 transition-opacity duration-300"
      >
        <div ref={ringInnerRef} data-cursor="default" className={ringInnerClasses} />
      </div>
    </>
  )
}
