import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Épure — Rénovation intérieure & extension",
  description:
    "Réservez un créneau de devis ou de visite technique avec Épure, artisan spécialisé en rénovation intérieure et extension dans les Hauts-de-France.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {/*
          THESIS: Chaque page se lit comme une planche technique vérifiée,
          jamais comme une brochure artisan chaleureuse par défaut.
          OWN-WORLD: Papier quasi-blanc, encre quasi-noire, accent périwinkle
          unique, filets fins, croix de repérage, grotesque sans italique,
          légendes mono capitales traquées, grille 12 colonnes.
          STORY: Le visiteur comprend qu'Épure traite chaque devis avec la
          rigueur d'un plan côté, puis réserve un créneau de devis / visite
          technique en confiance.
          FIRST VIEWPORT: Bandeau sticky de tokens mono, planche hero pleine
          largeur avec croix de repérage aux coins, titre posé sur la grille,
          cachet circulaire tournant près du bouton "Réserver un créneau".
          FORM: Planche technique d'annuaire de design
          (design-annual-s-plate-section), challenger choisi face au tirage
          assigné mètre-ruban/niveau à bulle — seed d401c1ea.
          FINISH: unreviewed and undocumented is unfinished; this build ends
          with the finish review, the verdict, and DESIGN.md.
        */}
        {children}
      </body>
    </html>
  );
}
