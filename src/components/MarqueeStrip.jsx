import { marqueeTokens } from "../data/content";

export default function MarqueeStrip() {
  const row = (dup) => (
    <span
      className="flex shrink-0 items-center gap-8 px-4 py-2.5 sm:gap-12 sm:px-6"
      aria-hidden={dup ? true : undefined}
    >
      {marqueeTokens.map((t) => (
        <span
          key={`${dup ? "d" : "n"}-${t}`}
          className="font-heading text-xs font-bold tracking-[0.2em] text-mint-100 sm:text-sm"
        >
          {t}
        </span>
      ))}
    </span>
  );

  return (
    <div className="w-full overflow-hidden rounded-xl border border-stone-300 bg-moss-950 shadow-sm dark:border-stone-700">
      <div className="portfolio-marquee__track motion-reduce:hidden" aria-hidden="true">
        {row(false)}
        {row(true)}
      </div>
      <div className="hidden flex-wrap justify-center gap-x-4 gap-y-2 px-3 py-2.5 motion-reduce:flex">
        {marqueeTokens.map((t) => (
          <span key={`static-${t}`} className="font-heading text-xs font-bold tracking-[0.18em] text-mint-100">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
