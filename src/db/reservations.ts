import { getSql } from "@/db";

export type TakenSlot = { date: string; slot: string };

export async function getTakenSlots(
  fromDate: string,
  toDate: string,
): Promise<TakenSlot[]> {
  const sql = getSql();
  const rows = await sql`
    SELECT slot_date::text AS slot_date, slot_time
    FROM reservations
    WHERE slot_date BETWEEN ${fromDate} AND ${toDate}
  `;
  return (rows as { slot_date: string; slot_time: string }[]).map((row) => ({
    date: row.slot_date,
    slot: row.slot_time,
  }));
}

export class SlotTakenError extends Error {}

export async function insertReservation(input: {
  nom: string;
  email: string;
  telephone: string;
  adresse: string;
  description: string;
  date: string;
  slot: string;
}) {
  const sql = getSql();
  try {
    await sql`
      INSERT INTO reservations (nom, email, telephone, adresse, description, slot_date, slot_time)
      VALUES (${input.nom}, ${input.email}, ${input.telephone}, ${input.adresse}, ${input.description}, ${input.date}, ${input.slot})
    `;
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "23505"
    ) {
      throw new SlotTakenError("Ce créneau vient d'être réservé.");
    }
    throw error;
  }
}
