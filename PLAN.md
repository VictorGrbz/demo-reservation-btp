# PLAN.md — demo-reservation-btp

> Cadrage rédigé par Jarvis (session racine). Ce document est destiné à être exécuté par l'Artisan (Claude Code local, ouvert dans ce dossier). L'Artisan lit ce PLAN.md et exécute les étapes une par une, y compris les commandes Impeccable.

---

## Contexte

Projet vitrine 3/6 de la convention définie dans `context/infra.md` (après `demo-vitrine-restaurant` et `demo-boutique-en-ligne`). Un site de démonstration pour un artisan du BTP : présentation de l'activité, galerie des chantiers réalisés, réservation en ligne d'un créneau de devis / visite technique. Destiné à être ajouté comme entrée dans le portfolio (`portfolio-victor`).

- **Repo** : `VictorGrbz/demo-reservation-btp` (à créer, public)
- **Dossier workspace** : `livrables/sites-web/demo-reservation-btp/`
- **Déploiement** : Vercel, sous-domaine `reservation.jess-vic.ovh`
- **Stack validée** : Next.js (App Router) + TypeScript + Tailwind CSS, calendrier de réservation (`react-day-picker`), persistance des créneaux/demandes via Neon Postgres (intégration Vercel, free tier). ~~Stockage des photos de chantiers via Cloudflare R2~~ : abandonné (Étape 4), pas d'images pour ce projet test.
- **Contrainte impérative** : aucun code de production n'est écrit par la session racine (Jarvis). Seul l'Artisan, ouvert directement dans ce dossier, écrit le code.

---

## Étape 0 — Initialisation du dépôt Git — ✅ Fait

**Objectif** : créer le dépôt Git dédié à ce projet avant tout code.
**Fichiers concernés** : ce `PLAN.md` (premier fichier du dépôt).
**Destination** : `livrables/sites-web/demo-reservation-btp/` en local, `VictorGrbz/demo-reservation-btp` sur GitHub.
**Critère de fait** : `git init` exécuté, `gh repo create VictorGrbz/demo-reservation-btp --public --source=. --remote=origin --push` exécuté avec succès, commit initial poussé (ce `PLAN.md` suffit pour démarrer).

**Note d'exécution** : la commande `/commit` est installée globalement (`~/.claude/commands/`) — l'Artisan doit s'en servir pour tous les commits et push suivants. Lui seul gère désormais le cycle de vie Git de ce projet, le Jarvis racine n'y touche plus après cette étape.

---

## Étape 1 — Initialisation du projet — ✅ Fait

**Objectif** : scaffolder un projet Next.js (App Router) + TypeScript + Tailwind CSS, structure de dossiers de base.
**Fichiers concernés** : `package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`, `src/app/layout.tsx`, `src/app/page.tsx`, `.gitignore`.
**Destination** : `livrables/sites-web/demo-reservation-btp/`.
**Critère de fait** : `npm run dev` démarre sans erreur, page d'accueil placeholder accessible en local.

---

## Étape 2 — Direction artistique (`/impeccable teach`) — ✅ Fait

**Objectif** : obtenir la direction artistique du projet via Impeccable, avant toute mise en forme visuelle.
**Fichiers concernés** : le prompt de Direction Artistique ci-dessous (rédigé et validé par Victor).
**Destination** : à soumettre à `/impeccable teach` côté Artisan (Jarvis ne lance jamais cette commande lui-même).
**Critère de fait** : prompt validé par Victor (✅ fait, voir ci-dessous) → direction artistique produite par la session `/impeccable teach` de l'Artisan.

### Prompt Direction Artistique (validé)

> **Contexte métier** : site vitrine de démonstration pour un artisan du BTP (rénovation/construction), permettant à un client potentiel de réserver un créneau de devis / visite technique en ligne, avec une galerie des chantiers réalisés.
>
> **Public visé** : particuliers avec un projet de travaux concret (rénovation, extension), qui cherchent un artisan fiable et compétent. Ils arrivent avec un besoin précis, pas en simple curiosité.
>
> **Émotion recherchée** : la modernité technique du métier plutôt que le folklore artisanal. Penser à un artisan qui a digitalisé son suivi de chantier : précision, plans, structure, fiabilité d'un outil professionnel. Éviter le registre "mains dans la terre" ou hyper-texturé.
>
> **Distinct des projets précédents** : identité propre, indépendante des directions "Instrument Panel" (portfolio-victor) et "comptoir d'importation" (demo-boutique-en-ligne). Aucune contrainte de cohérence entre les trois.
>
> **Contraintes fonctionnelles à habiller** : page d'accueil (présentation de l'activité), galerie des chantiers réalisés (photos), calendrier de réservation de créneau devis/visite technique, formulaire de confirmation.
>
> **Anti-patterns à éviter** : aucune photo stock générique (casque de chantier souriant, poignée de main en costume devant un chantier) — la galerie doit rester crédible ou volontairement absente de visages/mises en scène si aucune vraie photo n'est disponible.
>
> **Contraintes techniques** : Next.js (App Router) + Tailwind CSS, accessibilité WCAG AA, cohérent avec les projets précédents.

**Note d'exécution pour l'Artisan** : la demande à Impeccable doit être formulée comme une nouvelle direction visuelle complète (jamais une retouche locale), condition nécessaire au déclenchement de la page de décision interactive. Sans clé `OPENAI_API_KEY` configurée, les cartes affichent uniquement palette de couleurs + description texte (pas de vraie maquette visuelle) : c'est le comportement normal attendu, pas un bug à signaler.

**Résultat** : direction retenue « planche technique d'annuaire de design » (croix de repérage, filets fins, cachet rotatif, grille 12 colonnes), choisie via la page de décision face au tirage assigné « mètre-ruban / niveau à bulle ». Système documenté dans `DESIGN.md` et `.impeccable/design.json`.

---

## Étape 3 — Page d'accueil et présentation de l'activité — ✅ Fait

**Objectif** : présenter l'artisan, ses services et sa zone d'intervention, dans le style livré par l'étape 2.
**Fichiers concernés** : `src/app/page.tsx`, `src/components/hero.tsx` (ou équivalent).
**Destination** : route racine du site.
**Critère de fait** : page complète et responsive, cohérente avec la direction artistique validée.

---

## Étape 4 — Galerie des chantiers réalisés — ❌ Abandonnée (décision Victor, 2026-08-17)

**Décision** : pas d'images pour ce projet test — pas de bucket Cloudflare R2, pas de route `/realisations` dédiée. La page d'accueil garde son teaser de réalisations en illustrations techniques abstraites (`FloorPlanIcon`, construit à l'Étape 2/3), qui reste en place.

<details>
<summary>Objectif initial (non réalisé)</summary>

**Objectif** : afficher une galerie de photos de chantiers de démonstration.
**Fichiers concernés** : `src/app/realisations/page.tsx`, `src/lib/gallery.ts`, configuration du bucket Cloudflare R2 (variables d'environnement d'accès).
**Destination** : route `/realisations`.
**Critère de fait** : la galerie s'affiche avec des images chargées depuis Cloudflare R2, responsive mobile/desktop vérifié visuellement.

</details>

---

## Étape 5 — Calendrier de réservation — ✅ Fait

**Objectif** : permettre à un visiteur de choisir un créneau disponible pour un devis / une visite technique, via un calendrier (`react-day-picker`) et un formulaire (nom, contact, adresse, description des travaux).
**Fichiers concernés** : `src/app/reservation/page.tsx`, `src/components/booking-calendar.tsx`.
**Destination** : route `/reservation`.
**Critère de fait** : le visiteur peut sélectionner un créneau disponible et soumettre le formulaire.

---

## Étape 6 — Persistance des réservations (Neon Postgres) — ✅ Fait

**Objectif** : enregistrer les demandes de réservation en base pour éviter les doublons de créneaux et permettre une page de confirmation.
**Fichiers concernés** : `src/app/reservation/actions.ts` (Server Action, pas de route API séparée), `src/db/{index,reservations}.ts`, `src/db/schema.sql`, `scripts/migrate.mjs`, variable d'environnement `DATABASE_URL`.
**Destination** : base Neon Postgres reliée au projet Vercel (provisionnée via le marketplace Vercel).
**Critère de fait** : une réservation soumise est persistée en base (contrainte d'unicité `slot_date`/`slot_time`), les créneaux déjà pris (par créneau, pas par journée) ne sont plus proposés au visiteur suivant — vérifié en local et en production.

---

## Étape 7 — Déploiement — ✅ Fait

**Objectif** : déployer le site sur Vercel et le rattacher au sous-domaine `reservation.jess-vic.ovh`.
**Fichiers concernés** : configuration Vercel du projet (variable d'environnement Neon), DNS Cloudflare.
**Destination** : `https://reservation.jess-vic.ovh`.
**Critère de fait** : le site est accessible publiquement en HTTPS, parcours de réservation complet fonctionnel en production.

**Résultat** : projet Vercel créé et lié au dépôt GitHub, domaine réclamé côté Vercel. Résolu via le wildcard DNS Cloudflare déjà en place pour `*.jess-vic.ovh` (comme `restaurant.` et `boutique.`) : aucun nouvel enregistrement DNS nécessaire. Homepage et `/reservation` (écriture Neon incluse) vérifiés en production le 2026-08-17. Vercel recommande en option un CNAME dédié (non appliqué, non bloquant).

---

## Étape 8 — Mise à jour du portfolio

**Objectif** : faire passer l'entrée correspondante de `portfolio-victor` du statut "À venir" à "En ligne".
**Fichiers concernés** : `livrables/sites-web/portfolio-victor/src/lib/site-data.ts` (slug à définir, ex. `reservation-btp`).
**Destination** : `portfolio-victor` (autre projet, autre session Artisan).
**Critère de fait** : la carte correspondante pointe vers `https://reservation.jess-vic.ovh` et affiche "En ligne".

---

## Vérification automatique

- [x] Configurer un hook `PostToolUse` dans `.claude/settings.json` du dossier `demo-reservation-btp`, déclenché après `Edit`/`Write` sur les fichiers `*.ts`/`*.tsx`, qui lance `npx tsc --noEmit` (contrôle de types) — à mettre en place par l'Artisan avant de commencer l'étape 1, pour détecter les erreurs de type au fil de l'eau plutôt qu'en fin de build.

---

## Pour Victor

Ouvre une fenêtre VS Code dédiée sur `livrables/sites-web/demo-reservation-btp/` pour lancer l'Artisan (Claude Code local) et exécuter ce PLAN.md étape par étape, en commençant par l'étape 0 (initialisation du dépôt Git), y compris la commande `/impeccable teach` de l'étape 2.
