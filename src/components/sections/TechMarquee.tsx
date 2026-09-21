import { Container } from '@/components/ui/Container'
import { STACK, TECH_META } from '@/content/tech'
import { useI18n } from '@/features/i18n/i18n-context'

/** One badge in the marquee: brand icon when we have one, plain label otherwise. */
function TechBadge({ name }: { name: string }) {
  const meta = TECH_META[name]
  const Icon = meta?.icon

  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
      {Icon && <Icon size={18} style={{ color: meta.color }} aria-hidden="true" />}
      {name}
    </span>
  )
}

/**
 * Infinite auto-scrolling strip of real stack badges, built from two copies of
 * the same list animated as one track (-50% loops seamlessly back to 0%). The
 * second copy is `aria-hidden` so screen readers only hear each name once.
 */
export function TechMarquee() {
  const { t } = useI18n()

  return (
    <div className="py-10 sm:py-14">
      <Container>
        <p className="text-center font-mono text-xs uppercase tracking-wide text-muted-foreground">
          {t.techMarquee.caption}
        </p>
      </Container>

      <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          <div className="flex shrink-0 gap-3">
            {STACK.map((name) => (
              <TechBadge key={name} name={name} />
            ))}
          </div>
          <div className="flex shrink-0 gap-3" aria-hidden="true">
            {STACK.map((name) => (
              <TechBadge key={name} name={name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
