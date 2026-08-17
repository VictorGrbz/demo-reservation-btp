"use client";

import { useActionState, useState } from "react";
import { DayPicker } from "react-day-picker";
import { fr } from "react-day-picker/locale";
import "react-day-picker/style.css";
import { submitReservation, type ReservationState } from "@/app/reservation/actions";

const SLOTS = ["09:00", "11:00", "14:00", "16:00"];

const dayPickerClassNames = {
  root: "font-sans",
  months: "flex flex-col",
  month: "space-y-4",
  month_caption:
    "flex items-center justify-center font-mono text-[11px] tracking-[0.14em] uppercase text-ink",
  nav: "flex items-center justify-between",
  button_previous:
    "flex h-8 w-8 items-center justify-center border border-hairline text-ink hover:bg-paper-cool/40 disabled:opacity-30",
  button_next:
    "flex h-8 w-8 items-center justify-center border border-hairline text-ink hover:bg-paper-cool/40 disabled:opacity-30",
  month_grid: "w-full border-collapse",
  weekdays: "",
  weekday:
    "pb-2 font-mono text-[10px] tracking-[0.1em] text-ink-soft uppercase",
  week: "",
  day: "p-0.5 text-center",
  day_button:
    "h-10 w-10 border border-transparent font-mono text-[13px] tracking-[0.04em] text-ink hover:border-hairline disabled:pointer-events-none disabled:text-ink-soft/30",
  today: "font-medium text-seal-text",
  selected: "[&>button]:border-ink [&>button]:bg-ink [&>button]:text-paper",
  disabled: "",
  outside: "text-ink-soft/30",
  hidden: "invisible",
};

/**
 * Créneaux indisponibles de démonstration : sans persistance Neon
 * (Étape 6), cette liste illustre le comportement attendu ("un créneau
 * déjà pris n'est plus proposé") sans donnée réelle.
 */
function getDemoUnavailableDates(): Date[] {
  const dates: Date[] = [];
  for (const offset of [4, 9, 15]) {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    dates.push(d);
  }
  return dates;
}

const initialState: ReservationState = { status: "idle" };

export function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedSlot, setSelectedSlot] = useState<string | undefined>();
  const [state, formAction, pending] = useActionState(
    submitReservation,
    initialState,
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const minDate = new Date(today);
  minDate.setDate(minDate.getDate() + 2);
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 45);
  const unavailable = getDemoUnavailableDates();

  if (state.status === "success" && state.recap) {
    return (
      <div className="border border-hairline bg-paper p-8 text-center">
        <p className="font-mono text-[11px] tracking-[0.14em] text-seal-text uppercase">
          Demande enregistrée
        </p>
        <h3 className="mt-3 text-2xl font-medium text-balance">
          Merci, {state.recap.nom}.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
          Votre créneau du{" "}
          <span className="text-ink">
            {new Date(state.recap.date).toLocaleDateString("fr-FR", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}{" "}
            à {state.recap.slot}
          </span>{" "}
          est noté. Nous confirmons sous 48h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div className="border border-hairline bg-paper p-6">
        <DayPicker
          mode="single"
          locale={fr}
          selected={selectedDate}
          onSelect={(date) => {
            setSelectedDate(date);
            setSelectedSlot(undefined);
          }}
          disabled={[
            { before: minDate },
            { after: maxDate },
            { dayOfWeek: [0, 6] },
            ...unavailable,
          ]}
          classNames={dayPickerClassNames}
        />
        {selectedDate && (
          <div className="mt-6 border-t border-hairline pt-6">
            <p className="font-mono text-[11px] tracking-[0.14em] text-ink-soft uppercase">
              Créneaux disponibles
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`border px-4 py-2 font-mono text-[13px] tracking-[0.04em] ${
                    selectedSlot === slot
                      ? "border-ink bg-ink text-paper"
                      : "border-hairline text-ink hover:border-ink"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <form action={formAction} className="space-y-5">
        <input
          type="hidden"
          name="date"
          value={selectedDate ? toISODate(selectedDate) : ""}
        />
        <input type="hidden" name="slot" value={selectedSlot ?? ""} />

        <Field label="Nom" name="nom" error={state.errors?.nom} required />
        <Field
          label="Email"
          name="email"
          type="email"
          error={state.errors?.email}
          required
        />
        <Field
          label="Téléphone"
          name="telephone"
          type="tel"
          error={state.errors?.telephone}
          required
        />
        <Field
          label="Adresse du chantier"
          name="adresse"
          error={state.errors?.adresse}
          required
        />
        <div>
          <label
            htmlFor="description"
            className="font-mono text-[11px] tracking-[0.12em] text-ink-soft uppercase"
          >
            Description des travaux
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
            className="mt-2 w-full border border-hairline bg-paper px-3 py-2 text-[15px] text-ink"
          />
          {state.errors?.description && (
            <p className="mt-1 text-[13px] text-red-700">
              {state.errors.description}
            </p>
          )}
        </div>

        {!selectedDate || !selectedSlot ? (
          <p className="font-mono text-[11px] tracking-[0.1em] text-ink-soft uppercase">
            Choisissez une date puis un créneau pour continuer.
          </p>
        ) : null}

        <button
          type="submit"
          disabled={!selectedDate || !selectedSlot || pending}
          className="w-full border border-ink bg-ink px-6 py-3 font-mono text-[11px] font-medium tracking-[0.12em] text-paper uppercase transition-transform duration-150 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-40"
        >
          {pending ? "Envoi…" : "Confirmer la demande"}
        </button>
      </form>
    </div>
  );
}

function toISODate(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[11px] tracking-[0.12em] text-ink-soft uppercase"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-hairline bg-paper px-3 py-2 text-[15px] text-ink"
      />
      {error && <p className="mt-1 text-[13px] text-red-700">{error}</p>}
    </div>
  );
}
