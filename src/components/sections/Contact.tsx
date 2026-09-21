import { IconBrandWhatsapp, IconCheck, IconCopy, IconMail, IconPhone } from '@tabler/icons-react'
import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { useI18n } from '@/features/i18n/i18n-context'
import { cn } from '@/lib/cn'
import { useCursorGlow } from './useCursorGlow'

const EMAIL = 'lautarojohnston2@gmail.com'
const PHONE_DISPLAY = '+34 608 94 83 28'
const WHATSAPP_URL = 'https://wa.me/34608948328'

const pillClasses =
  'inline-flex h-11 items-center gap-2 rounded-full border border-accent-foreground/25 bg-accent-foreground/10 px-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-foreground/20'

type CopiedField = 'email' | 'phone' | null

/**
 * Copies `value` to the clipboard and briefly reports success, so the caller
 * can swap an icon/label without needing its own timer bookkeeping.
 */
function useCopyToClipboard() {
  const [copied, setCopied] = useState<CopiedField>(null)

  const copy = (field: CopiedField, value: string) => {
    navigator.clipboard.writeText(value).then(
      () => {
        setCopied(field)
        setTimeout(() => setCopied((current) => (current === field ? null : current)), 1600)
      },
      () => {
        // Clipboard write can be denied (permissions, unfocused document).
        // The value is already visible as plain text, so it's still readable
        // and manually copyable — no further fallback needed.
      },
    )
  }

  return { copied, copy }
}

export function Contact() {
  const { t } = useI18n()
  const { containerRef, glowRef, isInteractive } = useCursorGlow<HTMLDivElement>()
  const { copied, copy } = useCopyToClipboard()

  return (
    <Section id="contact" ariaLabelledby="contact-heading">
      <Container>
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-3xl bg-accent px-6 py-14 text-center sm:px-12 sm:py-20"
        >
          <div
            ref={glowRef}
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute inset-0',
              isInteractive ? 'opacity-[0.12]' : 'opacity-[0.08]',
            )}
            style={{
              backgroundImage: isInteractive
                ? 'radial-gradient(560px circle at var(--x, 50%) var(--y, 30%), var(--color-accent-foreground) 0%, transparent 70%)'
                : 'radial-gradient(560px circle at 50% 20%, var(--color-accent-foreground) 0%, transparent 70%)',
            }}
          />

          <div className="relative flex flex-col items-center gap-4">
            <h2
              id="contact-heading"
              className="text-balance text-3xl font-semibold tracking-tight text-accent-foreground sm:text-4xl"
            >
              {t.contact.heading}
            </h2>
            <p className="max-w-[45ch] text-accent-foreground/80">
              {t.contact.subheading}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={pillClasses}
              >
                <IconBrandWhatsapp size={18} className="shrink-0" />
                {t.contact.whatsapp}
              </a>
              <button
                type="button"
                onClick={() => copy('email', EMAIL)}
                className={pillClasses}
              >
                {copied === 'email' ? (
                  <IconCheck size={18} className="shrink-0" />
                ) : (
                  <IconMail size={18} className="shrink-0" />
                )}
                {copied === 'email' ? t.contact.copied : EMAIL}
                <IconCopy size={14} className="shrink-0 opacity-60" />
              </button>
              <button
                type="button"
                onClick={() => copy('phone', PHONE_DISPLAY)}
                className={pillClasses}
              >
                {copied === 'phone' ? (
                  <IconCheck size={18} className="shrink-0" />
                ) : (
                  <IconPhone size={18} className="shrink-0" />
                )}
                {copied === 'phone' ? t.contact.copied : PHONE_DISPLAY}
                <IconCopy size={14} className="shrink-0 opacity-60" />
              </button>
            </div>

            <p aria-live="polite" className="sr-only">
              {copied === 'email' && `${EMAIL} ${t.contact.copied}`}
              {copied === 'phone' && `${PHONE_DISPLAY} ${t.contact.copied}`}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
