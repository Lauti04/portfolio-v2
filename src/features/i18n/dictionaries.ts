import { ca } from '@/content/ca'
import { de } from '@/content/de'
import { en } from '@/content/en'
import { es } from '@/content/es'
import { fr } from '@/content/fr'
import { it } from '@/content/it'
import { nl } from '@/content/nl'
import { pt } from '@/content/pt'
import type { Dictionary } from '@/content/types'
import type { Locale } from './config'

export const dictionaries: Record<Locale, Dictionary> = { es, en, fr, de, pt, it, nl, ca }
