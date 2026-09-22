import type { Dictionary } from './types'

export const fr: Dictionary = {
  a11y: {
    skipToContent: 'Aller au contenu',
  },
  theme: {
    switchToLight: 'Passer au thème clair',
    switchToDark: 'Passer au thème sombre',
  },
  language: {
    label: 'Changer de langue',
  },
  nav: {
    label: 'Navigation de la page',
    about: 'À propos',
    experience: 'Expérience',
    projects: 'Projets',
    contact: 'Contact',
  },
  hero: {
    eyebrow: 'Développeur Full-Stack · React · TypeScript',
    headline: 'Je crée des produits web propres et rapides.',
    status: 'Ouvert aux opportunités',
    subline:
      "Développement avec React, TypeScript et Node.js — avec un soin particulier pour la performance, l'accessibilité et le détail.",
    viewWork: 'Voir mes projets',
    viewCv: 'Voir le CV',
    cvLabel: 'CV',
    cvPreview: 'Aperçu',
    cvDownload: 'Télécharger',
  },
  techMarquee: {
    caption: "Outils et technologies que j'utilise",
  },
  profile: {
    heading: 'Aperçu du profil',
    about:
      "Développeur Full-Stack Junior titulaire d'un BTS en Développement d'Applications Web, actuellement en charge de fonctionnalités en production chez VyA Projects. À l'aise sur toute la pile technique — des interfaces React à PHP, SQL et Strapi — avec l'habitude d'un code propre, de la revue de code et d'une livraison structurée via Jira.",
    roleLabel: 'Poste',
    roleValue: 'Développeur Full-Stack Junior — VyA Projects',
    educationLabel: 'Formation',
    educationValue: "BTS — Développement d'Applications Web (DAW)",
    certificationValue: 'AI Fundamentals — Google (Coursera)',
    languagesLabel: 'Langues',
    languagesValue: 'Espagnol (natif) · Anglais (B2)',
    connectLabel: 'Contact',
    contactModal: {
      heading: 'Envoyer un message',
      explain:
        "Cela ouvre votre client de messagerie avec le message pré-rempli — rien n'est envoyé depuis cette page.",
      nameLabel: 'Nom',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Votre email',
      emailPlaceholder: 'vous@exemple.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Que souhaitez-vous dire ?',
      send: 'Ouvrir le client de messagerie',
      close: 'Fermer',
      whatsappCta: 'Ou écrivez-moi sur WhatsApp',
      subjectTemplate: 'Contact portfolio de la part de {name}',
    },
  },
  experience: {
    heading: 'Expérience',
    subheading: "Là où j'ai mis ce stack à l'œuvre.",
    items: [
      {
        id: 'vya',
        role: 'Développeur Full-Stack Junior',
        company: 'VyA Projects',
        location: 'À distance, Espagne',
        dateRange: 'Déc 2025 – Juin 2026',
        description:
          'Développement et maintenance de fonctionnalités sur plusieurs applications web en production — interfaces, mode sombre, composants réutilisables, formulaires — via des workflows de revue basés sur Jira et Git.',
      },
      {
        id: 'universalTelecom',
        role: 'Stagiaire en Développement Web',
        company: 'Universal Telecom',
        location: 'Malaga, Espagne',
        dateRange: 'Mars 2025 – Juin 2025',
        description:
          "Refonte de l'interface et du composant calendrier d'un site d'entreprise, ajout de fonctionnalités AJAX/Fetch et automatisation de rapports PHP.",
      },
    ],
  },
  projects: {
    heading: 'Projets Sélectionnés',
    subheading: "Une sélection de projets full-stack, d'interfaces et d'expériences web.",
    viewCode: 'Voir le code',
    items: [
      {
        id: 'eventflow',
        title: 'EventFlow',
        description:
          "Application full-stack de gestion d'événements, de tâches et de rappels, avec authentification, un calendrier interactif et plusieurs vues de planification.",
      },
      {
        id: 'dulceEncanto',
        title: 'Dulce Encanto',
        description:
          "Site web full-stack pour une pâtisserie, avec catalogue de produits et outils d'administration, développé avec PHP, MySQL, Bootstrap et JavaScript.",
      },
      {
        id: 'happyPaws',
        title: 'Happy Paws',
        description:
          "Landing page frontend pour des services pour animaux, basée sur un template et adaptée avec HTML, CSS et JavaScript. Comprend un slider, une galerie, des services, des offres et du contenu d'adoption.",
      },
      {
        id: 'malagaSupercars',
        title: 'Malaga Supercars',
        description:
          "Catalogue de véhicules full-stack académique avec filtres de recherche et persistance MySQL, développé avec HTML, CSS et PHP.",
      },
    ],
  },
  strengths: {
    heading: "Ce que j'apporte",
    subheading: "Quelques qualités qu'on ne voit pas dans une liste de technologies.",
    reviewedLabel: 'Vérifié',
    items: [
      {
        title: 'Apprentissage rapide',
        description:
          'Passé d\'une formation intensive à la mise en production de fonctionnalités en quelques mois — à l\'aise pour prendre en main rapidement de nouvelles piles techniques, outils et bases de code.',
      },
      {
        title: 'Véritable expérience en production',
        description:
          'Interfaces, mode sombre, composants réutilisables et formulaires livrés dans deux entreprises — via de vrais tickets Jira et des revues de code basées sur Git, pas des projets personnels isolés.',
      },
      {
        title: 'Développement assisté par IA, avec discernement',
        description:
          'À l\'aise avec des outils comme Cursor et ChatGPT pour aller plus vite — mais toujours avec le discernement nécessaire pour décider quoi garder, remettre en question ou réécrire.',
      },
    ],
  },
  contact: {
    heading: 'Travaillons ensemble',
    subheading: 'Ouvert aux postes à temps plein et aux projets freelance.',
    whatsapp: 'WhatsApp',
    copyEmail: "Copier l'email",
    copyPhone: 'Copier le téléphone',
    copied: 'Copié !',
  },
  footer: {
    github: 'Profil GitHub',
    linkedin: 'Profil LinkedIn',
    whatsapp: 'WhatsApp',
  },
}
