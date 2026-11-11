import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const DETAILS_ID = "memory-air-details";

export default function MemoryAirCard({ featured }) {
  const [open, setOpen] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const labelId = useId();

  return (
    <article
      className={`t-resize card-ma min-w-0 self-start overflow-hidden rounded-2xl bg-moss-950 p-6 text-mint-50 ring-1 ring-white/10 sm:px-8 sm:py-6 dark:ring-vibe-400/20 ${
        open ? "is-open" : ""
      }`}
      aria-labelledby={labelId}
    >
      <button
        type="button"
        className="flex w-full cursor-pointer flex-col bg-transparent p-0 text-left text-inherit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vibe-400"
        aria-expanded={open}
        aria-controls={DETAILS_ID}
        onClick={() => setOpen((current) => !current)}
      >
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm font-semibold text-mint-200">{featured.kicker}</p>
          <ChevronDown
            size={20}
            strokeWidth={2.25}
            aria-hidden="true"
            className={`mt-0.5 shrink-0 text-mint-200 ${
              reducedMotion ? "" : "card-ma-chevron"
            } ${open ? "card-ma-chevron-open" : ""}`}
          />
        </div>
        <h3
          id={labelId}
          className="mt-1.5 font-heading text-[1.85rem] font-bold leading-tight tracking-tight text-vibe-300 sm:text-[2.15rem]"
        >
          {featured.title}
        </h3>
        <p className="mt-2 text-[0.95rem] font-semibold text-mint-50">{featured.role}</p>
        <p className="mt-1.5 max-w-xl text-[1.02rem] leading-snug text-mint-200">{featured.lede}</p>
      </button>

      <div
        id={DETAILS_ID}
        className={`t-resize-details ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        {...(!open ? { inert: "" } : {})}
      >
        <div className="t-resize-clip">
          <div className="card-ma-details-inner">
            <figure className="mt-[18px] overflow-hidden rounded-[14px] bg-moss-900 p-2.5" aria-hidden="true">
              <div className="flex items-center gap-1.5 px-1.5 pb-2">
                <span className="h-[9px] w-[9px] rounded-full bg-vibe-400" />
                <span className="h-[9px] w-[9px] rounded-full bg-mint-200/40" />
                <span className="h-[9px] w-[9px] rounded-full bg-mint-200/40" />
                <span className="ml-2.5 text-sm text-mint-200">{featured.host}</span>
              </div>
              <div className="h-36 w-full rounded-lg bg-mint-50 sm:h-52" />
            </figure>
            <p className="mt-3.5 max-w-2xl text-[1.02rem] leading-normal text-mint-50">{featured.case}</p>
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-vibe-400 px-5 py-[11px] text-[0.95rem] font-semibold text-moss-950 transition-colors duration-150 hover:bg-vibe-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vibe-300"
              tabIndex={open ? undefined : -1}
            >
              {featured.cta}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
