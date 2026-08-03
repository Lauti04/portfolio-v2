import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandWhatsappFilled,
  IconBriefcase,
  IconDownload,
  IconEye,
  IconLanguage,
  IconMail,
  IconSchool,
  IconStack2,
  IconX,
} from '@tabler/icons-react'
import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import type { Locale } from '@/features/i18n/config'
import { useI18n } from '@/features/i18n/i18n-context'
import { cn } from '@/lib/cn'

const CV_FILES: Record<Locale, string> = {
  es: '/cv/lautaro-johnston-cv-es.pdf',
  en: '/cv/lautaro-johnston-cv-en.pdf',
}

const STACK = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'PHP',
  'SQL',
  'Strapi',
  'Git',
  'Docker',
  'Jira',
]

const EMAIL = 'lautarojohnston2@gmail.com'
const LINKEDIN_URL = 'https://www.linkedin.com/in/lautaro-johnston/'
const GITHUB_URL = 'https://github.com/Lauti04'
const WHATSAPP_URL = 'https://wa.me/34608948328'

const linkClasses =
  'link-underline inline-flex items-center gap-1.5 text-sm text-foreground'

/** One label/value pair in the metadata grid, with a mono uppercase label. */
function SnapshotField({
  icon,
  label,
  children,
}: {
  icon: ReactNode
  label: string
  children: ReactNode
}) {
  return (
    <div className="p-6">
      <p className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-muted-foreground">
        {icon}
        {label}
      </p>
      <div className="mt-2 text-sm text-foreground">{children}</div>
    </div>
  )
}

interface ContactModalLabels {
  heading: string
  explain: string
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  send: string
  close: string
  whatsappCta: string
  subjectTemplate: string
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'

/**
 * Contact form rendered in a portal so its `fixed` overlay isn't affected by
 * any ancestor's `overflow`/`transform`. Traps focus, closes on Escape and on
 * backdrop click, and hands focus back to the trigger via `onClose`.
 */
function ContactModal({
  labels,
  onClose,
}: {
  labels: ContactModalLabels
  onClose: () => void
}) {
  const panelRef = useRef<HTMLDivElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)
  const headingId = useId()

  useEffect(() => {
    nameInputRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        FOCUSABLE_SELECTOR,
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const senderEmail = (
      form.elements.namedItem('senderEmail') as HTMLInputElement
    ).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)
      .value

    const subject = labels.subjectTemplate.replace('{name}', name)
    const body = `Email: ${senderEmail}\n\nMessage:\n${message}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    onClose()
  }

  const fieldClasses =
    'rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring'

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-lg"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 id={headingId} className="text-lg font-semibold text-foreground">
            {labels.heading}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label={labels.close}
            className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <IconX size={16} />
          </button>
        </div>

        <p className="mt-2 text-sm text-muted-foreground">{labels.explain}</p>

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
          <label className="flex flex-col gap-1 text-sm text-foreground">
            {labels.nameLabel}
            <input
              ref={nameInputRef}
              name="name"
              type="text"
              required
              placeholder={labels.namePlaceholder}
              className={fieldClasses}
            />
          </label>
          <label className="flex flex-col gap-1 text-sm text-foreground">
            {labels.emailLabel}
            <input
              name="senderEmail"
              type="email"
              required
              placeholder={labels.emailPlaceholder}
              className={fieldClasses}
            />
          </label>
          <label className="flex flex-col gap-1 text-sm text-foreground">
            {labels.messageLabel}
            <textarea
              name="message"
              required
              rows={4}
              placeholder={labels.messagePlaceholder}
              className={cn(fieldClasses, 'resize-none')}
            />
          </label>
          <Button type="submit" size="md" variant="primary" className="mt-1">
            {labels.send}
          </Button>
        </form>

        <div className="mt-4 border-t border-border pt-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            <IconBrandWhatsappFilled size={16} className="shrink-0" />
            {labels.whatsappCta}
          </a>
        </div>
      </div>
    </div>,
    document.body,
  )
}

/** Two labeled rows of outbound links: contact channels, then CV actions. */
function QuickLinks({
  connectLabel,
  cvLabel,
  cvPreviewLabel,
  cvDownloadLabel,
  cvHref,
  contactModalLabels,
}: {
  connectLabel: string
  cvLabel: string
  cvPreviewLabel: string
  cvDownloadLabel: string
  cvHref: string
  contactModalLabels: ContactModalLabels
}) {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const emailTriggerRef = useRef<HTMLButtonElement>(null)

  const closeContact = () => {
    setIsContactOpen(false)
    emailTriggerRef.current?.focus()
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
          {connectLabel}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <button
            ref={emailTriggerRef}
            type="button"
            onClick={() => setIsContactOpen(true)}
            className={cn(linkClasses, 'cursor-pointer border-0 bg-transparent p-0')}
          >
            <IconMail size={16} className="shrink-0" />
            Email
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            <IconBrandWhatsappFilled size={16} className="shrink-0" />
            WhatsApp
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            <IconBrandLinkedinFilled size={16} className="shrink-0" />
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            <IconBrandGithubFilled size={16} className="shrink-0" />
            GitHub
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
          {cvLabel}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            <IconEye size={16} className="shrink-0" />
            {cvPreviewLabel}
          </a>
          <a href={cvHref} download className={linkClasses}>
            <IconDownload size={16} className="shrink-0" />
            {cvDownloadLabel}
          </a>
        </div>
      </div>

      {isContactOpen && (
        <ContactModal labels={contactModalLabels} onClose={closeContact} />
      )}
    </div>
  )
}

export function ProfileSnapshot() {
  const { t, locale } = useI18n()

  return (
    <Section id="about" ariaLabelledby="profile-heading">
      <Container>
        <div className="grid overflow-hidden rounded-2xl border border-border md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="flex flex-col gap-6 p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="h-0.5 w-2.5 rounded-full bg-accent" />
              <h2
                id="profile-heading"
                className="text-2xl font-semibold tracking-tight text-foreground"
              >
                {t.profile.heading}
              </h2>
            </div>
            <p className="max-w-[55ch] text-muted-foreground">
              {t.profile.about}
            </p>
            <QuickLinks
              connectLabel={t.profile.connectLabel}
              cvLabel={t.hero.cvLabel}
              cvPreviewLabel={t.hero.cvPreview}
              cvDownloadLabel={t.hero.cvDownload}
              cvHref={CV_FILES[locale]}
              contactModalLabels={t.profile.contactModal}
            />
          </div>

          <div className="grid grid-cols-1 divide-y divide-border border-t border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 md:border-l md:border-t-0">
            <SnapshotField
              icon={<IconBriefcase size={14} className="shrink-0" />}
              label={t.profile.roleLabel}
            >
              {t.profile.roleValue}
            </SnapshotField>
            <SnapshotField
              icon={<IconSchool size={14} className="shrink-0" />}
              label={t.profile.educationLabel}
            >
              {t.profile.educationValue}
            </SnapshotField>
            <SnapshotField
              icon={<IconLanguage size={14} className="shrink-0" />}
              label={t.profile.languagesLabel}
            >
              {t.profile.languagesValue}
            </SnapshotField>
            <SnapshotField
              icon={<IconStack2 size={14} className="shrink-0" />}
              label={t.profile.stackLabel}
            >
              <div className="flex flex-wrap gap-2">
                {STACK.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-muted px-2 py-1 text-xs text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </SnapshotField>
          </div>
        </div>
      </Container>
    </Section>
  )
}
