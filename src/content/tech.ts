import {
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandDocker,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandJira,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  type Icon,
} from '@tabler/icons-react'

export interface TechMeta {
  icon: Icon
  color: string
}

/** Real per-technology brand colors — an intentional exception to the token-only rule. */
export const TECH_META: Record<string, TechMeta> = {
  React: { icon: IconBrandReact, color: '#61dafb' },
  TypeScript: { icon: IconBrandTypescript, color: '#3178c6' },
  JavaScript: { icon: IconBrandJavascript, color: '#f7df1e' },
  'Tailwind CSS': { icon: IconBrandTailwind, color: '#38bdf8' },
  'Node.js': { icon: IconBrandNodejs, color: '#5fa04e' },
  PHP: { icon: IconBrandPhp, color: '#777bb4' },
  MySQL: { icon: IconBrandMysql, color: '#00758f' },
  Bootstrap: { icon: IconBrandBootstrap, color: '#7952b3' },
  HTML: { icon: IconBrandHtml5, color: '#e34f26' },
  CSS: { icon: IconBrandCss3, color: '#1572b6' },
  Git: { icon: IconBrandGit, color: '#f05032' },
  Docker: { icon: IconBrandDocker, color: '#2496ed' },
  Jira: { icon: IconBrandJira, color: '#0052cc' },
}

/** Canonical stack list, shared between the Profile Snapshot pills and the tech marquee. */
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
