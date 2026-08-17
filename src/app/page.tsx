import Link from "next/link";
import { Crosshair } from "@/components/crosshair";
import { Seal } from "@/components/seal";
import { TokenBar } from "@/components/token-bar";
import { PlateMark } from "@/components/plate-mark";
import { ColumnGrid } from "@/components/column-grid";
import { FloorPlanIcon } from "@/components/floor-plan-icon";

const services = [
  {
    title: "Rénovation intérieure",
    detail:
      "Cuisine, salle de bain, second œuvre complet. Relevés précis avant chiffrage, aucune estimation à l'œil.",
  },
  {
    title: "Extension",
    detail:
      "Agrandissement au sol ou surélévation. Étude de faisabilité et dépôt de dossier réglementaire inclus.",
  },
  {
    title: "Suivi de chantier digital",
    detail:
      "Chaque étape est documentée et datée. Le client suit l'avancement comme il suivrait un plan d'exécution.",
  },
  {
    title: "Devis chiffré",
    detail:
      "Poste par poste, avec unités et quantités. Pas de forfait flou, pas de ligne « divers ».",
  },
];

const projects = [
  {
    variant: "extension" as const,
    title: "Extension — séjour",
    meta: "42 m² · 8 semaines",
  },
  {
    variant: "interieur" as const,
    title: "Rénovation — cuisine ouverte",
    meta: "18 m² · 3 semaines",
  },
  {
    variant: "combles" as const,
    title: "Aménagement de combles",
    meta: "35 m² · 6 semaines",
  },
];

export default function Home() {
  return (
    <>
      <TokenBar />
      <main className="flex-1">
        {/* Planche 01 — Hero */}
        <section className="relative overflow-hidden border-b border-hairline">
          <ColumnGrid />
          <div className="dot-matrix pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-28">
            <PlateMark number="01" label="Présentation" />

            <Crosshair className="absolute top-8 right-6" />
            <Crosshair className="absolute bottom-8 left-6 hidden md:block" />
            <Crosshair className="absolute right-6 bottom-8 hidden md:block" />

            <div className="grid gap-10 pt-6 md:grid-cols-[1fr_auto] md:items-end">
              <div className="max-w-2xl">
                <h1 className="text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] font-medium tracking-tight text-balance">
                  La précision d&apos;un plan côté, appliquée à votre chantier.
                </h1>
                <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink-soft">
                  Épure conçoit et suit vos travaux de rénovation intérieure
                  et d&apos;extension avec la même rigueur qu&apos;une planche
                  technique vérifiée : relevés précis, devis chiffré,
                  avancement documenté.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href="/reservation"
                    className="border border-ink bg-ink px-6 py-3 font-mono text-[11px] font-medium tracking-[0.12em] text-paper uppercase transition-transform duration-150 hover:-translate-y-0.5"
                  >
                    Réserver un créneau de devis
                  </Link>
                  <Link
                    href="#realisations"
                    className="border border-ink px-6 py-3 font-mono text-[11px] font-medium tracking-[0.12em] text-ink uppercase transition-transform duration-150 hover:-translate-y-0.5"
                  >
                    Voir les réalisations
                  </Link>
                </div>
              </div>
              <div className="flex justify-center md:block md:shrink-0">
                <Seal className="h-20 w-20 md:h-32 md:w-32" />
              </div>
            </div>
          </div>
        </section>

        {/* Planche 02 — Prestations */}
        <section className="relative border-b border-hairline">
          <ColumnGrid />
          <div className="relative mx-auto max-w-6xl px-6 py-24">
            <PlateMark number="02" label="Prestations" />
            <div className="grid gap-x-8 gap-y-12 pt-10 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="border-t border-hairline pt-5"
                >
                  <h2 className="text-xl font-medium">{service.title}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {service.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Planche 03 — Méthode */}
        <section className="relative border-b border-hairline bg-paper-cool/40">
          <ColumnGrid />
          <div className="relative mx-auto max-w-6xl px-6 py-24">
            <PlateMark number="03" label="Méthode" />
            <div className="grid gap-12 pt-10 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl leading-snug font-medium text-balance md:text-3xl">
                  Un suivi de chantier documenté, pas une promesse orale.
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
                  Chaque visite technique, chaque étape validée et chaque
                  écart de planning est daté et consultable. Vous savez
                  toujours où en est votre chantier, sans avoir à demander.
                </p>
              </div>
              <div
                className="border border-hairline bg-paper p-6 font-mono text-[11px] tracking-[0.08em] text-ink-soft uppercase"
                aria-hidden="true"
              >
                <div className="mb-4 flex items-center justify-between border-b border-hairline pb-3">
                  <span>Dossier — Extension séjour</span>
                  <span className="text-seal-text">Étape 3 / 6</span>
                </div>
                {[
                  ["Relevé technique", "Validé"],
                  ["Dépôt déclaration préalable", "Validé"],
                  ["Second œuvre", "En cours"],
                  ["Finitions", "À venir"],
                ].map(([step, state]) => (
                  <div
                    key={step}
                    className="flex items-center justify-between border-b border-hairline/60 py-2.5 last:border-none"
                  >
                    <span className="normal-case">{step}</span>
                    <span
                      className={
                        state === "En cours" ? "text-seal-text" : undefined
                      }
                    >
                      {state}
                    </span>
                  </div>
                ))}
                <p className="mt-4 pt-2 text-[10px] normal-case opacity-70">
                  Exemple illustratif du suivi fourni à chaque client.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Planche 04 — Réalisations */}
        <section id="realisations" className="relative border-b border-hairline">
          <ColumnGrid />
          <div className="relative mx-auto max-w-6xl px-6 py-24">
            <PlateMark number="04" label="Réalisations" />
            <div className="grid gap-8 pt-10 sm:grid-cols-3">
              {projects.map((project) => (
                <div key={project.title} className="group">
                  <div className="border border-hairline bg-paper-warm/60 p-6">
                    <FloorPlanIcon variant={project.variant} />
                  </div>
                  <h3 className="mt-4 text-sm font-medium">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] tracking-[0.1em] text-ink-soft uppercase">
                    {project.meta}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-lg text-[13px] leading-relaxed text-ink-soft">
              Schémas illustratifs représentant des types de chantiers
              réalisés. Une galerie complète avec photos réelles est en
              préparation.
            </p>
          </div>
        </section>

        {/* Planche 05 — Réservation */}
        <section className="relative overflow-hidden">
          <ColumnGrid />
          <div className="dot-matrix pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
            <PlateMark number="05" label="Réservation" />
            <h2 className="mx-auto max-w-2xl pt-10 text-[clamp(1.75rem,4vw,2.75rem)] leading-tight font-medium text-balance">
              Réservez un créneau de devis ou de visite technique.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Choisissez un créneau disponible et décrivez votre projet.
              Réponse et confirmation sous 48h ouvrées.
            </p>
            <Link
              href="/reservation"
              className="mt-10 inline-block border border-ink bg-ink px-8 py-4 font-mono text-[11px] font-medium tracking-[0.12em] text-paper uppercase transition-transform duration-150 hover:-translate-y-0.5"
            >
              Réserver un créneau
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 font-mono text-[11px] tracking-[0.1em] text-ink-soft uppercase sm:flex-row sm:items-center sm:justify-between">
          <span>Épure — Rénovation & Extension</span>
          <span>Hauts-de-France</span>
          <span>Projet démo — portfolio</span>
        </div>
      </footer>
    </>
  );
}
