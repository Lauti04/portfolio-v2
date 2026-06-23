import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionProps {
  id?: string
  className?: string
  /** Accessible label id association when the section has a visible heading. */
  ariaLabelledby?: string
  children: ReactNode
}

/** Semantic page section with consistent vertical rhythm and scroll offset. */
export function Section({ id, className, ariaLabelledby, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn('scroll-mt-20 py-16 sm:py-24', className)}
    >
      {children}
    </section>
  )
}
