export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M50 6C28.4 6 11 23.4 11 45c0 27.6 32.6 47.4 37.6 50.3a2.7 2.7 0 0 0 2.8 0C56.4 92.4 89 72.6 89 45 89 23.4 71.6 6 50 6Z"
        fill="currentColor"
      />
      <g stroke="#fff" strokeWidth="3.2" strokeLinecap="round">
        <path d="M38 34v-6M28.5 38.5l-4.2-4.2M47.5 38.5l4.2-4.2M24 47h-6M52 47h4" />
      </g>
      <circle cx="38" cy="47" r="8.5" fill="#fff" />
      <path
        d="M18 66c8-9 16-9 24-2s16 7 24-2"
        stroke="#fff"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
