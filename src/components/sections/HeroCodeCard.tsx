import type { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'
import { useTypewriter } from '@/hooks/useTypewriter'
import { cn } from '@/lib/cn'

type TokenTone = 'keyword' | 'plain' | 'key' | 'punct' | 'string' | 'comment'

interface CodeToken {
  text: string
  tone: TokenTone
}

const TONE_CLASSES: Record<TokenTone, string> = {
  keyword: 'text-accent',
  plain: 'text-foreground',
  key: 'text-foreground',
  punct: 'text-muted-foreground',
  string: 'text-[#e2a256]',
  comment: 'italic text-muted-foreground/70',
}

/** A small, honest "whoami" snippet — real facts about Lautaro, not project code. */
const CODE_LINES: CodeToken[][] = [
  [{ text: '// Made in Córdoba, Argentina', tone: 'comment' }],
  [
    { text: 'const ', tone: 'keyword' },
    { text: 'developer', tone: 'plain' },
    { text: ' = {', tone: 'punct' },
  ],
  [
    { text: '  name', tone: 'key' },
    { text: ': ', tone: 'punct' },
    { text: '"Lautaro Johnston"', tone: 'string' },
    { text: ',', tone: 'punct' },
  ],
  [
    { text: '  role', tone: 'key' },
    { text: ': ', tone: 'punct' },
    { text: '"Full-Stack Developer"', tone: 'string' },
    { text: ',', tone: 'punct' },
  ],
  [
    { text: '  location', tone: 'key' },
    { text: ': ', tone: 'punct' },
    { text: '"Málaga, Spain"', tone: 'string' },
    { text: ',', tone: 'punct' },
  ],
  [
    { text: '  stack', tone: 'key' },
    { text: ': [', tone: 'punct' },
  ],
  [
    { text: '    "React"', tone: 'string' },
    { text: ',', tone: 'punct' },
  ],
  [
    { text: '    "TypeScript"', tone: 'string' },
    { text: ',', tone: 'punct' },
  ],
  [
    { text: '    "Node.js"', tone: 'string' },
    { text: ',', tone: 'punct' },
  ],
  [{ text: '    // ...and more ↓', tone: 'comment' }],
  [{ text: '  ],', tone: 'punct' }],
  [
    { text: '  openToWork', tone: 'key' },
    { text: ': ', tone: 'punct' },
    { text: 'true', tone: 'keyword' },
  ],
  [{ text: '};', tone: 'punct' }],
]

const PLAIN_LINES = CODE_LINES.map((line) =>
  line.reduce((text, token) => text + token.text, ''),
)

/** Renders `tokens` with only its first `revealedCount` characters visible. */
function renderTokens(tokens: CodeToken[], revealedCount: number) {
  let consumed = 0
  const nodes: ReactNode[] = []

  for (let i = 0; i < tokens.length; i += 1) {
    if (consumed >= revealedCount) break
    const token = tokens[i]
    const available = revealedCount - consumed
    const text = token.text.slice(0, available)

    nodes.push(
      <span key={i} className={TONE_CLASSES[token.tone]}>
        {text}
      </span>,
    )

    consumed += token.text.length
    if (text.length < token.text.length) break
  }

  return nodes
}

/**
 * A tilted "code editor" card that types out a small, real whoami snippet
 * once it scrolls into view, and straightens up on hover. Purely
 * illustrative — the same facts are already in the page's real text content
 * — so it's hidden from assistive tech entirely.
 */
export function HeroCodeCard() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3 })
  const revealed = useTypewriter(PLAIN_LINES, { active: isInView })

  const lastTypingLine = revealed.findIndex(
    (count, index) => count < PLAIN_LINES[index].length,
  )
  const isDoneTyping = lastTypingLine === -1

  return (
    <div ref={ref} aria-hidden="true" className="[perspective:1400px]">
      <div
        className={cn(
          'w-full max-w-lg rounded-2xl border border-border bg-card shadow-xl transition-transform duration-500 ease-out',
          '[transform:rotate3d(1,-1,0,10deg)] hover:[transform:rotate3d(0,0,0,0deg)]',
        )}
      >
        <div className="flex items-center gap-1.5 border-b border-border px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            whoami.ts
          </span>
        </div>
        <pre className="overflow-x-auto p-6 font-mono text-sm leading-loose">
          <code>
            {CODE_LINES.map((tokens, index) => {
              const isCurrentLine = index === lastTypingLine
              return (
                <div key={index}>
                  {renderTokens(tokens, revealed[index])}
                  {(isCurrentLine || (isDoneTyping && index === CODE_LINES.length - 1)) && (
                    <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-accent motion-reduce:hidden" />
                  )}
                </div>
              )
            })}
          </code>
        </pre>
      </div>
    </div>
  )
}
