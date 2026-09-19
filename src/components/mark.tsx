export function Mark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="21.5" strokeOpacity="0.55" />
      <path d="M24 4.5 L38.5 24 L24 43.5 L9.5 24 Z" strokeOpacity="0.9" />
      <path d="M24 4.5 V43.5 M9.5 24 H38.5" strokeOpacity="0.35" />
      <circle cx="24" cy="24" r="3.2" fill="currentColor" stroke="none" />
      <circle cx="24" cy="4.5" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="24" cy="43.5" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="24" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="38.5" cy="24" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}
