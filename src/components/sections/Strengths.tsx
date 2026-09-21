import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { useI18n } from '@/features/i18n/i18n-context'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { cn } from '@/lib/cn'

interface StrengthItem {
  title: string
  description: string
}

function StrengthPanel({ item, index }: { item: StrengthItem; index: number }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-mono text-sm text-accent">0{index + 1}</span>
      <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {item.title}
      </h3>
      <p className="max-w-[46ch] text-muted-foreground">{item.description}</p>
    </div>
  )
}

/**
 * Tall wrapper (280vh) around a sticky-pinned card: the card stays fixed in
 * the viewport while the user scrolls through the wrapper's extra height,
 * slowly rotating and swapping which strength it shows based on scroll
 * progress. No animation library — same hand-rolled scroll-math idiom
 * already used elsewhere in the codebase (and what daisyUI's own site
 * turned out to use for a similar effect).
 */
function ScrollPinnedStrengths({ items }: { items: StrengthItem[] }) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>()
  const activeIndex = Math.min(items.length - 1, Math.floor(progress * items.length))
  const rotateY = (progress - 0.5) * 20

  return (
    <div ref={ref} className="relative h-[280vh]">
      <div className="sticky top-20 flex h-[calc(100vh-5rem)] items-center justify-center [perspective:1600px]">
        <div
          className="w-full max-w-xl rounded-3xl border border-border bg-card p-10 shadow-2xl sm:p-14"
          style={{ transform: `rotateY(${rotateY}deg)` }}
        >
          <div className="relative min-h-[220px] sm:min-h-[180px]">
            {items.map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  'transition-opacity duration-500',
                  index === activeIndex ? 'relative opacity-100' : 'absolute inset-0 opacity-0',
                )}
              >
                <StrengthPanel item={item} index={index} />
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center gap-2">
            {items.map((item, index) => (
              <span
                key={item.title}
                aria-hidden="true"
                className={cn(
                  'h-1.5 w-6 rounded-full transition-colors duration-300',
                  index === activeIndex ? 'bg-accent' : 'bg-border',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/** Plain stacked cards — used on mobile/tablet and under reduced motion, where a pinned-scroll effect is disorienting rather than delightful. */
function SimpleStrengths({ items }: { items: StrengthItem[] }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 80}>
          <div className="rounded-2xl border border-border bg-card p-8">
            <StrengthPanel item={item} index={index} />
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function Strengths() {
  const { t } = useI18n()
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const useScrollPin = isDesktop && !prefersReducedMotion

  return (
    <section
      id="strengths"
      aria-labelledby="strengths-heading"
      className="relative scroll-mt-20 py-16 sm:py-24"
    >
      <Container>
        <Reveal>
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="h-0.5 w-2.5 rounded-full bg-accent" />
            <h2
              id="strengths-heading"
              className="text-2xl font-semibold tracking-tight text-foreground"
            >
              {t.strengths.heading}
            </h2>
          </div>
          <p className="mt-3 max-w-[60ch] text-muted-foreground">{t.strengths.subheading}</p>
        </Reveal>
      </Container>

      {useScrollPin ? (
        <ScrollPinnedStrengths items={t.strengths.items} />
      ) : (
        <Container className="mt-8">
          <SimpleStrengths items={t.strengths.items} />
        </Container>
      )}
    </section>
  )
}
