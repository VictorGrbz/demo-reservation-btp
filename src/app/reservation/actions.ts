"use server";

import { z } from "zod";
import { insertReservation, SlotTakenError } from "@/db/reservations";

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

  try {
    await insertReservation(parsed.data);
  } catch (error) {
    if (error instanceof SlotTakenError) {
      return {
        status: "error",
        errors: { slot: "Ce créneau vient d'être réservé, choisissez-en un autre." },
      };
    }
    throw error;
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
