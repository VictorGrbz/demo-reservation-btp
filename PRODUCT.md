# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS. Calendrier de réservation via react-day-picker. Persistance des créneaux/demandes via Neon Postgres. Stockage des photos de chantiers via Cloudflare R2. Déploiement Vercel.

## Users

Particuliers avec un projet de travaux concret (rénovation intérieure, extension), qui cherchent un artisan fiable et compétent. Ils arrivent avec un besoin précis, pas en simple curiosité, et cherchent à réserver rapidement un créneau de devis ou de visite technique.

## Product Purpose

Site vitrine et de réservation en ligne pour **Épure**, entreprise fictive de rénovation intérieure et d'extension, servant de démonstration portfolio (projet 3/6 de la série "vitrines" définie dans `context/infra.md`). Permet à un visiteur de découvrir l'activité, consulter une galerie de réalisations, puis réserver un créneau de devis / visite technique via un calendrier avec formulaire de confirmation.

## Positioning

Un artisan qui a digitalisé son suivi de chantier : la promesse n'est pas le folklore artisanal ("mains dans la terre") mais la précision et la fiabilité d'un outil professionnel — plans, structure, rigueur de suivi. Le site doit donner la même impression de rigueur technique que le métier qu'il présente.

## Operating Context

Zone d'intervention régionale (Hauts-de-France, cohérent avec la métropole lilloise). Parcours visiteur : accueil (présentation activité/services) → galerie des réalisations → réservation d'un créneau (calendrier + formulaire nom/contact/adresse/description des travaux) → confirmation. Les créneaux déjà réservés ne doivent plus être proposés aux visiteurs suivants (persistance en base).

## Capabilities and Constraints

- Page d'accueil : présentation de l'activité, des services et de la zone d'intervention.
- Galerie de réalisations : photos de chantiers (route `/realisations`).
- Réservation : calendrier de créneaux disponibles + formulaire (route `/reservation`), persistance Neon Postgres pour éviter les doublons de créneaux et permettre une page de confirmation.
- Contraintes techniques : Next.js App Router + Tailwind CSS, accessibilité WCAG AA.
- Indépendant visuellement des autres projets de la série ("Instrument Panel" pour portfolio-victor, "comptoir d'importation" pour demo-boutique-en-ligne) : aucune contrainte de cohérence entre les trois.

## Brand Commitments

- Nom retenu pour l'entreprise fictive : **Épure** (rénovation intérieure & extension). Nom choisi pour évoquer le dessin technique précis (plans, structure), en cohérence avec le positionnement "outil professionnel digitalisé" plutôt que folklore artisanal.

## Evidence on Hand

Aucune vraie photo de chantier disponible. La galerie de réalisations doit utiliser des visuels générés/illustratifs crédibles (par exemple des rendus, plans ou schémas techniques stylisés cohérents avec le positionnement), plutôt que de simuler de fausses photos de chantier réel ou d'utiliser des photos stock génériques (casque souriant, poignée de main en costume).

## Product Principles

- Précision et structure priment sur le folklore artisanal dans tout choix visuel et rédactionnel.
- Aucune mise en scène de stock générique ; la galerie reste crédible plutôt que fausse.
- Le parcours de réservation doit rester direct : le visiteur arrive avec un besoin précis, pas en simple curiosité.
- Cohérence avec les contraintes techniques (Next.js + Tailwind, WCAG AA) sans dépendance de cohérence visuelle avec les autres projets de la série.

## Accessibility & Inclusion

Conformité WCAG AA requise (contraste, navigation clavier, formulaire de réservation accessible).
