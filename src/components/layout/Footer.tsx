import { IconBrandGithub, IconBrandWhatsapp } from '@tabler/icons-react'
import { IconLinkedin } from '@/components/icons/IconLinkedin'
import { Container } from '@/components/ui/Container'
import { GITHUB_URL, LINKEDIN_URL, WHATSAPP_URL } from '@/content/social-links'
import { useI18n } from '@/features/i18n/i18n-context'

const iconLinkClasses =
  'flex items-center justify-center rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t">
      <Container>
        <div className="flex flex-col items-center gap-4 py-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {year} Lautaro Johnston
          </p>
          <div className="flex items-center gap-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.github}
              className={iconLinkClasses}
            >
              <IconBrandGithub size={20} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.linkedin}
              className={iconLinkClasses}
            >
              <IconLinkedin size={20} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.whatsapp}
              className={iconLinkClasses}
            >
              <IconBrandWhatsapp size={20} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
