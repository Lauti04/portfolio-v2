import { IconCode, IconWorld } from '@tabler/icons-react'
import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
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

/** One compact row: icon badge, role/company, one-line summary and dates. */
function ExperienceRow({ entry, isFirst }: { entry: ExperienceEntry; isFirst: boolean }) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-5',
        !isFirst && 'border-t border-border',
      )}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-foreground">
        {ROLE_ICONS[entry.id]}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-foreground">{entry.role}</p>
        <p className="text-sm text-accent">
          {entry.company} · {entry.location}
        </p>
        <p className="mt-1.5 max-w-[52ch] text-sm text-muted-foreground">
          {entry.description}
        </p>
      </div>
      <p className="shrink-0 font-mono text-xs text-muted-foreground sm:text-right">
        {entry.dateRange}
      </p>
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

        <div className="mt-6 flex flex-col">
          {t.experience.items.map((entry, index) => (
            <ExperienceRow key={entry.id} entry={entry} isFirst={index === 0} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
