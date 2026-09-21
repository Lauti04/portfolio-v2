import { Container } from '@/components/ui/Container'
import { MARQUEE_STACK, TECH_META } from '@/content/tech'
import { useI18n } from '@/features/i18n/i18n-context'
import { cn } from '@/lib/cn'

/** One badge in the marquee: brand icon, or a colored monogram tile when we have no icon. */
function TechBadge({ name }: { name: string }) {
  const meta = TECH_META[name]
  const Icon = meta?.icon

  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
      {Icon ? (
        <Icon
          size={18}
          className="shrink-0"
          style={meta.color ? { color: meta.color } : undefined}
          aria-hidden="true"
        />
      ) : (
        meta && (
          <span
            aria-hidden="true"
            className={cn(
              'flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[4px] border text-[9px] font-bold leading-none',
              !meta.color && 'border-border text-foreground',
            )}
            style={meta.color ? { color: meta.color, borderColor: meta.color } : undefined}
          >
            {meta.initials}
          </span>
        )
      )}
      {name}
    </span>
  )
}

/** One un-clipped copy of the badge list; `hidden` marks it as a decorative loop duplicate. */
function TechGroup({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 gap-3" aria-hidden={hidden}>
      {MARQUEE_STACK.map((name) => (
        <TechBadge key={name} name={name} />
      ))}
    </div>
  )
}

/**
 * Infinite auto-scrolling strip of the real stack, built from three copies of
 * the same list animated as one track (-33.3333% loops seamlessly back to
 * 0%). Three copies — rather than two — keep the track wider than the
 * viewport on very wide/ultrawide monitors, so the loop never runs out of
 * content and shows a gap before it resets. Copies 2 and 3 are `aria-hidden`
 * so screen readers only hear each name once.
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
          <TechGroup />
          <TechGroup hidden />
          <TechGroup hidden />
        </div>
      </div>
    </div>
  )
}
