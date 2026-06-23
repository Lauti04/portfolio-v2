import { en } from '@/content/en'
import { es } from '@/content/es'
import type { Dictionary } from '@/content/types'
import type { Locale } from './config'

export const dictionaries: Record<Locale, Dictionary> = { es, en }
