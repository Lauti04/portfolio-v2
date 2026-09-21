import {
  IconBrandBitbucket,
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandDocker,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandJira,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandOpenai,
  IconBrandPhp,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVscode,
} from '@tabler/icons-react'
import SiCursor from '@icons-pack/react-simple-icons/icons/SiCursor'
import SiExpress from '@icons-pack/react-simple-icons/icons/SiExpress'
import SiOpenjdk from '@icons-pack/react-simple-icons/icons/SiOpenjdk'
import SiPostgresql from '@icons-pack/react-simple-icons/icons/SiPostgresql'
import SiSqlite from '@icons-pack/react-simple-icons/icons/SiSqlite'
import SiStrapi from '@icons-pack/react-simple-icons/icons/SiStrapi'
import type { ComponentType, CSSProperties } from 'react'

/** Common shape both @tabler/icons-react and @icons-pack/react-simple-icons components satisfy. */
type TechIconComponent = ComponentType<{
  size?: number
  className?: string
  style?: CSSProperties
  'aria-hidden'?: boolean | 'true' | 'false'
}>

export interface TechMeta {
  icon: TechIconComponent
  /** Omitted for monochrome brands (GitHub, Cursor, Express, OpenJDK, SQLite) — inherits the badge's text color. */
  color?: string
}

/** Real per-technology brand colors — an intentional exception to the token-only rule. */
export const TECH_META: Record<string, TechMeta> = {
  React: { icon: IconBrandReact, color: '#61dafb' },
  TypeScript: { icon: IconBrandTypescript, color: '#3178c6' },
  JavaScript: { icon: IconBrandJavascript, color: '#f7df1e' },
  HTML: { icon: IconBrandHtml5, color: '#e34f26' },
  CSS: { icon: IconBrandCss3, color: '#1572b6' },
  'Tailwind CSS': { icon: IconBrandTailwind, color: '#38bdf8' },
  Bootstrap: { icon: IconBrandBootstrap, color: '#7952b3' },
  'Node.js': { icon: IconBrandNodejs, color: '#5fa04e' },
  Express: { icon: SiExpress },
  PHP: { icon: IconBrandPhp, color: '#777bb4' },
  Java: { icon: SiOpenjdk },
  Strapi: { icon: SiStrapi, color: '#4945ff' },
  MySQL: { icon: IconBrandMysql, color: '#00758f' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169e1' },
  SQLite: { icon: SiSqlite },
  MongoDB: { icon: IconBrandMongodb, color: '#47a248' },
  Git: { icon: IconBrandGit, color: '#f05032' },
  GitHub: { icon: IconBrandGithub },
  Bitbucket: { icon: IconBrandBitbucket, color: '#2684ff' },
  Docker: { icon: IconBrandDocker, color: '#2496ed' },
  Jira: { icon: IconBrandJira, color: '#0052cc' },
  'VS Code': { icon: IconBrandVscode, color: '#007acc' },
  Cursor: { icon: SiCursor },
  ChatGPT: { icon: IconBrandOpenai, color: '#10a37f' },
}

/** Full real stack — from the CV's Technical Skills section — for the tech marquee. */
export const MARQUEE_STACK = [
  'React',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Bootstrap',
  'Node.js',
  'Express',
  'PHP',
  'Java',
  'Strapi',
  'MySQL',
  'PostgreSQL',
  'SQLite',
  'MongoDB',
  'Git',
  'GitHub',
  'Bitbucket',
  'Docker',
  'Jira',
  'VS Code',
  'Cursor',
  'ChatGPT',
]
