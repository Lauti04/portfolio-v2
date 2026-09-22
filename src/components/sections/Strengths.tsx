import { IconBrandOpenai, IconCheck } from '@tabler/icons-react'
import SiCursor from '@icons-pack/react-simple-icons/icons/SiCursor'
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

const TAB_LABELS = ['timeline.log', 'shipped.tsx', 'review.ai']

/** Terminal-style log for "fast learner" — mirrors the hero card's monospace aesthetic. */
function TimelineVisual() {
  return (
    <div className="rounded-xl border border-border bg-muted/40 p-4 font-mono text-xs leading-relaxed sm:text-sm">
      <p className="text-muted-foreground">
        <span className="text-accent">$</span> career --log
      </p>
      <p className="mt-2 text-muted-foreground">
        [2023] <span className="text-foreground">Started DAW technical degree</span>
      </p>
      <p className="text-muted-foreground">
        [2025] <span className="text-foreground">Graduated</span>
      </p>
      <p className="text-muted-foreground">
        [2025] <span className="text-[#e2a256]">Shipping production code</span>{' '}
        <span className="text-accent">←</span>
      </p>
    </div>
  )
}

const SHIPPED_ITEMS = ['Interfaces', 'Dark mode', 'Reusable components', 'Forms']

/** Toggle-row checklist for "real production experience" — daisyUI-style feature list. */
function ShippedVisual() {
  return (
    <div className="flex flex-col gap-2.5 rounded-xl border border-border bg-muted/40 p-4">
      {SHIPPED_ITEMS.map((label) => (
        <div key={label} className="flex items-center justify-between text-sm">
          <span className="text-foreground">{label}</span>
          <span
            aria-hidden="true"
            className="relative inline-flex h-5 w-9 shrink-0 items-center rounded-full bg-accent"
          >
            <span className="absolute right-0.5 h-4 w-4 rounded-full bg-accent-foreground shadow" />
          </span>
        </div>
      ))}
    </div>
  )
}

/** Real tool icons + a "reviewed" badge for the AI-judgment strength. */
function AiJudgmentVisual({ reviewedLabel }: { reviewedLabel: string }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-muted/40 p-4">
      <SiCursor size={28} aria-hidden="true" />
      <IconBrandOpenai size={28} style={{ color: '#10a37f' }} aria-hidden="true" />
      <span className="ml-auto flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
        <IconCheck size={14} aria-hidden="true" />
        {reviewedLabel}
      </span>
    </div>
  )
}

function StrengthVisual({ index, reviewedLabel }: { index: number; reviewedLabel: string }) {
  if (index === 0) return <TimelineVisual />
  if (index === 1) return <ShippedVisual />
  return <AiJudgmentVisual reviewedLabel={reviewedLabel} />
}

/**
 * Tall wrapper (280vh) around a sticky-pinned two-column layout: a synced
 * index of the 3 strength titles on the left, a bigger card on the right
 * styled like a code editor tab (macOS window dots + a per-strength "file"
 * label) showing a distinct small graphic for whichever strength is active
 * — a terminal log, a toggle checklist, a tool-icon row — plus its real
 * description text. A couple of slow-floating blurred accents sit behind
 * the card for depth. Both columns stay pinned together while the user
 * scrolls through the wrapper's extra height; the card slowly rotates and
 * the active strength swaps as scroll progress crosses each third. No
 * animation library — same hand-rolled scroll-math idiom already used
 * elsewhere in the codebase (and what daisyUI's own site turned out to use
 * for a similar effect).
 */
function ScrollPinnedStrengths({
  items,
  reviewedLabel,
}: {
  items: StrengthItem[]
  reviewedLabel: string
}) {
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

            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -right-6 -top-8 h-28 w-28 rounded-full bg-accent/25 blur-2xl motion-safe:animate-float"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-8 -left-6 h-24 w-24 rounded-full bg-accent/15 blur-2xl motion-safe:animate-float-delayed"
              />

              <div
                className="relative w-full rounded-3xl border border-border bg-card shadow-2xl"
                style={{ transform: `rotateY(${rotateY}deg)` }}
              >
                <div className="flex items-center gap-1.5 border-b border-border px-5 py-3.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
                    {TAB_LABELS[activeIndex]}
                  </span>
                </div>

                <div className="p-8 sm:p-10">
                  <div className="relative min-h-[260px] sm:min-h-[220px]">
                    {items.map((item, index) => (
                      <div
                        key={item.title}
                        className={cn(
                          'transition-opacity duration-500',
                          index === activeIndex
                            ? 'relative opacity-100'
                            : 'absolute inset-0 opacity-0',
                        )}
                      >
                        <StrengthVisual index={index} reviewedLabel={reviewedLabel} />
                        <p className="mt-6 max-w-[46ch] text-lg text-foreground sm:text-xl">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex gap-2">
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
        <ScrollPinnedStrengths items={t.strengths.items} reviewedLabel={t.strengths.reviewedLabel} />
      ) : (
        <Container className="mt-8">
          <SimpleStrengths items={t.strengths.items} />
        </Container>
      )}
    </section>
  )
}
