import { ArrowUpRight } from "lucide-react";

export default function LiveSiteLink({ href, children, tabIndex, tone = "dark", variant = "primary" }) {
  const isText = variant === "text";
  const className = isText
    ? "inline-flex items-center gap-1.5 text-sm font-semibold text-moss-800 underline decoration-moss-800/45 underline-offset-[3px] transition-colors duration-150 hover:text-moss-950 hover:decoration-moss-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss-800 dark:text-mint-100 dark:decoration-mint-100/45 dark:hover:text-vibe-300 dark:hover:decoration-vibe-300 dark:focus-visible:outline-vibe-400"
    : `inline-flex items-center gap-2 rounded-full bg-vibe-400 px-5 py-[11px] text-[0.95rem] font-semibold text-moss-950 transition-colors duration-150 hover:bg-vibe-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
        tone === "light"
          ? "focus-visible:outline-moss-800 dark:focus-visible:outline-vibe-300"
          : "focus-visible:outline-vibe-300"
      }`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={tabIndex}
      className={className}
    >
      {children}
      <ArrowUpRight size={isText ? 14 : 16} aria-hidden="true" />
    </a>
  );
}
