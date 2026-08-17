"use server";

import { z } from "zod";

const reservationSchema = z.object({
  nom: z.string().trim().min(2, "Nom trop court."),
  email: z.email("Adresse email invalide."),
  telephone: z
    .string()
    .trim()
    .min(6, "Numéro de téléphone invalide.")
    .regex(/^[\d\s.+()-]+$/, "Numéro de téléphone invalide."),
  adresse: z.string().trim().min(5, "Adresse trop courte."),
  description: z
    .string()
    .trim()
    .min(10, "Décrivez le projet en quelques mots de plus."),
  date: z.iso.date("Créneau invalide."),
  slot: z.string().trim().min(1, "Créneau invalide."),
});

export type ReservationState = {
  status: "idle" | "error" | "success";
  errors?: Partial<Record<keyof z.infer<typeof reservationSchema>, string>>;
  recap?: {
    nom: string;
    date: string;
    slot: string;
  };
};

export async function submitReservation(
  _prevState: ReservationState,
  formData: FormData,
): Promise<ReservationState> {
  const parsed = reservationSchema.safeParse({
    nom: formData.get("nom"),
    email: formData.get("email"),
    telephone: formData.get("telephone"),
    adresse: formData.get("adresse"),
    description: formData.get("description"),
    date: formData.get("date"),
    slot: formData.get("slot"),
  });

  if (!parsed.success) {
    const errors: ReservationState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as keyof typeof errors;
      if (field) errors[field] = issue.message;
    }
    return { status: "error", errors };
  }

  // Mode démo : sans DATABASE_URL (Neon) configurée, la demande n'est pas
  // persistée. Elle est journalisée côté serveur et le visiteur voit quand
  // même une confirmation. La persistance réelle (et la vérification des
  // créneaux déjà pris) arrive à l'Étape 6 du projet.
  if (!process.env.DATABASE_URL) {
    console.info("[reservation] Nouvelle demande (mode démo, non persistée)", {
      ...parsed.data,
    });
  }

  return {
    status: "success",
    recap: {
      nom: parsed.data.nom,
      date: parsed.data.date,
      slot: parsed.data.slot,
    },
  };
}
