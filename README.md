# Demo — Réservation artisan BTP

Projet démo n°3 d'une série de 6 vitrines génériques (site commerce/artisan,
e-commerce, réservation, dashboard SaaS, gestion de tâches collaborative,
chatbot IA), pensées pour un portfolio professionnel.

Ce projet met en scène un artisan **fictif** du BTP (rénovation/construction)
pour démontrer un site de réservation en ligne : présentation de l'activité,
galerie des chantiers réalisés, calendrier de prise de rendez-vous pour un
devis ou une visite technique.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- [react-day-picker](https://daypicker.dev) pour le calendrier de réservation
- Neon Postgres pour la persistance des créneaux/demandes
- Cloudflare R2 pour le stockage des photos de chantiers

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## État du projet

Scaffold initial uniquement (Étape 1 de `PLAN.md`). Direction artistique,
pages fonctionnelles, persistance et déploiement restent à venir — voir
`PLAN.md` pour le détail des étapes.

## Déploiement

Déployé sur [Vercel](https://vercel.com) (plan gratuit suffisant pour une démo),
sous-domaine `reservation.jess-vic.ovh`.
