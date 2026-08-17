import Link from "next/link";
import { TokenBar } from "@/components/token-bar";
import { PlateMark } from "@/components/plate-mark";

export default function ReservationPage() {
  return (
    <>
      <TokenBar />
      <main className="flex-1">
        <section className="relative mx-auto max-w-6xl px-6 py-24">
          <PlateMark number="05" label="Réservation" />
          <h1 className="max-w-xl pt-10 text-3xl font-medium text-balance md:text-4xl">
            Le calendrier de réservation arrive à l&apos;étape suivante du
            projet.
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Cette page accueillera le calendrier de créneaux disponibles et
            le formulaire de demande de devis / visite technique.
          </p>
          <Link
            href="/"
            className="mt-10 inline-block border border-ink px-6 py-3 font-mono text-[11px] font-medium tracking-[0.12em] text-ink uppercase transition-transform duration-150 hover:-translate-y-0.5"
          >
            Retour à l&apos;accueil
          </Link>
        </section>
      </main>
    </>
  );
}
