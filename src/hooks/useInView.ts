import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  rootMargin?: string
  threshold?: number
}

/**
 * Reports whether an element has entered the viewport, once. Stops observing
 * after the first intersection since reveal-on-scroll only needs to fire once.
 */
export function useInView<T extends HTMLElement>({
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.1,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return { ref, isInView }
}
