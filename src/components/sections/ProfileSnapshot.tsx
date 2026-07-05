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

/** Shared stroke style for the small outline icons used across this section. */
function iconProps(className: string) {
  return {
    'aria-hidden': true,
    viewBox: '0 0 24 24',
    className,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
}

function IconMail() {
  return (
    <svg {...iconProps('h-4 w-4 shrink-0')}>
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M3 7l9 6l9 -6" />
    </svg>
  )
}

function IconDownload() {
  return (
    <svg {...iconProps('h-4 w-4 shrink-0')}>
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
      <path d="M7 11l5 5l5 -5" />
      <path d="M12 4l0 12" />
    </svg>
  )
}

function IconClose() {
  return (
    <svg {...iconProps('h-4 w-4')}>
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  )
}

/** Eye glyph (stroke style) used for the CV Preview quick link. */
function IconEye() {
  return (
    <svg {...iconProps('h-4 w-4 shrink-0')}>
      <path d="M2 12s3.5 -6 10 -6s10 6 10 6s-3.5 6 -10 6s-10 -6 -10 -6z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

/** Brand marks render filled, matching how outline icon sets typically treat logos. */
function IconWhatsapp() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95l-1.45 5.14l5.26 -1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.46 0 9.9 -4.45 9.9 -9.91c0 -2.65 -1.03 -5.14 -2.9 -7.01a9.82 9.82 0 0 0 -7.01 -2.92zm0 18.15h-.01a8.2 8.2 0 0 1 -4.19 -1.15l-.3 -.18l-3.12 .82l.83 -3.04l-.2 -.31a8.2 8.2 0 0 1 -1.25 -4.38c0 -4.54 3.7 -8.23 8.25 -8.23c2.2 0 4.27 .86 5.83 2.42a8.17 8.17 0 0 1 2.41 5.82c0 4.54 -3.7 8.23 -8.25 8.23zm4.52 -6.16c-.25 -.12 -1.47 -.72 -1.69 -.81c-.23 -.08 -.39 -.12 -.56 .12c-.17 .25 -.64 .81 -.78 .97c-.14 .17 -.29 .19 -.53 .06c-.25 -.12 -1.05 -.39 -1.99 -1.23c-.74 -.66 -1.23 -1.47 -1.38 -1.72c-.14 -.25 -.02 -.38 .11 -.5c.11 -.11 .25 -.29 .37 -.43c.12 -.14 .17 -.25 .25 -.41c.08 -.17 .04 -.31 -.02 -.43c-.06 -.12 -.56 -1.34 -.76 -1.84c-.2 -.48 -.41 -.42 -.56 -.42h-.48c-.17 0 -.43 .06 -.66 .31c-.22 .25 -.86 .84 -.86 2.04c0 1.2 .88 2.37 1 2.53c.12 .17 1.74 2.66 4.22 3.73c.59 .25 1.05 .41 1.41 .52c.59 .19 1.13 .16 1.56 .1c.48 -.07 1.47 -.6 1.67 -1.18c.21 -.58 .21 -1.07 .15 -1.18c-.06 -.1 -.23 -.17 -.48 -.29z" />
    </svg>
  )
}
function IconLinkedin() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="currentColor"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2zM8.34 18.5v-8.5h-2.67v8.5zM7 8.6a1.53 1.53 0 1 0 0 -3.06a1.53 1.53 0 0 0 0 3.06zM18.5 18.5v-4.7c0 -2.5 -1.33 -3.67 -3.1 -3.67c-1.43 0 -2.06 .79 -2.42 1.34v-1.15h-2.68c.03 .7 0 8.5 0 8.5h2.68v-4.75c0 -.25 .02 -.5 .1 -.68c.2 -.5 .66 -1.03 1.44 -1.03c1.02 0 1.43 .78 1.43 1.92v4.54z" />
    </svg>
  )
}

function IconGithub() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="currentColor"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026a9.564 9.564 0 0 1 2.504-.337c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.417-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function IconBriefcase() {
  return (
    <svg {...iconProps('h-3.5 w-3.5 shrink-0')}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
      <line x1="3" y1="13" x2="21" y2="13" />
    </svg>
  )
}

function IconSchool() {
  return (
    <svg {...iconProps('h-3.5 w-3.5 shrink-0')}>
      <path d="M12 4l10 5l-10 5l-10 -5z" />
      <path d="M6 11v4a6 3 0 0 0 12 0v-4" />
    </svg>
  )
}

function IconLanguage() {
  return (
    <svg {...iconProps('h-3.5 w-3.5 shrink-0')}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0 -18" />
    </svg>
  )
}

function IconStack() {
  return (
    <svg {...iconProps('h-3.5 w-3.5 shrink-0')}>
      <path d="M12 3l9 5l-9 5l-9 -5z" />
      <path d="M3 13l9 5l9 -5" />
    </svg>
  )
}

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
            <IconClose />
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
            <IconWhatsapp />
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
            <IconMail />
            Email
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            <IconWhatsapp />
            WhatsApp
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            <IconLinkedin />
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            <IconGithub />
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
            <IconEye />
            {cvPreviewLabel}
          </a>
          <a href={cvHref} download className={linkClasses}>
            <IconDownload />
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
            <SnapshotField icon={<IconBriefcase />} label={t.profile.roleLabel}>
              {t.profile.roleValue}
            </SnapshotField>
            <SnapshotField icon={<IconSchool />} label={t.profile.educationLabel}>
              {t.profile.educationValue}
            </SnapshotField>
            <SnapshotField icon={<IconLanguage />} label={t.profile.languagesLabel}>
              {t.profile.languagesValue}
            </SnapshotField>
            <SnapshotField icon={<IconStack />} label={t.profile.stackLabel}>
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
