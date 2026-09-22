import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { useI18n } from '@/features/i18n/i18n-context'
import { useLenis } from '@/features/smooth-scroll/smooth-scroll-context'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { cn } from '@/lib/cn'

interface StrengthItem {
  title: string
  description: string
}

/**
 * Tall wrapper (280vh) around a sticky-pinned two-column layout: a synced
 * index of the 3 strength titles on the left, a bigger card on the right
 * showing the active one's full description. Both stay pinned together
 * while the user scrolls through the wrapper's extra height; the card
 * slowly rotates and the active strength swaps as scroll progress crosses
 * each third. No animation library — same hand-rolled scroll-math idiom
 * already used elsewhere in the codebase (and what daisyUI's own site
 * turned out to use for a similar effect).
 */
function ScrollPinnedStrengths({ items }: { items: StrengthItem[] }) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>()
  const lenis = useLenis()
  const activeIndex = Math.min(items.length - 1, Math.floor(progress * items.length))
  const rotateY = (progress - 0.5) * 20

  const jumpToIndex = (index: number) => {
    const wrapper = ref.current
    if (!lenis || !wrapper) return
    const rect = wrapper.getBoundingClientRect()
    const wrapperTop = window.scrollY + rect.top
    const range = rect.height - window.innerHeight
    const targetProgress = (index + 0.5) / items.length
    lenis.scrollTo(wrapperTop + targetProgress * range)
  }

  return (
    <div ref={ref} className="relative h-[280vh]">
      <div className="sticky top-20 flex h-[calc(100vh-5rem)] items-center [perspective:1600px]">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
            <div className="flex flex-col gap-2">
              {items.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => jumpToIndex(index)}
                  className={cn(
                    'flex items-baseline gap-3 rounded-xl px-4 py-3 text-left transition-colors duration-300',
                    index === activeIndex
                      ? 'bg-muted text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  <span
                    className={cn(
                      'font-mono text-sm',
                      index === activeIndex ? 'text-accent' : 'text-muted-foreground',
                    )}
                  >
                    0{index + 1}
                  </span>
                  <span className="text-lg font-semibold tracking-tight sm:text-xl">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            <div
              className="w-full rounded-3xl border border-border bg-card p-10 shadow-2xl sm:p-14"
              style={{ transform: `rotateY(${rotateY}deg)` }}
            >
              <div className="relative min-h-[140px]">
                {items.map((item, index) => (
                  <p
                    key={item.title}
                    className={cn(
                      'max-w-[46ch] text-lg text-foreground transition-opacity duration-500 sm:text-xl',
                      index === activeIndex ? 'relative opacity-100' : 'absolute inset-0 opacity-0',
                    )}
                  >
                    {item.description}
                  </p>
                ))}
              </div>
              <div className="mt-10 flex gap-2">
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
        </Container>
      </div>
    </div>
  )
}

/** One label/value pair for the mobile/reduced-motion fallback. */
function StrengthCard({ item, index }: { item: StrengthItem; index: number }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8">
      <span className="font-mono text-sm text-accent">0{index + 1}</span>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">{item.title}</h3>
      <p className="mt-4 max-w-[46ch] text-muted-foreground">{item.description}</p>
    </div>
  )
}

/** Plain stacked cards — used on mobile/tablet and under reduced motion, where a pinned-scroll effect is disorienting rather than delightful. */
function SimpleStrengths({ items }: { items: StrengthItem[] }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 80}>
          <StrengthCard item={item} index={index} />
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
