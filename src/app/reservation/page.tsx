import { TokenBar } from "@/components/token-bar";
import { PlateMark } from "@/components/plate-mark";
import { BookingCalendar } from "@/components/booking-calendar";

export default function ReservationPage() {
  return (
    <>
      <TokenBar />
      <main className="flex-1">
        <section className="relative mx-auto max-w-6xl px-6 py-24">
          <PlateMark number="05" label="Réservation" />
          <h1 className="max-w-xl pt-10 text-3xl font-medium text-balance md:text-4xl">
            Réservez un créneau de devis ou de visite technique.
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Choisissez une date disponible, un créneau, puis décrivez votre
            projet. Réponse et confirmation sous 48h ouvrées.
          </p>
          <div className="mt-12">
            <BookingCalendar />
          </div>
        </section>
      </main>
    </>
  );
}
