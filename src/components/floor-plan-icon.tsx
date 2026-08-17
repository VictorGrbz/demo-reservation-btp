const variants = {
  extension: (
    <>
      <rect x="10" y="30" width="60" height="60" />
      <rect x="70" y="55" width="40" height="35" />
      <line x1="10" y1="60" x2="70" y2="60" />
      <line x1="40" y1="30" x2="40" y2="60" />
    </>
  ),
  interieur: (
    <>
      <rect x="10" y="15" width="100" height="70" />
      <line x1="45" y1="15" x2="45" y2="55" />
      <line x1="45" y1="55" x2="110" y2="55" />
      <line x1="75" y1="55" x2="75" y2="85" />
    </>
  ),
  combles: (
    <>
      <path d="M 10 60 L 60 15 L 110 60 L 110 90 L 10 90 Z" />
      <line x1="10" y1="60" x2="110" y2="60" />
      <line x1="60" y1="15" x2="60" y2="60" />
    </>
  ),
};

export function FloorPlanIcon({
  variant,
  className = "",
}: {
  variant: keyof typeof variants;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 100"
      className={`h-full w-full text-ink-soft ${className}`}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      {variants[variant]}
      <line x1="10" y1="94" x2="110" y2="94" strokeDasharray="2 2" />
      <line x1="10" y1="92" x2="10" y2="96" />
      <line x1="110" y1="92" x2="110" y2="96" />
    </svg>
  );
}
