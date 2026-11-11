import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const DETAILS_ID = "memory-air-details";

export default function MemoryAirCard({ featured }) {
  const [open, setOpen] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const labelId = useId();
  const seeCaseId = useId();

  return (
    <article
      className={`t-resize card-ma flex min-w-0 flex-col overflow-hidden rounded-2xl bg-moss-950 p-6 text-mint-50 ring-1 ring-white/10 sm:px-8 sm:py-6 dark:ring-vibe-400/20 ${
        open ? "is-open h-auto self-start" : "h-full self-stretch"
      }`}
      aria-labelledby={labelId}
    >
      <button
        type="button"
        className={`flex w-full cursor-pointer flex-col bg-transparent p-0 text-left text-inherit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vibe-400 ${
          open ? "" : "lg:flex-1"
        }`}
        aria-expanded={open}
        aria-controls={DETAILS_ID}
        aria-labelledby={`${labelId} ${seeCaseId}`}
        onClick={() => setOpen((current) => !current)}
      >
        <p className="text-sm font-semibold text-mint-200">{featured.kicker}</p>
        <h3
          id={labelId}
          className="mt-1.5 font-heading text-[1.85rem] font-bold leading-tight tracking-tight text-vibe-300 sm:text-[2.15rem]"
        >
          {featured.title}
        </h3>
        <p className="mt-2 text-[0.95rem] font-semibold text-mint-50">{featured.role}</p>
        <p className="mt-1.5 max-w-xl text-[1.02rem] leading-snug text-mint-200">{featured.lede}</p>
        <span
          className={`inline-flex items-center gap-2 text-sm font-semibold text-mint-100 ${
            open ? "mt-5" : "mt-5 lg:mt-auto lg:pt-8"
          }`}
        >
          <ChevronDown
            size={18}
            strokeWidth={2.25}
            aria-hidden="true"
            className={`shrink-0 ${reducedMotion ? "" : "card-ma-chevron"} ${
              open ? "card-ma-chevron-open" : ""
            }`}
          />
          <span id={seeCaseId}>{featured.seeCase}</span>
        </span>
      </button>

      <div
        id={DETAILS_ID}
        className={`t-resize-details ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        {...(!open ? { inert: "" } : {})}
      >
        <div className="t-resize-clip">
          <div className="card-ma-details-inner">
            <p className="mt-4 max-w-2xl text-[1.02rem] leading-normal text-mint-50">{featured.case}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-vibe-400 px-5 py-[11px] text-[0.95rem] font-semibold text-moss-950 transition-colors duration-150 hover:bg-vibe-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vibe-300"
                tabIndex={open ? undefined : -1}
              >
                {featured.cta}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-mint-100 underline decoration-mint-100/45 underline-offset-[3px] transition-colors duration-150 hover:text-vibe-300 hover:decoration-vibe-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vibe-400"
                tabIndex={open ? undefined : -1}
              >
                {featured.host}
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
