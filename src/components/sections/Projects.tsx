import {
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMysql,
  IconBrandPhp,
  IconBrandReact,
  IconBrandTailwind,
  type Icon,
} from '@tabler/icons-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import type { ProjectId } from '@/content/types'
import { useI18n } from '@/features/i18n/i18n-context'

interface TechMeta {
  icon: Icon
  color: string
}

/** Real per-technology brand colors — an intentional exception to the token-only rule. */
const TECH: Record<string, TechMeta> = {
  React: { icon: IconBrandReact, color: '#61dafb' },
  JavaScript: { icon: IconBrandJavascript, color: '#f7df1e' },
  PHP: { icon: IconBrandPhp, color: '#777bb4' },
  MySQL: { icon: IconBrandMysql, color: '#00758f' },
  'Tailwind CSS': { icon: IconBrandTailwind, color: '#38bdf8' },
  Bootstrap: { icon: IconBrandBootstrap, color: '#7952b3' },
  HTML: { icon: IconBrandHtml5, color: '#e34f26' },
  CSS: { icon: IconBrandCss3, color: '#1572b6' },
}

interface ProjectMeta {
  image: string
  githubUrl: string
  stack: string[]
}

const PROJECT_META: Record<ProjectId, ProjectMeta> = {
  eventflow: {
    image: '/projects/eventflow-cover.webp',
    githubUrl: 'https://github.com/Lauti04/DAW/tree/master/Projects/EventFlow',
    stack: ['PHP', 'MySQL', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  dulceEncanto: {
    image: '/projects/dulce-encanto-cover.webp',
    githubUrl:
      'https://github.com/Lauti04/DAW/tree/master/Projects/ProyectoPasteleria',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
  },
  happyPaws: {
    image: '/projects/happy-paws-cover.webp',
    githubUrl: 'https://github.com/Lauti04/DAW/tree/master/Projects/HappyPaws',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  malagaSupercars: {
    image: '/projects/malaga-supercars-cover.webp',
    githubUrl:
      'https://github.com/Lauti04/DAW/tree/master/Projects/Examen%203%C2%BA%20evaluaci%C3%B3n',
    stack: ['HTML', 'CSS', 'PHP', 'MySQL'],
  },
}

interface ProjectEntry {
  id: ProjectId
  title: string
  description: string
}

/** A small tech chip with the technology's own brand-colored icon. */
function TechChip({ name }: { name: string }) {
  const meta = TECH[name]
  const Icon = meta?.icon

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted px-2.5 py-1.5 text-xs text-foreground">
      {Icon && <Icon size={14} style={{ color: meta.color }} aria-hidden="true" />}
      {name}
    </span>
  )
}

/** One project card: cover image, title, description, tech chips, code link. */
function ProjectCard({
  entry,
  viewCodeLabel,
}: {
  entry: ProjectEntry
  viewCodeLabel: string
}) {
  const meta = PROJECT_META[entry.id]

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[transform,border-color] duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/50">
      <div className="aspect-[3/2] w-full overflow-hidden bg-muted">
        <img
          src={meta.image}
          alt={entry.title}
          loading="lazy"
          decoding="async"
          width={1200}
          height={800}
          className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {entry.title}
        </h3>
        <p className="flex-1 text-sm text-muted-foreground">
          {entry.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {meta.stack.map((item) => (
            <TechChip key={item} name={item} />
          ))}
        </div>
        <Button
          href={meta.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          variant="outline"
          aria-label={`${viewCodeLabel}: ${entry.title}`}
          className="mt-1 self-start"
        >
          <IconBrandGithub size={16} className="shrink-0" />
          {viewCodeLabel}
        </Button>
      </div>
    </article>
  )
}

export function Projects() {
  const { t } = useI18n()

  return (
    <Section id="projects" ariaLabelledby="projects-heading">
      <Container>
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="h-0.5 w-2.5 rounded-full bg-accent" />
          <h2
            id="projects-heading"
            className="text-2xl font-semibold tracking-tight text-foreground"
          >
            {t.projects.heading}
          </h2>
        </div>
        <p className="mt-3 max-w-[60ch] text-muted-foreground">
          {t.projects.subheading}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.projects.items.map((entry) => (
            <ProjectCard
              key={entry.id}
              entry={entry}
              viewCodeLabel={t.projects.viewCode}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
