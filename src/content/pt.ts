import type { Dictionary } from './types'

export const pt: Dictionary = {
  a11y: {
    skipToContent: 'Saltar para o conteúdo',
  },
  theme: {
    switchToLight: 'Mudar para o tema claro',
    switchToDark: 'Mudar para o tema escuro',
  },
  language: {
    label: 'Mudar de idioma',
  },
  nav: {
    label: 'Navegação da página',
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    contact: 'Contacto',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  hero: {
    eyebrow: 'Programador Full-Stack · React · TypeScript',
    headline: 'Construo produtos web limpos e rápidos.',
    status: 'Aberto a oportunidades',
    subline:
      'Desenvolvimento com React, TypeScript e Node.js — com atenção ao desempenho, à acessibilidade e ao detalhe.',
    viewWork: 'Ver projetos',
    viewCv: 'Ver currículo',
    cvLabel: 'CV',
    cvPreview: 'Pré-visualizar',
    cvDownload: 'Transferir',
  },
  techMarquee: {
    caption: 'Ferramentas e tecnologias com que trabalho',
  },
  profile: {
    heading: 'Resumo do perfil',
    about:
      'Programador Full-Stack Júnior com um Técnico Superior em Desenvolvimento de Aplicações Web, atualmente a construir funcionalidades em produção na VyA Projects. À vontade em toda a stack — de interfaces em React a PHP, SQL e Strapi — com hábito de código limpo, revisão de código e entregas estruturadas através do Jira.',
    roleLabel: 'Função',
    roleValue: 'Programador Full-Stack Júnior — VyA Projects',
    educationLabel: 'Formação',
    educationValue: 'Técnico Superior — Desenvolvimento de Aplicações Web (DAW), DigitechFP',
    certificationValue: 'AI Fundamentals — Google (Coursera)',
    languagesLabel: 'Idiomas',
    languagesValue: 'Espanhol (nativo) · Inglês (B2, certificado Cambridge)',
    connectLabel: 'Contacto',
    contactModal: {
      heading: 'Enviar uma mensagem',
      explain:
        'Isto abre o teu cliente de email com a mensagem já preenchida — nada é enviado a partir desta página.',
      nameLabel: 'Nome',
      namePlaceholder: 'O teu nome',
      emailLabel: 'O teu email',
      emailPlaceholder: 'tu@exemplo.com',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'O que gostarias de dizer?',
      send: 'Abrir cliente de email',
      close: 'Fechar',
      whatsappCta: 'Ou escreve-me no WhatsApp',
      subjectTemplate: 'Contacto do portefólio de {name}',
    },
  },
  experience: {
    heading: 'Experiência',
    subheading: 'Onde já pus este stack a trabalhar.',
    items: [
      {
        id: 'vya',
        role: 'Programador Full-Stack Júnior',
        company: 'VyA Projects',
        location: 'Remoto, Espanha',
        dateRange: 'Dez 2025 – Jun 2026',
        description:
          'Desenvolvimento e manutenção de funcionalidades em várias aplicações web em produção — interfaces, modo escuro, componentes reutilizáveis, formulários — através de fluxos de revisão baseados em Jira e Git.',
      },
      {
        id: 'universalTelecom',
        role: 'Estagiário de Desenvolvimento Web',
        company: 'Universal Telecom',
        location: 'Málaga, Espanha',
        dateRange: 'Mar 2025 – Jun 2025',
        description:
          'Reformulação da interface e do componente de calendário de um site corporativo, com adição de funcionalidades AJAX/Fetch e relatórios automáticos em PHP.',
      },
    ],
  },
  projects: {
    heading: 'Projetos Selecionados',
    subheading: 'Uma seleção de projetos full-stack, interfaces e experiências web.',
    viewCode: 'Ver código',
    items: [
      {
        id: 'eventflow',
        title: 'EventFlow',
        description:
          'Aplicação full-stack para gerir eventos, tarefas e lembretes, com autenticação, calendário interativo e várias vistas de planeamento.',
      },
      {
        id: 'dulceEncanto',
        title: 'Dulce Encanto',
        description:
          'Site full-stack para uma pastelaria, com catálogo de produtos e ferramentas de administração, desenvolvido com PHP, MySQL, Bootstrap e JavaScript.',
      },
      {
        id: 'happyPaws',
        title: 'Happy Paws',
        description:
          'Landing page frontend para serviços de animais, baseada num template e adaptada com HTML, CSS e JavaScript. Inclui slider, galeria, serviços, promoções e conteúdo de adoção.',
      },
      {
        id: 'malagaSupercars',
        title: 'Malaga Supercars',
        description:
          'Catálogo de veículos full-stack académico com filtros de pesquisa e persistência em MySQL, desenvolvido com HTML, CSS e PHP.',
      },
    ],
  },
  strengths: {
    heading: 'O que trago',
    subheading: 'Algumas coisas que não aparecem numa lista de tecnologias.',
    reviewedLabel: 'Revisto',
    items: [
      {
        title: 'Aprendizagem rápida',
        description:
          'Passei de uma formação técnica a lançar funcionalidades em produção em meses — à vontade a adaptar-me rapidamente a novos stacks, ferramentas e bases de código.',
      },
      {
        title: 'Experiência real em produção',
        description:
          'Interfaces, modo escuro, componentes reutilizáveis e formulários entregues em duas empresas — com tickets reais do Jira e revisão de código baseada em Git, não projetos pessoais isolados.',
      },
      {
        title: 'Desenvolvimento assistido por IA, com critério',
        description:
          'À vontade a usar ferramentas como o Cursor, o ChatGPT, o Claude e o Gemini para avançar mais depressa — mas sempre com o critério para decidir o que manter, questionar ou reescrever.',
      },
    ],
  },
  contact: {
    heading: 'Vamos trabalhar juntos?',
    subheading: 'Aberto a posições full-time e projetos freelance.',
    whatsapp: 'WhatsApp',
    copyEmail: 'Copiar email',
    copyPhone: 'Copiar telefone',
    copied: 'Copiado!',
  },
  footer: {
    github: 'Perfil de GitHub',
    linkedin: 'Perfil de LinkedIn',
    whatsapp: 'WhatsApp',
  },
}
