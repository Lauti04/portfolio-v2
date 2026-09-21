import { IconCode, IconWorld } from '@tabler/icons-react'
import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { useI18n } from '@/features/i18n/i18n-context'
import { cn } from '@/lib/cn'

interface ExperienceEntry {
  id: string
  role: string
  company: string
  location: string
  dateRange: string
  description: string
}

const ROLE_ICONS: Record<string, ReactNode> = {
  vya: <IconCode size={20} />,
  universalTelecom: <IconWorld size={20} />,
}

/**
 * One timeline entry: an icon node with a connecting line down to the next
 * node, and the role/company/dates/description beside it. The line is a
 * `flex-1` sibling of the icon inside a stretched flex column, so it always
 * fills exactly the remaining height of the row regardless of how tall the
 * description text is — no pixel math tied to content height.
 */
function ExperienceRow({ entry, isLast }: { entry: ExperienceEntry; isLast: boolean }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-foreground">
          {ROLE_ICONS[entry.id]}
        </div>
        {!isLast && <div className="mt-2 w-px flex-1 bg-border" />}
      </div>
      <div className={cn('min-w-0 flex-1', !isLast && 'pb-10')}>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <div>
            <p className="font-semibold text-foreground">{entry.role}</p>
            <p className="text-sm text-accent">
              {entry.company} · {entry.location}
            </p>
          </div>
          <p className="shrink-0 font-mono text-xs text-muted-foreground">
            {entry.dateRange}
          </p>
        </div>
        <p className="mt-1.5 max-w-[52ch] text-sm text-muted-foreground">
          {entry.description}
        </p>
      </div>
    </div>
  )
}

export function Experience() {
  const { t } = useI18n()

  return (
    <Section id="experience" ariaLabelledby="experience-heading">
      <Container>
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="h-0.5 w-2.5 rounded-full bg-accent" />
          <h2
            id="experience-heading"
            className="text-2xl font-semibold tracking-tight text-foreground"
          >
            {t.experience.heading}
          </h2>
        </div>
        <p className="mt-3 max-w-[60ch] text-muted-foreground">
          {t.experience.subheading}
        </p>

        <div className="mt-8 flex flex-col">
          {t.experience.items.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 80}>
              <ExperienceRow
                entry={entry}
                isLast={index === t.experience.items.length - 1}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
