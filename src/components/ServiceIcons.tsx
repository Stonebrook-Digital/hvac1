type IconProps = { className?: string };

/** Air conditioning — cool airflow / fan motif */
export function IconAirConditioning({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M24 10v6M24 32v6M10 24h6M32 24h6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M16.5 16.5l4.2 4.2M27.3 27.3l4.2 4.2M31.5 16.5l-4.2 4.2M20.7 27.3l-4.2 4.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Heating — flame */
export function IconHeating({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M24 8c-2 6-8 10-8 18 0 6 4 11 10 12 1-4-1-8-2-11 2 3 4 7 3 11 5-2 9-7 9-14 0-10-8-14-12-16z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M22 22c-1.5 3-3 6-2 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}

/** Indoor air quality — filter / flow */
export function IconAirQuality({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="10"
        y="14"
        width="28"
        height="20"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M14 20h20M14 26h16M14 32h20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M34 8v6M37 11h-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Maintenance — wrench + check */
export function IconMaintenance({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M14 32l8-8M18 28l-5 5a2.5 2.5 0 103.5 3.5l5-5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 14l10 10-3 3a6 6 0 01-8.5 8.5L16 24"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 38l2 2M34 20l2 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
