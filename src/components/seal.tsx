export function Seal({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      className={`text-seal ${className}`}
      aria-hidden="true"
    >
      <g className="seal-ring" style={{ transformOrigin: "80px 80px" }}>
        <path
          id="seal-circle"
          fill="none"
          d="M 80,15 A 65,65 0 1 1 79.99,15"
        />
        <text
          fill="currentColor"
          fontSize="9.5"
          letterSpacing="3"
          className="font-mono uppercase"
        >
          <textPath href="#seal-circle" startOffset="0%">
            Épure · Rénovation & Extension · Devis vérifié ·
          </textPath>
        </text>
      </g>
      <circle cx="80" cy="80" r="38" fill="none" stroke="currentColor" strokeWidth="1" />
      <text
        x="80"
        y="84"
        textAnchor="middle"
        fill="currentColor"
        fontSize="11"
        letterSpacing="1"
        className="font-mono uppercase"
      >
        Épure
      </text>
    </svg>
  );
}
