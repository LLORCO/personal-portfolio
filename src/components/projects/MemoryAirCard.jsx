import { ChevronDown } from "lucide-react";
import { useId, useLayoutEffect, useState } from "react";
import { useDesktopInitialOpen } from "../../hooks/useDesktopMedia";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import LiveSiteLink from "./LiveSiteLink";
import ProjectPicture from "./ProjectPicture";

const DETAILS_ID = "memory-air-details";

export default function MemoryAirCard({ featured }) {
  const [open, setOpen] = useDesktopInitialOpen();
  const [ready, setReady] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const labelId = useId();

  useLayoutEffect(() => {
    setReady(true);
  }, []);

  const toggleLabel = open ? featured.hideCase : featured.seeCase;

  return (
    <article
      className={`t-resize card-ma flex min-w-0 flex-col self-start overflow-hidden rounded-2xl bg-moss-950 p-6 text-mint-50 ring-1 ring-white/10 sm:px-8 sm:py-6 dark:ring-vibe-400/20 ${
        open ? "is-open" : ""
      } ${ready ? "is-ready" : ""}`}
      aria-labelledby={labelId}
    >
      <header>
        <p className="text-sm font-semibold text-mint-200">{featured.kicker}</p>
        <h3
          id={labelId}
          className="mt-1.5 font-heading text-[1.85rem] font-bold leading-tight tracking-tight text-vibe-300 sm:text-[2.15rem]"
        >
          {featured.title}
        </h3>
        <p className="mt-2 text-[0.95rem] font-semibold text-mint-50">{featured.role}</p>
        <p className="mt-1.5 max-w-xl text-[1.02rem] leading-snug text-mint-200">{featured.lede}</p>
      </header>

      <div
        id={DETAILS_ID}
        className={`t-resize-details ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        {...(!open ? { inert: "" } : {})}
      >
        <div className="t-resize-clip">
          <div className="card-ma-details-inner">
            <figure className="mt-4 overflow-hidden rounded-[14px] bg-moss-950 p-2.5 ring-1 ring-white/15">
              <div className="mb-2 flex items-center gap-1.5 px-1.5" aria-hidden="true">
                <span className="h-[9px] w-[9px] rounded-full bg-vibe-400" />
                <span className="h-[9px] w-[9px] rounded-full bg-mint-200/40" />
                <span className="h-[9px] w-[9px] rounded-full bg-mint-200/40" />
                <span className="ml-2.5 text-sm text-mint-200">{featured.host}</span>
              </div>
              <ProjectPicture
                preview={featured.preview}
                className="block h-auto w-full rounded-[8px]"
              />
            </figure>
            <p className="mt-3.5 max-w-2xl text-[1.02rem] leading-normal text-mint-50">{featured.case}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              <LiveSiteLink href={featured.url} tabIndex={open ? undefined : -1}>
                {featured.cta}
              </LiveSiteLink>
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

      <button
        type="button"
        className="mt-4 inline-flex w-fit cursor-pointer items-center gap-2 bg-transparent p-0 text-sm font-semibold text-mint-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vibe-400"
        aria-expanded={open}
        aria-controls={DETAILS_ID}
        onClick={() => setOpen((current) => !current)}
      >
        <ChevronDown
          size={18}
          strokeWidth={2.25}
          aria-hidden="true"
          className={`shrink-0 ${reducedMotion ? "" : "card-ma-chevron"} ${
            open ? "card-ma-chevron-open" : ""
          }`}
        />
        {toggleLabel}
      </button>
    </article>
  );
}
