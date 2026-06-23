import { Container } from '@/components/ui/Container'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t">
      <Container>
        <p className="py-8 text-sm text-muted-foreground">
          © {year} Lautaro Johnston
        </p>
      </Container>
    </footer>
  )
}
