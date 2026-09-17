export function SquiggleArrow({ className }: { className?: string }) {
  return (
    <svg
      width="60"
      height="40"
      viewBox="0 0 60 40"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M2 6C14 2 20 18 32 14C40 11 38 24 50 22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 7"
      />
      <path
        d="M42 16L51 23L41 27"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function SquiggleUnderline({ className }: { className?: string }) {
  return (
    <svg width="120" height="14" viewBox="0 0 120 14" fill="none" aria-hidden className={className}>
      <path
        d="M2 8C20 2 30 12 48 7C66 2 76 12 94 6C102 3 110 5 118 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
