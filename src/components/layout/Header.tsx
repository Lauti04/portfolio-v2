import { Container } from '@/components/ui/Container'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#"
            className="rounded-md font-semibold tracking-tight text-foreground"
          >
            Lautaro Johnston
          </a>
          <nav aria-label="Site controls" className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </nav>
        </div>
      </Container>
    </header>
  )
}
