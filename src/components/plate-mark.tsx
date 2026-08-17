import { Crosshair } from "./crosshair";

export function PlateMark({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
      <Crosshair className="h-4 w-4" />
      <span className="font-mono text-[10px] tracking-[0.14em] text-ink-soft/80 uppercase">
        Pl. {number} — {label}
      </span>
    </div>
  );
}
