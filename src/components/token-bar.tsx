import Link from "next/link";

const tokens = [
  "RÉNOVATION",
  "EXTENSION",
  "HAUTS-DE-FRANCE",
  "DEVIS SOUS 48H",
];

export function TokenBar() {
  return (
    <header className="sticky top-0 z-40 h-[72px] border-b border-hairline bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-[0.14em] uppercase"
        >
          Épure
        </Link>
        <nav
          aria-label="Repères"
          className="hidden items-center gap-6 font-mono text-[11px] tracking-[0.14em] text-ink-soft uppercase md:flex"
        >
          {tokens.map((token) => (
            <span key={token}>{token}</span>
          ))}
        </nav>
        <Link
          href="/reservation"
          className="border border-ink bg-ink px-4 py-2 font-mono text-[11px] font-medium tracking-[0.12em] text-paper uppercase transition-transform duration-150 hover:-translate-y-0.5"
        >
          Réserver un créneau
        </Link>
      </div>
    </header>
  );
}
