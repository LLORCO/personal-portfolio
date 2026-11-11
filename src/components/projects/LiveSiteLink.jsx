import { ArrowUpRight } from "lucide-react";

export default function LiveSiteLink({ href, children, tabIndex, tone = "dark" }) {
  const focusRing =
    tone === "light"
      ? "focus-visible:outline-moss-800 dark:focus-visible:outline-vibe-300"
      : "focus-visible:outline-vibe-300";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={tabIndex}
      className={`inline-flex items-center gap-2 rounded-full bg-vibe-400 px-5 py-[11px] text-[0.95rem] font-semibold text-moss-950 transition-colors duration-150 hover:bg-vibe-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${focusRing}`}
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}
