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
  type Icon,
} from '@tabler/icons-react'

export interface TechMeta {
  /** Omitted for technologies without a dedicated brand icon — falls back to `initials`. */
  icon?: Icon
  /** Omitted for monochrome brands (GitHub, Cursor, Express) — inherits the badge's text color. */
  color?: string
  /** Shown as a small monogram tile when `icon` is omitted. */
  initials?: string
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
  Express: { initials: 'Ex' },
  PHP: { icon: IconBrandPhp, color: '#777bb4' },
  Java: { initials: 'Jv', color: '#f89820' },
  Strapi: { initials: 'St', color: '#4945ff' },
  MySQL: { icon: IconBrandMysql, color: '#00758f' },
  PostgreSQL: { initials: 'Pg', color: '#336791' },
  SQLite: { initials: 'Sq', color: '#0f80cc' },
  MongoDB: { icon: IconBrandMongodb, color: '#47a248' },
  Git: { icon: IconBrandGit, color: '#f05032' },
  GitHub: { icon: IconBrandGithub },
  Bitbucket: { icon: IconBrandBitbucket, color: '#2684ff' },
  Docker: { icon: IconBrandDocker, color: '#2496ed' },
  Jira: { icon: IconBrandJira, color: '#0052cc' },
  'VS Code': { icon: IconBrandVscode, color: '#007acc' },
  Cursor: { initials: 'Cu' },
  ChatGPT: { icon: IconBrandOpenai, color: '#10a37f' },
}

/** Curated, compact list for the Profile Snapshot's "Stack" field. */
export const STACK = [
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
