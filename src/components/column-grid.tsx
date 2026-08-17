export function ColumnGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0 mx-auto grid max-w-6xl grid-cols-12 px-6 opacity-[0.06]"
      aria-hidden="true"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="border-l border-ink first:border-l-0" />
      ))}
    </div>
  );
}
