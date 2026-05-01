/** Subtle hot/cold mark — blue cool side, orange warm side (no black field). */
export function ConquerMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 88 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="conquer-cool" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-strong)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="conquer-warm" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-strong)" stopOpacity="0.88" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <path
        d="M44 4 L80 22 V58 Q80 82 44 96 Q8 82 8 58 V22 Z"
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="1.25"
        fill="var(--surface)"
      />
      <path
        d="M44 4 L80 22 V58 Q80 82 44 96 L44 4Z"
        fill="url(#conquer-cool)"
        opacity="0.85"
      />
      <path
        d="M44 4 L8 22 V58 Q8 82 44 96 L44 4Z"
        fill="url(#conquer-warm)"
        opacity="0.85"
      />
      <path
        d="M44 8 L44 92 M14 26 L74 26"
        stroke="currentColor"
        strokeOpacity="0.08"
        strokeWidth="1"
      />
    </svg>
  );
}
