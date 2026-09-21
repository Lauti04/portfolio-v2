import type Lenis from 'lenis'
import { createContext, useContext } from 'react'

export const SmoothScrollContext = createContext<Lenis | null>(null)

/** The shared Lenis instance, or null under reduced motion / before mount. */
export function useLenis(): Lenis | null {
  return useContext(SmoothScrollContext)
}
