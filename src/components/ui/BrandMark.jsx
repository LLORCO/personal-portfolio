/** Inline copy of /favicon.svg so the mark stays sharp in both themes. */
export default function BrandMark({ className = "h-10 w-10" }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} rounded-lg ring-1 ring-stone-200 dark:ring-stone-700`}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="48" height="48" rx="10" fill="white" />
      <circle cx="36" cy="10" r="5.5" stroke="black" strokeWidth="5" />
      <circle cx="25" cy="10" r="5.5" stroke="black" strokeWidth="5" />
      <circle cx="29.5" cy="31.5" r="12" stroke="black" strokeWidth="5" />
      <circle cx="18.5" cy="31.5" r="12" fill="#F5F5F5" stroke="black" strokeWidth="5" />
      <rect x="17" y="8" width="5" height="24" rx="2.5" fill="black" />
      <rect x="29" y="10" width="4" height="22" fill="black" />
      <rect x="19" y="42" width="12" height="4" fill="black" />
      <rect x="39" y="10" width="5" height="22" fill="black" />
      <rect x="22" y="10" width="6" height="21" fill="white" />
      <rect x="33" y="10" width="6" height="21" fill="white" />
      <rect x="28" y="21" width="7" height="7" fill="white" />
    </svg>
  );
}
